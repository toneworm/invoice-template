var Invoice = {
	invoiceDetails : {},
	init : function ( _invoiceDetails ) {
		// Adding invoice details object (overwrite empty object)
		if( _invoiceDetails && typeof _invoiceDetails ) this.invoiceDetails = _invoiceDetails;

		this.replaceVars();
	},
	replaceVars : function () {
		// check through body for template strings to be replaced with invoiceDetails properties.
		var body = document.body,
			bodyContent = body.innerHTML;

		// loop through invoiceDetails properties
		for( var item in invoiceDetails ) {
			// replace template variables with dynamic content
			bodyContent = bodyContent.replace('[' + item + ']', invoiceDetails[item]);
		}
		// replace body HTML with updated HTML string
		body.innerHTML = bodyContent;
	}
}