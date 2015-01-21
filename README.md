# Type Brigade

> I find, if you speak about anything for long enough, it always comes back to type.
> <br/>—Peter Cocking,<br/>&nbsp;&nbsp;&nbsp;&nbsp;_Designer_

[Type Brigade](http://typebrigade.com) is Vancouver’s type design and typography speaker series and meetup. It’s community-driven and completely free to attend.

## Running locally

If you’d like to run the website locally, you’ll need [Node.js installed](http://nodejs.org). Then, run the following commands on your terminal. If you’re unfamiliar with the terminal, take a look at [this helpful introduction](http://wiseheartdesign.com/articles/2010/11/12/the-designers-guide-to-the-osx-command-prompt/).

```bash
# Clone the repository
git clone https://github.com/typebrigade/typebrigade.com

# Move into the folder you just downloaded
cd typebrigade.com

# Install dependencies the project uses
npm install

# Serve the project with [Harp](http://harpjs.com)
npm start
```

## Deploying

To deploy, you’ll need to have access to the project. Follow the [Running locally](#running-locally) instructions, and then:

```bash
# Deploy to staging
npm run stage

# Deploy to production
npm run deploy
```

## Licenses

Copyright © 2014–2015 [Type Brigade](http://typebrigade.com).

Code is available under [the MIT License (MIT)](LICENSE.md).

Blog posts, documents, graphic assets, speakers’ resources, etc. are copyright their respective owners unless otherwise specified.
