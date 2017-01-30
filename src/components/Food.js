export default class {
  constructor(name,origin,ingredients,directions) {
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

  getDirections() {
    return this.directions;
  }

  getID() {
    return this.name + this.origin + this.ingredients + this.directions;
  }


}
