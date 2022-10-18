const express = require('express');
const router = express.Router();
const moment = require('moment');
const messages = require('../public/javascripts/messages')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form', { title: "Mini Messageboard"})
})

router.post('/', function(req, res, next) {
  const newMessage = {
    title: req.body.title,
    message: req.body.message,
    username: req.body.username,
    date: moment()
      .startOf('hour' - 1)
      .fromNow(),
  }
  messages.push(newMessage)
  res.redirect('/')
})

module.exports = router
