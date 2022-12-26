import { json, serve } from 'https://deno.land/x/sift@0.6.0/mod.ts';

const id = Deno.env.get('USER_ID');
const token = Deno.env.get('JWT_TOKEN');

async function login(request: Request): Promise<Response> {
  const url = 'https://www.duolingo.com/login';

  if (request.method !== 'POST') {
    return json(null, {
      status: 403,
      statusText: 'Forbidden',
    });
  }

  let data = await request.json();

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login: data.username, password: data.password }),
  });

  data = await res.json();

  if (data['failure']) {
    return json(data, {
      status: 403,
      statusText: 'Forbidden',
    });
  }

  return json({
    id: data.user_id,
    username: data.username,
    token: res.headers.get('jwt'),
  });
}

async function user(_: Request): Promise<Response> {
  const url = `https://www.duolingo.com/2017-06-30/users?username=${id}`;

  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  return json(await res.text());
}

serve({
  '/': user,
  '/login': login,
});
