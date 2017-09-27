const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');

app.use(require('prerender-node').set('prerenderToken', 'u2iaIg93ehj1Wuji4pVj'));

app.use(history());

app.use(express.static(__dirname + '/dist'));

app.set('port', (process.env.PORT || 8081));

app.listen(app.get('port'), () => {
  console.log(`Server launched on ${process.env.port || 8081}`);
});
