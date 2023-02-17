import { Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

const player_1 = new Player("Adam", 35, "Australia");

let player_2: IsPlayer;
player_2 = new Player("Harshelle", 33, "South Africa");

const players: Player[] = [];

players.push(player_1);
players.push(player_2);

players.forEach((player) => {
  //console.log(player.play());
});

// ----interface

interface RectangleOptions {
  w: number;
  h: number;
}

function drawRect(options: RectangleOptions) {
  let width = options.w;
  let height = options.h;
}

let dim_3_options = { w: 5, h: 55, l: 55 };

drawRect(dim_3_options);

// ------------- Generics

const addID = <T extends { name: string; age: number }>(o: T) => {
  let id = Math.floor(Math.random() * 100);

  return { ...o, id };
};

let user = addID({
  name: "Conor",
  age: 33,
  country: "US",
});

user.name = "Gonme";

addID(user);

// -- Generics with interface

interface APIResponse<T> {
  status: number;
  type: string;
  data: T;
}

const res_1: APIResponse<object> = {
  status: 200,
  type: "good",
  data: {
    name: "Abdul",
    age: 34,
  },
};
