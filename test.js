import tape from 'tape';
import polygon from './index';

const RADIUS = 1;

tape(
	'A polygon of 4 sides should return 4 points',
	test => {
		test.equal(polygon(4)(RADIUS).length, 4);
		test.end();
	}
);

tape(
	'A polygon of 10 sides should return 10 points',
	test => {
		test.equal(polygon(10)(RADIUS).length, 10);
		test.end();
	}
);

tape(
	'Polygons may have different radius',
	test => {
		test.equal(2 * polygon(3)(RADIUS)[0][1], polygon(3)(RADIUS * 2)[0][1]);
		test.end();
	}
);

tape(
	'Polygons with different radius should be different',
	test => {
		test.notEqual(polygon(3)(RADIUS)[0][1], polygon(3)(RADIUS * 2)[0][1]);
		test.end();
	}
);
