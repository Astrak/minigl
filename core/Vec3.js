function Vec3 () {
	var v = this;

	var l, 
		vx, vy, vz, 
		wx, wy, wz;

	if ( arguments.length === 3 ) {//creates from coord
		this.x = arguments[ 0 ];
		this.y = arguments[ 1 ]; 
		this.z = arguments[ 2 ];
	} else if ( arguments.length === 1 ) {
		if ( arguments[ 0 ].hasOwnProperty( 'el' ) ) {//creates from Mat4 !
			this.x = arguments[ 0 ].el[ 12 ];
			this.y = arguments[ 0 ].el[ 13 ];
			this.z = arguments[ 0 ].el[ 14 ];
		} else {//creates from vec3 = quick clone !
			this.x = arguments[ 0 ].x;
			this.y = arguments[ 0 ].y; 
			this.z = arguments[ 0 ].z;
		}
	} else {
		this.x = 0;
		this.y = 0; 
		this.z = 0;
	}

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
	}

	return this;
}