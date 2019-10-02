"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./src/SnackBar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var snackBar = function snackBar(_ref) {
  var isShowing = _ref.isShowing,
      text = _ref.text,
      displayTime = _ref.displayTime,
      customClass = _ref.customClass,
      showCloseBtn = _ref.showCloseBtn;
  customClass = typeof customClass !== 'undefined' ? ' ' + customClass : '';

  var closeBtn = function closeBtn() {
    return setShowSnackBar(false);
  };

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSnackBar = _useState2[0],
      setShowSnackBar = _useState2[1];

  (0, _react.useEffect)(function () {
    return setShowSnackBar(isShowing);
  }, [isShowing, text, displayTime, customClass, showCloseBtn]);

  if (showSnackBar && typeof displayTime !== 'undefined') {
    setTimeout(function () {
      return setShowSnackBar(false);
    }, displayTime);
  }

  return _react["default"].createElement("div", null, _react["default"].createElement("div", {
    className: "snackbarContainer".concat(customClass).concat(showSnackBar ? ' snackbarShow' : '')
  }, showCloseBtn && _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    className: "closeBtn",
    onClick: closeBtn
  }, "\xD7"), _react["default"].createElement("br", null)), text));
}; // const snackBar = () => '<div>Thank you!!</div>';


snackBar.propTypes = {
  isShowing: _propTypes["default"].bool.isRequired,
  text: _propTypes["default"].string.isRequired,
  displayTime: _propTypes["default"].number,
  customClass: _propTypes["default"].string,
  showCloseBtn: _propTypes["default"].bool
};
var _default = snackBar;
exports["default"] = _default;
