const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

let users1 = [];

app.post('/users1', (req, res) => {
  const user = req.body;
  if (!user.name || !user.email) {
    return res.status(400).send('Name and email are required');
  }
  user.id = users1.length + 1;
  users1.push(user);
  res.status(201).json(user);
});
app.get('/users1', (req, res) => {
  res.status(200).json(users1);
});
app.get('/users1/:id', (req, res) => {
  const user = users1.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send('User not found');
  }

  res.status(200).json(user);
});
app.put('/users1/:id', (req, res) => {
  const user = users1.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    return res.status(404).send('User not found');
  }
  const updatedUser = req.body;
  user.name = updatedUser.name || user.name;
  user.email = updatedUser.email || user.email;

  res.status(200).json(user);
});
app.delete('/users1/:id', (req, res) => {
  const index = users1.findIndex(u => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).send('User not found');
  }
  users1.splice(index, 1);
  res.status(200).send('User deleted');
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
