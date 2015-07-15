'use strict';
var path = require('path');
var assert = require('assert');
var Composer = require('./angular-composer');

it('should support configuration with options parameter', function (cb) {
	
	var options = {};
	var composer = new Composer(options);
	assert.equal(true, true);
	cb();
});

it('should support configuration with functions', function (cb) {
	
	var composer = new Composer();
	composer.modules('./app/');
	assert.equal(true, true);
	cb();
});