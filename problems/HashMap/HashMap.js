class HashMap {
  constructor(tableSize = 16) {
    this.table = new Array(tableSize);
    this.tableSize = tableSize;
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue = (hashValue + key.charCodeAt(i) * i) % this.tableSize;
    }
    return hashValue;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  remove(key) {
    const index = this.hash(key);
    delete this.table[index];
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

}
