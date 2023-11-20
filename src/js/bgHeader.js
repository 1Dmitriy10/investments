export function getColorHeader() {
    const header = document.querySelector(".header")
    //событие при скроле
    window.addEventListener('scroll', getColor)
    function getColor() {
        //если мы вверху то хедер бесцветный
        if (window.pageYOffset === 0) {
            header.style.cssText = `background-color: transparent;`
            //если проскролили, то хедер в цвете
        } else {
            header.style.cssText = `background-color: #000000;`
        }
    }
}
getColorHeader()