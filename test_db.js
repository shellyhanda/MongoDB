db.help()
db.version()
db.getName()
show dbs
use test
show collections
db.MyCollection.insert({ "mm" : 1 })
db.movie.drop()
db.MyCollection.find()
use ShellyDB
show dbs
db.createCollection("ShellyCollection")
db.ShellyCollection.save({"name" : 9})
db.ShellyCollection.find().pretty()
db.ShellyCollection.find({"name":{$ne :0}})