export default class {
  constructor(type,origin) {
    this.type = type;
    this.origin = origin;
  }

  getType() {
    return this.type;
  }

  getOrigin() {
    return this.origin;
  }

  getID() {
    return this.type + this.origin;
  }
}
