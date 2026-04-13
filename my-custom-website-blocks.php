<?php

/**
 * Plugin Name: My custom Website Blocks
 * Description: A component-based website builder built from scratch.
 * Version: 1.0.0
 * Author: Kestas
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Register the blocks using the build folder
 */
function kestas_register_custom_blocks() {
    // Register the Hero block
    if ( file_exists( __DIR__ . '/build/blocks/hero' ) ) {
        register_block_type( __DIR__ . '/build/blocks/hero' );
    }

    // Register the Site Header block
    if ( file_exists( __DIR__ . '/build/blocks/site-header' ) ) {
        register_block_type( __DIR__ . '/build/blocks/site-header' );
    }
}
add_action( 'init', 'kestas_register_custom_blocks' );