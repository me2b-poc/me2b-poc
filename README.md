# Me2B Identity Tech PoC

## [Click here to ojpen the wiki](./wiki.html)

## Other links
- [Circle CI Console](https://circleci.com/gh/me2b-poc/workflows/me2b-poc)
- _Prose.io_
	- [Organizations](https://prose.io/#me2b-poc/me2b-poc/tree/master/wiki/tiddlers/organizations)
	- [People](https://prose.io/#me2b-poc/me2b-poc/tree/master/wiki/tiddlers/organizations)
	- [About](https://prose.io/#me2b-poc/me2b-poc/tree/master/wiki/tiddlers/about)

	prose.io is an option and recommended by some in the TiddlyWiki community,
	such as https://github.com/danielo515/TW5-auto-publish2gh-pages - however,
	the Authentication configuration relative to a github account is a bit
	generous and it is possible, but only if a dedicated account is used.  It is
	not included in this PoC because there is no way to authorize prose.io to
	access "a specific public repository", only to grant it "100% access to all
	of my personal and private github information."


- [Ontology](./ontology.html)
- You can use the [editor on GitHub](https://github.com/me2b-poc/me2b-poc/edit/master/wiki/tiddlers/organizations) to maintain this file
- https://tiddlywiki.com/talkytalky/
- https://tiddlywiki.com/static/TiddlerFiles.html
- http://tw5magick.tiddlyspot.com/


## Automatic Tasks

Whenever you commit to this repository....


- **CircleCI**

  The CircleCI script will take all updated tiddlers and combine them into a single
  file.  It may also perform some other tasks.

  This is handled by CircleCI and the console is visible [here](https://circleci.com/gh/me2b-poc/workflows/me2b-poc)

- GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages
  in the site, from the content in your Markdown files.
