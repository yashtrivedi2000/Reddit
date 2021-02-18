import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
export default{
    migrations:{
        path: path.join(__dirname,'./migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities:[Post],
        dbName:'lireddit',
        user:'yashtrivedi',
        password:'1431',
        type:'postgresql',
        debug:true,
} as Parameters<typeof MikroORM.init>[0];