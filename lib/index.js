'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropDown = (function (_Component) {
  _inherits(DropDown, _Component);

  function DropDown() {
    _classCallCheck(this, DropDown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DropDown).apply(this, arguments));
  }

  _createClass(DropDown, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var value = _props.value;
      var _onChange = _props.onChange;
      var options = _props.options;

      return _react2.default.createElement(
        'select',
        { onChange: function onChange(e) {
            return _onChange(e.target.value);
          },
          value: value },
        options.map(function (option) {
          return _react2.default.createElement(
            'option',
            { value: option, key: option },
            option
          );
        })
      );
    }
  }]);

  return DropDown;
})(_react.Component);

exports.default = DropDown;

DropDown.propTypes = {
  options: _react.PropTypes.arrayOf(_react.PropTypes.string.isRequired).isRequired,
  value: _react.PropTypes.string.isRequired,
  onChange: _react.PropTypes.func.isRequired
};