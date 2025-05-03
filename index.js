const port = process.env.PORT || 3000;
require('http')
  .createServer((req, res) => {
    res.end('Hello from Docker!\\n');
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });