import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import multer from "multer";

import ImageUpload from "./upload.js";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const upload = multer();

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/upload", upload.single("img"), ImageUpload.uploadImage);

app.get("/image/:key", ImageUpload.downloadImage);

app.use("*", (req, res) => {
	return res.status(404).send({ message: "URL not found" });
});

app.listen(3000, () => {
	console.log("Application running on port 3000");
});
