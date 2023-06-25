const _radius = Symbol();

class Circle {
  constructor(r) {
    this[_radius] = r;
  }

  get radius() {
    return this[_radius];
  }

  set radius(r) {
    this[_radius] = r;
  }
}

const c = new Circle(1);
console.log(c);
