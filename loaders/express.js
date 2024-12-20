const express = require('express')
const cors = require('cors')
const assetRoutes = require('../routes/assets')
const helmet = require('helmet')

module.exports = async ({ app }) => {


    app.use(helmet())           // security headers middleware
    app.use(express.json());    // body parser
    app.use(cors())

    // setup routes
    app.use('/api', assetRoutes);

    // error handling middleware
    app.use(function (err, req, res, next) {
        console.log(err.message);
        res.status(422).json({
            success: false,
            statusCode: 422,
            error: "Bad Request"
        });
    })

    return app;
}