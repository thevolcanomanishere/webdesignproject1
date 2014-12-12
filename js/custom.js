function validation()
{
	// declare textbox variables
    var email = document.form.email.value;
    var name = document.form.fullname.value;
    var subject = document.form.subject.value;
    var message = document.form.message.value;

	// check if email is empty
    if(email =="")
    {
		alert("Please Enter Email");
		document.form.email.focus();
		return false;
    }

	// check if name is empty
	if(name=="")
    {
		alert("Please Enter Name");
		document.form.name.focus();
		return false;
    }

	// check if subject is empty
    if(subject =="")
    {
		alert("Please Enter Subject");
		document.form.subject.focus();
		return false;
    }

	// check if message is empty
    if(message =="")
    {
		alert("Please Enter Message");
		document.form.message.focus();
		return false;
    }
	
	// submit message
	alert("Thank you for submitting your message");
}

$(document).ready(function() {
	$('#regexpEmailForm')
		.bootstrapValidator({
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {
				email: {
					validators: {
						emailAddress: {
							message: 'The value is not a valid email address'
						},
						regexp: {
							regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
							message: 'The value is not a valid email address'
						}
					}
				}
			}
		})
		.on('error.validator.bv', function(e, data) {
			// data.bv        --> The BootstrapValidator instance
			// data.field     --> The field name
			// data.element   --> The field element
			// data.validator --> The current validator name

			if (data.field === 'email') {
				// The email field is not valid
				data.element
					.data('bv.messages')
					// Hide all the messages
					.find('.help-block[data-bv-for="' + data.field + '"]').hide()
					// Show only message associated with current validator
					.filter('[data-bv-validator="' + data.validator + '"]').show();
			}
		});
});
