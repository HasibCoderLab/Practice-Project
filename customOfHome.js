/* wpforms validation settings */
var wpforms_settings = { 
    "val_required": "This field is required.",
    "val_email": "Please enter a valid email address.",
    // ... (rest of your JSON data)
  };
  
  jQuery(function ($) {
    $('.wpf-disable-field input, .wpf-disable-field textarea').attr({
      readonly: "readonly",
      tabindex: "-1"
    });
  });
  
  function makeHttpObject() {
    try { return new XMLHttpRequest(); }
    catch (error) { }
    try { return new ActiveXObject("Msxml2.XMLHTTP"); }
    catch (error) { }
    try { return new ActiveXObject("Microsoft.XMLHTTP"); }
    catch (error) { }
    throw new Error("Could not create HTTP request object.");
  }
  
  jQuery(document).ready(function ($) {
    if ($("#main").length != 0) {
      $(document).on('click', ".navigation a", function (event) {
        event.preventDefault();
        var link = $(this).attr('href');
        $('html, body').animate({
          scrollTop: ($("#main").offset().top - 200)
        }, 200);
        $('body').append('<div class="wp-ajax-pagination-loading"></div>');
        var request = makeHttpObject();
        request.open("POST", link, true);
        request.send(null);
        request.onreadystatechange = function () {
          if (request.readyState == 4) {
            var htmlDoc = $(request.responseText);
            var html = htmlDoc.find('#main').html();
            var htmlNav = htmlDoc.find('.navigation').html();
            $("#main").html(html);
            $(".navigation").html(htmlNav);
            $('.wp-ajax-pagination-loading').remove();
          }
        };
      });
    }
  
    // handed-over
    if ($("#handed-over").length != 0) {
      $(document).on('click', ".property-pagination a", function (event) {
        event.preventDefault();
        var link = $(this).attr('href');
        $('html, body').animate({
          scrollTop: ($("#handed-over").offset().top - 200)
        }, 200);
        $('body').append('<div class="wp-ajax-pagination-loading"></div>');
        var request = makeHttpObject();
        request.open("POST", link, true);
        request.send(null);
        request.onreadystatechange = function () {
          if (request.readyState == 4) {
            var htmlDoc = $(request.responseText);
            var html = htmlDoc.find('#handed-over').html();
            var htmlNav = htmlDoc.find('.property-pagination').html();
            $("#handed-over").html(html);
            $(".property-pagination").html(htmlNav);
            $('.wp-ajax-pagination-loading').remove();
          }
        };
      });
    }
  
    // blog
    if ($("#blog").length != 0) {
      $(document).on('click', ".property-pagination a", function (event) {
        event.preventDefault();
        var link = $(this).attr('href');
        $('html, body').animate({
          scrollTop: ($("#blog").offset().top - 200)
        }, 200);
        $('body').append('<div class="wp-ajax-pagination-loading"></div>');
        var request = makeHttpObject();
        request.open("POST", link, true);
        request.send(null);
        request.onreadystatechange = function () {
          if (request.readyState == 4) {
            var htmlDoc = $(request.responseText);
            var html = htmlDoc.find('#blog').html();
            var htmlNav = htmlDoc.find('.property-pagination').html();
            $("#blog").html(html);
            $(".property-pagination").html(htmlNav);
            $('.wp-ajax-pagination-loading').remove();
          }
        };
      });
    }
  
    // newsletter
    if ($("#newsletter").length != 0) {
      $(document).on('click', ".property-pagination a", function (event) {
        event.preventDefault();
        var link = $(this).attr('href');
        $('html, body').animate({
          scrollTop: ($("#newsletter").offset().top - 200)
        }, 200);
        $('body').append('<div class="wp-ajax-pagination-loading"></div>');
        var request = makeHttpObject();
        request.open("POST", link, true);
        request.send(null);
        request.onreadystatechange = function () {
          if (request.readyState == 4) {
            var htmlDoc = $(request.responseText);
            var html = htmlDoc.find('#newsletter').html();
            var htmlNav = htmlDoc.find('.property-pagination').html();
            $("#newsletter").html(html);
            $(".property-pagination").html(htmlNav);
            $('.wp-ajax-pagination-loading').remove();
          }
        };
      });
    }
  });
  