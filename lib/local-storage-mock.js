class LocalStorageMock {
  constructor() {
    this.key = (idx) => {
      const values = Object.values(this.store);
      return values[idx];
    };
    this.store = {};
    this.length = 0;
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
}
export default LocalStorageMock;
