jQuery(document).ready(function($) {

  $('#runScript').click(function() {  
    username = $('#username').val();
    $('#runScript').html('Loading');
    //sends username and receives list of users
    $.ajax({
      type: 'get',
      url: '/track',
      data: {user: username},
      success: function (data) {
        displayFollowers(data.followers); //displaying followers
      },
      error: function(err) {
        console.log("something went wrong getting followers");
      }
    });
  });
});

function displayFollowers(followers) {
  $('#follower-tbody').html("<tr><th>Not following you back</th></tr>");
  for (let i = 0; i < followers.length; i++) {
    $("#follower-table").find('tbody')
    .append($('<tr>')
      .append($('<td>')
        .append(followers[i])
      )
    );
  }
  $('#runScript').html('Search');
}