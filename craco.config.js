const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@typs': path.resolve(__dirname, 'src/types'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  typescript: {
    enableTypeChecking: true,
  },
}
