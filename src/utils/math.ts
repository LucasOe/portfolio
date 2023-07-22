export const negativeValues = (array: number[]): number => {
	return array.filter((num) => num <= 0).length;
};

export const lerp = (x: number, y: number, t: number): number => {
	return x + t * (y - x);
};

export const clamp = (num: number, min: number, max: number): number => {
	return Math.min(Math.max(num, min), max);
};
