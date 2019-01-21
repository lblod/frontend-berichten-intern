import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
export default Controller.extend({
  init() {
    this._super(...arguments);
    this.get('model.laatsteBericht');
  },
  actions: {
    async addFile(file) {
      const laatsteBericht = await this.model.laatsteBericht;
      laatsteBericht.bijlagen.pushObject(file);
      await laatsteBericht.save();
    },
    async deleteFile(file) {
      const laatsteBericht = await this.model.laatsteBericht;
      const bijlagen = laatsteBericht.bijlagen;
      bijlagen.removeObject(file);
      laatsteBericht.set('files', bijlagen);
      await laatsteBericht.save();
    }
  }
});
