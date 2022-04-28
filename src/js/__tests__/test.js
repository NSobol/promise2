import GameSavingLoader from '../GameSavingLoader';

test('Получение корректных данных', async () => {
  const receivedValue = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const response = await GameSavingLoader.load();
  expect(response).toEqual(receivedValue);
});