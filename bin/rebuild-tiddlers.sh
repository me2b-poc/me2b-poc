#!/bin/bash
rm -rf test
tiddlywiki test --init server
tiddlywiki test --load ./wiki.html
tiddlywiki test --output $PWD --render "$:/core/save/all" wiki2.html
