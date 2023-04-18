







//////////////////////////////////////////////////////paramedic application
const createForm = document.querySelector('#paramedic-form');
const applybtn = document.getElementById('applybtn');
const fullname = document.getElementById('fullnamep');
const phoneno = document.getElementById('phonenop');
const address = document.getElementById('addressp');
const dateandtime = document.getElementById('datetimep');
const diploma = document.getElementById('diploma');
const database = firebase.database();

applybtn.addEventListener( 'click', (e) =>{
    e.preventDefault();
database.ref('/paramedics/'+phoneno.value).set({
    FullName:fullname.value,
    PhoneNo:phoneno.value,
    Address:address.value,
    DateTime:dateandtime.value,
    Diploma:diploma.value

});
    const modal = document.querySelector('#modal-paramedic');
    M.Modal.getInstance(modal).close();
    createForm.reset();

    
console.log('application submitted');
// alert('REQUEST SUBMITTED WE WILL CONTACT YOU FOR DOCUMENT VERIFICATION!');
   // window.location = '/pages/paramedicfallback.html';
});

//////////////////////////////////////////////paramedic application end





////////////////////////////////UserNeed//////////////////////////////////////start

// const confirmbtn = document.getElementById('confirmbtn');
// const Need = document.getElementById('need');
// const Lab = document.getElementById('lab');
// const Test = document.getElementById('test');
// const PatientAge = document.getElementById('patientage');
// const PhoneNo = document.getElementById('phoneno');
// const Address = document.getElementById('addressu');
// const Location = document.getElementById('demo');
// const NeedForm = document.querySelector('#need-form');




//     confirmbtn.addEventListener( 'click', (e) =>{
//     e.preventDefault();
// database.ref('/userneed/'+PhoneNo.value).set({
//     UserNeed:Need.value,
  
//     PatientAge:PatientAge.value,
//     PhoneNo:PhoneNo.value,
//     Address:Address.value,
    
    

// });

//     NeedForm.reset();
//     console.log('application submitted');

// });
// ///////////////////////////////////UserNeed///////////////////////////////End



// ///////////////////////Fetching Data User ////////////////





// database.ref().child('UserNeed').once('value', function(snapshot){
//     if(snapshot.exists()){
//         var userno = 0;
//         var content = '';

//         snapshot.forEach(function(data){
//             var address = data.val().Address;
//             var patientage= data.val().PatientAge;
//              var phone= data.val().PhoneNo;
//              var need = data.val().UserNeed;
//             content += '<tr>';
//             content += '<td>' + ++userno + '</td>'; //column1
//             content += '<td>' + address + '</td>';//column2
//                content += '<td>' + patientage + '</td>';//column2
//                   content += '<td>' + phone + '</td>';//column2
//                      content += '<td>' + need + '</td>';//column2
//             content += '</tr>';
//         });

//         $('#tbody1').append(content);
//     }
// });



/////////////////////////Fetching Data User ////////////////

//   function SelectAllDataParamedic()

// {
//     database.ref('paramedics').once('value',
//     function(AllRecords){
//         AllRecords.forEach(
//             function(CurrentRecord){
//                 var Address = CurrentRecord.val().Address;
//                 var diploma1 = CurrentRecord.val().Diploma;
//                 var FullName1 = CurrentRecord.val().FUllName;
//                 var PhoneNo1 = CurrentRecord.val().PhoneNo;
//                 AddItemToTable1(Address,diploma1,FullName1,PhoneNo1);
             
//             }
//         );
           
//     })
    
// }
// var sno = 0;
// window.onload = SelectAllDataParamedic;

// function AddItemToTable1(Address,diploma1,FullName1,PhoneNo1){
//     var tbody = document.getElementById('tbody2');
//     var trow = document.createElement('tr');
//     var td1 = document.createElement('td');
//     var td2 = document.createElement('td');
//     var td3 = document.createElement('td');
//     var td4 = document.createElement('td');
//     var td5 = document.createElement('td');
//      var td6 = document.createElement('td');
    
//     td1.innerHTML = ++sno;
//     td2.innerHTML = Address;
//     td3.innerHTML = diploma1;
//     td4.innerHTML = FullName1;
//     td5.innerHTML = PhoneNo1;
//      td6.innerHTML = '<button id="btndelete" onclick="deletedata()" name="btn">Delete</button></br><button id="btnassign"  name="btn">AssignParamedic</button>';
   
//     trow.appendChild(td1);
//     trow.appendChild(td2);
//     trow.appendChild(td3);
//     trow.appendChild(td4);
//     trow.appendChild(td5);
//     tbody.appendChild(trow);
// }
  




