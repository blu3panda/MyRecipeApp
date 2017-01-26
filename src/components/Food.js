export default class {
  constructor(type,origin) {
    this.name = name;
    this.origin = origin;
    this.ingredients = ingredients;
    this.directions = directions;
  }

  getName() {
    return this.name;
  }

  getOrigin() {
    return this.origin;
  }

  getIngredients() {
    return this.ingredients;
  }

  getdirections() {
    return this.directions;
  }

  getID() {
    return this.name + this.origin;
  }
}
