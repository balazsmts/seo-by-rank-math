/**
 * Prettify JSON.
 *
 * @param  {Object} json JSON data to beautify.
 * @return {string} JSON beauify html.
 */
export function prettyJSON( json ) {
	if ( typeof json !== 'string' ) {
		json = JSON.stringify( json, null, 2 )
	}

	json = json
		.replace( /&/g, '&amp;' )
		.replace( /</g, '&lt;' )
		.replace( />/g, '&gt;' )

	return json
		.replace( /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, ( match ) => {
			let cls = 'number'

			if ( /^"/.test( match ) ) {
				cls = /:$/.test( match ) ? 'key' : 'string'
			} else if ( /true|false/.test( match ) ) {
				cls = 'boolean'
			} else if ( /null/.test( match ) ) {
				cls = 'null'
			}

			return '<span class="' + cls + '">' + match + '</span>'
		} )
}
