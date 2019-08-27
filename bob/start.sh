#!/usr/bin/env bash
docker run -it --rm \
	-p 127.0.0.1:8437:8437 \
	-v $PWD/wikis:/usr/src/app/TiddlyWiki5/wikis \
	idtechwiki "$@"
