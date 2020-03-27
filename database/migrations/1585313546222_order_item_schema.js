'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderItemSchema extends Schema {
  up () {
    this.create('order_items', (table) => {
      table.increments()
      table.integer('order_id').unsigned
      table.integer('product_id')
      table.integer('quantity')
      table.decimal('subtotal', 12,2)
      table.timestamps()

      table.foreign('product_id').references('id').onTable('products').onDelete('cascade')
      table.foreign('order_id').references('id').onTable('orders').onDelete('cascade')
    })
  }

  down () {
    this.drop('order_items')
  }
}

module.exports = OrderItemSchema
