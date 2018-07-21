module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "rules": {
    "function-paren-newline": "off",
    "lines-between-class-members": ["error", "never"],
    "no-underscore-dangle": "off",
    "react/button-has-type": "warn",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
};
