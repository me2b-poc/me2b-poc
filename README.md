# Me2B Identity Tech PoC

- [Open the original wiki](./wiki.html)
- [Open the rebuilt wiki](./wiki2.html)
- [Ontology](./ontology.html)
- [Raw Tiddlers](https://github.com/korsimoro/me2b-poc/tree/master/test/tiddlers)
- You can use the [editor on GitHub](https://github.com/me2b-poc/me2b-poc/edit/master/README.md) to maintain this file
- [Proposal](./proposal.html)
- [Requirements](./requirements.html)

## Whenever you commit to this repository

- GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages
  in your site, from the content in your Markdown files.
- **CI/CD** build pending

  The CI/CD build will take all updated tiddlers and combine them into a single
  file.  It may also perform some other tasks.

## Links

- https://tiddlywiki.com/talkytalky/



# Design Considerations

- minimize 'devops' and technical development

### Budget

Using off the shelf components, with minimal


### Background

https://stackshare.io/stackups/bitbucket-vs-github-vs-gitlab

git itself is hosted on kernel.org - not gitlab, github, or bitbucket

## Theory of operation

### Saving Edits

TiddlyWiki was developed as a "personal wiki"


## Requirements

The exact requirements for operations and maintenance can not be fully
specified as they depend on further investigation.  However, the costs
can be estimated.  For example, in order to allow saving of tiddlywiki
edits a micro server or equivalent serverless endpoint
(AWS Lambda, Auth0 WebTask) might be required if the GitHub saver can
not be made to work.


### $0 - A dedicated github account

I recommend a dedicated GitHub account, which is currently free - this will
enable safe use of tools and services which use OAuth to couple w/ GitHub.
See the discussion of prose.io below.

### $10-$50/mo - A server of some sort




# Other Tools

## Prose
prose.io is an option and recommended by some in the TiddlyWiki community,
such as https://github.com/danielo515/TW5-auto-publish2gh-pages - however,
the Authentication configuration relative to a github account is a bit
generous and it is possible, but only if a dedicated account is used.  It is
not included in this PoC because there is no way to authorize prose.io to
access "a specific public repository", only to grant it "100% access to all
of my personal and private github information."


### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/korsimoro/me2b-poc/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
