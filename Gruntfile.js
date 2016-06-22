module.exports = function ( grunt ) {
	grunt.initConfig({
		pkg : grunt.file.readJSON( 'package.json' ),
		concat : {
			dist : {
				src : [
					'core/Vec3.js',
					'core/Mat4.js'
				],
				dest : 'build/minigl.js'
			}
		},
		uglify: {
		    build: {
		        src: 'build/minigl.js',
		        dest: 'build/minigl.min.js'
		    }
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );

	grunt.registerTask( 'default', [ 'concat', 'uglify' ] );
};