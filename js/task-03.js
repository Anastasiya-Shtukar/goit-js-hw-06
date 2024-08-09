class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {}

  padStart(str) {
    const strValue = str + this.#value;
    return strValue;
  }

  padBoth(str) {
    const strValue = str + this.#value + str;
    return strValue;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue());
builder.padStart("^");
console.log(builder.getValue());
builder.padEnd("^");
console.log(builder.getValue());
builder.padBoth("=");
console.log(builder.getValue());
