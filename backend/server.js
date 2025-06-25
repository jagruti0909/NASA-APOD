const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const cors = require('cors');

const app = express();
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour
const PORT = process.env.PORT || 3000;
const NASA_API_KEY = process.env.NASA_API_KEY || 'DEMO_KEY'; // Use env variable

app.use(cors());
app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url} with query:`, req.query);
  next();
});

app.get('/api/apod', async (req, res) => {
  const { date } = req.query;
  const cacheKey = date ? `apod_${date}` : 'apod_today';

  try {
    console.log(`Fetching APOD for date: ${date || 'today'}, cacheKey: ${cacheKey}`);

    // Check cache
    const cachedData = cache.get(cacheKey);
    if (cachedData) {
      console.log(`Returning cached data for ${cacheKey}`);
      return res.json(cachedData);
    }

    // Fetch from NASA API
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: NASA_API_KEY,
        date: date || undefined, // Only send date if provided
      },
    });

    // Store in cache
    cache.set(cacheKey, response.data);
    console.log(`Fetched and cached APOD for ${date || 'today'}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching APOD:', error.message);
    if (error.response && error.response.status) {
      res.status(error.response.status).json({ error: `NASA API error: ${error.message}` });
    } else {
      res.status(500).json({ error: 'Failed to fetch APOD data' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});