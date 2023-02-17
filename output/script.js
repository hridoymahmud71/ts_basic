import { Player } from "./classes/Player.js";
const player_1 = new Player("Adam", 35, "Australia");
let player_2;
player_2 = new Player("Harshelle", 33, "South Africa");
const players = [];
players.push(player_1);
players.push(player_2);
players.forEach((player) => {
    console.log(player.play());
});
function drawRect(options) {
    let width = options.w;
    let height = options.h;
}
let dim_3_options = { w: 5, h: 55, l: 55 };
drawRect(dim_3_options);
