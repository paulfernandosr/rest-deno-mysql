import {update} from '../repository/user.ts';
import * as doesUserExists from '../libs/doesUserExists.ts';

export async function updateUser({request, params, response}: any) {
  const userExists = await doesUserExists.findById(params.id);

  if (userExists) {
    const body = request.body();
    const user: any = await body.value;
    response.status = 200;
    response.body = await update(user.name, user.country, params.id);
  } else {
    response.status = 404;
    response.body = 'User not found';
  }
}
