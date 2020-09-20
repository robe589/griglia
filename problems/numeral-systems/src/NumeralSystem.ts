export enum MONEY_METHOD {
  EN,
  EU,
  INDIA
}

export interface NumeralSystem {
  getValue(): number;

  stringify(): string;
}

export class MoneyNumber implements NumeralSystem {
  private moneyValue: number;
  private method: MONEY_METHOD;

  constructor(moneyValue: number, method: MONEY_METHOD) {
    this.moneyValue = moneyValue;
    this.method = method;
  }

  getValue(): number {
    return this.moneyValue;
  }

  stringify(): string {
    let moneyStr: string = String(this.moneyValue);
    let isNegativeNum: boolean = false;
    let intStr: string = "";
    let decimalStr: string = "";
    let reverseStr2: string;
    const reversed;

    switch (this.method) {
      case MONEY_METHOD.EN:
        //マイナス対応
        if (moneyStr.indexOf('-') >= 0) {
          //マイナス値である
          moneyStr = moneyStr.replace('-', '');
          isNegativeNum = true;
        }
        //整数部と小数部に分割
        {
          let splitStr = String(moneyStr).split('.');
          console.log(splitStr)
          if (splitStr.length > 1) {
            //少数を含む数値
            intStr = splitStr[0];
            decimalStr = splitStr[1];
          }
          else {
            intStr = splitStr[0];
            decimalStr = "";
          }
        }

        let reverseStr;
        {
          const reversed = String(intStr).split('').reverse().join('');
          console.log(reversed);
          reverseStr = reversed.match(/.{3}/g);
          console.log(reverseStr);
        }

        //,を間に入れる
        let joinStr: string = "";

        if (reverseStr != undefined) {
          reverseStr.forEach(str => {
            joinStr = joinStr + str + ',';
          });
        }
        //末尾の1文字を削除
        joinStr = joinStr.slice(0, -1);
        console.log(joinStr)

        {
          reversed = String(joinStr).split('').reverse().join('');
          console.log(reversed);
          /*let a;
          a = reversed.match(/.{3}/g);
            =
          console.log(reverseStr2);*/
        }
        //console.log(reverseStr2);

        break;

      case MONEY_METHOD.EU:
        break;
      case MONEY_METHOD.INDIA:
        break;
    }

    if (isNegativeNum) {
      reverseStr2 = '-' + reversed;
    }
    if (decimalStr != "") {
      reverseStr2 = reversed + '.' + decimalStr;
    }

    console.log(reversed);

    return reversed;
  }

}