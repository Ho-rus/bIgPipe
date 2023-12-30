// Server-side code (Node.js)
const http = require("http");

http
  .createServer((req, res) => {
    // Send initial part of the page
    res.write("<html><body>");
    res.write('<div id="content">');

    // Simulate delay for loading pagelets

    setTimeout(() => {
      res.write(
        `
        <head>
            <title>Your Website</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f0f0f0;
                }
                .header {
                    background-color: #333;
                    color: white;
                    padding: 10px;
                    text-align: center;
                }               
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Welcome to Your Website</h1>
            </div>           
        </body>
        `
      );
    }, 1000);

    setTimeout(() => {
      res.write(`
      <div class="main">
        <h2>About Us</h2>
        <p>This is a simple website to show how the bigPipe works!.</p>
      </div>

      <style>
        .main {
         margin-top:-15px;
         height:70%;
         background-color: white;
         color: #333;
         text-align: center;
         padding-top:150px;
           }
      </style>
      `);
    }, 3000);

    setTimeout(() => {
      res.write(`<div class="footer">
      Copyright © 2023 My Website
  </div>
      <style>
       .footer {
         background-color: #333;
         color: white;
         text-align: center;
         padding: 10px;
         position: fixed;
         bottom: 0;
         width: 100%;
    }
      </style>
  `);
    }, 2000);
  })
    .listen(8080);
