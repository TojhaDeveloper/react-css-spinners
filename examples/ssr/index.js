const { createElement, Fragment } = require('react')
const { Spinner, Grid, Ripple } = require('react-css-spinners')
const { renderToString } = require('react-dom/server')
const express = require('express')

const port = 3000
const app = express()

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

app.get('*', (req, res) => {
  const Container = createElement(
    Fragment,
    null,
    createElement(Spinner),
    createElement(Grid),
    createElement(Ripple)
  )
  const html = renderToString(Container)
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
