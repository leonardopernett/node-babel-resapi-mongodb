import {Router} from 'express';
const router = Router();

import {connection} from '../database.js'
import {ObjectID} from 'mongodb'

router.get('/tasks',async (req,res)=>{
      const db = await connection();
      const tasks = await db.collection('tasks').find().toArray();
      res.json(tasks)

})

router.post('/tasks', async (req,res)=>{
     const task = {
          title:req.body.title,
          description:req.body.description
     }

     const db = await connection();
     const result = await db.collection('tasks').insertOne(task);
     res.json(result.ops[0])

})


router.get('/tasks/:id', async (req,res)=>{
     const {id} = req.params
     const db = await connection();
     const result = await db.collection('tasks').findOne({_id:ObjectID(id)})
     res.json(result)
})


router.delete('/tasks/:id', async (req,res)=>{
     const {id } = req.params
     const db = await connection();
     await db.collection('tasks').deleteOne({_id:ObjectID(id)});
     res.json("deleted")
})


router.put('/tasks/:id', async (req,res)=>{
     const  {id}= req.params;
     const task = {
          title:req.body.title,
          description:req.body.description
     }
     const db = await connection();
     const result = await db.collection('tasks').updateOne({_id:ObjectID(id)}, {$set: task});
     
     res.json('updated');

})

export default router;