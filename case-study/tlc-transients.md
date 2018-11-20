---
title: TLC Transients
subtitle: case study
---

 - development repository : [GitHub](https://github.com/markjaquith/WP-TLC-Transients)
 - Composer repository : [Packagist](https://packagist.org/packages/markjaquith/wp-tlc-transients)
 - Composer support issue : [#16](https://github.com/markjaquith/WP-TLC-Transients/issues/16)
 - Composer implementation pull request : [#17](https://github.com/markjaquith/WP-TLC-Transients/pull/17)
 - versioning : semantic
 - no dependencies

## Changes

TLC Transients library is wrapper for the WordPress Transients API, which provides additional functionality for use in extensions.

Library was originally single monolithic file with class/function definitions and bootstrap code. For Composer support code was reorganized by breaking out definitions into individual files.

Since WordPress has own coding style convention for class and file naming, `classmap` autoload type in Composer is used to build class map via static scan on install. `files` autoload is additionally used to unconditionally include functions definition file.  

Bootstrap code includes definitions explicitly (if Composer autoload is not used) and is fully compatible with non-Composer use.

## composer.json

```json
{
    "name"       : "markjaquith/wp-tlc-transients",
    "description": "A WP transients interface with support for soft-expiration, background updating of the transients.",
    "keywords"   : ["wordpress", "cache"],
    "homepage"   : "https://github.com/markjaquith/WP-TLC-Transients",
    "license"    : "GPL-2.0+",
    "authors"    : [
        {
            "name"    : "Mark Jaquith",
            "homepage": "http://markjaquith.com/"
        }
    ],
    "support"    : {
        "issues": "https://github.com/markjaquith/WP-TLC-Transients/issues",
        "source": "https://github.com/markjaquith/WP-TLC-Transients"
    },
    "autoload"   : {
        "classmap": ["class-tlc-transient.php", "class-tlc-transient-update-server.php"],
        "files"   : ["functions.php"]
    }
}
```

## Documentation Links

 - [autoload `classmap`](https://getcomposer.org/doc/04-schema.md#classmap)
 - [autoload `files`](https://getcomposer.org/doc/04-schema.md#files)
