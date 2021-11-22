import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
    @Query(() => String) // 定义一个查询,并且返回字符类型
    hello() {
        console.log(`This is hello function!`)
        return 'hello world';
    }
}
