const polygon = sides => radius => {
	const alpha = 2 * Math.PI / sides;
	const result = [];
	for (let i = 0; i < sides; i++) {
		result.push([
			radius * Math.cos((Math.PI / 2) - (i * alpha)),
			radius * Math.sin((-Math.PI / 2) + (i * alpha))
		]);
	}
	return result;
};

export default polygon;
