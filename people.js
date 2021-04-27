function populatePeople() {
    const firstNames = [
        'Bulbasaur',
        'Ivysaur',
        'Venusaur',
        'Mega Venusaur',
        'Charmander',
        'Charmeleon',
        'Charizard',
        'Mega Charizard X',
        'Mega Charizard Y',
        'Squirtle',
        'Wartortle',
        'Blastoise',
        'Mega Blastoise',
        'Caterpie',
        'Metapod',
        'Butterfree',
        'Weedle',
        'Kakuna',
        'Beedrill',
        'Mega Beedrill'
    ];
    
    
    const lastNames = [
        'Pidgey',
        'Pidgeotto',
        'Pidgeot',
        'Mega Pidgeot',
        'Rattata',
        'Raticate',
        'Spearow',
        'Fearow',
        'Ekans',
        'Arbok',
        'Pikachu',
        'Raichu',
        'Sandshrew',
        'Sandslash',
        'Nidoran♀',
        'Nidorina',
        'Nidoqueen',
        'Nidoran♂',
        'Nidorino',
        'Nidoking'
    ];
     

const labDb = db.getSiblingDB('lab'); // getSiblingDB('nomeBanco') utilizado para não ter que trocar de banco no script com use    

function randomInt(start, end){
    return Math.floor(Math.random() * (start - end) + end);
}

let _id = 0;

while (_id++ < 1e8){
    const name = firstNames[randomInt(0, (firstNames.length -1))] +
    ' ' +
    lastNames[randomInt(0, (lastNames.length -1))];

    labDb.people.insert({
        _id,
        name,
        age: randomInt(12, 120),
        height: randomInt(140, 210)
    });

    if (_id % 1e4 === 0) print(`Inseridos ${_id} documentos`);
}

print('finalizada insercao de de 100 mmilhoes de documentos');
}