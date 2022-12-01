const Post = require("../models/Post");
const Comment = require("../models/Comment");
const cloudinary = require("../services/cloudinary");
const createComment = async (req, res) => {
  const postToComment = await Post.findById(req.params.post_id);
  if (req.body.image) {
    const result = cloudinary.uploader.upload(req.body.image, {
      folder: "comments",
    });
    const image = { public_id: result.public_id, url: result.secure_url };
    req.body.image = image;
  }
  req.body.post = req.params.post_id;
  req.body.user = Number(Math.random() * 173873);
  const comment = await Comment.create(req.body);
  await postToComment.updateOne({ $addToSet: { comments: comment._id } });
  res.status(200).json(comment);
};

const getAPostComments = async (req, res) => {
  const tweetComments = await Comment.find({
    tweet: req.params.tweetId,
  }).populate("user");
  res.status(200).json(tweetComments);
};

module.exports = {
  createComment,
  getAPostComments,
};
