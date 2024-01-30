// 1. Create a variable named `place` and set the value to a string that says whatever place you want.
let place = "The Ocean";
// 2. Create a variable named `creatureName` and set the value to a string that says whatever name you want to give the creature.
let creatureName = "Jellyfish";
// 3. Create a variable named `color` and set the value to a string that says whatever color you want.
let color = "lightblue";
// 4. Create a variable named `color2` and set the value to a string that says a different color you want.
let color2 = "purple";
// 5. Create a variable named `emotion` and set the value to a string that says whatever emotion you want.
let emotion = "calm";
// 6. Create a variable named `character` and set the value to a string that says whatever name for a character you want.
let character = "Rue";
// 7. Create a variable named `number` and set the value to a number greater than 1.
let number = 3;
// 8. Create a variable named `item` and set the value to a string that says whatever item/thing you want.
let item = "boat";
// 9. Create a variable named `item2` and set the value to a string that says a different item/thing you want.
let item2 = "fishing rod";
// 10. Create a variable named `verb` and set the value to a string that says whatever verb you want.
let verb = "swim";
// 11. Create a variable named `adverb` and set the value to a string that says whatever adverb you want.
let adverb = "quickly";
// 12. Create a variable named `number2` and set the value to a number greater than 1.
let number2 = 8;





// 14. Replace the null values with the appropriate variable you created above.
// - Afterwards, run your code and press the button to see your story ✨

document.querySelector("button").addEventListener("click", function() {
    document.querySelector(".place").innerHTML = "The Ocean";
    document.querySelector(".creature-name").innerHTML = "Jellyfish";
    document.querySelector(".color").innerHTML = "lightblue";
    document.querySelector(".color-2").innerHTML = "purple";
    document.querySelector(".emotion").innerHTML = "calm";
    document.querySelector(".character").innerHTML = "Rue";
    document.querySelector(".creature-name-again").innerHTML = "Jellyfish";
    document.querySelector(".number").innerHTML = 3;
    document.querySelector(".item").innerHTML = "boat";
    document.querySelector(".character-again").innerHTML = "Rue";
    document.querySelector(".item-2").innerHTML = "fishing rod";
    document.querySelector(".verb").innerHTML = "swim";
    document.querySelector(".adverb").innerHTML = "quickly";
    document.querySelector(".number-2").innerHTML = 8;
    document.querySelector(".story-container").style = "display:block";
});
