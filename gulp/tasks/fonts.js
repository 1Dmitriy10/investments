import fs from "fs"
import fonter from "gulp-fonter"
import ttf2woff2 from "gulp-ttf2woff2"

export const otfToTtf = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})     //Ищем файлы шрифтов otf
    .pipe(app.plugins.plumber(                      //Ошибки в виндоус
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(fonter({                                  //Конвертируем в ttf
        formats: ['ttf']
    }))
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))                  //Выгружаем обратно к исходникам
} 

export const ttfToWoff = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`, {})     //Ищем файлы шрифтов ttf
    .pipe(app.plugins.plumber(                      //Ошибки в виндоус
        app.plugins.notify.onError({
            title: "FONTS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(fonter({                                  //Конвертируем в woff
        formats: ['woff']
    }))
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))                  //Выгружаем в папку с результатом
    .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`))    //Ищем файлы шрифтов ttf
    .pipe(ttf2woff2())                                 //Конвертируем в woff2
    .pipe(app.gulp.dest(`${app.path.build.fonts}`))         //Выгружаем в папку с результатом
}

export const fontsStyle = () => {
   let fontsFile =`${app.path.srcFolder}/scss/fonts.scss`      //Файл стилей подключения
   //Проверяем существует ли файл шрифтов
   fs.readdir(app.path.build.fonts, function (err, fontsFiles){
    if(fontsFiles) {
        // Проверяем существует ли файл стилей для подключения шрифтов       
        if(!fs.existsSync(fontsFile)) {
            //Если файла нет, создаем его
            fs.writeFile(fontsFile,'',cd)
            let newFileOnly;
            for (var i = 0; i < fontsFiles.length; i++) {
                //Записываеи подключения шрифтов в файл стилей
                let fontsFileName = fontsFiles[i].split('.')[0];
                if(newFileOnly !== fontsFileName) {
                    let fontName = fontsFileName.split('-')[0] ? fontsFileName.split('-')[0] : fontsFileName;
                    let fontWeight = fontsFileName.split('-')[1] ? fontsFileName.split('-')[1] : fontsFileName;
                    if(fontWeight.toLowerCase() === 'thin') {
                        fontWeight = 100;
                    }
                    else if(fontWeight.toLowerCase() === 'extralight') {
                        fontWeight = 200;
                    }
                    else if(fontWeight.toLowerCase() === 'light') {
                        fontWeight = 300;
                    }
                    else if(fontWeight.toLowerCase() === 'medium') {
                        fontWeight = 500;
                    }
                    else if(fontWeight.toLowerCase() === 'semibold') {
                        fontWeight = 600;
                    }
                    else if(fontWeight.toLowerCase() === 'bold') {
                        fontWeight = 700;
                    }
                    else if(fontWeight.toLowerCase() === 'extrabold') {
                        fontWeight = 800;
                    }
                    else if(fontWeight.toLowerCase() === 'black') {
                        fontWeight = 900;
                    }
                    else{
                        fontWeight = 400;
                    }
                    fs.appendFile(fontsFile, `@font-face{\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontsFileName}.woff2") format("woff2"), url("../fonts/${fontsFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cd);
                    // fs.appendFile(fontsFile,
                    //     `@font-face {
                    //         font-family: ${fontName};
                    //         font-display: swap;
                    //         src: url("../fonts/${fontsFileName}.woff2") format("woff2"), url("../fonts/${fontsFileName}")
                    //         font-weight: ${fontWeight};
                    //         font-style: normal;
                    //     }\r\n`, cd)
                        newFileOnly = fontsFileName
                }
            }
        } else {
            //Если файл есть, выводим сообщение
            console.log("Файл scss/fonts.scc уже существует. Для обновления нужно его удалить")
        }
       }
   });
   return app.gulp.src(`${app.path.srcFolder}`);
    function cd() {}
};

