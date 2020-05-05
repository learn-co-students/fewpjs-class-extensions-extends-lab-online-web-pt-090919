class Polygon {
    constructor(side) {
        this.side = side
    }
    get countSides(){
        return this.side.length
    } 

    get perimeter(){
        return this.side.reduce(sideCount)
        function sideCount(total, num) {
            return total + num
        }
    }
}

class Triangle extends Polygon {
    get isValid() {
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