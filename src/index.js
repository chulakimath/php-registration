function setMinDate() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("dob").setAttribute("max", today);
}
function calculateAge(dateOfBirth) {
    let today = new Date();
    let dob = new Date(dateOfBirth);
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById("age").value = age;
    return
}
// age
let age = '';
document.getElementById('dob').onchange = () => {
    let dob = document.getElementById('dob').value;
    calculateAge(dob);
}

document.getElementById("myform").addEventListener('submit', function (event) {
    let toggle = false;
    const regForName = /[^A-Za-z\s]/;
    // name
    let name = document.getElementById("name").value.trim();
    if (regForName.test(name) || name == '') {
        toggle = true;
        document.getElementById('nameSpan').innerText = '* !invalid Name'
    } else {
        document.getElementById('nameSpan').innerText = '*'
    }
    // chk age
    if (!(document.getElementById('dob').value)) {
        document.getElementById('ageSpan').textContent = 'Select dob';
    } else {
        document.getElementById('ageSpan').textContent = '';
    }
    // gender
    let gender = '';
    let genderRadio = document.querySelectorAll('input[name="gender"]');
    genderRadio.forEach(radio => {
        if (radio.checked) {
            gender = radio.value;
        }
    })
    if (!gender) {
        toggle = true;
        document.getElementById('genderSpan').innerText = '* Select Gender'
    }
    else {
        document.getElementById('genderSpan').innerText = '*'
    }
    // email
    let email = document.getElementById("email").value;
    const regForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regForEmail.test(email)) {
        toggle = true;
        document.getElementById('emailSpan').innerText = '*invalid email'
    }
    else {
        document.getElementById('emailSpan').innerText = '*'
    }

    // password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    let password = document.getElementById('password').value;
    if (!passwordRegex.test(password)) {
        toggle = true;
        document.getElementById('passwordSpan').textContent = '*should contain 8 length and splcharacter number and uppercase and lower case'
    } else {
        document.getElementById('passwordSpan').textContent = '*'
    }

    // confirm
    let confirm = document.getElementById('confirm').value;
    if (confirm !== password) {
        toggle = true;
        document.getElementById('confirmSpan').textContent = 'Password dont match'
    } else {
        document.getElementById('confirmSpan').textContent = '*'
    }
    // phone
    const phoneRegex = /^[6-9]\d{9}$/;
    let phone = document.getElementById("phone").value;
    if (!phoneRegex.test(phone)) {
        toggle = true;
        document.getElementById('phoneSpan').textContent = 'invalid Phone Number '
    } else {
        document.getElementById('phoneSpan').textContent = '*'
    }

    //address
    if(!document.getElementById("address").value){
        document.getElementById('addressSpan').textContent='* Add your address'
    }else{
        document.getElementById('addressSpan').textContent='*'
    }

    // state
    let selectElement = document.getElementById('state');
    let selectedOptionText = selectElement.options[selectElement.selectedIndex].text;
    if (selectedOptionText === '--select--') {
        toggle = true;
        document.getElementById('stateSpan').textContent = '*Select State';
    } else {
        document.getElementById('stateSpan').textContent = '*';
    }

    // courses
    let checkboxes = document.querySelectorAll('input[name="courses[]"]');
    let checkedCheckboxes = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCheckboxes.push(checkbox.value);
        }
    });
    console.log(checkedCheckboxes.length)
    if (checkedCheckboxes.length <= 0) {
        document.getElementById('courseSpan').textContent = '*Select atleast one course';
    } else {
        document.getElementById('courseSpan').textContent = '*'
    }
    if (toggle) {
        event.preventDefault();
    }
})