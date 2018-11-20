---
title: Laps
subtitle: case study
---

 - development repository : [GitHub](https://github.com/Rarst/laps)
 - Composer repository : [Packagist](https://packagist.org/packages/rarst/laps)
 - versioning : semantic
 - dependencies : [Symfony Stopwatch](https://symfony.com/doc/current/components/stopwatch.html), [mustache.php](https://github.com/bobthecow/mustache.php)
 - development dependencies : [Twitter Bootstrap](http://getbootstrap.com/)

## Development

Laps is light profiler plugin for WordPress. It was developed exclusively as Composer package.

`classmap` autoload type is used for classes, since files adhere to WordPress naming convention and need to be handled by static scan on install.

Stopwatch component from [Symfony framework](http://symfony.com/) and PHP port of [mustache templating language ](http://mustache.github.io/) are required as Composer dependencies and used for timing events and templating output respectively.

Composer package for Twitter Bootstrap is required as development dependency to make use of importing styles and scripts from its source.

`composer/installers` package and `wordpress-plugin` type are declared for [path customization](/recipe/paths-control) when plugin is installed as part of [whole site stack](/recipe/site-stack).

## composer.json

```json
{
    "name"       : "rarst/laps",
    "description": "Light WordPress profiler.",
    "keywords"   : ["wordpress", "performance"],
    "type"       : "wordpress-plugin",
    "homepage"   : "https://github.com/Rarst/laps",
    "license"    : "MIT",
    "authors"    : [
        {
            "name"    : "Andrey Savchenko",
            "homepage": "https://www.rarst.net/"
        }
    ],
    "support"    : {
        "issues": "https://github.com/Rarst/laps/issues"
    },
    "autoload"   : {
        "classmap": ["src/"]
    },
    "require"    : {
        "composer/installers": "~1.0",
        "symfony/stopwatch"  : "~2.4",
        "mustache/mustache"  : "~2.4"
    },
    "require-dev": {
        "twbs/bootstrap": "~3.2"
    }
}
```

## Documentation Links

 - [package links](https://getcomposer.org/doc/04-schema.md#package-links)
 - [autoload `classmap`](https://getcomposer.org/doc/04-schema.md#classmap)