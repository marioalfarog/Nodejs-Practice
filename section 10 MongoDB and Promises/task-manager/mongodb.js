// Import the default export (the entire module object) first
import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "task-manager";
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("users");

  //INSERTING
  // const result = await collection.insertOne({
  //   name: "Mario",
  //   age: 33,
  // });
  // if (!result.acknowledged) {
  //   return console.log("Unable to insert user");
  // }
  // console.log(result.insertedId);

  //   const insertManyresult = await collection.insertMany([
  //     {
  //       name: "Mario",
  //       age: 33,
  //     },
  //     {
  //       name: "Didi",
  //       age: 33,
  //     },
  //   ]);
  //       if (!insertManyresult.acknowledged) {
  //       return console.log("Unable to insert user");
  //     }
  //     let ids = insertManyresult.insertedIds;
  //     console.log(insertManyresult.insertedCount);
  //     for (let id of Object.values(ids)) {
  //       console.log(`Inserted a document with id ${id}`);
  //    }

  const taskCollection = db.collection("tasks");
  //   const resultTask = await taskCollection.insertMany([
  //     {
  //       completed: true,
  //       description: 'do groceries',
  //     },
  //     {
  //       completed: false,
  //       description: 'buy laptop',
  //     },
  //      {
  //       completed: false,
  //       description: 'buy tv',
  //     },
  //   ]);
  //       if (!resultTask.acknowledged) {
  //       return console.log("Unable to insert user");
  //     }
  //     let ids = resultTask.insertedIds;
  //     console.log(resultTask.insertedCount);
  //     for (let id of Object.values(ids)) {
  //       console.log(`Inserted a document with id ${id}`);
  //    }

  //FINDING DOCUMENTS
  //   const findResult = await collection.findOne({
  //     _id: new ObjectId("6985e13bc737c111d9c267ca"),
  //   });
  //   if (!findResult) {
  //     console.log("Unable to fetch");
  //   } else {
  //     console.log(findResult);
  //   }

  //   const findResult2 = await collection.find({ age: 33 }).toArray();
  //   if (!findResult2) {
  //     console.log("Unable to fetch");
  //   } else {
  //     console.log(findResult2);
  //   }

  //   const findResult3 = await collection.countDocuments({ age: 33 });
  //   if (!findResult3) {
  //     console.log("Unable to fetch");
  //   } else {
  //     console.log(findResult3);
  //   }

  //   const findResult4 = await taskCollection.findOne({
  //     _id: new ObjectId("6985e28e596f09d4b8f624d3"),
  //   });
  //   if (!findResult4) {
  //     console.log("Unable to fetch");
  //   } else {
  //     console.log(findResult4);
  //   }

  //   const findResult5 = await taskCollection.find({ completed: false }).toArray();
  //   if (!findResult5) {
  //     console.log("Unable to fetch");
  //   } else {
  //     console.log(findResult5);
  //   }

  //UPDATING

  //   const updatePromise = await collection.updateOne(
  //     { _id: new ObjectId("6985e8b8e59293f4cbc562ec") },
  //     {
  //       $set: {
  //         name: "Sara",
  //       },
  //     },
  //   );
  //   if(updatePromise.modifiedCount === 0){
  //     console.log('unable to update')
  //   }
  //   else{
  //     console.log('update succesfull')
  //   }

  //   const updatePromise2 = await collection.updateOne(
  //     { _id: new ObjectId("6985e8b8e59293f4cbc562ec") },
  //     {
  //       $inc: {
  //         age: 9,
  //       },
  //     },
  //   );
  //   if(updatePromise2.modifiedCount === 0){
  //     console.log('unable to update')
  //   }
  //   else{
  //     console.log('update succesfull')
  //   }

  //   const updatePromise3 = await taskCollection.updateMany(
  //     { completed: false },
  //     {
  //       $set: {
  //         completed: true,
  //       },
  //     },
  //   );
  //   if (updatePromise3.modifiedCount === 0) {
  //     console.log("unable to update");
  //   } else {
  //     console.log(updatePromise3)
  //     console.log("update succesfull");
  //   }

  //DELETING

  //   const delete1 = await collection.deleteMany({ age: 42 });
  //   if (!delete1) {
  //     console.log("unable to delete");
  //   } else {
  //     console.log(delete1);
  //     console.log("deleted succesfull");
  //   }

//   const delete2 = await taskCollection.deleteOne({ description: "do groceries" });
//   if (!delete2) {
//     console.log("unable to delete");
//   } else {
//     console.log(delete2);
//     console.log("deleted succesfull");
//   }

  return "done.";
}

main().then(console.log).catch(console.error);
