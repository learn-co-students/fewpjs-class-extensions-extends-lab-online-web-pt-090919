// Your code here
class Polygon {
    constructor(sides_arr){
        this.sides_arr = sides_arr
    }

    get countSides(){
        return this.sides_arr.length
    }

    get perimeter(){
        return this.sides_arr.reduce(function(total, num) {return total + num})
    }  
}

class Triangle extends Polygon {

    get isValid(){
        return this.countSides === 3 && this.perimeter % 3 === 0
    }
}

class Square extends Polygon {
     get isValid() {
          return this.countSides === 4 && this.perimeter % 4 === 0
     }

     get area() {
          let length = this.perimeter / 4
          let width = length
          return length * width
     }
}