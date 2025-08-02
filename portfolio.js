$(function(){
    
  window.addEventListener('scroll', function() {
  const fadeElements = document.querySelectorAll('.fadein-line');
  const windowHeight = window.innerHeight;

  fadeElements.forEach((el, index) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      setTimeout(function() {
        el.classList.add('ichibunn');
      }, index * 1500);  // 1行ごとに300msずつ遅延させる
    }
  });
});

 /*=================================================
  画像切り替え
  ===================================================*/
  // サムネイルの画像をホバーした際の処理
  $('#thumbnail img').on('mouseover', function(){

    // ホバーされた画像のパスを取得
    // $(this)はイベントが発生した要素を指すため、1つ目のサムネイルがホバーされた際は1つ目のsrcを、
    // 2つ目のサムネイルがホバーされた際は2つ目のsrcを取得する
    let img_src = $(this).attr("src");

    // メイン画像と同じサムネイルがホバーされた際は画像切り替えを実行しない
    // （メイン画像のsrcとホバーされた画像のsrcが異なる場合のみ実行）
    if($('#mainvisual img').attr("src") != img_src) {

      // メイン画像を0.5秒かけてフェードアウトし、フェードアウトが完了したら
      // メイン画像のsrcをホバーされたサムネイルのsrcに変更して
      // メイン画像を0.5秒かけてフェードインする
      // ※「フェードアウトが完了した後に実行」のように、何かの処理が終わったあとに実行させたい場合は、
      // 今回のようのコールバック関数を使用します。詳しくは「コールバック関数」で調べてみてください
      $('#mainvisual img').fadeOut(500, function() {
        $("#mainvisual img").attr({src:img_src});
        $("#mainvisual img").fadeIn(500);
      })
    }
  });

  /*=================================================
  // カルーセル用 jQueryプラグイン「slick」
  // マニュアル：https://kenwheeler.github.io/slick/
  ===================================================*/
  $('#slider').slick({
    autoplay: true,                         // 自動再生オン
    autoplaySpeed: 2000,                    // スライドを3秒で切り替え
    arrows: true,                           // 左右の矢印を表示
    dots: true,                             // ドット（ページ送り）を表示
    slidesToShow: 1,                        // スライドを1枚表示（※centerModeをtrueにすると両端に2枚見切れた状態になる）
    centerMode: true,                       // センターモード（両端が見切れた状態になる）
    centerPadding: '18%',                   // 見切れたコンテンツの幅を18%に設定
    prevArrow:'<div class="prev"></div>',   // 前へ矢印のHTMLを変更する
    nextArrow:'<div class="next"></div>',   // 次へ矢印のHTMLを変更する
    responsive: [              // レスポンシブの設定
      {
        breakpoint: 900,       // 900px以下の場合に適用
        settings: {
          centerMode: false    // センターモードをオフにする
        }
      }
    ]
  });

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const midasi = document.querySelector('.midasi');
  const hamburger = document.querySelector('.hamburger');

  if (scrollY > 750) {
    midasi.classList.add('visible');
    hamburger.classList.add('visible');
  } else {
    midasi.classList.remove('visible');
    hamburger.classList.remove('visible');
  }
});
document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('active');
});

$(document).ready(function(){
    function fadeInOnScroll(){
        $('.app').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll + windowHeight > elemPos + 100) {
                $(this).addClass('show');
            }
        });
    }

    $(window).on('scroll', function(){
        fadeInOnScroll();
    });

    // 初回実行（最初から表示範囲に入っている場合の対策）
    fadeInOnScroll();
});


});




