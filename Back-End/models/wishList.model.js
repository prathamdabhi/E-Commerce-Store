import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  productId: {
    type: Array(string),
  },
});

const WishList = mongoose.model("WishList", wishlistSchema);
export default WishList;
