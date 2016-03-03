// Global variables inherited from scripts.js
/*global checkbot */

var dwlist = [
    "Timburr", "Gurdurr", "Conkeldurr", "Pansage", "Pansear", "Panpour", "Simisear", "Simisage", "Simipour", "Ekans", "Arbok", "Paras", "Parasect", "Happiny", "Chansey", "Blissey", "Munchlax", "Snorlax", "Aipom", "Ambipom", "Pineco", "Forretress", "Wurmple", "Silcoon", "Cascoon", "Beautifly", "Dustox", "Seedot", "Nuzleaf", "Shiftry", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Plusle", "Minun", "Budew", "Roselia", "Gulpin", "Swalot", "Kecleon", "Kricketot", "Kricketune", "Cherubi", "Cherrim", "Carnivine", "Audino", "Throh", "Sawk", "Scraggy", "Scrafty", "Rattata", "Raticate", "Nidoran-F", "Nidorina", "Nidoqueen", "Nidoran-M", "Nidorino", "Nidoking", "Oddish", "Gloom", "Vileplume", "Bellossom", "Bellsprout", "Weepinbell", "Victreebel", "Ponyta", "Rapidash", "Farfetch'd", "Doduo", "Dodrio", "Exeggcute", "Exeggutor", "Lickitung", "Lickilicky", "Tangela", "Tangrowth", "Kangaskhan", "Sentret", "Furret", "Cleffa", "Clefairy", "Clefable", "Igglybuff", "Jigglypuff", "Wigglytuff", "Mareep", "Flaaffy", "Ampharos", "Hoppip", "Skiploom", "Jumpluff", "Sunkern", "Sunflora", "Stantler", "Poochyena", "Mightyena", "Lotad", "Ludicolo", "Lombre", "Taillow", "Swellow", "Surskit", "Masquerain", "Bidoof", "Bibarel", "Shinx", "Luxio", "Luxray", "Psyduck", "Golduck", "Growlithe", "Arcanine", "Scyther", "Scizor", "Tauros", "Azurill", "Marill", "Azumarill", "Bonsly", "Sudowoodo", "Girafarig", "Miltank", "Zigzagoon", "Linoone", "Electrike", "Manectric", "Castform", "Pachirisu", "Buneary", "Lopunny", "Glameow", "Purugly", "Natu", "Xatu", "Skitty", "Delcatty", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Bulbasaur", "Charmander", "Squirtle", "Ivysaur", "Venusaur", "Charmeleon", "Charizard", "Wartortle", "Blastoise", "Croagunk", "Toxicroak", "Turtwig", "Grotle", "Torterra", "Chimchar", "Infernape", "Monferno", "Piplup", "Prinplup", "Empoleon", "Treecko", "Sceptile", "Grovyle", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Caterpie", "Metapod", "Butterfree", "Pidgey", "Pidgeotto", "Pidgeot", "Spearow", "Fearow", "Zubat", "Golbat", "Crobat", "Aerodactyl", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Yanma", "Yanmega", "Murkrow", "Honchkrow", "Delibird", "Wingull", "Pelipper", "Swablu", "Altaria", "Starly", "Staravia", "Staraptor", "Gligar", "Gliscor", "Drifloon", "Drifblim", "Skarmory", "Tropius", "Chatot", "Slowpoke", "Slowbro", "Slowking", "Krabby", "Kingler", "Horsea", "Seadra", "Kingdra", "Goldeen", "Seaking", "Magikarp", "Gyarados", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Wooper", "Quagsire", "Qwilfish", "Corsola", "Remoraid", "Octillery", "Mantine", "Mantyke", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Barboach", "Whiscash", "Clamperl", "Gorebyss", "Huntail", "Relicanth", "Luvdisc", "Buizel", "Floatzel", "Finneon", "Lumineon", "Tentacool", "Tentacruel", "Corphish", "Crawdaunt", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Shellos", "Gastrodon", "Lapras", "Dratini", "Dragonair", "Dragonite", "Elekid", "Electabuzz", "Electivire", "Poliwag", "Poliwrath", "Politoed", "Poliwhirl", "Vulpix", "Ninetales", "Musharna", "Munna", "Darmanitan", "Darumaka", "Mamoswine", "Togekiss", "Burmy", "Burmy-S", "Burmy-G", "Wormadam", "Wormadam-S", "Wormadam-G", "Mothim", "Pichu", "Pikachu", "Raichu","Abra","Kadabra","Alakazam","Spiritomb","Mr. Mime","Mime Jr.","Meditite","Medicham","Meowth","Persian","Shuppet","Banette","Spinarak","Ariados","Drowzee","Hypno","Wobbuffet","Wynaut","Snubbull","Granbull","Houndour","Houndoom","Smoochum","Jynx","Ralts", "Kirlia", "Gardevoir","Gallade","Sableye","Mawile","Volbeat","Illumise","Spoink","Grumpig","Stunky","Skuntank","Bronzong","Bronzor","Mankey","Primeape","Machop","Machoke","Machamp","Magnemite","Magneton","Magnezone","Koffing","Weezing","Rhyhorn","Rhydon","Rhyperior","Teddiursa","Ursaring","Slugma","Magcargo","Phanpy","Donphan","Magby","Magmar","Magmortar","Larvitar","Pupitar","Tyranitar","Makuhita","Hariyama","Numel","Camerupt","Torkoal","Spinda","Trapinch","Vibrava","Flygon","Cacnea","Cacturne","Absol","Beldum","Metang","Metagross","Hippopotas","Hippowdon","Skorupi","Drapion","Tyrogue","Hitmonlee","Hitmonchan","Hitmontop","Bagon","Shelgon","Salamence","Seel","Dewgong","Shellder","Cloyster","Chinchou","Lanturn","Smeargle","Porygon","Porygon2","Porygon-Z","Drilbur", "Excadrill", "Basculin", "Basculin-a", "Alomomola", "Stunfisk", "Druddigon", "Foongus", "Amoonguss", "Liepard", "Purrloin", "Minccino", "Cinccino", "Sandshrew", "Sandslash", "Vullaby", "Mandibuzz", "Braviary", "Frillish", "Jellicent", "Weedle", "Kakuna", "Beedrill", "Shroomish", "Breloom", "Zangoose", "Seviper", "Combee", "Vespiquen", "Patrat", "Watchog", "Blitzle", "Zebstrika", "Woobat", "Swoobat", "Mienfoo", "Mienshao", "Bouffalant", "Staryu", "Starmie", "Togepi", "Shuckle", "Togetic", "Rotom", "Sigilyph", "Riolu", "Lucario", "Lugia", "Ho-Oh", "Dialga", "Palkia", "Giratina", "Grimer", "Muk", "Ditto", "Venonat", "Venomoth", "Herdier", "Lillipup", "Stoutland", "Sewaddle", "Swadloon", "Leavanny", "Cubchoo", "Beartic", "Landorus", "Thundurus", "Tornadus","Dunsparce", "Sneasel", "Weavile", "Nosepass", "Probopass", "Karrablast", "Escavalier", "Shelmet", "Accelgor", "Snorunt", "Glalie", "Froslass", "Pinsir", "Emolga", "Heracross", "Trubbish", "Garbodor", "Snover", "Abomasnow","Diglett", "Dugtrio", "Geodude", "Graveler", "Golem", "Onix", "Steelix", "Voltorb", "Electrode", "Cubone", "Marowak", "Whismur", "Loudred", "Exploud", "Aron", "Lairon", "Aggron", "Spheal", "Sealeo", "Walrein", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Gible", "Gabite", "Garchomp", "Pidove", "Tranquill", "Unfezant", "Tympole", "Palpitoad", "Seismitoad", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Ducklett", "Swanna", "Deerling", "Sawsbuck", "Elgyem", "Beheeyem", "Pawniard", "Bisharp", "Heatmor", "Durant","Venipede","Whirlipede", "Scolipede", "Tirtouga", "Carracosta", "Joltik", "Galvantula", "Maractus", "Dwebble", "Crustle", "Roggenrola", "Boldore", "Gigalith", "Vanillite", "Vanillish", "Vanilluxe", "Klink", "Klang", "Klinklang", "Swinub", "Piloswine", "Golett", "Golurk", "Gothitelle", "Gothorita", "Solosis", "Duosion", "Reuniclus", "Deerling-Summer", "Deerling-Autumn", "Deerling-Winter", "Sawsbuck-Summer", "Sawsbuck-Autumn", "Sawsbuck-Winter", "Roserade", "Mewtwo"
];
var halist = dwlist.concat([
    "Gothita", "Rufflet", "Klefki", "Phantump", "Trevenant", "Axew", "Fraxure", "Haxorus", "Carbink", "Scatterbug", "Spewpa", "Vivillon", "Sandile", "Krokorok", "Krookodile", "Inkay", "Malamar", "Noibat", "Noivern", "Goomy", "Sliggoo", "Goodra", "Dedenne", "Helioptile", "Heliolisk", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Flabébé", "Floette", "Florges", "Pancham", "Pangoro", "Larvesta", "Volcarona", "Litleo", "Pyroar", "Fennekin", "Braixen", "Delphox", "Fletchling", "Fletchinder", "Talonflame", "Hawlucha", "Litwick", "Lampent", "Chandelure", "Pumpkaboo", "Pumpkaboo-S", "Pumpkaboo-L", "Pumpkaboo-XL", "Gourgeist", "Gourgeist-S", "Gourgeist-L", "Gourgeist-XL", "Duskull", "Dusclops", "Dusknoir", "Chespin", "Quilladin", "Chesnaught", "Skiddo", "Gogoat", "Bunnelby", "Diggersby", "Bergmite", "Avalugg", "Espurr", "Meowstic", "Meowstic-F", "Binacle", "Barbaracle", "Froakie", "Frogadier", "Greninja", "Sylveon", "Ferrothorn", "Skrelp", "Dragalge", "Snivy", "Servine", "Serperior", "Oshawott", "Dewott", "Samurott", "Tepig", "Pignite", "Emboar", "Tyrunt", "Tyrantrum", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Amaura", "Aurorus", "Articuno", "Zapdos", "Moltres"
]);
//two lists for gen 5 and gen 6
/* use hash for faster lookup */
var dwpokemons = {};
var hapokemons = {};
var dwpok;
for (dwpok = 0; dwpok < halist.length; dwpok++) {
    var num = sys.pokeNum(halist[dwpok]);
    if (num % 65536 == sys.pokeNum("Pikachu")) { //probably add a function to tell the difference between aesthetic and normal formes in the future
        num = sys.pokeNum("Pikachu");
    }
    if (num === undefined)
        sys.sendAll("Script Check: Unknown poke in hapokemons: '" +halist[dwpok]+"'.", announceChan);
    else if (hapokemons[num])
        sys.sendAll("Script Check:  hapokemons contains '" +halist[dwpok]+"' multiple times.", announceChan);
    else {
        hapokemons[num] = true;
        if (dwlist.indexOf(halist[dwpok]) > -1) {
            dwpokemons[num] = true;
        }
    }
}

