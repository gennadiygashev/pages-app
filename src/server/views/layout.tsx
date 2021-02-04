import * as React from 'react'

const Layout = () => {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <title>Pages-app</title>
      </head>
      <body style={{
        margin: 0,
        padding: 0,
        backgroundColor: 'black'
      }}>
        <div id='app' />
        <script src='/bundle.js' />
      </body>
    </html>
  )
}

export default Layout
