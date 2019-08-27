#!/bin/bash
cd /usr/src/app/TiddlyWiki5
exec node ./tiddlywiki.js ./wikis/main --wsserver
