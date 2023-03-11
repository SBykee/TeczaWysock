//dane zawodników

const player1 = {
    // foto: "player1.png",
    tshirtNumber: "1",
    name: "Jan Kowalski",
    dateOfBirth: "10.11.1990r.",
    height: 178 + "cm",
    weight: 68 + "kg",
};
// console.log(player1);


// const playerFoto = (player1) => {
//     const fotoContainerElement = document.createElement("div");
//     const fotoElement = document.createElement("img");
//     fotoElement.src = player1.png;
//     fotoElement.alt = `${player1.name} foto`;

//     fotoContainerElement.appendChild(fotoElement);

//     return fotoContainerElement;
// };


const createPlayer1IthemElement = (player1) => {
    const player1Element = document.createElement("li");

    const infoContainerElement = document.createElement("div");
    infoContainerElement.classList.add("info-container");

    // const player1NameElement = document.createElement("strong");
    // player1NameElement.innerText = player1.name; 
    // player1NameElement.classList.add("player1-name");

    infoContainerElement.appendChild(createInfoElement("Numer zawodnika: ", player1.tshirtNumber));

    // infoContainerElement.appendChild(player1NameElement);

    infoContainerElement.appendChild(createInfoElement("Data urodzenia: ", player1.dateOfBirth));

    infoContainerElement.appendChild(createInfoElement("Wzrost", player1.height));

    infoContainerElement.appendChild(createInfoElement("Waga", player1.weight));

    return player1Element;
};