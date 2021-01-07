const canvas = document.getElementById("myCanvas");//canvas要素取得
const context = canvas.getContext("2d");//context取得canvas内での操作をする

context.rect(0, 0, canvas.width, canvas.height);
context.fillStyle = "green";
context.fill();

/* context.beginPath();//biginPath関数でPath開始
context.moveTo(100, 100);//その点に動く

context.lineTo(100, 200);//その支点に向かって線を引く命令

context.lineWidth = 5;//線の幅
context.strokeStyle = "#fff";//線の色
context.stroke(); *///stroke関数を実行してはじめて線を描画できる
context.lineWidth = 5;
context.strokeStyle = "#fff";

let mouse = {x: 0, y: 0};//マウスの座標をオブジェクトで定義

canvas.addEventListener("mousemove", function(e) {//マウスの動きの検知
	mouse.x = e.pageX - this.offsetLeft;//マウスの座標を決める
  mouse.y = e.pageY - this.offsetTop;//canvas内での位置からマウスポインターの位置を取得
}, false);

canvas.addEventListener("mousedown", function(e) {//マウスクリックで描画する
	context.beginPath();//線を引く動作
  context.moveTo(mouse.x, mouse.y);//Pathの開始地点に移動
  
  canvas.addEventListener("mousemove", onPaint, false);//線をひくことができる
}, false);

canvas.addEventListener("mouseup", function() {//マウスクリックをやめたら描画ストップ
	canvas.removeEventListener("mousemove", onPaint, false);
})


const onPaint = function() {//実際に線を引く処理
	context.lineTo(mouse.x, mouse.y);//座標の定義
  context.stroke();
}



