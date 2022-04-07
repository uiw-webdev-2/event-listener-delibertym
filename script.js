/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */

const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
//const paragraph = document.querySelector('.intro-text');
const text = "Lucas ipsum dolor sit amet kessel grievous yoda kashyyyk organa skywalker maul sebulba droid amidala. Kashyyyk calrissian darth binks solo yoda watto. Kit dagobah thrawn k-3po skywalker skywalker jade. Hutt grievous jabba mandalore dantooine kamino kamino. Boba darth darth moff secura jinn hutt antilles amidala. Baba bothan hutt dagobah skywalker obi-wan qui-gonn. Mustafar solo calamari hutt r2-d2 ben darth dantooine. Solo biggs amidala kenobi naboo sebulba padmé binks. Grievous jar skywalker fett bespin jinn jade mustafar leia.";

const textWrap = document.createElement('p');
textWrap.classList.add("intro-text");
container.append(textWrap);

// Log when the button is clicked in the console.
button.addEventListener("click", () => {
  textWrap.innerText = text; 
}, false);
