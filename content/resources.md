<!---
title = Resources
description = Links to resources about Composer and its integration with WordPress
-->

Compilation of links to online resources about, for, and near Composer.

## Documentation

 - [Composer documentation](http://getcomposer.org/doc/)
 - Composer [GitHub project](https://github.com/composer/composer) and [issue tracker](https://github.com/composer/composer/issues) 
 - [interactive `composer.json` cheat sheet](http://composer.json.jolicode.com/)

## Specifications

 - [`composer.json` technical schema](https://github.com/composer/composer/blob/master/res/composer-schema.json) &ndash; check against with [`composer validate` command](http://getcomposer.org/doc/03-cli.md#validate)
 - [SPDX license identifiers](https://github.com/composer/composer/blob/master/res/spdx-identifier.json) recognized by Composer
 - [Semantic Versioning](http://semver.org/)

## Repositories

 - [Packagist](https://packagist.org/) ([GitHub](https://github.com/composer/packagist))
 - [WordPress Packagist](http://wpackagist.org/) ([GitHub](https://github.com/outlandishideas/wpackagist))
 - [Rarst.net/packages.json](http://www.rarst.net/packages.json) &ndash; example custom repository generated with Satis

## Packages

 - [composer/installers](https://github.com/composer/installers) ([Packagist](https://packagist.org/packages/composer/installers)) &ndash; custom installer for frameworks' paths (including WordPress extensions)
 - [johnpbloch/wordpress](https://github.com/johnpbloch/wordpress) ([Packagist](https://packagist.org/packages/johnpbloch/wordpress)) &ndash; automated fork of WordPress core, adding Composer support
 - [johnpbloch/wordpress-core-installer](https://github.com/johnpbloch/wordpress-core-installer) ([Packagist](https://packagist.org/packages/johnpbloch/wordpress-core-installer)) &ndash; custom installer for WordPress core to cleanly customize subdirectory path
 - [rarst/locate-vendor](https://bitbucket.org/Rarst/locate-vendor) (Composer repository `http://rarst.net`) &ndash; small experimental helper to resolve vendor folder location 

## People

 - [Nils Adermann](http://www.naderman.de/) ([@naderman](https://twitter.com/naderman)) &ndash; Composer developer
 - [Jordi Boggiano](http://nelm.io/jordi) ([@seldaek](https://twitter.com/seldaek)) &ndash; Composer developer
 - [Andrey Savchenko](http://www.rarst.net/) ([@Rarst](https://twitter.com/Rarst)) &ndash; made this site so gets to plug himself all over it
 - [Tamlyn Rhodes](http://tamlyn.org/) ([@tamlyn](https://twitter.com/tamlyn)) &ndash; WordPress Packagist developer
 - [John P Bloch](http://johnpbloch.com/) ([@johnpbloch](https://twitter.com/johnpbloch)) &ndash; WordPress core installer developer
 - [#ComposerPHP](https://twitter.com/search/%23ComposerPHP) on Twitter

## Tools

 - [Satis](https://github.com/composer/satis) ([Packagist](https://packagist.org/packages/composer/satis)) &ndash; static Composer repository generator 
 - [Pirium](http://pirum.sensiolabs.org/) &ndash; PEAR channel / Composer repository generator  

## IDE

 - [PhpStorm](http://www.jetbrains.com/phpstorm/)
  - [Composer support](http://www.jetbrains.com/phpstorm/webhelp/composer.html)
  - WP extension [`composer.json` file template](https://gist.github.com/Rarst/5462962)