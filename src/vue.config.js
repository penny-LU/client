module.exports = {
    assetsDir: 'static',
    devServer: {
      proxy: {
        '/api': {  //之后就使用/api代指根路径
            target: 'https://13.75.34.176:443', // 这是根路径
            changeOrigin: true,
            pathRewrite: {
              '^/api': ''
            }
        }
      }
    }
}
