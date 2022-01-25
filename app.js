import { parseDeckLink, f2p, avgCost } from "./js/parse-deck.js";
import { renderChart } from "./js/render-chart.js";

const deckBoard = document.getElementById("deck-board");
const titleEl = document.getElementById("deck-title");
const costEl = document.getElementById("cost");
const statEl = document.querySelector(".stats");
const costDiv = document.querySelector(".cost-container");

const deck = parseDeckLink(prompt("Deck Link", "") || "https://link.clashroyale.com/deck/en?deck=26000000;26000001;26000010;26000031;27000002;28000003;28000011;28000012");
const title = prompt('Deck Title:','') || "Classic Mortar Cycle";
const attack = prompt('Attack(0-5):','') || 3;
const defense = prompt('Defense(0-5):','') || 3;
const synergy = prompt('Synergy(0-5):','') || 3;
const versatility = prompt('Versatility(0-5):','') || 3;

setTimeout(() => {
    statEl.style.visibility = "visible";
    costDiv.style.visibility = "visible";
    for (let card of deck) {
        const img = document.createElement("img");
        img.src = card.img;
        if (card.rarity === 0) img.classList.add("hero");
        if (card.rarity === 1.25) img.classList.add("legendary");
        deckBoard.appendChild(img);
    }
    
    const t = gsap.timeline({defaults: {duration: 1, ease: "elastic.out(1, 1)", opacity: 0}})
    t.from('#deck-board > img', {
        stagger: {
            each: 0.05,
        },
        y: '100%',
        scaleX: 0.1,
    });
    
    titleEl.textContent = title;
    costEl.textContent = avgCost(deck);
    let chart = renderChart("stat-chart", [attack, defense, synergy, versatility, f2p(deck)]);
    
    const tl = gsap.timeline({defaults: {duration: 1.5, ease: "power4.inOut", opacity: 0}})
    tl.from('#deck-title', {y: "-50%", scaleY: 0, ease: "elastic.out(1, 1)"})
    tl.from('.cost-container', {scaleX: 0, x: '11%'}, '<.5')
    tl.from('.cost-container > img', {rotation: 360}, '<')
    tl.from('#cost', {x: '75%'}, '<')
    tl.from('.stats', {scaleX: 0}, '<')
}, 1000);

window.addEventListener("resize", () => {
    chart.destroy();
    chart = renderChart("stat-chart", [attack, defense, synergy, versatility, f2p(deck)]);
});
