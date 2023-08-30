# **Spreadsheet-to-line-notify**
Google spreadsheets の特定のセルに書き込んだ内容をLINE Notify に送信するプログラム。

# 使用するサービス
  - [Google Spreadsheets][GS_link]
  - [Google Apps Script][GAS_link]
  - [LINE Notify][Notify_link]

# 使用方法(最終更新：2023/08/30)
- **GASエディタ側の設定**
  - 空の Google spreadsheets を用意します。
  - 上部のメニューから「拡張機能」を開き、「Google Apps Script」を選択します。
  - 空のGASのエディタが開くので、main.gsの内容を Copy & Paste します。

- **スクリプト プロパティの設定**
[スクリプト プロパティとは(英語)][script_property_en],
[スクリプト プロパティとは(日本語)][script_property_jp]
  - GASの左側のメニューから「プロジェクトの設定」 へ進みます。
  - 下部の「スクリプト プロパティを追加」
  - 以下のように設定すると、コードを Copy & Paste すれば動作します。

| プロパティ | 値 |
| ---- | ---- |
| LINE_TOKEN | '取得したLINE Notifyのパーソナルアクセストークン' |
| SHEET_ID | '使用するスプレッドシートのID' |

なお、LINE Notifyのトークン取得方法と、スプレッドシートのIDについては以下の記事を参照してください。

参考：[LINE Notifyのトークンを取得方法・備忘録][Qiita_LINENotify]、[【GoogleAppsScript】スプレッドシートIDの見方と取得][Qiita_spreadsheets]

- **送信する内容の入力**
  - 送信したい内容を***B1***セルに、表示したい送信者名を***B2***セルに入力します。
  - スプレッドシートが保存されたことを確認します。
 
- **実行** 
  - 画面上部のメニューバーから「Control GAS」を選択し、「RUN Script」を選択します。
  - 「RUN Script」が表示されない場合は、スプレッドシートが保存されていることを確認して再度リロードしてください。数秒後に表示されるはずです。
  - この選択によりGASのコードが実行され、スクリプトが実行されます。
  
# **注意事項**
- 連携するスプレッドシートは、都合上***B1***セルに内容を、***B2***セルに送信者名を入れることを想定しています。
- なおシート名はデフォルトのまま'***シート1***'としています。
- 送信者名を記述するセルを空欄にした場合、以下のように***fromの欄が空欄のメッセージ***がLINE Notifyから送信されます。
```
# B1に'Hello World!'と入力しB2(送信者名)が空欄の場合
# 送信メッセージ
['LINE Notifyで登録したトークン名']
Hello World!
from 
via LINE Autosender
```
- GASにおける実行時のログで、送信するメッセージの情報および取得したセルの情報が確認できます。


[GS_link]: https://www.google.com/intl/ja_jp/sheets/about/
[GAS_link]:https://workspace.google.co.jp/intl/ja/products/apps-script/
[Notify_link]: https://notify-bot.line.me/ja/
[script_property_en]: https://developers.google.com/apps-script/reference/properties?hl=en
[script_property_jp]: https://developers.google.com/apps-script/reference/properties?hl=ja
[Qiita_LINENotify]: https://qiita.com/chivi_dump/items/a62a7b8c32e6ea894a09
[Qiita_spreadsheets]: https://qiita.com/_7ofu_/items/b265ede7967f058c4ec8
