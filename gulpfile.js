/*
* @Author: Administrator
* @Date:   2017-05-27 09:42:29
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-27 11:16:34
*/

'use strict';
// 1.less的编译 压缩 合并
// 2 js 合并 压缩 混淆（字符串减小化）
// 3 img的复制
// 4 html的压缩

//在gulpfile中先载入gulp包，因为这个包提供了一些api

var gulp = require('gulp');
var less =require('gulp-less'); //less编译包
var cssnano =require('gulp-cssnano');  //css压缩的包
var browserSync=require('browser-Sync')
// 1.less的编译 压缩 --合并没有必要，一般预处理css都可以导包
gulp.task('style',function(){
	//这里在执行style任务时自动执行的
	//先找到styles下的less文件，在保存到特定的文件中
	//匹配
	gulp.src(['src/styles/*.less','!src/styles/_*.less'])
	.pipe(less())   //编译完就是css了
	.pipe(cssnano())   //css压缩
	.pipe(gulp.dest('dist/styles'))
	.pipe(browserSync.reload({
		stream:true
	}));  //浏览器自动刷新
})


// 2 js 合并 压缩混淆（字符串减小化）
var concat=require('gulp-concat');  //合并插件
var uglify=require('gulp-uglify');  //合并插件

gulp.task('script',function(){
	gulp.src('src/scripts/*.js')
	.pipe(concat('all.js'))  //名字自己要定
	.pipe(uglify())
	.pipe(gulp.dest('dist/scripts'))
	.pipe(browserSync.reload({
		stream:true
	}));

})



// 3 img的复制
// 
gulp.task('image',function(){
	gulp.src('src/images/*.*')
	.pipe(gulp.dest('dist/images'))
	.pipe(browserSync.reload({
		stream:true
	}));
})
// 4 html的压缩
 var htmlmin=require('gulp-htmlmin')
gulp.task('html',function(){
	gulp.src('src/*.html')
	.pipe(htmlmin(
		{ 
			collapseWhitespace:true,  //删除空白
			removeComments:true  //删除注释
		}
	))
	.pipe(gulp.dest('dist'))
	.pipe(browserSync.reload({
		stream:true
	}));
})

// 启动服务监视工具包


gulp.task('serve',function(){
	browserSync({
		server:{
			baseDir:'dist/'
		},		
	},function(err,bs){
		console.log(bs.options.getIn(['urls','local']));
	})
})

// 监视所有文件 自动执行任务
gulp.watch('src/styles/*.less',['style']);
gulp.watch('src/scripts/*.js',['script']);
gulp.watch('src/images/*.*',['image']);
gulp.watch('src/*.html',['html']);