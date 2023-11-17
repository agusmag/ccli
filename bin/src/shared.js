"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseOptions = void 0;
exports.baseOptions = {
    quiet: { type: 'boolean', default: false, alias: 'q' },
    json: { type: 'boolean', conflicts: 'output' }
};
