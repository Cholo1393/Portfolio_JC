// config/cloudinaryConfig.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dwdidilop', 
    api_key: '753472186911948', 
    api_secret: '6e3O-keYUnWFsE1MQ1kjgAwjE3Y', 
});

module.exports = cloudinary;
