const express = require("express");
// const dotenv = require("dotenv");
const cors = require("cors");

const usersRoute = require("./routes/usersRoute.js");
const animalsRoute = require("./routes/animalsRoute.js");
const cartsRoute = require("./routes/cartsRoute.js");
const cartsItemsRoute = require("./routes/cartsItemsRoute.js");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// dotenv.config();

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(
	cors({
		origin: ["http://localhost:3000/"],
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		credentials: true,
		optionsSuccessStatus: 204,
	})
);

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/animals", animalsRoute);
app.use("/api/v1/carts", cartsRoute);
app.use("/api/v1/cartsItems", cartsItemsRoute);

app.listen(PORT, async () => {
	const users = await prisma.users.findMany();
	console.log(users);

	console.log(
		`Serveur running, triple moooooonstre on http://localhost:${PORT}`
	);
});
