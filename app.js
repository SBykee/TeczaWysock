const createChalangeElement = (teams) => {

    const teams = ["Delin Munina", "Dąb Cetula", "Wisznia Nienowice", "Przedmieście Jarosław", "Piast II Tuczempy", "Korona Tuchla", "Sanovia Michałówka", "Łęg Łowce", "Wesoła Zadąbrowie", "Makovia Makowisko", "Łazowianka Łazy"];

    for (let i=0; i < teams.length; i++) {
        const challengeTeam = teams[i];
        document.write(challengeTeam);
    };

    const infoElement = document.append()

    const valueElement = document.createElement("span");
    valueElement.innerText = challengeTeam;

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement);

    return infoElement;
};