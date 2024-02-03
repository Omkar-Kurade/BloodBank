const testController = (req, res) => {
  res.status(200).send({
    message: "Welcome user omkar",
    success: true,
  });
};

module.exports = { testController };
