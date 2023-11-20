export const copy = () => {
    return app.gulp.src(app.path.src.files)     //Получаем путь к папке с исходниками из глобального объекта
        .pipe(app.gulp.dest(app.path.build.files))                  //Указываем куда перенести файлы
}