<?php
/**
 * Plugin Name: Testing
 * Plugin URI:
 * Description:
 * Version: 0.1
 */


add_theme_support( 'gutenberg' );
add_theme_support( 'align-wide' );

require_once( __DIR__ . '/blocks/article/index.php' );
require_once( __DIR__ . '/blocks/layout-standard/index.php' );