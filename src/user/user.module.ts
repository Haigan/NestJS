import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
  forwardRef,
} from '@nestjs/common';
import { UserControler } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserIdCheckMiddlewares } from 'src/middlewares/user-id-check.middlewares';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, forwardRef(() => AuthModule)],
  controllers: [UserControler],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserIdCheckMiddlewares).forRoutes({
      path: 'users/:id',
      method: RequestMethod.ALL,
    });
  }
}
