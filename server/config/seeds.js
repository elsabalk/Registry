const db = require('./connection')
const {List, User} =require('../models');

db.once('open', async ()=> {
    await List.deleteMany();
    const lists = await List.insertMany([
        {
            list: 'KitchenAid Stand Mixer',
            list: 'HamiltonBeach Coffee Maker',
            list: 'Engraved Marble Wine Chiller for Their Home Bar'
        }
    ])
})