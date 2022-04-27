import reader from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return reader()
      .then((response) => json(response))
      .then((value) => new GameSaving(value))
      .catch((err) => new Error('Ошибка чтения данных'));
  }
}