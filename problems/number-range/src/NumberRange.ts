import { NumberStructure } from './NumberStructure'

export interface NumberRange {
  isValid(num: number): boolean;

  add(num: number): void;

  remove(num: number): void;

  serialize(): string;
}

export class NumberRangeA implements NumberRange {
  private numberRange: string;
  private numberStructure: NumberStructure;

  // @ts-ignore
  private readonly MAX_NUM: number = 20;
  // @ts-ignore
  private readonly MIN_NUM: number = 0;

  constructor(numberRange: string) {
    console.log(numberRange);
    //すべてのスペースを削除する
    this.numberRange = numberRange.replace(/\s+/g, "");
    console.log(numberRange);
    this.numberStructure = new NumberStructure(numberRange);
    //this.numberStructure.analyze();
  }

  test(): void {
    this.numberRange = this.numberRange;
    //this.numberStructure.analyze();
  }

  isValid(num: number): boolean {
    num = num;
    return true;
  }

  add(num: number): void {
    //バリデーション処理
    //const isValidError: boolean = judgeValidError(num);
    //追加
    this.numberStructure.add(String(num));
  }

  remove(num: number): void {
    num = num;
  }

  serialize(): string {
    return this.numberStructure.serialize();
  }

  /* private judgeValidError(num: number): boolean {
    if (Number.isNaN(num)) {
      return false;
    }
    else if (Number.isInteger(num) != true) {
      return false;
    }
    else if (num < this.MIN_NUM) {
      return false;
    }
    else if (num > this.MAX_NUM) {
      return false;
    }

    return true;
  }*/
}