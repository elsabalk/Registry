const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type ProductList {
    title: String
    price: String
    description: String
    productId: String
    image: String
  }

  

  

  type Query {
    me: User
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
