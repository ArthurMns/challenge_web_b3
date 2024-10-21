const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json());

app.listen(PORT, () => {
	console.log(
		`Serveur running, triple moooooonstre on http://localhost:${PORT}`
	);
});
