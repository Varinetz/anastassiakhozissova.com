var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    less = require('gulp-less'),
    path = require('path'),
    clean = require('gulp-clean'),
    sftp = require('gulp-sftp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    runSequence = require('run-sequence'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


// livereload 

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});
 
// Bower

gulp.task('bower', function () {
  gulp.src('app/index.html')
    .pipe(wiredep({
      'directory' : 'app/bower_components/'
    }))
    .pipe(gulp.dest('app'));
});
 
  // SFTP

gulp.task('sftp',function () {
    return gulp.src('dest/**/*')
        .pipe(sftp({
           host: 'hosting.hubpro.net',
            user: 'u1856',
            pass: '4eva-1812#6',
            remotePath: '/var/www/u1856/data/www/varinetz.ru/ak/'
        }));
});
 
 // Build

gulp.task('build', function(callback) {
  runSequence('clean',
                'less',
                'html', 
                'image',
                'copy',
              callback);
});

gulp.task('clean', function () {
    return gulp.src('dest',{read: false})
        .pipe(clean());
});

gulp.task('html', function () {
    var assets = useref.assets();
 
    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', prefix('last 2 versions', 'ie9', '>1%' )))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dest'));
});

gulp.task('less', function () {
  return gulp.src('app/s/main.less')
    .pipe(less())
    .pipe(gulpif('*.css', prefix('last 2 versions', 'ie9', '>1%' )))
    .pipe(gulp.dest('app/s'));
});


gulp.task('image', function () {
  return gulp.src('app/img/*')
        .pipe(imagemin({ 
            optimizationLevel: 3,
            interlaced: true
        }))
        .pipe(gulp.dest('dest/img'));
});

gulp.task('copy', function() {
    return gulp.src(['app/m.php', 'app/.htaccess'])
    .pipe(gulp.dest('dest'));
});

// Watch

gulp.task('watch', function() {
    gulp.watch('bower.json', ['bower']);
    gulp.watch('app/s/*.less', ['less']).on('change', browserSync.reload);
    gulp.watch('app/img/*', ['image']);
    gulp.watch(['app/js/*.js', 'app/s/*.less', 'app/*.html', 'app/img/*']).on('change', browserSync.reload);
})

// default

gulp.task('default', ['watch', 'browser-sync']);