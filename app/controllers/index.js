import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  init() {
    this._super(...arguments);
    this.set('sort', '-reactietermijn');
  },
  fileQueue: service(),
  actions: {
    async addFile(file) {
      const conv = await this.store.findAll('conversatie');
      this.set('model', conv);
    }
  }
});
