exports.myMiddleWare = (req, res, next) => {
  req.name = "Calvin";
  if (req.name === "Calvin") {
    throw Error("Wonderful name");
  }
  next();
};
exports.homePage = (req, res) => {
  console.log(req.name);
  res.render("index");
};
