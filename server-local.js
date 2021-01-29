const express = require('express')
const app = express()
const port = 8080

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.get('*', function(req, res){
  res.status(404).send("Page Not Found");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
