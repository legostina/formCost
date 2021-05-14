let form = document.querySelector('.record');
let telephone = form.querySelector('.telephone');
let fields= form.querySelectorAll('.record-input__field');

let generateError = function (text) {
    let error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.style.position = 'absolute';
    error.style.right = "0";
    error.style.bottom = "4px";
    error.style.fontSize = "12px";
    error.innerHTML = text;
    return error;
};

let removeValidation = function () {
    let errors = form.querySelectorAll('.error');

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
};

let checkFieldsPresence = function () {
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blank', fields[i]);
            let error = generateError('*обязательное поле');
            form[i].parentElement.insertBefore(error, fields[i]);
        }
    }
};

form.addEventListener('submit', function (event) {
    event.preventDefault();
    removeValidation();
    checkFieldsPresence();
});

telephone.addEventListener('focus', _ => {
    if(!/^\+\d*$/.test(telephone.value))
        telephone.value = '+7';
});

telephone.addEventListener('keypress', e => {
    if(!/\d/.test(e.key))
        e.preventDefault();
});

