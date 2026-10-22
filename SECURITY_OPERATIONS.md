# FPラボ 公開サイトのセキュリティ運用

最終更新：2026-10-23

## 公開サイトの防御
- 本番正規URL： `https://fll-fp-lab.pages.dev/`。Cloudflare Pages は `dist/_headers` を解釈し、各静的応答にセキュリティヘッダーを付与する。
- CSPは実行元を同一オリジンに制限し、外部スクリプトとインラインJavaScriptの実行を禁止。object/iframe埋め込み、任意のbase、不要な外部への通信を制限する。
- すべての公開HTMLには `meta http-equiv="Content-Security-Policy"` も配置する。旧GitHub Pagesでは `_headers` がHTTPヘッダーとして適用されないため、meta CSPがスクリプトの実行制限を担う。ただし**meta CSPでは `frame-ancestors` を強制できず、GitHub Pagesには `X-Frame-Options` も設定されない**。旧URLと新URLで防御範囲は同一ではない。
- `style-src 'unsafe-inline'` は既存404ページのインラインCSSとの互換のため。インラインJavaScriptは許可しない。
- 個人情報・学習記録はブラウザのlocalStorageを利用。サイト運営者がサーバーへ受信する仕組みは現時点でない。端末共有、バックアップ、ブラウザデータ削除の影響は残る。
- これらはXSS防止の補助策。全件の脆弱性なしを保証するものではない。

## AdSense・解析ツール導入前の必須変更
AdSenseやGoogle Analyticsを有効にする場合、現状の `script-src 'self'` / `connect-src 'self'` などは外部スクリプトをブロックする。広告コードを貼る前に、実際に必要な配信元だけを**審査・検証して**CSPを更新し、モバイルブラウザで表示・解答・保存・再開を再検証する。安全性確保のために `script-src 'unsafe-inline'` や `* ` の全面許可へ安易に緩めない。広告配信の承認・設置はこの変更では行わない。

## GitHubとアカウント
- GitHub Pagesの公開ワークフローは特定SHAに固定したActionsを使用し、チェックアウト資格情報を残さない。Cloudflare Pagesはmainへの更新で公開する。
- 本人側でGitHub・Cloudflare・Googleの2段階認証とパスキー、復旧方法、接続アプリの権限を確認する。
- GitHubリポジトリのSettingsから、mainへのPR経由の変更・レビューと必要なチェックを必須にする設定を検討する。所有者のみが変更できる設定は代理変更したと報告しない。
- 旧GitHub Pagesの公開が不要になれば、既存利用者の案内を整え、停止を検討する。すぐに停止はしない。

## 検証と制約
- CIでHTMLのCSP、`_headers`、公開出力にあるファイル、ActionsのSHA固定を検証する。
- CloudflareのCSPヘッダーは実際に反映されたHTTPレスポンスを確認する必要がある。GitHubのCI成功だけでは実サービスのヘッダー配信を確定できない。
- CAPTCHA/WAFの無条件追加や過剰なレート制限は、学習者やGooglebotを妨げ得るため今回の対象外。