var breedingList = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Croagunk", "Toxicroak", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Hitmonlee","Hitmonchan","Hitmontop","Tyrogue", "Porygon", "Porygon2", "Porygon-Z", "Gothorita", "Gothitelle","Pansage", "Pansear", "Panpour", "Simisear", "Simisage", "Simipour"
];
var breedingpokemons = breedingList.map(sys.pokeNum);

var lclist = [
    "Bulbasaur", "Charmander", "Squirtle", "Croagunk", "Turtwig", "Chimchar", "Piplup", "Treecko", "Torchic", "Mudkip", "Pansage", "Pansear", "Panpour"
];
var lcpokemons = lclist.map(sys.pokeNum);
var lcmoves = {
    "Bronzor":["Iron Defense"],
    "Golett":["Rollout","Shadow Punch","Iron Defense","Mega Punch","Magnitude","DynamicPunch","Night Shade","Curse","Hammer Arm","Focus Punch"],
    "Klink":["Charge","Thundershock","Gear Grind","Bind","Mirror Shot","Screech","Discharge","Metal Sound","Shift Gear","Lock-On","Zap Cannon"],
    "Petilil":["Entrainment"],
    "Rufflet":["Wing Attack","Scary Face","Slash","Defog","Air Slash","Crush Claw","Whirlwind","Brave Bird","Thrash"]
};

