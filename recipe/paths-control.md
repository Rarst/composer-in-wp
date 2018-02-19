---
title: Paths Control
subtitle: recipe
description: How to use composer/installers to control WordPress theme and plugin paths
---

The default type of Composer package is `library`. Composer puts such packages in `vendor/[vendor]/[name]`, which does not fit typical WordPress directory layout well.

However it is easy adjust it.

## Require composer/installers

[`composer/installers`](https://github.com/composer/installers) is a package of special `composer-installer` type. It catches packages with non-`library` types during installation and (if they match types it supports) adjusts their paths.

To make use of it your extension's `composer.json` should contain:

```json
{
    "type"    : "wordpress-plugin",
    "require" : {
        "composer/installers" : "~1.0"
    }
}
```

Type can also be `wordpress-theme` and `wordpress-muplugin`.

When used in root [site stack package](/recipe/site-stack) it would make packages go into `wp-content/*` directories as WordPress things usually do.

## Customize paths

If you don't like defaults you can override them in root package (and there only, one of things only root one gets to decide) individually or in bulk:

```json
{
    "extra" : {
        "installer-paths" : {
            "content/plugins/{$name}/": ["type:wordpress-plugin"]
        }
    }
}
```

Note that this **only** works for packages that declare `composer/installers` support. You cannot customize paths for generic `library` packages. However you can customize location of `vendor` directory to rename and/or move from default root location:

```json
{
    "config" : {
        "vendor-dir" : "wp-content/vendor"
    }
}
```

## Documentation Links

 - [package type](http://getcomposer.org/doc/04-schema.md#type)
 - [package links](http://getcomposer.org/doc/04-schema.md#package-links)
 - [extra property](http://getcomposer.org/doc/04-schema.md#extra)
 - [config property](http://getcomposer.org/doc/04-schema.md#config)