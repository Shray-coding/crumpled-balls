class Dustbin{
    constructor(){
     var options ={
         isStatic:true
     }

        this.bodyLeft = Bodies.rectangle(590,600,10,80,options);
        this.bodyDown = Bodies.rectangle(640,635,90,10,options);
        this.bodyRight = Bodies.rectangle(690,600,10,80,options);
        World.add(world,this.bodyLeft);
        World.add(world,this.bodyDown);
        World.add(world,this.bodyRight);
    }
        display(){
            var angle = this.bodyLeft.angle;
            push();
            translate(this.bodyLeft.position.x,this.bodyLeft.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,10,80);
            pop();

            var angle = this.bodyDown.angle;
            push();
            translate(this.bodyDown.position.x,this.bodyDown.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,90,10);
            pop();

            var angle = this.bodyRight.angle;
            push();
            translate(this.bodyRight.position.x,this.bodyRight.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,10,80);
            pop();
        }

}