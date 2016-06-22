function Vec3 () {
	var v = this;

	var l, 
		vx, vy, vz, 
		wx, wy, wz;

	this.set = function ( x, y, z ) {
		v.x = x, v.y = y, v.z = z;
		return v;
	};

	this.copy = function ( w ) {
		v.x = w.x, v.y = w.y, v.z = w.z;
		return v;
	}

	this.length = function () {
		return Math.sqrt( v.x * v.x + v.y * v.y + v.z * v.z );
	};

	this.multiplyScalar = function ( c ) {
		v.x *= c, v.y *= c, v.z *= c;
		return v;
	};

	this.sub = function ( w ) {
		v.x -= w.x, v.y -= w.y, v.z -= w.z;
		return v;
	};

	this.add = function ( w ) {
		v.x += w.x, v.y += w.y, v.z += w.z;
		return v;
	};

	this.negate = function () {
		v.x = -v.x, v.y = -v.y, v.z = -v.z;
		return v;
	};

	this.normalize = function () {
		v.multiplyScalar( 1 / v.length() );
		return v;
	};

	this.cross = function ( w ) {
		vx = v.x, vy = v.y, vz = v.z;
		wx = w.x, wy = w.y, wz = w.z;
		v.x = vy * wz - vz * wy;
		v.y = vz * wx - vx * wz;
		v.z = vx * wy - vy * wx;
		return v;
	};

	this.dot = function ( w ) {
		v.x *= w.x, v.y *= w.y, v.z *= w.z;
		return v;
	};

	if ( arguments.length === 3 ) {//creates from coord
		v.x = arguments[ 0 ];
		v.y = arguments[ 1 ]; 
		v.z = arguments[ 2 ];
	} else if ( arguments.length === 1 ) {
		if ( arguments[ 0 ].hasOwnProperty( 'el' ) ) {//creates from Mat4
			v.x = arguments[ 0 ].el[ 12 ];
			v.y = arguments[ 0 ].el[ 13 ];
			v.z = arguments[ 0 ].el[ 14 ];
		} else {
			v.copy( arguments[ 0 ] );//clones from Vec3
		}
	} else {
		v.x = v.y = v.z = 0;
	}

	return this;
}