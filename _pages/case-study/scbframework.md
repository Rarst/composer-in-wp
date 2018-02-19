---
title: scbFramework
subtitle: case study
---

 - development repository : [GitHub](https://github.com/scribu/wp-scb-framework)
 - Composer repository : [Packagist](https://packagist.org/packages/scribu/scb-framework)
 - Composer support issue : [#28](https://github.com/scribu/wp-scb-framework/issues/28)
 - Composer implementation pull request : [#29](https://github.com/scribu/wp-scb-framework/pull/29)
 - versioning : development only
 - no dependencies

## Changes

scbFramework is a set of helper classes and functions to be used in extensions.

Library includes elaborate custom loader to handle case when multiple instances are included. Composer autoload was added in parallel to it on assumption of shared use as dependency:

 - classes autoload is built by static scan via `classmap` autoload type
 - one of the files additionally has function definitions and unconditionally included via `files` autoload type
 - alternate bootstrap file is included in autoload, bypassing custom loader completely

Custom loader is preserved and remains functional for non-Composer use.

Since library is not being semantically versioned from Composer point of view it is available as rolling development branch to be used with `*@dev` version constraint.

## composer.json

```json
{
    "name"       : "scribu/scb-framework",
    "description": "A set of useful classes for faster plugin development",
    "keywords"   : ["wordpress"],
    "homepage"   : "https://github.com/scribu/wp-scb-framework",
    "license"    : "GPL-3.0+",
    "authors"    : [
        {
            "name"    : "Cristi Burcă",
            "homepage": "http://scribu.net/"
        }
    ],
    "support"    : {
        "issues": "https://github.com/scribu/wp-scb-framework/issues",
        "source": "https://github.com/scribu/wp-scb-framework",
        "wiki"  : "https://github.com/scribu/wp-scb-framework/wiki"
    },
    "autoload"   : {
        "classmap": ["."],
        "files"   : ["load-composer.php", "Util.php"]
    }
}
```

## Documentation Links

 - [autoload `classmap`](http://getcomposer.org/doc/04-schema.md#classmap)
 - [autoload `files`](http://getcomposer.org/doc/04-schema.md#files)