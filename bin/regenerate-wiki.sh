#!/bin/bash
export PATH=$PWD/node_modules/.bin:$PATH
rm -rf wiki.html
tiddlywiki wiki --output $PWD --build wiki

## for some reason, "text/html" tells it output text/html but also "in the file text/html" and
## the last argument is ignored - but if the last argument is missing then it escapes the
## HTML and deposits the escaped data in text/html.  If the name of the file is not text/html
## then it generates an escaped file.
#tiddlywiki wiki --output $PWD --render "$:/core/save/all" text/html /tmp/unused-argument
#mv text/html wiki.html
#rm -rf text
ls -al wiki.html
head -n 1 wiki.html
