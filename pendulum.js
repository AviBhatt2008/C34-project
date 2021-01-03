class Pendulum
{
    constructor(x, y, r)
    {
        var options = 
        {
            isStatic: false,
            restitution: 1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }
    display(colour)
    {
        this.angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.angle);
        ellipseMode(RADIUS);
        fill(colour)
        noStroke();
        ellipse(0, 0, this.r);
        pop();
    }
}