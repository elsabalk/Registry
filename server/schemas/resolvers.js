const { User, List } = require('../models');
const 

const resolvers = {
    Query: {
        lists: () => {
            return List.find();
          },
    
    },
}

module.exports = resolvers;
  