import { Test, TestingModule } from '@nestjs/testing';
import { EventAttendeesController } from './event-attendees.controller';
import { EventAttendeesService } from './event-attendees.service';

describe('EventAttendeesController', () => {
  let controller: EventAttendeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventAttendeesController],
      providers: [EventAttendeesService],
    }).compile();

    controller = module.get<EventAttendeesController>(EventAttendeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
