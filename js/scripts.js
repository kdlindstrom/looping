$(document).ready(function(){
  $("form#favThings").submit(function(event){
  var blanks = ["thing1","thing2","thing3","thing4"];
  blanks.forEach(function(blank){
    var userInput = $("input#" + blank).val();
    $("li#"+blank).text(userInput);
  });
    event.preventDefault();
  });
});
