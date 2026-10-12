# FP学科トレーニング Ver.9（各級180問）

iPhoneのSafariからGitHub Pagesにアップロードするだけで更新できる、静的な学科対策サイトです。費用のかかるサーバー・会員登録・ビルド作業は不要です。

## 更新内容

- FP3級：120問 → **180問**（正誤式90問・三答択一式90問）。各6分野30問（正誤式15問・三択15問）。
- FP2級：120問 → **180問**（四答択一式180問）。各6分野30問。
- **今回追加120問**：FP3級60問・FP2級60問。金財の2026年5月公表学科試験の出題分野・出題形式・計算/事例の切り口を参考にした独自設問。
- 60問模試：毎回ランダム抽出。FP3級は正誤式30問＋三択30問、FP2級は四択60問。各分野10問。
- 保存・再開・見直しマーク・過去模試の答え合わせ・学習記録は継続。
- 既存240問のデータは変更していません。新しい問題IDは `fp3-121`～`fp3-180` と `fp2-121`～`fp2-180` です。

## iPhoneでの反映方法

1. このZIPをダウンロードし、iPhoneの「ファイル」アプリでタップして展開する。
2. Safariで https://github.com/shikaku-financial/fp-study-site/upload/main を開く。
3. 展開先のフォルダの **`index.html`・`style.css`・`questions.js`・`app.js`** の4ファイルだけを選択してアップロードする（GitHubが同名ファイルを更新する）。
4. 緑色の **Commit changes** をタップする。
5. 数分後に https://shikaku-financial.github.io/fp-study-site/ を開き、`Ver.9｜各級180問` を確認する。古い表示が残る場合はSafariを再読み込みする。

`README.md` と `QA_REPORT.md` はサイト動作に不要で、GitHubへアップロードしなくてもかまいません。`new-questions.json` は追加120問の監査用データで、同様にサイト動作には不要です。

## 参考資料・注意

- 一般社団法人金融財政事情研究会「FP技能検定2級 学科試験 2026年5月公表分」 https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf
- 同「FP技能検定3級 学科試験 2026年5月公表分」 https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf
- 公表元 https://www.kinzai.or.jp/fp/news-fp/50236.html
- 試験問題の利用条件 https://www.kinzai.or.jp/ginou/license_terms.html

**上記PDFの法令基準日は2025年4月1日です。** Ver.9の問題はこれらの原文の転載ではなく、形式・分野・論点を参考にした新規作成の設問です。追加問題の解説や正答について、全件の専門家監修や2026年現在の法令への全面的な照合は済んでいません。**実際の受検に使う場合は最新の公式資料で確認してください。**

技術上の検査結果と未解消点は `QA_REPORT.md` を参照してください。
