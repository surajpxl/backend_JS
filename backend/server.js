const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/data', (req, res) => {
    const user = [{
        name: "jarvis",
        profession: "AI",
        Address: "server"
    },
    {
        name: "jarvis",
        profession: "AI",
        Address: "server"
    },
    {
        name: "jarvis",
        profession: "AI",
        Address: "server"
    }
]
    res.send(user)
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})