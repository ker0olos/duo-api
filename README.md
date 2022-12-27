### Duolingo API proxy

| Endpoint          | Description                                                       | Type    | Requires token |
| ----------------- | ----------------------------------------------------------------- | ------- | -------------- |
| `/`               | Returns all of the user data at once                              | json    | optional       |
| `/token`          | This token is required for retrieving most of the user properties | string  | no             |
| `/streak`         | Returns the ongoing streak                                        | number  | no             |
| `/xpGoalMetToday` | Returns true if the user met their xp goal for the day            | boolean | yes            |
| `/freeze`         | Returns the number of streak freeze the user has                  | number  | yes            |

> **Warning** Be VERY careful when using this proxy. DO NOT share your password
> or token with others. This is for your personal use only. Using this in your
> apps or public projects is a very bad idea.

### Examples

```shell
curl "https://duoapi.deno.dev/token?username=ker0olos&password=this_is_my_duolingo_password"
eyJ0eXAiOiJ
```

```shell
curl "https://duoapi.deno.dev/xpGoalMetToday?id=ker0olos&token=eyJ0eXAiOiJ"
false
```

```shell
curl "https://duoapi.deno.dev/streak?id=ker0olos&token=eyJ0eXAiOiJ"
3
```
