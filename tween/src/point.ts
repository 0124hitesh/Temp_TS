export class Point{
    constructor(public x: number, public y: number){}

    public set(...args : any[]): Point {
        if(args.length === 1){
            const point: number = args[0]
            this.x = point
            this.y = point
        }
        else{
            this.x = args[0]
            this.y = args[1]
        }

        return this;
    }

    public hypotenuse(point : Point): number{
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }

    public distance(point: Point): Point{
        return new Point(Math.abs(this.x - point.x), Math.abs(this.y - point.y));
    }
}