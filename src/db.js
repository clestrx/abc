import mongoose from 'mongoose';

const connection = {}; // Object to store the connection

export default async function connectDB() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log('Using existing database connection');
    return;
  }

  try {
    // Create new database connection
    const db = await mongoose.connect("mongodb+srv://clestrix:clestrix@clestrix.3qf5hyk.mongodb.net/?retryWrites=true&w=majority&appName=Clestrix");

    connection.isConnected = db.connections[0].readyState === 1;
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
    // Log additional information about the error
    console.error('Error stack:', error.stack);
  }
}
