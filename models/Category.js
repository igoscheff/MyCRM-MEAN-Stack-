const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageSrc: {
        type: String,
        default: ''
    },
    user: {
        type: Schema.Types.ObjectID,
        ref: 'users'
    }
});

module.exports = mongoose.model('categories', categorySchema);