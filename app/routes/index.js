import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
export default Route.extend(DataTableRouteMixin,{
  modelName: Object.freeze('conversatie'),
  mergeQueryOptions(params) {
    return {
      include: [
        'laatste-bericht.van',
        'laatste-bericht.naar.classificatie',
      ].join(',')
    };
  }
});
