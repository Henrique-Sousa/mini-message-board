var express = require('express');
var router = express.Router();

var messages = [ 
  { text: 'Hi there!', user: 'Amando', added: new Date() },
  { text: 'Hello World!', user: 'Charles', added: new Date() }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message', messages: messages });
});

router.post('/new', function(req, res, next) {
  var messageText = req.body.message_text;
  var messageUser = req.body.message_user;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

module.exports = router;
