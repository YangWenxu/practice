const Controller = require('egg').Controller
/**
 * @Controller ⽤户管理
 */
class UserController extends Controller {
	constructor(ctx) {
		super(ctx)
	}
	/**
	 * @summary 创建⽤户
	 * @description 创建⽤户，记录⽤户账户/密码/类型
	 * @router post /api/user
	 * @request body createUserRequest *body
	 * @response 200 baseResponse 创建成功
	*/
	async create() {
		const { ctx } = this;
		ctx.body = 'user ctrl'
	}
}

module.exports = UserController