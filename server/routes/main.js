const express = require('express');
const router = express.Router();

//Routes
router.get('/', (req, res) => {
    res.send('Hello from the main route!');
});

module.exports = router;