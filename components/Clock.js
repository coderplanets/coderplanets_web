"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Clock = styled_components_1.default.div `
  padding: 15px;
  color: #82fa58;
  display: inline-block;
  font: 50px menlo, monaco, monospace;
  background-color: #000;
  color: yellowgreen;
  font-size: 50px;
  .light {
    background-color: #999;
  }
`;
exports.default = props => {
    return (React.createElement("div", { className: props.light ? 'light' : '' },
        React.createElement(Clock, null, format(new Date(props.lastUpdate)))));
};
const format = t => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;
const pad = n => (n < 10 ? `0${n}` : n);
