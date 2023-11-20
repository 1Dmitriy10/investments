import simpleParallax from 'simple-parallax-js';
export function getParallax() {
    var image = document.getElementsByClassName('service__title');
    new simpleParallax(image, {
        overflow: true,
        orientation: 'right'
    });
    var image2 = document.getElementsByClassName('service__subtitle-box');
    new simpleParallax(image2, {
        overflow: true,
        orientation: 'left'
    });
}
getParallax()
