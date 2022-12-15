import { Content } from './notification-content';

describe('Conteúdo de Notificação', () => {
  test('Deve ser capaz de criar o conteúdo de uma notificação', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  test('Não deve criar um conteúdo de notificação com um conteúdo menor que 5 caracteres', () => {
    expect(() => new Content('Ops')).toThrow();
  });

  test('Não deve criar um conteúdo de notificação com um conteúdo maior que 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
