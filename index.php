<?php

require_once 'vendor/autoload.php';

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

$loader = new FilesystemLoader('templates');
$twig   = new Environment($loader);

$page   = filter_var($_GET['page'] ?? 'index', FILTER_SANITIZE_STRING);

try {
    $file = 'pages/' . $page . '.html.twig';
    if (file_exists('templates/' . $file)) {
        print $twig->render($file);
    } else {
        print $twig->render('front.html.twig');
    }
} catch (Exception $e) {
    print 'Error de renderitzat:' . $e->getMessage();
}
