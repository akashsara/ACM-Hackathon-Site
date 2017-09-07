
function writeto(){
  var database = firebase.database();
  var x = document.getElementById("regform");
   firebase.database().ref('teams/' + x.elements[0].value).set({
     Member1:{
      Name:x.elements[1].value + " " +x.elements[2].value,
      College:x.elements[3].value,
      Email:x.elements[4].value,
      Phone:x.elements[5].value
     },
     Member2:{
       Name:x.elements[6].value + " " +x.elements[7].value,
       College:x.elements[8].value,
       Email:x.elements[9].value,
       Phone:x.elements[10].value
     },
     Member3:{
       Name:x.elements[11].value + " " +x.elements[12].value,
       College:x.elements[13].value,
       Email:x.elements[14].value,
       Phone:x.elements[15].value
     },
     Member4:{
       Name:x.elements[16].value + " " +x.elements[17].value,
       College:x.elements[18].value,
       Email:x.elements[19].value,
       Phone:x.elements[20].value
     }

   });
   var r=confirm("You have successfully registered as team :\n" + x.elements[0].value);
}
