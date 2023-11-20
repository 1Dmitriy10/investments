import imageMin from "gulp-imageMin"
import webp from "gulp-webp";

export const img = () => {
    return app.gulp.src(app.path.src.img) // путь к папке со скриптами
        .pipe(app.plugins.plumber(                      //Ошибки в виндоус
            app.plugins.notify.onError({
                title: "img",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.newer(app.path.build.img))
        .pipe(webp())
        .pipe(app.plugins.if(
            app.isBuild, imageMin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interLaced: true,
                optimizationLevel: 3// 0 to 7 
            })
        ))
        .pipe(app.gulp.dest(app.path.build.img)) // в какой файл выгрузить
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.img))
        .pipe(app.plugins.browserSync.stream())
}