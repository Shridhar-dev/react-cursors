"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./CircleCursor.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CircleCursor(props) {
  window.addEventListener('mousemove', e => {
    if (e.clientX < window.outerWidth - (props.safeBoundaryX ? props.safeBoundaryX : 30) && e.clientY < document.body.scrollHeight - (props.safeBoundaryY ? props.safeBoundaryY : 40)) {
      document.getElementById('circle-cursor').style.top = e.clientY + 'px';
      document.getElementById('circle-cursor').style.left = e.clientX + 'px';
      document.getElementById('circle-cursor-dot').style.top = e.clientY + 'px';
      document.getElementById('circle-cursor-dot').style.left = e.clientX + 'px';
    }
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "circle-cursor",
    style: {
      border: "".concat(props.borderWidth ? props.borderWidth : '2px', " \n                    ").concat(props.borderStyle ? props.borderStyle : 'solid', " \n                    ").concat(props.color ? props.color : 'black'),
      width: "".concat(props.circleWidth ? props.circleWidth : '3rem'),
      height: "".concat(props.circleHeight ? props.circleHeight : '3rem'),
      transition: "".concat(props.circleDelay ? props.circleDelay : '0.1s')
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "circle-cursor-dot",
    style: {
      background: "".concat(props.color ? props.color : 'black'),
      width: "".concat(props.dotWidth ? props.dotWidth : '1rem'),
      height: "".concat(props.dotHeight ? props.dotHeight : '1rem'),
      transition: "".concat(props.dotDelay ? props.dotDelay : '0.05s')
    }
  }));
}

var _default = CircleCursor;
exports.default = _default;