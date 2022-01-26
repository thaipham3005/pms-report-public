let definitions = [{
	Abbr: ['STF', 'STC', 'STW', 'STT', 'STG'],
	Fullname: 'Structure',
	Order: 1
}, {
	Abbr: ['PPF', 'PPC', 'PPW', 'PPT', 'PPG'],
	Fullname: 'Piping',
	Order: 2
}, {
	Abbr: ['MEF', 'MEW'],
	Fullname: 'Mechanical',
	Order: 3
}, {
	Abbr: ['ELC', 'ELF', 'ELW'],
	Fullname: 'Electrical & Instrument',
	Order: 4
}, {
	Abbr: ['HVF'],
	Fullname: 'HVAC',
	Order: 5
}, {
	Abbr: ['ART'],
	Fullname: 'Architectural',
	Order: 6
}, {
	Abbr: ['COM'],
	Fullname: 'Precom/ Commissioning',
	Order: 7
}, {
	Abbr: ['BP', 'SCF', 'RIG', 'OTH', 'REM'],
	Fullname: 'General Service',
	Order: 8
}]

//#region Production Control
const loadLevel1_Original = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/fetchLevel1_Original/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataLevel1 = response;
			// console.log(dataLevel1);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const loadLevel1 = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/fetchLevel1/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			curveLevel1 = response;
			// console.log(dataLevel1);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const graphBudgetLevel1 = (graphContainer, dataLevel1) => {

	labels = ["Budget MHRS", "Actual MHRS", "Wasted MHRS", "Earned MHRS"];
	data = [parseFloat(dataLevel1["BaseBudgetMHRS"]), parseFloat(dataLevel1["ActualMHRS"]), parseFloat(dataLevel1["WasteMHRS"]), parseFloat(dataLevel1["EarnedMHRS"])];

	showBarChart(graphContainer, 'BUDGET & ACTUAL MANHOURS', labels, data);

}

const graphActualMHRSLevel1 = (graphContainer, dataLevel1) => {
	labels = [
		["Earned MHRS", "Var MHRS"],
		["Whithou-OT", "OT", "Sunday", "Holiday"]
	];

	// data = [ parseFloat(dataLevel1["EarnedMHRS"]),
	//      parseFloat(dataLevel1["VarMHRS"]),
	//     ];
	// showPieChart(graphContainer, 'ACTUAL EARNED MANHOURS', labels, data);

	data = [
		[],
		[{
				value: parseFloat(dataLevel1["ActualMHRS_WithoutOT"]),
				name: 'Without-OT'
			},
			{
				value: parseFloat(dataLevel1["ActualMHRS_OT"]),
				name: 'Overtime'
			}, {
				value: parseFloat(dataLevel1["ActualMHRS_Sunday"]),
				name: 'Sunday'
			},
			{
				value: parseFloat(dataLevel1["ActualMHRS_Holiday"]),
				name: 'Holiday'
			}
		]
	];

	showPieChart2(graphContainer, ['Earned MHRS', 'Breakdown'], labels, data);
}

const graphBreakdownMHRSLevel1 = (graphContainer, dataLevel1) => {
	labels = ["Non-OT", "OT", "Sunday", "Holiday"];
	data = [parseFloat(dataLevel1["ActualMHRS_WithoutOT"]), parseFloat(dataLevel1["ActualMHRS_OT"]), parseFloat(dataLevel1["ActualMHRS_Sunday"]), parseFloat(dataLevel1["ActualMHRS_Holiday"])];

	showPieChart(graphContainer, 'ACTUAL MHRS LEVEL 1 BREAKDOWN', labels, data);
}

const graphCurveLevel1 = (graphContainer, curveLevel1) => {
	labels = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		return key;
	});

	let actual = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		return {
			[key]: parseFloat(item["ActualMHRS"])
		};
	});
	let budget = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		return {
			[key]: parseFloat(item["BaseBudgetMHRS"])
		};
	});

	let earned = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		return {
			[key]: parseFloat(item["EarnedMHRS"])
		};
	});
	let varMHRS = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		return {
			[key]: parseFloat(item["VarMHRS"])
		};
	});

	// let graphdata = budget;
	let graphdata = [{
			"Budget MHRS": budget
		},
		{
			"Actual MHRS": actual
		},
		{
			"Earned MHRS": earned
		},
		{
			"Var MHRS": varMHRS
		}
	];

	showCurveChart(graphContainer, 'ACTUAL MHRS LEVEL 1 PROGRESS', labels, graphdata);

}

