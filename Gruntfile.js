/* globals module, require */

module.exports = function (grunt) {

	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		less: {
			production: {
				options: {
					paths: ['css/'],
					cleancss: true
				},
				files: {
					'social-sharing-buttons.css': 'social-sharing-buttons.less'
				}
			}
		},

		autoprefixer: {
			single_file: {
				options: {
					cascade: false
				},
				src: 'social-sharing-buttons.css'
			}
		},

		combine_mq: {
			new_filename: {
				options: {
					expand: false,
					beautify: false,
				},
				src: 'social-sharing-buttons.css',
				dest: 'social-sharing-buttons.css'
			}
		},

		cssmin: {
			target: {
				files: {
					'social-sharing-buttons.css': ['social-sharing-buttons.css']
				}
			}
		},

		watch: {
			css: {
				files: ['*.less'],
				tasks: ['less', 'autoprefixer']
			}
		}

	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('default', ['less', 'autoprefixer', 'watch']);
	grunt.registerTask('build', ['less', 'autoprefixer', 'combine_mq', 'cssmin']);

};