<!---
title = Laps
subtitle = case study
-->

 - development repository : [Bitbucket](https://bitbucket.org/Rarst/laps)
 - Composer repository : Satis at [rarst.net](http://rarst.net/packages.json)
 - versioning : semantic
 - dependencies : [Symfony Stopwatch](http://symfony.com/doc/current/components/stopwatch.html), [mustache.php](https://github.com/bobthecow/mustache.php)

## Development

Laps is light profiler plugin for WordPress. It was developed exclusively as Composer package.

`classmap` autoload type is used for classes, since files adhere to WordPress naming convention and need to be handled by static scan on install.

Stopwatch component from [Symfony framework](http://symfony.com/) and PHP port of [mustache templating language ](http://mustache.github.io/) are required as Composer dependencies and used for timing events and templating output respectively.

`composer/installers` package and `wordpress-plugin` type are declared for [path customization](/recipe/paths-control) when plugin is installed as part of [whole site stack](/recipe/site-stack).

Package is not listed on Packagist, but is available from public Satis-generated repository and can be installed via:

    composer create-project rarst/laps --repository-url=http://rarst.net

## composer.json

	{
	        "name"       : "rarst/laps",
	        "description": "Light WordPress profiler.",
	        "keywords"   : ["wordpress", "performance"],
	        "type"       : "wordpress-plugin",
	        "homepage"   : "https://bitbucket.org/Rarst/laps",
	        "license"    : "MIT",
	        "authors"    : [
	                {
	                        "name"    : "Andrey Savchenko",
	                        "email"   : "contact@rarst.net",
	                        "homepage": "http://www.Rarst.net/"
	                }
	        ],
	        "support"    : {
	                "issues": "https://bitbucket.org/Rarst/laps/issues",
	                "source": "https://bitbucket.org/Rarst/laps/src"
	        },
	        "autoload"   : {
	                "classmap": ["src/"]
	        },
	        "require"    : {
	                "composer/installers": "~1.0",
	                "symfony/stopwatch"  : "~2.2.0",
	                "mustache/mustache"  : "~2.3.0"
	        }
	}

## Documentation Links

 - [package links](http://getcomposer.org/doc/04-schema.md#package-links)
 - [autoload `classmap`](http://getcomposer.org/doc/04-schema.md#classmap)