# FPラボ公開先移行チェックリスト（広告導入前）

2026-10-21作成。GitHub PagesからCloudflare Pages等へ変更する際の作業手順。**未契約／未実施**であり、変更先URL・公開日・商用利用の適否は確定していません。

## 推奨順序
1. 現在の学習履歴がブラウザ内 `localStorage` に保存され、同一ブラウザであってもホスト名変更後は自動移行されないことを確認する。現時点では利用者の履歴移行機能を新設しない。既存サイトの稼働を維持し、利用者向けに事前周知する。
2. Cloudflare Pages の利用規約・Acceptable Use Policy・無料枠・広告掲載方針を運営者が確認する。個別の商用利用承認を得たとは断定しない。ログイン・契約・Github App連携は本人操作。
3. Cloudflare ダッシュボード > Workers & Pages > Create > Pages > Connect to Git を開き、`shikaku-financial/fp-study-site` の `main` を接続。通常の静的HTML配信なのでビルドコマンド不要。ビルド出力ディレクトリはリポジトリのルートを使う構成を検討する（現在のリポジトリにはREADMEなどの開発用ファイルもあるため、公開領域を限定する専用ビルド出力設定を優先）。
4. **実際に公開するファイルのみ** `_site` へコピーするスクリプトを移植対象に使う。現在のGitHub Actions Pages公開は `.github/workflows/pages.yml` の `Assemble site files` に定義されている。Cloudflareの公開出力ディレクトリに `_site` を指定し、スクリプトの動作をローカルでテストしてから接続する。
5. Cloudflareの一時URLで、学科・実技の表示、採点、途中保存、資料画像／CSS、各ガイド、404時の挙動を確認する。検索エンジンが一時URLを正規URLとして誤解しないよう、移行前のcanonicalを暫定のGitHub URLに維持する。
6. 独自ドメインを購入する場合は、予算、商標・誤認防止、名称、更新費を本人が確定し、DNS切替後にHTTPSの状態を確認する。購入やドメイン移管は**本人承認なしに実行しない**。
7. 新URLが正式に決定・稼働したら、全HTMLのcanonical、sitemap.xml、内部リンク、告知文、Search Consoleの対象プロパティを**同じリリースで**更新する。旧GitHub URLから完全なサーバー301リダイレクトを設定できるとは想定しない。
8. 旧ホストの既存ユーザーにはURL変更と履歴が自動移行されない注意を表示する。旧サイトを即時停止せず、履歴の扱いを決定してから段階的に移す。
9. Search Consoleで確定ドメインの所有権を確認し、sitemapを送信する。審査や検索登録は自動的に保証されない。
10. AdSenseに本人のアカウントで申請。承認後に広告配信タグを設置し、プライバシー記載・必要な同意設定・広告位置のテストを行う。回答操作画面の近くや模擬試験の途中には載せない。

## 公開と制約の根拠
- GitHub Pages（無料ホスティングによるオンライン事業への制限）：https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- GitHub追加サービス規約：https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features
- Cloudflare Pages Git連携：https://developers.cloudflare.com/pages/configuration/git-integration/
- Cloudflare Pages無料枠：https://developers.cloudflare.com/pages/platform/limits/
- Google Search Consoleの所有権確認：https://support.google.com/webmasters/answer/9008080

## 許容する現状
- GitHubは**コード管理を継続**し、広告運営を前提にした公開先だけを移行する方針。
- 広告、解析タグ、独自ドメイン、外部アカウント連携、本人確認はまだ導入しない。
- 監査済み学科360問＋実技240問、現在の採点・保存ロジックには手を加えない。
