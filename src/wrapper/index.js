"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapper(code) {
    if (code === void 0) { code = ""; }
    return "(function(){" + code + "}).apply(global)";
}
exports.default = wrapper;
