'use strict';

var extendedEjs = require('extended-ejs');

function renderer (data, locals) {
    return extendedEjs.render(data.text, locals, data.path);
}

renderer.compiled = function (data) {
    return extendedEjs.compile(data.text, null, data.path);
};

module.exports = renderer;