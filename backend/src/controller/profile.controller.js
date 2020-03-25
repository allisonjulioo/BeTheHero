const connection = require("../database/connection");

module.exports = {
  async get(request, respose) {
    const ong_id = request.headers.authorization;
    const incidents = await connection("incidents").where("ong_id", ong_id);
    return respose.json(incidents);
  }
};
