//consultas find 


db.pokemon.find({name: /^Pi/ }).pretty() //comeca com Pi
db.pokemon.find({name: /Pi/ }).pretty() //qualquer string que contenha Pi
db.pokemon.find({name: /^Pik/ }, {types: true}).pretty() //projection para trazer so o campo que eu quero
db.pokemon.find({name: /^pik/i }).pretty() //o regex com o "i" ignora o case sensitive para maiusculo e minusculo
db.pokemon.find({attack: {$ne: 85 } }, {name: 1, attack: 1, _id: 0}) //$eq operador de comparacao igual para valores numericos
db.pokemon.find({attack: {$eq: 85 } }, {name: 1, attack: 1, _id: 0}) //$ne operador de comparacao diferente (not equal) de para valores numericos
db.pokemon.find({attack: {$gte: 85 } }, {name: 1, attack: 1, _id: 0}) //$gte operador de comparacao maior e igual que para valores numericos
db.pokemon.find({attack: {$lte: 85 } }, {name: 1, attack: 1, _id: 0}) //$lte operador de comparacao menor e igual que para valores numericos
db.pokemon.find({attack: {$gt: 85 } }, {name: 1, attack: 1, _id: 0}) //$gt operador de comparacao maior que para valores numericos
db.pokemon.find({attack: {$lt: 85 } }, {name: 1, attack: 1, _id: 0}) //$lt operador de comparacao menor que para valores numericos
db.pokemon.find({ types: {$in :["Fire", "Flying"] }  }, { types: 1,name: 1, _id: 0}) //$in operador que retorna qualquer valor que bata com os valores passados 
db.pokemon.find({ types: {$nin :["Fire", "Flying"] }  }, { types: 1,name: 1, _id: 0}) //$nin operador que retorna qualquer valor que NAO bata com os valores passados 