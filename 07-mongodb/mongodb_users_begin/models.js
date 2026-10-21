import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://asfg_db_user:jWEm6y8awFbIaDx2@cluster0.gvdvoel.mongodb.net/?appName=Cluster0');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Orange' });
kitty.save().then(() => console.log('meow'));

mongoose.disconnect()