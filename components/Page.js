"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const link_1 = require("next/link");
/* const Link = require('next/link').default*/
const mobx_react_1 = require("mobx-react");
const Clock_1 = require("./Clock");
const styled_components_1 = require("styled-components");
const Title = styled_components_1.default.h1 `
  color: yellowgreen;
  font-size: 50px;
`;
let Page = class Page extends react_1.Component {
    componentDidMount() {
        this.props.store.start();
    }
    componentWillUnmount() {
        this.props.store.stop();
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(Title, null, this.props.title),
            React.createElement(Clock_1.default, { lastUpdate: this.props.store.lastUpdate, light: this.props.store.light }),
            React.createElement("nav", null,
                React.createElement(link_1.default, { href: this.props.linkTo },
                    React.createElement("a", null, "Navigate")))));
    }
};
Page = __decorate([
    mobx_react_1.inject('store'),
    mobx_react_1.observer
], Page);
exports.default = Page;
exports.default = link_1.default;
