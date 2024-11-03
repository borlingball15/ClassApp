import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

// Route to get a random meme
app.get('/meme/random', async (req, res) => {
    try {
        const response = await fetch('https://meme-api.com/gimme');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch meme' });
    }
});

// Route to get memes by category (example)
app.get('/meme/category/:category', async (req, res) => {
    const { category } = req.params; // Get the category from route params
    try {
        const response = await fetch(`https://meme-api.com/gimme/${category}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch memes by category' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
