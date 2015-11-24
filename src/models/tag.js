import anselBookshelf from './ansel-bookshelf';

import Photo from './photo';

var Tag = anselBookshelf.Model.extend({
  tableName: 'tag',

  photos: function() {
    return this.belongsToMany(Photo);
  }
});

export default Tag;
