module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'public/css/app.css': 'scss/app.scss',
          'public/css/chat.css': 'scss/chat.scss'
        }
      }
    },

    copy: {
      scripts: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.js',
        dest: 'public/js/libs'
      },
      maps: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.map',
        dest: 'public/js/libs'
      },
      scss: {
        expand: true,
        cwd: 'bower_components/',
        src: '**/*.scss',
        dest: 'scss/libs'
      },
      fontawesome_fonts: {
        expand: true,
        cwd: 'bower_components/fontawesome/',
        src: [
          '**/*.eot',
          '**/*.svg',
          '**/*.ttf',
          '**/*.woff',
          '**/*.woff2'
        ],
        flatten: true,
        dest: 'public/fonts'
      }
    },

    watch: {
      grunt: {
        files: 'Gruntfile.js'
      },
      sass: {
        files: ['scss/**/*.scss', 'scss/*.scss'],
        tasks: ['sass']
      },
      react: {
        files: ['jsx/**/*.jsx', 'jsx/*.jsx'],
        tasks: ['react']
      },
      js: {
        options: {
          // spawn: false,
        },
        files: '**/*.js',
        tasks: ['test']
      }
    },

    clean: ["scss/libs/",
            "public/js/libs/",
            "public/js/components",
            "public/fonts/",
            "public/css"
    ],

    express: {
      options: {
        // Override the command used to start the server.
        // (do not use 'coffee' here, the server will not be able to restart
        //  see below at opts for coffee-script support)
        cmd: process.argv[0],

        // Will turn into: `node OPT1 OPT2 ... OPTN path/to/server.js ARG1 ARG2 ... ARGN`
        // (e.g. opts: ['node_modules/coffee-script/bin/coffee'] will correctly parse coffee-script)
        opts: [ ],
        args: [ ],

        // Setting to `false` will effectively just run `node path/to/server.js`
        background: true,

        // Called when the spawned server throws errors
        fallback: function() {},

        // Override node env's PORT
        port: 3000,

        // Override node env's NODE_ENV
        node_env: undefined,

        // Enable Node's --harmony flag
        harmony: false,

        // Consider the server to be "running" after an explicit delay (in milliseconds)
        // (e.g. when server has no initial output)
        delay: 0,

        // Regular expression that matches server output to indicate it is "running"
        output: ".+",

        // Set --debug (true | false | integer from 1024 to 65535, has precedence over breakOnFirstLine)
        debug: false,

        // Set --debug-brk (true | false | integer from 1024 to 65535)
        breakOnFirstLine: false,

        // Object with properties `out` and `err` both will take a path to a log file and
        // append the output of the server. Make sure the folders exist.
        logs: undefined

      },
      dev: {
        options: {
          script: 'app.js'
        }
      },
      test: {
        options: {
          script: 'test.js'
        }
      },
      prod: {
        options: {
          script: 'production.js',
          node_env: 'production'
        }
      }
    },

    react: {
      dynamic_mappings: {
        files: [
          {
            expand: true,
            cwd: 'jsx',
            src: ['**/*.jsx', '*.jsx'],
            dest: 'public/js/components',
            ext: '.js'
          }
        ]
      }
    },

    'mochaTest': {
      test: {
        options: {
          reporter: 'spec',
          // captureFile: 'results.txt', // Optionally capture the reporter output to a file
          quiet: false, // Optionally suppress output to standard out (defaults to false)
          clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('build', ['copy', 'sass', 'react']);
  grunt.registerTask('rebuild', ['clean', 'build']);
  grunt.registerTask('dev', ['express:dev', 'watch']);
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['dev']);

};
