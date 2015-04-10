$(function() {
  var $mp3Expand = $('#mp3_listbox');
  $mp3Expand.hide();
  
  $('#mp3_expand').click(function() {
    $mp3Expand.stop().slideToggle(500);
  });
});