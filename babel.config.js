module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      '@babel/preset-flow',
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: 'commonjs',
        },
      ],
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
  }
}
