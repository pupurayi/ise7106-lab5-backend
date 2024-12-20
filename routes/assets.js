const router = require("express").Router();
const AssetService = require('../services/asset_service');


router.post('/asset', async function (req, res, next) {
	try {
		const asset = await AssetService.addAsset(req.body);

		if (!asset.success)
			return res.status(asset.statusCode).send(asset);

		res.status(200).send(asset);
	}
	catch (err) {
		next(err);
	}

});

router.get('/asset/:id', async function (req, res, next) {
	try {

		const asset = await AssetService.getAsset(req.params.id);
		if (!asset.success)
			return res.status(asset.statusCode).send(asset);
		res.status(200).send(asset);
	}
	catch (err) {
		next(err);
	}
});


// only author || moderator || admin

router.put('/asset/:id', async function (req, res, next) {
	try {
		const asset = await AssetService.editAsset(req.params.id, req.body);
		if (!asset.success)
			return res.status(asset.statusCode).send(asset);
		res.status(200).send(asset);
	}
	catch (err) {
		next(err);
	}
});

router.delete('/asset/:id', async function (req, res, next) {
	try {
		const asset = await AssetService.deleteAsset(req.params.id);
		if (!asset.success)
			return res.status(asset.statusCode).send(asset);
		res.status(200).send(asset);
	}
	catch (err) {
		next(err);
	}
});


router.get('/assets', async function (req, res, next) {
	try {
		const assets = await AssetService.getAssets(req.query);
		if (!assets.success)
			return res.status(assets.statusCode).send(assets);
		res.status(200).send(assets);
	}
	catch (err) {
		next(err);
	}
});


module.exports = router;