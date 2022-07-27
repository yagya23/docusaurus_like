'use strict';

const express = require('express');

// Constants
//const PORT = 8080;
var PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
//const app = express();
//app.get('/', (req, res) => {
  //res.send('../src/pages/index.tsx');
//});
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nikhilesh Resume',
  tagline: 'This site has my Resume',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
}
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
