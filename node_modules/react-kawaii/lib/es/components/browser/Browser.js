import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

var Browser = function Browser(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return React.createElement(Wrapper, {
    className: className
  }, React.createElement("svg", {
    width: size * 1.44,
    height: size,
    viewBox: "0 0 200 139",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement("g", {
    id: "kawaii-browser"
  }, React.createElement("g", {
    id: "kawaii-browser__body",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: paths.shape,
    id: "kawaii-browser__shape",
    fill: color
  }), React.createElement("path", {
    d: paths.shadow,
    id: "kawaii-browser__shadow",
    fill: "#121212",
    opacity: ".1"
  }), React.createElement("g", {
    id: "address-bar",
    transform: "translate(.097)"
  }, React.createElement("path", {
    d: paths.addressBar,
    fill: "#111"
  }), React.createElement("ellipse", {
    fill: "#FFF",
    cx: "168.855",
    cy: "10.901",
    rx: "3.4",
    ry: "3.395"
  }), React.createElement("ellipse", {
    fill: "#FFF",
    cx: "180.074",
    cy: "10.901",
    rx: "3.4",
    ry: "3.395"
  }), React.createElement("g", {
    id: "address",
    transform: "translate(12.654 5.47)",
    fill: "#FFF"
  }, React.createElement("rect", {
    x: ".277",
    y: ".163",
    width: "145.775",
    height: "10.563",
    rx: "5.282"
  })))), React.createElement(Face, {
    mood: mood,
    transform: "translate(67 63)",
    uniqueId: getUniqueId()
  }))));
};

Browser.propTypes = {
  /**
   * Size of the width
   */
  size: PropTypes.number,
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: PropTypes.string
};
Browser.defaultProps = {
  size: 180,
  mood: 'ko',
  color: '#FDA7DC'
};
export default Browser;