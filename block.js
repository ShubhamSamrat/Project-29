class Block{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution :0,
			friction :1,
			density:0.3
			}
		this.x=x;
		this.y=y;
		
		this.image=loadImage("cube.png")
		this.body=Bodies.rectangle(this.x, this.y, 80,80, options)
		World.add(world, this.body);
	}

	display()
	{
		var blockPos=this.body.position;	
		push()
		translate(blockPos.x, blockPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		
		imageMode(CENTER);
		 
		
		image(this.image, 0,0,80,80)
		pop()
 }
}