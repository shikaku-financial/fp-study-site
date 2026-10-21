# FPラボ｜Cloudflare Pages公開手順（iPhoneだけで可能）

最終更新：2026-10-21。**未接続・未公開・独自ドメイン未購入**。この手順は、Cloudflareアカウントをまだ持たない運営者向けです。

## 現段階の決定事項

- **無料・登録不要・広告による運営**を継続。GitHub `shikaku-financial/fp-study-site` はソースコードの管理元として維持。
- 広告運営の候補公開先としてCloudflare Pages無料プランを優先検討する。規約上の個別適合やAdSense承認は保証しない。
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

- `.ci/build-static.cjs` が、サイト公開に必要なHTML、JS、CSS、ロゴ、サイトマップのみを `dist/` にコピー。
- `.ci/`、`.github/`、README、計画書、開発データなどは公開成果物に含めない。
- GitHub Pagesも同じ `dist/` を使う。新しい公開先とのコンテンツ差分を減らすためで、公開先は**まだ切り替えない**。
- CloudflareはGitHubの `main` への更新を検知して自動デプロイする。PRはプレビューデプロイになる場合がある。

## URL受領後に行う確認（この順序で）

1. Cloudflareの `pages.dev` で学科・実技の起動、1問回答、模試の保存→再読込→再開、資料表の表示、ガイド7ページ、画像を確認。
2. 新しいホストでは **以前の学習履歴が表示されなくても正常**。利用者が新しい学習履歴を記録できることだけ確認。
3. 旧GitHub PagesのURLとCloudflareのURLが共に開く間、canonicalやサイトマップは旧URLを暫定的に指していてよい。ただし **新URLの検索登録・AdSense申請を進める前に正式公開URLを一つ決めて修正する**。
4. 正式なURLを `pages.dev` とするか、独自ドメインを購入するかは本人が費用と名称を確認して決定。**独自ドメインは必須ではない**。購入は本人の確認を得てから行う。
5. 正式なURL決定後、すべてのcanonical、サイトマップ、プライバシーのホスト説明、サイト内のリンク、検索登録方針を合わせて更新する。旧GitHub URLは必要なら案内専用として残す。
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
