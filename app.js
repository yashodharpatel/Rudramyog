const sgmail = require('@sendgrid/mail');
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;
const API_KEY = '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';
sgmail.setApiKey(API_KEY);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use('/src', express.static('src'));
app.use('/views', express.static('views'));
app.use(express.urlencoded());

// ENDPOINTS
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.post('/views/contact.html', (req, res) => {
	let Name = req.body.Name;
	let Email = req.body.Email;
	let Phone = req.body.Phone;
	let Subject = req.body.Subject;
	let Message = req.body.Message;

	const responseMessage = {
		to: "rudramyog@gmail.com",
		from: {
			name: `${Name}`,
			email: "patelyashodhar012@gmail.com"
		},
		subject: `${Subject}`,
		text: `	Name    - ${Name}, 
				Email   - ${Email}, 
				Phone   - ${Phone}, 
				Subject - ${Subject}, 
				Message - ${Message}`,
		html: ` <b> Name    - </b> ${Name} <br> 
				<b> Email   - </b> ${Email} <br> 
				<b> Phone   - </b> ${Phone} <br> 
				<b> Subject - </b> ${Subject} <br> 
				<b> Message - </b> ${Message} <br> `
	};

	sgmail.send(responseMessage)
		.then((response) => {
			console.log('Reponse email sent...');
		}).catch((error) => {
			console.log(error.responseMessage);
		});

	const submittedMessage = {
		to: `${Email}`,
		from: {
			name: "Rudram yog",
			email: "rudramyog@gmail.com"
		},
		subject: "Contact form at rudramyog submitted successfully",
		text: "Thanks for submitting contact form. We will contact you soon. Team Rudramyog",
		html: "<b>Thanks for submitting contact form. We will contact you soon.</b><br><br>Team Rudramyog"
	};

	sgmail.send(submittedMessage)
		.then((response) => {
			console.log('Submit email sent...');
		}).catch((error) => {
			console.log(error.submittedMessage);
		});

	res.status(200).sendFile(__dirname + '/views/contact.html');
});

// START THE SERVER
app.listen(port, () => {
	console.log(`The Application is running successfully on port ${port}`);
});