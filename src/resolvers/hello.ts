import { Resolver } from "type-graphql";
import { Query } from "type-graphql";

@Resolver()
export class HelloResolver{
    @Query(()=>String)
    hello(){
        return "Hello from HelloResolver"
    }
    @Query(()=>String)
    hello2(){
        return "Hello from HelloResolver part2"
    }
}