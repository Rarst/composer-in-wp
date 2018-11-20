---
title: Your Guide to Composer in WordPress
excerpt: Making use of Composer for WordPress sites and extensions
frontpage: true
---
This site was asked for too many times to not happen. Think of it as unofficial companion to [Composer documentation](https://getcomposer.org/doc/) for WordPress developers.

### Prerequisites

Install Composer by following instructions in documentation for [*nix](https://getcomposer.org/doc/00-intro.md#installation-nix) or [Windows](https://getcomposer.org/doc/00-intro.md#installation-windows).

## Why Bother

Composer is **dependency manager** command line utility and accompanying infrastructure tools. It is made in PHP and for PHP.

It can help you improve how you **develop, share, make use of, host, and deploy** your WordPress code and whole site stacks.

### Dependency

So what is “dependency”? Basic building block of Composer world is “package” and it is:

 - a folder (or file)
 - probably with PHP code
 - preferably with `composer.json` file
 - preferably [semantically versioned](https://semver.org/)

So pretty much anything can be package. Packages preferably contain information that Composer can read and process. That information can include which other packages at which versions are required as dependencies.

In WordPress world Composer package can be:

 - WordPress core itself
 - extension (plugin or theme)
 - whole site (with core, themes, and plugins as dependencies)

It also opens up a way to depend on (and share) generic PHP libraries, without embedding their sources.

There is also special kind of [platform package](https://getcomposer.org/doc/02-libraries.md#platform-packages) dependency. It allows to depend on specific PHP version and extensions.

### Manager

Packages are not of much use somewhere out there. That is why from a starting point (“root” package) Composer will:

 - calculate its dependencies
 - download them (or retrieve from local cache)
 - organize them into directories
 - produce combined class autoload file

Composer thrives on compatibility and packages can come from:

 - [Composer repositories](https://getcomposer.org/doc/05-repositories.md#composer)
 - direct downloads
 - version control systems
   - [Subversion](http://subversion.apache.org/)
   - [Git](https://git-scm.com/) (+ [GitHub](https://github.com/) downloads)
   - [Mercurial](https://www.mercurial-scm.org/) (+ [Bitbucket](https://bitbucket.org/) downloads)
 - [PEAR](http://pear.php.net/) channels
 - [artifacts](https://getcomposer.org/doc/05-repositories.md#artifact) (local ZIP archives)

## Recipes

This site will provide you with information on how to:

 - [create package for WordPress core](/recipe/core-package)
 - [control plugins and themes paths](/recipe/paths-control)
 - [create whole site Composer package](/recipe/site-stack)
 

## Case Studies

Theory is no replacement for experience and there are already practical examples of using Composer with WordPress code (old and new) available. 

### Updating for Composer

 - [WordPress SEO](/case-study/wordpress-seo) plugin by team Yoast
 - [TLC Transients](/case-study/tlc-transients) library by Mark Jaquith
 - [scbFramework](/case-study/scbframework) library by Cristi “scribu” Burcă

### Developing for Composer

 - [Laps](/case-study/laps) plugin by Andrey “Rarst” Savchenko
 - [Fragment Cache](/case-study/fragment-cache) plugin by Andrey “Rarst” Savchenko