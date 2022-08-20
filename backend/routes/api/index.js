const router = require('express').Router();

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});
/*
fetch('/api/test', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": '1kws4wLD-RMSJ2MIbpjQfQP7lsXydaMagVIM'
    },
    body: JSON.stringify({ hello: 'world' })
}).then(res => res.json()).then(data => console.log(data));
*/




module.exports = router;
