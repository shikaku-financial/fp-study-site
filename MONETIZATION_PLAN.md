# FPラボ 収益化計画
更新: 2026-10-22 / リリースゲートIssue #114完了。集客と収益化を優先する。

## Cloudflare Pages移行とSEO切替（2026-10-21）
- 運営者本人が無料Cloudflareアカウントを作成し、GitHubの `shikaku-financial/fp-study-site` に接続。初回デプロイ成功、`https://fll-fp-lab.pages.dev/` のトップ画面表示をスクリーンショットで確認。
- `pages.dev` を現段階の正規公開URLとしてHTML 10ページのcanonical、sitemap.xml、robots.txtを統一する。旧GitHub Pagesは停止せず、重複URLの正規化用canonicalをCloudflareに向ける（完全な301リダイレクトではない）。
- プライバシーポリシーにCloudflareの配信基盤と移行期間中のGitHub Pagesを明示する。広告・解析タグは未導入。
- **未了:** Google Search Consoleのサイトマップ取得成功確認、Google検索への実際のインデックス登録、AdSenseの審査承認、ads.txtのGoogle側認証、広告配信設定。
- 正式リリース前の学習履歴は移行対象外。ドメイン購入も未実施。


## 進捗更新（2026-10-22）
- Cloudflare公開URLのトップ画面・サイトマップ・FP2級学習ガイドは、運営者がiPhone Safariで表示できることを確認。Cloudflareの直近デプロイ履歴そのものの確認は別途必要。
- Search Console所有権確認・サイトマップ送信を実施。最初の読み込みは失敗。トップページはライブテストで登録可能と判定、トップおよびFP3級ガイドのインデックス登録リクエストは受付済み。登録済みとは限らない。
- SEO用HTMLは10ページ。PR #132〜#138の学習ガイド・比較ガイド・計算例・見出し強化をマージし、GitHub Actionsのテスト成功を確認。今後は検索実測に基づいて改善対象を選ぶ。
- AdSenseのアカウント設定・支払い情報送信・サイト所有権確認は完了表示。サイト審査はリクエスト済み、AdSense「サイト」一覧では「準備中」。審査承認は未確認。発行者IDは本人のAdSense画面で確認済み。`index.html` に所有権確認用メタタグを設置。広告JavaScriptや広告ユニットは未設置。PR #139で確認済みAdSense発行者IDのads.txtを追加し、2026-10-22に運営者がiPhone Safariで公開内容の一致を確認。AdSense側の認証状況は未確認。
- 公開GitHub Issues以外の非公開問い合わせ窓口は未設置。導入の必要性と運用負荷を検討する。広告配信前にプライバシー開示・該当地域の同意設定を整備する。
- https://fll-fp-lab.pages.dev/ はAdSenseでサイト追加・所有権確認・審査申請が完了。ドメイン購入は未承認。

## AdSense ads.txt の準備（2026-10-22）
- AdSenseヘルプ（https://support.google.com/adsense/answer/12171612?hl=ja）の書式と、運営者本人のAdSense画面で確認した発行者IDを照合。`ads.txt` にGoogleのDIRECT行のみを掲載する。
- `.ci/build-static.cjs` の公開対象に `ads.txt` を追加し、CIでホームページの `google-adsense-account` と一致するか検証。発行者IDは秘匿する性質ではなく、公開の販売者識別子。
- この操作はAdSense審査承認や広告表示開始を意味しない。申請の再送は不要。Google側の反映まで時間がかかる場合がある。

## モバイル学習導線の改善（2026-10-22）
- 既存10ページを維持。FP2級・3級の学習ガイドから比較ページへ直接リンクし、比較表を画面幅の狭い端末で横スクロールできるようにする。HTMLの表構造を維持し、キーボード操作できる領域を明示。
- SEOテストに内部リンクと比較表のモバイル表示設定のチェックを追加。試験問題、採点、学習記録のロジックは変更しない。

## 正規URLの統一（2026-10-22）
- 公開HTTP診断（PR #143）ではCloudflareからサイトマップ、robots.txt、ads.txt、HTML10ページをHTTP 200で取得できた。Google Search Consoleの取得エラー解消やインデックス登録を意味しない。
- Cloudflare Pagesは `/guide.html` を `/guide` に転送するため、PR #144で記事9ページのcanonicalとサイトマップを実際の最終URLに統一。トップページは `/`。
- 旧GitHub Pagesでの操作を維持するため、既存の相対内部リンク（.html付き）は今回変更しない。Cloudflare側では自動転送される。
- 公開HTTP診断を再実行し、canonicalに指定した拡張子なしURLへの直接アクセスで転送が起きないことを確認する。

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
   - Cloudflareアカウント作成とGitHub連携は本人が実施済み。
   - ドメイン名・年間更新料・予算を確定してから購入。購入・DNS変更・移行はまだ行わない。
   - **リリース前の学習履歴は保護・移行しない**と運営者が指定済み。新URLは履歴なしで開始する。移行ツールや互換性実装は不要。新旧URLの案内は明確にする。canonical/サイトマップ等は正式URL確定後に揃える。
2. 検索基盤: Search Console所有権確認・サイトマップ送信済み。初回サイトマップ取得エラーを経過観察。検索への実登録は未確認。表示/クリックの実測を開始する。
3. コンテンツ: 級別・科目別の入口を、重複のない学習目的別に追加。大量の薄いページや架空の監修者情報は作らない。
4. 広告申請: AdSenseサイト審査は申請済み・「準備中」。結果に応じて対応。承認・収益発生は未確認。
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
- 詳細なiPhone操作は `HOSTING_MIGRATION_CHECKLIST.md` を参照。Cloudflare・Googleの本人アカウント認証は実施済み。

## 検証範囲
今回の変更は配信専用アーティファクトと移行手順。学習ロジック/問題データ/保存形式は変更しない。既存CIはPRのゲートとして利用し、600問法令監査の再実行はしない。
