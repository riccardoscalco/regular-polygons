import babel from 'rollup-plugin-babel';

export default {
	entry: 'test.js',
	format: 'cjs',
	plugins: [
		babel()
	],
	dest: 'test-build.js'
};
