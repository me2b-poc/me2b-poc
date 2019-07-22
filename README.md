# Me2B Identity Tech PoC




- [Open the wiki](./wiki.html)

You can use the [editor on GitHub](https://github.com/korsimoro/me2b-poc/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

## Requirements

1. __The wiki will be freely available to the global public.__

The wiki will not be associated with the Me2B Alliance website--it will be made available as a freestanding public resource. (Me2B will provide the domain.)
Wiki must have admin/content editor capabilities.
The wiki must have an intuitive graph-based UI.

The full ontology of the wiki needs to be created, but minimally needs to include the fields that are included here:  https://zdrive.li/LnH
The categories of Trustable Technology enabler organizations are currently defined as follows but these should be vetted and validated in developing the final ontology:
Movements (Education, PR, Awareness)
Standards Bodies & Open Source
Implementations
Consumer  Organizations
Trade Organizations / Supplier Support
Certifications
Policy & Regulatory
Thinktanks
Academic & Research

The Me2B Alliance will use the wiki to easily identify what products and services are being provided by catalyst and support organizations working on privacy related iniatitives.
The Me2B Alliance will use the wiki to identify interdependencies between Me2B and external organizations:  what Me2B Alliance gives to and what it receives from a particular organization.
Ideally, the interdependencies can be linked to project planning tools (Jira, Asana, tbd) in order to reflect actual timing and progress (nice to have).

Anyone can use the Wiki to understand what organizations are working on particular aspects of promoting digital privacy, dignity and empowerment.  
Anyone can edit wiki entries.  Should we consider some kind of registration?  

The proposal should include the initial population of the wiki based on the Me2B Alliance link above and any other relevant sources.
The proposal may include support for a content moderator.
The proposal should include some nominal ongoing maintenance.

The wiki software platform should be existing commercially available technology (i.e. tried and true).  


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
