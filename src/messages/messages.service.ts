import { Injectable } from '@nestjs/common';
import { MessagesRespository } from './messages.respository';

@Injectable()
export class MessagesService {
  // messagesRepo: MessagesRespository;

  constructor(public messagesRepo: MessagesRespository) {
    this.messagesRepo = messagesRepo;
  }

  async findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
