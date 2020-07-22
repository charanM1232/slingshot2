class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);


        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling1,200,100,25,125);
        
        
        image(this.sling2,185,100,25,70);
 

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            push();
            strokeWeight(8);
            stroke(48,22,8);
            if(pointA.x< 220){
                image(this.sling3,this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,10,20)
                
                line(pointA.x-20, pointA.y+5, pointB.x+25, pointB.y+20);

                line(pointA.x-20, pointA.y+5, pointB.x-15, pointB.y+20);
                
            } else {
                image(this.sling3,this.sling.bodyA.position.x+20,this.sling.bodyA.position.y,10,20)
                
                line(pointA.x+20, pointA.y+5, pointB.x+25, pointB.y+20);

                line(pointA.x+20, pointA.y+5, pointB.x-15, pointB.y+20); 
            }

        }
    }
    
}