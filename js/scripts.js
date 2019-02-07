$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var titleInput = $("input#title").val();
    var firstnameInput = $("input#firstname").val();
    var lastnameInput= $("input#lastname").val();
    var address1Input = $("input#address1").val();
    var address2Input = $("input#address2").val();
    var nounInput = $("input#noun").val();
    var phoneInput = $("input#phonee").val();
    var colorInput = $("input#color").val();

    $(".title").text(titleInput);
    $(".firstname").text(firstnameInput);
    $(".lastname").text(lastnameInput);
    $(".address1").text(address1Input);
    $(".address2").text(address2Input);
    $(".noun").text(nounInput);
    $(".phone").text(phoneInput);
    $(".color").text(colorInput);

    $("#story").show();

    event.preventDefault();
  });
});
