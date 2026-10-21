# FPラボ｜Cloudflare Pages公開・SEO切替状況

最終更新：2026-10-21。**Cloudflareアカウント作成／GitHubリポジトリ連携／初回デプロイ成功はユーザーの画面で確認済み**。本番候補URLは https://fll-fp-lab.pages.dev/ 。トップページの表示もユーザーのスクリーンショットで確認済み。こちらのネットワークからの新URL直接検証と、Cloudflareでの全機能動作検証はまだ未了。独自ドメイン未購入、AdSense未申請。以下の登録手順は実施済みの記録として残す。

## 現段階の決定事項

- **無料・登録不要・広告による運営**を継続。GitHub `shikaku-financial/fp-study-site` はソースコードの管理元として維持。
- 当面の本番候補をCloudflare Pagesの無料URLに決定。広告運営の個別適合やAdSense承認は保証しない。
- 運営者の指定により**正式リリース前の学習履歴は引き継がない**。移行ツール・互換性修正・履歴エクスポート機能を作らない。新URLで演習履歴は初期状態から始まる。
- 現在のGitHub PagesはCloudflareでテストが終わるまで止めない。広告タグ・解析タグは未導入のまま。

## 最初に運営者がiPhoneで行う操作

1. Safariで [Cloudflare公式サイト](https://dash.cloudflare.com/sign-up) を開き、無料アカウントを作成し、必要に応じてメールを認証する。秘密情報はChatGPT/GitHub Issueに貼らない。
2. Cloudflareのダッシュボードで **Workers & Pages → Create application → Pages → Import an existing Git repository**（表示文言は変わる場合あり）と進む。
3. GitHub認証で **`shikaku-financial/fp-study-site`** を選択する。GitHub Appのアクセス範囲を選べる場合は **このリポジトリのみ** を許可する。
4. Pagesの設定値は次の通りにする。

| 設定 | 指定する値 |
| --- | --- |
| Project name | `fll-fp-lab`（利用可能な名前なら任意に変更してよい） |
| Framework preset | `None` / 設定なし |
| Production branch | `main` |
| Root directory | リポジトリのルート（デフォルトのまま） |
| **Build command** | `node .ci/build-static.cjs` |
| **Build output directory** | `dist` |
| 環境変数・Secrets | 追加しない |
| 有料プラン・独自ドメイン | この段階では不要 |

5. **Save and Deploy / Deploy site** を実行。完了画面に表示される **`https://（プロジェクト名）.pages.dev`** を控えて、このURLだけをChatGPTに伝える。アカウントのログイン情報・認証コード・APIキーは送らない。

## この構成で公開されるもの

- `.ci/build-static.cjs` が、サイト公開に必要なHTML、JS、CSS、ロゴ、サイトマップ、robots.txtのみを `dist/` にコピー。
- `.ci/`、`.github/`、README、計画書、開発データなどは公開成果物に含めない。
- GitHub Pagesも同じ `dist/` を使う。新しい公開先へのSEO切替はPR #129で実施し、旧サイトは当面停止しない。
- CloudflareはGitHubの `main` への更新を検知して自動デプロイする。PRはプレビューデプロイになる場合がある。

## 新公開先の確認状況

- [x] Cloudflare無料アカウント作成、GitHubリポジトリ `shikaku-financial/fp-study-site` との接続をユーザー画面で確認
- [x] ビルド設定：`node .ci/build-static.cjs`、出力 `dist`、production branch `main`
- [x] Cloudflareのデプロイ成功画面、および新URLでのトップページのユーザースクリーンショットを確認
- [x] リリース前の学習履歴を引き継がない方針を確認
- [ ] 新公開先で学科と実技を1問ずつ回答、模試の保存・再開・採点、ヘルプページと資料表の表示をユーザー実機またはWorkのブラウザで再確認
- [ ] 新公開先で `sitemap.xml` と `robots.txt` が公開されていることを確認
- [ ] 正規URL・サイトマップを新URLへ変更したmainの公開結果を確認（該当PRのCI完了後）
- [ ] Google Search Consoleで新URLプレフィックス `https://fll-fp-lab.pages.dev/` の所有権を確認し、`sitemap.xml` を登録する（運営者本人操作）
- [ ] AdSense申請は運営者本人による別ステップ。プライバシー方針・Cookie同意の実装を先に確認

## URL受領後に行う確認（この順序で）

1. Cloudflareの `pages.dev` で学科・実技の起動、1問回答、模試の保存→再読込→再開、資料表の表示、ガイド7ページ、画像を確認。
2. 新しいホストでは **以前の学習履歴が表示されなくても正常**。利用者が新しい学習履歴を記録できることだけ確認。
3. 検索用の正規URLは **https://fll-fp-lab.pages.dev/** に統一する。旧GitHub Pagesも同じcanonicalを含むが、これはHTTP 301リダイレクトではない。検索登録先はCloudflare版に限定する。
4. 当面は無料の `pages.dev` を使い、独自ドメインは収益化の要件・費用を確認してから本人が別途判断する。独自ドメインの購入はまだ実施しない。
5. 将来独自ドメインを導入する場合は、すべてのcanonical、サイトマップ、プライバシーのホスト説明、検索登録方針を**同時**に更新する。旧GitHub URLを残す場合は重複ページの扱いを見直す。
6. Search Consoleで確定URLの所有権を確認してサイトマップを送信する。AdSenseの本人登録・審査とCookie等への説明・同意設定は後段階。

## 必要な作業と不要な作業

**運営者が実施するもの：** Cloudflareアカウント作成と本人認証、GitHub認可、初回デプロイ、必要に応じたドメイン購入、Search Console/AdSenseの本人登録。

**不要：** リリース前履歴のエクスポート・インポート・移行用コード・学科360問と実技240問の再監査。

**まだ実施しない：** 旧サイト停止、ドメイン購入、広告・解析タグ設置、AdSense審査申請。

## 参照

- Cloudflare Pages 静的HTML: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Cloudflare Pages Git連携: https://developers.cloudflare.com/pages/configuration/git-integration/
- Cloudflare Pages ビルド設定: https://developers.cloudflare.com/pages/configuration/build-configuration/
- Cloudflare Pages 無料枠: https://developers.cloudflare.com/pages/platform/limits/
- GitHub Pages利用制限: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
