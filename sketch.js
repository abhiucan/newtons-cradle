const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob, bob1, bob2, bob3, bob4
var rope1, rope2, rope3, rope4, rope5

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//rope1 = newrope(bob1,roof,-80,0)
	var roof_options = {
		isStatic: true
	}

	roof = Bodies.rectangle(380, 110, 230, 20, roof_options);
	World.add(world, roof);





	bob = Bodies.circle(300, 370, 20)
	World.add(world, bob)





	bob1 = Bodies.circle(315, 370, 20)
	World.add(world, bob1)






	bob2 = Bodies.circle(330, 370, 20)
	World.add(world, bob2)






	bob3 = Bodies.circle(345, 370, 20)
	World.add(world, bob3)






	bob4 = Bodies.circle(360, 370, 20)
	World.add(world, bob4)



rope1=new Rope({x:300,y:120},bob)
rope2=new Rope({x:340,y:120},bob1)
rope3=new Rope({x:380,y:120},bob2)
rope4=new Rope({x:420,y:120},bob3)
rope5=new Rope({x:460,y:120},bob4)


	Engine.run(engine);


}

function draw() {
	rectMode(CENTER);
	background("#99004d");

	rect(roof.position.x, roof.position.y, 230, 20);

	//call display() to show ropes here
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()

	//create ellipse shape for multiple bobs here
	ellipse(bob.position.x, bob.position.y, 40,40)
	ellipse(bob1.position.x, bob1.position.y, 40,40)
	ellipse(bob2.position.x, bob2.position.y, 40,40)
	ellipse(bob3.position.x, bob3.position.y, 40,40)
	ellipse(bob4.position.x, bob4.position.y, 40,40)



}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){

if(keyCode==LEFT_ARROW)
{
Matter.Body.applyForce(bob,{x:0,y:0},{x:-0.07,y:-0.07})

}









}