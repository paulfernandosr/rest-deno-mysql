import { search } from '../repository/user.ts';

export async function getAllUsers(ctx: any) {
  try {
    const res = await search();
    ctx.response.body = res.rows;
  } catch (error) {
    console.log(error);
  }
}
