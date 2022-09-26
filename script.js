// Adam Lee Prime Digital Academy Ramirez Cohort 22 September 2022

$(main);

let employees = [];

let totalMonthly = 0;

function main() {
    onInitialize();
}

function onInitialize() {
    // makes sure submit button works on startup
    $('#submitBtn').on('click', submitEmployee);

    $(document).on('click', '.deleteEm', removeEmployee);
}

function submitEmployee() {

    employee = {
        fName: $('#fName').val(),
        lName: $('#lName').val(),
        emID: $('#emID').val(),
        emTitle: $('#emTitle').val(),
        emSalary: $('#emSalary').val()
    };

    employees.push(employee);

    // calculate new total monthly
    totalMonthly += ($('#emSalary').val() / 12);
    // then change it visually on the DOM
    render();

    // reset text box values
    $('#fName').val('');
    $('#lName').val('');
    $('#emID').val('');
    $('#emTitle').val('');
    $('#emSalary').val('');

}

// main function for removing table rows and calculating Total Monthly deductions
function removeEmployee() {
    index = $(this).parent().parent().attr('id');
    employees.splice(index, 1);
    //button > td > tr > remove();
    $(this).parent().parent().remove();
    //              button >  td   >   tr   >   td[4]  > string > $**** > ****
    totalMonthly -= ($(this).parent().siblings('#emSal').text().slice(1) / 12);
    render();
}

// main function to change the Total Monthly element
function changeMonthly() {
    totalMonthly = Math.round(totalMonthly * 100) / 100;

    $('#totalSection h2').remove();
    $('#totalSection').append(`
        <h2> Total Monthly: $${totalMonthly} </h2>
    `)
    
    //if it toggles, it can mirror itself
    totalMonthly > 20000 ? $('#totalSection h2').toggleClass('overLimit') : null ;
}

function render() {
    $('#emBody').empty();

    for(let i=0; i<employees.length; ++i) {
        $('#emBody').append(`
            <tr id=${i}>
                <td>${employees[i].fName}</td>
                <td>${employees[i].lName}</td>
                <td>${employees[i].emID}</td>
                <td>${employees[i].emTitle}</td>
                <td id="emSal">$${employees[i].emSalary}</td>
                <td><button class="deleteEm">Delete</button></td>
            </tr>
        `)
    }
    changeMonthly();
}