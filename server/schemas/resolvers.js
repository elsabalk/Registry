const { User, List } = require('../models');
const itemSchema = require('../models/Item');


const resolvers = {
    Query: {
        lists: () => {
            return itemSchema.find();
          },
    
    },
}

module.exports = resolvers;
  