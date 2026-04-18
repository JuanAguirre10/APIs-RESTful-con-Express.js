const BaseRepository = require("./BaseRepository");

class NotificationRepository extends BaseRepository {
  constructor() {
    super("notifications");
  }

  findByTicketId(ticketId) {
    return this.findAll().filter(n => n.ticketId === ticketId);
  }
}

module.exports = NotificationRepository;