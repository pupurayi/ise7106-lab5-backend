const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AssetSchema = new Schema({
	serialNumber: {
		type: String,
		unique: true,
		required: [true, "Serial Number field is required"]
	},
	status: {
		type: String,
		required: [true, "Status field is required"]
	},
	manufacturer: {
		type: String,
		required: [true, "Manufacturer field is required"]
	},
	model: {
		type: String,
		required: [true, "Model field is required"]
	},
	conditionRating: {
		type: Number,
		required: [true, "Condition Rating field is required"]
	},
	acquiredDate: {
		type: String,
		required: [true, "Acquired Date field is required"]
	}
}, { versionKey: false, timestamps: true });

const Asset = mongoose.model('asset', AssetSchema);
module.exports = Asset;