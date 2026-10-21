import mongoose from 'mongoose';
mongoose.connect('');

const Cat = mongoose.model('Cat', { name: String });

const orange = new Cat({ name: 'Orange' });
orange.save().then(() => console.log('meow'));

const juice = new Cat({ name: 'Juice' });
juice.save().then(() => console.log('meep'));

mongoose.disconnect()