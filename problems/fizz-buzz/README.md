# Fizz Buzz

エンジニアの産声ともされる`Fizz Buzz`を実装します。

## Implementation

関数の`fizzbuzz()`を実装してください。  
以下の条件をできるだけ多く満たしてください。  
ただし、いくつか普通の`fizzbuzz()`と異なりますので注意してください。

基本的な`Fizz Buzz`は以下です。

1. `3`の倍数のときは`Fizz`と表示
1. `5`の倍数のときは`Buzz`と表示
1. それ以外はその数字を表示

## Concepts

* 今回の条件は以下です
    1. `3`の倍数のときは`Fizz`と表示
    1. `4`の倍数のときは`Dazz`と表示
    1. `5`の倍数のときは`Buzz`と表示
    1. 数字に`3`が含まれるときは`Jazz`と表示
    1. 素数であるときは`Primezz`と表示
    1. それ以外のときはその数字を表示
* 複数の条件が満たされる場合は上から半角空白で空けて表示してください
    * すべての条件が満たされていれば、表示はこのようになります
        * `Fizz Dazz Buzz Jazz Primezz`

## Conditions

* 引数に与えられる`number`型の値は正の整数だけを考慮してください
    * バリデーションは不要です
* 他のパッケージを使ってはいけません

## Playground

`src/playground.ts`があるので自由に記述して動作させてください。

### Run playground

```
yarn play
```

## Tests

`FizzBuzz.spec.ts`があるので参照してください。

```
yarn test
```