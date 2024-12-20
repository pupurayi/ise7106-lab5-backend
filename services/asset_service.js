const Asset = require('../models/asset');
const { error_json, success_json } = require('../utils/helpers');
const { assetValidation } = require('../utils/validation');

module.exports = class AssetService {
    static async addAsset(data) {


        // check if data is valid
        const { error } = assetValidation(data)
        if (error)
            return error_json(400, error.details[0].message);

        // assigning user to the asset	
        data.manufacturer = data.manufacturer.toUpperCase();
        data.model = data.model.toUpperCase();

        const asset = await Asset.create(data);
        if (!asset)
            return error_json(500, "Error creating asset");

        return success_json(200, asset);


    }

    static async getAsset(id) {

        var asset = await Asset.findById({ _id: id });
        if (!asset)
            return error_json(404, "Asset not found");
        return success_json(200, asset);

    }

    static async editAsset(id, data) {
        const asset = await Asset.findById({ _id: id });
        if (!asset)
            return error_json(404, "Asset not found");
        // make sure author_id is not modified
        data.manufacturer = data.manufacturer.toUpperCase();
        data.model = data.model.toUpperCase();
        // if everything is ok edit the asset
        var res = await Asset.updateOne({ _id: id }, data);

        if (!res)
            return error_json(500, "Error editing asset");

        res = await Asset.findOne({ _id: id });
        return success_json(200, res);

    }

    static async deleteAsset(id) {
        const asset = await Asset.findById({ _id: id});
        if (!asset)
            return error_json(404, "Asset not found");

        const res = await Asset.deleteOne({ _id: id });
        if (!res)
            return error_json(500, "Error deleting asset");

        return success_json(200, { "ok": res.ok });
    }

    static async getAssets(query) {

        var perPage = 4;
        try {
            var page = parseInt(query.page);
            if (page <= 0) page = 1;
        }
        catch { var page = 1; }
        var qry = {};
        if (query.category) qry.categories = query.category;
        if (query.tag) qry.tags = query.tag;

        const assets = await Asset.find(qry, {}, { skip: perPage * (page - 1), limit: perPage });
        if (!assets)
            return error_json(500, "Error getting assets");
        const count = await Asset.countDocuments(qry);
        return success_json(200, { count: assets.length, total: count, assets: assets });

    }
}