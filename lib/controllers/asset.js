'use strict';

var fs = require('fs'),
    path = require('path'),
    config = require('../config/config'),
    mmm = require('mmmagic'),
    Magic = mmm.Magic;

/**
 * Get asset by name
 */
exports.asset = function (req, res) {
    var filePath = path.join(config.root, 'lib/assets', req.params.imageName);
    fs.exists(filePath, function (exists) {
        if (exists) {
            fs.readFile(filePath, function (err, data) {
                if (err) {
                    res.status(500).send('Shitty: problem serving asset.');
                } else {
                    var magic = new Magic(mmm.MAGIC_MIME_TYPE);
                    magic.detectFile(filePath, function(err, mime) {
                        if (err) throw err;
                        res.setHeader('Content-Type', mime);
                        res.send(data);
                    });
                }
            });
        } else {
            res.status(404).send('Not found');
        }
    });
};