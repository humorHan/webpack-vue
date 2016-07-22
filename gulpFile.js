/**
 * Created by humorHan on 2016/6/17.
 */
var webpackConfig = require('./webpack-config.js');

var webpack = require('webpack-stream');

var gulp = require('gulp');

var path = require('path');

var plumber = require('gulp-plumber'); //捕获出错问题 接收errorHandler参数

var named = require('vinyl-named');

var minifycss = require('gulp-minify-css');

var del = require('del');

var vinylPaths = require('vinyl-paths');

var rev = require('gulp-rev');

var revCollector = require('gulp-rev-collector');

var less = require('gulp-less');

var less_source_maps = require('gulp-sourcemaps');

gulp.task("less-to-css",['publish-img'], function(){
    return gulp.src(path.join(__dirname, '/src/less/**/*.less'))
        .pipe(less_source_maps.init())
        .pipe(less())
        .pipe(less_source_maps.write('./maps'))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/css/')));
});

gulp.task('watch:less-dev', function(){
    gulp.watch(path.join(__dirname , '/src/less/**/*.less'), ['less-to-css']);
});

gulp.task('js-dev', ['publish-plugins'],function(){
    return gulp.src(path.join(__dirname, '/src/js/*.js'))
        .pipe(named())
        .pipe(webpack(webpackConfig(true, true, false)))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/js/')));
});

gulp.task('publish-static-js',['less-to-css'],function(){
    return gulp.src([path.join(__dirname, '/src/dep/jquery-2.2.0.min.js'), path.join(__dirname, '/src/dep/vue.js')])
        .pipe(gulp.dest(path.join(__dirname, '/bundle/js/')));
});

gulp.task('publish-plugins', ['publish-static-js'], function(){
    return gulp.src(path.join(__dirname, '/src/dep/plugins/**/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/plugins')));
});

gulp.task('publish-img',['publish-fonts'],function(){
    return gulp.src(path.join(__dirname, '/src/img/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/img/')));
});

gulp.task('publish-fonts',function(){
    return gulp.src(path.join(__dirname, '/src/dep/fonts/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/fonts/')));
});

//测试包
gulp.task('bundle',['js-dev','watch:less-dev']);

//正式包
gulp.task('package', ['rev-css']);

gulp.task('rev-css', ['rev-js'], function(){
    return gulp.src([path.join(__dirname, '/mfg/*.json'), path.join(__dirname, '/bundle/css/**/*.css')])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/css')))
});

//修改js中引用地址
gulp.task('rev-js', ['rev-html'], function(){
    return gulp.src([path.join(__dirname, '/mfg/*.json'), path.join(__dirname, '/bundle/js/*.js')])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/js')))
});

//修改html页面引用的css和js
// todo 修改为vs的
gulp.task('rev-html', ['dist-img'], function(){
    return gulp.src([path.join(__dirname, '/mfg/*.json'), path.join(__dirname, '/src/html/*.html')])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest(path.join(__dirname, '/mfg/html/')))
});

gulp.task('dist-img',['compress-js'], function(){
    return gulp.src(path.join(__dirname, '/src/img/*.*'))
        .pipe(rev())
        .pipe(gulp.dest(path.join(__dirname, '/bundle/img')))
        .pipe(rev.manifest('img.json'))
        .pipe(gulp.dest(path.join(__dirname, '/mfg')));
});

gulp.task('compress-js',['dist-plugins'],function() {
    return gulp.src(path.join(__dirname, '/src/js/*.js'))
        .pipe(named())
        .pipe(webpack(webpackConfig(false, false, true)))
        .pipe(rev())
        .pipe(gulp.dest(path.join(__dirname, '/bundle/js/')))
        .pipe(rev.manifest('js.json'))
        .pipe(gulp.dest(path.join(__dirname, '/mfg')));
});

gulp.task('dist-plugins', ['dist-static-js'], function(){
    return gulp.src(path.join(__dirname, '/src/dep/plugins/**/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/plugins')));
});

gulp.task('dist-static-js',['less'],function(){
    return gulp.src([path.join(__dirname, '/src/dep/jquery-2.2.0.min.js'), path.join(__dirname, '/src/dep/vue.js')])
        .pipe(gulp.dest(path.join(__dirname, '/bundle/js/')));
});

gulp.task('less', ['dist-fonts'], function () {
    return gulp.src(path.join(__dirname, '/src/less/**/*.less'))
        .pipe(less())
        .pipe(minifycss({keepBreaks:true}))
        .pipe(rev())
        .pipe(gulp.dest(path.join(__dirname, '/bundle/css/')))
        .pipe(rev.manifest('css.json'))
        .pipe(gulp.dest(path.join(__dirname, '/mfg')));
});

gulp.task('dist-fonts',['del-dist'],function(){
    return gulp.src(path.join(__dirname, '/src/dep/fonts/*.*'))
        .pipe(gulp.dest(path.join(__dirname, '/bundle/fonts/')));
});

//删除上线文件
gulp.task('del-dist',function(){
    return gulp.src([path.join(__dirname,'mfg'), path.join(__dirname,'bundle')])
        .pipe(vinylPaths(del));
});