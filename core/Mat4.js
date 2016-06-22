function Mat4 () {
	var m = this;
	
	var b00, b01, b02, b03, b10, b11, b12, b13, b20, b21, b22, b23, b30, b31, b32, b33,
		e00, e01, e02, e03, e10, e11, e12, e13, e20, e21, e22, e23, e30, e31, e32, e33,
		n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44,
		t11, t12, t13, t14,
		c, s, tan,
		eye, v,
		t;

	this.reset = function () {
		m.el = [
			1, 0, 0, 0, 
			0, 1, 0, 0,
			0, 0, 1, 0, 
			0, 0, 0, 1 
		];
	};

	this.setPosition = function () {
		if ( arguments.length === 3 ) {
			m.el[ 12 ] = x;
			m.el[ 13 ] = y;
			m.el[ 14 ] = z;
		} else if ( arguments.length === 1 ) {
			m.el[ 12 ] = arguments[ 0 ].x;
			m.el[ 13 ] = arguments[ 0 ].y;
			m.el[ 14 ] = arguments[ 0 ].z;
		}
		return m;
	};

	this.multiply = function ( b ) {
		e00 = m.el[ 0 * 4 + 0 ]; b00 = b[ 0 * 4 + 0 ];
		e01 = m.el[ 0 * 4 + 1 ]; b01 = b[ 0 * 4 + 1 ];
		e02 = m.el[ 0 * 4 + 2 ]; b02 = b[ 0 * 4 + 2 ];
		e03 = m.el[ 0 * 4 + 3 ]; b03 = b[ 0 * 4 + 3 ];
		e10 = m.el[ 1 * 4 + 0 ]; b10 = b[ 1 * 4 + 0 ];
		e11 = m.el[ 1 * 4 + 1 ]; b11 = b[ 1 * 4 + 1 ];
		e12 = m.el[ 1 * 4 + 2 ]; b12 = b[ 1 * 4 + 2 ];
		e13 = m.el[ 1 * 4 + 3 ]; b13 = b[ 1 * 4 + 3 ];
		e20 = m.el[ 2 * 4 + 0 ]; b20 = b[ 2 * 4 + 0 ];
		e21 = m.el[ 2 * 4 + 1 ]; b21 = b[ 2 * 4 + 1 ];
		e22 = m.el[ 2 * 4 + 2 ]; b22 = b[ 2 * 4 + 2 ];
		e23 = m.el[ 2 * 4 + 3 ]; b23 = b[ 2 * 4 + 3 ];
		e30 = m.el[ 3 * 4 + 0 ]; b30 = b[ 3 * 4 + 0 ];
		e31 = m.el[ 3 * 4 + 1 ]; b31 = b[ 3 * 4 + 1 ];
		e32 = m.el[ 3 * 4 + 2 ]; b32 = b[ 3 * 4 + 2 ];
		e33 = m.el[ 3 * 4 + 3 ]; b33 = b[ 3 * 4 + 3 ];

		m.el = [
			e00 * b00 + e01 * b10 + e02 * b20 + e03 * b30,
			e00 * b01 + e01 * b11 + e02 * b21 + e03 * b31,
			e00 * b02 + e01 * b12 + e02 * b22 + e03 * b32,
			e00 * b03 + e01 * b13 + e02 * b23 + e03 * b33,

			e10 * b00 + e11 * b10 + e12 * b20 + e13 * b30,
			e10 * b01 + e11 * b11 + e12 * b21 + e13 * b31,
			e10 * b02 + e11 * b12 + e12 * b22 + e13 * b32,
			e10 * b03 + e11 * b13 + e12 * b23 + e13 * b33,

			e20 * b00 + e21 * b10 + e22 * b20 + e23 * b30,
			e20 * b01 + e21 * b11 + e22 * b21 + e23 * b31,
			e20 * b02 + e21 * b12 + e22 * b22 + e23 * b32,
			e20 * b03 + e21 * b13 + e22 * b23 + e23 * b33,

			e30 * b00 + e31 * b10 + e32 * b20 + e33 * b30,
			e30 * b01 + e31 * b11 + e32 * b21 + e33 * b31,
			e30 * b02 + e31 * b12 + e32 * b22 + e33 * b32,
			e30 * b03 + e31 * b13 + e32 * b23 + e33 * b33
		];

		return m;
	};

	this.rotateX = function ( a ) {
		c = Math.cos( a );
		s = Math.sin( a );
		e01 = m.el[ 1 ];
		e11 = m.el[ 5 ];
		e21 = m.el[ 9 ];
		e31 = m.el[ 13 ];
		m.el[ 1 ] = m.el[ 1 ] * c - m.el[ 2 ] * s;
		m.el[ 2 ] = e01 * s + m.el[ 2 ] * c;
		m.el[ 5 ] = m.el[ 5 ] * c - m.el[ 6 ] * s;
		m.el[ 6 ] = e11 * s + m.el[ 6 ] * c;
		m.el[ 9 ] = m.el[ 9 ] * c - m.el[ 10 ] * s;
		m.el[ 10 ] = e21 * s + m.el[ 10 ] * c;
		m.el[ 13 ] = m.el[ 13 ] * c - m.el[ 14 ] * s;
		m.el[ 14 ] = e31 * s + m.el[ 14 ] * c;
		return m;
	};

	this.rotateY = function ( a ) {
		c = Math.cos( a );
		s = Math.sin( a );
		e00 = m.el[ 0 ];
		e10 = m.el[ 4 ];
		e20 = m.el[ 8 ];
		e30 = m.el[ 12 ];
		m.el[ 0 ] = m.el[ 2 ] * s + m.el[ 0 ] * c;
		m.el[ 2 ] = m.el[ 2 ] * c - e00 * s;
		m.el[ 4 ] = m.el[ 6 ] * s + m.el[ 4 ] * c;
		m.el[ 6 ] = m.el[ 6 ] * c - e10 * s;
		m.el[ 8 ] = m.el[ 10 ] * s + m.el[ 8 ] * c;
		m.el[ 10 ] = m.el[ 10 ] * c - e20 * s;
		m.el[ 12 ] = m.el[ 14 ] * s + m.el[ 12 ] * c;
		m.el[ 14 ] = m.el[ 14 ] * c - e30 * s;
		return m;
	};

	this.rotateZ = function ( a ) {
		c = Math.cos( a );
		s = Math.sin( a );
		e00 = m.el[ 0 ];
		e10 = m.el[ 4 ];
		e20 = m.el[ 8 ];
		e30 = m.el[ 12 ];
		m.el[ 0 ] = m.el[ 0 ] * c - m.el[ 1 ] * s;
		m.el[ 1 ] = e00 * s + m.el[ 1 ] * c;
		m.el[ 4 ] = m.el[ 4 ] * c - m.el[ 5 ] * s;
		m.el[ 5 ] = e10 * s + m.el[ 5 ] * c;
		m.el[ 8 ] = m.el[ 8 ] * c - m.el[ 9 ] * s;
		m.el[ 9 ] = e20 * s + m.el[ 9 ] * c;
		m.el[ 12 ] = m.el[ 12 ] * c - m.el[ 13 ] * s;
		m.el[ 13 ] = e30 * s + m.el[ 13 ] * c;
		return m;
	};

	this.setScale = function ( x, y, z ) {
		m.el[ 0 ] *= x;   m.el[ 1 ] *= y;   m.el[ 2 ] *= z;
		m.el[ 4 ] *= x;   m.el[ 5 ] *= y;   m.el[ 6 ] *= z;
		m.el[ 8 ] *= x;   m.el[ 9 ] *= y;   m.el[ 10 ] *= z;
		m.el[ 12 ] *= x;  m.el[ 13 ] *= y;  m.el[ 14 ] *= z;
		return m;
	};

	this.copy = function ( b ) {
		for ( var i = 0 ; i < 16 ; i++ )
			m.el[ i ] = b.el[ i ];
		return m;
	};

	this.multiplyScalar = function ( d ) {
		for ( var i = 0 ; i < 16 ; i++ )
			m.el[ i ] *= d;
		return m;
	}

	this.inverse = function () {
		//from threejs
		var	n11 = m.el[ 0 ], n21 = m.el[ 1 ], n31 = m.el[ 2 ], n41 = m.el[ 3 ],
			n12 = m.el[ 4 ], n22 = m.el[ 5 ], n32 = m.el[ 6 ], n42 = m.el[ 7 ],
			n13 = m.el[ 8 ], n23 = m.el[ 9 ], n33 = m.el[ 10 ], n43 = m.el[ 11 ],
			n14 = m.el[ 12 ], n24 = m.el[ 13 ], n34 = m.el[ 14 ], n44 = m.el[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det !== 0 ) {
			m.el[ 0 ] = t11;
			m.el[ 1 ] = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
			m.el[ 2 ] = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
			m.el[ 3 ] = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;

			m.el[ 4 ] = t12;
			m.el[ 5 ] = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
			m.el[ 6 ] = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
			m.el[ 7 ] = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;

			m.el[ 8 ] = t13;
			m.el[ 9 ] = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
			m.el[ 10 ] = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
			m.el[ 11 ] = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;

			m.el[ 12 ] = t14;
			m.el[ 13 ] = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
			m.el[ 14 ] = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
			m.el[ 15 ] = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;

			m.multiplyScalar( 1 / det );
		} else {
			console.warn( 'Mat4 : Cannot inverse matrix, determinant is null' );
		}
		return m;
	};

	this.perspective = function ( angle, aspect, near, far ) {
		tan = Math.tan( Math.PI * angle / 360 );
		m.el[ 0 ] = .5 / tan;
		m.el[ 5 ] = .5 * aspect / tan;
		m.el[ 10 ] = - ( far + near ) / ( far - near );
		m.el[ 11 ] = -1;
		m.el[ 14 ] = ( -2 * far * near ) / ( far - near );
		m.el[ 15 ] = 0;

		return m;
	};

	this.lookAt = function () {
		//accepts 1 argument of class vec3 as target vector
		//or 3 arguments of type Number as target coordinates ! YES
		if ( typeof eye === 'undefined' ) {
			eye = {
				x : new Vec3(),
				y : new Vec3(),
				z : new Vec3()
			};
		}
		if ( arguments.length === 3 ) {
			v = { 
				x : arguments[ 0 ],
				y : arguments[ 1 ],
				z : arguments[ 2 ]
			};
		} else if ( arguments.length === 1 ) {
			v = arguments[ 0 ];
		}
		eye.z.set( m.el[ 12 ], m.el[ 13 ], m.el[ 14 ] ).sub( v ).normalize();
		if ( eye.z.length() === 0 ) eye.z.z = 1;
		eye.x.set( 0, 1, 0 ).cross( eye.z ).normalize();
		if ( eye.x.length() === 0 ) {
			eye.z.x += .0001;//!
			eye.x.cross( eye.z ).normalize();
		}
		eye.y.copy( eye.z ).cross( eye.x );

		m.el[ 0 ] = eye.x.x;	m.el[ 4 ] = eye.y.x;	m.el[ 8 ] = eye.z.x;
		m.el[ 1 ] = eye.x.y;	m.el[ 5 ] = eye.y.y;	m.el[ 9 ] = eye.z.y;
		m.el[ 2 ] = eye.x.z;	m.el[ 6 ] = eye.y.z;	m.el[ 10 ] = eye.z.z;

		return m;
	};

	this.transpose = function () {
		t = m.el;
		m.el[ 1 ] = t[ 4 ]; m.el[ 2 ] = t[ 8 ]; m.el[ 3 ] = t[ 12 ];
		m.el[ 4 ] = t[ 1 ]; m.el[ 6 ] = t[ 9 ]; m.el[ 7 ] = t[ 13 ];
		m.el[ 8 ] = t[ 2 ]; m.el[ 9 ] = t[ 6 ]; m.el[ 11 ] = t[ 14 ];
		m.el[ 12 ] = t[ 3 ]; m.el[ 13 ] = t[ 7 ];m.el[ 14 ] = t[ 11 ];
		t = undefined;
		return m;
	};

	if ( arguments.length === 0 ) {
		m.reset();
	} else if ( arguments.length === 1 ) {
		m.copy( arguments[ 0 ] );
	}

	return this;
}