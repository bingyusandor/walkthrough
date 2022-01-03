sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";
	   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
	   		onOpenDialog : function () {
				this.getOwnerComponent().openHelloDialog("Sankesz");
		},
		 	onGetBrowserInfo : function () {
				var _browserVersion = this.getOwnerComponent().getBrowserVersion();
				MessageToast.show(_browserVersion);
		}
	   });
});