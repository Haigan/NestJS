import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
// import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    // ThrottlerModule.forRoot({
    //   ttt
    //   limit: 10,
    // }),

    ConfigModule.forRoot(),

    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
