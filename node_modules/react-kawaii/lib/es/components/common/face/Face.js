function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';

var Face = function Face(_ref) {
  var mood = _ref.mood,
      uniqueId = _ref.uniqueId,
      rest = _objectWithoutProperties(_ref, ["mood", "uniqueId"]);

  return React.createElement("g", _extends({
    id: "kawaii-face"
  }, rest), React.createElement("defs", null, React.createElement("path", {
    d: paths.defs,
    id: "kawaii-face__path-1"
  })), React.createElement("g", {
    id: "kawaii-face__mouth",
    transform: "translate(18.000000, 16.000000)"
  }, (mood === 'blissful' || mood === 'lovestruck' || mood === 'excited') && React.createElement("g", {
    id: "kawaii-face__mouth__joy",
    transform: "translate(0.000000, 1.000000)"
  }, React.createElement("mask", {
    id: "kawaii-face__mask-2-".concat(uniqueId),
    fill: "white"
  }, React.createElement("use", {
    xlinkHref: "#kawaii-face__path-1"
  })), React.createElement("use", {
    id: "Combined-Shape",
    fill: "#000000",
    xlinkHref: "#kawaii-face__path-1"
  }), React.createElement("path", {
    d: paths.tongue,
    id: "kawaii-face__tongue",
    fill: "#E74144",
    mask: "url(#kawaii-face__mask-2-".concat(uniqueId),
    transform: "translate(15.000000, 11.431885) scale(1, -1) translate(-15.000000, -11.431885)"
  })), mood === 'happy' && React.createElement("path", {
    d: paths.happy,
    id: "kawaii-face__mouth__happy",
    fill: "#000000"
  }), mood === 'shocked' && React.createElement("ellipse", {
    id: "kawaii-face__mouth__shocked",
    cx: "15",
    cy: "14",
    rx: "9",
    ry: "10",
    fill: "#000000"
  }), (mood === 'sad' || mood === 'ko') && React.createElement("path", {
    d: paths.sad,
    id: "kawaii-face__mouth__sad",
    fill: "#000000",
    transform: "translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)"
  })), React.createElement("g", {
    id: "kawaii-face__blush",
    transform: "translate(0.000000, 15.000000)",
    fill: "#000000",
    opacity: "0.2"
  }, React.createElement("circle", {
    id: "Oval",
    cx: "3",
    cy: "3",
    r: "3"
  }), React.createElement("circle", {
    id: "Oval",
    cx: "63",
    cy: "3",
    r: "3"
  })), React.createElement("g", {
    id: "kawaii-face__eyes",
    transform: "translate(2.000000, 0.000000)",
    fill: "#000000"
  }, mood === 'blissful' && React.createElement("g", {
    id: "kawaii-face__eyes__arc",
    transform: "translate(1.000000, 0.000000)"
  }, React.createElement("path", {
    d: paths.bliss1,
    id: "Fill-5"
  }), React.createElement("path", {
    d: paths.bliss2,
    id: "Fill-5"
  })), (mood === 'happy' || mood === 'sad' || mood === 'shocked' || mood === 'excited') && React.createElement("g", {
    id: "kawaii-face__eyes__circle",
    transform: "translate(1.000000, 2.000000)"
  }, React.createElement("circle", {
    id: "Oval-3",
    cx: "4.5",
    cy: "4.5",
    r: "4.5"
  }), React.createElement("circle", {
    id: "Oval-3",
    cx: "56.5",
    cy: "4.5",
    r: "4.5"
  })), mood === 'lovestruck' && React.createElement("g", {
    id: "kawaii-face__eyes__heart",
    transform: "translate(0.000000, 2.000000)",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: paths.lovestruck1,
    id: "Shape"
  }), React.createElement("path", {
    d: paths.lovestruck2,
    id: "Shape"
  })), mood === 'ko' && React.createElement("g", {
    id: "kawaii-face__eyes__ko",
    transform: "translate(1.500000, 1.000000)",
    fillRule: "nonzero"
  }, React.createElement("path", {
    d: paths.ko1,
    id: "Cross"
  }), React.createElement("path", {
    d: paths.ko2,
    id: "Cross"
  }))));
};

Face.propTypes = {
  mood: PropTypes.oneOf(['sad', 'shocked', 'happy', 'blissful', 'lovestruck', 'excited', 'ko'])
};
Face.defaultProps = {
  mood: 'blissful'
};
export default Face;