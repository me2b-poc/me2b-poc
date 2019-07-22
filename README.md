# Me2B Identity Tech PoC

- [Open the original wiki](./wiki.html)
- [Open the rebuilt wiki](./test/output/index.html)
- [Ontology](./ontology.html)

You can use the [editor on GitHub](https://github.com/korsimoro/me2b-poc/edit/master/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.


# Links
https://tiddlywiki.com/talkytalky/


# Proposal

## Stages of this project include:

### Clarifying requirements
- The proposal will include a complete set of candidate
requirements along with a PoC.

### Defining the Ontology structure
  - link to existing ontology work
  - take ontology from https://zdrive.li/LnH

### Building & Populating the software platform

### Ongoing support of the software platform.

### Ongoing support of the wiki

It is not reasonable to expect the wiki to be managed fully and
completely by the community.  The community should be tapped to
the greatest extent possible, however, spontaneous and complete
support is not in the nature of this sort of endeavour.  On the
other hand....

what happens is that effort transitions from authorial to
editorial to curatorial over time, specifically as the system
maintains and increases in value.

# Design Considerations

- minimize 'devops' and technical development

### Budget

Using off the shelf components, with minimal

## Requirements

1. _The wiki will be freely available to the global public._

  A public github repository is publicly available, and can be
  copied to any git provider.  The wiki exists in a git repository
  hosted on github which enables the use of github specific
  features including
  - as github pages (free hosting)
  - issue tracking
  - an operations-oriented wiki (e.g. a wiki about the wiki)

  Editing of the **official** wiki will require `write access`
  to the repository, which is enabled via a free github account
  and requesting write access from a repository owner.  This is
  the standard model used by almost all open-source projects, and
  has many well established variations.  This is similar also
  to Wikipedia - which is **not** editable by the general public,
  but only by users who have registered with Wikipedia and who
  have been granted write access.

  It is worth noting that anyone can make their own copy of the
  wiki, host it anywhere, and edit to their own delight **without**
  registering with github - the restriction of having a github
  account is only in place for two reasons
  - be able to track **who** made what changes
  - provide a barrier to **spam** and **bot** edits


2. _The wiki will not be associated with the Me2B Alliance website--it will be made available as a freestanding public resource. (Me2B will provide the domain.)_

  This is well supported by github pages.

3. _Wiki must have admin/content editor capabilities._

  This is achieved using standard open-source access patterns,
  where the owner of a repository has ultimate control and where other participants have different levels of control as specified by the owner.  Because of the public nature of a the repository, anyone can make a copy and become the owner of their own instance of the repository - but the **official** copy, which is bound to the domain in #2 above, always has a point of primary control.

4. _The wiki must have an intuitive graph-based UI._

  The wiki supports the TiddlyMap editor, which is a common
  graph editor - however, it is not clear if it is **intuitive**,
  as that depends heavily on the background skills and expectations
  of the user.  What is **intuitive** to one person can be opaque
  and cumbersome to another and often changes over time for a
  given user.

5. _The full ontology of the wiki needs to be created, but minimally needs to include the fields that are included here:  https://zdrive.li/LnH_

6. _The categories of Trustable Technology enabler organizations are currently defined as follows but these should be vetted and validated in developing the final ontology:_

  - Movements (Education, PR, Awareness)
  - Standards Bodies & Open Source
  - Implementations
  - Consumer  Organizations
  - Trade Organizations / Supplier Support
  - Certifications
  - Policy & Regulatory
  - Thinktanks
  - Academic & Research

7. _The Me2B Alliance will use the wiki to easily identify what products and services are being provided by catalyst and support organizations working on privacy related initiatives._

8. _The Me2B Alliance will use the wiki to identify interdependencies between Me2B and external organizations:_
    - _what Me2B Alliance gives to and what it receives from a particular organization._
    - _Ideally, the interdependencies can be linked to project planning tools (Jira, Asana, tbd) in order to reflect actual timing and progress (nice to have)._

9. _Anyone can use the Wiki to understand what organizations are working on particular aspects of promoting digital privacy, dignity and empowerment._

10. _Anyone can edit wiki entries.  Should we consider some kind of registration?_

  This is dealt with in #1 above, and care must be taken to be
  very clear on what is meant by anyone.  Wikipedia, for example,
  is **not** editable by anyone - it is **only** editable by
  registered users.  **Anyone** means that any random **bot** or
  **agent** or **script** or **person** could make any change at
  any time, with no restriction whatsoever.  This is not advisable
  for any asset on the internet.

  Restricting write access to **registered** or **authorized** users, likewise, does not mean that there is a strict, centrally
  controlled hierarchy.  100% of the open-source initiatives in
  the world use this model.  The degree of open-ness of a project
  is determined by the

11. _The proposal should include the initial population of the wiki based on the Me2B Alliance link above and any other relevant sources._
12. _The proposal may include support for a content moderator._
13. _The proposal should include some nominal ongoing maintenance._

14. _The wiki software platform should be existing commercially available technology (i.e. tried and true)._

    GitHub powers the

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
