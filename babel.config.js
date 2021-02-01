// TODO This is all copied from Exercism. Update it.
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
				useBuiltIns: 'entry',
				corejs: 3,
			},
		],
		'@babel/preset-typescript',
	],
	plugins: [
		'@babel/proposal-class-properties',
		'@babel/proposal-object-rest-spread',
		'@babel/plugin-syntax-bigint',
	],
}
