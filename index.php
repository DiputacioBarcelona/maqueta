<?php

require_once 'vendor/autoload.php';

use Twig\Loader\FilesystemLoader;
use Twig\Environment;

// Secure session management to avoid session fixation.
session_start();
session_regenerate_id(true);

$loader = new FilesystemLoader('templates');
$twig   = new Environment($loader);

// Sanitize and validate input var.
$page   = filter_input(INPUT_GET, 'page', FILTER_SANITIZE_STRING);
$page   = $page ?: 'index';

try {
    $file = 'pages/' . $page . '.html.twig';
    if (file_exists('templates/' . $file)) {
        print $twig->render($file);
    } else {
        error_log('Template file not found: ' . $file);
        print $twig->render('front.html.twig');
    }
} catch (Exception $e) {
    error_log('Rendering error: ' . $e->getMessage());
    print 'An error occurred. Please try again later.';
}
