const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const dadJokesAPI = axios.create({
  baseURL: 'https://dad-jokes.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'dad-jokes.p.rapidapi.com',
    'x-rapidapi-key': 'ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637', // replace with your own API key
  },
});

app.get('/random-joke', async (req, res) => {
  try {
    const response = await dadJokesAPI.get('/');
    const { joke } = response.data;
    res.send(joke);
  } catch (error) {
    console.log(error);
    res.send('Error occurred');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
