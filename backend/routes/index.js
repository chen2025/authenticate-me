const express = require('express');
const router = express.Router();

const apiRouter = require('./api');

router.use('/api', apiRouter);

// allow any developer to re-set the CSRF token cookie XSRF-TOKEN
// setting a cookie on the response with the name of XSRF-TOKEN to the value of the req.csrfToken method's return.
// then, send the token as the response for easy retrieval.
router.get("/api/csrf/restore", (req, res) => {
  const csrfToken = req.csrfToken();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});

module.exports = router;
