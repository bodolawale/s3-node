import StorageService from "./storage/s3.js";

class ImageUpload {
	static async uploadImage(req, res) {
		await StorageService.uploadFile(req.file);
		return res.status(200).send({ message: "Image uploaded successfully" });
	}
	static downloadImage(req, res) {
		const stream = StorageService.downloadFile(req.params.key).on(
			"error",
			(err) => {
				return res.status(err.statusCode).send({ message: err.message });
			}
		);
		stream.pipe(res);
	}
}

export default ImageUpload;
