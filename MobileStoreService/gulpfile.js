﻿var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    
    nodemon({
        script: 'Server.js',
        ext: 'js',
        env: {
            PORT: 3000

        },
        ignore: ['./node_modules/**']
    })
.on('restart', function () {
        
        console.log('Restraing...');
    });

});