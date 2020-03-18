// 包装函数
module.exports = function (grunt) {
    grunt.initConfig({
        htmlmin:{
            options:{
                collapseWhitespace: true,
                preserveLineBreaks: false

            },
            file:{
                src:"./baidu.html",
                dest:"./dist/baidu.html"
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            
            files: {
                src:"baidu.css",
                dest:'./dist/baidu.css'
            }
            
        },
        uglify: {
            files:{
                src: './baidu.js',
                dest: 'dist/baidu.js'
            }
          }

    })
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask("default",['htmlmin']);
    grunt.registerTask('default',['cssmin']);grunt.registerTask('default',['uglify']);
};