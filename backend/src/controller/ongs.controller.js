const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async get(request, respose) {
    const ongs = await connection('ongs').select('*');
    return respose.json(ongs);
  },
  
  async create(request, respose) {
    const { name, whatsapp, email, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      whatsapp,
      email,
      city,
      uf
    });

    return respose.json({ id })
  }
}