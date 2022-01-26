const execObservationFailure = async (project) => {
	await $.ajax({
		url: `${base_url}qaqc/getObservationFailure/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			observationFailure = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const execObservationCategory = async (project) => {
	await $.ajax({
		url: `${base_url}qaqc/getObservationCategory/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			observationCategory = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}

const execObservationSubject = async (project) => {
	await $.ajax({
		url: `${base_url}qaqc/getObservationSubject/${project}`,
		type: 'POST',
		data: [],
		dataType: 'json',
		dataFilter: function (res) {
			// console.log(res);
			return res;
		},
		success: function (response) {
			// console.log(response);
			observationSubject = response;
		},
		complete: function (data) {

		},
		error: function (error) {
			console.log(error);
		}
	});
}