var pokeAbilities = [];

var Ablist = "Bulbasaur-False Swipe/Overgrow|Block/Overgrow|Frenzy Plant/Overgrow|Weather Ball/Overgrow=Ivysaur-False Swipe/Overgrow|Block/Overgrow|Frenzy Plant/Overgrow|Weather Ball/Overgrow=Venusaur-False Swipe/Overgrow|Block/Overgrow|Weather Ball/Overgrow=Charmander-False Swipe/Blaze|Block/Blaze|Blast Burn/Blaze|Acrobatics/Blaze=Charmeleon-False Swipe/Blaze|Block/Blaze|Blast Burn/Blaze|Acrobatics/Blaze=Charizard-False Swipe/Blaze|Block/Blaze|Acrobatics/Blaze=Squirtle-False Swipe/Torrent|Block/Torrent|Hydro Cannon/Torrent|Follow Me/Torrent=Wartortle-False Swipe/Torrent|Block/Torrent|Hydro Cannon/Torrent|Follow Me/Torrent=Blastoise-False Swipe/Torrent|Block/Torrent|Follow Me/Torrent";
//Terrible, but it works!
//Bulba line: Weather Ball, Frenzy Plant, False Swipe, Block
//Charm line: Acrobatics, Blast Burn, False Swipe, Block
//Squirt line: Follow Me, Hydro Cannon, False Swipe, Block
var sepAbPokes = Ablist.split('='),
    sepAbMovesPoke, sepAb, moveab;
for (var x = 0; x < sepAbPokes.length; x++) {
    sepAbMovesPoke = sepAbPokes[x].split('-');
    sepAb = sepAbMovesPoke[1].split('|');
    
    var poke = sys.pokeNum(sepAbMovesPoke[0]);
    pokeAbilities[poke] = [];
    
    for (var y = 0; y < sepAb.length; ++y) {
        moveab = sepAb[y].split('/');
        pokeAbilities[poke][sys.moveNum(moveab[0])] = sys.abilityNum(moveab[1]);
    }
}

var pokeNatures = [];

var list = "Heatran-Eruption/Quiet=Suicune-Extreme Speed/Relaxed|Sheer Cold/Relaxed|Aqua Ring/Relaxed|Air Slash/Relaxed=Raikou-Extreme Speed/Rash|Weather Ball/Rash|Zap Cannon/Rash|Aura Sphere/Rash=Entei-Extreme Speed/Adamant|Flare Blitz/Adamant|Howl/Adamant|Crush Claw/Adamant=Snivy-Aromatherapy/Hardy=Genesect-Extreme Speed/Hasty|Blaze Kick/Hasty|Shift Gear/Hasty";
//this is really awful btw :(
var sepPokes = list.split('='),
    sepMovesPoke, sepMoves, movenat;
for (var x = 0; x < sepPokes.length; x++) {
    sepMovesPoke = sepPokes[x].split('-');
    sepMoves = sepMovesPoke[1].split('|');

    var poke = sys.pokeNum(sepMovesPoke[0]);
    pokeNatures[poke] = [];

    for (var y = 0; y < sepMoves.length; ++y) {
        movenat = sepMoves[y].split('/');
        pokeNatures[poke][sys.moveNum(movenat[0])] = sys.natureNum(movenat[1]);
    }
}


function TierChecker() {
    this.checkers = [];
}

TierChecker.prototype.add_new_check = function(exclusive, tiers, checker) {
    this.checkers.push({tiers: tiers, checker: checker, exclusive: exclusive});
};

TierChecker.prototype.has_legal_team_for_tier = function(src, team, tier, silent, returncomp) {
    if (tier == "Challenge Cup" || tier == "CC 1v1" || tier == "Wifi CC 1v1" || tier == "Inverted Challenge Cup" || tier == "Hackmons Challenge Cup" || (tier == "Battle Factory" || tier == "Battle Factory 6v6") && sys.gen(src, team) === 6) return true;
    if (!sys.hasLegalTeamForTier(src, team, tier)) return false;

    var complaints = [];
    for (var i = 0; i < this.checkers.length; ++i) {
        var valid_tier = (this.checkers[i].exclusive ? this.checkers[i].tiers.indexOf(tier) == -1 : this.checkers[i].tiers.indexOf(tier) != -1);
        if (valid_tier) {
            var new_comp = this.checkers[i].checker(src, team, tier);
            if (Array.isArray(new_comp)) {
                complaints = complaints.concat(new_comp);
            }
        }
    }
    if (complaints.length === 0) {
        return true;
    } else if (!silent) {
        for (var j = 0; j < complaints.length; ++j) {
            checkbot.sendMessage(src, complaints[j]);
        }
    }
    if (returncomp) {
        return complaints;
    }
    return false;
};

TierChecker.prototype.find_good_tier = function(src, team) {
    // TODO: write up
    var testPath = ["ORAS LC", "ORAS OU", "ORAS UU", "ORAS LU", "ORAS NU", "ORAS Ubers", "Anything Goes", "BW2 LC", "BW2 LC Ubers", "BW2 NU", "BW2 LU", "BW2 UU", "BW2 OU", "BW2 Ubers", "Battle Factory 6v6", "Challenge Cup", "ORAS Hackmons"];
    for (var i = 0; i < testPath.length; ++i) {
        var testtier = testPath[i];
        if (sys.hasLegalTeamForTier(src, team, testtier) && this.has_legal_team_for_tier(src, team, testtier, true)) {
            sys.changeTier(src, team, testtier);
            if (testtier == "Battle Factory" || testtier == "Battle Factory 6v6") {
                require('battlefactory.js').generateTeam(src, team);
            }
            return;
        }
    }
};

