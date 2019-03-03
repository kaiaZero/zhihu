module.exports=function(grunt){
  grunt.initConfig({
    /*concat:{
      options:{
        separator:';',
      },
      build:{
        src:["js/home.js","js/login.js"],
        dest:"js/home2.js"
      }
    },*/
    /*uglify:{
      my_target:{
        files:{
          'js/home-mini.js':['js/home.js'],
          'js/login-mini.js':['js/login.js'],
        }
      }
    },*/
    cssmin: {
           css: {
               src: 'style/login.css',
               dest:'style/login-mini.css',
           }
       },
  });
  //grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.registerTask('default',['concat','uglify']);
  grunt.registerTask('default','cssmin');
};
