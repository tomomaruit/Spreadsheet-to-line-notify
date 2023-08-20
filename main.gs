//スプレッドシートを開いた時に自動実行するonOpen関数
//スプレッドシート内からGASの実行メニューを表示可能にするonOpen関数
function onOpen() {
  var Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var menudetails = [];
  menudetails.push({ name: "RUN Script", functionName: "sendMessage" });
  //表示名の設定
  Spreadsheet.addMenu("Control GAS", menudetails);
}

//LINEにデータを送信するsendMessage関数
//この関数内で送信メッセージの成型およびLINE Notify とのやり取りを行う
function sendMessage(){
  //LINE Notifyのトークンを登録
  //スクリプトプロパティを用いる
  const token = PropertiesService.getScriptProperties().getProperty("LINE_TOKEN");
  const LINENotifyAPI = "https://notify-api.line.me/api/notify";

  //スプレッドシートのシートIDを定義
  //スクリプトプロパティを用いる
  const SHEET_ID = PropertiesService.getScriptProperties().getProperty("SHEET_ID");
  const sheet1 = SpreadsheetApp.openById(SHEET_ID).getSheetByName("シート1");
  //spreadsheetsの内容取得
  //getRangeの後ろを任意のセルに置き換え可能
  const value1 = sheet1.getRange('B1').getValue();
  const value2 = sheet1.getRange('B2').getValue();

  //取得したセルの内容を出力
  console.log(value1);
  console.log(value2);

  //送信メッセージの成型
  const message = "\n" + value1 + "\nfrom " + value2 + "\nvia LINE Autosender";

  //送信メッセージを出力
  console.log("送信メッセージは以下の内容です\n--------------------\n['LINE Notifyで登録したトークン名']" + message);

  //LINEに送信するための成型
  const options =
   {
     "method"  : "post", //送信なのでPOST
     "payload" : "message=" + message, //送信するメッセージを挿入
     "headers" : {"Authorization" : "Bearer "+ token} //トークン付与
   };
   //FetchメソッドでLINEにメッセージを送信
   UrlFetchApp.fetch(LINENotifyAPI, options);
}
