<p align="center">
  <a href="https://tommrodrigues.github.io"><img src="https://i.ibb.co/ydZrYYX/ezgif-com-gif-maker-3.png" height="100"></a>
</p>

## Description

This repository contains the source code for my blog available at [tommrodrigues.github.io](https://tommrodrigues.github.io).

The site uses the [Novela theme](https://github.com/narative/gatsby-theme-novela) developed by [Narative](https://www.narative.co), and is built with [GatsbyJS](https://www.gatsbyjs.org).

## Usage

Download and prepare the site:

```
gatsby new Blog https://github.com/Tommrodrigues/Blog
```

### Customisation

From the `content` folder, you can modify authors and write posts in [Markdown](https://www.markdownguide.org/basic-syntax/). Site settings can be adjusted in the `gatsby-config.js` and `static/admin/config.yml` files.

The favourite icon can be changed at `stc/assets/favicon.png`, and the logo can be changed at `src/@narative/gatsby-theme-novela/components/Logo/index.js`.

See [here](https://github.com/narative/gatsby-theme-novela#customization) for more detailed customisation, and [here](https://github.com/narative/gatsby-starter-novela) for the official example site.

### Development

Run a local development version of the site:
```
gatsby clean
gatsby develop
```

Available at: http://localhost:8000

### Build

Prepare a deployable version of the site:

```sh
gatsby clean
gatsby build
```

Ready for deployment from `public` folder

## Notes

Did I make a mistake? Please open a [pull request](https://github.com/Tommrodrigues/Blog/pulls)!
