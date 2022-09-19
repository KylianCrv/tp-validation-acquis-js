import { getRandomInt} from "./get-random-int.js"

export function createRandomColor(hexTab) {
    let color = ["#"];
    for(let i = 0 ; i<6 ; i++){
        let numberOrLetter = hexTab[getRandomInt(0,hexTab.length - 1)];
        color.push(numberOrLetter);
    }

   return color.join('') ;
}