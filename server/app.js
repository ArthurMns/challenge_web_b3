const express = require("express");
// const dotenv = require("dotenv");
const cors = require("cors");

const usersRoute = require("./routes/usersRoute.js");
const animalsRoute = require("./routes/animalsRoute.js");
const cartsRoute = require("./routes/cartsRoute.js");
const cartsItemsRoute = require("./routes/cartsItemsRoute.js");

const { PrismaClient } = require("@prisma/client");

// dotenv.config();

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(
    cors({
        origin: "*", // Permettre toutes les origines, à restreindre pour des raisons de sécurité
        methods: ["GET", "POST", "DELETE", "OPTIONS"], // Méthodes permises
        allowedHeaders: [
            "Origin",
            "X-Requested-With",
            "Content-Type",
            "Accept",
        ], // En-têtes autorisés
    })
);

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/animals", animalsRoute);
app.use("/api/v1/carts", cartsRoute);
app.use("/api/v1/cartsItems", cartsItemsRoute);

app.listen(PORT, async () => {
  console.log(
    `Serveur running, triple moooooonstre on http://localhost:${PORT}`,
  );
});
