"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function CircleCursor(props) {
  const [newProps, setNewProps] = (0, _react.useState)(props.initial);
  window.addEventListener('mousemove', e => {
    if (e.clientX < window.outerWidth - (props.safeBoundaryX ? props.safeBoundaryX : 30) && e.clientY < document.body.scrollHeight - (props.safeBoundaryY ? props.safeBoundaryY : 40)) {
      document.getElementById('circle__cursor').style.top = e.clientY + 'px';
      document.getElementById('circle__cursor').style.left = e.clientX + 'px';
      document.getElementById('circle__cursor__dot').style.top = e.clientY + 'px';
      document.getElementById('circle__cursor__dot').style.left = e.clientX + 'px';
    }
  });
  let hoverElement = document.querySelectorAll('.hover-detect');
  hoverElement = Array.from(hoverElement);
  hoverElement.forEach(element => {
    element.addEventListener('mouseenter', () => {
      setNewProps(props.hover);
    });
    element.addEventListener('mouseleave', () => {
      setNewProps(props.initial);
    });
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    id: "circle__cursor",
    className: _stylesModule.default.circle__cursor,
    style: {
      border: "".concat(newProps.borderWidth ? newProps.borderWidth : '2px', " \n                    ").concat(newProps.borderStyle ? newProps.borderStyle : 'solid', " \n                    ").concat(newProps.color ? newProps.color : 'black'),
      width: "".concat(newProps.circleSize ? newProps.circleSize : '3rem'),
      height: "".concat(newProps.circleSize ? newProps.circleSize : '3rem'),
      transition: "".concat(newProps.circleDelay ? newProps.circleDelay : '0.08s')
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: "circle__cursor__dot",
    className: _stylesModule.default.circle__cursor__dot,
    style: {
      background: "".concat(newProps.color ? newProps.color : 'black'),
      width: "".concat(newProps.dotSize ? newProps.dotSize : '1rem'),
      height: "".concat(newProps.dotSize ? newProps.dotSize : '1rem'),
      transition: "".concat(newProps.dotDelay ? newProps.dotDelay : '0.03s')
    }
  }));
}

var _default = CircleCursor;
exports.default = _default;