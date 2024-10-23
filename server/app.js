const express = require("express");

const usersRoute = require("./routes/usersRoute.js");
const animalsRoute = require("./routes/animalsRoute.js");
const cartsRoute = require("./routes/cartsRoute.js");
const cartsItemsRoute = require("./routes/cartsItemsRoute.js");

const app = express();
const PORT = 3001;

app.use(express.json());

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/animals", animalsRoute);
app.use("/api/v1/carts", cartsRoute);
app.use("/api/v1/cartsItems", cartsItemsRoute);

app.listen(PORT, () => {
	console.log(
		`Serveur running, triple moooooonstre on http://localhost:${PORT}`
	);
});
