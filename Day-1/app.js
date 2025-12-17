const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('backend is working')
})

app.listen(port, () => {
  console.log(`Server is runnig on ${port}`);
  
})