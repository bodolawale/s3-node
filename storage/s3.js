import S3 from "aws-sdk/clients/s3.js";
import dotEnv from "dotenv";
dotEnv.config();

const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const accessKey = process.env.AWS_ACCESS_KEY;
const secretKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
	region: bucketRegion,
	accessKeyId: accessKey,
	secretAccessKey: secretKey,
});

class Storage {
	static async uploadFile(file) {
		const uploadParams = {
			Bucket: bucketName,
			Body: file.buffer,
			Key: file.originalname,
		};
		const data = await s3
			.upload(uploadParams)
			.promise()
			.catch((err) => {
				console.log(err);
			});
	}
	static downloadFile(key) {
		const downloadParams = {
			Key: key,
			Bucket: bucketName,
		};
		return s3.getObject(downloadParams).createReadStream();
	}
}

export default Storage;
