const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // The path you want to proxy (e.g., /api)
    createProxyMiddleware({
      target: 'http://127.0.0.1:8000', // The URL of your Laravel backend
      changeOrigin: true,
    })
  );
};
