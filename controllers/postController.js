const Post = require("../models/Post");
const CustomError = require("../errors");
const cloudinary = require("../services/cloudinary");
const { authorizeAdmin } = require("../utils");
const createPost = async (req, res) => {
  req.body.author = req.user.userId;
  if (req.body.image) {
    const result = await cloudinary.uploader.upload(req.body.image, {
      folder: "Posts",
    });
    const image = { public_id: result.public_id, url: result.secure_url };
    req.body.image = image;
  }
  const post = await Post.create(req.body);
  res.status(200).json(post);
};
const updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.post_id, req.body, {
    new: true,
  });
  res.status(200).json(post);
};
const deletePost = async (req, res) => {
  const postToDelete = await Post.findById(req.params.post_id);
  if (!postToDelete) {
    throw new CustomError.BadRequestError(
      `Post with id ${req.params.post_id} not found`
    );
  }
  authorizeAdmin(req.user, postToDelete.author);
  await postToDelete.remove();
  res.status(200).json("Post deleted successfully");
};
const getAllPosts = async (req, res) => {
  const page = req.query.page || 0;
  const allPosts = await Post.find();
  const posts = await Post.find({})
    .populate(["author"])
    .sort("-createdAt")
    .skip(Number(page) * 12)
    .limit(12);
  res.status(200).json({ count: allPosts.length, posts });
};

module.exports = { createPost, updatePost, deletePost, getAllPosts };
