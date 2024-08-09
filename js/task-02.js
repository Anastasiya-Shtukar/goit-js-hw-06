class Storage {
  #items = [];
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    return this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    const i = this.#items.indexOf(itemToRemove);
    const newItems = this.#items.splice(1, i);
    return newItems;
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());
