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

<p align="center">
  <img width="230" src="https://user-images.githubusercontent.com/52022280/211170577-d049456b-d016-4208-add3-5b160090057a.jpg" alt="A screenshot of a Duolingo KWGT"></img>
  <img width="230" src="https://user-images.githubusercontent.com/52022280/211170580-f89bc977-d16a-427d-8ccf-7fa2f52a8a3c.jpg" alt="A second screenshot of a Duolingo KWGT"></img>
  <img width="230" src="https://user-images.githubusercontent.com/52022280/211170584-f76d88b7-59cb-414f-9595-92543d718122.jpg" alt="A third screenshot of a Duolingo KWGT"></img>
</p>

<h6 align="center"><i>(Sexy looking KWGTs)</i></h6>
