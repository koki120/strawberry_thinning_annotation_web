# 摘果画像保存アプリ

本アプリはイチゴの摘果画像を効率よく管理するために写真を撮るときに簡単にファイル名を付けることができるアプリである。

## 保存される画像のファイル名

保存される画像のフォーマットはチャンネル番号*列番号*果房番号*before か after か*日時である。具体例を下に挙げる。

- 1_2_123_b_06_29_12_36_01.jpg （チャンネル番号が１で、列番号が２、果房番号が 123、摘果前、6 月 29 日 12 時 36 分 1 秒に撮られた写真）

## Deployment

```zsh
npm run build & npm run deploy
```
