require('dotenv').config();
let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
let cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

let transport = {
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
}
let transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/', (req, res, next) => {
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var email = req.body.email
  var message = req.body.message
  var content = `First name: ${firstName}\n Last name: ${lastName} \n Email: ${email} \n Message: \n ${message} `
  var mail = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: 'New Message from Contact Form',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })

      console.log(res)
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

app.listen(3080, () => {
    console.log(`Server is running on port 3080`)
})