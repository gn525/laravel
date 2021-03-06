/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	// Toolbar configuration generated automatically by the editor based on config.toolbarGroups.
	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'spellchecker' ] },
		{ name: 'colors' },
		{ name: 'links' },
		{ name: 'insert' },		
		{ name: 'document',	   groups: [ 'mode' ] },
		{ name: 'others' }, 
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup'] },				
		{ name: 'paragraph', groups: ['list', 'blocks', 'align', 'bidi' ]},
		{ name: 'styles'}
		
		
	];

	// Remove some buttons, provided by the standard plugins, which we don't
	// need to have in the Standard(s) toolbar.
	config.removeButtons = 'Save,NewPage,Preview,Print,Underline,Subscript,Superscript,Flash,Smiley,PageBreak,Language';

	// Se the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Make dialogs simpler.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	
	// Extra Plugins.
	config.extraPlugins = 'ckeditor-gwf-plugin,youtube';
	config.font_names = 'GoogleWebFonts;' + config.font_names;
	
	//config.extraPlugins = 'youtube';
	config.youtube_width = '640';
	config.youtube_height = '480';
	config.youtube_related = true;
	config.youtube_older = false;
	config.youtube_privacy = false;
	
	if(typeof full_ckeditor_path === 'undefined'){
		full_ckeditor_path = "https://www.mywifi.io/templates/themes/neon/assets/js/ckeditor/plugins"
	};
	//File uload and browse plugin
	config.filebrowserBrowseUrl = full_ckeditor_path+'/kcfinder/browse.php?type=files';
	config.filebrowserImageBrowseUrl = full_ckeditor_path+'/kcfinder/browse.php?type=images';
	//config.filebrowserFlashBrowseUrl = full_ckeditor_path+'/kcfinder/browse.php?type=flash';
	config.filebrowserUploadUrl = full_ckeditor_path+'/kcfinder/upload.php?type=files';
	config.filebrowserImageUploadUrl = full_ckeditor_path+'/kcfinder/upload.php?type=images';
	//config.filebrowserFlashUploadUrl = full_ckeditor_path+'/kcfinder/upload.php?type=flash';   	
};
