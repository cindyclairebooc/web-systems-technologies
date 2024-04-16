document.addEventListener("DOMContentLoaded", function() {
    const accountForm = document.getElementById("accountForm");
    const accountBody = document.getElementById("accountBody");

    accountForm.addEventListener("submit", function(event){
        event.preventDefault();

        const userName = document.getElementById('userName');
        const emailAdd = document.getElementById('emailAdd');
        const role = document.getElementById('role');

        appendValues(userName.value, emailAdd.value, role.value);

        userName.value = "";
        emailAdd.value = "";
        role.selectedIndex = 0;
    });

    function appendValues(userName, emailAdd, role) {    
        const appendedRow = document.createElement('tr');
        appendedRow.innerHTML = '<td>' + (accountBody.rows.length + 1) + '</td>' + '<td>' + userName + '</td>' + '<td>' + emailAdd + '</td>' 
        + '<td>' + role + '</td>' +
        '<td><button class="editButton bg-white text-blue-500 p-1"><i class="fas fa-edit"></i></button>' +
        '<button class="deleteButton bg-white text-red-500 p-1"><i class="fas fa-trash-alt"></i></button></td>';
        styleRow(appendedRow);
        accountBody.appendChild(appendedRow);
    }

    function styleRow(row) {
        const cells = row.querySelectorAll('td');
        cells.forEach((cell, index) => {
            if (index < cells.length - 1) {
                cell.style.borderRight = "1px solid #ddd";
            }
        })
    };

    accountBody.addEventListener('click', function(event){
        const target = event.target.closest('button');
        if (!target) return;

        const row = target.closest('tr');
        if (target.innerHTML.includes('fa-trash-alt')){
            row.remove();
        }
        else if(target.innerHTML.includes('fa-edit')){
            const userName = prompt('Edit name:', row.cells[1].textContent);
            const emailAdd = prompt('Edit email:', row.cells[2].textContent);

            if (userName !== null && emailAdd !== null) {
                row.cells[1].textContent = userName;
                row.cells[2].textContent = emailAdd;
            }
        }
    })
})
