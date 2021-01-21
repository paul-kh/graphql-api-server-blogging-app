const { buildSchema } = require("graphql");

module.exports = buildSchema(`

   type testData {
       text: String!
       number: Int!
   }
    
    type RootQuery {
        hello: testData
    }

    schema {
        query: RootQuery
    }
`);
