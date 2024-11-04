# Nationality and Residence API

This is a simple Express.js web service that returns a message based on the user's nationality and residence.

## Deployed Web Service

You can access the live web service at the following URL: [Your Deployed URL](https://classapp-51d0.onrender.com)

## Endpoints

### 1. Root Endpoint

**GET** `/`

Returns a message guiding users on how to use the API.

**Response:**


### 2. Nationality and Residence Endpoint

**GET** `/nationality/:nationality/residence/:residence`

This endpoint captures the user's nationality and residence.

**Required Parameters:**

- `nationality`: The nationality of the user (e.g., `American`, `Canadian`).
- `residence`: The city or country where the user lives (e.g., `New York`, `Canada`).

**Sample Request:**
GET http://localhost:3000/nationality/American/residence/New%20York

{
    "message": "I am American and I live in New York."
}

