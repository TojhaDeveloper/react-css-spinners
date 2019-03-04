const { createElement } = require('react')
const { Spinner } = require('react-css-spinners')
const ReactDOM = require('react-dom/server')
const express = require('express')

const port = 3000
const app = express()

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

app.get('*', (req, res) => {
  const html = ReactDOM.renderToString(createElement(Spinner))
  res.send(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
  </head>
  <body>
    ${html}
  </body>
</html>`)
})
