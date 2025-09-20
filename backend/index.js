const express = require('express')
const app = express()
const port = 3000

const memos = ['메모1 내용','메모2 내용','메모3 내용',];

app.get('/api/memos', (req, res) => {
  res.send(memos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})