"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Dropdown renders correctly and matches snapshot', function () {
  var handleChange = jest.fn();

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Dropdown.default, {
    value: 'reactjs',
    onChange: handleChange,
    options: ['reactjs', 'angular2']
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Dropdown renders the correct elements and props', function () {
  var handleChange = jest.fn();
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Dropdown.default, {
    value: 'reactjs',
    onChange: handleChange,
    options: ['reactjs', 'angular2']
  }));
  expect(wrapper.instance().props.options).toEqual(['reactjs', 'angular2']);
  expect(wrapper.instance().props.options[0]).toEqual('reactjs');
  expect(wrapper.instance().props.value).toEqual('reactjs');
  expect(wrapper.find('select').length).toEqual(1);
  expect(wrapper.find('option').length).toEqual(2);
  expect(wrapper.find('option').first().prop('value')).toEqual('reactjs');
  expect(wrapper.find('option').first().text()).toEqual('reactjs'); // console.log(wrapper.debug())
});