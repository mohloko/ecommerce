'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name')
      table.integer('image_id').unsigned
      table.text('decription')
      table.decimal('price', 12, 2)
      table.timestamps()

      table.foreign('image_id').references('id').inTable('image_product').onDelete('cascade')
    })

    this.create('image_product', (table) => {
      table.increments()
      table.integer('image_id').unsigned()
      table.integer('product_id').unsigned()
      table.timestamps()

      table
      .foreign('product_id')
      .references('id')
      .inTable('products')
      .onDelete('cascade')
    })

    this.create('category_product', (table) => {
      table.increments()
      table.integer('product_id').unsigned
      table.integer('category_id').unsigned

      table.foreign('category_id')
      .references('id')
      .inTable('category')
      .onDelete('cascade')
    })

  }

  down () {
    this.drop('category_product')
    this.drop('image_product')
    this.drop('products')
  }
}

module.exports = ProductSchema
