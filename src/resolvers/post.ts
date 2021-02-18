
import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import {  Arg, Ctx, Int, Resolver } from "type-graphql";
import { Query } from "type-graphql";

@Resolver()
export class PostResolver{
    @Query(()=>[Post])
    post(
        @Ctx() {em}:MyContext): Promise<Post[]>
    {
        return em.find(Post,{});
    }

    //Get post by ID
    @Query(()=>Post, {nullable: true})
    postFind(@Arg("_id",()=>Int) id:number,
        @Ctx() {em}:MyContext): Promise<Post | null>
    {
        return em.findOne(Post,{_id:id});
    }
}