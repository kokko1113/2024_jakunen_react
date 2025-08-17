# 第20回若年者ものづくり競技大会ウェブデザイン職種 M1課題

第20回若年者ものづくり競技大会ウェブデザイン職種のM1課題の環境を再現したものになります。

限りなく本番と同じ状態を再現したので、競技大会の練習にご活用ください。

課題内容は`m1.pdf`を参照ください。

## 前提条件

- Node.js (推奨 v22以降)
- unzip (フロントエンドのzipを解凍する場合) ※Linuxのみ

## セットアップ

### バックエンド

APIやCDN形式のライブラリや素材を提供するサービスです。

1. プロジェクトルート（`backend` や `frontend` フォルダと同階層）でコマンドを実行してください

    APIサーバーとAPIドキュメントサーバーについて、依存関係のインストールから起動までを同時に行います。

    ```zsh
    npm run start
    ```

2. アクセス確認

    下記のURLにアクセスできればバックエンドのセットアップは完了です

    - APIサーバー: <http://localhost:3001/>
    - APIドキュメント: <http://localhost:5000/>

### フロントエンド

zip形式でReactとVueのプロジェクトが配布されています。

#### Windows

エクスプローラーやPowerShellを使ってセットアップしてください。

1. frontendフォルダに移動 (エクスプローラー等で移動)

    ```powershell
    cd frontend
    ```

2. ReactまたはVueのzipファイルを展開 (エクスプローラー等で展開)

    ```powershell
    Expand-Archive -Path 2025jakunen-react.zip
    ```

3. 展開先に移動 (エクスプローラー等で移動)

    ```powershell
    cd 2025jakunen-react
    ```

4. 依存関係をインストール

    ```powershell
    npm install
    ```

5. 開発サーバーを起動

    ```powershell
    npm run dev
    ```

#### Linux

1. frontendフォルダに移動

    ```bash
    cd frontend
    ```

2. ReactまたはVueのzipファイルを展開

    ```bash
    unzip 2025jakunen-react.zip
    ```

3. 展開先に移動

    ```bash
    cd 2025jakunen-react
    ```

4. 依存関係をインストール

    ```bash
    npm install
    ```

5. 開発サーバーを起動

    ```bash
    npm run dev
    ```

Vueを使う場合は`2025jakunen-vue.zip`を展開してください。

## サービス

### Webサイト

| 名称| URL |
| --- | --- |
| ガイドページ | <http://localhost:3001/guide> |
| APIドキュメント | <http://localhost:5000/> |

## API エンドポイント

詳細は[APIドキュメント](http://localhost:5000/)を参照してください。

| Method | Path | 説明 |
| --- | --- | --- |
| GET | <http://localhost:3001/api/posts> | 投稿一覧 |
| GET | <http://localhost:3001/api/posts/{id}> | 投稿取得 |
| POST | <http://localhost:3001/api/posts> | 新規投稿 |
| GET | <http://localhost:3001/api/categories> | カテゴリ一覧 |

## ライブラリ

CDN形式で配布されます。

| 名称 | URL |
| --- | --- |
| Bootstrap CSS | <http://localhost:3001/cdn/bootstrap.min.css> |
| Bootstrap JS | <http://localhost:3001/cdn/bootstrap.bundle.min.js> |
| Tailwind スクリプト | <http://localhost:3001/cdn/tailwindcss.js> |
| FontAwesome JS | <http://localhost:3001/cdn/fontawesome.min.js> |

## フォント

CDN形式で配布されます。

| 名称 | URL |
| --- | --- |
| NotoSansJP (Variable) | <http://localhost:3001/fonts/NotoSansJP-VariableFont_wght.ttf> |
| NotoSerifJP (Variable) | <http://localhost:3001/fonts/NotoSerifJP-VariableFont_wght.ttf> |
| BIZUDPGothic-Regular | <http://localhost:3001/fonts/BIZUDPGothic-Regular.ttf> |
| BIZUDPGothic-Bold | <http://localhost:3001/fonts/BIZUDPGothic-Bold.ttf> |
| BIZUDPMincho-Regular | <http://localhost:3001/fonts/BIZUDPMincho-Regular.ttf> |
| BIZUDPMincho-Bold | <http://localhost:3001/fonts/BIZUDPMincho-Bold.ttf> |

## リファレンス

- M1課題PDF: [JAVADA 第20回若年者ものづくり競技大会 ウェブデザイン 当日公表課題 モジュール1](https://www.javada.or.jp/jyakunen20/20/kadai/11/11_02_toujitsukouhyoukadaiM1_20250808_wsedomo1.pdf)
