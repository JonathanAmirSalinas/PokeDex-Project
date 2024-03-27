// Fetch Api Data
async function fetchData(){

    try{        

        const pokemonName = document.getElementById("search-pokemon-name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        // Data
        const data = await response.json();
        // Image
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        // Name
        const nameElement = document.getElementById("pokemonName");
        nameElement.textContent = pokemonName.toUpperCase();

        // Types
        let typeList = data.types;
        if(typeList.length == 1){ 
        // First Type
        const type1 = document.getElementById("pokemon-type1");
        type1.textContent = typeList[0].type.name;
        type1.style.backgroundColor = getTypeColor(typeList[0].type.name);
        type1.style.visibility = "visible";
        // Reset Second Type
        const type2 = document.getElementById("pokemon-type2");
        type2.textContent = "";
        type2.style.visibility = "hidden";
        } 
        else{
        // First Type
        const type1 = document.getElementById("pokemon-type1");
        type1.textContent = typeList[0].type.name;
        type1.style.backgroundColor = getTypeColor(typeList[0].type.name);
        type1.style.visibility = "visible";
        // Second Type
        const type2 = document.getElementById("pokemon-type2");
        type2.textContent = typeList[1].type.name;
        type2.style.backgroundColor = getTypeColor(typeList[1].type.name);
        type2.style.visibility = "visible";
        }
        
        // Pokedex Number
        const pokemonNumber = document.getElementById("pokemonNumber");
        pokemonNumber.textContent = `Pokedex: #${data.id.toString()}`;

        // Height
        const pokemonHeight = document.getElementById("pokemonHeight");
        pokemonHeight.textContent = `Height: ${data.height.toString()} m`;
 
        // Weight
        const pokemonWeight = document.getElementById("pokemonWeight");
        pokemonWeight.textContent = `Weight: ${data.weight.toString()} lbs`;

        // Abilities
        const pokemonAbility = document.getElementById("pokemon-abilities");
        // Refresh pokemonAbility DIV
        pokemonAbility.innerHTML = '';
        pokemonAbility.append(document.createElement('br'));
        pokemonAbility.append("Abilities:");
        pokemonAbility.append(document.createElement('br'));
        // Loop thru Ability Array     
        data.abilities.forEach((item) => {
            let abilityName = document.createElement('TEXT');
            abilityName.textContent = `${item.ability.name}\n`;
            abilityName.style.paddingLeft = '5px'
            pokemonAbility.append(abilityName);
            pokemonAbility.append(document.createElement('br'));
        });
   

        // Stats
        // HP
        const hpData = data.stats[0].base_stat.toString();
        const pokemonHpStat = document.getElementById("hp-stat");
        pokemonHpStat.style.width = `${hpData}px`;
        pokemonHpStat.style.backgroundColor = getStatColor(hpData);
        const hpStatLabel = document.getElementById("hp-stat-label");
        hpStatLabel.textContent = hpData;
        // Attack
        const atkData = data.stats[1].base_stat.toString();
        const pokemonAtkStat = document.getElementById("atk-stat");
        pokemonAtkStat.style.width = `${atkData}px`;
        pokemonAtkStat.style.backgroundColor = getStatColor(atkData);
        const atkStatLabel = document.getElementById("atk-stat-label");
        atkStatLabel.textContent = atkData;
        // Def
        const defData = data.stats[2].base_stat.toString();
        const pokemonDefStat = document.getElementById("def-stat");
        pokemonDefStat.style.width = `${defData}px`;
        pokemonDefStat.style.backgroundColor = getStatColor(defData);
        const defStatLabel = document.getElementById("def-stat-label");
        defStatLabel.textContent = defData;
        // Sp.Atk
        const spAtkData = data.stats[3].base_stat.toString();
        const pokemonSpAtkStat = document.getElementById("spAtk-stat");
        pokemonSpAtkStat.style.width = `${spAtkData}px`;
        pokemonSpAtkStat.style.backgroundColor = getStatColor(spAtkData);
        const spAtkStatLabel = document.getElementById("spAtk-stat-label");
        spAtkStatLabel.textContent = spAtkData;
        // Sp.Def
        const spDefData = data.stats[4].base_stat.toString();
        const pokemonSpDefStat = document.getElementById("spDef-stat");
        pokemonSpDefStat.style.width = `${spDefData}px`;
        pokemonSpDefStat.style.backgroundColor = getStatColor(spDefData);
        const spDefStatLabel = document.getElementById("spDef-stat-label");
        spDefStatLabel.textContent = spDefData;
        // Speed
        const spdData = data.stats[5].base_stat.toString();
        const pokemonSpdStat = document.getElementById("spd-stat");
        pokemonSpdStat.style.width = `${spdData}px`;
        pokemonSpdStat.style.backgroundColor = getStatColor(spdData);
        const spdStatLabel = document.getElementById("spd-stat-label");
        spdStatLabel.textContent = spdData;

        // Show
        const pokemonData = document.getElementById("pokemon-data");
        pokemonData.style.visibility = "visible";

    }
    catch(error){
        console.error(error);
    }
}

// Assign Stat Colors
function getStatColor(stat){
    if(stat > 140){
        return "#1338BE";
    } else if (stat > 100){
        return "#03AC13";
    } else if (stat > 50){
        return "#E6CC00";
    } else{
        return "#D21404";
    }
}

// Assign Type Colors
function getTypeColor(type){
    switch (type) {
        case "normal":
            return "#A8A77A";
        case "fire":
            return "#EE8130";
        case "water":
            return "#6390F0";
        case "grass":
            return "#7AC74C";
        case "electric":
            return "#F7D02C";
        case "poison":
            return "#A33EA1";
        case "ground":
            return "#E2BF65";
        case "rock":
            return "#B6A136";
        case "steel":
            return "#B7B7CE";
        case "fighting":
            return "#C22E28";
        case "ice":
            return "#96D9D6";
        case "dragon":
            return "#6F35FC";
        case "fairy":
            return "#D685AD";
        case "ghost":
            return "#735797";
        case "bug":
            return "#A6B91A";
        case "dark":
            return "#705746";
        case "flying":
            return "#A98FF3";
        case "psychic":
            return "#F95587";
        default:
            return "#111111"
    }
}