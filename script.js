document.addEventListener('DOMContentLoaded', function() {

    // navigation am3lm
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.querySelectorAll('section').forEach(section => {
                section.style.display = section.id === targetId ? 'block' : 'none';
            });
        });
    });

   
    const slides = document.querySelectorAll('.slides img');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }

    document.getElementById('next').addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    document.getElementById('prev').addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    showSlide(currentIndex);

});

function Person(name, email) {
    this.name = name;
    this.email = email;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}. You can contact me at ${this.email}.`);
};

function Student(name, email, university) {
    Person.call(this, name, email);
    this.university = university;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
    console.log(`${this.name} is studying at ${this.university}.`);
};

const abderahim = new Student('Abderahim Mojahid', 'abderahim.mojahid21@gmail.com', 'Lobachevsky University');
abderahim.greet();
abderahim.study();
