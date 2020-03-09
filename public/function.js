jQuery(document).ready(function($) {

  $('#runScript').click(function() {  
    username = $('#username').val();

    console.log("entered username: [" + username + "]");

    $.ajax({
      type: 'get',
      url: '/track',
      data: {user: username},
      error: function(err) {
          console.log("something went wrong owo");
      }
    });

    $.ajax({
      type: 'get',
      url: '/sendList',
      data: {
        followers: "list of followers"
      },
      success: function (data) {
        console.log("got data");
        let followers = data;
        displayFollowers(followers.followers);
      }
    })
  });
});

function displayFollowers(followers) {
  console.log("got to method");
  console.log(followers);
  for (let i = 0; i < followers.length; i++) {
    $("#follower-table").find('tbody')
    .append($('<tr>')
      .append($('<td>')
        .append(followers[i])
      )
    );
  }
}