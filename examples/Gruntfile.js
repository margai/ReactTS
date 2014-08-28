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
      					'build/build.js': ['temp/app.js'],
      				},
    				options: {
      					//transform: ['coffeeify']
    				}
  			}
		},

		remove: {
    			options: {
      				trace: true
    			},
    			//fileList: [],
    			dirList: ["c:\web\Winginx\home-node\react ts\examples\1" ]
  		},

		
		
		watch:{
			scripts:{
				files:["src/*.js"],
				tasks:["typescript","browserify"]
			},
			css:{
				files:["src/css/*.css"],
				tasks:[]
			}
		}	
	});

	//подгружаем необходимые модули
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-remove');

	//регистрируем задачу
	grunt.registerTask('default',["typescript","browserify"]);
	//grunt.registerTask('default',["browserify"]);
}