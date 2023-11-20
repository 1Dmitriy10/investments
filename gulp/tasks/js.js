import webpack  from "webpack-stream"

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: app.isDev}) // путь к папке со скриптами
    .pipe(app.plugins.plumber(                      //Ошибки в виндоус
            app.plugins.notify.onError({
            title: "js",
            message: "Error: <%= error.message %>"
    })
        ))
     .pipe(webpack({
        mode: app.isBuild ? "production" : "development",
        output: {
            filename: 'script.min.js'
        }
     })) 
     .pipe(app.gulp.dest(app.path.build.js)) // в какой файл выгрузить
     .pipe(app.plugins.browserSync.stream())   
  }

