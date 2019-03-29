const React = require('react')
const { renderToString } = require('react-dom/server')
const {Circle, Facebook, Ring, Ripple} = require('react-css-spinkit')
const express = require('express')

const port = 3000
const app = express()
const html = renderToString(
    React.createElement(
      React.Fragment,
      null,
      React.createElement(Circle),
      React.createElement(Facebook),
      React.createElement(Ring),
      React.createElement(Ripple),
  )
)

app.get('*', (req, res) => {

  res.send(`
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>SSR example</title>
    </head>
    <body style="background-color: pink">
      ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => {
  console.log(`http://localhost:${3000}`) //eslint-disable-line
})
