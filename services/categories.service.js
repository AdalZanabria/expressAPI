const boom = require('@hapi/boom');

class CategoriesService {
  constructor() {
    this.categories = [
      {
        id: 0,
        name: 'Ropa',
      },
      {
        id: 1,
        name: 'Calzado',
      },
      {
        id: 2,
        name: 'Accesorios',
      },
      {
        id: 3,
        name: 'Electrónica',
      },
    ];
  }

  async create(data) {
    const newCategory = {
      id: this.categories.length,
      ...data,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  async find() {
    return this.categories;
  }

  async findOne(id) {
    const category = this.categories.find((category) => category.id == id);
    if (!category) {
      throw boom.notFound('Category not Found.');
    }
    return category;
  }

  async update(id, changes) {
    const index = this.categories.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes,
    };
    return this.categories[index];
  }

  async delete(id) {
    const index = this.categories.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;
