import { MikroORM } from "@mikro-orm/core";
//import { Post } from "./entities/Post";
import mikroconfig from "./mikro-orm.config";
import express  from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main  = async () => {
    
    const orm = await MikroORM.init(mikroconfig);
    await orm.getMigrator().up();
    
    const app = express();
    app.listen(4000),()=>{
        console.log("Hey, app is listening on port 4000");
        
    };
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers:[HelloResolver,PostResolver],
            validate: false,
        }),
        context:()=>({em : orm.em}),
    });
    apolloServer.applyMiddleware({app});
    app.get('/',(_,res)=>{
        res.send("Hey, how are you?");
        
    });
} 

main().catch((error)=>{
    console.error(error);
});

console.log("Hello world2");