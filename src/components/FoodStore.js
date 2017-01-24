import Food from './Food.js';

export default {
  async listFood() {
    return [
      new Food("Main Dish 1","Japan"),
      new Food("Main Dish 2","China"),
      new Food("Main Dish 3","Thailand"),
      new Food("Main Dish 4","Japan"),
      new Food("Main Dish 5","Japan"),
      new Food("Main Dish 6","Japan"),

    ];
  }
}
