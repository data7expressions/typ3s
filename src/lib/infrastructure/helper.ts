import { H3lp, h3lp } from 'h3lp'

export class TypeH3lp extends H3lp {
	constructor (h3lp:H3lp) {
		super(h3lp.utils, h3lp.val, h3lp.fs, h3lp.http, h3lp.obj, h3lp.str, h3lp.test, h3lp.array)
	}
}
export const typeH3lp = new TypeH3lp(h3lp)
