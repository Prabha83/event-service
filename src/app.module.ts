import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventTypesModule } from './event-types/event-types.module';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';
import { EventCommentsModule } from './event-comments/event-comments.module';
import { EventAttendeesModule } from './event-attendees/event-attendees.module';

@Module({
  imports: [
    EventTypesModule,
    UsersModule,
    EventsModule,
    EventCommentsModule,
    EventAttendeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
