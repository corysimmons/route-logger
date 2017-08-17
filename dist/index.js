'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _padLeft = require('pad-left');

var _padLeft2 = _interopRequireDefault(_padLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (port, prefix, router) => {
  console.log(`\n`);
  router.stack.forEach(route => {
    console.log(_chalk2.default.green(`${(0, _padLeft2.default)('[' + route.methods, 15)}]    `) + _chalk2.default.bold(`http://localhost:${port}${prefix}${route.path}`));
  });
};