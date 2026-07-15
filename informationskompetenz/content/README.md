# コンテンツの追加・編集方法

このフォルダの `.md` ファイルがメニュー項目（トピック）の内容です。
`data.js` の `MENU_ITEMS` は直接編集せず、ここを編集して `build-content.js` を実行してください。

## ファイルの置き場所

```
content/
  starters/   前菜（リサーチの基本）
  mains/      主食（資料とデータを深く探す）
  dessert/    デザート（デジタル人文学とAI活用）
```

ファイル名は `NN-スラッグ.md`（例: `03-zotero.md`）。
- `NN` は表示順（連番）
- スラッグは半角英数とハイフンのみ。トピックのID (`<カテゴリ名>-<スラッグ>`) はここから自動生成されます

## ファイルの書式

```markdown
## ja
タイトル（1行）

説明文（1〜数文の段落）

## de
Titel (eine Zeile)

Beschreibung (ein Absatz)

## en
Title (one line)

Description (one paragraph)
```

- 各言語見出し（`## ja` / `## de` / `## en`）の直後の最初の行がカードのタイトル
- それ以降の行が説明文（複数行に分けて書いても1つの段落として結合されます）
- 3言語すべて必須です

## テーマ（ファセット絞り込み用タグ）

トピックにはテーマ別絞り込み用のタグを付けられます。ファイルの一番上（`## ja` より前）に1行追加してください。

```markdown
tags: open-access, zotero

## ja
...
```

- タグは `themes.md` で定義済みのキーのみ使えます（未定義のキーを使うと `build-content.js` がエラーで教えてくれます）
- タグは0個以上いくつでも付けられます
- `tags:` 行自体は省略可能です（タグなしのトピックも問題ありません）

新しいテーマを追加したい場合は `content/themes.md` に以下の形式でブロックを追加してください。

```markdown
## テーマのキー（半角英数とハイフンのみ）
ja: 日本語名
de: Deutscher Name
en: English name
```

絞り込みは「チェックしたテーマのいずれかに該当する項目を表示」（OR方式）です。

## 反映方法

新規トピック・テーマの追加や既存内容の編集をしたら、`informationskompetenz/` フォルダで以下を実行してください。

```bash
node build-content.js
```

`content.generated.js` が再生成されます（このファイルは自動生成なので直接編集しないでください）。
