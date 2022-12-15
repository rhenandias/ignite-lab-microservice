import { SendNotification } from './send-notification';

describe('Enviar Notificação', () => {
  test('Deve ser capaz de enviar uma notificação', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      recipientId: 'example-recipient-id',
      category: 'social',
      content: 'Você tem uma nova solicitação de amizade',
    });

    expect(notification).toBeTruthy();
  });
});
