---
title: Core Package
subtitle: recipe
description: How to create Composer package for WordPress core
---

<div class="alert alert-info text-center" markdown="1">You can skip this and use [`johnpbloch/wordpress`](https://packagist.org/packages/johnpbloch/wordpress) package.</div>

Composer works best with code accompanied by `composer.json` and that is something WordPress core hadn’t adopted yet. There is a bit of tinkering involved to create shim package for core.

## Create Custom Package

Package description follows same rules as `composer.json` file, with addition of version and where to download distribution and/or source from.

With Composer-aware projects these are usually automagically inferred from combination of `composer.json` and version control. Tags and branches serve as versions, version control itself and APIs for archives (for GitHub and Bitbucket) as downloads.

For Composer-unaware project the mechanics are much the same, but the downside is that we need to define package for every version individually.

### Release Package

Package for a specific release version of WordPress can be defined like this:


    {
    	"type"   : "package",
    	"package": {
    		"name"   : "rarst/wordpress",
    		"type"   : "wordpress-core",
    		"version": "3.6",
    		"dist"   : {
    			"url" : "http://wordpress.org/wordpress-3.6.zip",
    			"type": "zip"
    		},
    		"source" : {
    			"url"  : "https://github.com/WordPress/WordPress",
    			"type" : "git",
    			"reference": "3.6"
    		},
    		"require": {
    			"johnpbloch/wordpress-core-installer": "~0.1"
    		}
    	}
    }

 - for name I am declaring it in my own `rarst/*` vendor namespace, so it doesn’t conflict with anything
 - `wordpress-core` type and `johnpbloch/wordpress-core-installer` dependency serve to allow clean path customization (otherwise Composer will try to nest core in a vendor directory), see [site stack recipe](/recipe/site-stack) for details
 - distribution points to simple direct download from official site
 - source points to the release tag at official GitHub mirror, although original Subversion repository would work as well

## Require Package in Project

Now that you have package definition you can drop it into right into `composer.json` of site package, [`repositories : []` field](http://getcomposer.org/doc/04-schema.md#repositories). Easy, but gets bulky fast for multiple versions.

More organized approach is to [host your own Satis repository](http://getcomposer.org/doc/articles/handling-private-packages-with-satis.md) and have it process packages.

Then making use of it in project becomes:

    {
	    "repositories" : [
	    	{
	    		"type" : "composer",
	    		"url"  : "http://rarst.net"
	    	}
	    ],
	    "require" : {
	    	"rarst/wordpress" : ">=3.6"
	    }
    }

This will have Composer look at [rarst.net/packages.json](http://www.rarst.net/packages.json) during install and pick appropriate package version to use.

## Documentation Links
 
- [package links](http://getcomposer.org/doc/04-schema.md#package-links) 
- [package repository](http://getcomposer.org/doc/05-repositories.md#package-2)