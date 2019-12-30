#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var args = require("optimist").argv;
var chokidar = require("chokidar");

var componentIndex = path.join("component-index.js");
var componentIndexTmp = componentIndex + ".tmp";
var componentsDir = path.join("src", "components");
var componentGlob = "**/*.js";
/**
 * WIP: Work in Progress
 */

var prevFiles = [];

function reskindex() {
  var files = glob.sync(componentGlob, { cwd: componentsDir }).sort();

  prevFiles = files;

  for (file of files) {
    const n = file.lastIndexOf("/");
  }

  var strm = fs.createWriteStream(componentIndexTmp);

  strm.write("/*\n");
  strm.write(" * THIS FILE IS AUTO-GENERATED\n");
  strm.write(
    " * You can edit it you like, but your changes will be overwritten,\n"
  );
  strm.write(" * so you'd just be trying to swim upstream like a salmon.\n");
  strm.write(" * You are not a salmon.\n");
  strm.write(" */\n\n");
}

reskindex();
