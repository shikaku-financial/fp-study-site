# FPラボ 収益化計画
更新: 2026-10-21 / リリースゲートはIssue #114完了。ここからは集客と収益化を優先する。

## Cloudflare Pages移行とSEO切替（2026-10-21）
- 運営者本人が無料Cloudflareアカウントを作成し、GitHubの `shikaku-financial/fp-study-site` に接続。初回デプロイ成功、`https://fll-fp-lab.pages.dev/` のトップ画面表示をスクリーンショットで確認。
- `pages.dev` を現段階の正規公開URLとしてHTML 7ページのcanonical、sitemap.xml、robots.txtを統一する。旧GitHub Pagesは停止せず、重複URLの正規化用canonicalをCloudflareに向ける（完全な301リダイレクトではない）。
- プライバシーポリシーにCloudflareの配信基盤と移行期間中のGitHub Pagesを明示する。広告・解析タグは未導入。
- **未了:** 新URLへの外部からの独立アクセス・全操作の検証、Google Search Consoleの所有権確認・サイトマップ送信、AdSenseの本人登録・審査。
- 正式リリース前の学習履歴は移行対象外。ドメイン購入も未実施。

## 第1バッチ
- 独立した運営方針・プライバシー・問い合わせ・学習ガイドを追加。
- トップとフッターから到達可能。静的HTMLなので案内の閲覧にJavaScript不要。
- 現行公開URLのcanonicalとサイトマップを追加。検索登録や順位上昇は保証しない。
- 配信ワークフローに新ファイルを含める。
- 広告・解析は未導入。利用していないサービスを利用中と表示しない。
- GitHub Issuesの問い合わせは公開でログイン必須。非公開窓口の連絡先は未提供。

## 次の順序と完了条件
1. 公開先・ドメイン確定: GitHub Pages規約のオンライン事業等の制限を確認。広告付き学習サイトの個別適否は不明。広告設置前に適合を確認するか、広告運営に適したホストへ移す。
   - 移行候補: Cloudflare Pages。無料枠は500ビルド/月・20,000ファイル・1ファイル25MiB（2026-10-21公式資料確認）。これは容量の適合確認であり商用利用の個別承認ではない。
   - Cloudflareアカウントは未作成。無料アカウント作成とGitHub連携認可は運営者本人がiPhoneで実施する。
   - ドメイン名・年間更新料・予算を確定してから購入。購入・DNS変更・移行はまだ行わない。
   - **リリース前の学習履歴は保護・移行しない**と運営者が指定済み。新URLは履歴なしで開始する。移行ツールや互換性実装は不要。新旧URLの案内は明確にする。canonical/サイトマップ等は正式URL確定後に揃える。
2. 検索基盤: 確定URLでSearch Console所有権確認・サイトマップ送信。登録は未実施。検索表示/クリックを基準値にする。
3. コンテンツ: 級別・科目別の入口を、重複のない学習目的別に追加。大量の薄いページや架空の監修者情報は作らない。
4. 広告申請: 運営情報と非公開問い合わせの要否を整理、AdSense本人のアカウントで申請。承認・収益発生は未確認。
5. 広告公開: 配信サービスのプライバシー開示・必要な地域別同意設定を先に実装。案内/解説/採点結果から少数掲載。解答ボタン付近・模試途中・全画面広告は初期対象外。SPAの画面切替を広告PVと同一視しない。
6. 月次改善: 検索流入/学習開始/再訪/実際の広告収益を確認。アクセス解析導入時はデータ最小化と説明を整備。実測前のRPMや収益達成時期を断定しない。

## 根拠（2026-10-21確認）
- GitHub Pages利用制限: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- GitHub追加製品規約: https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features
- Cloudflare Pages仕様: https://developers.cloudflare.com/pages/platform/limits/
- AdSense要件: https://support.google.com/adsense/answer/9724
- 広告導入時の開示事項: https://support.google.com/adsense/answer/1348695
- Google Publisher Policies: https://support.google.com/adsense/answer/10502938

## Cloudflare Pages 接続手順（ユーザー操作が必要）
- GitHubリポジトリはそのまま保持し、`.ci/build-static.cjs` の出力 `dist/` のみを配信する。GitHub Pagesも同じ公開用ビルドを利用する。
- **Build command:** `node .ci/build-static.cjs` / **Output directory:** `dist` / **Production branch:** `main` / **Framework:** `None`。
- 詳細なiPhone操作は `HOSTING_MIGRATION_CHECKLIST.md` を参照。Cloudflare・Googleの本人アカウント認証は未実施。

## 検証範囲
今回の変更は配信専用アーティファクトと移行手順。学習ロジック/問題データ/保存形式は変更しない。既存CIはPRのゲートとして利用し、600問法令監査の再実行はしない。
