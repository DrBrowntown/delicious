const passport = require("passport");

exports.login = passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: "Failed Login",
  successRedirect: "/",
  successFlash: "You are logged in"
});

exports.logout = (req, res) => {
  req.logout();
  req.flash("Success", "You are now logged out");
  res.redirect("/");
};

exports.isLoggedIn = (req, res, next) => {
  // check if user is authenticated
  if (req.isAuthenticated()) {
    next(); // user is logged in
    return;
  }
  req.flash("error", "You must be logged in to do that");
  res.redirect("/login");
};

exports.forgot = async (req, res) => {
  // 1. See if a user with that email exists
  const user = await user.findOne({ email: req.body.email });
  if (!user) {
    req.flash("error", "A password reset has been sent to your email");
    return res.redirect("/login");
  }
  // 2. Set reset tokens and expiry on their account
  // 3. Send them an email with the token
  // 4. Redirect to login page
};
