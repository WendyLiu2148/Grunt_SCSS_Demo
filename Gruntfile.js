module.exports = function(grunt) {

  var sassStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist : {
        options: {
          style: sassStyle
        },
        files: {
          'css/style.css': 'SCSS/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('cbuild',['sass']);
  grunt.registerTask('default');

};