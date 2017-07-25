import gulp from 'gulp';
import pug from 'gulp-pug';
import stylus from 'gulp-stylus';
import autoprefixer from 'gulp-autoprefixer';
import watch from 'gulp-watch';
import imagemin from 'gulp-imagemin';
import { create } from 'browser-sync';
const browserSync = create();

const path = {
  src: {
    pug: './src/pug/**/!(_)*.pug',
    stylus: './src/stylus/style.styl',
    img: './src/images/**/*.*',
    vendor: './src/vendor/**/*.*',
    fonts: './src/fonts/**/*.*'
  },
  dest: {
    html: './dest/',
    css: './dest/css',
    images: './dest/img',
    vendor: './dest/vendor',
    fonts: './dest/fonts'
  }
}

gulp.task('pug', ()=>{
  gulp.src(path.src.pug)
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest(path.dest.html))
    .pipe(browserSync.stream())
});

gulp.task('stylus', ()=>{
  gulp.src(path.src.stylus)
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(gulp.dest(path.dest.css))
    .pipe(browserSync.stream())
});

gulp.task('images', ()=>{
  gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.dest.images))
    .pipe(browserSync.stream())
});

gulp.task('vendor', () => {
  gulp.src(path.src.vendor)
    .pipe(gulp.dest(path.dest.vendor))
    .pipe(browserSync.stream())
});

gulp.task('fonts', () => {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.dest.fonts))
    .pipe(browserSync.stream())
});

gulp.task('watch', ()=>{
  watch('./src/pug/**/*.pug', () => {gulp.start('pug'); browserSync.reload()})
  watch('./src/stylus/**/*.styl', () => {gulp.start('stylus'); browserSync.reload()})
  watch('./src/images/**/*.*', () => {gulp.start('images'); browserSync.reload()})
  watch('./src/vendor/**/*.*', () => {gulp.start('vendor'); browserSync.reload()})
  watch('./src/fonts/**/*.*', () => {gulp.start('fonts'); browserSync.reload()})
});

gulp.task('sync', () => {
  browserSync.init({
    server: {
        baseDir: "./dest"
    }
  });
})

gulp.task('default', ['sync', 'pug', 'stylus', 'images', 'vendor', 'fonts', 'watch'])
