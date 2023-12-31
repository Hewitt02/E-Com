// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsToMany(Category, {
  through: 'category_id'
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
})
// Products belongToMany Tags (through ProductTag)

Product.belongsToMany( Tag, {
  foreignKey: 'product_id',
  through: ProductTag,
})
// Tags belongToMany Products (through ProductTag)

ag.belongsToMany( Product, {
  foreignKey: 'tag_id',
  through: ProductTag,
 }) 

 module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
