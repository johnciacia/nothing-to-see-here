<?php

defined( 'ABSPATH' ) || exit;

add_action( 'admin_enqueue_scripts', function () {
	wp_enqueue_script( 'wp-api' );
} );

add_action( 'enqueue_block_editor_assets', 'gutenberg_examples_05_esnext_enqueue_block_editor_assets', 10000 );

function gutenberg_examples_05_esnext_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'gutenberg-examples-05_esnext',
		plugins_url( 'block.build.js', __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'block.build.js' )
	);
}

add_action( 'enqueue_block_assets', 'gutenberg_examples_05_esnext_enqueue_block_assets', 10000 );

function gutenberg_examples_05_esnext_enqueue_block_assets() {
	wp_enqueue_style(
		'gutenberg-examples-05_esnext',
		plugins_url( 'style.css', __FILE__ ),
		array( 'wp-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'style.css' )
	);
}


add_action( 'rest_api_init', function() {
	register_rest_field( 'post',
		'featured_media_src',
		array(
			'get_callback' => function ( $post ) {
				return get_the_post_thumbnail_url( $post->ID );
			},
		)
	);
} );