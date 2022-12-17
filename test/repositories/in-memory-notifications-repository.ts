import { Notification } from '../../src/applicattion/entities/notification';
import { NotificationsRepository } from '../../src/applicattion/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
