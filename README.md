# NFT Mint Application

This is a full stack NFT minting application built using React and Nodejs.

The project also includes a Swagger documentation.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Video Demo](#video-demo)
- [My process](#my-process)
  - [Built with](#built-with)
- [Setting Up](#setup)
- [Documentation](#api-documentation)
- [Author](#author)

## Overview

### The challenge

The task is to seamlessly integrate the provided [figma design](https://www.figma.com/design/fkWRj8xpQv7Ma3SN5eTQHt/NFT-Minting-Page?node-id=0-1&t=AIHR6C8SEpMVbUny-1), into a fully functional web application, demonstrating expertise in full stack web development and web3 integration.

### Screenshot

![Home Page](./screenshots/home.png)

### Screenshot

![Gallery](./screenshots/gallery.png)

### Screenshot

![Success](./screenshots/success.png)

### Links

- Live Site URL: (https://nft-mint-andemosa.vercel.app/)
- Live API URL: (https://nft-mint-p40x.onrender.com)

### Video Demo

- Walkthrough video - (https://www.loom.com/share/b7053535e75645beb4add7a92901f566?sid=11304ae5-10dd-440d-94c8-2e50bb4f50c3)

- Backend Demo 1 - (https://www.loom.com/share/d46921beb2ba48b8ac32baed0cc2eb86?sid=283903bc-31a8-4b2a-92c3-f0b97bd1a94b)

- Backend Demo 2 - (https://www.loom.com/share/d17d5173b7734cd9aec67596c43c9700?sid=4c67fd63-c70a-43e3-910f-8b73f08bb5ce)

- Frontend Demo 1 - (https://www.loom.com/share/dffbce0f6bce41adbe9b4c93f4b6edb9?sid=53f1ae73-fa40-45d4-be39-5f19a08e16ba)

- Frontend Demo 2 - (https://www.loom.com/share/8ffa00adf10140ee84c5f66c2104984d?sid=ac73ef3d-a9e3-4f4b-aea6-0218868861e5)

### NFT Endpoints

- `POST /api/nfts` - Create an NFT
- `GET /api/nfts?address=${address}` - Find NFTs by wallet address
- `GET /api/nfts/{id}` - Find NFT by ID

## Related Resources

- [Frontend Repository](https://github.com/andemosa/nft-mint/tree/main/frontend)
- [Backend Repository](https://github.com/andemosa/nft-mint/tree/main/server)

## My process

### Built with

- TypeScript
- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Rainbowkit](https://www.rainbowkit.com/)
- [Wagmi](https://wagmi.sh/)
- [SWR](https://swr.vercel.app/)
- [Express](https://expressjs.com/)
- [Zod](https://zod.dev/)

## Setup

This guide will walk you through the process of setting up the NFT Minting App on your local machine.

### Prerequisites

Before you begin, ensure you have Node.js installed on your system.

### Cloning the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/andemosa/nft-mint.git
cd nft-mint
```

### Backend Configuration

1. **Environment Files**: Navigate to the `server` folder and create an `.env` file using the `.env.example` file.

2. **MongoDB Setup**:

   - Sign up for an account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Create a new cluster and follow the instructions to set up a new database.
   - Once set up, obtain your MongoDB connection string and add it to the `MONGO_URI` variable in your `.env` files.

### Frontend Configuration

1. **Environment Files**: Navigate to the `frontend` folder and create an `.env` file using the `.env.example` file.

2. **NEXT_PUBLIC_BASE_URL**:
   - The `NEXT_PUBLIC_BASE_URL` should point to the URL where your backend application is running (typically `http://localhost:4000` if you're running it locally).

### Running the Application

1. **Backend**:

   - Navigate to the `server` directory.
   - Install dependencies: `npm install`.
   - Start the server: `npm run dev`.

2. **Frontend**:
   - Open a new terminal and navigate to the `frontend` directory.
   - Install dependencies: `npm install`.
   - Start the frontend application: `npm run dev`.
   - The application should now be running on `http://localhost:3000` but verify this in your command line terminal

## API Documentation

The REST API exposes its OpenAPI. You can view the API definition interactively using the Swagger UI, hosted at /docs. Simply start the server and navigate to [http://127.0.0.1:4000/docs](http://127.0.0.1:4000/docs) in your browser to access the Swagger UI.

Alternatively, you can explore the [online version of the API documentation](https://andemosa.github.io/nft-mint/) without running the server.

[![openapi](screenshots/swagger-docs.png)](https://andemosa.github.io/nft-mint/)

## Author

- Anderson Osayerie - [@andemosa](https://andemosa.tech)
- Twitter - [@andemosa](https://www.twitter.com/andemosa)
