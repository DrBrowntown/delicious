exports.myMiddleWare = (req, res, next) => {
  req.name = "Calvin";
  next();
};
exports.homePage = (req, res) => {
  console.log(req.name);
  res.render("index");
};
