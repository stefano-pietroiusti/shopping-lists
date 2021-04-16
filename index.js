const express = require('express');
const bodyParser = require('body-parser');
// const jwt = require('express-jwt'); // to implement authorisation in seperate routes config and controller 
// const jwksRsa = require('jwks-rsa');

const config = require('./common/config.js');

const app = express();
const router = require('./routes');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());

router.routesConfig(app);

app.listen(config.port, function () {
    console.log(`app listening at port ${config.port}`);
});
