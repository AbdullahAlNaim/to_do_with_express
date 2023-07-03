const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('views'))
app.use(express.static('styles'))
app.use(express.static('scripts'))

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Listening to port ${port}...`)
})