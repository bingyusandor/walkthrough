/* ------------------------------------------------------------------------
	Custom formatter
	https://sapui5.hana.ondemand.com/#/topic/0f8626ed7b7542ffaa44601828db20de
------------------------------------------------------------------------ */
sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("invoiceStatusA");
				case "B":
					return resourceBundle.getText("invoiceStatusB");
				case "C":
					return resourceBundle.getText("invoiceStatusC");
				default:
					return sStatus;
			}
		}
	};
});