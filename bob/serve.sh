#!/usr/bin/env bash
docker run -it \
	--restart always \
	-p 127.0.0.1:8437:8437 \
	-v $PWD/wikis:/usr/src/app/TiddlyWiki5/wikis \
	-d \
	idtechwiki "$@"
