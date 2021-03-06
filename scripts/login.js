function Confirm(title, msg, $true) { /*change*/
    var $content =  "<div class='dialog-ovelay'>" +
                    "<div class='dialog'><header>" +
                     " <h3> " + title + " </h3> " +
                     "<i class='fa fa-close'></i>" +
                 "</header>" +
                 "<div class='dialog-msg'>" +
                     " <p> " + msg + " </p> " +
                 "</div>" +
                 "<footer>" +
                     "<div class='controls'>" +
                         " <a class='button button-danger doAction' href=\"index.html\" target=\"_self\">" + $true + "</a>" +
                     "</div>" +
                 "</footer>" +
              "</div>" +
            "</div>";
     $('body').prepend($content);
	$('.doAction').click(function () {
		$(this).parents('.dialog-ovelay').fadeOut(500, function () {
		  $(this).remove();
		});
	});
	$('.cancelAction, .fa-close').click(function () {
		$(this).parents('.dialog-ovelay').fadeOut(500, function () {
			$(this).remove();
		});
	}); 
}



function writeto(callback){
    try{
		$('#loader').addClass('active');
        console.log('DB updating');
        var x = document.getElementById("regform");
        var TeamName = x.elements[0].value;
        var no_members = x.elements[2].value;
        var Abstract = x.elements[3].value;
        var num = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
        var check = 'teams/' + TeamName + "__ref:"+ num.toString() + '/';
        console.log(check);
        if (no_members=='1'){
            firebase.database().ref('teams/' + TeamName + "__ref:"+ num.toString() + '/').set({
                Member1:{
                    Name:x.elements[4].value,
                    College:x.elements[5].value,
                    Email:x.elements[6].value,
                    Phone:x.elements[7].value,
                    Github:x.elements[8].value
                },
                Abstract:Abstract
            }, function(error){
                if (error){
                    console.log("error");
                }
                else{
                    console.log("data written successfully");
					callback(TeamName);
                }
            });
        }
        else if (no_members=='2'){
            firebase.database().ref('teams/' + TeamName + "__ref:"+ num.toString() + '/').set({
                [TeamName]:{
                    Member1:{
                        Name:x.elements[4].value,
                        College:x.elements[5].value,
                        Email:x.elements[6].value,
                        Phone:x.elements[7].value,
                        Github:x.elements[8].value
                    },
                    Member2:{
                        Name:x.elements[9].value,
                        College:x.elements[10].value,
                        Email:x.elements[11].value,
                        Phone:x.elements[12].value,
                        Github:x.elements[13].value
                    },
            },
            Abstract:Abstract
            }, function(error){
                if (error){
                    console.log("error");
                }
                else{
                    console.log("data written successfully");
					callback(TeamName);
                }
            });
        }
        else{
            firebase.database().ref('teams/' + TeamName + "__ref:"+ num.toString() + '/').set({
                [TeamName]:{
                    Member1:{
                        Name:x.elements[4].value,
                        College:x.elements[5].value,
                        Email:x.elements[6].value,
                        Phone:x.elements[7].value,
                        Github:x.elements[8].value
                    },
                    Member2:{
                        Name:x.elements[9].value,
                        College:x.elements[10].value,
                        Email:x.elements[11].value,
                        Phone:x.elements[12].value,
                        Github:x.elements[13].value
                    },
                    Member3:{
                        Name:x.elements[14].value,
                        College:x.elements[15].value,
                        Email:x.elements[16].value,
                        Phone:x.elements[17].value,
                        Github:x.elements[18].value
                    },
            },
            Abstract:Abstract
            }, function(error){
                if (error){
                    console.log("error");
                }
                else{
                    console.log("data written successfully");
					callback(TeamName);
                }
            });
        
        }
        console.log('DB updated');
    }
    catch(err){
        console.log(err);
    }
      console.log("end");
}

function popup(TeamName) {
	console.log("Popup triggered")
	Confirm("Good Luck!", "You have successfully registered as \"" + TeamName + "\".\nYou will receive a confirmation mail by the end of the day.", "Okay")
	$('#loader').removeClass('active');
}