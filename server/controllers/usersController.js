// const prisma = require("../db/prisma");
//
// import bcrypt from "bcrypt";
//
// const hashPassword = async (password) => {
// 	return await bcrypt.hash(password, 10);
// };
//
// const getAllUsers = async (req, res) => {
// 	try {
// 		const users = await prisma.users.findMany();
// 		res.json(users);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };
//
// const getUserById = async (req, res) => {
// 	const { id } = req.params;
// 	try {
// 		const user = await prisma.users.findUnique({
// 			where: {
// 				id: parseInt(id),
// 			},
// 		});
// 		res.json(user);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };
//
// const createUser = async (req, res) => {
// 	const { name, email, phone_number, city, password } = req.body;
// 	try {
// 		password = await hashPassword(password);
// 		const newUser = await prisma.users.create({
// 			data: {
// 				name,
// 				email,
// 				phone_number,
// 				city,
// 				password,
// 			},
// 		});
// 		res.json(newUser);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };
//
// const updateUser = async (req, res) => {
// 	const { id } = req.params;
// 	const { name, email, phone_number, city, password } = req.body;
// 	try {
// 		const updatedUser = await prisma.users.update({
// 			where: {
// 				id: parseInt(id),
// 			},
// 			data: {
// 				name,
// 				email,
// 				phone_number,
// 				city,
// 				password,
// 			},
// 		});
// 		res.json(updatedUser);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };
//
// const deleteUser = async (req, res) => {
// 	const { id } = req.params;
// 	try {
// 		const deletedUser = await prisma.users.delete({
// 			where: {
// 				id: parseInt(id),
// 			},
// 		});
// 		res.json(deletedUser);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// };
//
// module.exports = {
// 	getAllUsers,
// 	getUserById,
// 	createUser,
// 	updateUser,
// 	deleteUser,
// };
