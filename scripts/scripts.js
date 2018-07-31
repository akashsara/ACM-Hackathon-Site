var member2 = `<li class="member2">
	<div class="collapsible-header">Member 2 Information</div>
	<div class="collapsible-body">
		<div class="row">
			<div class="input-field col s12 m12">
				<i class="material-icons prefix white-text text-darken-2 background-icon">person</i>
				<input id="member2_name" name="member2_name" type="text" class="validate" data-length="20" pattern="[a-zA-Z]*" title="Names generally have only alphabets" required>
				<label for="member2_name">Name</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12">
				<i class="material-icons prefix white-text text-darken-2 background-icon">school</i>
				<input id="member2_college" name="member2_college"type="text" class="validate" data-length="50" pattern="[a-zA-Z,.]*" title="Names generally have only alphabets" required>
				<label for="member2_college">College Name</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12 m6">
				<i class="material-icons prefix white-text text-darken-2 background-icon">email</i>
				<input id="member2_email" name="member2_email"type="email" class="validate" data-length="35" required>
				<label for="member2_email">Email</label>
			</div>
			<div class="input-field col s12 m6">
				<i class="material-icons prefix white-text text-darken-2 background-icon">local_phone</i>
				<input id="member2_phone" name="member2_phone"type="tel" class="validate" minlength="10" pattern="[0-9]{10}" data-length="10" maxlength="10" title="Should be a mobile number." required>
				<label for="member2_phone">Phone Number</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12">
				<i class="material-icons prefix white-text text-darken-2 background-icon">computer</i>
				<input id="member2_github" name="member2_github" type="text" class="validate" data-length="80">
				<label for="member2_github">Github (Or Alternative)</label>
			</div>
		</div>
	</div>
</li>`;

var member3 = `<li class="member3">
	<div class="collapsible-header">Member 3 Information</div>
	<div class="collapsible-body">
		<div class="row">
			<div class="input-field col s12 m12">
				<i class="material-icons prefix white-text text-darken-2 background-icon">person</i>
				<input id="member3_name" name="member3_name" type="text" class="validate" data-length="20" pattern="[a-zA-Z]*" title="Names generally have only alphabets" required>
				<label for="member3_name">First Name</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12">
				<i class="material-icons prefix white-text text-darken-2 background-icon">school</i>
				<input id="member3_college" name="member3_college"type="text" class="validate" data-length="50" pattern="[a-zA-Z,.]*" title="Names generally have only alphabets" required>
				<label for="member3_college">College Name</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12 m6">
				<i class="material-icons prefix white-text text-darken-2 background-icon">email</i>
				<input id="member3_email" name="member3_email"type="email" class="validate" data-length="35" required>
				<label for="member3_email">Email</label>
			</div>
			<div class="input-field col s12 m6">
				<i class="material-icons prefix white-text text-darken-2 background-icon">local_phone</i>
				<input id="member3_phone" name="member3_phone"type="tel" class="validate" minlength="10" pattern="[0-9]{10}" data-length="10" maxlength="10" title="Should be a mobile number." required>
				<label for="member3_phone">Phone Number</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s12">
				<i class="material-icons prefix white-text text-darken-2 background-icon">computer</i>
				<input id="member3_github" name="member3_github" type="text" class="validate" data-length="80">
				<label for="member3_github">Github (Or Alternative)</label>
			</div>
		</div>
	</div>
</li>`;

function destroyBoth() {
	if($('.member2'))
		$('.member2').remove();
	if($('.member3'))
		$('.member3').remove();
}

function createMember2() {
	$('.formSections').append(member2);
}

function createBoth() {
	createMember2();
	$('.formSections').append(member3);
}

function createDelete(numberOfMembers) {
	if(numberOfMembers == 1) {
		destroyBoth();
	}
	else if(numberOfMembers == 2) {
		destroyBoth();
		createMember2();
	}
	else if(numberOfMembers == 3){
		destroyBoth();
		createBoth();
	}
}

$(document).ready(function(){
	var numberOfMembers = $('.selectMembers').val();
	createDelete(numberOfMembers);

	$('.selectMembers').change(function() {
		numberOfMembers = $(this).val();
		createDelete(numberOfMembers);
	});

	$('.modal').modal();
	$(".button-collapse").sideNav({
		closeOnClick: true,
		draggable: true,
	});

	$('.scroll-nav').click(function(e) {
		var link = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(link).offset().top
		}, 900);
		e.preventDefault();
	});

	$('select').material_select();
	$('.collapsible').collapsible();

});
