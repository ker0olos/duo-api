import { json, serve } from 'https://deno.land/x/sift@0.6.0/mod.ts';

// c
async function login(request: Request): Promise<Response> {
  switch (request.method) {
    case 'POST': {
      const url = 'https://www.duolingo.com/login';

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

    default:
      return new Response('Invalid method', { status: 405 });
  }
}

async function user(request: Request): Promise<Response> {
  switch (request.method) {
    case 'GET': {
      const data = new URL(request.url).searchParams;

      const id = data.get('id');

      if (!id) {
        return new Response('Bad request', { status: 400 });
      }

      const token = data.get('token');

      const url = `https://www.duolingo.com/2017-06-30/users?username=${id}`;

      const res = await fetch(url, {
        headers: token
          ? {
            'Authorization': `Bearer ${token}`,
          }
          : {},
      });

      return json(await res.text());
    }

    default:
      return new Response('Invalid method', { status: 405 });
  }
}

serve({
  '/': user,
  '/login': login,
});
