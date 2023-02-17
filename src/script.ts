import {Player}  from "./classes/Player.js";

const player_1 = new Player("Adam", 35, "Australia");
const player_2 = new Player("Harshelle", 33, "South Africa");

const players: Player[] = [];

players.push(player_1);
players.push(player_2);

players.forEach(player => {
    console.log(player);
});