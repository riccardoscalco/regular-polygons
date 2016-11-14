'use strict';

var polygon = function polygon(sides) {
	return function (radius) {
		var alpha = 2 * Math.PI / sides;
		var result = [];
		for (var i = 0; i < sides; i++) {
			result.push([radius * Math.cos(Math.PI / 2 - i * alpha), radius * Math.sin(-Math.PI / 2 + i * alpha)]);
		}
		return result;
	};
};

module.exports = polygon;
