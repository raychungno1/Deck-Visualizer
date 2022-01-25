import { cards } from "./cards.js"

function parseDeckLink(link) {
    return link.split("=")[1].split("&")[0].split(";").map(id => cards[id]);
}

function f2p(deck) {
    let f2p = 0;
    deck.forEach(card => f2p += card.rarity);
    return f2p/8;
}

function avgCost(deck) {
    let avg = deck.reduce((total, card) => total + card.cost, 0) / 8;
    return avg.toFixed(1);
}

function generateDeckShopURL(deck) {
    let out = "https://www.deckshop.pro/check/?deck="
    out += deck.map(card => { return card.dsName; }).join("-");
    return out;
}

export { parseDeckLink, f2p, avgCost, generateDeckShopURL }
