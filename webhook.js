// for Facebook verification
app.get('/webhook/', function (req, res) {
      if (req.query['hub.verify_token'] === '0750ef0a-e60b-46c0-8154-b13d57c686fd') {
        res.send(req.query['hub.challenge'])
    }
    res.send('Error, wrong token')
})
