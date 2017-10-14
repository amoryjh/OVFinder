#!/usr/bin/env node
var shell = require('child_process').execSync;
var fs = require('fs');
var path = require('path');

const src= 'www';
const dist= 'docs';

shell(`mkdir -p ${dist}`);
shell(`cp -r ${src}/* ${dist}`);