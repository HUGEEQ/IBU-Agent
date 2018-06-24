'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.render('index/index.xhtml', {name: 'a'});
  }
}

module.exports = HomeController;
