import { gql } from "apollo-server-micro";

export const typeDefs = gql `
type Likes {
    likeSum : Int
}

type Query {
    getLikes: [Likes]
}

`