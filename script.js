// Adam Lee Prime Digital Academy Ramirez Cohort 22 September 2022

$(main);

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
    $('#emBody').append(`
        <tr>
            <td>${$('#fName').val()}</td>
            <td>${$('#lName').val()}</td>
            <td>${$('#emID').val()}</td>
            <td>${$('#emTitle').val()}</td>
            <td>$${$('#emSalary').val()}</td>
            <td><button class="deleteEm">Delete</button></td>
        </tr>
    `)

    // calculate new total monthly
    totalMonthly += ($('#emSalary').val() / 12);
    // then change it visually on the DOM
    changeMonthly();

    // reset text box values
    $('#fName').val('');
    $('#lName').val('');
    $('#emID').val('');
    $('#emTitle').val('');
    $('#emSalary').val('');

}

// main function for removing table rows and calculating Total Monthly deductions
function removeEmployee() {
    //button > td > tr > remove();
    $(this).parent().parent().remove();
    //              button >  td   >   tr   >  td(6)  >   td[4]  > string > $**** > ****
    totalMonthly -= ($(this).parent().parent().children().slice(4,5).text().slice(1)/12);
    changeMonthly();
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