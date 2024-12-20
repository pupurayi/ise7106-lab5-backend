const Joi = require('@hapi/joi');

const assetValidation = (data) => {
    const assetSchema = Joi.object({
        serialNumber:Joi.string().max(255).required(),
        status: Joi.string().max(255).required(),
        manufacturer: Joi.string().max(255).required(),
        model: Joi.string().max(255).required(),
        conditionRating: Joi.number().required(),
        acquiredDate: Joi.string().max(255).required()
    });
    return assetSchema.validate(data);
}

module.exports.assetValidation = assetValidation;