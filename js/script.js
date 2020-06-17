var current_block = 0;
var max_blocks = 0;
var images = [];
var audio= [];
var game_images = [];
var img_id = 0;

var audio_context = new (window.AudioContext || window.webkitAudioContext)();

$(document).ready(function() {

    $(".page_block").each(function() {
        var classes = $(this).attr("class");
        var regex   = /block_(\d+)/;
        var nr      = parseInt(regex.exec(classes)[1]);

        max_blocks = nr > max_blocks ? nr : max_blocks;
    });

    if (max_blocks) {
        $("#page_block_all").click(function() { show_all(); });
        $("#page_block_next").click(function() { show_block(current_block + 1); });

        $(".page_block").addClass("content_blur").css({ visibility: "visible" });
        $(".no_blur").removeClass("content_blur");
        $(".content_blur").click(function() { if ($(this).hasClass("content_blur") && current_block < max_blocks) { show_block(current_block + 1); } });
        setTimeout(function() { $(".page_block").css("transition", "filter, 0.5s") }, 500);

        show_block(current_block + 1);
        setTimeout(fade_next, 1500);
   }
});

// ----------- show_block ----------
function show_block(block) {
   var anker;
   current_block = block;

   // hide element if wanted
   var hide = $(".block_" + current_block).data("reveal_hide") || 0;
   if (hide) { $(".block_" + hide).hide(); }

   // show new element
   $(".block_" + current_block).removeClass("content_blur");

   // get anker for next arrow
   anker = $(".block_" + current_block);
   $(".block_" + current_block).each(function(index, e) {
      if ($(this).data("reveal_priority")) { anker = $(this); return false; }
   });

   // call reveal function if present
   var reveal_function = anker.data("reveal_function");
   var ret = reveal_function ? eval(reveal_function) : true;
   if (ret == false) { return }

   // hide arrows if no more new elements available
   if (current_block == max_blocks) {
      $("#page_block_next").hide();
      $("#page_block_all").hide();
   }
}


// ---------- fade_next - flashing next arrow ----------
function fade_next() {
   if (current_block != max_blocks) {
      if ($("#page_block_next").hasClass("page_block_next_a")) {
         $("#page_block_next").removeClass("page_block_next_a");
         setTimeout(fade_next, 2000);

      } else {
         $("#page_block_next").addClass("page_block_next_a");
         setTimeout(fade_next, 800);
      }
   }
}


// ---------- show_all - removes blur ----------

function show_all() {
       $(".page_block").removeClass("content_blur");
    
       $(".page_block").each(function() {
          var hide = $(this).data("reveal_hide") || 0;
          if (hide) { $(".block_" + hide).hide(); }
    
          // call reveal function if present
          var reveal_function = $(this).data("reveal_function");
          reveal_function ? eval(reveal_function) : "";
       });
    
       $("#page_block_next").hide();
       $("#page_block_all").hide();
       current_block = max_blocks;
    }

    // --------- show_image - reveal images -------
    function show_image(nr) {
      var image = images[nr - 1];
      $(image.image_id).attr("src", image.image_name);
      $("#sound_button_" + nr).css({top: $(image.image_id).offset().top, left: $(image.image_id).offset().left}).show();
   }

