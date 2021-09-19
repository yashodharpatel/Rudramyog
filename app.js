const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use('/src', express.static('src'));
app.use('/views', express.static('views'));
app.use(express.urlencoded());

// ENDPOINTS
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

// START THE SERVER
app.listen(port, () => {
	console.log(`The Application is running successfully on port ${port}`);
});