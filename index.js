import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001; // change to 3001

// Return a message at the root endpoint
app.get("/", (req, res) => {
    res.send("Tell me your nationality and residence using the /nationality/:nationality/residence/:residence endpoint");
});

// Endpoint to capture nationality and residence parameters
app.get('/nationality/:nationality/residence/:residence', (req, res) => {
    const nationality = req.params.nationality;  // Extract nationality from request parameters
    const residence = req.params.residence;       // Extract residence from request parameters
    res.send(`I am ${nationality} and I live in ${residence}.`);  // Respond with a message
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// Update the express app code below to this:
app.get('/', (req, res) => {
  const randomSentence = sentence()

  res.send(randomSentence)
})

// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {
    // Make a request to another wbesite and wait for a response
    const response = await fetch('https://api.adviceslip.com/advice')
  
    // Read the response
    const body = await response.json()
  
    // Print the repsonse body to the console
    console.log(body)
  
    // Get the advice text string from the response body object
    const advice = body.slip.advice
  
    res.json({ data: advice })
  })