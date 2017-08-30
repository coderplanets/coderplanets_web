"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
let store = null;
class Store {
    constructor(isServer, lastUpdate) {
        this.lastUpdate = 0;
        this.light = false;
        this.start = () => {
            this.timer = setInterval(() => {
                this.lastUpdate = Date.now();
                this.light = true;
            });
        };
        this.stop = () => clearInterval(this.timer);
        this.lastUpdate = lastUpdate;
    }
}
__decorate([
    mobx_1.observable
], Store.prototype, "lastUpdate", void 0);
__decorate([
    mobx_1.observable
], Store.prototype, "light", void 0);
__decorate([
    mobx_1.action
], Store.prototype, "start", void 0);
function initStore(isServer, lastUpdate = Date.now()) {
    if (isServer) {
        return new Store(isServer, lastUpdate);
    }
    else {
        if (store === null) {
            store = new Store(isServer, lastUpdate);
        }
        return store;
    }
}
exports.initStore = initStore;
