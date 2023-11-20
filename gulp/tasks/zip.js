import {deleteAsync} from "del";
import zipPlugin from "gulp-zip"

export const zip = () => {
    delete(`./${app.path.rootFolder}.zip`);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {}) // путь к папке с архивом
    .pipe(app.plugins.plumber(                      //Ошибки в виндоус
            app.plugins.notify.onError({
            title: "яшз",
            message: "Error: <%= error.message %>"
    })
        ))
    .pipe(zipPlugin(`${app.path.rootFolder}.zip`))  
    .pipe(app.gulp.dest('./')) // в какой файл выгрузить 
  }

