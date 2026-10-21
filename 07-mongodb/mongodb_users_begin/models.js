import mongoose from 'mongoose';

const dbUser = process.env.DB_USER_NAME
const dbPwd = process.env.DB_PASSWORD
const dbCluster = process.env.DB_CLUSTER

const uri = `mongodb+srv://${dbUser}:${dbPwd}@${dbCluster}.ceufqjt.mongodb.net/catDemo`;

console.log("connecting...");
await mongoose.connect(uri);
console.log("connected!");

const Cat = mongoose.model('Cat', { name: String });

const orange = new Cat({ name: 'Orange' });
await orange.save()
console.log('meow')

const juice = new Cat({ name: 'Juice' });
await juice.save()
console.log('meep')

await mongoose.disconnect()