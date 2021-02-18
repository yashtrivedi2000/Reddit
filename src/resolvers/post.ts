
import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import {  Ctx, Resolver } from "type-graphql";
import { Query } from "type-graphql";

@Resolver()
export class PostResolver{
    @Query(()=>[Post])
    post(
        @Ctx() {em}:MyContext): Promise<Post[]>
    {
        return em.find(Post,{});
    }
}