import path from "path";
import express from "express";
import cors from "cors";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import nftRouter from "./routes/nft.route";

import { errorHandler } from "./middleware/errorhandler";
import { invalidRouteHandler } from "./middleware/norouteHandler";

import { version, author } from "../package.json";

const app = express();

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Cytric NFT API Docs",
      description: "API documentation for Cytric NFT",
      version,
      contact: author,
    },
    components: {
      securitySchemes: {},
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    path.resolve(__dirname, "routes", "*.route.ts"),
    path.resolve(__dirname, "schema", "*.schema.ts"),
  ],
};

const swaggerSpec = swaggerJsdoc(options);

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://nft-mint-andemosa.vercel.app"],
  })
);

// mount routes
app.use("/api/nfts", nftRouter);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (_, res) => {
  res.send("Welcome to Cytric NFT API");
});

app.use(errorHandler);

//If no route is matched by now, it must be a 404
app.use(invalidRouteHandler);

export default app;
