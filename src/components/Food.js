export default class {
  constructor(name,altname,origin,ingredients,directions,shortdirections) {
    this.name = name;
    this.altname = altname;
    this.origin = origin;
    this.ingredients = ingredients;
    this.directions = directions;
    this.shortdirections = shortdirections;
  }

  getName() {
    return this.name;
  }

  getAltName() {
    return this.altname;
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

  getShortDirections() {
    return this.shortdirections;
  }

  getID() {
    return this.name + this.origin + this.ingredients + this.directions;
  }


}
