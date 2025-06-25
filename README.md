# NASA APOD Explorer

A web application that allows users to explore NASA's Astronomy Picture of the Day (APOD) by selecting different dates. The application features a responsive design, error handling, and loading states, utilizing NASA's Open API.

## Features
- View the APOD for any selectable date
- Responsive design using Tailwind CSS
- Loading and error state management
- Cached backend responses for performance

## Technologies
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **API**: NASA APOD (https://api.nasa.gov/)

## Setup Instructions

### Prerequisites
- Node.js (latest stable version)
- npm (comes with Node.js)

### Backend
1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set the NASA API key as an environment variable:
   - Create a `.env` file in `backend/` with:
     ```
     NASA_API_KEY=your_nasa_api_key
     ```
   - Obtain your API key from https://api.nasa.gov/.
4. Start the server:
   ```bash
   npm start
   ```
   The server will run on `http://localhost:3000`.

### Frontend
1. Navigate to the `frontend/` directory or open `frontend/index.html` directly in a browser.
2. Ensure the backend is running locally (`http://localhost:3000`) or update the `fetch` URL in `index.html` to the deployed backend URL.

## Deployment 
- **Frontend**: Deployed on Vercel at https://nasa-apod-eta.vercel.app/
- **Backend**: Deployed on Render (URL: https://nasa-apod-igf4.onrender.com)  
  - Note: The frontend is configured to use this backend URL.

## Repository
https://github.com/jagruti0909/NASA-APOD

## Usage
1. Visit https://nasa-apod-eta.vercel.app/ in a web browser.
2. Use the date picker to select a date and view the corresponding APOD.
3. The application will display the image or video, title, explanation, and date of the APOD.

## Notes
- The application uses the NASA DEMO_KEY by default, which has a 1000 requests/hour limit. For production, use a personal API key.
- Cached responses are stored for 1 hour to improve performance.
- Ensure the backend URL in `index.html` matches the deployed Render URL for proper functionality.

## Acknowledgments
- Data provided by NASA's API (https://api.nasa.gov/)
