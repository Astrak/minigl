# minigl
Mini GL library with only basic functions for simple apps

## Mat4
Chainable methods

	var proj = new Mat4().perspective( 30, canvas.clientWidth / canvas.clientHeight, 10, 2000 ),
		model = new Mat4(), 
		camera = new Mat4();

	camera.setPosition( 0, 200, 1000 )
		.lookAt( 0, 0, 15 )//can be 3 coordinates or an object 
		                   //with x, y and z properties (Vec3, THREE.Vector3...) 
		.inverse();

	function animate ( t ) {
		requestAnimationFrame( animate );

		gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT );

		model.reset();
		model.setScale( 1, -1, 1 )
			.setPosition( -50, 100, -15 )
			.rotateY( t * .001 );

		gl.uniformMatrix4fv( projectionMatrix, false, proj.el );
		gl.uniformMatrix4fv( modelMatrix, false, model.el );
		gl.uniformMatrix4fv( cameraInverse, false, camera.el );

		gl.drawArrays( gl.TRIANGLES, 0, 16 * 6 );
	}

## Vec3
Basic needed chainable methods plus super creation system :

	var a = new Vec3( x, y, z );
	var b = new Vec3( a );                   //easy cloning !
	b.copy( a )                              //or this way

	//or even creation from a Mat4 :
	var m = new Mat4().setPosition( x, y, z );
	var c = new Vec3( m );                   //c.x = x, c.y = y and c.z = z