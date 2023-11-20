import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import autoprefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import cleanCss from 'gulp-clean-css'
import webpcss from 'gulp-webpcss'


const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(                      //Ошибки в виндоус
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(webpcss(
            {
                webClass: ".webp",
                noWebpClass: ".no-webp"
            }
        ))
        .pipe(app.plugins.if(
            app.isBuild, groupCssMediaQueries()
        ))
        .pipe(app.plugins.if(
            app.isBuild, autoprefixer({
                grid: true,
                overrideBrowserslist: ['last 3 versions'],
                cascade: false
            })
        ))
        //Раскомментировать если нужен не сжатый дубль файла стилей
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.if(
            app.isBuild, cleanCss())
        )
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}