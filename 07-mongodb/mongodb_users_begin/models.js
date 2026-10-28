import mongoose from 'mongoose';

const dbUser = process.env.DB_USER_NAME
const dbPwd = process.env.DB_PASSWORD
const dbCluster = process.env.DB_CLUSTER
// ... get and set variables from env
const uri = `mongodb+srv://${dbUser}:${dbPwd}@${dbCluster}.ceufqjt.mongodb.net/catsDemo`;

// 1 - connect
console.log("connecting...");
await mongoose.connect(uri);  // takes time. how much? 🤷🏻‍♀️
console.log("connected!");

// 2 - init model and save a example piece of data

const schema = new mongoose.Schema(
  { name: String },
  { collection: 'kittens' }
);
const Cat = mongoose.model('Cat', schema);

const orange = new Cat({ name: 'Orange' });
await orange.save()
console.log('meow')

let cat  = await Cat.findOne({name: 'Orange'});
console.log(cat)

// 3 - disconnect
mongoose.disconnect()