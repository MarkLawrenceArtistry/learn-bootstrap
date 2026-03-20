const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.status(200).json({success:true,data:"Connected successfully"})
})

app.listen(PORT, () => {
    console.log(`The port is listening to http://localhost:3000`)
})