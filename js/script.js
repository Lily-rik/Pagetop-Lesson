$(function(){
  $('#back a').on('click',function(event){　// 持ってきたいのがアニメーションというイベントのメソッドになるため
  // $('#id名 要素名'):cssと書き方は同じ　　　　　　 eventを引数に持ってきている
    $('body, html').animate({　// animate()はアニメーション効果を設定するjQuery関数
                               // オブジェクトの移動や透過率などを変更することができる
      // 「body要素またはhtml要素」=ページ全体を指す
      scrollTop:0　// scrollTop：スクロール位置を取得できるメソッド　0=最上部に移動するという意味になる
    }, 800); // 800=0.8秒　[slow],[normal],[fast]で表現することも可能
                            // ex) {duration: 'fast'}
    event.preventDefault();  // aタグの機能を無効にするメソッド
  });
});



