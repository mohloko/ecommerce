'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PasswordReset extends Model {
  static boot() {
    super.boot()

    this.addHook('before_create', async model => {
      model.token = await str_random(25)
      const expires_at = new Date()
      now.setMinutes(expires_at.getMinutes() + 30)
      model.expires_at = expires_at
    })
  }

  //formata para padrao do mysql
  static get dates()
  return['created_at', 'update_at', 'expires_at']
}


module.exports = PasswordReset
