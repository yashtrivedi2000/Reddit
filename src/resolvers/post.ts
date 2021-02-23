
import { Post } from "../entities/Post";
import { MyContext } from "src/types";
import {  Arg, Ctx, Int, Mutation, Resolver } from "type-graphql";
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

    @Mutation(()=>Post)
    async createPost(@Arg("title",()=>String) title:string,
        @Ctx() {em}:MyContext): Promise<Post | null>
    {
        const post = em.create(Post,{title});
        await em.persistAndFlush(post);
        return post; 
    }

    @Mutation(()=>Post)
    async updatePost(@Arg("id") _id:number,@Arg("title") title:string,
        @Ctx() {em}:MyContext): Promise<Post | null>
    {
        const post = await em.findOne(Post,{_id});
        if(!post || typeof _id===null){
            return null;
        }
        post.title=title;
        await em.persistAndFlush(post);
        return post;
        
    }
}