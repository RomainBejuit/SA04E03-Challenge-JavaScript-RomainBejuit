const itemList = ["souris", "écran", "clavier", "ordinateur portable", "tapis de souris", "casque", "câble USB", "téléphone portable"];

console.log("Bonjour ! Les objets disponibles sont :");

for (i = 0; i < itemList.length; i++) {
    console.log("- " + itemList[i]);
}

const recherche = prompt("Recherchez vos articles :");

console.log(
    `L'article ${recherche} ${itemList.includes(recherche) ? "est" : "n'est pas" } dans la liste`);
