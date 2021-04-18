const { validationResult } = require("express-validator");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "first post",
        content: "this is the first post",
        creator: {
          name: "Charly",
        },
        imageUrl: "images/1617465920087-sword-of-destiny.jpeg",
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(422)
      .json({ message: "Validation failed, entered data is incorrect.", errors: errors.array() });
  }
  const { title, content } = req.body;
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      id: new Date().toISOString(),
      title,
      content,
      creator: {
        name: "Charly",
      },
      createdAt: new Date(),
    },
  });
};