const graphProgressLevel1 = (graphContainer, curveLevel1) => {
	labels = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		return key;
	});
	let budget = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		return {
			[key]: parseFloat(item["BaseBudgetMHRS"])
		};
	});

	let actual = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		return {
			[key]: parseFloat(item["ActualMHRS"])
		};
	});

	let earned = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		return {
			[key]: parseFloat(item["EarnedMHRS"])
		};
	});
	let cpi = curveLevel1.map(item => {
		let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
		let _cpi = (parseFloat(item["EarnedMHRS"]) / parseFloat(item["ActualMHRS"])).toFixed(2);
		return {
			[key]: parseFloat(_cpi)
		};
	});

	// let graphdata = budget;
	let graphdata = [{
			"Budget MHRS": budget
		},
		{
			"Actual MHRS": actual
		},
		{
			"Earned MHRS": earned
		},
	];

	let cpidata = [{
		"CPI": cpi
	}, ];

	// showCurveChart(graphContainer, 'ACTUAL MHRS LEVEL 1 PROGRESS', labels, graphdata);
	showComboChart(graphContainer, 'BUDGET LEVEL 1 MONITORING', labels, graphdata, cpidata);

}

const tableLevel1 = (tableElement, dataLevel1) => {
	tabledata = [{
			"Type": "Base Budge tMHRS",
			"Value": parseFloat(dataLevel1["BaseBudgetMHRS"]).toLocaleString('en-US'),
		},
		{
			"Type": "Actual MHRS",
			"Value": parseFloat(dataLevel1["ActualMHRS"]).toLocaleString('en-US')
		},
		{
			"Type": "Waste MHRS",
			"Value": parseFloat(dataLevel1["WasteMHRS"]).toLocaleString('en-US')
		},
		{
			"Type": "Earned MHRS",
			"Value": parseFloat(dataLevel1["EarnedMHRS"]).toLocaleString('en-US')
		},
		{
			"Type": "Var MHRS",
			"Value": parseFloat(dataLevel1["VarMHRS"]).toLocaleString('en-US')
		},
		{
			"Type": "Actual MHRS WithoutOT",
			"Value": parseFloat(dataLevel1["ActualMHRS_WithoutOT"]).toLocaleString('en-US')
		},
		{
			"Type": "Actual MHRS OT",
			"Value": parseFloat(dataLevel1["ActualMHRS_OT"]).toLocaleString('en-US')
		},
		{
			"Type": "Actual MHRS Sunday",
			"Value": parseFloat(dataLevel1["ActualMHRS_Sunday"]).toLocaleString('en-US')
		},
		{
			"Type": "Actual MHRS Holiday",
			"Value": parseFloat(dataLevel1["ActualMHRS_Holiday"]).toLocaleString('en-US')
		}
	]
	table = $(tableElement).DataTable({
		data: tabledata,
		columns: [{
				data: "Type"
			},
			{
				data: "Value"
			}
		],
		'searching': false,
		"paging": false,
		"ordering": false,
		"info": false,
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

const graphHeatmap = (tableElement, years, heatmapGraphdata, maxRange) => {

	showCalendarMap(tableElement, years, heatmapGraphdata, maxRange);

}

const loadLevel2_Original = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/fetchLevel2_Original/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataLevel2 = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const loadLevel2 = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/fetchLevel2/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			curveLevel2 = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const graphBudgetLevel2 = (graphContainer, dataLevel2Cooked) => {

	labels = dataLevel2Cooked.map(disc => disc["DisciplineCode"]);
	budget = data = dataLevel2Cooked.map(disc => {
		let key = disc["DisciplineCode"];
		return {
			[key]: disc["BaseBudgetMHRS"]
		};

	});
	actual = data = dataLevel2Cooked.map(disc => {
		let key = disc["DisciplineCode"];
		return {
			[key]: disc["ActualMHRS"]
		};

	});

	earned = data = dataLevel2Cooked.map(disc => {
		let key = disc["DisciplineCode"];
		return {
			[key]: disc["EarnedMHRS"]
		};

	});
	data = [{
			"Budget MHRS": budget
		},
		{
			"Actual MHRS": actual
		},
		{
			"Earned MHRS": earned
		}
	];
	showBarChartMulti(graphContainer, 'BUDGET & ACTUAL MANHOURS', labels, data);

}

const graphDisciplinesLevel2 = (graphContainer, dataLevel2Cooked) => {
	labels = dataLevel2Cooked.map(disc => disc["DisciplineCode"]);
	data = dataLevel2Cooked.map(disc => disc["BaseBudgetMHRS"]);

	showPieChart(graphContainer, 'DISCIPLINES BUDGET SHARES', labels, data);
}

const graphProgressLevel2 = (graphContainer, curveLevel2, selectedDiscipline) => {
	disciplines = [...new Set(curveLevel2.map(row => row["DisciplineCode"]))]
	let disciplinesData = disciplines.map(disc => {
		let children = curveLevel2.filter(row => row["DisciplineCode"] == disc);
		return {
			[disc]: children
		}
	});
	let graphdata = [];
	let cpidata = [];
	let labels;
	disciplinesData.forEach(disc => {
		let discipline = Object.keys(disc).toString();
		let discData = Object.values(disc)[0];

		labels = discData.map(item => {
			let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
			return key;
		});
		let budget = discData.map(item => {
			let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
			return {
				[key]: parseFloat(item["BaseBudgetMHRS"])
			};
		});

		let actual = discData.map(item => {
			let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
			return {
				[key]: parseFloat(item["ActualMHRS"])
			};
		});

		let earned = discData.map(item => {
			let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
			return {
				[key]: parseFloat(item["EarnedMHRS"])
			};
		});
		let cpi = discData.map(item => {
			let key = new Date(item["CreatedDate"]).toLocaleDateString('vi-VN');
			let _cpi = (parseFloat(item["EarnedMHRS"]) / parseFloat(item["ActualMHRS"])).toFixed(2);
			return {
				[key]: parseFloat(_cpi)
			};
		});

		// let graphdata = budget;
		let _graphdata = [{
				"Budget MHRS": budget
			},
			{
				"Actual MHRS": actual
			},
			{
				"Earned MHRS": earned
			},
		];
		graphdata.push({
			[discipline]: _graphdata
		});

		let _cpidata = [{
			"CPI": cpi
		}, ];
		cpidata.push({
			[discipline]: _cpidata
		});
	})

	let _discGraphdata = graphdata.filter(x => Object.keys(x).toString() == selectedDiscipline)[0];
	let discGraphdata = Object.values(_discGraphdata)[0];
	let _discCpidata = cpidata.filter(x => Object.keys(x).toString() == selectedDiscipline)[0];
	let discCpidata = Object.values(_discCpidata)[0];

	// showCurveChart(graphContainer, 'ACTUAL MHRS LEVEL 1 PROGRESS', labels, graphdata);
	showComboChart(graphContainer, 'BUDGET LEVEL 2 MONITORING', labels, discGraphdata, discCpidata);

}

const graphSunburstLevel2 = (graphContainer, dataLevel2Cooked) => {

	let chartdata = dataLevel2Cooked.map(disc => {
		let _chartdata = [];
		if (disc["ActualMHRS_WithoutOT"] > 0) {
			_chartdata.push({
				name: "Non-OT",
				value: disc["ActualMHRS_WithoutOT"]
			})
		}
		if (disc["ActualMHRS_OT"] > 0) {
			_chartdata.push({
				name: "OT",
				value: disc["ActualMHRS_OT"]
			})
		}
		if (disc["ActualMHRS_Sunday"] > 0) {
			_chartdata.push({
				name: "Sunday",
				value: disc["ActualMHRS_Sunday"]
			})
		}
		if (disc["ActualMHRS_Holiday"] > 0) {
			_chartdata.push({
				name: "Holiday",
				value: disc["ActualMHRS_Holiday"]
			})
		}
		return {
			name: disc["DisciplineCode"],
			value: disc["ActualMHRS"],
			children: _chartdata
		}
	})


	showSunburstChart(graphContainer, "", chartdata);
}

const graphTreeMapLevel2 = (graphContainer, dataLevel2) => {
	let total = dataLevel2.reduce((sum = 0, item) => {
		return {
			"BaseBudgetMHRS": parseFloat(sum["BaseBudgetMHRS"]) + parseFloat(item["BaseBudgetMHRS"])
		};
	});

	let chartdata = dataLevel2.map(item => {
		let percent = (parseFloat(item["BaseBudgetMHRS"]) * 100 / total["BaseBudgetMHRS"]);
		return {
			"name": item["MainActivities"],
			"percent": percent,
			"path": item["MainActivities"],
			"value": parseFloat(item["BaseBudgetMHRS"])
		}
	});

	showTreeMapChart(graphContainer, "BUDGET LEVEL 1 CONTRIBUTES", "", chartdata)
}

const tableLevel2 = (tableElement, dataLevel2Cooked) => {

	table = $(tableElement).DataTable({
		data: dataLevel2Cooked,
		columns: [{
				data: "DisciplineCode"
			},
			{
				data: "BaseBudgetMHRS"
			},
			{
				data: "ActualMHRS"
			},
			{
				data: "ActualMHRS_WithoutOT"
			},
			{
				data: "ActualMHRS_OT"
			},
			{
				data: "ActualMHRS_Sunday"
			},
			{
				data: "ActualMHRS_Holiday"
			},
			{
				data: "EarnedMHRS"
			},
			{
				data: "VarMHRS"
			},
			{
				data: "WasteMHRS"
			},
			{
				data: "ActualProgress"
			},
			{
				data: "CPI"
			},
		],
		scrollX: true,
		columnDefs: [{
			"targets": [1, 2, 3, 4, 5, 6, 7, 8, 9],
			"render": function (data, type, row, meta) {
				return data.toLocaleString('en-US');
			}
		}, {
			"targets": [10],
			"data": 'ActualProgress',
			"render": function (data, type, row, meta) {
				let percent = data;
				if (Number.isNaN(percent) || percent == 0) {
					return (type === 'display') ?
						'<div class="progress" style="height: 20px; background: #bfbfbf;"><div role="progressbar" class="progress-bar bg-success active" style="overflow:visible; width:0%;">0%</div></div>' : percent;
				}
				return (type === 'display') ?
					'<div class="progress" style="height: 20px; background: #bfbfbf;"><div role="progressbar" class="progress-bar bg-success active" style="overflow:visible; width:' +
					percent + '%;">' + percent + '%</div></div>' : percent;
			}
		}, {
			"targets": [11],
			"data": 'CPI',
			"render": function (data, type, row, meta) {
				let bg = 'transparent';
				if (data > 1) {
					bg = '#28a745';
				} else if (data == 1) {
					bg = '#ffc107';
				} else {
					bg = '#dc3545';
				}
				return (type === 'display') ? `<span style="color: ${bg};">${data.toFixed(2)}</span>` : data.toFixed(2);
			}
		}],
		'searching': false,
		"paging": false,
		"ordering": false,
		"info": false,
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

const loadLevel3 = async (project, facility, discipline) => {
	await $.ajax({
		url: `${base_url}production_control/fetchLevel3/${project}/${facility}/${discipline}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			curveLevel3 = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const graphTreeMapLevel3 = (graphContainer, dataLevel3Cooked) => {
	disciplines = [...new Set(dataLevel3Cooked.map(row => row["DisciplineCode"]))]
	let _chartdata = disciplines.map(disc => {
		let children = dataLevel3Cooked.filter(row => row["DisciplineCode"] == disc);
		return {
			[disc]: children
		}
	});

	let sum = dataLevel3Cooked.map(x => x["BaseBudgetMHRS"])
		.reduce((sum, x) => sum + x);

	const treemapLevel = (item) => {
		if (typeof item != 'array') {
			return {
				"name": item["MainActivities"],
				"code": item["NormIDLevel3"],
				"path": item["MainActivities"],
				"value": item["BaseBudgetMHRS"],
				"percent": item["BaseBudgetMHRS"] * 100 / sum,
			}
		}
		return {
			"name": key,
			"code": item["NormIDLevel2"],
			"path": key,
			"value": childrenSum,
			"percent": childrenSum * 100 / sum,
			"children": children.map(treemapLevel)
		}
	}

	let chartdata = _chartdata.map(item => {
		let key = Object.keys(item).toString();
		let children = Object.values(item)[0];
		let childrenSum = children.map(x => x["BaseBudgetMHRS"])
			.reduce((sum, x) => sum + x);

		return {
			"name": key,
			"path": key,
			"code": item["NormIDLevel2"],
			"value": childrenSum,
			"percent": childrenSum * 100 / sum,
			"children": children.map(treemapLevel)
		}
	});


	showTreeMapChart(graphContainer, "BUDGET LEVEL 2 CONTRIBUTES", "", chartdata)
}

const loadLevel3_Original = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/fetchLevel3_Original/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataLevel3 = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const tableLevel3 = (tableElement, dataLevel2Cooked) => {
	if (typeof table != 'undefined') {
		table.destroy()
	}
	table = $(tableElement).DataTable({
		data: dataLevel2Cooked,
		columns: [{
				data: "NormIDLevel4"
			},
			{
				data: "MainActivities"
			},
			{
				data: "BaseBudgetMHRS"
			},
			{
				data: "ActualMHRS"
			},
			{
				data: "ActualMHRS_WithoutOT"
			},
			{
				data: "ActualMHRS_OT"
			},
			{
				data: "ActualMHRS_Sunday"
			},
			{
				data: "ActualMHRS_Holiday"
			},
			{
				data: "EarnedMHRS"
			},
			{
				data: "VarMHRS"
			},
			{
				data: "WasteMHRS"
			},
			{
				data: "ActualProgress"
			},
			{
				data: "CPI"
			},
		],
		scrollX: true,
		columnDefs: [{
			"targets": [2, 3, 4, 5, 6, 7, 8, 9, 10],
			"render": function (data, type, row, meta) {
				return data.toLocaleString('en-US');
			}
		}, {
			"targets": [11],
			"data": 'ActualProgress',
			"render": function (data, type, row, meta) {
				let percent = data;
				if (Number.isNaN(percent) || percent == 0) {
					return (type === 'display') ?
						'<div class="progress" style="height: 20px; background: #bfbfbf;"><div role="progressbar" class="progress-bar bg-success active" style="overflow:visible; width:0%;">0%</div></div>' : percent;
				}
				return (type === 'display') ?
					'<div class="progress" style="height: 20px; background: #bfbfbf;"><div role="progressbar" class="progress-bar bg-success active" style="overflow:visible; width:' +
					percent + '%;">' + percent + '%</div></div>' : percent;
			}
		}, {
			"targets": [12],
			"data": 'CPI',
			"render": function (data, type, row, meta) {
				let bg = 'transparent';
				if (data > 1) {
					bg = '#28a745';
				} else if (data == 1) {
					bg = '#ffc107';
				} else {
					bg = '#dc3545';
				}
				return (type === 'display') ? `<span style="color: ${bg};">${data.toFixed(2)}</span>` : data.toFixed(2);
			}
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

const loadLevel4_Original = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/fetchLevel4_Original/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataLevel3 = response
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const loadConstData = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/fetchConstructionData/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataConst = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const tableConstData = (tableElement, dataConst) => {
	table = $(tableElement).DataTable({
		data: dataConst,
		columns: [{
				data: null
			},
			{
				data: "DisciplineCode"
			},
			{
				data: "NormIDLevel2"
			},
			{
				data: "NormIDLevel3"
			},
			{
				data: "NormIDLevel4"
			},
			{
				data: "ConstructionID"
			},
			{
				data: "Description"
			},
			{
				data: "BaseBudgetMHRS"
			},
			{
				data: "ActualMHRS"
			},
			{
				data: "ActualMHRS_WithoutOT"
			},
			{
				data: "ActualMHRS_OT"
			},
			{
				data: "ActualMHRS_Sunday"
			},
			{
				data: "ActualMHRS_Holiday"
			},
			{
				data: "EarnedMHRS"
			},
			{
				data: "VarMHRS"
			},
			{
				data: "WasteMHRS"
			},
			{
				data: "ActualProgress"
			},
			{
				data: "CPI"
			},
			{
				data: "Level"
			},
		],
		scrollX: true,
		columnDefs: [{
			"targets": [7, 8, 9, 10, 11, 12, 13, 14, 15],
			"render": function (data, type, row, meta) {
				return parseFloat(data).toLocaleString('en-US');
			}
		}, {
			"targets": [6],
			"className": "text-left"
		}, {
			"targets": [16],
			"data": 'ActualProgress',
			"render": function (data, type, row, meta) {
				let percent = parseFloat(data)
				if (Number.isNaN(percent) || percent == 0) {
					return (type === 'display') ?
						'<div class="progress" style="height: 20px; background: #bfbfbf;"><div role="progressbar" class="progress-bar bg-success active" style="overflow:visible; width:0%;">0%</div></div>' : percent;
				}

				return (type === 'display') ?
					'<div class="progress" style="height: 20px; background: #bfbfbf;"><div role="progressbar" class="progress-bar bg-success active" style="overflow:visible; width:' +
					percent + '%;">' + percent + '%</div></div>' : percent;
			}
		}, {
			"targets": [17],
			"data": 'CPI',
			"render": function (data, type, row, meta) {
				let bg = 'transparent';
				if (data > 1) {
					bg = '#28a745';
				} else if (data == 1) {
					bg = '#ffc107';
				} else {
					bg = '#dc3545';
				}
				return (type === 'display') ? `<span style="color: ${bg};">${parseFloat(data).toFixed(2)}</span>` : data;
			}
		}, {
			"targets": [18],
			"visible": false,
			"searchable": false
		}, {
			"targets": [0],
			"render": function (data, type, row, meta) {
				if (data['Level'] != '4') {
					return (type === 'display') ? '<i class="far fa-minus-square expander expanded"></i>' : null;
				}
				return null;

			}
		}],
		"deferRender": true,
		'searching': true,
		"paging": false,
		"ordering": false,
		"info": true,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
		createdRow: function (row, data, index) {
			if (data['Level'] == '4') {
				$(row).attr('level', 4)
			} else {
				$(row).attr('level', data['Level'])
				$(row).attr('collapsed', false)
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
			}
		]
	});

	// Position the buttons inside the toolbox
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	table.buttons().container().appendTo($(toolbox));

	//Custom expdander/ collapse

	customButtons($(table.table().container()));

}

const graphGauge = (graphElementID, gaugeValue) => {

	showGaugeChart(graphElementID, 'CPI', 'CPI', gaugeValue)
}

const graphProductivity = async (graphElementID, graphLabels, graphData, graphData2, graphData3) => {
	await showMultiAreaChart(graphElementID, '', graphLabels, graphData, graphData2, graphData3)
}

const exec_sp_workforces_weeks = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_Workforces_Weeks/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const getWorkforcesWeeks = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/getWorkforcesWeeks/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataWorkforces = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_Workforces_Manhours = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_Workforces_Manhours/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataManhours = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_Workforces_Manpower = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_Workforces_Manpower/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataManpower = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const graphWorkforcesHistogram = async (graphContainer, dataWorkforces, pediod = 'weekly') => {
	let firstDate = dataWorkforces[0]["FirstDate"]
	let maxDuration = dataWorkforces[0]["data"].length

	let labels = [];

	for (let i = 0; i < maxDuration; i++) {
		switch (period) {
			case 'weekly':
				labels.push(moment(firstDate).add(i, "weeks").format('DD/MM/YYYY'))
				break;
			case 'daily':
				labels.push(moment(firstDate).add(i, "days").format('DD/MM/YYYY'))
				break;
			case 'monthly':
				labels.push(moment(firstDate).add(i, "months").format('YYYY-MMM'))
				break;
		}
	}

	let dataGraph = dataWorkforces.map(x => {
		let title = `${x["DepartmentCode"]}-${x["TitleType"]}`
		return {
			[title]: x["data"]
		}
	})

	console.log(dataWorkforces);
	console.log(dataGraph);

	await showStackedBarChart(graphContainer, '', labels, dataGraph);
}

const graphWorkforceManpower = async (graphContainer, dataWorkforces, period = 'weekly') => {
	let firstDate = Date.parse(dataWorkforces[0]["FirstDate"])
	let maxWeek;
	let labels = [];

	for (let i = 0; i < 300; i++) {
		let _weekData = dataWorkforces.map(x => x['W_' + (i + 1)])

		if (Object.values(_weekData).every(x => x == null)) {
			maxWeek = i - 1;
			break;
		}

		labels.push(moment(firstDate + i * 7 * 24 * 3600 * 1000).format('DD/MM/YYYY'))
	}

	let dataGraph = dataWorkforces.map(x => {
		let weekData = []
		for (let i = 0; i < maxWeek; i++) {
			let _manhour = x['W_' + (i + 1)] ? parseFloat(x['W_' + (i + 1)]) : null;
			let _manpower = Math.ceil(_manhour / (6 * 8)) // 8 hours in 6 days

			weekData.push(_manpower)
		}

		return {
			[`${x["DepartmentCode"]}-${x["TitleType"]}`]: weekData
		}
	}).sort((a, b) => {
		if (Object.keys(a) < Object.keys(b))
			return -1;
		else
			return 1;

	});

	showStackedBarChart(graphContainer, '', labels, dataGraph);
}

const exec_sp_Heatmap = async (project, facility = null, discipline = null, budgetId = null) => {
	if (facility && discipline && budgetId) {
		await $.ajax({
			url: `${base_url}production_control/exec_sp_Heatmap/${project}/${facility}/${discipline}/${budgetId}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				heatmapData = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else if (facility && discipline) {
		await $.ajax({
			url: `${base_url}production_control/exec_sp_Heatmap/${project}/${facility}/${discipline}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				heatmapData = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else if (facility) {
		await $.ajax({
			url: `${base_url}production_control/exec_sp_Heatmap/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				heatmapData = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}production_control/exec_sp_Heatmap/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				heatmapData = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const exec_sp_HeatmapDepartment = async (project, facility, department) => {

	await $.ajax({
		url: `${base_url}production_control/exec_sp_HeatmapDepartment/${project}/${facility}/${department}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			heatmapData = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_SummarizeWOByDepartment = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_SummarizeWOByDepartment/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataSumDept = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const tableSummaryWODepartment = (tableElement, dataSumDept) => {
	table = $(tableElement).DataTable({
		data: dataSumDept,
		columns: [
			// { data: "ProjectCode"},
			// { data: "FacilityCode"},
			{
				data: "Department"
			},
			{
				data: "WorkOrder"
			},
			{
				data: "WOCompleted"
			},
			{
				data: "WONotComplete"
			},
			{
				data: "BaseBudgetMHRS"
			},
			{
				data: "ActualMHRS"
			},
			{
				data: "ActualMHRS_WithoutOT"
			},
			{
				data: "ActualMHRS_OT"
			},
			{
				data: "ActualMHRS_Sunday"
			},
			{
				data: "ActualMHRS_Holiday"
			},
			{
				data: "OvertimeMHRS"
			},
			{
				data: "WasteMHRS"
			},
			{
				data: "VarMHRS"
			}

		],
		// scrollX: true,
		columnDefs: [{
			"targets": [4, 5, 6, 7, 8, 9, 10, 11, 12],
			"render": function (data, type, row, meta) {
				return parseFloat(data).toLocaleString('en-US');
			}
		}],
		// "deferRender": true,
		'searching': false,
		"paging": false,
		"ordering": true,
		"info": false
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

	// Position the buttons inside the toolbox
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	table.buttons().container().appendTo($(toolbox));
}

const exec_sp_SummarizeWOByDiscipline = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_SummarizeWOByDiscipline/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataSumDisc = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const tableSummaryWODiscipline = (tableElement, dataSumDisc) => {
	table = $(tableElement).DataTable({
		data: dataSumDisc,
		columns: [
			// { data: "ProjectCode"},
			// { data: "FacilityCode"},
			{
				data: "Discipline"
			},
			{
				data: "WorkOrder"
			},
			{
				data: "WOCompleted"
			},
			{
				data: "WONotComplete"
			},
			{
				data: "BaseBudgetMHRS"
			},
			{
				data: "ActualMHRS"
			},
			{
				data: "ActualMHRS_WithoutOT"
			},
			{
				data: "ActualMHRS_OT"
			},
			{
				data: "ActualMHRS_Sunday"
			},
			{
				data: "ActualMHRS_Holiday"
			},
			{
				data: "OvertimeMHRS"
			},
			{
				data: "WasteMHRS"
			},
			{
				data: "VarMHRS"
			}

		],
		// scrollX: true,
		columnDefs: [{
			"targets": [4, 5, 6, 7, 8, 9, 10, 11, 12],
			"render": function (data, type, row, meta) {
				return parseFloat(data).toLocaleString('en-US');
			}
		}],
		// "deferRender": true,
		'searching': false,
		"paging": false,
		"ordering": true,
		"info": false
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

	// Position the buttons inside the toolbox
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	table.buttons().container().appendTo($(toolbox));
}

const exec_sp_ListWOByDiscipline = async (project, facility, discipline, status) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_ListWOByDiscipline/${project}/${facility}/${discipline}/${status}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataListDisc = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const tableListWODiscipline = (tableElement, dataListDisc) => {
	table = $(tableElement).DataTable({
		data: dataListDisc,
		columns: [
			// { data: "ProjectCode"},
			// { data: "FacilityCode"},
			{
				data: "Discipline"
			},
			{
				data: "WorkOrder"
			},
			{
				data: "WOCompleted"
			},
			{
				data: "WONotComplete"
			},
			{
				data: "BaseBudgetMHRS"
			},
			{
				data: "ActualMHRS"
			},
			{
				data: "ActualMHRS_WithoutOT"
			},
			{
				data: "ActualMHRS_OT"
			},
			{
				data: "ActualMHRS_Sunday"
			},
			{
				data: "ActualMHRS_Holiday"
			},
			{
				data: "OvertimeMHRS"
			},
			{
				data: "WasteMHRS"
			},
			{
				data: "VarMHRS"
			}

		],
		// scrollX: true,
		columnDefs: [{
			"targets": [4, 5, 6, 7, 8, 9, 10, 11, 12],
			"render": function (data, type, row, meta) {
				return parseFloat(data).toLocaleString('en-US');
			}
		}],
		// "deferRender": true,
		'searching': false,
		"paging": false,
		"ordering": true,
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

	// Position the buttons inside the toolbox
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	table.buttons().container().appendTo($(toolbox));
}

const graphSummaryDiscipline = (graphContainer, dataSumDisc) => {
	let count = dataSumDisc.length - 1;
	let labels = dataSumDisc.map(x => x['Discipline'])
		.slice(0, count);

	let budget = dataSumDisc.map(x => {
		let key = x['Discipline']
		return {
			[key]: parseFloat(x['BaseBudgetMHRS'])
		}
	}).slice(0, count);

	let actual = dataSumDisc.map(x => {
		let key = x['Discipline']
		return {
			[key]: parseFloat(x['ActualMHRS'])
		}
	}).slice(0, count);

	let data = [{
			"Budget MHRS": budget
		},
		{
			"Actual MHRS": actual
		}
	];

	showBarChartMulti(graphContainer, 'WORK ORDERS SUMMARY BY DISCIPLINES', labels, data);
}

const exec_sp_ListWO = async (project, facility, department, discipline, status, from, to) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_ListWO/${project}/${facility}/${department}/${discipline}/${status}/${from}/${to}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			dataListWO = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const tableListWO = (tableElement, dataListWO) => {
	table = $(tableElement).DataTable({
		data: dataListWO,
		columns: [
			// { data: "ProjectCode"},
			// { data: "FacilityCode"},

			{
				data: "WorkOrder"
			},
			{
				data: "WorkOrderName",
				width: "100px"
			},
			{
				data: "WOStatus"
			},
			{
				data: "Department"
			},
			{
				data: "Discipline"
			},
			{
				data: "PlanStartDate"
			},
			{
				data: "PlanFinishDate"
			},
			{
				data: "ActualStartDate"
			},
			{
				data: "ActualFinishDate"
			},
			{
				data: "WOCreatebyUserName"
			},
			{
				data: "BudgetMHRS"
			},
			{
				data: "ActualMHRS"
			},
			{
				data: "ActualMHRS_WithoutOT"
			},
			{
				data: "ActualMHRS_OT"
			},
			{
				data: "ActualMHRS_Sunday"
			},
			{
				data: "ActualMHRS_Holiday"
			},
			{
				data: "OvertimeMHRS"
			},
			{
				data: "WasteMHRS"
			},
			{
				data: "VarMHRS"
			}

		],
		scrollX: true,
		columnDefs: [{
			"targets": [10, 11, 12, 13, 14, 15, 16, 17, 18],
			"render": function (data, type, row, meta) {
				return parseFloat(data).toLocaleString('en-US');
			}
		}, {
			"targets": [5, 6, 7, 8],
			"render": function (data, type, row, meta) {
				return data != null ? moment(data).format('DD/MM/YYYY') : '';
			}
		}, {
			"targets": [2],
			"render": function (data, type, row, meta) {
				if (data == '1') {
					return '<span class="badge badge-success text-sm">Completed</span>';
				} else if (data == '0') {
					return '<span class="badge badge-warning text-sm">Ongoing</span>';
				}
			}
		}],
		"deferRender": true,
		'searching': true,
		"paging": true,
		"ordering": true,
		"info": true,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
		"lengthMenu": [
			[50, 100, -1],
			[50, 100, "All"]
		],
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

	// Position the buttons inside the toolbox
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	table.buttons().container().appendTo($(toolbox));
}

const graphSummaryDepartment = (graphContainer, dataSumDept) => {
	let count = dataSumDept.length - 1;
	let labels = dataSumDept.map(x => x['Department'])
		.slice(0, count);

	let budget = dataSumDept.map(x => {
		let key = x['Department']
		return {
			[key]: parseFloat(x['BaseBudgetMHRS'])
		}
	}).slice(0, count);

	let actual = dataSumDept.map(x => {
		let key = x['Department']
		return {
			[key]: parseFloat(x['ActualMHRS'])
		}
	}).slice(0, count);

	let data = [{
			"Budget MHRS": budget
		},
		{
			"Actual MHRS": actual
		}
	];

	showBarChartMulti(graphContainer, 'WORK ORDERS SUMMARY BY DEPARTMENTS', labels, data);
}

const getWODisciplines = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/getWODisciplines/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			disciplines = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const getWODepartments = async (project, facility) => {
	await $.ajax({
		url: `${base_url}production_control/getWODepartments/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			departments = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const getProductionPlan = async (project, facility, discipline = null, activityId = null) => {
	if (discipline && activityId) {
		await $.ajax({
			url: `${base_url}production_control/getProductionPlan/${project}/${facility}/${discipline}/${activityId}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataPlan = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else if (discipline) {
		await $.ajax({
			url: `${base_url}production_control/getProductionPlan/${project}/${facility}/${discipline}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataPlan = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}production_control/getProductionPlan/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataPlan = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}
}

const getProductionActual = async (project, facility, discipline = null, activityId = null) => {
	if (discipline && activityId) {
		await $.ajax({
			url: `${base_url}production_control/getProductionActual/${project}/${facility}/${discipline}/${activityId}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataActual = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else if (discipline) {
		await $.ajax({
			url: `${base_url}production_control/getProductionActual/${project}/${facility}/${discipline}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataActual = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}production_control/getProductionActual/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataActual = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const getProductionEarned = async (project, facility, discipline = null, activityId = null) => {
	if (discipline && activityId) {
		await $.ajax({
			url: `${base_url}production_control/getProductionEarned/${project}/${facility}/${discipline}/${activityId}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataEarned = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else if (discipline) {
		await $.ajax({
			url: `${base_url}production_control/getProductionEarned/${project}/${facility}/${discipline}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataEarned = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}production_control/getProductionEarned/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataEarned = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}
}

const exec_sp_ProductionPlan = async (project, facility, revision) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_ProductionPlan/${project}/${facility}/${revision}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_ProductionEarned = async (project, facility, revision) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_ProductionEarned/${project}/${facility}/${revision}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_ProductionPlanActual = async (project, facility, revision) => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_ProductionActual/${project}/${facility}/${revision}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_RollupMHRSConstructionID = async () => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_RollupMHRSConstructionID/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_RollupMHRSLevel1 = async () => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_RollupMHRSLevel1/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_RollupMHRSLevel2 = async () => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_RollupMHRSLevel2/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_RollupMHRSLevel3 = async () => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_RollupMHRSLevel3/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_RollupMHRSLevel4 = async () => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_RollupMHRSLevel4/${project}/${facility}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const exec_sp_AutoUpdate = async () => {
	await $.ajax({
		url: `${base_url}production_control/exec_sp_AutoUpdateProduction`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const fetchDashboardProductionPlan = async (project = null, facility = null) => {
	if (project && facility) {
		await $.ajax({
			url: `${base_url}production_control/fetchDashboardProductionPlan/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataPlan = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else if (project) {
		await $.ajax({
			url: `${base_url}production_control/fetchDashboardProductionPlan/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataPlan = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}production_control/fetchDashboardProductionPlan`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataPlan = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}
}

const fetchDashboardProductionActual = async (project = null, facility = null) => {
	if (project && facility) {
		await $.ajax({
			url: `${base_url}production_control/fetchDashboardProductionActual/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataActual = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else if (project) {
		await $.ajax({
			url: `${base_url}production_control/fetchDashboardProductionActual/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataActual = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}production_control/fetchDashboardProductionActual`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				dataActual = response;
			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}
//#endregion
