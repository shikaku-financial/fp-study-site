# ファイナンシャル・ライセンス・ラボ（FLL）

FP2級・3級の**無料・登録不要**の学習サイトです。学科360問・実技240問の独自演習、分野別の問題演習、60問模試、採点・解説、復習に対応しています。日本FP協会・金融財政事情研究会（金財）の非公式サイトです。

- **FLL総合トップ:** https://fll-fp-lab.pages.dev/
- **FPラボ:** https://fll-fp-lab.pages.dev/fp
- **簿記ラボ:** https://fll-fp-lab.pages.dev/boki
- **既存のGitHub Pages:** https://shikaku-financial.github.io/fp-study-site/
- **リポジトリ:** https://github.com/shikaku-financial/fp-study-site
- **法令基準日（問題データの基準）:** 2026年4月1日。全600問の専門家による包括監修が完了したことを意味しません。
- **収益方針:** 無料・登録不要を維持し、将来的に広告で運営。広告配信コードは未導入。Cloudflare Web Analyticsは2026年10月24日に有効化し、本番の計測スクリプト配信を確認しています。

## FLLの共通デザイン・導線

`index.html` は資格を選ぶ親ブランドのトップ。`fp.html` と `boki.html` が各ラボの独立した入口です。全ページは既存FLLロゴと `brand.css` の配色・文字・ヘッダー・フッターを共有し、試験ごとの表・選択肢・解答形式は保持します。ホームの `fll.js` は従来の `index.html?level=...` / `?view=practical` / 既知のFPハッシュを `fp.html` へ引き継ぎます。公開オリジンや学習データの保存キーは変更しません。

`fll.webmanifest` はFLLトップ、既存 `site.webmanifest` はFPラボを起動します。`node .ci/fll-check.cjs` が旧リンク互換・共通ブランド・テキストのコントラストを確認。既存FP93テスト群は現在のFPページを旧fixture名へコピーして実行し、親トップとは別に検証します。CIの `fll-browser.cjs` は320/390/768/1440pxで両ブラウザエンジンを検証し、確認用PNGをworkflow artifactへ保持します。

## 簿記ラボ

