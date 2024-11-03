import express from 'express';
import fetch from 'node-fetch'; // Make sure to install this package if needed

const app = express();
const PORT = process.env.PORT || 3000;

// Example route for getting a random meme
app.get('/meme/random', async (req, res) => {
    try {
        const response = await fetch('https://some-meme-api.com/random'); // Replace with actual meme API URL
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch meme' });
    }
});

// Example route with query parameters for specific memes
app.get('/meme', async (req, res) => {
    const { category } = req.query; // Assuming you can filter by category
    try {
        const response = await fetch(`https://some-meme-api.com/memes?category=${category}`); // Replace with actual meme API URL
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch memes' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
