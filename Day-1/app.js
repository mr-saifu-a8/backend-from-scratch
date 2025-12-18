const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  res.send('Backend is working')
})

app.get('/profile', (req, res) => {
  const {name, age, address} = req.query;
  res.send(`Hello I am ${name}, and I'm ${age} year old, I am from ${address}`)
})

app.get('/user', (req, res) => {
  const { name, city } = req.query;

  if (name && city) {
   return res.send(`I am ${name} from ${city}`)
  }
  else if (name) {
   return res.send(`I am ${name}`)
  }
  else if (city) {
   return res.send(`From ${city}`)
  }
  else {
   res.send('All user')  
  }
})


app.listen(port, () => {
  console.log(`Server is runnig on ${port}`);
  
})