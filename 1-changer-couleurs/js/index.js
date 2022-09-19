import { getRandomInt } from "./utils/get-random-int.js";
import { createRandomColor } from "./utils/create-random-color.js";
import { ChangeColor } from "./utils/change-color.js";


const body = document.querySelector("#body");
const buttonChange = document.querySelector("#change-background-button");

const hexTab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorTab = ["green", "red", "rgba(133,122,200)", "#f15025"]

buttonChange.innerText = "Change background";

buttonChange.addEventListener("click", function() {
    let id = getRandomInt(0,colorTab.length);
    let color = createRandomColor(hexTab);
    ChangeColor.changeColorByColor(color,body);
    ChangeColor.changeColorById(id,colorTab,buttonChange);
});

