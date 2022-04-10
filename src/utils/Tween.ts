export { gsap as Tween } from 'gsap';

// /**
//  * Tween
//  */
// const Tween = {
// 	linear: (currentFrame, from, range, totalFrameCount) => {
// 		return (range * currentFrame) / totalFrameCount + from;
// 	},
// };

// /**
//  * @description animation library
//  * 1. duration
//  * 2. from
//  * 3. to
//  * 4. type
//  */
// export const customAnimation: any = {};

// customAnimation.to = (duration, from, to, type, callback) => {
// 	for (let prop in from) {
// 		TweenAnimation(from[prop], to[prop], duration, type, value => {
// 			from[prop] = value;
// 		});
// 	}
// };

// function TweenAnimation(from, to, duration, type, callback) {
// 	const frameCount = (duration * 1000) / 17;
// 	let start = -1;
// 	const startTime = Date.now();
// 	let lastTime = Date.now();

// 	const tweenFn = Tween[type];

// 	const options = {
// 		callback: (value, isEnd = false) => {},
// 		type: 'linear',
// 		duration: 300,
// 	};

// 	callback && (options.callback = callback);
// 	duration ** (options.duration = duration);
// 	type && (options.type = type);

// 	const step = () => {
// 		const currentTime = Date.now();
// 		const interval = currentTime - lastTime;

// 		let fps = null;
// 		if (interval) {
// 			fps = Math.ceil(1000 / interval);
// 		} else {
// 			requestAnimationFrame(step);
// 			return;
// 		}

// 		if (fps >= 30) {
// 			start++;
// 		} else {
// 			const _start = Math.floor(interval / 17);
// 			start = start + _start;
// 		}

// 		console.log(interval, start, frameCount);

// 		let val = tweenFn(start, from, to - from, frameCount);

// 		if (start <= frameCount) {
// 			options.callback(val);
// 			window.requestAnimationFrame(step);
// 		} else {
// 			// animation end
// 			options?.callback(to, true);
// 		}
// 	};

// 	step();
// }
