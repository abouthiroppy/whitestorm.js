/**
 * © Alexander Buzin, 2014-2015
 * Site: http://alexbuzin.me/
 * Email: alexbuzin88@gmail.com
*/

/**
 * WhitestormJS ambient light.
 *
 * @extends WHS.Light
 */
WHS.AmbientLight = class AmbientLight extends WHS.Light {
	/**
     * Ambient light.
     *
     * @param {Object} params.light.color - Light color.
     * @param {Object} params.light.intensity - Light intensity.
     */
	constructor( params = {} ) {

		super( params, "ambientlight" );

		this.build( params );

        super.wrap("noshadows");

	}

    build( params = {} ) {

        let _scope = this;

        return new Promise( (resolve, reject) => {
            _scope.setNative( new THREE.AmbientLight(
                params.light.color,
                params.light.intensity
            ) );

            resolve();
        });

    }

}

WHS.World.prototype.AmbientLight = function( params ) {
    let object = new WHS.AmbientLight( params );

    object.addTo( this );

    return object;
}
