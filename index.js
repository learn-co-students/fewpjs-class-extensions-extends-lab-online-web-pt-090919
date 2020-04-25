// Your code here
class Polygon{
  constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        return this.array.reduce(function(sum, sideLength) {return sum + sideLength});
    }  
}

class Triangle extends Polygon {

    get isValid(){
        return this.countSides === 3 && this.perimeter % 3 === 0;
    }
}

class Square extends Polygon {
     get isValid() {
          return this.countSides === 4 && this.perimeter % 4 === 0;
     }

     get area() {
          let length = this.perimeter / 4;
          let width = length;
          return length * width;
     }
}