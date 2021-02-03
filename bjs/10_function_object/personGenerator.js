const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",  
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    
    patronymMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрич",
            "id_2": "Максимович",
            "id_3": "Иванич",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Святославович",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    jobMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Юрист",
            "id_2": "Водитель-экспедитор",
            "id_3": "Программист",
            "id_4": "Сантехник",
            "id_5": "Электрик",
            "id_6": "Преподаватель",
            "id_7": "Военнослужащий",
            "id_8": "Моряк",
            "id_9": "Маркетолог",
            "id_10": "Музыкант"
        }
    }`,

    firstNameFelJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ирина",
            "id_2": "Варвара",
            "id_3": "Ксения",
            "id_4": "Елена",
            "id_5": "Вероника",
            "id_6": "Людмила",
            "id_7": "Ева",
            "id_8": "Юлия",
            "id_9": "Мария",
            "id_10": "Екатерина"
        }
    }`,
    patronymFemJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Анатольевна",
            "id_3": "Андреевна",
            "id_4": "Васильевна",
            "id_5": "Максимовна",
            "id_6": "Вячеславовна",
            "id_7": "Юрьевна",
            "id_8": "Константиновна",
            "id_9": "Витальевна",
            "id_10": "Ивановна"
        }
    }`,
    jobFemJson: `{
        "count": 10,
        "list": {     
            "id_1": "Cтилист",
            "id_2": "Парикмахер",
            "id_3": "Кассир",
            "id_4": "Бухгалтер",
            "id_5": "Экономист",
            "id_6": "Стюардесса",
            "id_7": "Дизайнер",
            "id_8": "Менеджер",
            "id_9": "Финансист",
            "id_10": "Переводчик"
        }
    }`,

    monthJson: `{
        "count": 10,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    

    randomFirstName: function() {
        if(this.person.gender == this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson); 
        }
        else{
            return this.randomValue(this.firstNameFelJson);
       }
        
    },


     randomSurname: function() {
        
        if(this.person.gender == this.GENDER_MALE){
            return this.randomValue(this.surnameJson); 
        }
        else{
            return this.randomValue(this.surnameJson) + 'а';
       }

    },
     
    randomPatronym: function() {

     if(this.person.gender == this.GENDER_MALE) {
          return this.randomValue(this.patronymMaleJson); 
     }
        else { 
         return this.randomValue(this.patronymFemJson);
       }

    },
    randomJob: function() {

        if(this.person.gender == this.GENDER_MALE) {
             return this.randomValue(this.jobMaleJson); 
        }
           else { 
            return this.randomValue(this.jobFemJson);
          }
   
       },


       randomMonth: function() {
           
            return this.randomValue(this.monthJson); 
       
    },

    randomGender: function() {

        return Math.round(Math.random()*1) ? this.GENDER_FEMALE : this.GENDER_MALE;

    },

    randomYear: function(){
        return this.randomIntNumber(2018, 1952) + ' год рождения';
    },


    randomDate: function() {
        if ((this.person.month == "Апреля") || (this.person.month == "Июня") || (this.person.month == "Сентября") || (this.person.month == "Ноября")) {
            return this.randomIntNumber(30, 1);
        }
         else if (this.person.month == "Февраля") {
            return  this.randomIntNumber(28, 1);
         }
         else ((this.person.month == "Января") || (this.person.month == "Марта") || (this.person.month == "Мая") || (this.person.month == "Июля") || (this.person.month == "Августа") || (this.person.month == "Октября") || (this.person.month == "Декабря")); {
            return this.randomIntNumber(31, 1);
        }

    },


    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.year = this.randomYear();
        this.person.surname = this.randomSurname();
        this.person.patronym = this.randomPatronym();
        this.person.job = this.randomJob();
        this.person.date = this.randomDate();
        this.person.month = this.randomMonth();
          

        
        return this.person;
    },

   
};

 