//consultas find 


db.pokemon.find({name: /^Pi/ }).pretty() //comeca com Pi
db.pokemon.find({name: /Pi/ }).pretty() //qualquer string que contenha Pi
db.pokemon.find({name: /^Pik/ }, {types: true}).pretty() //projection para trazer so o campo que eu quero
db.pokemon.find({name: /^pik/i }).pretty() //o regex com o "i" ignora o case sensitive para maiusculo e minusculo
db.pokemon.find({attack: {$ne: 85 } }, {name: 1, attack: 1, _id: 0}) //$eq operador de comparacao igual para valores numericos
db.pokemon.find({attack: {$eq: 85 } }, {name: 1, attack: 1, _id: 0}) //$ne operador de comparacao diferente (not equal) de para valores numericos
db.pokemon.find({attack: {$gte: 85 } }, {name: 1, attack: 1, _id: 0}) //$gte operador de comparacao maior e igual que para valores numericos
db.pokemon.find({attack: {$lte: 85 } } , {name: 1, attack: 1, _id: 0}) //$lte operador de comparacao menor e igual que para valores numericos
db.pokemon.find({attack: {$gt: 85 } }, {name: 1, attack: 1, _id: 0}) //$gt operador de comparacao maior que para valores numericos
db.pokemon.find({attack: {$lt: 85 } }, {name: 1, attack: 1, _id: 0}) //$lt operador de comparacao menor que para valores numericos
db.pokemon.find({ types: {$in :["Fire", "Flying"] }  }, { types: 1,name: 1, _id: 0}) //$in operador que retorna qualquer valor que bata com os valores passados 
db.pokemon.find({ types: {$nin :["Fire", "Flying"] }  }, { types: 1,name: 1, _id: 0}) //$nin operador que retorna qualquer valor que NAO bata com os valores passados 
db.pokemon.find({ defense: { $gt: 60, $lte: 72  }  }, { name: 1, defense: 1, _id: 0}) //combinando operadores maior que e menor e igual que bata com valores passados
db.pokemon.find({ $or: [{ defense: { $gt: 60, $lte: 72  }}, {defense: 100}]  }, { name: 1, defense: 1, _id: 0})  //combinando operadores com "ou" maior que e menor e igual que com ou que bata exatamente com valores passados
db.pokemon.find({ $or: [{ attack: { $gte: 80 }, speed: {$gte: 80} }, {defense: {$gte: 80}, hp: {$gte:80 }}]  }, { name: 1, attack:1, defense: 1, _id: 0}) //combinando operadores com "ou" e "e" com maior que para que bata com valores passados
db.pokemon.find({ $or: [{ attack: { $gte: 80 }, speed: {$gte: 80} }, {defense: {$gte: 80}, hp: {$gte:80 }}]  }, {_id: false}).sort({hp: -1}).pretty() //utilizando cursor sort para ordernar consulta connforme valor passado 1 para crescente e -1 para decrescente 
db.pokemon.find({types: {$size: 1}}, {_id: 0, name: 1, types: 1 }) //$size operador para trabalhar com quantidade de itens em umm array 
db.pokemon.find({$and: [{types:  "Ghost"}, {types: "Dark"}]}, {_id: 0, name: 1, types: 1 }) //$and operador para trazer valores que batam com "um e outro" exatamente com os valores passado 
db.pokemon.find({types: {$all: ["Ghost", "Dark"]}}, {_id: 0, name: 1, types: 1 }) //$all para trazer itens "um e outro" que batem com os valores passados, funciona como o $and
db.pokemon.find({types:"Fire"}, {_id: 0, name: 1, attack: 1}).sort({attack: -1}).skip(3).limit(5).pretty() //skip para ir pra a proxima pagina do valor passado e limit para limitar a quantidade de dados apresentados conforme valor passado
db.pokemon.find({ battle_points:{$exists: true} }).pretty() //operador $exists para retornar qualquer item que tenha o campo que bata com o valor passado na query
db.pokemon.find({ "battle_points.hp": { $lte: 40 } }).pretty() //utilizando o dot notation para acessar o embeded document (objeto dentro de outro objeto) no caso hp dentro de battle_points
//UPDATE
db.pokemon.updateOne({name: /^O/}, {$set: { startsWithO: true} } ) //operador $set para updateOne e updateMany operador $unset para reover campos
db.pokemon.updateMany({types: "Fire"}, {$inc: { attack: 10  } } ) //operador $inc para incrementar ou decrementar basta usar valor negativo
db.pokemon.updateMany({types: "Fire"}, {$mul: { attack: 10  } } ) //operador $mul para multiplicar
db.pokemon.updateMany({types: "Fire"}, {$min: {attack: 150}}) //oparador $min atualiza para o valor minimo caso o valor do campo ultrapasse o valor passado 
db.pokemon.updateMany({$max: {attack: 75}}) //oparador $max atualiza para o valor maximo caso o valor do campo ultrapasse o valor passado 