import React from 'react';
import PropTypes from 'prop-types';
import paths from './paths';
import Face from '../common/face/Face';
import getUniqueId from '../../utils/getUniqueId';
import Wrapper from '../common/wrapper/Wrapper';

var SpeechBubble = function SpeechBubble(_ref) {
  var size = _ref.size,
      color = _ref.color,
      mood = _ref.mood,
      className = _ref.className;
  return React.createElement(Wrapper, {
    className: className
  }, React.createElement("svg", {
    width: size * 1.3,
    height: size,
    viewBox: "0 0 186 143",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement("g", {
    id: "Kawaii-Builder",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    id: "Kawaii-speechBubble",
    transform: "translate(-27 -57)"
  }, React.createElement("g", {
    id: "kawaii-speechBubble",
    transform: "translate(27 57)"
  }, React.createElement("path", {
    d: paths.body,
    id: "kawaii-speechBubble_body",
    fill: color,
    fillRule: "nonzero"
  }), React.createElement("path", {
    d: paths.shadow,
    id: "kawaii-speechBubble_shadow",
    fill: "#121212",
    fillRule: "nonzero",
    opacity: "0.07"
  }), React.createElement(Face, {
    mood: mood,
    transform: "translate(60 46)",
    uniqueId: getUniqueId()
  }))))));
};

SpeechBubble.propTypes = {
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
SpeechBubble.defaultProps = {
  size: 220,
  mood: 'happy',
  color: '#83D1FB'
};
export default SpeechBubble;