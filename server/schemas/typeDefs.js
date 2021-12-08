const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Item {
    _id: ID
    title: String
    price: String
    img: String
    category: String
  }
  type Auth {
    token: ID!
    user: User
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
