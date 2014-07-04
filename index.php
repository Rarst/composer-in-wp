<?php

use Rarst\Seam\Application;

require __DIR__ . '/vendor/autoload.php';

$settings = array(
    'debug'         => false,
    'site_title'    => 'Composer in WordPress',
    'template.pjax' => 'pjax.twig',
    'twig.options'  => array(
        'cache'       => 'cache/twig',
        'auto_reload' => false,
    ),
    'cache.options' => array(
        'default' => array(
            'driver'    => 'filesystem',
            'directory' => 'cache/doctrine'
        )
    ),
);

$local_settings = __DIR__ . '/local-settings.php';

if (file_exists($local_settings)) {
    $settings = array_merge($settings, include $local_settings);
}

$app = new Application($settings);
$app->run();