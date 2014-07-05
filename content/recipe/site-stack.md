<!---
title = Site Stack
subtitle = recipe
description = composer.json example for whole WordPress site Composer stack
-->

The whole site stack package is end game of using Composer with WordPress.

## composer.json

It would depend on your project what exactly to put in a package and how to configure it. 

For example it can be something like this ([original gist](https://gist.github.com/Rarst/5300767)) :

    {
        "name"        : "rarst/install-test",
        "description" : "Test project for WordPress stack via Composer",
        "authors"     : [
            {
                "name"    : "Andrey Savchenko",
                "email"   : "contact@rarst.net",
                "homepage": "http://www.Rarst.net/"
            }
        ],
        "type"        : "project",
        "repositories": [
            {
                "type": "composer",
                "url" : "http://wpackagist.org"
            },
            {
                "type": "composer",
                "url" : "http://rarst.net"
            }
        ],
        "config"      : {
            "vendor-dir": "wp-content/vendor"
        },
        "require"     : {
            "johnpbloch/wordpress"            : ">=3.9",
            "rarst/fragment-cache"            : "~1.0",
            "wpackagist-plugin/wp-super-cache": "*"
        },
        "require-dev" : {
            "rarst/laps"                                  : "~1.2",
            "rarst/toolbar-theme-switcher"                : "~1.2",
            "wpackagist-plugin/a-fresher-cache"           : "*",
            "wpackagist-plugin/core-control"              : "*",
            "wpackagist-plugin/monster-widget"            : "*",
            "wpackagist-plugin/theme-check"               : "*",
            "wpackagist-plugin/user-switching"            : "*",
            "wpackagist-plugin/wcm-user-language-switcher": "*"
        },
        "extra"       : {
            "wordpress-install-dir": "wp"
        }
    }

## Breakdown

 - name is within my `rarst/*` vendor namespace
 - `type` is set to `project` (rather than default `library`), it is mostly semantic hint that this is root package
 - `repositories` declare:
  -  [WordPress Packagist](http://wpackagist.org/) proxy for Composer access to official WordPress plugin repository
  -  my own Composer repository at [Rarst.net/packages.json](http://www.rarst.net/packages.json)
 - `vendor` directory is relocated inside `wp-content`
 - WordPress core, custom theme and number of plugins are listed as dependencies, part of them as for optional development context
 - WordPress [core package](/recipe/core-package) is configured to go into `wp` subdirectory (using custom `wordpress-install-dir` configuration option of core installer, required by core package)

## Installation

### From Local File

1. [Download `composer.json` from gist](https://gist.github.com/Rarst/5300767/raw/composer.json) into empty directory
2. Run `composer install --prefer-dist` in that directory

### From Remote Repository

Run:

    composer create-project rarst/install-test wordpress dev-master --repository-url=http://rarst.net --prefer-dist

This will tell Composer to create project:

 - from `rarst/install-test` package
 - in `wordpress` directory
 - at `dev-master` version
 - using custom [`rarst.net/packages.json`](http://rarst.net/packages.json) Composer repository
 - favor direct downloads of packages over cloning from version control

### Result

After install the project directory will have the following content:

 - `wp` WordPress core
 - `wp-content`
  - `plugins`
     - packages of `wordpress-plugin` type 
  - `themes`
     - packages of `wordpress-theme` type 
  - `vendor`
     - packages of `library` type
     - `autoload.php` combined class autoload file for all packages
 - `composer.json` project file we ran install for
 - `composer.lock` file with exact current state of packages

In one command we have neat and nearly complete subdirectory install! The example package we used only lacks properly set up `wp-config.php` and `index.php` for complete WordPress site.

## Documentation Links

 - [package properties](http://getcomposer.org/doc/04-schema.md#properties)
 - [`composer install` command](http://getcomposer.org/doc/03-cli.md#install)
 - [`composer create-project` command](http://getcomposer.org/doc/03-cli.md#create-project)