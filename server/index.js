const app = require( './server.js');
let port = 3000;

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`)
});