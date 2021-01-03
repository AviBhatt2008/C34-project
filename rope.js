class Rope
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.0,
            length: 250
        }
        this.constraint = Matter.Constraint.create(options);
        World.add(world, this.constraint);
    }
    display()
    {
        strokeWeight(3)
        line(this.constraint.bodyA.position.x, this.constraint.bodyA.position.y,
            this.constraint.pointB.x, this.constraint.pointB.y)
    }
}