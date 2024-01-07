$(document).ready(function() {
    console.log("Document is ready. jQuery version: " + $.fn.jquery); // Check if jQuery is loaded
    $('.faq_qna small').hide();
    $("button").click(function () {
      var isSeen = $(this).hasClass("plus")
      var faqQnaSmall = $(this).closest(".faq_qna").find("small");

      if (isSeen) {
        $(this).removeClass("plus").addClass("minus");
        faqQnaSmall.slideDown();
      } else {
        $(this).removeClass("minus").addClass("plus");
        faqQnaSmall.slideUp();
      }
    });

    
function updateMainFaqHeight() {
    var totalHeight = 0;

   $(".faq_qna").each(function() {
    totalHeight+=$(this).find("small").height()
   })
}

updateMainFaqHeight()

});