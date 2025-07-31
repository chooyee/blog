require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public')); // makes anything from the public folder accessible from root url

// Templating engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});