const { check, body } = require("express-validator");

module.exports = [
  check("nombre")
    .notEmpty()
    .withMessage("Este campo no puede estar vacio!"),
  check("email")
    .notEmpty()
    .withMessage("Este campo no puede estar vacio!"),
    check("edad")
    .isNumeric()
    .withMessage("Este campo tiene que ser numérico!"),
    check("color")
    .notEmpty()
    .withMessage("Este campo no puede estar vacio!")
];
