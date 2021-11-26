$(function(){

$('.dummy').click(function(){
  return false;
});

$('#top').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },500)
});

// スクロールで下から上に表示する

  $(window).scroll(function (){
    var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
    var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
    $('.fadeIn').each(function(){                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
      var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
      if(scroll > cntPos - windowHeight + windowHeight/3){  /* 要素がある位置までスクロールされていたら */
        $(this).addClass('active');              /* 「active」のクラスを付与 */
      }
    });
    ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
  });


  var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
  var elemTop = $('#cl').offset().top;//#area-2の位置まできたら
	var scroll = $(window).scrollTop();
    if(scroll == beforePos) {
    }else if(elemTop > scroll || 0 > scroll - beforePos){
		//ヘッダーが上から出現する
		$('#header').removeClass('UpMove');	//#headerにUpMoveというクラス名を除き
		$('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
		//ヘッダーが上に消える
    $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
		$('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
  }



});

