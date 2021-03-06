sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageToast"
	
], function (Controller, JSONModel, formatter, Filter, FilterOperator, MessageToast) {
	"use strict";
	/* eslint-disable no-console */
	
	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatter : formatter,
		
		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "EUR",
				rateHUF:300.00
			});
			this.getView().setModel(oViewModel, "view");
		},
		
		onFilterInvoices : function (oEvent) {
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
			
			console.log("filter applied");
		},
		
		onListItemPress : function (oEvent) {
			MessageToast.show("Pressed : " + oEvent.getSource().getTitle());
			console.log(oEvent.getSource().toString());
		},
		
		onGetOdataURL :  function () {
			MessageToast.show("OData URL");
		}
	});
});