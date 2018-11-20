---
title: WordPress SEO by Yoast
subtitle: case study
---

 - development repository : [GitHub](https://github.com/Yoast/wordpress-seo)
 - Composer repository : [Packagist](https://packagist.org/packages/yoast/wordpress-seo)
 - versioning : custom
 - Composer support issue : [#1890](https://github.com/Yoast/wordpress-seo/issues/1890)
 - Composer implementation pull request : [#1912](https://github.com/Yoast/wordpress-seo/pull/1912)
 - dependencies : own libraries, [PHP 5.2 autoloader](https://bitbucket.org/xrstf/composer-php52)
 - development dependencies : [Yoast Coding Standards](https://github.com/Yoast/yoastcs)

## Changes

WordPress SEO is one of the most popular WordPress plugins, with long running history of development.
While it had basic `composer.json` for a while, it wasn’t properly functioning since introduction of vendor own’s dependencies via Git submodules.

For new Composer implementation dependencies were converted to Composer packages.
Additionally [PHP CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) ruleset, used for unit testing and development, was also converted to package for sharing between projects. 

`classmap` autoload type is used for classes, since files adhere to WordPress naming convention and need to be handled by static scan on install.
To retain compatibility to PHP 5.2 environment special loader is required as dependency and run via scripts to generate compatible version. 

`composer/installers` package and `wordpress-plugin` type are declared for [path customization](/recipe/paths-control) when plugin is installed as part of [whole site stack](/recipe/site-stack).

`scripts` are used to automate configuration of coding style and trigger builds of special autoloader.

## composer.json

```json
{
    "name": "yoast/wordpress-seo",
    "description": "Improve your WordPress SEO: Write better content and have a fully optimized WordPress site using the WordPress SEO plugin by Yoast.",
    "keywords": [
        "wordpress",
        "seo"
    ],
    "homepage": "https://yoast.com/wordpress/plugins/seo/",
    "license": "GPL-2.0+",
    "authors": [
        {
            "name": "Team Yoast",
            "email": "support@yoast.com",
            "homepage": "https://yoast.com"
        }
    ],
    "type": "wordpress-plugin",
    "support": {
        "issues": "https://github.com/Yoast/wordpress-seo/issues",
        "forum": "https://wordpress.org/support/plugin/wordpress-seo",
        "wiki": "https://github.com/Yoast/wordpress-seo/wiki",
        "source": "https://github.com/Yoast/wordpress-seo"
    },
    "require": {
        "composer/installers": "~1.0",
        "yoast/license-manager": "dev-master",
        "yoast/i18n-module": "dev-master",
        "xrstf/composer-php52": "^1.0.17"
    },
    "require-dev": {
        "yoast/yoastcs": "dev-master"
    },
    "minimum-stability": "dev",
    "autoload": {
        "classmap": [
            "admin/",
            "frontend/",
            "inc/"
        ]
    },
    "scripts": {
        "config-yoastcs": [
            "\"vendor/bin/phpcs\" --config-set installed_paths ../../../vendor/wp-coding-standards/wpcs,../../../vendor/yoast/yoastcs",
            "\"vendor/bin/phpcs\" --config-set default_standard Yoast"
        ],
        "post-install-cmd": [
            "xrstf\\Composer52\\Generator::onPostInstallCmd"
        ],
        "post-update-cmd": [
            "xrstf\\Composer52\\Generator::onPostInstallCmd"
        ],
        "post-autoload-dump": [
            "xrstf\\Composer52\\Generator::onPostInstallCmd"
        ]
    }
}
```

## Documentation Links

 - [package links](https://getcomposer.org/doc/04-schema.md#package-links)
 - [autoload `classmap`](https://getcomposer.org/doc/04-schema.md#classmap)
 - [scripts](https://getcomposer.org/doc/articles/scripts.md)