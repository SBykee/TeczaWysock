const teams = ["Delin Munina", "Dąb Cetula", "Wisznia Nienowice", "Przedmieście Jarosław", "Piast II Tuczempy", "Korona Tuchla", "Sanovia Michałówka", "Łęg Łowce", "Wesoła Zadąbrowie", "Makovia Makowisko", "Łazowianka Łazy"];

    for (let i=0; i < teams.length; i++) {
        const challengeTeam = teams[i];

        const el = document.createElement("li");
        el.classList.add("element_li");

        const strongEL = document.createElement("strong");
        strongEL.classList.add("element_strong");

        strongEL.style.color = "#333";
        strongEL.innerText = `Tęcza Wysock - ${challengeTeam}`;

        el.appendChild(strongEL);

        const div = document.querySelector(".test");

        div.appendChild(el);


    };