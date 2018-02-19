---
title: Fragment Cache
subtitle: case study
---

 - development repository : [GitHub](https://github.com/Rarst/fragment-cache)
 - Composer repository : [Packagist](https://packagist.org/packages/rarst/fragment-cache)
 - versioning : semantic
 - dependencies : [Pimple](http://pimple.sensiolabs.org/), [TLC Transients](/case-study/tlc-transients)
 - suggests : [Update Blocker](https://github.com/Rarst/update-blocker)

## Development

Fragment Cache is caching plugin for WordPress. It was developed exclusively as Composer package.

`classmap` autoload type is used for classes, since files adhere to WordPress naming convention and need to be handled by static scan on install.

Pimple and TLC Transients libraries are required as Composer dependencies. Main plugin’s class extends Pimple and acts as dependency injection container for handler classes of different cache types. TLC Transients functionality is used for asynchronous cache updates.

[Update Blocker](https://github.com/Rarst/update-blocker) plugin is suggested to prevent invalid update of Fragment Cache from official WordPress repository.

`composer/installers` package and `wordpress-plugin` type are declared for [path customization](/recipe/paths-control) when plugin is installed as part of [whole site stack](/recipe/site-stack).

## composer.json

```json
{
    "name"        : "rarst/fragment-cache",
    "description" : "WordPress plugin for partial and async caching of heavy front-end elements.",
    "keywords"    : ["wordpress", "cache", "performance"],
    "type"        : "wordpress-plugin",
    "homepage"    : "https://github.com/Rarst/fragment-cache",
    "license"     : "GPL-2.0+",
    "authors"     : [
        {
            "name"    : "Andrey Savchenko",
            "email"   : "contact@rarst.net",
            "homepage": "http://www.Rarst.net/"
        }
    ],
    "support"     : {
        "issues": "https://github.com/Rarst/fragment-cache/issues"
    },
    "require"     : {
        "composer/installers"          : "~1.0",
        "markjaquith/wp-tlc-transients": "~1.0",
        "php"                          : ">=5.3",
        "pimple/pimple"                : "~2.0"
    },
    "suggest": {
        "rarst/update-blocker": "Prevents invalid updates from official repositories"
    },
    "autoload"    : {
        "classmap": ["php/"]
    }
}
```

## Documentation Links

 - [package links](http://getcomposer.org/doc/04-schema.md#package-links)
 - [autoload `classmap`](http://getcomposer.org/doc/04-schema.md#classmap)