
var express = require("express")
var { graphqlHTTP } = require("express-graphql")
var { GraphQLObjectType, GraphQLString, GraphQLID,GraphQLList, GraphQLSchema } = require("graphql")
const dbConnect = require('./dbConnect/connection')
const Users = require('./model/user')
//defining the types 
dbConnect()
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {type: GraphQLID},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  }
})

// creating a query
const Query =  new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(){
        return Users.find()
      }
     },
     user: {
      type: UserType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Users.findById(args.id)
      }
     },
  }
})


//creating a mutation
const Mutation =  new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        email: {type: GraphQLString},
        password: {type: GraphQLString}
      },
      resolve(parent, args){
        return Users.create(args)
      }
     },


    updateUser:{
      type: UserType,
      args: {
        id: {type: GraphQLID},
        email: {type: GraphQLString},
      },
      resolve(parent, args){
        return Users.findByIdAndUpdate(args.id, {$set: {email: args.email}})
      }
     },

     deleteUser:{
      type: UserType,
      args: {
        id: {type: GraphQLID},
      },
      resolve(parent, args){
        return Users.findByIdAndDelete(args.id)
      }
     },
    
  }
})




var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: new GraphQLSchema({query: Query, mutation:Mutation}),
    graphiql: true,
  })
)
app.listen(8080)
console.log("Running a GraphQL API server at localhost:8080/graphql")


