/* global QUnit */
// https://sapui5.hana.ondemand.com/#/topic/e1ce1de315994a02bf162f4b3b5a9f09
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/demo/walkthrough/test/unit/model/formatter"
	], function () {
		QUnit.start();
	});
});