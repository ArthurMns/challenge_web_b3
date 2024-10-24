const express = require("express");
const cors = require("cors");

const usersRoute = require("./routes/usersRoute.js");
const animalsRoute = require("./routes/animalsRoute.js");
const cartsRoute = require("./routes/cartsRoute.js");
const cartsItemsRoute = require("./routes/cartsItemsRoute.js");
const categoriesRoute = require("./routes/categoriesRoute.js");

const app = express();
const PORT = 3001;

// Utilisation du middleware cors
app.use(
	cors({
		origin: "*", // Permettre toutes les origines, à restreindre pour des raisons de sécurité
		methods: ["GET", "POST", "DELETE", "OPTIONS", "PUT"], // Méthodes permises
		allowedHeaders: [
			"Origin",
			"X-Requested-With",
			"Content-Type",
			"Accept",
		], // En-têtes autorisés
	})
);

app.use(express.json());

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/animals", animalsRoute);
app.use("/api/v1/carts", cartsRoute);
app.use("/api/v1/cartsItems", cartsItemsRoute);
app.use("/api/v1/categories", categoriesRoute);

app.listen(PORT, async () => {
	console.log(`Serveur running: http://localhost:${PORT}`);
});
