function getListContent(arrayPhone) {
    let result = [];

    arrayPhone.forEach(function (elem) {
      let phoneNumber = document.createElement('li');
      phoneNumber.className = 'phone__number';
      phoneNumber.append(elem);
      result.push(phoneNumber);
    });

    return result;
}
function phoneAppend(arrayPhone) {
    let phoneRecord = document.querySelector('.phone');
    phoneRecord.append(...getListContent(arrayPhone));
}

let arrayPhone = [
    'Телефон', 'Телефон', 'Телефон', 'Телефон'
];

phoneAppend(arrayPhone);
