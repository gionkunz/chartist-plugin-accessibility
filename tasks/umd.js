/**
 * umd
 * ===
 *
 * Wraps the library into an universal module definition (AMD + CommonJS + Global).
 *
 * Link: https://github.com/bebraw/grunt-umd
 */

'use strict';

module.exports = function (grunt) {
  return {
    dist: {
      src: '<%= pkg.config.src %>/scripts/chartist-plugin-accessibility.js',
      dest: '<%= pkg.config.dist %>/chartist-plugin-accessibility.js',
      objectToExport: 'Chartist.plugins.ctAccessibility',
      deps: {
        default: ['Chartist'],
        amd: ['chartist'],
        cjs: ['chartist'],
        global: ['Chartist']
      },
      indent: '  '
    }
  };
};
