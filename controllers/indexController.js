const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res) => {
    return res.render("index", {
      title: "Session y Cookies",
    });
  },
  login: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      req.session.user = {
          nombre : req.body.nombre,
          email : req.body.email,
          color: req.body.color,
          edad: req.body.edad
      }
      if (req.body.check) {
        res.cookie("user", req.session.user, { maxAge: 86400000 });
      }
      res.redirect("/");
    }else {
          return res.render("index", {
          errors: errors.mapped(), 
          title: "Session y cookies",
          old: req.body, 
        });
      }
  },
  thanks: (req, res) => {
    return res.render("thanks");
  },
  olvidar: (req, res) => {
    req.session.destroy();
    res.cookie("user", null, { maxAge: -1 });
    res.redirect("/");
  },
};
