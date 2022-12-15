import { Content } from './notification-content';
import { Notification } from './notification';

describe('Notificação', () => {
  test('Deve ser capaz de criar uma notificação', () => {
    const notification = new Notification({
      recipientId: 'example-recipient-id',
      category: 'social',
      content: new Content('Nova solicitação de amizade'),
    });

    expect(notification).toBeTruthy();
  });
});