同じFLLサイト内の独立コーナーとして [簿記ラボ](https://fll-fp-lab.pages.dev/boki) を提供します。日商簿記3級（60分・3大問）と2級（90分・5大問）の独自模試を各2回分（計60題）収録。科目選択・金額入力、表形式問題、分野別演習、結果・解説、復習、中断再開に対応します。

問題は日本商工会議所のサンプルの出題構成を参考に独自作成し、転載していません。採点は独自基準（仕訳は取引全体の一致、表は入力欄単位）。学習記録キーは `fll-boki-progress` でFPとは分離しています。`boki.html`、`boki-data.js`、`boki-extra.js`、`boki-core.js`、`boki.js`、`boki.css` が実装です。確認は `node .ci/boki-check.cjs`、`node .ci/boki-second-check.cjs`、`node .ci/boki-flow-check.cjs`。CIの `Boki Lab mobile browsers` は公開用distをChromium/WebKit・幅320/390pxで検証します（iPhone実機とは別）。全問専門家監修は未完了です。2026年度の出題区分表（2022年度版の継続適用）を基準とし、2027年度の改定とは分離して管理します。2026年10月の内容監査では有価証券の記帳用語、3級家賃決算整理の対象期間、2級法定準備金・棚卸減耗と評価損・会計上の損失と法人税等の解説を明確化しました。答え・配点・問題IDは変更していません。追加の独立計算監査は `.ci/boki-question-quality-check.cjs` で行います。

第2回では3級の商品有高帳・伝票集計、2級の連結・個別原価計算・標準原価計算を追加。現在の保存データでは模試回を表す `form` が必須です。`form` を持たない旧版データは互換復元せず、回ごとに演習・履歴・復習を分離します。

出題区分は [日本商工会議所の2026年度適用区分](https://www.kentei.ne.jp/bookkeeping/exam-list) を参照。2027年度区分への移行は未完了です。連結の内部取引・未実現利益の確認資料は [ASBJ連結財務諸表に関する会計基準 第34～38項](https://www.asb-j.jp/jp/accounting_standards_system/details.html?topics_id=111)。資料照合は全問の専門家監修を意味しません。

## FPラボの初期読込軽量化

学科ページでは実技用240問の `practical-questions.js` と設例描画・実技UIを初期読込せず、実技選択時または `?view=practical` 直接リンク時だけ `practical-loader.js` から順番に読み込みます。既存の学習履歴キー、採点ロジック、問題データは不変です。通信失敗時は再試行の案内を表示します。実際の体感速度は、後日実測データから確認します。

## サイトの公開・保存方式

Cloudflare Pagesを正規公開先とし、同じリポジトリからGitHub Pagesにも配信します。公開ビルドは `.ci/build-static.cjs` が `dist/` に許可済みの静的ファイルだけを出力します。正規URL・サイトマップ・robots.txtはCloudflareを基準にしています。

アカウント登録、バックエンドでの学習データ保存はありません。回答履歴と模試の途中経過は**利用者の端末のブラウザ（localStorage）**に保存され、別の端末・別サイトのURLへ自動で引き継がれません。

## 開発アカウントと安全な更新手順

- **リポジトリ所有者:** `shikaku-financial`（削除・移管しない）
- **開発用共同作業者:** `shikaku-financial-lab`（書き込み権限を確認済み）
- **保護対象:** `main`。Ruleset「Protect main」でPR経由の変更と `regression` チェック成功が必須。強制更新・削除は禁止
- **ChatGPTからの開発:** GitHub連携の `shikaku-financial-lab` アカウントを選択し、既存リポジトリに対して作業する。別リポジトリへのコピー、所有者の変更、Cloudflareの接続先変更は不要

通常の変更は次の順に進めます。

1. `main` と未マージPR・関連Issueを確認する。
2. 変更対象を小さく定め、新しい開発ブランチへコミットする。
3. PRを作成し、`regression` が成功したことを確認してからマージする。
4. 公開ファイルを変更した場合はGitHub PagesとCloudflare Pagesのデプロイ結果を確認する。文書のみの変更時は再公開を不要とする。
5. 実際のiPhone Safariでの表示確認は、CIのブラウザ検査とは区別して報告する。

## 速度とアクセス解析の運用

`node .ci/asset-budget-check.cjs` はFLLトップ・FPラボ・簿記ラボの初期HTML・CSS・JSをgzipサイズで点検し、増量時のスマホ向け性能低下を早期に発見するためのCIガードです。実機の表示時間・Core Web Vitalsを保証するものではありません。

Cloudflare Pages Web AnalyticsはPagesプロジェクトの「Metrics → Enable」を運営者が手動で有効化した場合にのみ自動挿入されます。セキュリティポリシーは `https://static.cloudflareinsights.com/beacon.min.js` へのスクリプトアクセスだけを追加許可し、送信先は同一サイトの `/cdn-cgi/rum` に限定します。手動で計測スクリプトを埋め込まないでください。公開先はCloudflare Pagesを正規とし、GitHub Pagesに同じ計測を重複させません。

## 自動テストとセキュリティ

- `node .ci/run.cjs`：学科360問・実技240問の契約、採点・保存/再開などの回帰
- `node .ci/seo-pages-check.cjs`：公開ページ・内部リンク・sitemap・検索用メタデータ
- `node .ci/security-check.cjs`：CSP、Cloudflareの防御ヘッダー、配信設定の整合性
- `node .ci/build-static.cjs`：公開用 `dist/` の生成と許可ファイル検証
- `.github/workflows/live-security-audit.yml`：本番応答の防御ヘッダーを週次と公開変更時に検査

現行のFP学習コードはルートの `fp.html`、`app.js`、`questions.js`、`practical.js`、`practical-questions.js`、`practical-materials.js` 等です。既存の問題ID・回答記録・採点ロジックを、ドキュメント更新だけを理由に変更しません。

## 運用と関連資料

- [引き継ぎ管理Issue #154](https://github.com/shikaku-financial/fp-study-site/issues/154) — 新しいGitHubアカウントでの開発と検証状況
- [セキュリティ管理Issue #151](https://github.com/shikaku-financial/fp-study-site/issues/151) — 管理アカウントの二要素認証など
- [収益化フェーズのIssue #130](https://github.com/shikaku-financial/fp-study-site/issues/130) — Search Console・AdSenseの進捗（参照時点のIssue番号はリンク先を確認）
- [開発ガイド](DEVELOPMENT_GUIDE.md) — 詳細な監査経緯を含む過去の記録
- [集客改善計画](GROWTH_PLAN.md) — Search Consoleデータに基づいた改善方針
- [セキュリティ運用](SECURITY_OPERATIONS.md) — CSP・広告導入時の注意
- [テスト手順](.ci/README.md) — 回帰テストと旧版fixtureの扱い

**最終更新：2026年10月23日**

旧READMEにあった過去のキャッシュ不具合・検証記録は、Gitの履歴で参照できます。現在の公開状態と当時の記録は区別してください。

## 資格保有者監修とAI編集監査の運用

運営者のFP・日商簿記資格保有と、掲載問題の監修完了は別の事実です。公開中の説明は [運営方針](https://fll-fp-lab.pages.dev/about#review-policy)、内部の確認基準は `EDITORIAL_REVIEW_CHECKLIST.md` を参照。AIによる問題作成支援・テスト実行を人間の専門家監修と称しません。

CIでは `node .ci/editorial-audit.cjs` により、FP学科360問・実技240問、簿記計60題の**編集上の要確認候補**をGitHub Actions Summaryへ出力します。合格／不合格や正答の正しさを判定する検査ではありません。実際に人手で確認できた設問のみ `EDITORIAL_REVIEW_RECORDS.json` に監修記録を残し、SHA-256ハッシュで版が変わった監修記録の再利用を禁止します。**初期の人手監修記録は0件**です。詳しくは `EDITORIAL_REVIEW_CHECKLIST.md` をご覧ください。
