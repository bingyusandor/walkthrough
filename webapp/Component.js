sap.ui.define([
	"sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "./controller/HelloDialog"
	
], function (UIComponent, JSONModel, HelloDialog) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set data model
			var oData = {
				recipient : {
					name : "Sanyi",
					age  : 43
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			// set dialog
			/* We want to connect the reuse dialog to the lifecycle of the
			   root view of the app, so we pass an instance of the root view on to the constructor. */
			this._helloDialog = new HelloDialog(this.getRootControl());
			
		},
		
		exit : function() {
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		
		openHelloDialog : function(newTitle) {
			this._helloDialog.open(newTitle);
		},
		
		setHelloDialogTitle : function(newTitle) {
			this._helloDialog.setTitle(newTitle); 
		},
		
		getBrowserVersion : function() {
			return navigator.userAgent;
		}
	});

});