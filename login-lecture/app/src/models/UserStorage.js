"use strict";

class UserStorage {
  static #users = {
    id: ["WDG", "너도개발", "원팀장"],
    psword: ["1234", "1234", "123456"],
    name: ["원동건", "너도개발", "원팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;