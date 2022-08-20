const express = require('express');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const { environment } = require('./config');
const isProduction = environment === 'production';

const app = express();

// Connect the morgan middleware for logging information about requests and responses:
app.use(morgan('dev'));

// cookie-parser middleware for parsing cookies and the express.json middleware for parsing JSON bodies
app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
        // add the crossOriginResourcePolicy to the helmet middleware with a policy of cross-origin. This will allow images with URLs to render in deployment
        policy: "cross-origin"
    })
);

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
        }
    })
);

app.use(routes);

module.exports = app;
