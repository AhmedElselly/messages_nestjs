import { MessagesRespository } from './messages.respository';

export class MessagesService {
  messagesRepo: MessagesRespository;

  constructor() {
    this.messagesRepo = new MessagesRespository();
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
