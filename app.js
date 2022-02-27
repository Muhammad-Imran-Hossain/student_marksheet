
const add_new_std = document.querySelector('.add');
const input = document.querySelectorAll('input');
const list = document.querySelector('#list');



add_new_std.addEventListener('click',function(){

    let nam = document.querySelector('.name');
    let roll = document.querySelector('.roll');
    let cls = document.querySelector('.class');
    let photo = document.querySelector('.photo');
    let gen = document.querySelector('input[type="radio"]:checked');
    let ban = document.querySelector('input[placeholder="Bangla"]');
    let eng = document.querySelector('input[placeholder="English"]');
    let phy = document.querySelector('input[placeholder="Physics"]');
    let che = document.querySelector('input[placeholder="Chemistry"]');
    let bio = document.querySelector('input[placeholder="Biology"]');
    let math = document.querySelector('input[placeholder="Math"]');




    if( nam.value == '' || roll.value == '' || cls.value == '' ){
        alert('Please Fill All Box')
      
    }else{

        let storage_data = [];
        if(dataGet('result_app')){
            storage_data = dataGet('result_app');
        }

        storage_data.push({
            name    : nam.value,
            roll    : roll.value,
            cls     : cls.value,
            photo   : photo.value,
            gender  : gen.value,
            bangla  : ban.value,
            english : eng.value,
            physics  : phy.value,
            chemistry : che.value,
            biology   : bio.value,
            math    : math.value
        });


        dataSend('result_app',storage_data);

        nam.value = '';
        roll.value = '';
        cls.value = '';
        photo.value = '';
        gen.checked = false;
        ban.value = '';
        eng.value = '';
        phy.value = '';
        che.value = '';
        bio.value = '';
        math.value = '';
    }
    studentData();


 
});

studentData();

function studentData(){

    let all_data = dataGet('result_app');
    let data = '';
    all_data.map( (student,index) => {
        data +=`
            <tr>
                <td>${ index+1}</td>
                <td>${ student.name}</td>
                <td>${ student.roll}</td>
                <td>${ student.cls}</td>
                <td>${ student.gender}</td>
                <td>A+</td>
                <td>5.00</td>
                <td> <img src="${ student.photo}"></td>
                <td>
                    <button onclick="resultView(${index})" class="view">View</button>
                    <button  onclick="deleteStudent(${index})" class="delete">Delete</button>
                </td>
            </tr>
        `;
    });
    list.innerHTML = data;
};


function deleteStudent(id){

    let conf = confirm('Are You Sure to Delete?');
    if(conf){
        let storage_data = dataGet('result_app');
        storage_data.splice(id, 1);
        dataSend('result_app',storage_data);
        studentData();
    }else{
        return false;
    }
    
}

const student_info = document.querySelector('.result-data');
function resultView(index){
 
    const modal = document.querySelector('.modal');

        modal.classList.add('active');
        modal.addEventListener('click',function(e){
            if(e.target == modal){
                modal.classList.remove('active');
            };
        });

        let storage_data = dataGet('result_app');

        let result = new Result();

        student_info.innerHTML = `
                    <div class="student-info">
                       <div class="info">
                         <h2>${storage_data[index].name}</h2>
                         <p><b>Roll: </b> ${storage_data[index].roll}</p>
                         <p><b>Class: </b> ${storage_data[index].cls}</p>
                         <p><b>Gender: </b> ${storage_data[index].gender}</p> 
                       </div>
                        <div class="photo">
                            <img src="${storage_data[index].photo}" alt="">
                        </div>   
                   </div>
                    <hr>
                    <table>
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Marks</th>
                                <th>GPA</th>
                                <th>Grade</th>
                                <th>CGPA</th>
                                <th>Result</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Bangla</td>
                                <td>${storage_data[index].bangla}</td>
                                <td>${result.result(storage_data[index].bangla).gpa.toFixed(2)}</td>
                                <td>${result.result(storage_data[index].bangla).grad}</td>
                                <td rowspan="6">

                                ${result.finalResult( storage_data[index].bangla, 
                                    storage_data[index].english,
                                    storage_data[index].physics,
                                    storage_data[index].chemistry,
                                    storage_data[index].biology,
                                    storage_data[index].math).cgpa}
                                
                                </td>

                                <td  rowspan="6">
                                ${result.finalResult( storage_data[index].bangla, 
                                    storage_data[index].english,
                                    storage_data[index].physics,
                                    storage_data[index].chemistry,
                                    storage_data[index].biology,
                                    storage_data[index].math).finalgrade}
                                </td>
                            </tr>

                            <tr>
                                <td>English</td>
                                <td>${storage_data[index].english}</td>
                                <td>${result.result(storage_data[index].english).gpa.toFixed(2)}</td>
                                <td>${result.result(storage_data[index].english).grad}</td>
                            </tr>

                            <tr>
                                <td>Physics</td>
                                <td>${storage_data[index].physics}</td>
                                <td>${result.result(storage_data[index].physics).gpa.toFixed(2)}</td>
                                <td>${result.result(storage_data[index].physics).grad}</td>
                            </tr>

                            <tr>
                                <td>Chemistry</td>
                                <td>${storage_data[index].chemistry}</td>
                                <td>${result.result(storage_data[index].chemistry).gpa.toFixed(2)}</td>
                                <td>${result.result(storage_data[index].chemistry).grad}</td>
                            </tr>

                            <tr>
                                <td>Biology</td>
                                <td>${storage_data[index].biology}</td>
                                <td>${result.result(storage_data[index].biology).gpa.toFixed(2)}</td>
                                <td>${result.result(storage_data[index].biology).grad}</td>
                            </tr>

                            <tr>
                                <td>Math</td>
                                <td>${storage_data[index].math}</td>
                                <td>${result.result(storage_data[index].math).gpa.toFixed(2)}</td>
                                <td>${result.result(storage_data[index].math).grad}</td>
                            </tr>
                            
                        </tbody>
                    </table>
           
        
        `


};