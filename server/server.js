const app = require('connect')();
const serveStatic = require('serve-static');
const http = require('http');
const swaggerTools = require('swagger-tools');
const jsyaml = require('js-yaml');
const fs = require('fs');

const serverPort = process.env.NODE_ENV === 'production' ? 8080 : 8081;
const path = require('path');
const options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development',
};

const spec = fs.readFileSync(path.join(__dirname, './api/swagger.yaml'), 'utf8');
const swaggerDoc = jsyaml.safeLoad(spec);

swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {

  app.use(serveStatic('app', {
    index: ['index.html', 'index.htm'],
  }));

  app.use(middleware.swaggerMetadata());

  app.use(middleware.swaggerValidator());

  app.use(middleware.swaggerRouter(options));

  app.use(middleware.swaggerUi());

  http.createServer(app).listen(process.env.PORT || serverPort, () => {});
});
