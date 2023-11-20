export function getPopup() {
    //Выход из попапа
    const exitBtn = document.querySelector(".popup-exit")
    //Кнопки вызова попапа
    const btn = document.querySelectorAll(".btn-form")
    //Общий фон попапа
    const popupBg = document.querySelector(".popup-bg")
    //Оболочка попапа
    const body = document.querySelector("body")
    //Счетчик для id кнопок
    let count = 1;
    //Цикл по всем кнопкам вызывающим попап и вешаем событие
    for (const el of btn) {
        //присваиваем кнопкам id
        el.id = count
        //Вешаем событие по клику
        el.addEventListener("click", addActiveClass)
        //Увеличиваем счетчик
        count++
    }
    exitBtn.addEventListener("click", removeActiveClass)
    //Если id нажатой кнопки совпадает с id элемента открывае попап
    function addActiveClass(ev) {
        for (const el of btn) {
            if (el.id === ev.target.id) {
                ev.preventDefault();
                popupBg.classList.add("active");
                body.style.cssText = `overflow: hidden;`
            }
        }
    }
    function removeActiveClass(ev) {
        ev.preventDefault();
        popupBg.classList.remove("active");
        body.style.cssText = `overflow: auto;`
    }
}
getPopup()