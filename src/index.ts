import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import mikroconfig from "./mikro-orm.config";

const main  = async () => {
    
    const orm = await MikroORM.init(mikroconfig);
    await orm.getMigrator().up();
    const post = orm.em.create(Post,{title:'Second post'});
    await orm.em.persistAndFlush(post);
} 

main().catch((error)=>{
    console.error(error);
});

console.log("Hello world");