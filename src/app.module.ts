import { Module , NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { AuthController } from './auth/auth.controller';
import { LoginMiddleWare } from './middlewares/login.middleware';
import { TokenMiddleware } from './middlewares/token.middleware';
import { ContentTypeMiddleware } from './middlewares/content_type/content_type.middleware';
import { UserService } from './services/user/user.service';
import { UserLoggingMiddleware } from './middlewares/user-logging/user-logging.middleware';

@Module({
  imports: [ ProductsModule],
  controllers: [AppController, AuthController],
  providers: [AppService, UserService],
})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(UserLoggingMiddleware).forRoutes('user');
    // consumer.apply(ContentTypeMiddleware)
    // .exclude(
    //   {
    //     path:'client/route4',
    //     method:RequestMethod.POST
    //   },
    // )
    // .forRoutes({path:'/client/*',
    //   method:RequestMethod.GET
    // });
    // consumer.apply(LoginMiddleWare).forRoutes('*');
    // consumer.apply(TokenMiddleware).forRoutes('*');
  }
}
