import {insert} from '../repository/user.ts';

export async function addUser({request, response}: any) {
  const body = await request.body();
  const user = await body.value;
  if (user.hasOwnProperty('name') && user.hasOwnProperty('country')) {
    response.body = await insert(user);
    response.status = 200;
  } else {
    response.body = {message: 'Invalid Request'};
    response.status = 400;
  }
}
