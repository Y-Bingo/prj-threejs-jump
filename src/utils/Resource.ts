import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EResourceType } from './Contants';
import { EventEmitter } from './EventEmitter';

/**
 * Resource Loader
 */
export class Resource extends EventEmitter {
	public sources: any;
	public items: any;
	private toLoad: number;
	private loaded: number;
	private loaders: { [type: EResourceType | string]: THREE.Loader };

	/**
	 *
	 */
	constructor() {
		super();

		// Setup
		this.items = {};
	}

	private setLoaders(): void {
		this.loaders = {};
		// TODO Draco Loader
		// this.loaders.gltfLoader = new GLTFLoader();
		// this.loaders.textureLoader = new THREE.TextureLoader();
		// this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
	}

	private loadLoader(type: EResourceType): THREE.Loader {
		let loader = null;
		switch (type) {
			case EResourceType.CUBE_TEXTURE:
				loader = new THREE.CubeTextureLoader();
				break;
			case EResourceType.GLTF_MODEL:
				loader = new GLTFLoader();
				break;
			case EResourceType.TEXTURE:
				loader = new THREE.TextureLoader();
				break;
		}
		this.loaders[type] = loader;
		return loader;
	}

	private startLoading(): void {
		// load each source
		for (const source of this.sources) {
			this.loadResource(source);
		}
	}

	private getLoader(type: EResourceType): THREE.Loader {
		if (this.loaders[type]) return this.loaders[type];
		return this.loadLoader(type);
	}

	private loadResource(source): void {
		let loader = this.getLoader(source.type);
		if (!loader) {
			console.warn(`[RES ERR]: can't load type=${source.type} resource, load ${source.path} fail`);
			return;
		}
		loader['load'](source.path, file => {
			this.sourceLoaded(source, file);
		});
	}

	private sourceLoaded(source: any, file: any): void {
		this.items[source.name] = file;
		this.loaded++;

		if (this.loaded === this.toLoad) {
			this.trigger('loaded');
		}
	}

	public loadConfig(source: any): void {
		this.sources = source;
		this.toLoad = this.sources.length;
		this.loaded = 0;

		this.setLoaders();
		this.startLoading();
	}

	public getRes(resKey: string): THREE.Texture | GLTF | THREE.CubeTexture {
		return this.items[resKey] || null;
	}
}

export const RES = new Resource();
