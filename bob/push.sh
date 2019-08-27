#!/bin/bash
git pull --recurse-submodules origin setup
cd wikis/korsimoro
git commit -a -m "$@"
cd ../enterprise
git commit -a -m "$@"
git push origin master
cd ../korsimoro
git push origin master
cd ..
git add enterprise korsimoro
git commit -m "Updating: $@"
git push origin setup
