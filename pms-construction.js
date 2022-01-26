//#region EIT

const execElectricalCablesBySystem = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalCablesBySystem/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				cablesBySystem = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalCablesBySystem/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				cablesBySystem = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const tableElectricalCablesBySystem = (tableElement, dataElectricalCables) => {
	if (typeof table != 'undefined') {
		table.clear();
		table.destroy();
	}

	table = $(tableElement).DataTable({
		data: dataElectricalCables,
		columns: [{
				data: null
			},
			{
				data: "FacilityCode"
			},
			{
				data: "SystemNo"
			},
			{
				data: "SystemDescription"
			},
			{
				data: "SubSystemNo"
			},
			{
				data: "SubSystemDescription"
			},
			{
				data: "DesignedLength"
			},
			{
				data: "ActualLength"
			},
			{
				data: "Total"
			},
			{
				data: "Pulled"
			},
			{
				data: "Glanded"
			},
			{
				data: "Terminated"
			},
			{
				data: "Tested"
			},
			{
				data: "Completed"
			},
			// {
			// 	data: "QCAccepted"
			// },
			// {
			// 	data: "ITRA_Accepted"
			// }
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
		}],
		createdRow: function (row, data, index) {
			$(row).attr('level', data['Level'])

			if (data['Level'] != '4') {
				$(row).attr('collapsed', false)
			}
		},
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
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table.buttons().container().appendTo($(toolbox));

	customButtons($(table.table().container()));
}

const execElectricalCablesByLocation = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalCablesByLocation/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				cablesByLocation = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalCablesBySystem/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				cablesByLocation = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const tableElectricalCablesByLocation = (tableElement, dataElectricalCables) => {
	if (typeof table1 != 'undefined') {
		table1.clear();
		table1.destroy();
	}

	table1 = $(tableElement).DataTable({
		data: dataElectricalCables,
		columns: [{
				data: "FacilityCode"
			},
			{
				data: "ToLocation"
			},
			{
				data: "DesignedLength"
			},
			{
				data: "ActualLength"
			},
			{
				data: "Total"
			},
			{
				data: "Pulled"
			},
			{
				data: "Glanded"
			},
			{
				data: "Terminated"
			},
			{
				data: "Tested"
			},
			{
				data: "Completed"
			},
			// {
			// 	data: "QCAccepted"
			// },
			// {
			// 	data: "ITRA_Accepted"
			// }
		],
		scrollX: true,
		columnDefs: [{
			// "targets": [5, 6],
			// "render": function (data, type, row, meta) {
			// 	return data;
			// }
		}],
		createdRow: function (row, data, index) {
			$(row).attr('level', data['Level'])
		},
		'searching': false,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table1, {
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

	// Position the buttons at the bottom of the table
	toolbox = $(table1.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table1.buttons().container().appendTo($(toolbox));
}

const execElectricalCablesByDrum = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalCablesByDrum/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				cablesByDrum = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalCablesByDrum/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				cablesByDrum = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const tableElectricalCablesByDrum = (tableElement, dataElectricalCables) => {
	if (typeof table2 != 'undefined') {
		table2.clear();
		table2.destroy();
	}

	table2 = $(tableElement).DataTable({
		data: dataElectricalCables,
		columns: [{
				data: null
			},
			{
				data: "FacilityCode"
			},
			{
				data: "CableName"
			},
			{
				data: "CableType"
			},
			{
				data: "NumberOfCore"
			},
			{
				data: "Size_Sqmm"
			},
			{
				data: "DrumNo"
			},
			{
				data: "Length_Mtrs"
			},
			{
				data: "NewDrumNo"
			},
			{
				data: "ActualLength_m"
			},
			{
				data: "FromNo_m"
			},
			{
				data: "ToNo_m"
			},
			{
				data: "CablePullingWONo"
			},
			{
				data: "DatePulling"
			}
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
		}, {
			"targets": [13],
			"render": function (data, type, row, meta) {
				return data ? moment(data).format('DD/MM/YYYY') : '';
			}
		}],
		createdRow: function (row, data, index) {
			$(row).attr('level', data['Level'])

			if (data['Level'] != '4') {
				$(row).attr('collapsed', false)
			}
		},
		'searching': false,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table2, {
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

	// Position the buttons at the bottom of the table
	toolbox = $(table2.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table2.buttons().container().appendTo($(toolbox));

	customButtons($(table2.table().container()));
}

const execElectricalCablesByDate = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalCablesByDate/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				cablesByDate = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalCablesByDate/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				cablesByDate = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const execElectricalSupportsByType = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalSupportsByType/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				supportsByType = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalSupportsByType/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				supportsByType = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const tableElectricalSupportsByType = (tableElement, dataElectricalSupports) => {
	if (typeof table != 'undefined') {
		table.clear();
		table.destroy();
	}

	table = $(tableElement).DataTable({
		data: dataElectricalSupports,
		columns: [{
				data: "FacilityCode"
			},
			{
				data: "SupportType"
			},
			{
				data: "Total"
			},
			{
				data: "Weight_kg"
			},
			{
				data: "Painting_m2"
			},
			{
				data: "Fabricated"
			},
			{
				data: "Painted"
			},
			{
				data: "FitUp"
			},
			{
				data: "Installed"
			},
			// {
			// 	data: "QCRequested"
			// },
			// {
			// 	data: "QCAccepted"
			// }
		],
		scrollX: true,
		columnDefs: [{
			// "targets": [5, 6],
			// "render": function (data, type, row, meta) {
			// 	return data;
			// }
		}],
		createdRow: function (row, data, index) {
			$(row).attr('level', data['Level'])
		},
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
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table.buttons().container().appendTo($(toolbox));
}

const execElectricalSupportsByLocation = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalSupportsByLocation/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				supportsByLocation = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalSupportsByLocation/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				supportsByLocation = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const tableElectricalSupportsByLocation = (tableElement, dataElectricalSupports) => {
	if (typeof table1 != 'undefined') {
		table1.clear();
		table1.destroy();
	}

	table1 = $(tableElement).DataTable({
		data: dataElectricalSupports,
		columns: [{
				data: "FacilityCode"
			},
			{
				data: "Location"
			},
			{
				data: "Total"
			},
			{
				data: "Weight_kg"
			},
			{
				data: "Painting_m2"
			},
			{
				data: "Fabricated"
			},
			{
				data: "Painted"
			},
			{
				data: "FitUp"
			},
			{
				data: "Installed"
			},
			// {
			// 	data: "QCRequested"
			// },
			// {
			// 	data: "QCAccepted"
			// }
		],
		scrollX: true,
		columnDefs: [{
			// "targets": [5, 6],
			// "render": function (data, type, row, meta) {
			// 	return data;
			// }
		}],
		createdRow: function (row, data, index) {
			$(row).attr('level', data['Level'])
		},
		'searching': false,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table1, {
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

	// Position the buttons at the bottom of the table
	toolbox = $(table1.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table1.buttons().container().appendTo($(toolbox));
}

const execElectricalSupportsByDate = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalSupportsByDate/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				supportsByDate = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalSupportsByDate/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				supportsByDate = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const execElectricalTrayLaddersByType = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalTrayLaddersByType/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				trayLaddersByType = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalTrayLaddersByType/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				trayLaddersByType = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const tableElectricalTrayLaddersByType = (tableElement, dataElectricalTrayLadders) => {
	if (typeof table1 != 'undefined') {
		table1.clear();
		table1.destroy();
	}

	table1 = $(tableElement).DataTable({
		data: dataElectricalTrayLadders,
		columns: [{
				data: null
			},
			{
				data: "FacilityCode"
			},
			{
				data: "Type"
			},
			{
				data: "Unit"
			},
			{
				data: "Size"
			},
			{
				data: "Total"
			},
			{
				data: "Weight_kg"
			},
			{
				data: "Completed"
			},
			// {
			// 	data: "QCAccepted"
			// }
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
		}, {
			"targets": [5, 7],
			"render": function (data, type, row, meta) {
				return data && !isNaN(parseInt(data)) ? parseInt(data) : 0;

			}
		}],
		createdRow: function (row, data, index) {
			$(row).attr('level', data['Level'])

			if (data['Level'] != '4') {
				$(row).attr('collapsed', false)
			}
		},
		'searching': true,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table1, {
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

	// Position the buttons at the bottom of the table
	toolbox = $(table1.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table1.buttons().container().appendTo($(toolbox));

	customButtons($(table1.table().container()));
}

const execElectricalTrayLaddersByLocation = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalTrayLaddersByLocation/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				trayLaddersByLocation = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalTrayLaddersByLocation/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				trayLaddersByLocation = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const tableElectricalTrayLaddersByLocation = (tableElement, dataElectricalTrayLadders) => {
	if (typeof table != 'undefined') {
		table.clear();
		table.destroy();
	}

	table = $(tableElement).DataTable({
		data: dataElectricalTrayLadders,
		columns: [{
				data: null
			},
			{
				data: "FacilityCode"
			},
			{
				data: "Location"
			},
			{
				data: "Type"
			},
			{
				data: "Unit"
			},
			{
				data: "Size"
			},
			{
				data: "Total"
			},
			{
				data: "Weight_kg"
			},
			{
				data: "Completed"
			},
			// {
			// 	data: "QCAccepted"
			// }
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
		}, {
			"targets": [6, 8],
			"render": function (data, type, row, meta) {
				return data && !isNaN(parseInt(data)) ? parseInt(data) : 0;

			}
		}],
		createdRow: function (row, data, index) {
			$(row).attr('level', data['Level'])

			if (data['Level'] != '4') {
				$(row).attr('collapsed', false)
			}
		},
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
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table.buttons().container().appendTo($(toolbox));

	customButtons($(table.table().container()));
}

const execElectricalEquipmentBySystem = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalEquipmentBySystem/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				equipmentBySystem = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalEquipmentBySystem/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				equipmentBySystem = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const tableElectricalEquipmentBySystem = (tableElement, dataElectricalEquipment) => {
	if (typeof table != 'undefined') {
		table.clear();
		table.destroy();
	}

	table = $(tableElement).DataTable({
		data: dataElectricalEquipment,
		columns: [{
				data: null
			},
			{
				data: "FacilityCode"
			},
			{
				data: "SystemNo"
			},
			{
				data: "SystemDescription"
			},
			{
				data: "SubSystemNo"
			},
			{
				data: "SubSystemDescription"
			},
			{
				data: "Total"
			},
			{
				data: "ITRQty"
			},
			{
				data: "Tested"
			},
			{
				data: "Installed"
			},
			// {
			// 	data: "QCAccepted"
			// },
			// {
			// 	data: "ClientAccepted"
			// },
			// {
			// 	data: "ITRAAccepted"
			// }
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
		}, {
			"targets": [6, 7, 8, 9],
			"render": function (data, type, row, meta) {
				return data && !isNaN(parseInt(data)) ? parseInt(data) : 0
			}
		}],
		createdRow: function (row, data, index) {
			$(row).attr('level', data['Level'])

			if (data['Level'] != '4') {
				$(row).attr('collapsed', false)
			}
		},
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
			}
		]
	});

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table.buttons().container().appendTo($(toolbox));

	customButtons($(table.table().container()));
}

const execElectricalEquipmentByLocation = async (project, facility = null) => {
	if (facility) {
		await $.ajax({
			url: `${base_url}electrical/execElectricalEquipmentByLocation/${project}/${facility}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				equipmentByLocation = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	} else {
		await $.ajax({
			url: `${base_url}electrical/execElectricalEquipmentByLocation/${project}`,
			type: 'POST',
			data: [],
			dataType: 'json',
			dataFilter: function (res) {
				// console.log(res);
				return res;
			},
			success: function (response) {
				// console.log(response);
				equipmentByLocation = response;

			},
			complete: function (data) {

			},
			error: function (error) {
				console.log(error);
			}
		});
	}

}

const tableElectricalEquipmentByLocation = (tableElement, dataElectricalEquipment) => {
	if (typeof table1 != 'undefined') {
		table1.clear();
		table1.destroy();
	}

	table1 = $(tableElement).DataTable({
		data: dataElectricalEquipment,
		columns: [{
				data: "FacilityCode"
			},
			{
				data: "Location"
			},
			{
				data: "Total"
			},
			{
				data: "ITRQty"
			},
			{
				data: "Tested"
			},
			{
				data: "Installed"
			},
			// {
			// 	data: "QCAccepted"
			// },
			// {
			// 	data: "ClientAccepted"
			// },
			// {
			// 	data: "ITRAAccepted"
			// }
		],
		scrollX: true,
		columnDefs: [{
			"targets": [2, 3, 4, 5],
			"render": function (data, type, row, meta) {
				return data && !isNaN(parseInt(data)) ? parseInt(data) : 0
			}
		}],
		createdRow: function (row, data, index) {

		},
		'searching': false,
		"paging": false,
		"ordering": false,
		"info": false,
		"scrollX": "100%",
		"scrollY": "75vh",
		"scrollCollapse": true,
	});

	// Add plugin functions to table
	new $.fn.dataTable.Buttons(table1, {
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

	// Position the buttons at the bottom of the table
	toolbox = $(table.table().container()).parents('.chart-tile').find('.toolbox');
	toolbox.html("")
	table1.buttons().container().appendTo($(toolbox));

	customButtons($(table1.table().container()));
}

const execElectricalDashboard = async (project) => {
	await $.ajax({
		url: `${base_url}electrical/execElectricalDashboard/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			electricalDashboard = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const graphFacilityHistogram = async (element, dataHistogram) => {
	console.log(element);
	console.log(dataHistogram);
}

const tablePlanHistogram = async (element, dataHistogram) => {
	console.log(element);
	console.log(dataHistogram);
}

const tableActualHistogram = async (element, dataHistogram) => {
	console.log(element);
	console.log(dataHistogram);
}


//#endregion


//#region Generals
const graphProgress = async (graphElementID, graphLabels, graphData) => {
	await showMultiLineChart(graphElementID, '', graphLabels, graphData)
}


//#endregion
