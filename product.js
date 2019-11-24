var restful = require('node-restful');
var mongo = restful.mongodb;
var ProductSchema = new mongodb.Schema({
	name:String,
	img:String,
	summary:String,
});
	module.exports = restful.model('Products',ProductSchema);
