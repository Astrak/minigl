# minigl
Mini GL library of 5Ko with only basic functions for simple apps
Controls to come.

## Vec3

set / copy / length / multiplyScalar / sub / add / cross / dot / negate / normalize

Plus super creation system :

	var a = new Vec3( x, y, z );
	var b = new Vec3( a );                      //easy cloning from a Vec3

	//or even
	var m = new Mat4().setPosition( x, y, z );
	var c = new Vec3( m );                      //easy creation from a Mat4

## Mat4

setPosition( Vec3 | x,y,z ) / lookAt( Vec3 | x,y,z ) / perspective( angle, aspect, near, far ) / setScale / multiply / rotateX / rotateY / rotateZ / multiplyScalar / inverse / transpose

	var proj = new Mat4().perspective( 30, canvas.clientWidth / canvas.clientHeight, 10, 2000 ),
		model = new Mat4(),
		camera = new Mat4()
			.setPosition( 0, 200, 1000 )         //or a Vec3
			.lookAt( 0, 0, 15 )                  //or a Vec3
			.inverse();

	function animate ( t ) {
		model.reset();
		model.setScale( 1, -1, 1 )
			.setPosition( -50, 100, -15 )    //or a Vec3
			.rotateY( t * .001 );

		gl.uniformMatrix4fv( projectionMatrix, false, proj.el );
		gl.uniformMatrix4fv( modelMatrix, false, model.el );
		gl.uniformMatrix4fv( cameraInverse, false, camera.el );