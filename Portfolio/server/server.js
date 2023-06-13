let express = require('express');
let router = express.Router();
let nodemailer = require('nodemailer');
let cors = require('cors');
const creds = require('./config');

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)

let transport = {
    service: 'gmail',
    auth: {
        user: creds.USER,
        pass: creds.PASS
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
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  var mail = {
    from: '6lv1boo@gmail.com',
    to: '6lv1boo@gmail.com', 
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