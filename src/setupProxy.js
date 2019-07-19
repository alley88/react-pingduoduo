const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/proxy', { 
    target: 'http://mobile.yangkeduo.com',
    changeOrigin: true,
    
  }));
};