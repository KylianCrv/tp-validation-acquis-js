export class ChangeColor {

    static changeColorByColor(color , element) {
        element.style.backgroundColor = color;
    }
    static changeColorById(id ,tab, element) {
        element.style.backgroundColor = tab[id];
    }

}


