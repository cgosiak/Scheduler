global.$ = require("./jquery-3.2.1.min");

var employees = [];

$( document ).ready(function() {
    loadEmployees();
});

$(document).on(
	"click",
	"#addEmployee",
	function(){
		// Open add employee modal
});

function loadEmployees() {
	var employees = [
		{
			Name: "Caleb Gosiak",
			Status: "Full Time"
		},
		{
			Name: "Tessa Gosiak",
			Status: "Part Time"
		},
		{
			Name: "John Sweep",
			Status: "Full Time"
		}
	];
	employees.forEach(function(employee) {
		addEmployee(employee);
	});
}

function createEmployee() {
	var employee = {
		Name: "Employee " + employees.length
	}
	addEmployee(employee);
}

function addEmployee(employee) {
	$("#employees").append(getEmployeeCard(employee));
	employees.push(employee);
}

function getEmployeeCard(employee) {
	var employeeCard = '<div class="employee-card mdl-card mdl-shadow--2dp">\
        					<div class="mdl-card__title mdl-card--expand">\
          						<h2 class="mdl-card__title-text">' + employee.Name + '</h2>\
        					</div>\
        					<div class="mdl-card__supporting-text">\
          						Employee Type: ' + employee.Status + '\
        					</div>\
							<div class="mdl-card__actions mdl-card--border">\
								<a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" id="testButton">\
									View Updates\
								</a>\
							</div>\
						</div>';

	return employeeCard;
}