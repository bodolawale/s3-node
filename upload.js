import StorageService from "./storage/s3.js";

class ImageUpload {
	static async uploadImage(req, res) {
		await StorageService.uploadFile(req.file);
		return res.status(200).send({ message: "Image uploaded successfully" });
	}
	static downloadImage(req, res) {
		try {
			const stream = StorageService.downloadFile(req.params.key).on(
				"error",
				(err) => {
					return res.status(err.statusCode).send({ message: err.message });
				}
			);
			stream.pipe(res);
		} catch (error) {
			return res.status(404).send({ message: error.message });
		}
	}
}

export default ImageUpload;
