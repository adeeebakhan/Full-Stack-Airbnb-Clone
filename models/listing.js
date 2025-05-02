const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.jpg?s=1024x1024&w=is&k=20&c=Fo51rHxVKWpxq3kzEnGdfbEIm42dHcree8Hyzo2Zj9A=",
        set: (v) => v === "" ? "https://media.istockphoto.com/id/1157048446/photo/aerial-shot-of-the-beach-from-above-showing-sea-beach-mountain-and-a-coconut-plantation-goa.jpg?s=1024x1024&w=is&k=20&c=Fo51rHxVKWpxq3kzEnGdfbEIm42dHcree8Hyzo2Zj9A=" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;


