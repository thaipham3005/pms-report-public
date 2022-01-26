const procurementHeaders = [{
	discipline: ['Structural'],
	data: [{
			item: "FacilityCode",
			label: "Facility"
		},
		{
			item: "PackageNo",
			label: "Pkg no."
		}, {
			item: "PONo",
			label: "PO no."
		}, {
			item: "PackageName",
			label: "Pkg des."
		}, {
			item: "VendorCode",
			label: "Vendor"
		},
		{
			item: "MaterialCode",
			label: "Material code"
		}, {
			item: "MaterialType",
			label: "Material type"
		}, {
			item: "Type",
			label: "Type"
		}, {
			item: "ItemDescription",
			label: "Des."
		}, {
			item: "MaterialGrade",
			label: "Material/ Spec./ Grade"
		}, {
			item: "UnitWeight",
			label: "Unit weight (MT)"
		}, {
			item: "TotalWeight",
			label: "Total Weight (MT)"
		}, {
			item: "UnitLength",
			label: "Unit length (mm)"
		}, {
			item: "TotalLength",
			label: "Total Length/Area"
		}, {
			item: "Quantity",
			label: "Qty"
		}, {
			item: "Unit",
			label: "UOM"
		}, {
			item: "Size1",
			label: "OD1 (mm)"
		}, {
			item: "Size2",
			label: "OD2 (mm)"
		}, {
			item: "SCH1",
			label: "Thk (mm)"
		}, {
			item: "ShipmentNo",
			label: "Shipment no."
		}, {
			item: "DeliveryTerm",
			label: "Delivery term"
		}, {
			item: "PODeliveryDate",
			label: "PO Delivery time"
		}, {
			item: "Manufacturer",
			label: "Mfr./ CO"
		}, {
			item: "EXWLocation",
			label: "EXW location"
		}, {
			item: "CriticalTracking",
			label: "Critical Tracking"
		}, {
			item: "Location",
			label: "Factory"
		}, {
			item: "InspectionDate",
			label: "Final Inspection Date"
		}, {
			item: "ActualShipmentNo",
			label: "Shipment No"
		}, {
			item: "ShipmentDescription",
			label: "Shipment Des."
		}, {
			item: "ForecastEXWDate",
			label: "Forecast EXW"
		}, {
			item: "PLNo",
			label: "Shipping Pkl Ref."
		}

		, {
			item: "VesselSchedule",
			label: "Vessel/ Flight Schedule"
		}, {
			item: "ETDLoadingPort",
			label: "ETD loading port"
		}, {
			item: "ETADischargePort",
			label: "ETA discharge port"
		}, {
			item: "ForecastArrivalAtSite",
			label: "ETA yard"
		}, {
			item: "ActualArrivalAtSite",
			label: "Actual"
		}, {
			item: "ROS",
			label: "ROS"
		}, {
			item: "FloatTime",
			label: "Float"
		}, {
			item: "DeliveryStatus",
			label: "DeliveryStatus"
		}
	]
}, {
	discipline: ['Piping Bulks', 'Piping Mics', 'Valves'],
	data: [{
			item: "FacilityCode",
			label: "Facility"
		}, {
			item: "PackageNo",
			label: "Pkg no."
		}, {
			item: "PONo",
			label: "PO no."
		}, {
			item: "PackageName",
			label: "Pkg des."
		}, {
			item: "VendorCode",
			label: "Vendor"
		},
		{
			item: "Manufacturer",
			label: "Mfr./ CO"
		},
		{
			item: "Origin",
			label: "Origin"
		},
		{
			item: "POItemNo",
			label: "PO item no."
		}, {
			item: "MTOItemNo",
			label: "MTO Item No"
		},
		{
			item: "MaterialCode",
			label: "Material code"
		}, {
			item: "MaterialType",
			label: "Material type"
		}, {
			item: "Class",
			label: "Piping Class"
		}, {
			item: "MaterialCategory",
			label: "Material"
		}, {
			item: "MaterialDescription",
			label: "Description"
		}, {
			item: "Size1",
			label: "Size 1"
		}, {
			item: "Size2",
			label: "Size 2"
		}, {
			item: "SCH1",
			label: "SCH1"
		}, {
			item: "SCH2",
			label: "SCH2"
		}, {
			item: "Rating",
			label: ""
		}, {
			item: "Quantity",
			label: "Qty"
		}, {
			item: "Unit",
			label: "UOM"
		}, {
			item: "UnitDiaInch",
			label: "Unit Inch Dia"
		}, {
			item: "TotalDiaInch",
			label: "Total Inch Dia"
		}, {
			item: "UnitWeight",
			label: "Unit weight (kg)"
		}, {
			item: "TotalWeight",
			label: "Total Weight (kg)"
		}, {
			item: "ManufacturingStatus",
			label: "Manufacturing Status"
		}, {
			item: "ShipmentNo",
			label: "PO Shipment no."
		}, {
			item: "DeliveryTerm",
			label: "Place of Delivery"
		}, {
			item: "PODeliveryDate",
			label: "Contractual Delivery Date"
		}, {
			item: "NOINo",
			label: "NOI info"
		}, {
			item: "InspectionDate",
			label: "Final Inspection Date"
		}, {
			item: "EXWLocation",
			label: "EXW location"
		}, {
			item: "ActualShipmentNo",
			label: "Shipment No."
		}, {
			item: "ShipmentDescription",
			label: "Shipment Des."
		}, {
			item: "ForecastEXWDate",
			label: "Forecast EXW"
		}, {
			item: "PLNo",
			label: "Shipping Pkl Ref."
		}, {
			item: "VesselSchedule",
			label: "Vessel/ Flight Schedule"
		}, {
			item: "ETDLoadingPort",
			label: "ETD loading port"
		}, {
			item: "ETADischargePort",
			label: "ETA discharge port"
		}, {
			item: "ForecastArrivalAtSite",
			label: "ETA yard"
		}, {
			item: "ActualArrivalAtSite",
			label: "Actual"
		}, {
			item: "ROS",
			label: "ROS"
		}, {
			item: "FloatTime",
			label: "Float"
		}, {
			item: "DeliveryStatus",
			label: "DeliveryStatus"
		}
	]
}, {
	discipline: ['Mechanical'],
	data: [{
			item: "FacilityCode",
			label: "Facility"
		}, {
			item: "PackageNo",
			label: "Pkg no."
		}, {
			item: "PONo",
			label: "PO no."
		}, {
			item: "PackageName",
			label: "Pkg des."
		}, {
			item: "VendorCode",
			label: "Vendor"
		},
		{
			item: "Manufacturer",
			label: "Mfr./ CO"
		}, {
			item: "TroubleDescription",
			label: "Trouble Description"
		}, {
			item: "TroublePotentialImpact",
			label: "Potential Impact"
		}, {
			item: "TroubleActionBy",
			label: "Action By"
		}, {
			item: "TroubleDeadlineToClose",
			label: "Deadline To Close"
		}, {
			item: "RawMaterialItemDescription",
			label: "Item Desc."
		}, {
			item: "RawMaterialSupplier",
			label: "Supplier/ CO"
		}, {
			item: "RawMaterialPlanDate",
			label: "Planned"
		}, {
			item: "RawMaterialForecastDate",
			label: "Forecast"
		}, {
			item: "RawMaterialActualDate",
			label: "Actual"
		}, {
			item: "RawMaterialRemark",
			label: "Remarks"
		}, {
			item: "TestPlanActivityDescription",
			label: "Activity Desc."
		}, {
			item: "TestPlanForMaterial_Equipment",
			label: "For materials/equip."
		}, {
			item: "TestPlanPlanDate",
			label: "Planned"
		}, {
			item: "TestPlanForecastDate",
			label: "Forecast"
		}, {
			item: "TestPlanActualDate",
			label: "Actual"
		}, {
			item: "TestplanLocation",
			label: "Location"
		}, {
			item: "TestplanRemark",
			label: "Remarks"
		}, {
			item: "ShipmentNo",
			label: "PO Shipment no."
		}, {
			item: "ShipmentDescription",
			label: "Shipment Des."
		}, {
			item: "TagNo",
			label: "Tag No"
		}, {
			item: "Quantity",
			label: "Qty"
		}, {
			item: "EXWLocation",
			label: "Place of Delivery"
		}, {
			item: "PODeliveryDate",
			label: "Contractual Delivery Date"
		}, {
			item: "Duration",
			label: "Duration (wk)"
		}, {
			item: "ActualShipmentNo",
			label: "Shipment No."
		}, {
			item: "PLNo",
			label: "Shipping Pkl Ref."
		}, {
			item: "PlanEXWDate",
			label: "Planned"
		}, {
			item: "ForecastEXWDate",
			label: "ForecastW"
		}, {
			item: "ActualEXWDate",
			label: "Actual"
		}, {
			item: "PlanDispactchDate",
			label: "Plan Dispatch"
		}, {
			item: "ForecastDispactchDate",
			label: "Forecast Dispatch"
		}, {
			item: "VesselSchedule",
			label: "Vessel/ Flight Schedule"
		}, {
			item: "PlanArrivalAtSite",
			label: "Planned (A)"
		}, {
			item: "ForecastArrivalAtSite",
			label: "ETA yard"
		}, {
			item: "ActualArrivalAtSite",
			label: "Actual"
		}, {
			item: "ROS",
			label: "ROS"
		}, {
			item: "FloatTime",
			label: "Float"
		}, {
			item: "Cert",
			label: ""
		}, {
			item: "Remark",
			label: ""
		}, {
			item: "DeliveryStatus",
			label: "DeliveryStatus"
		}

	]
}, {
	discipline: ['initial'],
	data: [{
			item: "FacilityCode",
			label: "Facility"
		}, {
			item: "PackageNo",
			label: "Pkg no."
		}, {
			item: "PONo",
			label: "PO no."
		}, {
			item: "PackageName",
			label: "Pkg des."
		}, {
			item: "VendorCode",
			label: "Vendor"
		},
		{
			item: "Origin",
			label: ""
		}, {
			item: "DuplicatePOItemNo",
			label: ""
		},
		{
			item: "POItemNo",
			label: "PO item no."
		}, {
			item: "MTOItemNo",
			label: ""
		},
		{
			item: "MaterialCode",
			label: "Material code"
		}, {
			item: "MaterialType",
			label: "Material type"
		}, {
			item: "Class",
			label: ""
		}, {
			item: "MaterialCategory",
			label: ""
		}, {
			item: "MaterialDescription",
			label: ""
		}, {
			item: "Type",
			label: "Type"
		}, {
			item: "ItemDescription",
			label: "Des."
		}, {
			item: "MaterialGrade",
			label: "Material/ Spec./ Grade"
		}, {
			item: "UnitWeight",
			label: "Unit weight (MT)"
		}, {
			item: "TotalWeight",
			label: "Total Weight (MT)"
		}, {
			item: "UnitLength",
			label: "Unit length (mm)"
		}, {
			item: "TotalLength",
			label: "Total Length/Area"
		}, {
			item: "Size3",
			label: ""
		}, {
			item: "SCH1",
			label: ""
		}, {
			item: "SCH2",
			label: ""
		}, {
			item: "Rating",
			label: ""
		}, {
			item: "Quantity",
			label: "Qty"
		}, {
			item: "Unit",
			label: "UOM"
		}, {
			item: "Size1",
			label: "OD1 (mm)"
		}, {
			item: "Size2",
			label: "OD2 (mm)"
		}, {
			item: "SCH1",
			label: "Thk (mm)"
		}, {
			item: "UnitDiaInch",
			label: ""
		}, {
			item: "TotalDiaInch",
			label: ""
		}, {
			item: "ManufacturingStatus",
			label: ""
		}, {
			item: "ShipmentNo",
			label: "Shipment no."
		}, {
			item: "DeliveryTerm",
			label: "Delivery term"
		}, {
			item: "PODeliveryDate",
			label: "PO Delivery time"
		}, {
			item: "NOINo",
			label: ""
		}, {
			item: "Manufacturer",
			label: "Mfr./ CO"
		}, {
			item: "EXWLocation",
			label: "EXW location"
		}, {
			item: "CriticalTracking",
			label: "Critical Tracking"
		}, {
			item: "Location",
			label: "Factory"
		}, {
			item: "InspectionDate",
			label: "Final Inspection Date"
		}, {
			item: "ActualShipmentNo",
			label: "Shipment No"
		}, {
			item: "ShipmentDescription",
			label: "Shipment Des."
		}, {
			item: "ForecastEXWDate",
			label: "Forecast EXW"
		}, {
			item: "PLNo",
			label: "Shipping Pkl Ref."
		}, {
			item: "VesselScheduleDate",
			label: "Vessel/ Flight Schedule"
		}, {
			item: "VesselSchedule",
			label: "Vessel/ Flight Schedule"
		}, {
			item: "ETDLoadingPort",
			label: "ETD loading port"
		}, {
			item: "ETADischargePort",
			label: "ETA discharge port"
		}, {
			item: "ForecastArrivalAtSite",
			label: "ETA yard"
		}, {
			item: "ActualArrivalAtSite",
			label: "Actual"
		}, {
			item: "ROS",
			label: "ROS"
		}, {
			item: "FloatTime",
			label: "Float"
		}, {
			item: "DeliveryStatus",
			label: "DeliveryStatus"
		}, {
			item: "TroubleDescription",
			label: ""
		}, {
			item: "TroublePotentialImpact",
			label: ""
		}, {
			item: "TroubleActionBy",
			label: ""
		}, {
			item: "TroubleDeadlineToClose",
			label: ""
		}, {
			item: "RawMaterialItemDescription",
			label: ""
		}, {
			item: "RawMaterialSupplier",
			label: ""
		}, {
			item: "RawMaterialPlanDate",
			label: ""
		}, {
			item: "RawMaterialForecastDate",
			label: ""
		}, {
			item: "RawMaterialActualDate",
			label: ""
		}, {
			item: "RawMaterialRemark",
			label: ""
		}, {
			item: "TestPlanActivityDescription",
			label: ""
		}, {
			item: "TestPlanForMaterial_Equipment",
			label: ""
		}, {
			item: "TestPlanPlanDate",
			label: ""
		}, {
			item: "TestPlanForecastDate",
			label: ""
		}, {
			item: "TestPlanActualDate",
			label: ""
		}, {
			item: "TestplanLocation",
			label: ""
		}, {
			item: "TestplanRemark",
			label: ""
		}, {
			item: "DuplicateTagNo",
			label: ""
		}, {
			item: "TagNo",
			label: ""
		}, {
			item: "Duration",
			label: ""
		}, {
			item: "PlanEXWDate",
			label: ""
		}, {
			item: "ActualEXWDate",
			label: ""
		}, {
			item: "PlanDispactchDate",
			label: ""
		}, {
			item: "ForecastDispactchDate",
			label: ""
		}, {
			item: "PlanArrivalAtSite",
			label: ""
		}, {
			item: "Cert",
			label: ""
		}, {
			item: "Remark",
			label: ""
		}, {
			item: "Expeditor",
			label: ""
		}, {
			item: "ETAModifiedForWF",
			label: ""
		}, {
			item: "TempActualShipmentNo",
			label: ""
		}, {
			item: "WorkReleaseNo",
			label: ""
		}, {
			item: "RFQNo",
			label: ""
		}, {
			item: "MTONo",
			label: ""
		}, {
			item: "PortionNo",
			label: ""
		}, {
			item: "ShipmentId",
			label: ""
		}, {
			item: "OrderBy",
			label: ""
		}, {
			item: "ItemNo",
			label: ""
		}, {
			item: "OriginalItemCode",
			label: ""
		}, {
			item: "ItemCode",
			label: ""
		}, {
			item: "InternalCode",
			label: ""
		}, {
			item: "ItemName",
			label: ""
		}, {
			item: "Model",
			label: ""
		}, {
			item: "MaterialSpecification",
			label: ""
		}, {
			item: "CoatingType",
			label: ""
		}, {
			item: "SpecialRequiremnt",
			label: ""
		}, {
			item: "Thickness",
			label: ""
		}, {
			item: "CladingThickness",
			label: ""
		}, {
			item: "Angle",
			label: ""
		}, {
			item: "TangentLength",
			label: ""
		}, {
			item: "Contingency",
			label: ""
		}, {
			item: "End_Connections",
			label: ""
		}, {
			item: "Body",
			label: ""
		}, {
			item: "Ball_Disc",
			label: ""
		}, {
			item: "Stem",
			label: ""
		}, {
			item: "Seat",
			label: ""
		}, {
			item: "Operator",
			label: ""
		}, {
			item: "BoreType",
			label: ""
		}, {
			item: "CA_mm",
			label: ""
		}, {
			item: "Nace",
			label: ""
		}, {
			item: "Profile",
			label: ""
		}, {
			item: "PieceMark",
			label: ""
		}, {
			item: "Location",
			label: ""
		}, {
			item: "Priority",
			label: ""
		}, {
			item: "ShipmentPriorityAdviedByConstruction",
			label: ""
		}, {
			item: "UnitArea",
			label: ""
		}, {
			item: "TotalArea",
			label: ""
		}, {
			item: "UnitWidth",
			label: ""
		}, {
			item: "TotalWidth",
			label: ""
		}, {
			item: "Cont_Factor",
			label: ""
		}, {
			item: "SubSuppliers",
			label: ""
		}, {
			item: "ProductionStatus",
			label: ""
		}, {
			item: "InspectionLocation",
			label: ""
		}, {
			item: "InspectorName",
			label: ""
		}

		, {
			item: "ActualShipDate",
			label: ""
		}, {
			item: "ForecastArrivalAtPort",
			label: ""
		}, {
			item: "ActualArrivalAtPort",
			label: ""
		}, {
			item: "StatusAtPresent",
			label: ""
		}, {
			item: "IRNNo",
			label: ""
		}, {
			item: "OSD",
			label: ""
		}, {
			item: "ProductionTest",
			label: ""
		}, {
			item: "Buyer",
			label: ""
		}, {
			item: "PE",
			label: ""
		}, {
			item: "QC",
			label: ""
		}, {
			item: "PortionDescription",
			label: ""
		}, {
			item: "UnitPrice",
			label: ""
		}, {
			item: "TotalPrice",
			label: ""
		}, {
			item: "CurrencyCode",
			label: ""
		}, {
			item: "ExchangeRate",
			label: ""
		}, {
			item: "FreeIssueMaterial",
			label: ""
		}, {
			item: "WorkFrontFilter",
			label: ""
		}
	]
}]


