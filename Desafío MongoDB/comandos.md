db.mensajes.insertMany([{autor:'Heber', mensaje:'Soy el del medio'}, {autor:'Adrian', mensaje:'Soy el mayor'}, {autor:'Azul', mensaje:'Soy la menor'}, {autor:'Julio', mensaje:'Soy el padre'}, {autor:'Charo', mensaje:'Soy la madre'}, {autor:'Tito', mensaje:'Soy el más llorón'}, {autor:'Gordo', mensaje:'Y yo el más bravo'}, {autor:'Lobo', mensaje:'Yo soy el más joven pero el más grandote'}, {autor:'Gordita', mensaje:'Y yo soy la mimada'}, {autor:'Negrita', mensaje:'Soy un gato caro'}])

db.productos.insertMany([{producto:'Agua', precio:150}, {producto:'Aceite', precio:350}, {producto:'Yerba', precio:870}, {producto:'Café', precio:3540}, {producto:'Leche', precio:4730}, {producto:'Gaseosa', precio:4900}, {producto:'Vino', precio:1780}, {producto:'Azúcar', precio:2670}, {producto:'Té', precio:690}, {producto:'ultimo', precio:3820}])

 db.productos.insertOne({producto: 'Agregado'. precio: 1000})

 db.productos.find({"precio":{$lt:1000}})

 db.productos.find({"precio":{$gte:1000, $lte:3000}})

 db.productos.find({"precio":{$gt:3000}})

 db.productos.find().sort({precio:1})
 db.productos.find({},{"producto":1}).sort({precio:1}).skip(2).limit(1)

 db.productos.update({},{$set:{"stock":100}},{upsert:false,multi:true})

 db.productos.update({"precio":{$gte:4000}}, {$set:{"stock":0}}, {upsert:false, multi:true})
 db.productos.find({"precio":{$gte:4000}})

 db.productos.deleteMany({"precio":{$lte:1000}})
 db.productos.find().sort({precio:1})

 db.createUser({user:'Pepe', pwd: 'asd456', roles: [{role:'read', db:'ecommerce'}]})
 