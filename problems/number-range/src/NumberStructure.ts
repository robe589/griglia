import { NumberElement, NUMBER_ELEMENT_KIND, NUMBER_COMPARE_TO } from './NumberElement'

export class NumberStructure {
  //private numberRange: string;
  private numberElements: NumberElement[];

  constructor(numberRange: string) {
    this.numberElements = new Array(1);

    this.analyze(numberRange);
  }

  //数値構造を解析する
  analyze(numberRange: string): void {
    //「,」で分割
    let splitConma: string[] = numberRange.split(',');
    console.log(splitConma);

    splitConma.forEach(str => {
      let element: NumberElement = this.generateNumberElement(str);
      element.debug();
      this.numberElements.push(element);
    });
  }

  public add(num: number): void {
    let numberElement: NumberElement;
    let resultCompare: NUMBER_COMPARE_TO;

    numberElement = this.generateNumberElement(num.toString());

    //大小関係を判断して、挿入位置を確定
    this.numberElements.forEach((numberElement, index) => {
      resultCompare = numberElement.compareTo(num);
      if (resultCompare == NUMBER_COMPARE_TO.INCLUDE) {
        //包含されている
      }
      else if (resultCompare == NUMBER_COMPARE_TO.EQUAL || resultCompare == NUMBER_COMPARE_TO.LARGE) {
        //間に追加
        this.numberElements.splice.apply(index, 0, [numberElement]);
      }
    })

    //DEBUG
    this.debug();
    //DEBUG
  }

  public remove(numberRange: string): void {
    this.analyze(numberRange);
  }

  private generateNumberElement(str: string) {
    const index = str.indexOf('-');

    if (index < 0) {
      return new NumberElement(Number(str), Number(str), NUMBER_ELEMENT_KIND.ALONE)
    }
    else {
      if (index == 0) {
        return new NumberElement(Number(str.replace('-', "")), Number(str.replace('-', "")), NUMBER_ELEMENT_KIND.UP_LIMIT);
      }
      else if (index == (str.length - 1)) {
        return new NumberElement(Number(str.replace('-', "")), Number(str.replace('-', "")), NUMBER_ELEMENT_KIND.LOW_LIMIT);
      }
      else {
        return new NumberElement(Number(str.slice(0, index)), Number(str.slice(index + 1, str.length)), NUMBER_ELEMENT_KIND.LOW_UP_LIMIT);
      }
    }
  }

  public serialize(): string {
    let str: string[] = new Array(0);

    this.numberElements.forEach(numberElement => {
      console.log(numberElement.toString());
      str.push(numberElement.toString());
      console.log(str);
    })

    console.log("join=" + str);

    return str.join(',');
  }

  debug(): void {
    console.log('DEBUG NUMBERELEMENTS SHOW S');
    this.numberElements.forEach(numberElement => {
      numberElement.debug();
    });
    console.log('DEBUG NUMBERELEMENTS SHOW E');
  }
}