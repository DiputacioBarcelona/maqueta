const path = require('path');

module.exports = {
    mode: 'production',
    entry: './assets/js/diba-base.js',
    output: {
        filename: 'diba-maqueta.js',
        path: path.resolve(__dirname, 'assets/js'),
    }
};
