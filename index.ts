import { ConnInfo, json, serve } from 'https://deno.land/x/sift@0.6.0/mod.ts';

import type { User } from './types.ts';

async function token(request: Request): Promise<Response> {
  switch (request.method) {
    case 'GET': {
      const data = new URL(request.url).searchParams;

      const url = 'https://www.duolingo.com/login';

      const login = data.get('username');
      const password = data.get('password');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, password }),
      });

      const body = await response.json();

      if (body['failure']) {
        return json(data, {
          status: 403,
          statusText: 'Forbidden',
        });
      }

      return json(response.headers.get('jwt'));
    }

    default:
      return new Response('Invalid Method', { status: 405 });
  }
}

async function user(
  request: Request,
  map?: ((b: { users: User[] }) => unknown) | ConnInfo,
): Promise<Response> {
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

      let body = await res.json();

      if (typeof map === 'function') {
        body = map(body);
      }

      return json(body);
    }

    default:
      return new Response('Invalid Method', { status: 405 });
  }
}

serve({
  '/': user,
  '/token': (r) => token(r),
  '/streak': (r) => user(r, (b) => b.users?.[0]?.streak),
  '/xpGoalMetToday': (r) => user(r, (b) => b.users?.[0]?.xpGoalMetToday),
});
