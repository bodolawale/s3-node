import StorageService from "./storage/s3.js";

class ImageUpload {
	static async uploadImage(req, res) {
		await StorageService.uploadFile(req.file);
		return res.status(200).send({ message: "Image uploaded successfully" });
	}
}

export default ImageUpload;
