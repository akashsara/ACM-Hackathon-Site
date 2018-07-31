function writeto(){
    var database = firebase.database();
    var x = document.getElementById("regform");
    var TeamName = x.elements[0].value;
    firebase.database().ref('teams/').push({
       [TeamName]:{
        Member1:{
            Name:x.elements[3].value + " " + x.elements[4].value,
            College:x.elements[5].value,
            Email:x.elements[6].value,
            Phone:x.elements[7].value
        },
        Member2:{
            Name:x.elements[8].value + " " + x.elements[9].value,
            College:x.elements[10].value,
            Email:x.elements[11].value,
            Phone:x.elements[12].value
        },
        Member3:{
            Name:x.elements[13].value + " " + x.elements[14].value,
            College:x.elements[15].value,
            Email:x.elements[16].value,
            Phone:x.elements[17].value
        },
        Member4:{
            Name:x.elements[18].value + " " + x.elements[19].value,
            College:x.elements[20].value,
            Email:x.elements[21].value,
            Phone:x.elements[22].value
        }
    }

    });
    // var r=confirm("You have successfully registered as team :\n" + x.elements[0].value);
}
