import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

var Planet = function Planet(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return React.createElement(Wrapper, {
    className: className
  }, React.createElement("svg", {
    width: size,
    height: size,
    version: "1.1",
    viewBox: "0 0 134 134",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement("defs", null, React.createElement("path", {
    d: paths.shape,
    id: "kawaii-planet__shape--path"
  }), React.createElement("path", {
    d: paths.shadow,
    id: "kawaii-planet__shadow--path"
  })), React.createElement("g", {
    id: "kawaii-planet"
  }, React.createElement("g", {
    id: "kawaii-planet__body"
  }, React.createElement("mask", {
    id: "mask-2",
    fill: "#fff"
  }, React.createElement("use", {
    xlinkHref: "#kawaii-planet__shape--path"
  })), React.createElement("use", {
    id: "kawaii-planet__shape",
    fill: color,
    xlinkHref: "#kawaii-planet__shape--path"
  }), React.createElement("mask", {
    id: "mask-4",
    fill: "#fff"
  }, React.createElement("use", {
    xlinkHref: "#kawaii-planet__shadow--path"
  })), React.createElement("use", {
    id: "kawaii-planet__shadow",
    fill: "#000000",
    opacity: ".1",
    xlinkHref: "#kawaii-planet__shadow--path"
  })), React.createElement(Face, {
    mood: mood,
    transform: "translate(34 57)",
    uniqueId: getUniqueId()
  }))));
};

Planet.propTypes = {
  /**
   * Size of the width
   * */
  size: PropTypes.number,
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko']),

  /**
   * Hex color
   */
  color: PropTypes.string
};
Planet.defaultProps = {
  size: 190,
  mood: 'blissful',
  color: '#FCCB7E'
};
export default Planet;