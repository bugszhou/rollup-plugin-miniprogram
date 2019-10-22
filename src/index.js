"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./wrapper/index");
function createMiniprogramWrapper() {
    return {
        name: 'miniprogram',
        generateBundle: function (options, bundle) {
            Object.keys(bundle).forEach(function (key) {
                console.log(options.file);
                if (options.file.indexOf("miniprogram") > -1) {
                    bundle[key].code = bundle[key].code.replace(/require\((\'|\")util(\'|\")\)/, 'global.util');
                    bundle[key].code = index_1.default(bundle[key].code);
                }
            });
        }
    };
}
exports.default = createMiniprogramWrapper;