var tier_checker = new TierChecker();
var INCLUDING = false;
var EXCLUDING = true;
var challenge_cups = ["Challenge Cup", "CC 1v1", "Wifi CC 1v1", "Inverted Challenge Cup", "Hackmons Challenge Cup", "Battle Factory", "Battle Factory 6v6"];
var hackmons = ["ORAS Hackmons", "ORAS Balanced Hackmons", "Inverted Balanced Hackmons", "All Gen Hackmons"];

tier_checker.add_new_check(EXCLUDING, challenge_cups, function eventMovesCheck(src, team) {
    var ret = [];
    for (var i = 0; i < 6; i++) {
        var poke = sys.teamPoke(src, team, i);
        if (poke in pokeNatures) {
            for (var x in pokeNatures[poke]) {
                if (sys.hasTeamPokeMove(src, team, i, x) && sys.teamPokeNature(src, team, i) != pokeNatures[poke][x])
                {
                    ret.push(sys.pokemon(poke) + " with " + sys.move(x) + " must have a " + sys.nature(pokeNatures[poke][x]) + " nature.");
                }
            }
        }
    }
    return ret;
});

tier_checker.add_new_check(EXCLUDING, challenge_cups, function eventMovesCheck(src, team) {
    var ret = [];
    for (var i = 0; i < 6; i++) {
        var poke = sys.teamPoke(src, team, i);
        if (poke in pokeAbilities) {
            for (var x in pokeAbilities[poke]) {
                if (sys.hasTeamPokeMove(src, team, i, x) && sys.teamPokeAbility(src, team, i) != pokeAbilities[poke][x])
                {
                    ret.push(sys.pokemon(poke) + " with " + sys.move(x) + " must have the ability " + sys.ability(pokeAbilities[poke][x]) + ".");
                }
            }
        }
    }
    return ret;
});

tier_checker.add_new_check(INCLUDING, ["BW2 LC", "BW2 LC Ubers", "BW2 UU LC", "ORAS LC"], function littleCupCheck(src, team, tier) {
    var ret = [];
    var gen = sys.gen(src, team);
    var check = (gen > 5 ? ["Treecko", "Mudkip", "Turtwig", "Chimchar", "Piplup"].map(sys.pokeNum) : lcpokemons);
    for (var i = 0; i < 6; i++) {
        var x = sys.teamPoke(src, team, i);
        if (x !== 0 && sys.hasDreamWorldAbility(src, team, i) && check.indexOf(x) != -1 ) {
            ret.push(sys.pokemon(x) + " is not allowed with a " + (gen > 5 ? "Hidden":"Dream World") + " Ability in " + tier + ".");
        }
        if (x !== 0 && lcmoves.hasOwnProperty(sys.pokemon(x))) {
            for (var j = 0; j < 4; j++) {
                if (lcmoves[sys.pokemon(x)].indexOf(sys.move(sys.teamPokeMove(src, team, i, j))) !== -1) {
                    ret.push(sys.pokemon(x) + " is not allowed in " + tier + " with the move " + sys.move(sys.teamPokeMove(src, team, i, j)) + ".");
                }
            }
        }
    }
    return ret;
});

tier_checker.add_new_check(INCLUDING, ["BW2 NU"], function evioliteCheck(src, team, tier) {
    var evioliteLimit = 6;
    var eviolites = 0;
    for (var i = 0; i < 6; i++) {
        var item = sys.teamPokeItem(src, team, i);
        item = item !== undefined ? sys.item(item) : "(no item)";
        if (item == "Eviolite" && ++eviolites > evioliteLimit) {
            return ["Only 1 Pokémon is allowed with Eviolite in " + tier + "."];
        }
    }
});

