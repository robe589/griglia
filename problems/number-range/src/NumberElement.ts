export enum NUMBER_ELEMENT_KIND {
  ALONE,//単独の数値
  LOW_LIMIT,//下限
  UP_LIMIT,//上限
  LOW_UP_LIMIT,//上下限
}

export enum NUMBER_COMPARE_TO {
  SMALL,
  LARGE,
  EQUAL,
  INCLUDE,
}

export class NumberElement {
  private min: number;
  private max: number;
  private elementKind: number;

  constructor(min: number, max: number, elementKind: NUMBER_ELEMENT_KIND) {
    this.min = min;
    this.max = max;
    this.elementKind = elementKind;
  }

  generateString(): string {
    switch (this.elementKind) {
      case NUMBER_ELEMENT_KIND.ALONE:
        return this.min.toString();
      case NUMBER_ELEMENT_KIND.LOW_LIMIT:
        return this.min.toString() + '-';
      case NUMBER_ELEMENT_KIND.UP_LIMIT:
        return '-' + this.max.toString();
      case NUMBER_ELEMENT_KIND.LOW_UP_LIMIT:
        return this.min.toString() + '-' + this.max.toString();
    }

    return "";
  }

  debug(): void {
    console.log("min=" + this.min + "max=" + this.max + "NUMBER_ELEMENT_KIND=" + this.elementKind.toString())
  }

  toString(): string {
    console.log(this.generateString());
    return this.generateString();
  }

  compareTo(num: number): NUMBER_COMPARE_TO {
    switch (this.elementKind) {
      case NUMBER_ELEMENT_KIND.ALONE:
        if (this.min > num) {
          return NUMBER_COMPARE_TO.SMALL;
        }
        else if (this.min < num) {
          return NUMBER_COMPARE_TO.LARGE;
        }
        else {
          return NUMBER_COMPARE_TO.EQUAL;
        }
      case NUMBER_ELEMENT_KIND.LOW_LIMIT:
        if (this.min > num) {
          return NUMBER_COMPARE_TO.SMALL;
        }
        else if (this.min < num) {
          return NUMBER_COMPARE_TO.LARGE;
        }
        else {
          return NUMBER_COMPARE_TO.EQUAL;
        }
      case NUMBER_ELEMENT_KIND.UP_LIMIT:
        if (this.max > num) {
          return NUMBER_COMPARE_TO.SMALL;
        }
        else if (this.max < num) {
          return NUMBER_COMPARE_TO.LARGE;
        }
        else {
          return NUMBER_COMPARE_TO.EQUAL;
        }
      case NUMBER_ELEMENT_KIND.LOW_UP_LIMIT:
        if (this.max > num && this.min < num) {
          return NUMBER_COMPARE_TO.INCLUDE;
        }
        else if (num > this.max) {
          return NUMBER_COMPARE_TO.LARGE;
        }
        else if (this.min > num) {
          return NUMBER_COMPARE_TO.SMALL;
        }
        else {
          return NUMBER_COMPARE_TO.EQUAL;
        }
    }

    return NUMBER_COMPARE_TO.EQUAL;
  }
}