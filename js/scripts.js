$(function(){
  $("p.word").click(function(){
    console.log("clicked");
    $(this).hide();
    $(this).next().show();
  });
  $("p.definition").click(function(){
    console.log("clicked");
    $(this).hide();
    $(this).prev().show();
  });
});