if (typeof Config == "undefined") { Config = { DreamWorldTiers: ["ORAS Hackmons", "ORAS Balanced Hackmons", "Inverted Balanced Hackmons", "All Gen Hackmons", "X/Y", "Black/White", "Black/White 2"] }; }
tier_checker.add_new_check(EXCLUDING, Config.DreamWorldTiers, function dwAbilityCheck(src, team, tier) {
    // Of course, DW ability only affects 5th gen
    var ret = [];
    if (sys.gen(src, team) === 5) {
        for (var i = 0; i < 6; i++) {
            var x = sys.teamPoke(src, team, i);
            if (x !== 0 && sys.hasDreamWorldAbility(src, team, i) && (!(x in dwpokemons) || (breedingpokemons.indexOf(x) != -1 && !sys.compatibleAsDreamWorldEvent(src, team, i)))) {
                if (!(x in dwpokemons)) {
                    ret.push(sys.pokemon(x) + " is not allowed with a Dream World ability in " + tier + " tier.");
                } else {
                    ret.push(sys.pokemon(x) + " has to be Male and have no egg moves with its Dream World ability in  " + tier + " tier.");
                }
            }
        }
    }
    // few unreleased abilities left in gen 6
    var pokebank = ["Tentacool", "Tentacruel", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Mewtwo", "Sentret", "Furret", "Chinchou", "Lanturn", "Qwilfish", "Mantine", "Zigzagoon", "Linoone", "Skitty", "Delcatty", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Torkoal", "Lunatone", "Solrock", "Barboach", "Whiscash", "Lileep", "Cradily", "Anorith", "Armaldo", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Chatot", "Munchlax", "Hippopotas", "Hippowdon", "Mantyke", "Patrat", "Watchog", "Basculin", "Tirtouga", "Carracosta", "Karrablast", "Escavalier", "Alomomola", "Shelmet", "Accelgor"];
    if (sys.gen(src, team) === 6) {
        for (var j = 0; j < 6; j++) {
            var y = sys.teamPoke(src, team, j);
            if (y !== 0 && pokedex.hasDreamWorldAbility(y, sys.teamPokeAbility(src, team, j))) {
                if (!(y in hapokemons) || (tier === "Random Battle") && pokebank.indexOf(sys.pokemon(y)) !== -1) {
                    ret.push(sys.pokemon(y) + " is not allowed with Hidden Ability " + sys.ability(sys.teamPokeAbility(src, team, j)) + " in " + tier + " tier. Change it in the teambuilder.");
                }
            }
        }
    }
    return ret;
});

tier_checker.add_new_check(EXCLUDING, challenge_cups, function endlessCheck(src, team, tier) {
    var ret = [];
    for (var i = 0; i < 6; i++) {
        if (sys.teamPokeItem(src, team, i) === sys.itemNum("Leppa Berry") && sys.hasTeamPokeMove(src, team, i, sys.moveNum("Recycle")) && (sys.hasTeamPokeMove(src, team, i, sys.moveNum("Fling")) || sys.hasTeamPokeMove(src, team, i, sys.moveNum("Pain Split")) || sys.hasTeamPokeMove(src, team, i, sys.moveNum("Heal Pulse")))) {
            ret.push(sys.pokemon(sys.teamPoke(src, team, i)) + " has the combination of Leppa Berry, Recycle and any of Fling/Heal Pulse/Pain Split which is banned in " + tier + " under the Endless Battle Clause.");
        }
    }
    return ret;
});

tier_checker.add_new_check(INCLUDING, ["ORAS Balanced Hackmons", "Inverted Balanced Hackmons"], function ateAbilityCheck(src, team, tier) {
    var num = 0;
    for (var i = 0; i < 6; i++) {
        if (sys.teamPokeAbility(src, team, i) === sys.abilityNum("Aerilate") || sys.teamPokeAbility(src, team, i) === sys.abilityNum("Pixilate") || sys.teamPokeAbility(src, team, i) === sys.abilityNum("Refrigerate")) {
            num++;
        }
    }
    if (num > 1) {
        return ["You are not allowed more than one -ate ability in " + tier +"."];
    }
});

tier_checker.add_new_check(INCLUDING, ["Monogen"], function monoGenCheck(src, team) {
    var GEN_MAX = [0, 151, 252, 386, 493, 649, 718];
    var gen = 0;
    for (var i = 0; i < 6; ++i) {
        var pokenum = sys.teamPoke(src, team, i);
        var species = pokenum % 65536; // remove alt formes
        if (species === 0) continue;
        if (gen === 0) {
            while (species > GEN_MAX[gen]) ++gen; // Search for correct gen for first poke
        } else if (!(GEN_MAX[gen-1] < species && species <= GEN_MAX[gen])) {
            return [sys.pokemon(pokenum) + " is not from Generation " + gen];
        }
    }
});

tier_checker.add_new_check(INCLUDING, ["Monocolour"], function monoColourCheck(src, team) {
    var colours = {
        'Red': ['Charmander', 'Charmeleon', 'Charizard', 'Vileplume', 'Paras', 'Parasect', 'Krabby', 'Kingler', 'Voltorb', 'Electrode', 'Goldeen', 'Seaking', 'Jynx', 'Magikarp', 'Magmar', 'Flareon', 'Ledyba', 'Ledian', 'Ariados', 'Yanma', 'Scizor', 'Slugma', 'Magcargo', 'Octillery', 'Delibird', 'Porygon2', 'Magby', 'Ho-Oh', 'Torchic', 'Combusken', 'Blaziken', 'Wurmple', 'Medicham', 'Carvanha', 'Camerupt', 'Solrock', 'Corphish', 'Crawdaunt', 'Latias', 'Groudon', 'Deoxys', 'Deoxys-A', 'Deoxys-D', 'Deoxys-S', 'Kricketot', 'Kricketune', 'Magmortar', 'Porygon-Z', 'Rotom', 'Rotom-H', 'Rotom-F', 'Rotom-W', 'Rotom-C', 'Rotom-S', 'Tepig', 'Pignite', 'Emboar', 'Pansear', 'Simisear', 'Throh', 'Venipede', 'Scolipede', 'Krookodile', 'Darumaka', 'Darmanitan', 'Dwebble', 'Crustle', 'Scrafty', 'Shelmet', 'Accelgor', 'Druddigon', 'Pawniard', 'Bisharp', 'Braviary', 'Heatmor'],
        'Blue': ['Squirtle', 'Wartortle', 'Blastoise', 'Nidoran?', 'Nidorina', 'Nidoqueen', 'Oddish', 'Gloom', 'Golduck', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Tentacool', 'Tentacruel', 'Tangela', 'Horsea', 'Seadra', 'Gyarados', 'Lapras', 'Vaporeon', 'Omanyte', 'Omastar', 'Articuno', 'Dratini', 'Dragonair', 'Totodile', 'Croconaw', 'Feraligatr', 'Chinchou', 'Lanturn', 'Marill', 'Azumarill', 'Jumpluff', 'Wooper', 'Quagsire', 'Wobbuffet', 'Heracross', 'Kingdra', 'Phanpy', 'Suicune', 'Mudkip', 'Marshtomp', 'Swampert', 'Taillow', 'Swellow', 'Surskit', 'Masquerain', 'Loudred', 'Exploud', 'Azurill', 'Meditite', 'Sharpedo', 'Wailmer', 'Wailord', 'Swablu', 'Altaria', 'Whiscash', 'Chimecho', 'Wynaut', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Bagon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regice', 'Latios', 'Kyogre', 'Piplup', 'Prinplup', 'Empoleon', 'Shinx', 'Luxio', 'Luxray', 'Cranidos', 'Rampardos', 'Gible', 'Gabite', 'Garchomp', 'Riolu', 'Lucario', 'Croagunk', 'Toxicroak', 'Finneon', 'Lumineon', 'Mantyke', 'Tangrowth', 'Glaceon', 'Azelf', 'Phione', 'Manaphy', 'Oshawott', 'Dewott', 'Samurott', 'Panpour', 'Simipour', 'Roggenrola', 'Boldore', 'Gigalith', 'Woobat', 'Swoobat', 'Tympole', 'Palpitoad', 'Seismitoad', 'Sawk', 'Tirtouga', 'Carracosta', 'Ducklett', 'Karrablast', 'Eelektrik', 'Eelektross', 'Elgyem', 'Cryogonal', 'Deino', 'Zweilous', 'Hydreigon', 'Cobalion', 'Thundurus', 'Thundurus-T'],
        'Green': ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Caterpie', 'Metapod', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Scyther', 'Chikorita', 'Bayleef', 'Meganium', 'Spinarak', 'Natu', 'Xatu', 'Bellossom', 'Politoed', 'Skiploom', 'Larvitar', 'Tyranitar', 'Celebi', 'Treecko', 'Grovyle', 'Sceptile', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Breloom', 'Electrike', 'Roselia', 'Gulpin', 'Vibrava', 'Flygon', 'Cacnea', 'Cacturne', 'Cradily', 'Kecleon', 'Tropius', 'Rayquaza', 'Turtwig', 'Grotle', 'Torterra', 'Budew', 'Roserade', 'Bronzor', 'Bronzong', 'Carnivine', 'Yanmega', 'Leafeon', 'Shaymin', 'Shaymin-S', 'Snivy', 'Servine', 'Serperior', 'Pansage', 'Simisage', 'Swadloon', 'Cottonee', 'Whimsicott', 'Petilil', 'Lilligant', 'Basculin', 'Maractus', 'Trubbish', 'Garbodor', 'Solosis', 'Duosion', 'Reuniclus', 'Axew', 'Fraxure', 'Golett', 'Golurk', 'Virizion', 'Tornadus','Tornadus-T'],
        'Yellow': ['Kakuna', 'Beedrill', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Ninetales', 'Meowth', 'Persian', 'Psyduck', 'Ponyta', 'Rapidash', 'Drowzee', 'Hypno', 'Exeggutor', 'Electabuzz', 'Jolteon', 'Zapdos', 'Moltres', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Pichu', 'Ampharos', 'Sunkern', 'Sunflora', 'Girafarig', 'Dunsparce', 'Shuckle', 'Elekid', 'Raikou', 'Beautifly', 'Pelipper', 'Ninjask', 'Makuhita', 'Manectric', 'Plusle', 'Minun', 'Numel', 'Lunatone', 'Jirachi', 'Mothim', 'Combee', 'Vespiquen', 'Chingling', 'Electivire', 'Uxie', 'Cresselia', 'Victini', 'Sewaddle', 'Leavanny', 'Scraggy', 'Cofagrigus', 'Archen', 'Archeops', 'Deerling', 'Joltik', 'Galvantula', 'Haxorus', 'Mienfoo', 'Keldeo', 'Keldeo-R'],
        'Purple': ['Rattata', 'Ekans', 'Arbok', 'Nidoran?', 'Nidorino', 'Nidoking', 'Zubat', 'Golbat', 'Venonat', 'Venomoth', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Koffing', 'Weezing', 'Starmie', 'Ditto', 'Aerodactyl', 'Mewtwo', 'Crobat', 'Aipom', 'Espeon', 'Forretress', 'Gligar', 'Granbull', 'Mantine', 'Tyrogue', 'Cascoon', 'Delcatty', 'Sableye', 'Illumise', 'Swalot', 'Grumpig', 'Lileep', 'Shellos', 'Gastrodon', 'Ambipom', 'Drifloon', 'Drifblim', 'Mismagius', 'Stunky', 'Skuntank', 'Spiritomb', 'Skorupi', 'Drapion', 'Gliscor', 'Palkia', 'Purrloin', 'Liepard', 'Gothita', 'Gothorita', 'Gothitelle', 'Mienshao', 'Genesect'],
        'Pink': ['Clefairy', 'Clefable', 'Jigglypuff', 'Wigglytuff', 'Slowpoke', 'Slowbro', 'Exeggcute', 'Lickitung', 'Chansey', 'Mr. Mime', 'Porygon', 'Mew', 'Cleffa', 'Igglybuff', 'Flaaffy', 'Hoppip', 'Slowking', 'Snubbull', 'Corsola', 'Smoochum', 'Miltank', 'Blissey', 'Whismur', 'Skitty', 'Milotic', 'Gorebyss', 'Luvdisc', 'Cherubi', 'Cherrim', 'Mime Jr.', 'Happiny', 'Lickilicky', 'Mesprit', 'Munna', 'Musharna', 'Audino', 'Alomomola'],
        'Brown': ['Weedle', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Raticate', 'Spearow', 'Fearow', 'Vulpix', 'Diglett', 'Dugtrio', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Abra', 'Kadabra', 'Alakazam', 'Geodude', 'Graveler', 'Golem', 'Farfetch\'d', 'Doduo', 'Dodrio', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Kangaskhan', 'Staryu', 'Pinsir', 'Tauros', 'Eevee', 'Kabuto', 'Kabutops', 'Dragonite', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Sudowoodo', 'Teddiursa', 'Ursaring', 'Swinub', 'Piloswine', 'Stantler', 'Hitmontop', 'Entei', 'Zigzagoon', 'Seedot', 'Nuzleaf', 'Shiftry', 'Shroomish', 'Slakoth', 'Slaking', 'Shedinja', 'Hariyama', 'Torkoal', 'Spinda', 'Trapinch', 'Baltoy', 'Feebas', 'Regirock', 'Chimchar', 'Monferno', 'Infernape', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Buizel', 'Floatzel', 'Buneary', 'Lopunny', 'Bonsly', 'Hippopotas', 'Hippowdon', 'Mamoswine', 'Heatran', 'Patrat', 'Watchog', 'Lillipup', 'Conkeldurr', 'Sandile', 'Krokorok', 'Sawsbuck', 'Beheeyem', 'Stunfisk', 'Bouffalant', 'Vullaby', 'Mandibuzz', 'Landorus', 'Landorus-T'],
         'Black': ['Snorlax', 'Umbreon', 'Murkrow', 'Unown', 'Sneasel', 'Houndour', 'Houndoom', 'Mawile', 'Spoink', 'Seviper', 'Claydol', 'Shuppet', 'Banette', 'Duskull', 'Dusclops', 'Honchkrow', 'Chatot', 'Munchlax', 'Weavile', 'Dusknoir', 'Giratina', 'Darkrai', 'Blitzle', 'Zebstrika', 'Sigilyph', 'Yamask', 'Chandelure', 'Zekrom'],
        'Gray': ['Machop', 'Machoke', 'Machamp', 'Magnemite', 'Magneton', 'Onix', 'Rhyhorn', 'Rhydon', 'Misdreavus', 'Pineco', 'Steelix', 'Qwilfish', 'Remoraid', 'Skarmory', 'Donphan', 'Pupitar', 'Poochyena', 'Mightyena', 'Nincada', 'Nosepass', 'Aron', 'Lairon', 'Aggron', 'Volbeat', 'Barboach', 'Anorith', 'Armaldo', 'Snorunt', 'Glalie', 'Relicanth', 'Registeel', 'Shieldon', 'Bastiodon', 'Burmy', 'Wormadam', 'Wormadam-G', 'Wormadam-S', 'Glameow', 'Purugly', 'Magnezone', 'Rhyperior', 'Probopass', 'Arceus', 'Herdier', 'Stoutland', 'Pidove', 'Tranquill', 'Unfezant', 'Drilbur', 'Excadrill', 'Timburr', 'Gurdurr', 'Whirlipede', 'Zorua', 'Zoroark', 'Minccino', 'Cinccino', 'Escavalier', 'Ferroseed', 'Ferrothorn', 'Klink', 'Klang', 'Klinklang', 'Durant', 'Terrakion', 'Kyurem', 'Kyurem-B', 'Kyurem-W'],
        'White': ['Butterfree', 'Seel', 'Dewgong', 'Togepi', 'Togetic', 'Mareep', 'Smeargle', 'Lugia', 'Linoone', 'Silcoon', 'Wingull', 'Ralts', 'Kirlia', 'Gardevoir', 'Vigoroth', 'Zangoose', 'Castform', 'Absol', 'Shelgon', 'Pachirisu', 'Snover', 'Abomasnow', 'Togekiss', 'Gallade', 'Froslass', 'Dialga', 'Regigigas', 'Swanna', 'Vanillite', 'Vanillish', 'Vanilluxe', 'Emolga', 'Foongus', 'Amoonguss', 'Frillish', 'Jellicent', 'Tynamo', 'Litwick', 'Lampent', 'Cubchoo', 'Beartic', 'Rufflet', 'Larvesta', 'Volcarona', 'Reshiram', 'Meloetta', 'Meloetta-S']
    };
    var poke = sys.pokemon(sys.teamPoke(src, team, 0));
    var thecolour = '';
    for (var colour in colours) {
        if (colours[colour].indexOf(poke) > -1) {
            thecolour = colour;
        }
    }
    if (thecolour === '') {
        return ["Bug! " + poke + " has not a colour in checkMonocolour :("];
    }
    for (var i = 1; i < 6; ++i) {
        poke = sys.pokemon(sys.teamPoke(src, team, i));
        if (colours[thecolour].indexOf(poke) == -1 && poke != "Missingno") {
            return [poke + " has not the colour: " + thecolour];
        }
    }
});

tier_checker.add_new_check(INCLUDING, ["BW2 OU"], function swiftSwimCheck(src, team, tier) {
    for(var i = 0; i <6; ++i){
        if(sys.ability(sys.teamPokeAbility(src, team, i)) == "Drizzle"){
            for(var j = 0; j <6; ++j){
                if(sys.ability(sys.teamPokeAbility(src, team, j)) == "Swift Swim"){
                    return ["You cannot have the combination of Swift Swim and Drizzle in " + tier + "."];
                }
            }
        }
    }
});

tier_checker.add_new_check(INCLUDING, ["Monotype"], function monotypeCheck(src, team) {
    var type1, type2, typea = 0, typeb = 0,teamLength = 0, poke;
    for (var i = 0; i < 6; i++) {
        poke = sys.teamPoke(src, team, i);
        if (poke === 0) {
            continue;
        }
        type1 = sys.pokeType1(poke, 6);
        type2 = sys.pokeType2(poke, 6);
        teamLength++;
    }
    for (var j = 0; j < 6; j++) {
        poke = sys.teamPoke(src, team, j);
        if (poke === 0) {
            continue;
        }
        if ((type1 === sys.pokeType1(poke, 6) || type1 === sys.pokeType2(poke, 6)) && type1 !== 18) {
            typea++;
        }
        if ((type2 === sys.pokeType1(poke, 6) || type2 === sys.pokeType2(poke, 6)) && type2 !== 18) {
            typeb++;
        }
    }
    var teamType = typea >= typeb ? sys.type(type1) : sys.type(type2);
    if (typea < teamLength && typeb < teamLength) {
        return ["Your team is not a valid Monotype team as not every team member is " + teamType ];
    }
    
    /* Template */
    //  type: {type: "Type", items: [], pokes: [], abilities: []}
    var typeBans = { 
        flying: {type: "Flying", items: ["Charizardite X"]}
    };
    var ret = [], item, pkmn;
    for (var e in typeBans) {
        if (typeBans.hasOwnProperty(e)) {
            e = typeBans[e];
            if (teamType === e.type) {
                for (var p = 0; p < 6; p++) {
                    pkmn = sys.pokemon(sys.teamPoke(src, team, p));
                    if (pkmn === sys.pokemon(0)) {
                        continue;
                    }
                    
                    if (typeof(e.pokes) !== 'undefined') {
                        if (e.pokes.contains(pkmn)) {
                            ret.push("You are not allowed to use " + pkmn + " on a " + teamType + " team in Monotype.");
                        }
                    }
                    if (typeof(e.items) !== 'undefined') {
                        item = sys.item(sys.teamPokeItem(src, team, p));
                        if (e.items.contains(item)) {
                            ret.push("You are not allowed to use the Item " + item + " (held by " + pkmn + ") for a " + teamType + " team in Monotype.");
                        }
                    }
                    if (typeof(e.abilities) !== 'undefined') {
                        ability = sys.ability(sys.teamPokeAbility(src, team, p));
                        if (e.abilities.contains(ability)) {
                            ret.push("You are not allowed to use the Ability " + ability + " (on " + pkmn + ") for a " + teamType + " team in Monotype.");
                        }
                    }
                }
            }
        }
    }
    return ret;
});

tier_checker.add_new_check(INCLUDING, ["ORAS OU", "ORAS UU", "ORAS LU", "ORAS NU"], function batonPassLimitXY(src, team, tier) {
    var batonPassLimit = 1;
    for (var i = 0, j = 0; i < 6; ++i) {
        if (sys.hasTeamPokeMove(src, team, i, sys.moveNum("Baton Pass")) && (++j > batonPassLimit)) {
            return ["Baton Pass is limited to "+batonPassLimit+" Pokémon per team in " + tier + "."];
        }
    }
});

tier_checker.add_new_check(INCLUDING, ["BW2 NU", "BW2 NEU"], function smashPassCheck(src, team, tier) {
    var ret = [];
    for (var i = 0; i < 6; i++) {
        if (sys.hasTeamPokeMove(src, team, i, sys.moveNum("Shell Smash")) && sys.hasTeamPokeMove(src, team, i, sys.moveNum("Baton Pass"))) {
            ret.push(sys.pokemon(sys.teamPoke(src, team, i)) + " has the combination of Shell Smash and Baton Pass, which is banned in " + tier + ".");
        }
    }
    return ret;
});

tier_checker.add_new_check(EXCLUDING, challenge_cups.concat(hackmons), function eventShinies(player, team) {
    var beasts = {};
    beasts[sys.pokeNum('Raikou')]  = ['Extreme Speed', 'Aura Sphere', 'Weather Ball', 'Zap Cannon'] .map(sys.moveNum);
    beasts[sys.pokeNum('Suicune')] = ['Extreme Speed', 'Aqua Ring',   'Sheer Cold',   'Air Slash']  .map(sys.moveNum);
    beasts[sys.pokeNum('Entei')]   = ['Extreme Speed', 'Howl',        'Crush Claw',   'Flare Blitz'].map(sys.moveNum);
    beasts[sys.pokeNum('Genesect')] = ['Extreme Speed', 'Blaze Kick', 'Shift Gear'].map(sys.moveNum);
    beasts[sys.pokeNum('Pikachu')] = ['Teeter Dance'].map(sys.moveNum);
    beasts[sys.pokeNum('Beldum')] = ['Hold Back'].map(sys.moveNum);
    beasts[sys.pokeNum('Metang')] = ['Hold Back'].map(sys.moveNum);
    beasts[sys.pokeNum('Metagross')] = ['Hold Back'].map(sys.moveNum);
    beasts[sys.pokeNum('Jirachi')] = ['Moonblast', 'Happy Hour'].map(sys.moveNum);
 
    for (var beast in beasts)
        for (var slot=0; slot<6; slot++)
            if ((sys.teamPoke(player, team, slot) % 65536) == beast)
                for (var i=0; i<4; i++)
                    if (-1 != beasts[beast].indexOf(sys.teamPokeMove(player, team, slot, i)))
                        sys.changePokeShine(player, team, slot, true);
});

tier_checker.add_new_check(EXCLUDING, challenge_cups.concat(hackmons), function eventNonShinies(player, team) {
    var beasts = {};
    beasts[sys.pokeNum('Jirachi')] = ['Heart Stamp', 'Play Rough'].map(sys.moveNum);
 
    for (var beast in beasts)
        for (var slot=0; slot<6; slot++)
            if ((sys.teamPoke(player, team, slot) % 65536) == beast)
                for (var i=0; i<4; i++)
                    if (-1 != beasts[beast].indexOf(sys.teamPokeMove(player, team, slot, i)))
                        sys.changePokeShine(player, team, slot, false);
});

tier_checker.add_new_check(EXCLUDING, challenge_cups, function hasOneUsablePokemon(player, team) {
    for (var slot=0; slot<6; slot++)
        if (sys.teamPoke(player, team, slot) !== 0)
            for (var move=0; move<4; move++)
                if (sys.teamPokeMove(player, team , slot, move) !== 0)
                    return;
    return ["You do not have any valid Pokémon."];
});

tier_checker.add_new_check(INCLUDING, ["Sky Battle"], function levitateCheck(src, team) {
    var bannedAbilities = {
        'duskull': ['frisk'],
        'bronzor': ['heatproof', 'heavy metal'],
        'bronzong': ['heatproof', 'heavy metal']
    };
    var ret = [];
    for (var i = 0; i < 6; ++i) {
        var ability = sys.ability(sys.teamPokeAbility(src, team, i));
        var lability = ability.toLowerCase();
        var poke = sys.pokemon(sys.teamPoke(src, team, i));
        var lpoke = poke.toLowerCase();
        if (lpoke in bannedAbilities && bannedAbilities[lpoke].indexOf(lability) != -1) {
            ret.push(poke + " is not allowed to have ability " + ability + " in Sky Battle. Please change it to Levitate in Teambuilder.");
        }
    }
    return ret;
});

tier_checker.add_new_check(INCLUDING, ["ORAS Balanced Hackmons", "Inverted Balanced Hackmons"], function abilityClause(src, team) {
    var abilities = {};
    for (var i = 0; i < 6; i++) {
        var ability = sys.ability(sys.teamPokeAbility(src, team, i));
        if (abilities[ability]) {
            if (abilities[ability]++ > 2) {
                return ["You are not allowed more than 2 of any ability in this tier"];
            }
        } else {
            abilities[ability] = 1;
        }
    }
    return;
});

tier_checker.add_new_check(EXCLUDING, challenge_cups.concat(hackmons), function GSCSleepTrap(src, team) {
	var ret = [];
	var gen = sys.gen(src, team);
	if (gen == 2) {
		var sleep = [sys.moveNum("Spore"), sys.moveNum("Hypnosis"), sys.moveNum("Lovely Kiss"), sys.moveNum("Sing"), sys.moveNum("Sleep Powder")].sort();
		var trap = [sys.moveNum("Mean Look"), sys.moveNum("Spider Web")].sort();
		
		pokes:
		for (var i = 0; i < 6; i++) {
			for (var j = 0; j < sleep.length; ++j) {
				if (sys.hasTeamPokeMove(src, team, i, sleep[j])) {
					for (var k = 0; k < trap.length; ++k) {
						if (sys.hasTeamPokeMove(src, team, i, trap[k])) {
							ret.push("Pokemon " + sys.pokemon(sys.teamPoke(src,team,i)) + "  has both a Sleep Inducing and a Trapping move, which is banned in GSC.");
						}
					}
				}
			}
		}
	}	
    return ret;
});

module.exports = tier_checker;