/**
 * Summarize Structure MTO by Facility
 * with AJAX jQuery on success return Array mtoStrByFacility
 * @param {string} project ProjectCode
 }
 */
const SummarizeMTOStrByFacility = async (project) => {
	await $.ajax({
		url: `${base_url}procurement/summarizeMTOStrByFacility/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			mtoStrByFacility = response;

		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}
/**
 * Render table for MTO Structure by Facility
 * and add export buttons for utility
 * @param  {string} tableElement DOM element for jQuery/ querySelector
 * @param  {Array<>} dataSumMTOStr loaded data from server
 */
const tableMTOStrByFacility = async (tableElement, dataSumMTOStr) => {
	table = $(tableElement).DataTable({
		data: dataSumMTOStr,
		columns: [{
				data: "FacilityCode"
			},
			{
				data: "RequiredQty"
			},
			{
				data: "Weight_Required"
			},
			{
				data: "WorkReleased"
			},
			{
				data: "Weight_WorkReleased"
			},
			{
				data: "PO"
			},
			{
				data: "Weight_PO"
			},
			{
				data: "Production"
			},
			{
				data: "Weight_Production"
			},
			{
				data: "Sailing"
			},
			{
				data: "Weight_Sailing"
			},
			{
				data: "Site"
			},
			{
				data: "Weight_Site"
			},
			{
				data: "Warehouse"
			},
			{
				data: "Weight_Warehouse"
			},
			{
				data: "CuttingPlan"
			},
			{
				data: "Weight_CuttingPlan"
			},
			{
				data: "Fab"
			},
			{
				data: "Weight_Fab"
			},
		],
		scrollX: true,
		columnDefs: [{
			"targets": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
			"render": function (data, type, row, meta) {
				return data != 0 ? data.toLocaleString('en-US') : '-';
			}
		}, {
			"targets": [1, 3, 5, 7, 9, 11, 13, 15, 17],
			"visible": false
		}],
		'searching': false,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table, {
		buttons: [{
				extend: 'copyHtml5',
				text: '<i class="fas fa-copy"></i>',
				titleAttr: 'Copy'
			},
			{
				extend: 'excelHtml5',
				text: '<i class="fas fa-file-excel"></i>',
				titleAttr: 'Excel'
			},
			{
				extend: 'pdfHtml5',
				text: '<i class="fas fa-file-pdf"></i>',
				orientation: 'landscape',
				pageSize: 'LEGAL',
				titleAttr: 'PDF'
			},
			{
				extend: 'print',
				text: '<i class="fas fa-print"></i>',
				titleAttr: 'Print'
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	table.buttons().container()
		.appendTo($(toolbox));
}

const graphMTOStrByFacility = async (graphContainer, dataSumMTOStr) => {
	labels = dataSumMTOStr.map(fac => fac["FacilityCode"]);


	required = dataSumMTOStr.map(fac => {
		let key = fac["FacilityCode"];
		return {
			[key]: fac["Weight_Required"]
		};

	});
	released = dataSumMTOStr.map(fac => {
		let key = fac["FacilityCode"];
		return {
			[key]: fac["Weight_WorkReleased"]
		};

	});
	po = dataSumMTOStr.map(fac => {
		let key = fac["FacilityCode"];
		return {
			[key]: fac["Weight_PO"]
		};

	});
	prod = dataSumMTOStr.map(fac => {
		let key = fac["FacilityCode"];
		return {
			[key]: fac["Weight_Production"]
		};

	});
	sail = dataSumMTOStr.map(fac => {
		let key = fac["FacilityCode"];
		return {
			[key]: fac["Weight_Sailing"]
		};

	});
	site = dataSumMTOStr.map(fac => {
		let key = fac["FacilityCode"];
		return {
			[key]: fac["Weight_Site"]
		};

	});
	wh = dataSumMTOStr.map(fac => {
		let key = fac["FacilityCode"];
		return {
			[key]: fac["Weight_Warehouse"]
		};

	});
	cp = dataSumMTOStr.map(fac => {
		let key = fac["FacilityCode"];
		return {
			[key]: fac["Weight_CuttingPlan"]
		};

	});
	fab = dataSumMTOStr.map(fac => {
		let key = fac["FacilityCode"];
		return {
			[key]: fac["Weight_Fab"]
		};

	});
	data = [{
			"Required": required
		},
		{
			"Work Released": released
		},
		{
			"PO": po
		},
		{
			"Production": prod
		},
		{
			"Sailing": sail
		},
		{
			"Site": site
		},
		{
			"Warehouse": wh
		},
		{
			"Cutting Plan": cp
		},
		{
			"Fabricated": fab
		}
	];
	await showBarChartMulti(graphContainer, '', labels, data);
}

const SummarizeMTOStrByType = async (project) => {
	await $.ajax({
		url: `${base_url}procurement/summarizeMTOStrByType/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			mtoStrByType = response;

		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const tableMTOStrByType = async (tableElement, dataSumMTOStr) => {
	table = await $(tableElement).DataTable({
		data: dataSumMTOStr,
		columns: [{
				data: null
			},
			{
				data: "FacilityCode"
			},
			{
				data: "MaterialType"
			},
			{
				data: "Weight_Required"
			},
			{
				data: "Weight_WorkReleased"
			},
			{
				data: "Weight_PO"
			},
			{
				data: "Weight_Production"
			},
			{
				data: "Weight_Sailing"
			},
			{
				data: "Weight_Site"
			},
			{
				data: "Weight_Warehouse"
			},
			{
				data: "Weight_CuttingPlan"
			},
			{
				data: "Weight_Fab"
			},
			{
				data: "Level"
			}
		],
		scrollX: true,
		columnDefs: [{
			"targets": [3, 4, 5, 6, 7, 8, 9, 10, 11],
			"render": function (data, type, row, meta) {
				return data != 0 ? data.toLocaleString('en-US') : '-';
			}
		}, {
			"targets": [12],
			"visible": false,
			"searchable": false
		}, {
			"targets": [0],
			"render": function (data, type, row, meta) {
				if (data['Level'] != '2') {
					return (type === 'display') ? '<i class="far fa-minus-square expander expanded"></i>' : null;
				}
				return null;

			}
		}],
		'searching': false,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
		createdRow: function (row, data, index) {
			if (data['Level'] == '1') {
				$(row).attr('level', 3)
				$(row).attr('collapsed', false)
			} else if (data['Level'] == '2') {
				$(row).attr('level', 4)
			}
		}
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table, {
		buttons: [{
				extend: 'copyHtml5',
				text: '<i class="fas fa-copy"></i>',
				titleAttr: 'Copy'
			},
			{
				extend: 'excelHtml5',
				text: '<i class="fas fa-file-excel"></i>',
				titleAttr: 'Excel'
			},
			{
				extend: 'csvHtml5',
				text: '<i class="fas fa-file-csv"></i>',
				titleAttr: 'CSV'
			},
			{
				extend: 'pdfHtml5',
				text: '<i class="fas fa-file-pdf"></i>',
				orientation: 'landscape',
				pageSize: 'LEGAL',
				titleAttr: 'PDF'
			},
			{
				extend: 'print',
				text: '<i class="fas fa-print"></i>',
				titleAttr: 'Print'
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	table.buttons().container()
		.appendTo($(toolbox));

	customButtons($(table.table().container()));
}

const ProcurementPlanByWeek = async (project, type, type2) => {
	await $.ajax({
		url: `${base_url}procurement/procurementPlanByWeek/${project}/${type}/${type2}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			proPlanByWeek = response;

		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const ProcurementPlanByDate = async (project, type, type2) => {
	await $.ajax({
		url: `${base_url}procurement/procurementPlanByDate/${project}/${type}/${type2}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			proPlanByDate = response;

		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const graphProPlanByWeek = async (graphContainer, types, dataProPlan1, dataProPlan2) => {
	let minDate = dataProPlan1[0]["FirstDate"];
	let _weeks = ([...dataProPlan1.map(x => x["WeekNo"]), ...dataProPlan2.map(x => x["WeekNo"])]);
	let maxWeek = _weeks.reduce((max, x) => x > max ? x : max);

	// console.log(dataProPlan1, dataProPlan2)
	let _graphLabels = [];
	let graphLabels = [];
	for (let i = 0; i <= maxWeek; i++) {
		_graphLabels.push(minDate + i * 7 * 24 * 3600 * 1000)
		graphLabels.push(new Date(minDate + i * 7 * 24 * 3600 * 1000).toLocaleDateString('vi-vn'));
	}

	let _prev1 = _prev2 = 0;

	let graphData = [{
		[types[0]]: []
	}, {
		[types[1]]: []
	}];
	let graphDataAccum = [{
		['Accum ' + types[0]]: []
	}, {
		['Accum ' + types[1]]: []
	}];
	_graphLabels.forEach(label => {
		let _val1 = dataProPlan1.filter(x => x["Date"] == label)

		if (_val1.length > 0) {
			graphData[0][types[0]].push(_val1[0]["TotalWeight"]);
			graphDataAccum[0]['Accum ' + types[0]].push(_val1[0]["AccumWeight"]);
			_prev1 = _val1[0]["AccumWeight"];
		} else {
			graphData[0][types[0]].push(null);
			graphDataAccum[0]['Accum ' + types[0]].push(_prev1);
		}

		let _val2 = dataProPlan2.filter(x => x["Date"] == label);


		if (_val2.length > 0) {
			graphData[1][types[1]].push(_val2[0]["TotalWeight"]);
			graphDataAccum[1]['Accum ' + types[1]].push(_val2[0]["AccumWeight"]);
			_prev2 = _val2[0]["AccumWeight"];
		} else {
			graphData[1][types[1]].push(null);
			graphDataAccum[1]['Accum ' + types[1]].push(_prev2);

		}
	});

	await showAccumLineChart(graphContainer, '', graphLabels, graphDataAccum, graphData)
}

const ProcurementPlan = async (project) => {
	await $.ajax({
		url: `${base_url}procurement/procurementPlan/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			proPlan = response;

		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const tableProcurementPlan = (tableElement, dataProPlan) => {
	table = $(tableElement).DataTable({
		data: dataProPlan,
		columns: [{
				data: null
			},
			{
				data: "FacilityCode"
			},
			{
				data: "DisciplineCode"
			},
			{
				data: "PackageNo"
			},
			{
				data: "PackageName"
			},
			{
				data: "WorkReleaseNo"
			},
			{
				data: "PONo"
			},
			{
				data: "ShipmentNo"
			},
			{
				data: "ActualShipmentNo"
			},
			{
				data: "ShipmentDescription"
			},
			{
				data: "POItemNo"
			},
			{
				data: "VendorCode"
			}, //11
			{
				data: "Manufacturer"
			},
			{
				data: "Model"
			},
			{
				data: "ItemCode"
			}, //14
			{
				data: "ItemDescription"
			},
			{
				data: "Unit"
			},
			{
				data: "Quantity"
			},
			{
				data: "UnitWeight"
			},
			{
				data: "TotalWeight"
			},
			{
				data: "UnitDiaInch"
			},
			{
				data: "TotalDiaInch"
			},
			{
				data: "MaterialType"
			},
			{
				data: "MaterialCode"
			},
			{
				data: "MaterialGrade"
			},
			{
				data: "PODeliveryDate"
			},
			{
				data: "DeliveryTerm"
			},
			{
				data: "ROS"
			},
			{
				data: "EXWLocation"
			}, //28
			{
				data: "ForecastEXWDate"
			},
			{
				data: "ActualShipDate"
			},
			{
				data: "VesselSchedule"
			},
			{
				data: "ETDLoadingPort"
			},
			{
				data: "ETADischargePort"
			},
			{
				data: "ForecastArrivalAtPort"
			}, //34
			{
				data: "ActualArrivalAtPort"
			},
			{
				data: "ForecastArrivalAtSite"
			},
			{
				data: "ActualArrivalAtSite"
			},
			{
				data: "ProductionStatus"
			}, //38
			{
				data: "DeliveryStatus"
			},
			{
				data: "StatusAtPresent"
			},
			{
				data: "Level"
			}, //41
		],
		scrollX: true,
		columnDefs: [{
				"targets": [0],
				"render": function (data, type, row, meta) {
					if (data['Level'] != '4') {
						return (type === 'display') ? '<i class="far fa-minus-square expander expanded"></i>' : null;
					}
					return null;

				}
			},
			{
				"targets": [25, 27, 29, 30, 32, 33, 34, 35, 36, 37],
				"render": function (data, type, row, meta) {
					return data ? moment(data).format('DD/MM/YYYY') : '';
				}
			},
			{
				"targets": [39],
				"render": function (data, type, row, meta) {
					let result = '';

					if (data == 'Arrived') {
						result = '<span class="badge text-sm badge-success">Arrived</span>';
					} else if (data == 'On Sailing') {
						result = '<span class="badge text-sm badge-warning">Sailing</span>';
					} else if (data == 'Under Production') {
						result = '<span class="badge text-sm badge-secondary">Production</span>';
					} else if (data == 'Ready Ex-work') {
						result = '<span class="badge text-sm badge-info">Ready EXW</span>';
					} else {
						result = data
					}
					return result;
				}
			}, {
				"targets": [41],
				"visible": false,
				"searchable": false
			}

		],
		"deferRender": true,
		"scrollCollapse": true,
		'searching': true,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
		createdRow: function (row, data, index) {
			if (data['Level'] == '4') {
				$(row).attr('level', 4);
			} else {
				$(row).attr('level', data['Level']);
				$(row).attr('collapsed', false);
			}
		}
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table, {
		buttons: [{
				extend: 'copyHtml5',
				text: '<i class="fas fa-copy"></i>',
				titleAttr: 'Copy'
			},
			{
				extend: 'excelHtml5',
				text: '<i class="fas fa-file-excel"></i>',
				titleAttr: 'Excel'
			},
			{
				extend: 'csvHtml5',
				text: '<i class="fas fa-file-csv"></i>',
				titleAttr: 'CSV'
			},
			{
				extend: 'pdfHtml5',
				text: '<i class="fas fa-file-pdf"></i>',
				orientation: 'landscape',
				pageSize: 'LEGAL',
				titleAttr: 'PDF'
			},
			{
				extend: 'print',
				text: '<i class="fas fa-print"></i>',
				titleAttr: 'Print'
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	table.buttons().container()
		.appendTo($(toolbox));

	customButtons($(table.table().container()));

}
/**
 * Layout table of Procurement plan by each date
 * @param {string} tableElement
 * @param {Array<T>} dataProPlan
 */
const tableProcurementPlanByDate = (tableElement, dataProPlan) => {
	if (typeof table != 'undefined') {
		table.clear();
		table.destroy();
	}
	table = $(tableElement).DataTable({
		data: dataProPlan,
		columns: [{
				data: "FacilityCode"
			},
			{
				data: "DisciplineCode"
			},
			{
				data: "Date"
			},
			// { data: "WeekNo" },
			{
				data: "Weight1"
			},
			{
				data: "Weight2"
			},
		],
		scrollX: true,
		columnDefs: [{
			"targets": [2],
			"render": function (data, type, row, meta) {
				return data ? moment(data).format('DD/MM/YYYY') : '';
			}
		}],
		"deferRender": true,
		"scrollCollapse": true,
		'searching': false,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table, {
		buttons: [{
				extend: 'copyHtml5',
				text: '<i class="fas fa-copy"></i>',
				titleAttr: 'Copy'
			},
			{
				extend: 'excelHtml5',
				text: '<i class="fas fa-file-excel"></i>',
				titleAttr: 'Excel'
			},
			{
				extend: 'csvHtml5',
				text: '<i class="fas fa-file-csv"></i>',
				titleAttr: 'CSV'
			},
			{
				extend: 'pdfHtml5',
				text: '<i class="fas fa-file-pdf"></i>',
				orientation: 'landscape',
				pageSize: 'LEGAL',
				titleAttr: 'PDF'
			},
			{
				extend: 'print',
				text: '<i class="fas fa-print"></i>',
				titleAttr: 'Print'
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	table.buttons().container()
		.appendTo($(toolbox));
}


/**
 * Load Expediting report with AJAX jQuery
 * @param  {string} project ProjectCode
 * @param  {string | null} facilitiy FacilityCode
 */
const loadExpeditingReport = async (project, facilitiy = null) => {
	await $.ajax({
		url: `${base_url}procurement/expeditingReport/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			expeditingReport = response;

		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}
/**
 * Load Logistics report with AJAX jQuery
 * @param  {string} project ProjectCode
 * @param  {string | null} facilitiy FacilityCode
 */
const loadLogiscticsReport = async (project, facilitiy = null) => {
	await $.ajax({
		url: `${base_url}procurement/logisticsReport/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			logisticsReport = response;

		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}
/**
 * Load Expediting Report headers specified for a particular discipline
 * and layout to table element
 * @param {string} tableElementID DOM Element by jQuery/ querySelector
 * @param {string} project ProjectCode
 * @param {string} discipline Discipline as specified by Procurement
 * @returns void
 */
const loadExpeditingHeader = async (tableElementID, headerData) => {
	let parent = $(`${tableElementID}`).parents('.chart-tile')
	$(`.dataTables_wrapper`).remove()
	$(`${tableElementID}`).remove()

	parent.append(`<table id="${tableElementID.replace('#','')}" class="table compact header-contrast table-bordered text-center has-buttons" style="width:100%; background-color:white;"> <thead><tr></tr> </thead><tbody></tbody></table>`)

	tableHeader = headerData.map(x=>{
		if (x.includes('Description') || x.includes('Package') || x.includes('PO No') | x.includes('Remark') | x.includes('Delivery')) {
			return `<th style="min-width:200px;">${x}</th>`
		} else {
			return `<th>${x}</th>`
		}
		
	})

	$(`${tableElementID} thead tr`).html(tableHeader.join(''))
}
/**
 * Load Expediting Report body specified for a particular discipline 	
 * and layout to table element
 * @param {string} tableElementID DOM Element by jQuery / querySelector
 * @param {string} dataDiscipline Discipline as specified by Procurement
 */
const tableExpeditingReport = (tableElementID, dataDiscipline, columnData) => {
	if (typeof table != 'undefined') {
		table.clear();
		table.destroy();
	}

	let cols = columnData.map(x => {
		return {
			"data": x
		}
	})

	// console.log(dataDiscipline);
	table = $(tableElementID).DataTable({
		data: dataDiscipline,
		columns: cols,
		scrollX: true,
		columnDefs: [{
			targets: '_all',
			render: function (data, type, row, meta) {
				if (data == null || typeof data == 'number') return data;

				if (data.split(" ").length == 2 && data.split(" ")[0].length == 10 && !Number.isNaN(Date.parse(data))) {
					return moment(data).format("DD/MM/YYYY")
				}
				return data
			}
		}],
		"deferRender": true,
		"scrollCollapse": true,
		'searching': true,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,		
		createdRow: function (row, data, dataIndex) {			
			if(data["DeliveryStatus"] == 'Arrived'){
				$(row).css("background-color", "#00FF00")
			} else if (data["DeliveryStatus"] == 'On Sailing') {
				$(row).css("background-color", "#FFFF00")
			}
			

		}, 
		initComplete: function (settings, json) {
		}
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table, {
		buttons: [{
				extend: 'copyHtml5',
				text: '<i class="fas fa-copy"></i>',
				titleAttr: 'Copy'
			},
			{
				extend: 'excelHtml5',
				text: '<i class="fas fa-file-excel"></i>',
				titleAttr: 'Excel'
			},
			{
				extend: 'csvHtml5',
				text: '<i class="fas fa-file-csv"></i>',
				titleAttr: 'CSV'
			},
			{
				extend: 'pdfHtml5',
				text: '<i class="fas fa-file-pdf"></i>',
				orientation: 'landscape',
				pageSize: 'LEGAL',
				titleAttr: 'PDF'
			},
			{
				extend: 'print',
				text: '<i class="fas fa-print"></i>',
				titleAttr: 'Print'
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table.buttons().container().appendTo($(toolbox));
}
/**
 * @param  {} project
 */
const loadPackagesProgress = async (project) => {
	await $.ajax({
		url: `${base_url}procurement/fetchPackagesProgress/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			packagesProgress = response;

		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}
/**
 * @param  {string} tableElementID
 * @param  {Array} dataPackages
 */
const tablePackagesProgress = (tableElementID, dataPackages) => {
	if (typeof table != 'undefined') {
		table.clear();
		table.destroy();
	}

	console.log(dataPackages);
	let _cols = Object.values(dataPackages[0])

	let map_cols = Object.keys(dataPackages[0]).map(x => {
		return {
			data: x
		}
	})

	let data_cols = dataPackages.map(row => {
		for (let item in row) {
			row[item] = row[item]["data"]
		}
		return row
	})

	let headers = _cols.map(x => x["text"])
		.map(x => {
			console.log(x);
			if (x == "Package Name") {
				return `<th style="mix-width:450px;">${x}</th>`
			} else {
				return `<th style="max-width:200px;">${x}</th>`
			}

		})
	$(`${tableElementID} thead tr`).append(headers.join(''))


	console.log(map_cols);


	table = $(tableElementID).DataTable({
		data: data_cols,
		columns: map_cols,
		scrollX: true,
		columnDefs: [{
			targets: [5, 6, 7, 8, 9, 10],
			render: function (data, type, row, meta) {
				let percent = data ? Math.round(parseFloat(data) * 100)  : 0

				if (Number.isNaN(percent) || percent == 0) {
					return (type === 'display') ?
						'<div class="progress" style="height: 20px; background: #bfbfbf;"><div role="progressbar" class="progress-bar bg-success" style="overflow:visible; width:0%;">0%</div></div>' : percent;
				}
				return (type === 'display') ?
					'<div class="progress" style="height: 20px; background: #bfbfbf;"><div role="progressbar" class="progress-bar bg-success" style="overflow:visible; width:' +
					percent + '%;">' + percent + '%</div></div>' : percent;
			}
		}],
		"deferRender": true,
		"scrollCollapse": true,
		'searching': true,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table, {
		buttons: [{
				extend: 'copyHtml5',
				text: '<i class="fas fa-copy"></i>',
				titleAttr: 'Copy'
			},
			{
				extend: 'excelHtml5',
				text: '<i class="fas fa-file-excel"></i>',
				titleAttr: 'Excel'
			},
			{
				extend: 'csvHtml5',
				text: '<i class="fas fa-file-csv"></i>',
				titleAttr: 'CSV'
			},
			{
				extend: 'pdfHtml5',
				text: '<i class="fas fa-file-pdf"></i>',
				orientation: 'landscape',
				pageSize: 'LEGAL',
				titleAttr: 'PDF'
			},
			{
				extend: 'print',
				text: '<i class="fas fa-print"></i>',
				titleAttr: 'Print'
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table.buttons().container().appendTo($(toolbox));
}

const getTemplate = async (project, service = null) => {
	if (service) {
		await $.ajax({
			url: `${base_url}procurement/getTemplate/${project}/Procurement/${service}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				templates = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}procurement/getTemplate/${project}/Procurement`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				templates = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}
