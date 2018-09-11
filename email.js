$(function() {

$('.signup-btn').click(function() {
    var name = $('#first_name_su').val();
    var email = $('#email_su').val();
    $.ajax({ 
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': "xxxxxxxx",
            'message': {
            'from_email': "xxxxxx@xxxxxx.com",
            'to': [
            {
            'email': "aditkirtani@gmail.com",
            'name': 'Bakshi',
            'type': 'to'
            }
            ],
            'autotext': 'true',
            'subject': 'TEST! TEST!',
            'html': 'Name: ' + name + '\nEmail: ' + email // and use it!
            }
        }
    }).done(function(response) {
        
    });
  });
});