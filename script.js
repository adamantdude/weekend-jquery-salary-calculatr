$(main);

let totalMonthly = 0;

function main() {
    onInitialize();
}

function onInitialize() {
    $('#submitBtn').on('click', submitEmployee);
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

    totalMonthly += Math.floor($('#emSalary').val() / 12);

    changeMonthly();

    // reset text box values
    $('#fName').val('');
    $('#lName').val('');
    $('#emID').val('');
    $('#emTitle').val('');
    $('#emSalary').val('');

    dynamicListener();
}

function dynamicListener() {
    $('.deleteEm').off('click');
    $('.deleteEm').on('click', removeEmployee);
}

function removeEmployee() {
    //button > td > tr > remove();
    $(this).parent().parent().remove();
    //button > td > tr > td(6) > td[4] > string > $**** > ****
    //let subMonthly = $(this).parent().parent().children().slice(4,5).text().slice(1);
    //totalMonthly -= subMonthly;
    totalMonthly -= Math.floor($(this).parent().parent().children().slice(4,5).text().slice(1)/12);
    changeMonthly();
}

function changeMonthly() {

    $('#totalSection h2').remove();
    $('#totalSection').append(`
        <h2> Total Monthly: $${totalMonthly} </h2>
    `)
    
    //if it toggles, it can mirror itself
    totalMonthly > 20000 ? $('#totalSection h2').toggleClass('overLimit') : null ;
}