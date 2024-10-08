//package USER_INPUT
const readline = require("readline-sync");

class Hero {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}

let hero = new Hero();
let exit = false;

do {
  console.log("RANK HERO");
  const name = readline.question("Digite o nome do heroi: ");
  const xp = readline.questionInt("Quanto de Xp tem?: ");

  if (xp < 1000) {
    hero = new Hero(name, "Ferro");
    console.log(`O Herói de nome ${hero.name} esta no nivel de ${hero.level}`);
  } else if (xp > 1001 && xp < 2000) {
    hero = new Hero(name, "Bronze");
    console.log(`O Herói de nome ${hero.name} esta no nivel de ${hero.level}`);
  } else if (xp > 2001 && xp < 5000) {
    hero = new Hero(name, "Prata");
    console.log(`O Herói de nome ${hero.name} esta no nivel de ${hero.level}`);
  } else if (xp > 5001 && xp < 7000) {
    hero = new Hero(name, "Ouro");
    console.log(`O Herói de nome ${hero.name} esta no nivel de ${hero.level}`);
  } else if (xp > 7001 && xp < 8000) {
    hero = new Hero(name, "Platina");
    console.log(`O Herói de nome ${hero.name} esta no nivel de ${hero.level}`);
  } else if (xp > 8001 && xp < 9000) {
    hero = new Hero(name, "Ascendente");
    console.log(`O Herói de nome ${hero.name} esta no nivel de ${hero.level}`);
  } else if (xp > 9001 && xp < 10001) {
    hero = new Hero(name, "Imortal");
    console.log(`O Herói de nome ${hero.name} esta no nivel de ${hero.level}`);
  } else if (xp >= 10001) {
    hero = new Hero(name, "Radiante");
    console.log(`O Herói de nome ${hero.name} esta no nivel de ${hero.level}`);
  } else {
    console.log("Xp inválido!");
    continue;
  }
  console.log(
    "----------------------------------------------------------------"
  );
  console.log("Tentar novamente?");
  tryagain = readline.question("S/N: ");
  exit = tryagain === "s" ? true : false;
} while (exit);
