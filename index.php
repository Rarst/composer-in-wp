<?php

use Rarst\Seam\Application;

require __DIR__ . '/vendor/autoload.php';

$app = new Application(array(
    'site_title'     => 'Composer in WordPress',
    'template.pjax'  => 'pjax.twig',
    'twig.options'   => array(
        'cache'       => 'cache/twig',
        'auto_reload' => true,
    ),
    'cache.options'  => array(
        'default' => array(
            'driver'    => 'filesystem',
            'directory' => 'cache/doctrine'
        )
    ),
));

//$app['debug'] = true;
$app->run();