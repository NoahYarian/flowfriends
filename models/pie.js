var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PieSchema   = new Schema({
    flavor: String
});

module.exports = mongoose.model('Pie', PieSchema);
