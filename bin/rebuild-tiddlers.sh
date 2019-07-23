#!/bin/bash
export PATH=$PWD/node_modules/.bin:$PATH
rm -rf test
tiddlywiki test --init server
tiddlywiki test --load ./wiki.html
tiddlywiki test --output $PWD --render "$:/core/save/all" wiki2.html
