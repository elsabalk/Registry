const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type List {
    _id: ID
    list: String
    
  }

  

  

  type Query {
    lists: [List]
  }

  #type Mutation {
    #addUser(username: String!, email: String!, password: String!): Auth
    #login(email: String!, password: String!): Auth
    #addThought(thoughtText: String!): Thought
    #addComment(thoughtId: ID!, commentText: String!): Thought
    #removeThought(thoughtId: ID!): Thought
    #removeComment(thoughtId: ID!, commentId: ID!): Thought
  #}
`;

module.exports = typeDefs;
