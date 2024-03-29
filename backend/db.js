const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://goFood:mernproject@cluster0.67fgwrb.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

async function connectToDatabase() {
    try {
      await mongoose.connect(mongoURI, { useNewUrlParser: true });
      console.log('Connected to MongoDB');
  
      const fetched_data = await mongoose.connection.db.collection("foodData");
      const data = await fetched_data.find({}).toArray();
      //console.log(data); // Data should be fetched here
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  }
  

module.exports = connectToDatabase;
