const express = require('express');
const {graphlHTTP, graphqlHTTP} = require('express-graphql');
const schema=('./schema/schema');
const port = 5000;
const app= express();
const NODE_ENV= 'developement';

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: NODE_ENV === "developement"
}))
app.listen(port ,console.log(`server running on port ${port}`));
