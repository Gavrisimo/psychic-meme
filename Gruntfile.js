module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      vendor: {
        src: [
          'assets/js/libs/jquery-2.0.2.min.js',
          'assets/js/libs/bootstrap.min.js',
          'assets/js/libs/showdown.js',
        ],
        dest: 'assets/js/<%= pkg.name %>-libs.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> libs - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      vendor: {
        files: {
          'assets/js/<%= pkg.name %>-libs.min.js': ['<%= concat.vendor.dest %>']
        }
      }
    }
  });

  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat', 'uglify']);

};