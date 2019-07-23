#!/bin/bash
export PATH=$PWD/node_modules/.bin:$PATH
rm -rf test
tiddlywiki test --init server
