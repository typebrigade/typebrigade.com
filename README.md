# Type Brigade

> I find, if you speak about anything for long enough, it always comes back to type.
> <br/>—Peter Cocking,<br/>&nbsp;&nbsp;&nbsp;&nbsp;_Designer_

[Type Brigade](http://typebrigade.com) is Vancouver’s type design and typography speaker series and meetup. It’s community-driven and completely free to attend.

## Running locally

If you’d like to run the website locally, you’ll need [Node.js installed](http://nodejs.org). Then, run the following commands on your terminal. If you’re unfamiliar with the terminal, take a look at [this helpful introduction](http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/).

```bash
# Install Harp
npm install -g harp

# Clone the repository
git clone https://github.com/typebrigade/typebrigade.com

# Move into the folder you just downloaded
cd typebrigade.com

# Install Bourbon and Neat through npm
npm install

# Serve the project with Harp
harp server
```

Node the display font Edmondsans is not included in this repository. Hopefully the fallback font will suffice until the WOFFs are on a CDN.

## Deploying to the [Harp Platform](http://harp.io)

Type Brigade uses a somewhat unconventional method of deploying to the Harp Platform. You’ll need to have access to the project on the Harp Platform and the Dropbox shared with you to deploy. Follow the [Running locally](#running-locally) instructions, and then:

```bash
# Compile to your Dropbox
npm run deploy
```

Now, just press “Publish” on the [Harp Platform](http://harp.io).

## Licenses

Code is available under [the MIT License (MIT)](LICENSE.md), Copyright © 2014 Type Brigade.

Blog posts, documents, graphic assets, speakers’ resources, etc. are copyright their respective owners unless otherwise specified.
