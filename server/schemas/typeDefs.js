const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    thoughts: [Thought]!
  }

  type Gift {
    _id: ID,
    name: String,
    giftPrice: Number,
    purchased: Boolean,
  }
`;


module.exports = typeDefs;
