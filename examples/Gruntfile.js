module.exports=function(grunt){
	grunt.initConfig({
		//pkg:grunt.file.readJSON("package.json"),

		typescript: {
      			base: {
        			src: ['src/app.ts'],
        			dest: 'temp',
        			options: {
          				module: "commonjs",//'amd', 
          				target: 'es5', //or es3
          				basePath: 'src',
          				sourceMap: false,
          				declaration: false
        			}
      			}
    		},

		browserify: {
  			dist: {
				files: {
      					'build/build.js': ['temp/app.js']
      				},
    				options: {
      					//transform: ['coffeeify']
    				}
  			}
		},
		
		
		watch:{
            //"ts":{
            //    files: '**/*.ts',
            //    tasks:["typescript","browserify"]
            //},

            //"js":{
            //    files: '**/*.js',
			//	tasks:["browserify"]
            //}

            scripts:{
                files: '**/*.*',
                tasks:["typescript","browserify"]
            }

        }
	});


	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-typescript');

	//grunt.registerTask('default',["typescript","browserify","watch"]);
    grunt.registerTask('default',["typescript","browserify"]);
}