<?php
/**
 * @file
 * The primary PHP file for this theme.
 */

/**
 * Preprocess variables for page template.
 */
function boot_adb_preprocess_page(&$variables) {

	$header_top_left = $variables['page']['header_top_left'];
	$header_top_right = $variables['page']['header_top_right'];

	/**
	 * Insert variables into the page template.
	 */

	if ($header_top_left && $header_top_right) {
		$variables['header_top_left_grid_class'] = 'col-md-7';
		$variables['header_top_right_grid_class'] = 'col-md-5';
	} else {
		$variables['header_top_left_grid_class'] = 'col-md-12';
		$variables['header_top_right_grid_class'] = 'col-md-12';
	}

}

/**
 * Preprocess custom image styles
 */
function boot_adb_preprocess_image(&$variables) {
  $attributes = &$variables['attributes'];

  foreach (array('width', 'height') as $key) {
    unset($attributes[$key]);
    unset($variables[$key]);
  }
}