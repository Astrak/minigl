# minigl

Mini 3D library of 5Ko with only basic functions for simple apps.
Less typing with small names and easy cloning system.

Controls to come.

## Vec3

set / copy / length / multiplyScalar / sub / add / cross / dot / negate / normalize

## Mat4

setPosition( Vec3 | x,y,z ) / lookAt( Vec3 | x,y,z ) / perspective( angle, aspect, near, far ) / setScale / multiply / rotateX / rotateY / rotateZ / multiplyScalar / inverse / transpose

## Tips
### Easy creation & cloning

	var a = new Vec3( x, y, z );
	var b = new Vec3( a );                        //clone

	var m = new Mat4().setPosition( b );          //create from Vec3
	var c = new Vec3( m );                        //create from Mat4
	console.log( c === a );                       //true

### Chainable

	var camera = new Mat4()
			.setPosition( 0, 200, 1000 )
			.lookAt( 0, 0, 15 )
			.inverse();

	gl.uniformMatrix4fv( cameraInverse, false, camera.el );