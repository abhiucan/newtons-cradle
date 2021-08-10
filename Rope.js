class Rope{
	constructor(pointA,bodyB){
	var options={

		pointA:pointA,
		bodyB:bodyB,
		length:260,
	 stiffness:0.1
	
   }
	
	//create rope constraint here
	this.rope = Matter.Constraint.create(options);	
  	World.add(world,this.rope)

}  

display(){

line(this.rope.pointA.x,this.rope.pointA.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)

	}
}
