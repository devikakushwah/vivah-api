const mongoose = require('mongoose');
const SubCategorySchema = mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    cat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }
})
module.exports = mongoose.model("SubCategory", SubCategorySchema);