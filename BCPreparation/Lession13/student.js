class Student{
    constructor(fn, gender, dob, avatar){
        this.fullname = fn,
        this.gender = gender,
        this.dob = dob,
        this.avatar = avatar
    }
}

// let st1 = new Student("Chính", "Male", "01/01/2000", '/images/student_1.jpg');
// let st2 = new Student("Huy", "Male", "01/01/2000", '/images/student_2.jpg');
// let st3 = new Student("Phan Anh", "Male", "01/01/2000", '/images/student_3.jpg');
// let st4 = new Student("Hòa", "Male", "01/01/2000", '/images/student_4.jpg');

// let students = [st1, st2, st3, st4];
// let students = [
//     new Student("Chính", "Male", "01/01/2000", '/images/student_1.jpg'),
//     new Student("Huy", "Male", "01/01/2000", '/images/student_2.jpg'),
//     new Student("Phan Anh", "Male", "01/01/2000", '/images/student_3.jpg'),
//     new Student("Hòa", "Male", "01/01/2000", '/images/student_4.jpg')
// ]

let students = [];

function init(){
    if(window.localStorage.getItem('student_db') == null){
        students = [
                new Student("Chính", "Male", "01/01/2000", '/images/student_1.jpg'),
                new Student("Huy", "Male", "01/01/2000", '/images/student_2.jpg'),
                new Student("Phan Anh", "Male", "01/01/2000", '/images/student_3.jpg'),
                new Student("Hòa", "Male", "01/01/2000", '/images/student_4.jpg')
            ]
        window.localStorage.setItem('student_db', JSON.stringify(students));
    }
    else{
        students = JSON.parse(window.localStorage.getItem('student_db'));
    }
}

function showStudent(){
    let student_area = document.getElementById('student-area');
    students.forEach(function(std, index){
        student_area.innerHTML += `
                                <div class="card">
                                    <div class="card-header">
                                        <h2>${std.fullname}</h2>
                                    </div>
                                    <div class="card-body">
                                        <img src="${std.avatar}">
                                        <h5>${std.gender}</h5>
                                        <h5>${std.dob}</h5>
                                    </div>
                                    <div class="card-foot">
                                        <button class="btn btn-success">View profile</button>
                                    </div>
                                </div>`;
    });
    // for(let i=0; i< students.length; i++){
    //         student_area.innerHTML += `
    //                             <div class="card">
    //                                 <div class="card-header">
    //                                     <h2>${students[i].fullname}</h2>
    //                                 </div>
    //                                 <div class="card-body">
    //                                     <img src="${students[i].avatar}">
    //                                     <h5>${students[i].gender}</h5>
    //                                     <h5>${students[i].dob}</h5>
    //                                 </div>
    //                                 <div class="card-foot">
    //                                     <button class="btn btn-success">View profile</button>
    //                                 </div>
    //                             </div>`;
    // }
}


function ready(){
    init();
    showStudent();
}

ready();

