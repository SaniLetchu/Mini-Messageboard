const moment = require('moment');

const messages = [
  {
    title: "Short message",
    message: "Hi there!",
    username: "Amando",
    date: moment()
      .startOf('day')
      .fromNow(),
  },
  {
    title: "I was here!",
    message: "Hello World!",
    username: "Charles",
    date: moment()
    .startOf('hour')
    .fromNow(),
  }
]

module.exports = messages