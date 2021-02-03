
 document.getElementById('start').addEventListener('click',function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.year;
    document.getElementById('patronymOutput').innerText = initPerson.patronym;
    document.getElementById('jobOutput').innerText = initPerson.job;
    document.getElementById('dateOutput').innerText = initPerson.date;
    document.getElementById('monthOutput').innerText = initPerson.month;
})

 document.getElementById('clear').addEventListener('click', function () {
	document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('patronymOutput').innerText = "";
    document.getElementById('jobOutput').innerText = "";
    document.getElementById('dateOutput').innerText = "";
    document.getElementById('monthOutput').innerText = "";
})


