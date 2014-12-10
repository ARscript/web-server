var persistance = require('./persistence')

exports.getById = function *(id) {
  if(!id) {
    throw new Error("id must be specified")
  }
  return yield persistance.getById(id)
}
