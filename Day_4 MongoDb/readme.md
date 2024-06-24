# **MongoDb** ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## CLI Commands

> Visiting databases

- Showing databases `show dbs`
- Switched to database `use database`
  `Use command creates new database if not exits`

> Collections

- Showing collections `show collections`
- Creates new collections `db.createCollection("name")`
- Create new collections `db.createCollection("name",{capped:true,size:1000000,max:100})`
- Create with autoIndex off `db.createCollection("name",{autoIndex _id:false})`
- Drop collection `db.name.drop()`

> Datatype in MongoDb

`int` , `double` , `String` , `boolean` , `null` , `array` , `Datetime` , `document`

> Insert documents in collections

- Insert one document `db.name.insertOne({parameter1:"data",parameter2:data2})`
- Insert many document `db.name.insertMany([{parameter1:"data",parameter2:data2},{parameter1:"data",parameter2:data2}{parameter1:"data",parameter2:data2}])`

> Update documents `.updateOne({filter},{update})`

- Update one document set `db.name.updateOne({parameter: "data"},{$set:{parameter:"value"}})`
- Update one document unset `db.name.updateOne({parameter: "data"},{$unset:{parameter:""}})`
- Update many document set `db.name.updateMany({},{$set:{parameter:"value"}})`
- Update many document unset `db.name.updateMany({parameter:{$exists:booleanValue}},{$set:{parameter:"value"}})`

> Delete document

- Delete one document `db.name.deleteOne({parameter: "data"})`
- Delete many document `db.name.deleteOne({parameter: {$exists: "data"}})`

> Show/Find documents in a collection

- Show all document `db.name.find()`
- Finding document using Sorting `db.name.find().sort({parameter: 1})`
`Use 1 for ascending and -1 for descending order`
- Finding document using Sorting and limit `db.name.find().sort({parameter: 1}).limit(number)`
`num is the limit how many document will be searched`

> DeepDive Find operation .find({query},{projection})

- Give all details about parameter `db.name.find({parameter: "data"})`
- Give all documents with same parameter `db.name.find({parameter: "data"})`
- Gives all document's parameter `db.name.find({},{parameter: true})`
- Gives all document's parameter more specific `db.name.find({},{parameter: true,_id:false,parameter: false})`

> Comparison operators

`$gt` , `$lt` , `$gte` , `$lte` , `$in` , `$nin`

> Logical operators

- and operator (Both true) `db.name.find({$and:[{parameter : data },{parameter:{$lte: data }}]})`
- or operator (One true) `db.name.find({$or:[{parameter : data },{parameter:{$lte: data }}]})`
- nor operator (both false) `db.name.find({$nor:[{parameter : data },{parameter:{$lte: data }}]})`
- not operator (not equal to) `db.name.find({parameter: {$not: data}})`
- not operator reverse (not equal to) `db.name.find({parameter: {$not: {$gt : data}}})`

> Execution stats .explain("executionStats")

- Show execution stats `db.name.find({},{parameter: data}).explain("executionStats")`

> Indexes make C R U D operation slow but searching Fast

- Doing documentName based indexing `db.name.createIndex({documentName:1})`
`Use 1 for ascending and -1 for descending order`
- Gives us the indexes `db.name.getIndexes()`
