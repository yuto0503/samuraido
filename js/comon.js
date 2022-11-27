// ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
     $(this).toggleClass('active');
     $('.nav_inner').toggleClass('open'); 
   });
   $(".nav_inner a").click(function () {
    $(".hamburger").removeClass('active');
    $(".nav_inner").removeClass('open');
  });
  });

  // topへ戻るボタン
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200){
    $('#back-btn').removeClass('DownMove');
    $('#back-btn').addClass('UpMove');
  }else{
    if($('#back-btn').hasClass('UpMove')){
      $('#back-btn').removeClass('UpMove');
      $('#back-btn').addClass('DownMove');
    }
  }
}
$(window).scroll(function () {
  PageTopAnime();
});
$(window).on('load', function () {
  PageTopAnime();
});
$('#back-btn a').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});

  // ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top-80;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});


  // スクロールしたらふわっ
function fadeAnime() {
  $('.fadeUpTrigger').each(function() { 
    var elemPos = $(this).offset().top-40;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
    $(this).addClass('fadeUp');
    }else{
    $(this).removeClass('fadeUp');
    }
    });
  }
  $(window).scroll(function () {
    fadeAnime();
  });

  // スクロールしたら滑らかに出現
function smoothAnime() {
  $('.smoothTrigger').each(function(){
    var elemPos = $(this).offset().top-50; 
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('smooth');
    }else{
    $(this).removeClass('smooth');
    }
    });
  }
$(window).scroll(function () {
  smoothAnime();
});


// ランダム出現
function moveAnimation(){
    var randomElm2 = $(".randomScroll");
    var randomElm2Child = $(randomElm2).children();
    randomScrollAnime();
    function randomScrollAnime(){
      var elemPos = $(".randomScroll").offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        if(randomElm2Child.length >0 ){ 
          var rnd = Math.floor(Math.random() * randomElm2Child.length);
          var moveData ="fadeUp";
          if(animeFlag){
            animeFlag = false;
            $(randomElm2Child[rnd]).addClass(moveData);
            setTimeout(function(){
              animeFlag = true;
              randomScrollAnime();
            },100); 
            randomElm2Child.splice(rnd,1);
          }
        }
      }else{
        animeFlag = true;
      }
    }
  }
  var animeFlag = true;
    $(window).scroll(function (){
      moveAnimation();
    });


    // 順番に出現
    function delayScrollAnime() {
      var time = 0.2;
      var value = time;
      $('.delayScroll').each(function () {
        var parent = this;
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var childs = $(this).children();
        
        if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
          $(childs).each(function () {
            if (!$(this).hasClass("fadeUp")) {
              $(parent).addClass("play"); 
              $(this).css("animation-delay", value + "s");
              $(this).addClass("fadeUp");
              value = value + time;
              var index = $(childs).index(this);
              if((childs.length-1) == index){
                $(parent).removeClass("play");
              }
            }
          })
        }else {
          $(childs).removeClass("fadeUp");
          value = time;
        }
      })
    }
      $(window).scroll(function (){
        delayScrollAnime();
      });

  
  // ローディングアニメーション
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');
  $("#splash_logo").delay(1200).fadeOut('slow');
});
