const express=require('express');
const router=express.Router();
const db=require('../config/db');

router.get('/', async (req, res) => {
    try{
        const [rowsOfMessages]=await db.query("SELECT id, name, message, created_at FROM messages ORDER BY created_at DESC LIMIT 10");
        res.json(rowsOfMessages);
    }
    catch(err){
        console.error("Error getting messages from db!: ", err);
        res.status(500).json({ error: "Failed to retrieve messages" });
    }
});

router.post('/messages', async (req, res) => {
    const {name, message} =req.body;

    if(!name || !message || name.trim()==='' || message.trim()==='')
        return res.status(400).json({error:'Name and message are required!'});

    try{
        await db.query("INSERT INTO messages (name, message) VALUES (?, ?)", [name.trim(), message.trim()]);

        res.status(201).json({ message: 'Message posted successfully!' });
    }
    catch(err){
        console.error('Database insert error:', err);
        res.status(500).json({ error: 'Failed to save message to database.' });
    }
});

module.exports=router;
