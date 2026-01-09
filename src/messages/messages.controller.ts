import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messge.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  // messagesService: MessagesService;

  constructor(public messagesService: MessagesService) {
    // DON'T USE THIS IN REAL APP
    // USE DEPENDENCY INJECTION
    // this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log({ body });
    const { content } = body;
    return this.messagesService.create(content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    console.log({ id });
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
