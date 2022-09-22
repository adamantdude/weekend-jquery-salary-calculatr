$(main);

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
            <td>${$('#emSalary').val()}</td>
            <td><button class="deleteEm">Delete</button></td>
        </tr>
    `)
    dynamicListener();
}

function dynamicListener() {
    $('.deleteEm').off('click');
    $('.deleteEm').on('click', removeEmployee);
}

function removeEmployee() {
    //button > td > tr > remove();
    $(this).parent().parent().remove();
}