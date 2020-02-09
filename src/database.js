import {connect} from 'mongodb';

export async function connection() {
    try {
      const client = await  connect('mongodb://localhost:27017',{
        useUnifiedTopology: true 
      });
      const db = client.db('node-resapi');
      console.log('db is connected');
      return db;
    }catch(error){
        console.log(error);
    }
}