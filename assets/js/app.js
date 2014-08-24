$(function() {
  $("#targetdiv").on("click", function(e) {
    e.preventDefault();

    var target = $('#target').val();
        var shortcut = $('#shortcut').val();
        var newURL = $("#newURL");
        var newUl = $("<ul>");
        

        $(".modal-dialog").toggleClass("active");
        $(".modal-content").toggleClass("active");

        $.post('/urls', {target: target , key: shortcut}, function(data) 
          {
        
 
            var $ul = $("<ul></ul>");
            var url = "http://mo-url.herokuapp.com/s/" + data.key
            $ul.html('<li><a href="' + url + '">' + url + '</a></li>');
            $('#lis').append($ul);

           })
  })

});



    // $.ajax({
    //   url: '/todos/' + todoId,
    //   type: 'PUT',
    //   data: {todo: {complete: isComplete}},
    //   success: function(result) {
    //     console.log(result)
    //   }
    // });
// 'localhost:1337/s/' + data.key


  // var createTodo = function(newTodoName) {
  //   $.post('/todos', {todo: {name: newTodoName}})
  //     .success(function(createdTodo) {
  //       renderTodo(createdTodo);
  //     })
  // }


