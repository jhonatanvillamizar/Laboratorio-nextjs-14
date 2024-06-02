"use server"

import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutations"

export const handelCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject["password_confirmation"]
    
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()

    const variables = {
        input: {
            ...formDataObject,
            fistName: "John",
            lastName: "smith",
            email: "johnsmith@shopify.com",
            phone: "+57" + formDataObject.phone,
            password: "shopify",
        }
    }

    const data = await graphqlClient.request(createUserMutation, variables)
    console.log(data)
}