// FPラボ 学科 Ver.53：未検証86問の主要論点レビュー、選択肢品質の重点改訂
const QUESTIONS = [
  {
    "id": "fp3-001",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "毎年同額を積み立て、一定の利率で複利運用した場合の将来の元利合計額は、毎年の積立額に年金現価係数を乗じて求める。",
    "choices": [
      "○（正しい）",
      "×（誤り）"
    ],
    "answer": 1,
    "explanation": "将来の積立合計額には年金終価係数を使います。年金現価係数は、将来の一定額の受取りに対応する現在の元本を求める係数です。",
    "lawReferenceDate": "2026-04-01",
    "revision": 2,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-002",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "保険期間10年の定期保険（特約なし）では、被保険者が死亡せずに保険期間が満了した場合、原則として満期保険金を受け取ることができる。",
    "choices": [
      "○（正しい）",
      "×（誤り）"
    ],
    "answer": 1,
    "explanation": "一般的な定期保険には満期保険金がありません。死亡保障の保険期間と、満期保険金の有無を区別します。",
    "lawReferenceDate": "2026-04-01",
    "revision": 2,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/41.html",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-003",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "下記の固定利付債の直接利回りは（　）％である。\n〈計算資料〉\n項目 / 内容\n額面100円当たりの購入価格 / 90円\n表面利率（年率） / 1.8％\n額面100円当たりの償還額 / 100円\n税金・手数料は考慮しない。",
    "choices": [
      "1.8",
      "2.0",
      "10.0"
    ],
    "answer": 1,
    "explanation": "直接利回りは年間利息÷購入価格×100です。額面100円当たり1.8円÷90円×100＝2.0％。償還差益は含めません。",
    "lawReferenceDate": "2026-04-01",
    "revision": 2,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-004",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "下記の速算表によると、課税所得金額が280万円の場合の所得税額は28万円となる。\n〈所得税の速算表（抜粋）〉\n課税所得金額 / 税率 / 控除額\n1,000円以上1,950,000円未満 / 5％ / 0円\n1,950,000円以上3,300,000円未満 / 10％ / 97,500円\n3,300,000円以上6,950,000円未満 / 20％ / 427,500円\n速算表は本問で必要な範囲のみを示す。復興特別所得税、税額控除、住民税は考慮しない。",
    "choices": [
      "○（正しい）",
      "×（誤り）"
    ],
    "answer": 1,
    "explanation": "280万円×10％－97,500円＝182,500円です。税率だけでなく速算表の控除額を差し引きます。",
    "lawReferenceDate": "2026-04-01",
    "revision": 2,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-005",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "図の敷地で、建ぺい率の上限が60％の場合、建築できる建物の建築面積の上限は（　）㎡である。\n〈計算資料〉\n項目 / 内容\n敷地の形状・寸法 / 長方形、20m×10m\n建ぺい率の上限 / 60％\n建ぺい率の緩和、セットバックその他の制限は考慮しない。図は縮尺を正確に示していない。",
    "choices": [
      "80",
      "120",
      "200"
    ],
    "answer": 1,
    "explanation": "敷地面積20m×10m＝200㎡。200㎡×60％＝120㎡です。建築面積は建物の水平投影面積を指し、延べ面積とは異なります。",
    "revision": 6,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/common/001205298.pdf",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-006",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "図の親族関係でAが死亡し、相続人が配偶者Bと実子C・Dのみである場合、Cの法定相続分は2分の1である。\n相続放棄、欠格、廃除はなく、遺言による指定は考慮しない。",
    "choices": [
      "○（正しい）",
      "×（誤り）"
    ],
    "answer": 1,
    "explanation": "配偶者Bが2分の1、子全体で2分の1です。子C・Dで均等に分けるため、Cは4分の1です。",
    "lawReferenceDate": "2026-04-01",
    "revision": 2,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp2-001",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資金計画に用いる係数について、資料の条件に基づく次の記述のうち、最も適切なものはどれか。\n〈計算資料〉\n項目 / 内容\n運用期間・利率 / 5年、年5％（複利）\n終価係数 / 現価係数 / 1.2763 / 0.7835\n年金終価係数 / 年金現価係数 / 5.5241 / 4.3295\n減債基金係数 / 資本回収係数 / 0.1884 / 0.2310\n積立て・受取りは毎年末。税金・手数料は考慮しない。",
    "choices": [
      "600万円を5年間運用した元利合計額は、600万円に現価係数を乗じて求める。",
      "5年後の600万円を準備する毎年の積立額は、600万円に減債基金係数を乗じて求める。",
      "毎年100万円を5年間受け取るための元本は、100万円に資本回収係数を乗じて求める。",
      "毎年100万円を5年間積み立てた将来額は、100万円に年金現価係数を乗じて求める。"
    ],
    "answer": 1,
    "explanation": "目標額から毎年の積立額を求めるのは減債基金係数です。1は終価係数、3は年金現価係数、4は年金終価係数を用います。",
    "revision": 5,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "lawReferenceDate": "2026-04-01",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp2-002",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の2契約に加入するAについて、次の記述のうち、最も不適切なものはどれか。\n〈計算資料〉\n項目 / 内容\n契約1：定期保険 / 保険期間10年、死亡1,000万円、満期なし\n契約2：養老保険 / 保険期間10年、死亡500万円、満期500万円\n被保険者・契約の状態 / いずれもA、同時に開始し現在有効\n特約、配当、解約返戻金は考慮しない。保険金支払の免責事由はなく、満了時に契約は終了する。",
    "choices": [
      "両契約の保険期間内にAが死亡した場合、死亡保険金の合計は1,500万円である。",
      "Aが生存して両契約が満了した場合、満期保険金の合計は500万円である。",
      "両契約の保険期間内にAが死亡した場合、死亡保険金と満期保険金の両方を受け取れる。",
      "Aが生存して契約が満了しても、定期保険から満期保険金は支払われない。"
    ],
    "answer": 2,
    "explanation": "死亡時には定期保険1,000万円と養老保険500万円の死亡保険金が支払われます。養老保険は死亡時に死亡保険金、生存満了時に満期保険金であり、死亡した契約で両方は受け取れません。",
    "revision": 4,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/38.html",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp2-003",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "下記固定利付債を購入し、償還まで保有する場合の最終利回り（年率、単利）はいくらか。小数点以下第3位を四捨五入する。\n〈計算資料〉\n項目 / 内容\n額面100円当たりの購入価格 / 96円\n表面利率（年率） / 1.6％\n額面100円当たりの償還額 / 100円\n残存期間 / 4年\n税金・手数料・経過利子は考慮しない。",
    "choices": [
      "2.08％",
      "2.50％",
      "2.71％",
      "3.33％"
    ],
    "answer": 2,
    "explanation": "年間利息1.6円＋年間償還差益（100円－96円）÷4年＝2.6円。2.6円÷96円×100＝2.7083…％なので2.71％です。直接利回りや複利利回りとは区別します。",
    "revision": 4,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp2-004",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税について、2026年12月1日以後の年末調整で改正後の基礎控除を適用する。居住者の合計所得金額が600万円で、他の適用要件を満たす場合の基礎控除額はどれか。",
    "choices": [
      "67万円",
      "63万円",
      "62万円",
      "104万円"
    ],
    "answer": 0,
    "explanation": "600万円は489万円超655万円以下なので67万円です。63万円は2025年分の同区分、62万円は2026年分の655万円超2,350万円以下等、104万円は2026年分の合計所得金額489万円以下の居住者の区分です。 法令基準日は2026年4月1日です。この改正の原則施行日は2026年12月1日で、2026年分に適用されます。施行前の月々の源泉徴収や準確定申告の取扱いを問うものではありません。",
    "revision": 6,
    "contentReview": "v80_limited_primary_source_and_effective_date_review",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1199.htm",
    "sourceName": "国税庁：基礎控除（令和8年4月1日現在法令等）",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "taxYear": 2026,
    "sourceLabel": "国税庁：2026年分の基礎控除",
    "sourceCheckedDate": "2026-10-19",
    "reviewNote": "2026-10-19：国税庁「令和8年分 給与所得者（従業員）の方へ」の基礎控除額表と再照合し、104万円の適用区分を合計所得金額489万円以下へ訂正。600万円の正答67万円は変更なし。包括監修は未完了。"
  },
  {
    "id": "fp2-005",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "下記の敷地における、容積率の制限による延べ面積の上限として、最も適切なものはどれか。\n〈計算資料〉\n項目 / 内容\n敷地面積 / 200㎡\n指定容積率 / 200％\n前面道路 / 建築基準法上の道路1本、幅員4m\n幅員に乗じる数値 / 0.4\n敷地は一つの用途地域内にあり、セットバック・容積率の緩和・床面積不算入・その他の建築制限は考慮しない。",
    "choices": [
      "160㎡",
      "240㎡",
      "320㎡",
      "400㎡"
    ],
    "answer": 2,
    "explanation": "前面道路幅員による容積率は4m×0.4＝1.6（160％）。指定容積率200％と比較して小さい160％を適用し、200㎡×160％＝320㎡です。",
    "revision": 4,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/common/001205298.pdf",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp2-006",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "Aの相続人が図の配偶者Bと実子C・Dのみであり、遺産6,400万円を法定相続分どおり取得する場合、Cの取得額として最も適切なものはどれか。\n〈計算資料〉\n項目 / 内容\n分割対象の遺産 / 6,400万円\n相続放棄、欠格、廃除、遺言、特別受益、寄与分、債務は考慮しない。",
    "choices": [
      "1,066万6,667円",
      "1,600万円",
      "2,133万3,333円",
      "3,200万円"
    ],
    "answer": 1,
    "explanation": "配偶者Bは2分の1、子C・Dはそれぞれ4分の1。Cは6,400万円×4分の1＝1,600万円を取得します。相続税額の計算問題ではありません。",
    "revision": 4,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-007",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の家計の純資産は800万円である。\n〈同一時点の資産・負債〉\n区分・項目 / 金額（万円）\n時点 / 2026年4月1日現在\n資産：預金 / 500\n資産：住宅時価 / 2,000\n負債：住宅ローン残高 / 1,700\n資料外の資産・負債はない。住宅等は提示時価、借入は同日の残高。売却費用・税額・評価差は考慮しない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "資産合計2,500万円－負債合計1,700万円＝純資産800万円です。すべて同じ時点の残高であり、年間収入や年間返済額とは区別します。",
    "choiceExplanations": [
      "正解。同一時点の資産から負債残高を引くと記述の純資産額になります。",
      "不適切。負債残高を資産合計から一度控除する計算です。"
    ],
    "topic": "家計の純資産",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "additionalSourceUrls": [],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v118_household_math_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "id": "fp3-008",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "5年後に600万円を準備するため、年末に毎年同額を積み立てる。資料の係数を使うと、必要な毎年の積立額は（　）万円である。\n〈計算資料〉\n項目 / 内容\n運用期間・利率 / 5年、年5％（複利）\n減債基金係数 / 0.1884\n年金終価係数 / 5.5241\n目標額 / 600万円\n係数は資料の数値をそのまま使う。税金・手数料は考慮しない。",
    "choices": [
      "108.66",
      "113.04",
      "3314.46"
    ],
    "answer": 1,
    "explanation": "目標額×減債基金係数です。600万円×0.1884＝113.04万円。年金終価係数は毎年の積立額から将来額を求めるときに使います。",
    "revision": 4,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "lawReferenceDate": "2026-04-01",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-009",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "現在の100万円を年2％の年1回複利で5年間運用する。5年後の元利合計を求めるために現在額に乗じる係数は（　）である。\n〈年2％・5年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.1041\n現価係数 / 0.9057\n年金終価係数 / 5.2040\n減債基金係数 / 0.1922\n年金現価係数 / 4.7135\n資本回収係数 / 0.2122\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "資本回収係数",
      "終価係数",
      "現価係数"
    ],
    "answer": 1,
    "explanation": "終価係数を用います。現在の一時金から将来の元利合計を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "choiceExplanations": [
      "不適切。現在の元金から毎年末の一定取崩額を求めます。",
      "正解。現在の一時金から将来の元利合計を求めます。",
      "不適切。将来の一時金から現在必要な一時金を求めます。"
    ],
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "topic": "6つの係数・終価係数",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ]
  },
  {
    "id": "fp3-010",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "資料の純資産額として、最も適切なものはどれか。\n〈同一時点の資産・負債〉\n区分・項目 / 金額（万円）\n時点 / 2026年4月1日現在\n資産：預貯金 / 700\n資産：有価証券時価 / 500\n負債：住宅ローン残高 / 450\n資料外の資産・負債はない。住宅等は提示時価、借入は同日の残高。売却費用・税額・評価差は考慮しない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "1,200万円",
      "750万円",
      "450万円"
    ],
    "answer": 1,
    "explanation": "資産合計1,200万円－負債合計450万円＝純資産750万円です。すべて同じ時点の残高であり、年間収入や年間返済額とは区別します。",
    "revision": 5,
    "contentReview": "v118_household_math_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。資産合計700＋500＝1,200万円を答え、負債450万円を控除していません。",
      "正解。1,200－450＝750万円です。",
      "不適切。450万円は負債残高であり、純資産ではありません。"
    ],
    "topic": "家計の純資産",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "additionalSourceUrls": [],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "id": "fp3-011",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の死亡保険契約は、契約者と被保険者が別人であるため、被保険者の同意があっても保険法上は一律に効力を生じない。\n〈契約当事者以外を対象とする死亡保険〉\n項目 / 条件\n契約時点 / 2026年4月1日以後の新規契約\n契約者 / 母A（保険会社と契約し、保険料を支払う）\n被保険者 / 意思能力のある成人の子B（30歳）\n保険事故 / Bの死亡\n同意 / Bが当該死亡保険契約に同意\n問う範囲 / 保険法38条の同意要件。告知等の他要件・引受審査は別途\n法令基準日：2026年4月1日。人物・契約条件は独自設例。\n明示した条文/課税区分の限定確認。全法令・全約款・個別請求/税額の包括監修ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。契約当事者以外の人を被保険者とする死亡保険では、その被保険者の同意がなければ効力を生じません。別人であること自体を一律の禁止理由とする規定ではありません。同意があるだけで、告知義務や引受条件を含むすべての要件を満たすという意味でもありません。",
    "choiceExplanations": [
      "不適切。別人であること自体の一律禁止と、被保険者の同意要件を取り違えています。",
      "正解。母Aと成人の子Bが別人という理由だけで一律に効力を否定しません。"
    ],
    "topic": "契約当事者以外を対象とする死亡保険",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://laws.e-gov.go.jp/law/420AC0000000056",
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/16920080606056.htm"
    ],
    "sourceLabel": "保険法38条/95条限定照合、または国税庁1750（2026年4月1日現在）",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v116_consent_limitation_roles_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Article38; enactment text plus official indexed clause/current-effective metadata; full 2026-date page unavailable; ID初回確認時期未確定。条文照合と基準日時点全改正/個別契約監修は区別。"
  },
  {
    "id": "fp3-012",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "下記契約の損害保険金は、「損害額から免責金額を差し引いた金額」を支払う条件である。今回受け取る保険金は（　）万円である。\n〈計算資料〉\n項目 / 内容\n保険の対象の価額・保険金額 / ともに1,200万円\n今回の損害額 / 420万円\n免責金額（自己負担額） / 20万円\n保険期間内の補償対象事故とする。比例てん補、費用保険金、他の保険契約は考慮しない。",
    "choices": [
      "400",
      "420",
      "1200"
    ],
    "answer": 0,
    "explanation": "損害額420万円－免責金額20万円＝400万円。保険金額は支払限度であり、常にその全額を受け取るわけではありません。",
    "revision": 5,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "lawReferenceDate": "2026-04-01",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-013",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の事故Aによる賠償責任への備えとして、最も適切な保険はどれか。\n〈私生活と業務の賠償事故〉\n項目 / 条件\n事故A / 休日に自転車で買い物中、過失で歩行者にけがをさせた\n事故B / 勤務先の仕事として配送中、過失で通行人にけがをさせた\n被害者 / いずれも無関係の第三者\n賠償責任 / いずれも法律上の損害賠償責任を負う\n保険 / 通常の個人賠償責任保険を検討。業務を拡張する特約なし\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "個人賠償責任保険",
      "施設所有（管理）者賠償責任保険",
      "生産物賠償責任保険（PL保険）"
    ],
    "answer": 0,
    "explanation": "事故Aは私生活上の自転車事故で、他人の身体に対する法律上の賠償責任に備える個人賠償責任保険を検討します。契約範囲・免責・支払限度額などを確認する必要があります。",
    "choiceExplanations": [
      "正解。職務外での自転車事故など、日常生活で他人にけがを負わせた法的賠償責任に備えます（契約条件による）。",
      "施設の欠陥・管理や所定の業務遂行による第三者への賠償が主な対象で、私生活の自転車事故ではありません。",
      "販売・引渡し後の製品の欠陥などが原因の第三者への賠償責任に備えるもので、本件の原因とは異なります。"
    ],
    "contentReview": "v111_liability_insurance_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "topic": "個人賠償責任・私生活と職務遂行",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/body/q080.html",
    "sourceLabel": "日本損害保険協会：個人賠償責任保険",
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/sme_insurance/liability/"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "id": "fp3-014",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の契約Xに該当する一般的な生命保険は（　）である。\n〈死亡時と満期生存時の給付〉\n項目 / 条件\n契約Xの保険期間 / 20年間\n期間内に死亡 / 死亡保険金500万円\n満期時に生存 / 満期保険金500万円\n範囲 / 通常の定額型主契約。特約・変額・外貨建を除く\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "養老保険",
      "定期保険",
      "収入保障保険"
    ],
    "answer": 0,
    "explanation": "養老保険は一定期間内の死亡保障と満期生存時の給付を備えます。死亡時と満期生存時は異なる支払事由で、両方を同時に受け取る意味ではありません。",
    "choiceExplanations": [
      "正解。養老保険は保険期間中の死亡保障と、満期まで生存した場合の満期保険金を備えます。",
      "定期保険は一定期間の死亡保障が中心で、通常、満期まで生存しても満期保険金はありません。",
      "収入保障保険は死亡時などに遺族へ一定期間の年金形式で給付する設計が中心で、一般の養老保険のような満期保険金ではありません。"
    ],
    "topic": "死亡時と満期生存時の給付",
    "lawReferenceDate": "2026-04-01",
    "revision": 1,
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/38.html",
    "additionalSourceUrls": [
      "https://www.jili.or.jp/knows_learns/kind/main/41.html",
      "https://www.jili.or.jp/knows_learns/kind/main/40.html"
    ],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "id": "fp3-015",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "他の条件が同じであれば、固定利付債の市場価格が上昇すると、その債券の利回りは低下する。",
    "choices": [
      "○（正しい）",
      "×（誤り）"
    ],
    "answer": 0,
    "explanation": "固定された利息・償還額に対して購入価格が高くなるため、利回りは低下します。価格と利回りは逆方向に動きます。",
    "lawReferenceDate": "2026-04-01",
    "revision": 2,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-016",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料のように複数資産へ分散していても、同じ期間に両資産が下落し、資産全体に損失が生じる場合がある。\n〈分散後にも残る損失〉\n項目 / 条件\n期首投資額 / 国内株式50万円、外国債券50万円\n同一期間の収益率 / 国内株式－10％、外国債券－5％\n外国債券の表示 / 為替変動を含む円建て総収益率（為替を重ねて加減しない）\n1期間の仮定結果で、実際の市場や常に発生する値動きを示すものではない。\n法令基準日：2026年4月1日。数値・資産は独自例。公式資料の図表・文章の転載ではない。\n円建て同一期間の税引前総収益率。途中の追加投資・引出し・配分変更、手数料・税、レバレッジなし。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "期末は45万円＋47.5万円＝92.5万円。期首100万円から7.5万円減少しています。分散投資は価格変動を抑える効果が期待できても、元本保証ではありません。",
    "choiceExplanations": [
      "正解。収益は－5万円と－2.5万円、合計－7.5万円。分散していても損失です。",
      "不適切。分散は損失の可能性を完全に消すものではありません。資料では両資産の収益率が負です。"
    ],
    "topic": "分散後にも残る損失",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.fsa.go.jp/policy/nisa2/invest/",
    "additionalSourceUrls": [],
    "sourceLabel": "金融庁/総務省統計局の定義と独自指定モデルの検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v124_diversification_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の限定照合3/指定モデル内部検算3。公式背景の参照を重複加算しない。法令改正照合0、ID初回時期未確定。"
  },
  {
    "id": "fp3-017",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料の外貨資産の円換算額は、時点Aより時点Bのほうが小さい。\n〈固定外貨額の円換算〉\n項目 / 条件\n保有外貨 / 10,000米ドル（両時点で同額）\n時点A / 1米ドル＝150円\n時点B / 1米ドル＝130円\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n外貨額の増減、利息、売買、追加投資・引出し、手数料、税額は考慮しない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "10,000米ドル×150円／米ドル＝1,500,000円。時点Bは1,300,000円。減少額は200,000円です。これは換算額の比較であり、実売却や確定損失の計算ではありません。",
    "choiceExplanations": [
      "正解。外貨額×円／米ドルにより、1,500,000円から1,300,000円へ減少します。",
      "不適切。米ドル保有額が一定でも、1米ドルを換算する円額の低下で円換算額は減少します。"
    ],
    "topic": "固定外貨額の円換算",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.boj.or.jp/about/education/oshiete/intl/g18.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "日本銀行の円高・円安定義／独自仮定の換算検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "id": "fp3-018",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料のA社株式のPERは（　）倍である。\n〈A社・B社の株式資料〉\n項目 / A社 / B社\n株価 / 1,800円 / 2,400円\nEPS（1株当たり当期純利益） / 120円 / 80円\nBPS（1株当たり純資産） / 900円 / 1,200円\n資料は架空企業の固定値であり、各指標は計算用に与えた値である。税金・手数料・株式分割等は考慮しない。",
    "choices": [
      "2",
      "15",
      "30"
    ],
    "answer": 1,
    "explanation": "A社のPERは1,800円÷120円＝15倍。2倍はA社のPBR（1,800÷900）、30倍はB社のPER（2,400÷80）です。問われている会社と指標の両方を確認します。",
    "contentReview": "v94_equity_metrics_primary_definition_and_arithmetic_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "choiceExplanations": [
      "不適切。A社の株価をBPSで割ったPBRです。",
      "正解。A社の株価1,800円をA社のEPS120円で割ります。",
      "不適切。B社のPERであり、A社の値ではありません。"
    ],
    "topic": "企業資料からのPER計算",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jpx.co.jp/glossary/ka/73.html",
    "sourceLabel": "日本取引所グループ：株価収益率",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.94：PER/PBR/配当利回り/配当性向の資料・定義・独立計算・誤答根拠を限定確認。架空企業の固定値であり、法令変更の確認件数や実銘柄の投資判断を示すものではない。"
  },
  {
    "id": "fp3-019",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "資料のAさんの給与所得は、給与所得控除を使わず、自宅の住宅ローン元本の年間返済額を給与収入から直接引いて計算する。正しければ〇、誤っていれば×を選びなさい。\n〈給与収入と給与所得の区別〉\n項目 / 条件\n対象者・年分 / 日本の居住者である会社員Aさん、2026年分\n給与収入 / 源泉徴収前の給与等の収入金額\n追加控除 / 特定支出控除・所得金額調整控除は適用なし\n住宅ローン / 私生活用の自宅の借入元本返済額。給与所得の計算と区別する\n法令基準日2026年4月1日。資料は独自の設例。指定する計算段階を確認すること。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "本問の条件では、源泉徴収前の給与収入から給与所得控除額を差し引いて給与所得を求めます。私生活上のローン返済額をその代わりに使いません。給与所得控除の具体額や住宅ローンに関する個別税額控除の適用要件は、この問題では計算しません。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1400.htm",
    "choiceExplanations": [
      "不適切。住宅ローン元本の返済額へ置き換える記述は誤りです。",
      "正解。資料の条件で使うのは給与所得控除であり、私的な元本返済額ではありません。"
    ],
    "topic": "給与収入と給与所得の区別",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceLabel": "国税庁：給与・年金・退職所得の基本計算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v130_income_retirement_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂公式主要事項4/指定条件内部検算2。控除額の計算と所得金額/税額を区別。全改正・条文全文・全例外の包括監修ではない。"
  },
  {
    "id": "fp3-020",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "資料の土地売却による譲渡所得と課税口座の上場株式の譲渡所得等は、給与所得などと区分して税額を計算する申告分離課税の対象となる。正しければ〇、誤っていれば×を選びなさい。\n〈譲渡所得等の申告分離課税〉\n項目 / 条件\n対象者・年分 / 日本の居住者である会社員Aさん。2026年分\n土地売却 / 保有していた土地（商品ではない）の売却により、課税対象の譲渡益が生じた\n株式売却 / NISAではない課税口座で上場株式を売却し、課税対象の譲渡益が生じた\n比較する論点 / 給与所得等に合算する課税方式と、所得を区分して税額計算する方式\n範囲 / 非課税特例・税率・確定申告の要否は問わない\n土地と株式の損益を相互に自由に通算できるという意味ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "土地の譲渡所得と株式等の譲渡所得等は、給与所得等と分けて税額を計算します。「申告分離課税」という名称だけで確定申告が必ず必要とは判断しません。本問は課税口座の課税対象益を指定しており、NISAの非課税と区別しています。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3202.htm",
    "choiceExplanations": [
      "正解。提示する土地・株式の譲渡所得等は、給与所得等と区分する申告分離課税の対象です。",
      "不適切。資料の申告分離課税の説明は正しいため、×ではありません。"
    ],
    "topic": "譲渡所得等の申告分離課税",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1463.htm"
    ],
    "sourceLabel": "国税庁・東京都主税局の基本事項限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v132_tax_classification_documents_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂公式主要事項4/既存主要論点再確認1を分離。医療費の旧確認論点は重複加算せず、新改訂の健康増進薬品の誤答根拠を確認。法令全文・全例外は未確認。"
  },
  {
    "id": "fp3-021",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "課税所得金額が280万円の場合、下記の速算表で計算した所得税額は（　）円である。\n〈所得税の速算表（抜粋）〉\n課税所得金額 / 税率 / 控除額\n1,000円以上1,950,000円未満 / 5％ / 0円\n1,950,000円以上3,300,000円未満 / 10％ / 97,500円\n3,300,000円以上6,950,000円未満 / 20％ / 427,500円\n速算表は本問で必要な範囲のみを示す。復興特別所得税、税額控除、住民税は考慮しない。",
    "choices": [
      "182,500",
      "280,000",
      "462,500"
    ],
    "answer": 0,
    "explanation": "2,800,000円×10％－97,500円＝182,500円です。ここでいう課税所得は所得控除後の金額です。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm",
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-022",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "資料の課税総所得金額はいくらか。所得税額や納付額ではなく、税率を適用する前の金額を答えること。\n〈課税所得と税額控除の段階〉\n項目 / 条件\n総所得金額 / 360万円（収入額ではなく、必要経費・給与所得控除等を反映済みの所得）\n所得控除合計 / 120万円（適用要件と限度を満たした確定額）\n所得税の税額控除 / 10万円（税額段階の適用要件・限度を満たす額）\n対象年分・納税者 / 2026年分、日本の居住者である個人\n他の条件 / 総合課税のみ。分離課税・損失繰越等の追加調整なし\n各所得控除の内訳や個別税額控除制度は別途確定した提示条件。各控除の法定定額を新しく検証した件数には含めない。\n法令基準日2026年4月1日、確認日2026年10月15日。国税庁の同基準日表示の基本事項と指定条件を限定点検。\n税法の施行日・年分と確認日を区別。2027年以降の税率説明を2026年の計算に混ぜない。",
    "choices": [
      "230万円",
      "240万円",
      "360万円"
    ],
    "answer": 1,
    "explanation": "課税総所得金額は360－120＝240万円。万円同士で計算します。所得控除は税率適用前、税額控除は算出所得税額から差し引く段階です。必要経費・給与所得控除は総所得の提示額へ反映済みなので、再度差し引きません。税額控除は適用限度の範囲内の指定額。本問は税額や復興特別所得税、源泉徴収後の精算額を求める問題ではありません。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1000.htm",
    "contentReview": "v128_tax_stage_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "choiceExplanations": [
      "不適切。360－120－10＝230万円。税額控除を所得からも差し引いた誤りです。",
      "正解。360－120＝240万円。税額控除10万円はこの段階では引きません。",
      "不適切。所得控除120万円を差し引いていません。"
    ],
    "topic": "課税所得と税額控除の段階",
    "lawReferenceDate": "2026-04-01",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1100.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1200.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm"
    ],
    "sourceLabel": "国税庁の計算段階・暦年と指定数値の限定検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要論点2/指定条件検算3を区別。法令全文/全個別控除の確認は未完了。fp3-022は税額控除を20から10万円へ変更して限度条件を改善。"
  },
  {
    "id": "fp3-023",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "図の長方形の敷地に建築面積80㎡の建物を建てる場合、建ぺい率は40％である。\n〈計算資料〉\n項目 / 内容\n敷地の形状・寸法 / 長方形、20m×10m\n建築面積 / 80㎡\n図は模式図であり、縮尺は正確ではない。",
    "choices": [
      "○（正しい）",
      "×（誤り）"
    ],
    "answer": 0,
    "explanation": "敷地面積は20m×10m＝200㎡。建ぺい率は建築面積80㎡÷敷地面積200㎡×100＝40％です。延べ面積とは区別します。",
    "lawReferenceDate": "2026-04-01",
    "revision": 2,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "sourceUrl": "https://www.mlit.go.jp/common/001205298.pdf",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-024",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料の条件で、建ぺい率は50％である。正しければ〇、誤っていれば×を選びなさい。\n〈建築面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 200㎡（算定に用いる敷地面積として確定）\n建築面積 / 100㎡（算定上の値として確定）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "建築面積100㎡を敷地面積200㎡で割り、100を掛けると50％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "choiceExplanations": [
      "正解。記述は正しく、建築面積100㎡を敷地面積200㎡で割り、100を掛けると50％です。分母は建築面積や延べ面積ではなく敷地面積です。",
      "不適切。記述は正しく、建築面積100㎡を敷地面積200㎡で割り、100を掛けると50％です。分母は建築面積や延べ面積ではなく敷地面積です。"
    ],
    "topic": "建築面積と敷地面積の比",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "id": "fp3-025",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料の土地と建物は常に同一人の所有とみなされ、別々に登記することはできない。正しければ〇、誤っていれば×を選びなさい。\n〈土地と戸建建物の所有者〉\n項目 / 条件\n土地 / 独立した1筆の土地をAさんが所有している\n建物 / その土地上の独立した戸建建物1個をBさんが所有している\n前提 / 資料の所有関係は有効に成立しているものとする\n範囲 / 通常の土地・戸建建物の登記の区別。区分建物の敷地権や借地権の成立要件は扱わない\n独自設例。法令基準日は2026年4月1日。申請義務・期限等の改正事項は今回の出題対象外。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "日本では、土地と建物は原則として別個の不動産として扱われ、登記も別々に行います。資料のように所有者が異なる場合もあります。本問は有効な所有関係を前提とし、借地権の成立や区分建物の敷地権の個別制度までは判定しません。",
    "choiceExplanations": [
      "不適切。土地と建物を常に同一人の所有とみなす説明は誤りです。",
      "正解。通常、土地と建物は別個の不動産として扱われ、別々に登記されます。"
    ],
    "topic": "土地と戸建建物の所有者",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/common/001121686.pdf",
    "additionalSourceUrls": [
      "https://houmukyoku.moj.go.jp/matsuyama/page000001_00390.html"
    ],
    "sourceLabel": "国土交通省本文・法務省/法務局の公式索引抜粋による登記基本事項の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v136_registration_scoped_migration",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "reviewNote": "公式本文と公式検索索引抜粋の照合範囲を区別。法務省/法務局ページ本文403、2026-04-01時点の規則全文・全改正未確認。新改訂主要点3/共通適用1/旧論点再確認2。包括監修未完了。"
  },
  {
    "id": "fp3-026",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料から容積率を求めると、最も適切なものはどれか。\n〈算定対象延べ面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 200㎡（算定に用いる敷地面積として確定）\n建築面積 / 100㎡（算定上の値として確定）\n容積率算定対象の延べ面積 / 300㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "50％",
      "150％",
      "300％"
    ],
    "answer": 1,
    "explanation": "容積率算定対象の延べ面積300㎡を敷地面積200㎡で割り、100を掛けると150％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "revision": 5,
    "contentReview": "v133_building_ratio_scoped_migration",
    "choiceExplanations": [
      "不適切。50％は、建ぺい率を求めている計算です。",
      "正解。150％は、算定対象延べ面積を敷地で割る計算です。",
      "不適切。300％は、延べ面積を建築面積で割っている計算です。"
    ],
    "topic": "算定対象延べ面積と敷地面積の比",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "id": "fp3-027",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料の兄弟姉妹には、遺留分が認められない。正しければ〇、誤っていれば×を選びなさい。\n〈遺留分の対象者と侵害額の請求〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人が死亡。2019年7月1日以後の相続として扱う\n範囲 / 遺留分の有無と金銭請求の基本。具体的な請求額・期間計算は問わない\n相続人 / 兄弟姉妹のみ。配偶者、子・孫等、父母・祖父母等の直系尊属はいない\n他の事情 / 相続放棄・欠格・廃除等はない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "兄弟姉妹は法定相続人になり得ますが、遺留分の保障の対象にはなりません。法定相続人であることと遺留分があることを区別します。",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/lkazi_07_26/index.html",
    "sourceLabel": "裁判所・日本公証人連合会・千葉県立図書館・衆議院制定法律の対象論点限定照合",
    "reviewedAt": "2026-10-13",
    "v68ReviewScope": "兄弟姉妹の除外・金銭請求・2019年7月1日以後開始の相続という適用条件の限定確認。初回公式照合時期不明。",
    "choiceExplanations": [
      "正解。資料では兄弟姉妹が相続人ですが、兄弟姉妹には遺留分がありません。",
      "不適切。相続人であっても兄弟姉妹には遺留分が認められません。"
    ],
    "topic": "遺留分の対象者と侵害額の請求",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19620180713072.htm"
    ],
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。",
    "priorSourceReview": "v68"
  },
  {
    "id": "fp3-028",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "Aの相続人が図の配偶者Bと実子C・D・Eのみの場合、Cの法定相続分は（　）である。\n相続放棄、欠格、廃除はなく、遺言による指定は考慮しない。",
    "choices": [
      "3分の1",
      "4分の1",
      "6分の1"
    ],
    "answer": 2,
    "explanation": "配偶者Bは2分の1、子全体で2分の1。子3人で均等に分けるため、Cは2分の1÷3＝6分の1です。",
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "sourceLabel": "制度の確認資料（一次資料）",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g3_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp3-029",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料で配偶者の法定相続分はどれか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、被相続人の父・母の2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。被相続人に子・孫等の第1順位の相続人はいない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "2分の1",
      "4分の3",
      "3分の2"
    ],
    "answer": 2,
    "explanation": "配偶者2/3、父母全体1/3です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "choiceExplanations": [
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。",
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。",
      "正解。配偶者の割合は2/3です。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "topic": "相続人の構成と法定相続分",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "id": "fp3-030",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料の相続放棄を行うための申述先の機関として、最も適切なのはどれか。\n〈相続放棄の申述と期間〉\n項目 / 条件\n手続を希望する者 / 相続開始後、法律上の相続人となった成人Aさん\n希望する内容 / その相続について、民法上の相続放棄をする\n条件 / 申述可能な期間内で、単純承認したものと扱われる事情などはない\n範囲 / 申述先の機関の種類を問う。税申告や不動産登記の申請ではない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "税務署",
      "家庭裁判所",
      "法務局"
    ],
    "answer": 1,
    "explanation": "民法上の相続放棄をするには、家庭裁判所への申述が必要です。申述先は被相続人の最後の住所地の家庭裁判所です。税務署への届出や登記の申請だけで相続放棄を行うものではありません。",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_13/index.html",
    "choiceExplanations": [
      "不適切。税務署は税の申告等の窓口で、民法上の相続放棄の申述先ではありません。",
      "正解。相続放棄は、被相続人の最後の住所地の家庭裁判所へ申述します。",
      "不適切。法務局の登記手続は、家庭裁判所への相続放棄の申述に代わりません。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "topic": "相続放棄の申述と期間",
    "lawReferenceDate": "2026-04-01",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132_qa.htm",
      "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_25/index.html"
    ],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "id": "fp2-007",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の年間貯蓄可能額として、最も適切なものはどれか。\n〈家計の年間収支・残高〉\n項目・期間 / 金額（万円、明記の利率を除く）\n給与収入（控除前、年額） / 900\n所得税（年額） / 45\n住民税（年額） / 35\n社会保険料（年額） / 130\n生活支出（年額） / 480（ローン利息を含み、元本返済は含まない）\n住宅ローン元本返済（年額） / 90（生活支出と重複なし）\n2026年の年間計画の提示額を使う。他の収入・支出、物価変動はない。税額・社会保険料を法令から計算する問題ではない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "690万円",
      "120万円",
      "210万円",
      "600万円"
    ],
    "answer": 1,
    "explanation": "手取り900－45－35－130＝690万円。年間黒字は690－480－90＝120万円です。税・保険料と生活支出、ローン元本の現金支出を重複なく控除します。税額や保険料は提示額であり税率計算ではありません。",
    "revision": 7,
    "contentReview": "v118_household_math_scoped_migration",
    "choiceExplanations": [
      "不適切。690万円は手取りで、生活支出と元本返済の控除前です。",
      "正解。690－480－90＝120万円です。",
      "不適切。ローン元本返済90万円を控除しないと690－480＝210万円です。",
      "不適切。生活支出480万円を控除しないと690－90＝600万円です。"
    ],
    "topic": "年間収支・手取り・金融資産残高",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "additionalSourceUrls": [
      "https://jafp.or.jp/know/fp/sheet/files/2_Income_outgo.pdf"
    ],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "id": "fp2-008",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の条件で運用した2年後の元利合計として、最も適切な金額はどれか。\n〈一時金の複利運用条件〉\n項目 / 内容\n運用開始時の元金 / 100万円\n年利 / 3％（固定）\n運用期間 / 2年間\n利息組入れ / 各年末・年1回\n期間中の追加入出金はない。税金・手数料は考慮しない。",
    "choices": [
      "109万2,727円",
      "106万円",
      "106万900円",
      "103万円"
    ],
    "answer": 2,
    "explanation": "100万円×1.03²＝106.09万円＝106万900円です。109万2,727円は3年複利、106万円は2年単利、103万円は1年分の計算です。",
    "revision": 3,
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "topic": "年1回複利の元利合計",
    "sourceUrl": "https://www.j-flec.go.jp/public/learn/glossary/h_fukuri/",
    "sourceLabel": "J-FLEC：複利の定義／設例数値は独立検算",
    "additionalSourceUrls": [],
    "choiceExplanations": [
      "不適切。100万円×1.03³で3年間運用しています。",
      "不適切。100万円×(1＋0.03×2)の単利計算です。",
      "正解。100万円×1.03²＝106万900円です。",
      "不適切。1年分の利息しか計算していません。"
    ]
  },
  {
    "id": "fp2-009",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の純資産額として、最も適切なものはどれか。\n〈同一時点の資産・負債〉\n区分・項目 / 金額（万円）\n時点 / 2026年4月1日現在\n資産：預金 / 1,000\n資産：株式時価 / 800\n資産：投資信託時価 / 500\n資産：自宅時価 / 4,200\n負債：住宅ローン残高 / 3,100\n負債：カードローン残高 / 200\n資料外の資産・負債はない。住宅等は提示時価、借入は同日の残高。売却費用・税額・評価差は考慮しない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "3,000万円",
      "3,200万円",
      "3,400万円",
      "6,500万円"
    ],
    "answer": 1,
    "explanation": "資産合計6,500万円－負債合計3,300万円＝純資産3,200万円です。すべて同じ時点の残高であり、年間収入や年間返済額とは区別します。",
    "revision": 6,
    "contentReview": "v118_household_math_scoped_migration",
    "choiceExplanations": [
      "不適切。カードローン200万円を二度控除すると3,200－200＝3,000万円です。",
      "正解。資産6,500－負債3,300＝3,200万円です。",
      "不適切。カードローン200万円を控除しないと6,500－3,100＝3,400万円です。",
      "不適切。6,500万円は資産合計で、負債全体を控除していません。"
    ],
    "topic": "家計の純資産",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "additionalSourceUrls": [],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "id": "fp2-010",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "現在の200万円を年3％の年1回複利で4年間運用する。4年後の元利合計を求めるために現在額に乗じる係数はどれか。\n〈年3％・4年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.1255\n現価係数 / 0.8885\n年金終価係数 / 4.1836\n減債基金係数 / 0.2390\n年金現価係数 / 3.7171\n資本回収係数 / 0.2690\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "年金現価係数",
      "減債基金係数",
      "終価係数",
      "現価係数"
    ],
    "answer": 2,
    "explanation": "終価係数を用います。現在の一時金から将来の元利合計を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "choiceExplanations": [
      "不適切。毎年末の受取額から現在必要な元金を求めます。",
      "不適切。将来の目標額から毎年末の積立額を求めます。",
      "正解。現在の一時金から将来の元利合計を求めます。",
      "不適切。将来の一時金から現在必要な一時金を求めます。"
    ],
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "topic": "6つの係数・終価係数",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ]
  },
  {
    "id": "fp2-011",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の範囲で、一般的な保険種目の基本的な特徴として最も適切な記述はどれか。\n〈保険種目と事故・給付の区別〉\n項目 / 条件\n生命保険 / 通常の定期保険主契約。生存給付の特約なし\n賠償事故A / 契約自動車で、無関係の第三者所有の塀を損壊し法律上の賠償責任が発生\n賠償事故B / 仕事の遂行に直接起因して第三者の財物を損壊\n車両損害C / 地震を原因とする津波で契約自動車自体が損壊\n比較範囲 / 個人賠償は日常生活型。地震等を補償する車両特約なし。支払額や全免責は問わない\n法令基準日：2026年4月1日。条件・行為は独自の設例。\n基本区分と明示条件の限定確認。個別商品の全約款・全免責・全法令の包括監修ではない。",
    "choices": [
      "定期保険は、保障期間内に死亡した場合だけでなく満期まで生存した場合にも原則として満期保険金を支払う",
      "個人賠償責任保険は、被保険者が業務中に第三者へ与えた損害賠償責任を主な補償対象とする",
      "対物賠償責任保険は他人の財物を損壊した場合の法律上の賠償責任に備える",
      "一般的な車両保険では、地震を直接の原因とする津波による車両損害も通常の補償対象となる"
    ],
    "answer": 2,
    "explanation": "対物賠償責任保険は、契約自動車の使用等で他人の財物に損害を与え法律上の賠償責任を負う場面に備えます。定期保険主契約の満期給付、日常生活の個人賠償と職務遂行事故、車両保険の地震等免責をそれぞれ区別します。被保険者の範囲や個別免責の全体は別途確認します。",
    "revision": 4,
    "choiceExplanations": [
      "不適切。資料の通常の定期保険主契約には満期保険金がありません。",
      "不適切。日常生活型の個人賠償責任保険は、職務遂行に直接起因する賠償を主な対象としません。",
      "正解。事故Aの他人の塀の損害に対する法律上の賠償責任は対物賠償の基本対象です。",
      "不適切。地震を原因とする津波による車両損害は通常の車両保険で原則免責です。資料では補償特約もありません。"
    ],
    "contentReview": "v117_insurance_types_grade_moral_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "topic": "保険種目と事故・給付の区別",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/car/q008.html",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/body/q092.html",
      "https://soudanguide.sonpo.or.jp/car/q015.html",
      "https://www.jili.or.jp/knows_learns/kind/main/41.html"
    ],
    "sourceLabel": "日本損害保険協会の基本区分/用語・指定事故条件。定期保険は生命保険文化センター",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂設例と全選択肢を限定照合。等級は指定条件の独立検算。公表日不明/商品別料率/全約款を包括確認としない。過去に照合されたIDでも今回の改訂論点として記録し初回ID確認に加算しない。"
  },
  {
    "id": "fp2-012",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の条件による損害保険金として、最も適切な金額はどれか。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n対象となる損害額 / 180万円\n差し引く免責金額 / 20万円\n支払限度額 / 150万円\n算定順序 / 対象損害額から免責を控除し、0円を下限とした後に限度額を適用\nその他条件 / 支払対象事故・実損払。比例払・他保険調整・費用保険金なし\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n本問で明示した差引免責方式と適用順序を使う。実際の商品は方式・約款が異なる場合があり、一般共通の支払算式とはしない。",
    "choices": [
      "140万円",
      "150万円",
      "160万円",
      "180万円"
    ],
    "answer": 1,
    "explanation": "対象損害180－免責20＝160万円。0円を下限にして支払限度額150万円を適用すると、損害保険金は150万円です。限度額適用後に免責を再度差し引きません。",
    "revision": 6,
    "contentReview": "v113_deductible_limit_scoped_migration",
    "choiceExplanations": [
      "不適切。損害額から免責を二度差し引いています。",
      "正解。免責控除後160万円に支払限度額150万円を適用し、150万円です。",
      "不適切。免責は控除しましたが、支払限度額を適用していません。",
      "不適切。損害額をそのまま答え、免責と必要な限度額を適用していません。"
    ],
    "topic": "差引免責と支払限度額",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "verificationStatus": "given_formula_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "id": "fp2-013",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料を踏まえた自動車保険の基本的な補償区分として、最も適切な説明はどれか。\n〈自動車事故で区別する損害〉\n損害・場面 / 条件\n事故 / 国内の公道で契約自動車が第三者の車に衝突\n相手の身体 / 無関係の第三者が負傷し、法律上の賠償責任が生じた\n相手の財物 / 第三者所有の車や塀を損壊し、法律上の賠償責任が生じた\n本人の身体 / 契約自動車の運転者本人のけが\n本人の車両 / 契約自動車自体の修理費\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "対物賠償責任保険は他人の車や建物などへの法律上の賠償責任に備える",
      "人身傷害保険は、相手方の車両の修理費に対する法律上の賠償責任を補償する",
      "対人賠償責任保険は、運転者本人が負傷した場合の治療費を、過失割合にかかわらず補償する",
      "車両保険は、契約車両で他人の車を損壊した場合の法律上の賠償責任を補償する"
    ],
    "answer": 0,
    "explanation": "第三者の車や塀への法律上の賠償責任は対物賠償保険で検討します。相手の身体への賠償は対人賠償、本人等の身体損害は人身傷害、契約車両自体の損害は車両保険という基本区分を確認します。実際の対象者や対象事故は各契約に従います。",
    "revision": 4,
    "choiceExplanations": [
      "正解。他人の車や建物に生じた損害の賠償責任は対物賠償です。",
      "人身傷害保険は被保険者等の人身損害を対象とするもので、相手車の修理費ではありません。",
      "対人賠償は他人の身体に対する法的賠償です。運転者本人のケガとは別です。",
      "車両保険は契約車両自体の損害に備えます。相手車の賠償は対物賠償です。"
    ],
    "contentReview": "v111_liability_insurance_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "topic": "自賠責と任意自動車保険の対象区分",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/car/about.html",
    "sourceLabel": "日本損害保険協会：自動車保険の補償区分",
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/insurance/car/point.html"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "id": "fp2-014",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料に示す主契約の特徴について、最も適切な記述はどれか。\n〈一般的な主契約の比較〉\n項目 / 条件\n定期保険 / 一定期間の死亡保障。満期保険金なし（生存給付の特約なし）\n養老保険 / 一定期間の死亡保障と満期生存給付\n終身保険 / 一生涯の死亡保障。払込期間と保障期間を区別\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "養老保険は満期保険金があるが、保険期間中の死亡時には解約返戻金だけが支払われる",
      "定期保険には、死亡保険金と同額の満期保険金が一般に設けられている",
      "養老保険は保険期間満了時に被保険者が生存していれば満期保険金が支払われる",
      "定期保険は、保険料の払込期間とは無関係に死亡保障が一生涯継続する"
    ],
    "answer": 2,
    "explanation": "養老保険は期間中の死亡保障と満期生存時の給付を備えます。定期保険の一定期間の保障、終身保険の一生涯の保障と区別します。",
    "revision": 4,
    "choiceExplanations": [
      "養老保険は期間中の死亡保険金も備えており、死亡時に解約返戻金だけを支払うものではありません。",
      "定期保険には通常満期保険金がありません。養老保険との取り違えです。",
      "正解。養老保険は満期生存時の満期保険金を備えます。",
      "定期保険は一定期間の保障であり、終身保障ではありません。"
    ],
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "topic": "一般的な主契約の比較",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/38.html",
    "additionalSourceUrls": [
      "https://www.jili.or.jp/knows_learns/kind/main/41.html",
      "https://www.jili.or.jp/knows_learns/kind/main/37.html"
    ],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "id": "fp2-015",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料のPERとして、最も適切なものはどれか。\n〈同一の株式単位で比較するPER〉\n項目 / 条件\n株価 / 2026年4月1日の提示株価 2400円\nEPS / 2025年1～12月の実績1株当たり当期純利益 200円\nBPS / 2025年末実績の1株当たり純資産 1200円\n年間1株配当 / 2025年1～12月の実績合計 60円\n普通株式のみ。EPS・BPSは必要な調整後の提示値。株式分割/併合、優先株、自己株式数の追加計算なし。\n配当は税引前。手数料・個人税額・売買差益なし。実績配当の将来継続を保証しない。\n法令基準日：2026年4月1日。企業・金額は独自仮定。指標の数学/定義確認であり、実企業の会計・投資判断・税法改正の包括監修ではない。",
    "choices": [
      "2倍",
      "12倍",
      "約0.0833倍",
      "40倍"
    ],
    "answer": 1,
    "explanation": "PERの計算は株価÷EPSです。PER:2400÷200=12倍。倍率と百分率を区別します。提示した実績年度・1株単位の値を用い、会社全体の利益や予想値へ置き換えません。指標だけで値上がりや割安が保証されるわけではありません。",
    "revision": 5,
    "contentReview": "v121_equity_metrics_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。PBR:2400÷1200=2倍。",
      "正解。PER:2400÷200=12倍。",
      "不適切。EPS÷株価:200÷2400≒0.0833倍（逆数）。",
      "不適切。株価÷年間配当:2400÷60=40倍。"
    ],
    "topic": "PERの分母・単位・年度",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jpx.co.jp/glossary/ka/73.html",
    "additionalSourceUrls": [
      "https://port.jpx.co.jp/jpxhp/portdocs/beginner_a_03.html"
    ],
    "sourceLabel": "JPXの株式指標定義／独自提示額の独立検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂の指定数値/全選択肢を内部検算。公式定義との対応を併記し8問を法令改正照合件数に数えない。初回ID時期未確定。"
  },
  {
    "id": "fp2-016",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料のX社株式のPBRとして、最も適切なものはどれか。\n〈X社の株価・株式数・財務資料〉\n項目 / 内容\n株価 / 2,400円\n発行済普通株式数 / 700万株\n普通株主に帰属する純資産 / 112億円\n当期純利益 / 11億2,000万円\n自己株式・優先株式はなく、期末と期中平均の株式数はともに700万株とする。税金・手数料・株式分割等は考慮しない。",
    "choices": [
      "1.2倍",
      "1.5倍",
      "2.0倍",
      "15.0倍"
    ],
    "answer": 1,
    "explanation": "BPS＝112億円÷700万株＝1,600円。PBR＝2,400円÷1,600円＝1.5倍です。単位を円と株にそろえて計算します。純利益11億2,000万円÷700万株＝EPS160円から計算した15.0倍はPERです。",
    "revision": 7,
    "contentReview": "v94_equity_metrics_primary_definition_and_arithmetic_review",
    "choiceExplanations": [
      "不適切。資料から求めるBPSは1,600円であり、2,400÷1,600は1.2にはなりません。",
      "正解。112億円÷700万株＝1,600円、2,400÷1,600＝1.5倍です。",
      "不適切。資料の純資産と株式数から求めたBPSを用いると1.5倍です。",
      "不適切。純資産ではなく当期純利益からEPSを計算したPERの値です。"
    ],
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "topic": "総額資料からのBPS・PBR計算",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jpx.co.jp/glossary/ka/74.html",
    "sourceLabel": "日本取引所グループ：株価純資産倍率",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.94：PER/PBR/配当利回り/配当性向の資料・定義・独立計算・誤答根拠を限定確認。架空企業の固定値であり、法令変更の確認件数や実銘柄の投資判断を示すものではない。"
  },
  {
    "id": "fp2-017",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料のX社株式の税引前配当利回りと配当性向の組合せとして、最も適切なものはどれか。\n〈配当利回り・配当性向の計算資料〉\n項目 / 内容\n株価 / 3,200円\nEPS（1株当たり当期純利益） / 200円\n年間1株当たり配当金 / 80円\n資料は架空企業の固定値であり、各指標は計算用に与えた値である。税金・手数料・株式分割等は考慮しない。",
    "choices": [
      "配当利回り40.0％・配当性向2.5％",
      "配当利回り2.5％・配当性向2.5％",
      "配当利回り2.5％・配当性向40.0％",
      "配当利回り40.0％・配当性向40.0％"
    ],
    "answer": 2,
    "explanation": "配当利回りは80円÷3,200円×100＝2.5％。配当性向は80円÷200円×100＝40.0％です。配当利回りは投資資金となる株価、配当性向は1株当たり純利益を分母にして計算します。",
    "revision": 6,
    "contentReview": "v94_equity_metrics_primary_definition_and_arithmetic_review",
    "choiceExplanations": [
      "不適切。配当利回りと配当性向の分母を逆にしています。",
      "不適切。配当性向まで株価を分母にしており、EPS200円を使っていません。",
      "正解。利回りは80÷3,200×100、性向は80÷200×100です。",
      "不適切。配当利回りをEPSで割っています。利回りでは株価を使います。"
    ],
    "topic": "配当利回りと配当性向の区別",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jpx.co.jp/glossary/ha/353.html",
    "sourceLabel": "日本取引所グループ：配当性向・株式利回り",
    "sourceCheckedDate": "2026-10-14",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.94：PER/PBR/配当利回り/配当性向の資料・定義・独立計算・誤答根拠を限定確認。架空企業の固定値であり、法令変更の確認件数や実銘柄の投資判断を示すものではない。"
  },
  {
    "id": "fp2-018",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "2資産の収益率について、最も適切な記述はどれか。資料の例も参考にすること。\n〈線形相関と数値の一致〉\n項目 / 条件\n相関係数の種類 / ピアソンの相関係数。各資産の標準偏差は0でない\n完全正相関の例（収益率％） / A：2、4、6 ／ B：9、13、17（B＝2A＋5）\n完全負相関の例（収益率％） / C：－2、2、6 ／ D：16、4、－8（D＝10－3C）\n相関0の反例（収益率％） / X：－1、0、1 ／ Y：1、0、1（Y＝Xの2乗）\n各例の3組を等しく重み付けする指定計算。数値は独自仮定。因果関係を示すものではない。\n法令基準日：2026年4月1日。数値・資産は独自例。公式資料の図表・文章の転載ではない。\n円建て同一期間の税引前総収益率。途中の追加投資・引出し・配分変更、手数料・税、レバレッジなし。",
    "choices": [
      "相関係数が＋1なら、二つの資産の収益率は常に同じ数値になる",
      "相関係数は－1から＋1までの範囲に収まらず、分散の大きい資産では＋1を超える",
      "相関係数－1は完全な負の線形相関を意味する",
      "相関係数が0なら、二つの資産の間には非線形の関係も一切存在しない"
    ],
    "answer": 2,
    "explanation": "相関は標準偏差で規格化した共分散で、平均値や収益率の一致ではありません。資料では正相関例＋1、負相関例－1、X/Y例0です。相関0は独立や非線形関係の不存在を保証しません。",
    "revision": 3,
    "choiceExplanations": [
      "不適切。＋1は完全な正の線形関係です。B＝2A＋5の例では＋1でも収益率は一致しません。",
      "不適切。標準偏差が0でない場合、ピアソンの相関係数は－1以上＋1以下です。分散の大きさで範囲を超えません。",
      "正解。－1は完全な負の線形相関です。D＝10－3Cでは傾きが負で、偏差の向きが反対です。",
      "不適切。相関0でも非線形関係は存在し得ます。資料ではXとYの共分散は0ですが、Y＝Xの2乗です。"
    ],
    "topic": "線形相関と数値の一致",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.stat.go.jp/naruhodo/10_tokucho/hukusu.html",
    "additionalSourceUrls": [],
    "sourceLabel": "金融庁/総務省統計局の定義と独自指定モデルの検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v124_diversification_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の限定照合3/指定モデル内部検算3。公式背景の参照を重複加算しない。法令改正照合0、ID初回時期未確定。"
  },
  {
    "id": "fp2-019",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税について、2026年12月1日以後の年末調整で改正後の基礎控除を適用する。居住者の合計所得金額が700万円で、他の適用要件を満たす場合の基礎控除額はどれか。",
    "choices": [
      "48万円",
      "58万円",
      "67万円",
      "62万円"
    ],
    "answer": 3,
    "explanation": "700万円は655万円超2,350万円以下なので62万円です。48万円は2,350万円超2,400万円以下、58万円は2025年分の700万円の区分、67万円は2026年分の489万円超655万円以下です。 法令基準日は2026年4月1日です。この改正の原則施行日は2026年12月1日で、2026年分に適用されます。施行前の月々の源泉徴収や準確定申告の取扱いを問うものではありません。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1199.htm",
    "revision": 4,
    "contentReview": "v80_limited_primary_source_and_effective_date_review",
    "sourceName": "国税庁：基礎控除（令和8年4月1日現在法令等）",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "taxYear": 2026,
    "sourceLabel": "国税庁：2026年分の基礎控除",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.80：基礎控除額・全選択肢・適用年・施行日を再確認。過去に公式照合履歴がある4問の再確認で、新規初回照合0。包括監修は未完了。"
  },
  {
    "id": "fp2-020",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "課税所得金額が420万円の場合、下記の速算表を用いた所得税額として、最も適切なものはどれか。\n〈所得税の速算表（抜粋）〉\n課税所得金額 / 税率 / 控除額\n1,000円以上1,950,000円未満 / 5％ / 0円\n1,950,000円以上3,300,000円未満 / 10％ / 97,500円\n3,300,000円以上6,950,000円未満 / 20％ / 427,500円\n速算表は本問で必要な範囲のみを示す。復興特別所得税、税額控除、住民税は考慮しない。",
    "choices": [
      "210,000円",
      "412,500円",
      "420,000円",
      "840,000円"
    ],
    "answer": 1,
    "explanation": "4,200,000円×20％－427,500円＝412,500円です。課税所得全額に20％を掛けただけの840,000円ではありません。",
    "revision": 6,
    "contentReview": "v80_academic_original_format_and_scoped_basis_check",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm",
    "sourceName": "国税庁 No.2260：所得税の税率（令和8年4月1日現在法令等）",
    "verificationStatus": "scoped_basis_check_2026_04_01_not_comprehensive_audit",
    "lawReferenceDate": "2026-04-01",
    "taxYear": 2026,
    "sourceLabel": "制度の確認資料（一次資料）",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "2026-10-20：国税庁No.2260の所得税速算表と照合。課税所得420万円の税率20％・控除額427,500円・税額412,500円、選択肢と正答を限定確認。旧注記の基礎控除への言及は本問と無関係のため訂正。包括監修は未完了。",
    "themeReferenceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "themeReferenceLabel": "2026年5月公表の学科問題（構成・テーマの参照）"
  },
  {
    "id": "fp2-021",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料のAさんの個人所得税の年分について、最も適切な記述はどれか。\n〈暦年と開業日の区別〉\n項目 / 条件\nAさん / 日本の居住者である個人\n対象年分 / 2026年分\n開業の仮定 / 2026年7月1日に個人事業を開始し、その前には給与所得がある\n比較対象 / 暦年、開業日から1年間、会社等の会計年度\n除外 / 出国・死亡などの特別な申告手続は扱わない\n開業日・給与の存在は独自の仮定。事業所得の認定、収入の計上時期、出国/死亡時手続などの全例外は別課題。\n法令基準日2026年4月1日、確認日2026年10月15日。国税庁の同基準日表示の基本事項と指定条件を限定点検。\n税法の施行日・年分と確認日を区別。2027年以降の税率説明を2026年の計算に混ぜない。",
    "choices": [
      "年の途中で独立開業した場合、その年の所得税の計算期間は開業日から翌年の同日の前日までになる",
      "個人の所得税は、原則として前年12月1日から当年11月30日までの所得を対象とする",
      "個人の所得税は原則として1月1日から12月31日までの所得を対象とする",
      "個人の所得税は、原則として当年4月1日から翌年3月31日までの所得を対象とする"
    ],
    "answer": 2,
    "explanation": "個人所得税は原則1月1日～12月31日の暦年で計算します。開業前の給与所得と開業後の事業所得も、それぞれ該当する2026年分として扱います。法令基準日4月1日は、その日から翌3月末を課税期間にするという意味ではありません。",
    "revision": 4,
    "choiceExplanations": [
      "不適切。年の途中で開業しても個人の年分を開業日から翌年の同日前日までに変えるものではありません。",
      "不適切。前年12月1日から当年11月30日ではありません。",
      "正解。原則として2026年1月1日から12月31日の所得が対象です。",
      "不適切。当年4月1日から翌年3月31日の年度とは異なります。"
    ],
    "contentReview": "v128_tax_stage_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "topic": "暦年と開業日の区別",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1000.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1100.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1200.htm"
    ],
    "sourceLabel": "国税庁の計算段階・暦年と指定数値の限定検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要論点2/指定条件検算3を区別。法令全文/全個別控除の確認は未完了。fp3-022は税額控除を20から10万円へ変更して限度条件を改善。"
  },
  {
    "id": "fp2-022",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税について、2026年12月1日以後の年末調整で改正後の基礎控除を適用する。居住者の合計所得金額が400万円で、他の適用要件を満たす場合の基礎控除額はどれか。",
    "choices": [
      "62万円",
      "67万円",
      "68万円",
      "104万円"
    ],
    "answer": 3,
    "explanation": "400万円は336万円超489万円以下の区分で、2026年分は104万円です。62万円は2026年分の655万円超2,350万円以下等、67万円は489万円超655万円以下、68万円は2025年分の400万円の区分です。 法令基準日は2026年4月1日です。この改正の原則施行日は2026年12月1日で、2026年分に適用されます。施行前の月々の源泉徴収や準確定申告の取扱いを問うものではありません。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1199.htm",
    "revision": 4,
    "contentReview": "v80_limited_primary_source_and_effective_date_review",
    "sourceName": "国税庁：基礎控除（令和8年4月1日現在法令等）",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "taxYear": 2026,
    "sourceLabel": "国税庁：2026年分の基礎控除",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.80：基礎控除額・全選択肢・適用年・施行日を再確認。過去に公式照合履歴がある4問の再確認で、新規初回照合0。包括監修は未完了。"
  },
  {
    "id": "fp2-023",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料から建ぺい率の上限だけで求める建築面積の上限を求めると、最も適切なものはどれか。\n〈建ぺい率から求める面積上限〉\n項目 / 条件\n敷地面積 / 250㎡（算定に用いる敷地面積として確定）\n本問で用いる建ぺい率上限 / 60％\n本問で用いる容積率上限 / 200％\n計算範囲 / 提示された上限率による面積計算のみ。前面道路・角地・防火等の制限/緩和の追加計算なし\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "150㎡",
      "500㎡",
      "100㎡",
      "250㎡"
    ],
    "answer": 0,
    "explanation": "敷地面積250㎡に、上限率60％を100で割った比を掛け、150㎡です。建築面積の上限と延べ面積の上限は別に計算します。",
    "revision": 4,
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。150㎡は、指定の建ぺい率を使う計算です。",
      "不適切。500㎡は、容積率を使い延べ面積上限を求めている計算です。",
      "不適切。100㎡は、残りの敷地部分を求めている計算です。",
      "不適切。250㎡は、敷地全体をそのまま答えている計算です。"
    ],
    "topic": "建ぺい率から求める面積上限",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "id": "fp2-024",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料から容積率を求めると、最も適切なものはどれか。\n〈算定対象延べ面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 200㎡（算定に用いる敷地面積として確定）\n建築面積 / 80㎡（算定上の値として確定）\n容積率算定対象の延べ面積 / 300㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "40％",
      "約26.7％",
      "150％",
      "250％"
    ],
    "answer": 2,
    "explanation": "容積率算定対象の延べ面積300㎡を敷地面積200㎡で割り、100を掛けると150％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "revision": 4,
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。40％は、建ぺい率を求めている計算です。",
      "不適切。約26.7％は、建築面積を延べ面積で割っている計算です。",
      "正解。150％は、算定対象延べ面積を敷地で割る計算です。",
      "不適切。250％は、面積を足した値を分子にしている計算です。"
    ],
    "topic": "算定対象延べ面積と敷地面積の比",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "id": "fp2-025",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の登記記録について、最も適切な記述はどれか。\n〈登記記録の区分〉\n項目 / 条件\n対象 / 所有権の登記がある通常の土地1筆\n比較する情報 / 所有権、抵当権、土地の地目・地積\n区分 / 表題部と権利部（甲区・乙区）の役割を比較する\n範囲 / 登記記録の基本区分を問う。申請義務・期限・税額は問わない\n独自設例。法令基準日は2026年4月1日。申請義務・期限等の改正事項は今回の出題対象外。",
    "choices": [
      "登記記録の表題部には、原則として抵当権の設定状況のみが記載される",
      "権利部の甲区には、原則として所有権に関する登記事項が記録される",
      "権利部の乙区には、原則として土地の地目や地積が記録される",
      "抵当権の設定登記は、原則として権利部の甲区に記録される"
    ],
    "answer": 1,
    "explanation": "甲区は所有権に関する登記事項、乙区は抵当権など所有権以外の権利に関する登記事項を記録します。土地の地目・地積などの物理的状況は表題部の事項です。本問は所有権の登記がある土地を前提とします。",
    "sourceUrl": "https://houmukyoku.moj.go.jp/matsuyama/page000001_00390.html",
    "sourceLabel": "国土交通省本文・法務省/法務局の公式索引抜粋による登記基本事項の限定照合",
    "lawReferenceDate": "2026-04-01",
    "revision": 4,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "choiceExplanations": [
      "不適切。土地の表題部には所在・地目・地積などを記録します。抵当権の設定状況だけを記録する部分ではありません。",
      "正解。権利部の甲区には、所有権に関する登記事項を記録します。",
      "不適切。土地の地目や地積は表題部の事項です。乙区は所有権以外の権利を扱います。",
      "不適切。抵当権設定の登記事項は、通常は権利部の乙区に記録されます。"
    ],
    "contentReview": "v136_registration_scoped_migration",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "topic": "登記記録の区分",
    "additionalSourceUrls": [
      "https://www.moj.go.jp/MINJI/minji02"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式本文と公式検索索引抜粋の照合範囲を区別。法務省/法務局ページ本文403、2026-04-01時点の規則全文・全改正未確認。新改訂主要点3/共通適用1/旧論点再確認2。包括監修未完了。"
  },
  {
    "id": "fp2-026",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の範囲で、不動産に関連する税金の課税主体について最も適切な記述はどれか。\n〈不動産関連税の課税主体〉\n項目 / 条件\n対象地域 / 神奈川県内の通常の市町村。東京都23区の取扱いはこの設例では扱わない\n対象資産 / 土地・家屋\n比較する税 / 取得時の不動産取得税、保有に伴う固定資産税、登記に伴う登録免許税\n範囲 / 国税/都道府県税/市町村税の基本区分。税率・税額・免税点や軽減は問わない\n法令基準日2026年4月1日、確認日とは別。税目の基本事項または提示設例の適用を確認する。",
    "choices": [
      "登録免許税は、不動産取得税と同じく都道府県税である",
      "不動産取得税は原則として都道府県税である",
      "不動産取得税は、原則として市町村が課税する地方税である",
      "固定資産税は、原則として都道府県が課税する地方税である"
    ],
    "answer": 1,
    "explanation": "取得に伴う不動産取得税と、所有者に課される固定資産税、登記の登録免許税を区別します。基本区分はそれぞれ都道府県税・市町村税・国税です。東京都23区の固定資産税は都による課税という取扱いがありますが、本設例はその地域ではありません。",
    "revision": 4,
    "choiceExplanations": [
      "不適切。登録免許税は国税で、不動産取得税と同じ都道府県税ではありません。",
      "正解。不動産取得税は原則として都道府県税です。",
      "不適切。不動産取得税の課税主体を市町村とする点が誤りです。",
      "不適切。資料の土地・家屋の固定資産税は原則として市町村が課税します。"
    ],
    "contentReview": "v135_property_tax_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "topic": "不動産関連税の課税主体",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.pref.kanagawa.jp/zei/kenzei/a001/b011/010.html",
    "additionalSourceUrls": [
      "https://www.tax.metro.tokyo.lg.jp/kazei/real_estate/kotei_tosi",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/osirase/9000.htm"
    ],
    "sourceLabel": "自治体・国税庁の不動産税基本事項と設例適用の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要論点3/共通公式ルール適用2/過去論点再確認2を区別。法令全文/全改正/免税点等の包括監修ではない。"
  },
  {
    "id": "fp2-027",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で配偶者の取得額はいくらか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、子2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n分割対象の遺産 / 預金9,600万円のみ。債務や費用等の控除を要する事情はない\n計算の範囲 / 法定相続分に従う預金の配分だけを計算し、相続税額や非課税枠は計算しない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "4,800万円",
      "3,200万円",
      "2,400万円",
      "7,200万円"
    ],
    "answer": 0,
    "explanation": "配偶者1/2、子全体1/2です。したがって9,600万円×1/2＝4,800万円です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "choiceExplanations": [
      "正解。9,600万円×1/2＝4,800万円です。",
      "不適切。相続人全員で単純に均等割りする計算になっています。続柄ごとの法定相続分を先に確認します。",
      "不適切。子1人の1/4の取り分を、配偶者の取り分と取り違えています。",
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 3,
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "reviewedAt": "2026-10-13",
    "v67ReviewScope": "家族関係・法定相続分・数値計算と全選択肢の限定点検。初回公式照合時期不明。資料確認日と設問の法令基準日は区別。",
    "topic": "相続人の構成と法定相続分",
    "lawReferenceDate": "2026-04-01",
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。",
    "priorSourceReview": "v67"
  },
  {
    "id": "fp2-028",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で配偶者の取得額はいくらか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、被相続人の父・母の2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。被相続人に子・孫等の第1順位の相続人はいない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n分割対象の遺産 / 預金9,000万円のみ。債務や費用等の控除を要する事情はない\n計算の範囲 / 法定相続分に従う預金の配分だけを計算し、相続税額や非課税枠は計算しない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "3,000万円",
      "6,750万円",
      "6,000万円",
      "4,500万円"
    ],
    "answer": 2,
    "explanation": "配偶者2/3、父母全体1/3です。したがって9,000万円×2/3＝6,000万円です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "choiceExplanations": [
      "不適切。配偶者以外の相続人全体の取り分を、配偶者の取り分と取り違えています。",
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。",
      "正解。9,000万円×2/3＝6,000万円です。",
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "topic": "相続人の構成と法定相続分",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "id": "fp2-029",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の時点で、遺留分に関する記述のうち最も適切なものはどれか。\n〈遺留分の対象者と侵害額の請求〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人が死亡。2019年7月1日以後の相続として扱う\n範囲 / 遺留分の有無と金銭請求の基本。具体的な請求額・期間計算は問わない\n比較する点 / 相続人全員の均等配分、兄弟姉妹の権利、金銭請求と不動産持分の区別\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "遺留分は、法定相続分の割合にかかわらず相続人全員へ均等に割り当てられる",
      "被相続人の兄弟姉妹には遺留分があるが、兄弟姉妹を代襲する甥・姪には遺留分がない",
      "兄弟姉妹には遺留分が認められない",
      "遺留分を侵害された者は、原則として遺留分侵害額に相当する不動産の持分移転だけを請求できる"
    ],
    "answer": 2,
    "explanation": "兄弟姉妹には遺留分がありません。また、遺留分は相続人全員に単純均等に割り当てる制度ではありません。資料の時点の遺留分侵害額請求は金銭の支払を求める制度であり、不動産の持分移転だけを求めるものではありません。",
    "revision": 5,
    "choiceExplanations": [
      "不適切。遺留分は、法定相続分を無視して相続人全員へ均等配分する制度ではありません。",
      "不適切。前半の「兄弟姉妹には遺留分がある」が誤りです。",
      "正解。兄弟姉妹には遺留分が認められません。",
      "不適切。遺留分侵害額に相当する金銭の支払を請求できます。不動産持分の移転だけに限定されません。"
    ],
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/lkazi_07_26/index.html",
    "sourceLabel": "裁判所・日本公証人連合会・千葉県立図書館・衆議院制定法律の対象論点限定照合",
    "reviewedAt": "2026-10-13",
    "v68ReviewScope": "兄弟姉妹の除外・金銭請求・2019年7月1日以後開始の相続という適用条件の限定確認。初回公式照合時期不明。",
    "topic": "遺留分の対象者と侵害額の請求",
    "lawReferenceDate": "2026-04-01",
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19620180713072.htm"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。",
    "priorSourceReview": "v68"
  },
  {
    "id": "fp2-030",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で子1人の取得額はいくらか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、子2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n分割対象の遺産 / 預金8,400万円のみ。債務や費用等の控除を要する事情はない\n計算の範囲 / 法定相続分に従う預金の配分だけを計算し、相続税額や非課税枠は計算しない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "2,100万円",
      "4,200万円",
      "2,800万円",
      "1,050万円"
    ],
    "answer": 0,
    "explanation": "配偶者1/2、子全体1/2です。同順位の2人で均等に分けるので、子1人の割合は1/2÷2＝1/4です。したがって8,400万円×1/4＝2,100万円です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "choiceExplanations": [
      "正解。8,400万円×1/4＝2,100万円です。",
      "不適切。同順位の相続人全体の取り分を、1人分と取り違えています。",
      "不適切。相続人全員で単純に均等割りする計算になっています。続柄ごとの法定相続分を先に確認します。",
      "不適切。既に1人分となった割合を、人数でもう一度割っています。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "topic": "相続人の構成と法定相続分",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "id": "fp3-031",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の予定について、時期と必要資金の見積額を同じ表に整理すると資金準備の検討に役立つ。\n〈将来の出来事と必要資金〉\n項目 / 条件\n基点 / 2026年\n住宅購入予定 / 2031年（5年後）\n子の進学予定 / 2034年（8年後）\n必要資金 / それぞれの時期の見積額を別途記入\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n期間・分母・使える資金の指定条件を確認する。年金資格・税率/保険料率・融資審査・全法令の包括監修ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。ライフイベント表に出来事の時期と必要資金を整理すると、年次の資金需要を把握しやすくなります。その表自体で年々の収支や金融資産残高が自動的に算定されるわけではなく、キャッシュフロー表へ反映して検討します。",
    "topic": "将来の出来事と必要資金",
    "choiceExplanations": [
      "正解。時期と費用を整理して将来の資金準備を検討できます。",
      "不適切。予定時期だけでなく費用の見積りも資金準備に役立ちます。"
    ],
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "sourceLabel": "日本FP協会の生活設計/家計定義／数値・比率は指定仮定の検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v119_life_plan_ratios_shortfall_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "基本定義/生活設計と独自の計算仮定を確認。必要保障額の公式枠組みと指定提示額の検算を併記し、制度受給資格の確認件数とはしない。初回ID時期未確定。"
  },
  {
    "id": "fp3-032",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の年間可処分所得は430万円となる。\n〈家計の年間収支・残高〉\n項目・期間 / 金額（万円、明記の利率を除く）\n給与収入（控除前、年額） / 600\n所得税・住民税（年額合計） / 90\n社会保険料（年額） / 80\n2026年の年間計画の提示額を使う。他の収入・支出、物価変動はない。税額・社会保険料を法令から計算する問題ではない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。600－90－80＝430万円です。提示された給与収入から税・社会保険料を引いた手取りを求めます。食費やローン返済などの生活支出を追加で差し引いた黒字額とは別です。",
    "topic": "年間収支・手取り・金融資産残高",
    "choiceExplanations": [
      "正解。600－90－80＝430万円が提示条件での手取りです。",
      "不適切。可処分所得と、手取りから生活費等を引いた年間収支を混同しません。"
    ],
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "additionalSourceUrls": [
      "https://jafp.or.jp/know/fp/sheet/files/2_Income_outgo.pdf"
    ],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v118_household_math_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "id": "fp3-033",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の条件で運用した2年後の元利合計は、110万円である。\n〈一時金の複利運用条件〉\n項目 / 内容\n運用開始時の元金 / 100万円\n年利 / 5％（固定）\n運用期間 / 2年間\n利息組入れ / 各年末・年1回\n期間中の追加入出金はない。税金・手数料は考慮しない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。100×1.05²＝110.25万円＝110万2,500円です。単利の110万円との違いは、1年目の利息5万円にも2年目の利息2,500円が付くことです。",
    "topic": "年1回複利の元利合計",
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceUrl": "https://www.j-flec.go.jp/public/learn/glossary/h_fukuri/",
    "sourceLabel": "J-FLEC：複利の定義／設例数値は独立検算",
    "additionalSourceUrls": [],
    "choiceExplanations": [
      "不適切。×。100×1.05²＝110.25万円＝110万2,500円です。単利の110万円との違いは、1年目の利息5万円にも2年目の利息2,500円が付くことです。",
      "正解。×。100×1.05²＝110.25万円＝110万2,500円です。単利の110万円との違いは、1年目の利息5万円にも2年目の利息2,500円が付くことです。"
    ]
  },
  {
    "id": "fp3-034",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "毎年末に20万円ずつ5回積み立て、年2％の年1回複利で運用する。最後の積立直後の元利合計を求めるために毎年の積立額に乗じる係数は（　）である。\n〈年2％・5年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.1041\n現価係数 / 0.9057\n年金終価係数 / 5.2040\n減債基金係数 / 0.1922\n年金現価係数 / 4.7135\n資本回収係数 / 0.2122\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "資本回収係数",
      "年金終価係数",
      "現価係数"
    ],
    "answer": 1,
    "explanation": "年金終価係数を用います。毎年末の積立額から最後の積立直後の元利合計を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "topic": "6つの係数・年金終価係数",
    "choiceExplanations": [
      "不適切。現在の元金から毎年末の一定取崩額を求めます。",
      "正解。毎年末の積立額から最後の積立直後の元利合計を求めます。",
      "不適切。将来の一時金から現在必要な一時金を求めます。"
    ],
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ]
  },
  {
    "id": "fp3-035",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "資料の年間収支の黒字額は（　）である。\n〈家計の年間収支・残高〉\n項目・期間 / 金額（万円、明記の利率を除く）\n給与収入（控除前、年額） / 500\n税・社会保険料（年額合計） / 110\n税・保険料以外の支出（年額） / 330\n2026年の年間計画の提示額を使う。他の収入・支出、物価変動はない。税額・社会保険料を法令から計算する問題ではない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "170万円",
      "60万円",
      "390万円"
    ],
    "answer": 1,
    "explanation": "手取り500－110＝390万円。年間黒字は390－330＝60万円です。110万円と330万円は別の支出として提示されており、漏れなく一度ずつ控除します。",
    "topic": "年間収支・手取り・金融資産残高",
    "revision": 4,
    "contentReview": "v118_household_math_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。税・社会保険料110万円を控除しないと500－330＝170万円です。",
      "正解。500－110－330＝60万円です。",
      "不適切。390万円は手取りであり、その他支出330万円を控除していません。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "additionalSourceUrls": [
      "https://jafp.or.jp/know/fp/sheet/files/2_Income_outgo.pdf"
    ],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "id": "fp3-036",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の事故Bも、個人賠償責任保険に加入していれば、職務遂行に起因する事故として必ず補償される。\n〈私生活と業務の賠償事故〉\n項目 / 条件\n事故A / 休日に自転車で買い物中、過失で歩行者にけがをさせた\n事故B / 勤務先の仕事として配送中、過失で通行人にけがをさせた\n被害者 / いずれも無関係の第三者\n賠償責任 / いずれも法律上の損害賠償責任を負う\n保険 / 通常の個人賠償責任保険を検討。業務を拡張する特約なし\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。職務遂行に直接起因する事故Bは、通常の個人賠償責任保険の対象外です。業務に対応する賠償責任保険を検討します。",
    "topic": "個人賠償責任・私生活と職務遂行",
    "choiceExplanations": [
      "不適切。事故Bは職務遂行に直接起因する賠償事故で、通常の個人賠償責任保険とは対象が異なります。",
      "正解。事故Bは職務遂行に直接起因する賠償事故で、通常の個人賠償責任保険とは対象が異なります。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/body/q080.html",
    "sourceLabel": "日本損害保険協会：個人賠償責任保険",
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/sme_insurance/liability/"
    ],
    "lawReferenceDate": "2026-04-01",
    "revision": 1,
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "id": "fp3-037",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の条件による損害保険金は45万円となる。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n対象となる損害額 / 50万円\n差し引く免責金額 / 5万円\n支払限度額 / 100万円\n算定順序 / 対象損害額から免責を控除し、0円を下限とした後に限度額を適用\nその他条件 / 支払対象事故・実損払。比例払・他保険調整・費用保険金なし\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n本問で明示した差引免責方式と適用順序を使う。実際の商品は方式・約款が異なる場合があり、一般共通の支払算式とはしない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。対象損害50－免責5＝45万円。0円を下限にして支払限度額100万円を適用すると、損害保険金は45万円です。限度額適用後に免責を再度差し引きません。",
    "topic": "差引免責と支払限度額",
    "choiceExplanations": [
      "正解。〇。対象損害50－免責5＝45万円。0円を下限にして支払限度額100万円を適用すると、損害保険金は45万円です。限度額適用後に免責を再度差し引きません。",
      "不適切。明示した差引免責と限度額の条件では記述の金額になります。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "lawReferenceDate": "2026-04-01",
    "revision": 1,
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v113_deductible_limit_scoped_migration",
    "verificationStatus": "given_formula_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "id": "fp3-038",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "2026年中、会社員Aさんが病気で勤務できなかった期間について、資料の所得補償保険から受け取った保険金は、給与を補うものであるため給与所得として課税される。\n〈所得補償保険の支払条件〉\n項目 / 内容\n被保険者・保険料の実質負担者・受取人 / すべてAさん\n支払の原因 / Aさんの病気による就業不能\n保険の内容 / 就業不能期間の給与を補てんする損害保険契約\n受取金額 / 60万円\n勤務先からの給与や休業手当ではなく、身体の傷害・疾病に基因する保険会社からの支払である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。病気やけがによる就業不能を原因とする所得補償保険金は、身体の傷害に基因して支払われる保険金として所得税は非課税です。給与を補う目的でも、勤務先から受け取る給与そのものではありません。",
    "topic": "所得補償保険金の課税",
    "choiceExplanations": [
      "不適切。補償の目的が給与の補てんでも、身体の傷害・疾病を原因とする所得補償保険金を給与所得には分類しません。",
      "正解。資料の支払原因に基づく所得補償保険金は所得税非課税です。"
    ],
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "taxYear": 2026,
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1760.htm",
    "sourceLabel": "国税庁：No.1760 所得補償保険の保険金を受け取ったとき",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v92_insurance_tax_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.92：所得補償保険金、満期保険金、死亡保険金について、支払原因・実質負担者・受取方法・所得区分・計算を限定照合。包括監修は未完了。"
  },
  {
    "id": "fp3-039",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の条件による損害保険金として、最も適切な金額はどれか。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n対象となる損害額 / 70万円\n差し引く免責金額 / 5万円\n支払限度額 / 100万円\n算定順序 / 対象損害額から免責を控除し、0円を下限とした後に限度額を適用\nその他条件 / 支払対象事故・実損払。比例払・他保険調整・費用保険金なし\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n本問で明示した差引免責方式と適用順序を使う。実際の商品は方式・約款が異なる場合があり、一般共通の支払算式とはしない。",
    "choices": [
      "65万円",
      "75万円",
      "70万円"
    ],
    "answer": 0,
    "explanation": "対象損害70－免責5＝65万円。0円を下限にして支払限度額100万円を適用すると、損害保険金は65万円です。限度額適用後に免責を再度差し引きません。",
    "topic": "差引免責と支払限度額",
    "choiceExplanations": [
      "正解。免責控除後65万円に支払限度額100万円を適用し、65万円です。",
      "不適切。損害額に免責を加えています。",
      "不適切。損害額をそのまま答え、免責と必要な限度額を適用していません。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "lawReferenceDate": "2026-04-01",
    "revision": 1,
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v113_deductible_limit_scoped_migration",
    "verificationStatus": "given_formula_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "id": "fp3-040",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の希望に最も合う一般的な主契約はどれか。\n〈必要な死亡保障の期間〉\n項目 / 条件\n希望する保障 / 今後10年間に限った死亡保障1,000万円\n満期時の生存給付 / 不要\n一生涯の死亡保障 / 不要\n比較条件 / 生存給付の特約なし。保険料の具体額は問わない\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "養老保険",
      "終身保険",
      "定期保険"
    ],
    "answer": 2,
    "explanation": "10年間の死亡保障を目的とし満期生存給付を必要としない条件には、定期保険が合います。養老保険は満期給付、終身保険は一生涯の死亡保障を備えます。",
    "topic": "必要な死亡保障の期間",
    "choiceExplanations": [
      "養老保険は期間中の死亡保障に加えて満期生存時の満期保険金があるため、満期給付不要という条件とは異なります。",
      "終身保険は原則として一生涯の死亡保障です。今回求めている保障は10年間に限られています。",
      "正解。一定期間の死亡保障を目的とし、通常満期保険金がない定期保険が条件に合います。"
    ],
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/41.html",
    "additionalSourceUrls": [
      "https://www.jili.or.jp/knows_learns/kind/main/38.html",
      "https://www.jili.or.jp/knows_learns/kind/main/37.html"
    ],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "id": "fp3-041",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料のA社株式のPER（株価収益率）は2倍である。\n〈A社の株価と1株当たり指標〉\n項目 / 内容\n株価 / 600円\nEPS（1株当たり当期純利益） / 60円\nBPS（1株当たり純資産） / 300円\n資料は架空企業の固定値であり、各指標は計算用に与えた値である。税金・手数料・株式分割等は考慮しない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。PERは株価÷EPSなので600円÷60円＝10倍です。600円÷300円＝2倍はPBRであり、純利益と純資産を取り違えています。",
    "topic": "PERとPBRの計算対象",
    "choiceExplanations": [
      "不適切。2倍は株価をBPSで割ったPBRの値です。",
      "正解。PERにはEPSを使い、600÷60＝10倍です。"
    ],
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jpx.co.jp/glossary/ka/73.html",
    "sourceLabel": "日本取引所グループ：株価収益率",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v94_equity_metrics_primary_definition_and_arithmetic_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.94：PER/PBR/配当利回り/配当性向の資料・定義・独立計算・誤答根拠を限定確認。架空企業の固定値であり、法令変更の確認件数や実銘柄の投資判断を示すものではない。"
  },
  {
    "id": "fp3-042",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料の外貨資産の円換算額は、時点Aより時点Bのほうが小さい。\n〈固定外貨額の円換算〉\n項目 / 条件\n保有外貨 / 3,000米ドル（両時点で同額）\n時点A / 1米ドル＝140円\n時点B / 1米ドル＝120円\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n外貨額の増減、利息、売買、追加投資・引出し、手数料、税額は考慮しない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "3,000米ドル×140円／米ドル＝420,000円。時点Bは360,000円。減少額は60,000円です。これは換算額の比較であり、実売却や確定損失の計算ではありません。",
    "topic": "固定外貨額の円換算",
    "choiceExplanations": [
      "正解。外貨額×円／米ドルにより、420,000円から360,000円へ減少します。",
      "不適切。米ドル保有額が一定でも、1米ドルを換算する円額の低下で円換算額は減少します。"
    ],
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.boj.or.jp/about/education/oshiete/intl/g18.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "日本銀行の円高・円安定義／独自仮定の換算検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "id": "fp3-043",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料のA社株式のPBRは（　）倍である。\n〈A社・B社の株式資料〉\n項目 / A社 / B社\n株価 / 2,400円 / 3,000円\nEPS（1株当たり当期純利益） / 240円 / 150円\nBPS（1株当たり純資産） / 1,600円 / 1,000円\n資料は架空企業の固定値であり、各指標は計算用に与えた値である。税金・手数料・株式分割等は考慮しない。",
    "choices": [
      "1.5",
      "3.0",
      "10.0"
    ],
    "answer": 0,
    "explanation": "A社のPBRは2,400円÷1,600円＝1.5倍。3.0倍はB社のPBR（3,000÷1,000）、10.0倍はA社のPER（2,400÷240）です。PBRは利益ではなく純資産を使います。",
    "topic": "企業資料からのPBR計算",
    "revision": 4,
    "contentReview": "v94_equity_metrics_primary_definition_and_arithmetic_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。A社の株価をA社のBPSで割ります。",
      "不適切。B社のPBRです。会社の列を取り違えています。",
      "不適切。A社のEPSを使ったPERであり、PBRではありません。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jpx.co.jp/glossary/ka/74.html",
    "sourceLabel": "日本取引所グループ：株価純資産倍率",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.94：PER/PBR/配当利回り/配当性向の資料・定義・独立計算・誤答根拠を限定確認。架空企業の固定値であり、法令変更の確認件数や実銘柄の投資判断を示すものではない。"
  },
  {
    "id": "fp3-044",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料のA社株式の税引前配当利回りは（　）％である。\n〈株価・利益・年間配当の資料〉\n項目 / 内容\n株価 / 1,600円\n年間1株当たり配当金 / 48円\nEPS（1株当たり当期純利益） / 240円\n資料は架空企業の固定値であり、各指標は計算用に与えた値である。税金・手数料・株式分割等は考慮しない。",
    "choices": [
      "0.03",
      "3.0",
      "20.0"
    ],
    "answer": 1,
    "explanation": "配当利回りは年間1株配当金÷株価×100。48円÷1,600円×100＝3.0％です。0.03は百分率にする前の比率で、0.03％ではありません。20.0％は配当性向（48÷240×100）です。",
    "topic": "配当利回りの百分率計算",
    "contentReview": "v94_equity_metrics_primary_definition_and_arithmetic_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "choiceExplanations": [
      "不適切。48÷1,600＝0.03を百分率へ換算していません。",
      "正解。0.03×100＝3.0％です。",
      "不適切。EPSを分母とした配当性向であり、株価を分母にする配当利回りではありません。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jpx.co.jp/glossary/ka/85.html",
    "sourceLabel": "日本取引所グループ：株式利回り",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.94：PER/PBR/配当利回り/配当性向の資料・定義・独立計算・誤答根拠を限定確認。架空企業の固定値であり、法令変更の確認件数や実銘柄の投資判断を示すものではない。"
  },
  {
    "id": "fp3-045",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料の外貨資産だけの円換算額はどれか。\n〈外貨のみの円換算〉\n項目 / 条件\n外貨資産 / 100米ドル\n提示レート / 1米ドル＝150円\n別の円預金 / 15,000円（本問の計算対象外）\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n外貨額の増減、利息、売買、追加投資・引出し、手数料、税額は考慮しない。",
    "choices": [
      "150円",
      "3万円",
      "1万5,000円"
    ],
    "answer": 2,
    "explanation": "外貨だけなら15,000円。別の円預金を重複して加算しません。",
    "topic": "外貨のみの円換算",
    "revision": 4,
    "contentReview": "v122_fx_weighted_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。150円は1米ドル当たりのレートであり、100米ドル分ではありません。",
      "不適切。30,000円は円預金15,000円を加えた合計で、外貨だけの換算額ではありません。",
      "正解。100米ドル×150円／米ドル＝15,000円です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.boj.or.jp/about/education/oshiete/intl/g18.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "日本銀行の円高・円安定義／独自仮定の換算検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "id": "fp3-046",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "2026年分の所得税で、次の資料による通常の医療費控除額は4万円である。\n〈医療費控除の計算資料〉\n項目 / 内容\n総所得金額等 / 180万円\n支払った対象医療費 / 18万円\n医療費を補てんする保険金 / 5万円\n差引基準額 / 総所得金額等の5％＝9万円\n総所得金額等が200万円未満なので、10万円ではなく総所得金額等の5％を用いる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。総所得金額等が200万円未満なので差引基準額は180万円×5％＝9万円です。医療費控除額は18万円－保険金5万円－9万円＝4万円となります。医療費控除はこの4万円を所得から差し引く所得控除であり、税額から4万円を直接差し引く制度ではありません。",
    "topic": "医療費控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm",
    "sourceLabel": "国税庁：No.1120 医療費を支払ったとき",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v89_2026_basic_and_medical_deduction_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.89：2026年分の基礎控除所得区分、医療費控除の総所得金額等5％基準、補てん保険金の対応限度を公式照合。包括監修未完了。",
    "choiceExplanations": [
      "正解。18万円－5万円－9万円＝4万円です。",
      "誤り。総所得金額等200万円未満では5％相当額を用いるため、本問の計算結果は4万円です。"
    ],
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "taxYear": 2026
  },
  {
    "id": "fp3-047",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "資料の条件では、Aさんの2026年分の不動産所得は90万円となる。正しければ〇、誤っていれば×を選びなさい。\n〈家賃収入と不動産所得〉\n項目 / 条件\n対象者 / 日本の居住者である個人Aさん。住宅の賃貸による不動産所得\n総収入金額 / 120万円（当年の賃貸収入の全額。ほかの収入なし）\n必要経費 / 30万円（家事費を除き、当年に算入できる確定済みの合計）\n計算条件 / 白色申告。専従者控除・損失繰越などの追加調整なし\n金額の単位は万円。所得税額・税引後の手取りを問う問題ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "不動産所得は総収入から必要経費を引いて求めます。提示額で計算すると120－30＝90万円。120万円は経費控除前の収入です。30万円は適用要件を満たす確定額として提示し、個々の費用の償却・配分計算を別途求める問題ではありません。",
    "topic": "家賃収入と不動産所得",
    "choiceExplanations": [
      "正解。120－30＝90万円です。必要経費を差し引いた所得を求めます。",
      "不適切。資料の条件では90万円で正しいため、×とはなりません。"
    ],
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1370.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2210.htm"
    ],
    "sourceLabel": "国税庁の所得計算・必要経費の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v129_expense_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂の基本事項限定照合1/提示条件の内部検算3。家内労働者特例・施行前の改正額を使用しない。法令全文・全例外は未確認。"
  },
  {
    "id": "fp3-048",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "資料のAさんが給与等の支払者から交付を受け、給与の年間支払額や源泉徴収税額を確認する書類はどれか。\n〈給与所得者へ交付する書類〉\n項目 / 条件\nAさん / 日本の居住者である会社員。2025年分の給与について、2026年に書類を確認する\n確認する情報 / Aさん本人の年間給与等の支払金額、源泉徴収税額など\n書類の用途 / 給与等の受給者本人へ交付される個人別の書類\n注意点 / 税務署へ提出する書類の対象範囲と、受給者への交付は別の論点\n法令基準日は2026年4月1日。2027年以後の税務署提出に関する説明を、今回の設例に混ぜない。",
    "choices": [
      "医療費控除の明細書",
      "給与所得の源泉徴収票等の法定調書合計表",
      "給与所得の源泉徴収票"
    ],
    "answer": 2,
    "explanation": "給与等の支払者は受給者へ給与所得の源泉徴収票を交付します。税務署へ提出する範囲に該当するかどうかと、従業員本人への交付を混同しないこと。受給者への交付は一定の要件で電子交付も可能です。",
    "topic": "給与所得者へ交付する書類",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hotei/7411.htm",
    "sourceLabel": "国税庁・東京都主税局の基本事項限定照合",
    "lawReferenceDate": "2026-04-01",
    "revision": 4,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "choiceExplanations": [
      "不適切。医療費控除の明細書は支払った医療費等を整理するためのもので、給与の年間支払額を本人へ通知する書類ではありません。",
      "不適切。法定調書合計表は給与等の支払者が税務署へ提出する合計表で、本人へ交付する個人別の源泉徴収票とは異なります。",
      "正解。受給者本人に交付される給与所得の源泉徴収票で確認します。"
    ],
    "contentReview": "v132_tax_classification_documents_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "priorSourceCheckedDate": "2026-10-12",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要事項4/既存主要論点再確認1を分離。医療費の旧確認論点は重複加算せず、新改訂の健康増進薬品の誤答根拠を確認。法令全文・全例外は未確認。"
  },
  {
    "id": "fp3-049",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "資料で示す控除の段階に該当する制度の一般的な名称はどれか。\n〈控除する段階の比較〉\n項目 / 条件\n指定する段階 / 課税所得に税率を適用して算出した所得税額から直接差し引く\n比較対象 / 所得控除、税額控除、必要経費\n対象 / 居住者である個人の所得税。個別制度の控除率や上限は問わない\n一般的な計算段階の限定確認。全所得区分・税額控除の個別適用条件を監修済みとはしない。\n法令基準日2026年4月1日、確認日2026年10月15日。国税庁の同基準日表示の基本事項と指定条件を限定点検。\n税法の施行日・年分と確認日を区別。2027年以降の税率説明を2026年の計算に混ぜない。",
    "choices": [
      "所得控除",
      "税額控除",
      "必要経費"
    ],
    "answer": 1,
    "explanation": "収入から必要経費等を差し引いて所得を求め、所得控除で課税所得を求め、その後税率を適用します。税額控除は算出所得税額から差し引く制度です。源泉徴収税額等の精算とも区別します。",
    "topic": "控除する段階の比較",
    "choiceExplanations": [
      "不適切。所得控除は税率を適用する前の所得金額から差し引きます。",
      "正解。算出所得税額から直接差し引くのは税額控除です。",
      "不適切。必要経費は事業所得等の収入から所得を求める段階の費用で、算出税額からの控除ではありません。"
    ],
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1200.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1000.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1100.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2210.htm"
    ],
    "sourceLabel": "国税庁の計算段階・暦年と指定数値の限定検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v128_tax_stage_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂公式主要論点2/指定条件検算3を区別。法令全文/全個別控除の確認は未完了。fp3-022は税額控除を20から10万円へ変更して限度条件を改善。"
  },
  {
    "id": "fp3-050",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "資料の課税総所得金額はいくらか。所得税額や納付額ではなく、税率を適用する前の金額を答えること。\n〈課税所得と税額控除の段階〉\n項目 / 条件\n総所得金額 / 400万円（収入額ではなく、必要経費・給与所得控除等を反映済みの所得）\n所得控除合計 / 130万円（適用要件と限度を満たした確定額）\n所得税の税額控除 / なし\n対象年分・納税者 / 2026年分、日本の居住者である個人\n他の条件 / 総合課税のみ。分離課税・損失繰越等の追加調整なし\n各所得控除の内訳や個別税額控除制度は別途確定した提示条件。各控除の法定定額を新しく検証した件数には含めない。\n法令基準日2026年4月1日、確認日2026年10月15日。国税庁の同基準日表示の基本事項と指定条件を限定点検。\n税法の施行日・年分と確認日を区別。2027年以降の税率説明を2026年の計算に混ぜない。",
    "choices": [
      "270万円",
      "530万円",
      "130万円"
    ],
    "answer": 0,
    "explanation": "課税総所得金額は400－130＝270万円。万円同士で計算します。所得控除は税率適用前、税額控除は算出所得税額から差し引く段階です。必要経費・給与所得控除は総所得の提示額へ反映済みなので、再度差し引きません。",
    "topic": "課税所得と税額控除の段階",
    "revision": 4,
    "contentReview": "v128_tax_stage_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。400－130＝270万円です。",
      "不適切。400＋130＝530万円。控除を加算した誤りです。",
      "不適切。130万円は所得控除額そのもので、課税所得ではありません。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1000.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1100.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1200.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm"
    ],
    "sourceLabel": "国税庁の計算段階・暦年と指定数値の限定検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要論点2/指定条件検算3を区別。法令全文/全個別控除の確認は未完了。fp3-022は税額控除を20から10万円へ変更して限度条件を改善。"
  },
  {
    "id": "fp3-051",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料の条件で、建ぺい率は80％である。正しければ〇、誤っていれば×を選びなさい。\n〈建築面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 200㎡（算定に用いる敷地面積として確定）\n建築面積 / 80㎡（算定上の値として確定）\n容積率算定対象の延べ面積 / 160㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "建築面積80㎡を敷地面積200㎡で割り、100を掛けると40％です。分母は建築面積や延べ面積ではなく敷地面積です。80％は160÷200×100で算出した容積率で、建ぺい率を取り違えています。",
    "topic": "建築面積と敷地面積の比",
    "choiceExplanations": [
      "不適切。記述は誤りで、建築面積80㎡を敷地面積200㎡で割り、100を掛けると40％です。分母は建築面積や延べ面積ではなく敷地面積です。",
      "正解。記述は誤りで、建築面積80㎡を敷地面積200㎡で割り、100を掛けると40％です。分母は建築面積や延べ面積ではなく敷地面積です。"
    ],
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "id": "fp3-052",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料の土地・家屋の取得には、通常の売買取得と同様に不動産取得税が課される。正しければ〇、誤っていれば×を選びなさい。\n〈相続による不動産取得〉\n項目 / 条件\n対象者 / 被相続人の相続人である個人Aさん\n取得原因 / 2026年4月に発生した相続によって土地・家屋を取得した\n区別する取得 / 売買や贈与ではなく、相続による取得である\n範囲 / 不動産取得税の課税対象かを問う。相続税・登録免許税の税額は問わない\n法令基準日2026年4月1日、確認日とは別。税目の基本事項または提示設例の適用を確認する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "相続による土地・家屋の取得には、不動産取得税は課されません。不動産を取得したという結果だけで一律に判断せず、取得原因を確認します。不動産取得税が非課税でも、相続税や登記に伴う税がすべて不要になるという意味ではありません。",
    "topic": "相続による不動産取得",
    "sourceUrl": "https://www.tax.metro.tokyo.lg.jp/kazei/real_estate/fudosan",
    "sourceLabel": "自治体・国税庁の不動産税基本事項と設例適用の限定照合",
    "lawReferenceDate": "2026-04-01",
    "revision": 3,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "priorSourceCheckedDate": "2026-10-12",
    "choiceExplanations": [
      "不適切。相続による取得には、不動産取得税は課されません。",
      "正解。売買・贈与による取得と、相続による取得を区別する必要があります。"
    ],
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/osirase/9000.htm"
    ],
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v135_property_tax_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要論点3/共通公式ルール適用2/過去論点再確認2を区別。法令全文/全改正/免税点等の包括監修ではない。"
  },
  {
    "id": "fp3-053",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料から建ぺい率を求めると、最も適切なものはどれか。\n〈建築面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 300㎡（算定に用いる敷地面積として確定）\n建築面積 / 120㎡（算定上の値として確定）\n容積率算定対象の延べ面積 / 750㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "40％",
      "250％",
      "60％"
    ],
    "answer": 0,
    "explanation": "建築面積120㎡を敷地面積300㎡で割り、100を掛けると40％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "topic": "建築面積と敷地面積の比",
    "revision": 4,
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。40％は、建築面積を敷地で割る計算です。",
      "不適切。250％は、延べ面積を使って容積率を求めている計算です。",
      "不適切。60％は、建築面積以外の敷地の比率を求めている計算です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "id": "fp3-054",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料から容積率を求めると、最も適切なものはどれか。\n〈算定対象延べ面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 250㎡（算定に用いる敷地面積として確定）\n建築面積 / 125㎡（算定上の値として確定）\n容積率算定対象の延べ面積 / 500㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "50％",
      "200％",
      "100％"
    ],
    "answer": 1,
    "explanation": "容積率算定対象の延べ面積500㎡を敷地面積250㎡で割り、100を掛けると200％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "topic": "算定対象延べ面積と敷地面積の比",
    "revision": 4,
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。50％は、建ぺい率を求めている計算です。",
      "正解。200％は、算定対象延べ面積を敷地で割る計算です。",
      "不適切。100％は、延べ面積と敷地面積の差の比率を求めている計算です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "id": "fp3-055",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料の所有権移転に関する登記事項を記録するのは、原則としてどの部分か。\n〈売買による所有権移転〉\n項目 / 条件\n対象 / 所有権の登記がある通常の土地1筆\n取引 / 売買により売主から買主へ所有権が移転した\n登記する内容 / 売買による所有権移転\n除外 / 地目変更や抵当権の設定を登記する場面ではない\n独自設例。法令基準日は2026年4月1日。申請義務・期限等の改正事項は今回の出題対象外。",
    "choices": [
      "権利部（甲区）",
      "権利部（乙区）",
      "表題部"
    ],
    "answer": 0,
    "explanation": "資料の対象は所有権移転の登記なので、権利部の甲区に記録します。所有権以外の権利を記録する乙区、物理的状況を示す表題部と区別します。表題部所有者の表示と所有権移転の登記を混同しないため、所有権の登記がある土地を前提にしています。",
    "topic": "売買による所有権移転",
    "contentReview": "v136_registration_scoped_migration",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "revision": 2,
    "choiceExplanations": [
      "正解。売買による所有権移転の登記事項は、権利部の甲区に記録します。",
      "不適切。乙区は抵当権・地上権等の所有権以外の権利に関する事項を扱います。",
      "不適切。土地の表題部には地目・地積等を記録します。所有権移転の登記は甲区です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://houmukyoku.moj.go.jp/matsuyama/page000001_00390.html",
    "additionalSourceUrls": [
      "https://www.moj.go.jp/MINJI/minji02"
    ],
    "sourceLabel": "国土交通省本文・法務省/法務局の公式索引抜粋による登記基本事項の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式本文と公式検索索引抜粋の照合範囲を区別。法務省/法務局ページ本文403、2026-04-01時点の規則全文・全改正未確認。新改訂主要点3/共通適用1/旧論点再確認2。包括監修未完了。"
  },
  {
    "id": "fp3-056",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料の配偶者は、友人に対して遺留分侵害額に相当する金銭の支払を請求できる。正しければ〇、誤っていれば×を選びなさい。\n〈遺留分の対象者と侵害額の請求〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人が死亡。2019年7月1日以後の相続として扱う\n範囲 / 遺留分の有無と金銭請求の基本。具体的な請求額・期間計算は問わない\n遺言の内容 / 全財産を友人へ遺贈する有効な遺言がある\n配偶者の条件 / 法律上の配偶者が相続人であり、その遺留分が侵害されている\n請求の前提 / 遺留分の放棄や請求権の消滅等はなく、権利行使に必要な要件を満たす\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "資料の配偶者は遺留分権利者で、侵害と権利行使の要件が満たされています。全財産を友人へ遺贈する遺言があっても、そのことだけで配偶者の遺留分侵害額請求が排除されるわけではありません。",
    "topic": "遺留分の対象者と侵害額の請求",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/lkazi_07_26/index.html",
    "sourceLabel": "裁判所・日本公証人連合会・千葉県立図書館・衆議院制定法律の対象論点限定照合",
    "reviewedAt": "2026-10-13",
    "v68ReviewScope": "兄弟姉妹の除外・金銭請求・2019年7月1日以後開始の相続という適用条件の限定確認。初回公式照合時期不明。",
    "revision": 3,
    "choiceExplanations": [
      "正解。資料の条件では、友人に侵害額に相当する金銭の支払を請求できます。",
      "不適切。全財産を遺贈する遺言の存在だけを理由に、配偶者の請求が当然にできなくなるものではありません。"
    ],
    "lawReferenceDate": "2026-04-01",
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19620180713072.htm"
    ],
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。",
    "priorSourceReview": "v68"
  },
  {
    "id": "fp3-057",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料では本文等を本人が自書する一方、添付財産目録はパソコンで作成でき、その目録の毎葉（自書でない記載が両面にあれば両面）に本人が署名・押印する必要がある。正しければ〇、誤っていれば×を選びなさい。\n〈紙の自筆証書遺言と添付財産目録〉\n項目 / 条件\n作成時点 / 2026年3月1日。紙の自筆証書遺言を作成する\n保管の前提 / 本人が自宅で保管する。法務局の保管申請の用紙・余白等の様式は問わない\n比較する部分 / 財産を誰に承継させるかを書く本文、日付・氏名、添付する財産目録\n範囲 / 自書と署名・押印の方式を問う。遺言能力等を含めた有効性全体の審査ではない\n財産目録 / パソコンで作成し、紙の両面に自書でない記載がある\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "本文、日付、氏名の自書と押印が基本です。添付する財産目録には自書の例外がありますが、各葉に署名・押印を要し、自書でない記載が両面にあれば両面に必要です。目録の例外を、誰へ何を承継させるかを書く本文に広げてはいけません。",
    "topic": "紙の自筆証書遺言と添付財産目録",
    "sourceUrl": "https://www.koshonin.gr.jp/notary/ow02/2-q18",
    "sourceLabel": "裁判所・日本公証人連合会・千葉県立図書館・衆議院制定法律の対象論点限定照合",
    "lawReferenceDate": "2026-04-01",
    "revision": 4,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-13",
    "v69ReviewScope": "紙の自筆証書遺言の本文・日付・氏名の自書、財産目録の例外、両面を含む署名押印の限定確認。",
    "v69PreviousSourceUrl": "https://www.moj.go.jp/MINJI/minji07_00240.html",
    "choiceExplanations": [
      "正解。自書の例外は添付財産目録であり、資料の両面にはそれぞれ署名・押印が必要です。",
      "不適切。添付目録は所定の署名・押印をすればパソコン作成が認められます。本文までパソコンでよいという意味ではありません。"
    ],
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19620180713072.htm"
    ],
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。",
    "priorSourceReview": "v69"
  },
  {
    "id": "fp3-058",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料の預金を法定相続分で分けると、子1人の取得額は2,500万円となる。正しければ〇、誤っていれば×を選びなさい。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、子2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n分割対象の遺産 / 預金10,000万円のみ。債務や費用等の控除を要する事情はない\n計算の範囲 / 法定相続分に従う預金の配分だけを計算し、相続税額や非課税枠は計算しない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "配偶者1/2、子全体1/2です。同順位の2人で均等に分けるので、子1人の割合は1/2÷2＝1/4です。したがって10,000万円×1/4＝2,500万円です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "choiceExplanations": [
      "正解。資料の子1人の割合は1/4で、取得額は2,500万円です。",
      "不適切。資料の相続人構成と法定相続分から計算すると、記述の取得額になります。"
    ],
    "revision": 1,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "id": "fp3-059",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料で配偶者の法定相続分はどれか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、被相続人の兄・姉の2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。被相続人に子・孫等も父母・祖父母等の直系尊属もいない。兄・姉はともに父母の双方を同じくする全血の兄弟姉妹である。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "2分の1",
      "4分の3",
      "3分の2"
    ],
    "answer": 1,
    "explanation": "配偶者3/4、兄弟姉妹全体1/4です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "choiceExplanations": [
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。",
      "正解。配偶者の割合は3/4です。",
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "id": "fp3-060",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料の承継を一般に何というか。\n〈相続の開始と死亡・遺産分割の時点〉\n項目 / 条件\n出来事 / Aさんが死亡し、その財産に関する権利義務を相続人が承継する\n範囲 / この承継の基本的な名称を問う。承継財産や債務の個別の範囲、放棄等の例外は問わない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "贈与",
      "売買",
      "相続"
    ],
    "answer": 2,
    "explanation": "死亡を契機として相続人が財産に関する権利義務を承継することを相続といいます。無償で財産を与える合意による贈与や、代金との交換である売買とは区別します。",
    "topic": "相続の開始と死亡・遺産分割の時点",
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "choiceExplanations": [
      "不適切。贈与は財産を無償で与える契約であり、資料の死亡に伴う承継の名称ではありません。",
      "不適切。売買は代金との交換による取引であり、資料の死亡に伴う承継の名称ではありません。",
      "正解。資料の死亡を契機とする承継は相続です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf",
    "additionalSourceUrls": [
      "https://www.library.pref.chiba.lg.jp/reference/pathfinder/pf_souzoku.html"
    ],
    "sourceLabel": "国税庁税務大学校 令和8年度相続税法講本（法令・通達基準2026年1月1日）対象論点・千葉県立図書館",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。 国税庁講本12/122/123頁の開始・承継、47頁の贈与定義を追加確認。講本の1月1日基準を4月1日統合全文と呼ばない。"
  },
  {
    "id": "fp2-031",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の純資産額として、最も適切なものはどれか。\n〈同一時点の資産・負債〉\n区分・項目 / 金額（万円）\n時点 / 2026年4月1日現在\n資産：預貯金 / 1,500\n資産：投資信託時価 / 700\n資産：自宅時価 / 4,800\n資産：自動車時価 / 200\n負債：住宅ローン残高 / 3,600\n負債：教育ローン残高 / 300\n資料外の資産・負債はない。住宅等は提示時価、借入は同日の残高。売却費用・税額・評価差は考慮しない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "3,000万円",
      "3,100万円",
      "3,300万円",
      "3,600万円"
    ],
    "answer": 2,
    "explanation": "資産合計7,200万円－負債合計3,900万円＝純資産3,300万円です。すべて同じ時点の残高であり、年間収入や年間返済額とは区別します。",
    "topic": "家計の純資産",
    "revision": 7,
    "contentReview": "v118_household_math_scoped_migration",
    "choiceExplanations": [
      "不適切。教育ローン300万円を二度控除すると3,300－300＝3,000万円です。",
      "不適切。自動車200万円を資産から落とすと3,300－200＝3,100万円です。",
      "正解。7,200－3,900＝3,300万円です。",
      "不適切。教育ローン300万円を控除しないと7,200－3,600＝3,600万円です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "additionalSourceUrls": [],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "id": "fp2-032",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "毎年末に30万円ずつ5回積み立て、年2％の年1回複利で運用する。最後の積立直後の元利合計を求めるために毎年の積立額に乗じる係数はどれか。\n〈年2％・5年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.1041\n現価係数 / 0.9057\n年金終価係数 / 5.2040\n減債基金係数 / 0.1922\n年金現価係数 / 4.7135\n資本回収係数 / 0.2122\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "年金終価係数",
      "資本回収係数",
      "年金現価係数",
      "減債基金係数"
    ],
    "answer": 0,
    "explanation": "年金終価係数を用います。毎年末の積立額から最後の積立直後の元利合計を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "topic": "6つの係数・年金終価係数",
    "choiceExplanations": [
      "正解。毎年末の積立額から最後の積立直後の元利合計を求めます。",
      "不適切。現在の元金から毎年末の一定取崩額を求めます。",
      "不適切。毎年末の受取額から現在必要な元金を求めます。",
      "不適切。将来の目標額から毎年末の積立額を求めます。"
    ],
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ]
  },
  {
    "id": "fp2-033",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の条件で比較した返済方式について、最も適切な記述はどれか。\n〈元金均等と元利均等の比較〉\n項目 / 条件\n借入額 / 両方式とも1,000万円\n利率 / 両方式とも全期間固定の年2％（正の金利）\n返済期間・回数 / 両方式とも10年、毎月末120回\n除外条件 / 元金据置・繰上返済・ボーナス返済・手数料・途中変更なし\n比較範囲 / 毎回の元金/元利合計の性質と総返済額。端数処理の差は無視\n法令基準日：2026年4月1日。金利・人物・条件は独自の仮定。\n基本論点の限定確認。個別契約・全法令・全改正・包括監修の完了を示すものではない。",
    "choices": [
      "同じ借入額・金利・返済期間なら、総返済額は一般に元利均等返済の方が元本均等返済より少ない",
      "元本均等返済の毎回の元本返済額は一定である",
      "元本均等返済方式では、返済回数を重ねるほど各回の支払利息額が増加する",
      "元利均等返済方式は、毎回の元利返済額が返済当初は多く、返済が進むと減少する"
    ],
    "answer": 1,
    "explanation": "元金均等は毎回の元金返済額が一定です。残高が減ると利息も減り、元利合計は次第に小さくなります。元利均等は固定金利等の与件で元利合計が一定となり、同じ正の金利・期間では一般に元金均等より総返済額が多くなります。",
    "topic": "元金均等と元利均等の比較",
    "revision": 4,
    "choiceExplanations": [
      "不適切。与件では元金の減少が早い元金均等の方が総利息・総返済額は少なくなります。",
      "正解。元金均等返済で毎回一定なのは元金部分です。",
      "不適切。元金残高の減少とともに利息は減る方向です。",
      "不適切。与件の元利均等は元利合計が一定で、合計額が次第に減るのは元金均等です。"
    ],
    "contentReview": "v120_remaining_life_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.flat35.com/loan/lineup/kinto/index.html",
    "additionalSourceUrls": [],
    "sourceLabel": "住宅金融支援機構/日本FP協会/国税庁の限定論点。実質利回りは指定数式検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "現行商品の金利/統計平均は問題に転載しない。税理士制度No9203は2026-04-01基準、通達は2025-06-01記載、取得日2026-10-15と別記。実質利回りの数式検算と公式制度照合を分離。"
  },
  {
    "id": "fp2-034",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の借入条件で、第3回目の年末返済額（元金と利息の合計）はどれか。\n〈元金均等返済の条件〉\n項目 / 内容\n借入時点の元金 / 1,200万円\n返済回数 / 6回（毎年末）\n毎回の元金返済 / 200万円\n年利 / 1.5％（固定）\n利息計算 / 各年の期首元金残高に対して1年分\n税金・手数料・繰上げ返済はない。毎月返済の住宅ローンではなく、年1回返済の独自計算設例である。",
    "choices": [
      "209万円",
      "212万円",
      "215万円",
      "218万円"
    ],
    "answer": 1,
    "explanation": "元金均等返済では各年の元本返済額は200万円。2回返済後の元金残高は1,200－200×2＝800万円。3年目の利息は800×1.5％＝12万円、元利合計212万円。毎年の利息計算に使う残高を借入当初の1,200万円としないことが重要です。",
    "topic": "元金均等返済の残高と返済額",
    "sourceUrl": "https://www.flat35.com/hajimete/atoz/04_fpcolumn.html",
    "sourceLabel": "住宅金融支援機構：元金均等返済／年1回の与件は独立検算",
    "lawReferenceDate": "2026-04-01",
    "revision": 6,
    "reviewStatus": "formula_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "sourceCheckedDate": "2026-10-14",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "additionalSourceUrls": [],
    "choiceExplanations": [
      "不適切。4年目の期首残高600万円に対する利息9万円を使っています。",
      "正解。3年目の期首残高800万円×1.5％＝12万円。元金200万円と合わせ212万円です。",
      "不適切。2年目の期首残高1,000万円に対する利息15万円を使っています。",
      "不適切。借入当初の1,200万円に対する利息18万円を使っています。"
    ]
  },
  {
    "id": "fp2-035",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の年間収支として、最も適切なものはどれか。\n〈家計の年間収支・残高〉\n項目・期間 / 金額（万円、明記の利率を除く）\n世帯手取り収入（年額） / 760（税・社会保険料控除後）\n生活費（月額） / 43（下の年払費用を含まない）\n保険料（年額） / 24\n旅行費（年額） / 40\n2026年の年間計画の提示額を使う。他の収入・支出、物価変動はない。税額・社会保険料を法令から計算する問題ではない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "180万円の黒字",
      "244万円の黒字",
      "220万円の黒字",
      "204万円の黒字"
    ],
    "answer": 0,
    "explanation": "生活費43×12＝516万円。年間支出516＋24＋40＝580万円、年間黒字760－580＝180万円です。手取りから税・社会保険料を再度差し引かず、月額を年額換算して年払費用を一度だけ加えます。",
    "topic": "年間収支・手取り・金融資産残高",
    "revision": 6,
    "contentReview": "v118_household_math_scoped_migration",
    "choiceExplanations": [
      "正解。760－516－24－40＝180万円の黒字です。",
      "不適切。保険料と旅行費をともに落とすと760－516＝244万円です。",
      "不適切。旅行費40万円を落とすと760－516－24＝220万円です。",
      "不適切。保険料24万円を落とすと760－516－40＝204万円です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "additionalSourceUrls": [
      "https://jafp.or.jp/know/fp/sheet/files/2_Income_outgo.pdf"
    ],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "id": "fp2-036",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の契約における免責金額について、最も適切な説明はどれか。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n対象事故 / 保険対象の火災事故\n免責方式 / 損害額から5万円を差し引く\n対象損害額 / 4万円\n他の支払条件 / 比例払・費用保険金・他保険調整なし\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n基本用語と本問で指定した契約条件を確認する。個別商品約款・費用保険金・定額給付等の包括確認ではない。",
    "choices": [
      "免責金額は、保険金額そのものから毎回差し引いて契約上の保険金額を減らす仕組みである",
      "免責金額は、保険事故の有無にかかわらず満期時に契約者へ返還される金額である",
      "免責金額以下の損害でも、保険会社は保険金額の全額を支払うのが原則である",
      "保険金支払時に契約で定めた自己負担に相当する金額である"
    ],
    "answer": 3,
    "explanation": "免責金額は契約で定める自己負担に相当する額です。与件では損害4万円が免責5万円以下のため支払額は0円です。契約保険金額を恒久的に減らす額や満期返戻金ではありません。",
    "topic": "差引免責と支払限度額",
    "revision": 4,
    "choiceExplanations": [
      "免責金額は契約上の保険金額そのものを毎回減らす額ではなく、事故ごとの自己負担の条件です。",
      "免責金額は解約返戻金や満期返戻金とは異なります。",
      "免責金額以下の損害では、一般的な免責控除方式なら支払保険金は発生しません。",
      "正解。契約に定める被保険者の自己負担相当額です。"
    ],
    "contentReview": "v113_deductible_limit_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "id": "fp2-037",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の条件による損害保険金として、最も適切な金額はどれか。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n対象となる損害額 / 120万円\n差し引く免責金額 / 10万円\n支払限度額 / 100万円\n算定順序 / 対象損害額から免責を控除し、0円を下限とした後に限度額を適用\nその他条件 / 支払対象事故・実損払。比例払・他保険調整・費用保険金なし\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n本問で明示した差引免責方式と適用順序を使う。実際の商品は方式・約款が異なる場合があり、一般共通の支払算式とはしない。",
    "choices": [
      "90万円",
      "100万円",
      "110万円",
      "120万円"
    ],
    "answer": 1,
    "explanation": "対象損害120－免責10＝110万円。0円を下限にして支払限度額100万円を適用すると、損害保険金は100万円です。限度額適用後に免責を再度差し引きません。",
    "topic": "差引免責と支払限度額",
    "revision": 6,
    "contentReview": "v113_deductible_limit_scoped_migration",
    "choiceExplanations": [
      "不適切。限度額適用後に免責を再度差し引くなど、指定順序を誤っています。",
      "正解。免責控除後110万円に支払限度額100万円を適用し、100万円です。",
      "不適切。免責は控除しましたが、支払限度額を適用していません。",
      "不適切。損害額をそのまま答え、免責と必要な限度額を適用していません。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "verificationStatus": "given_formula_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "id": "fp2-038",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の相手の身体に対する賠償について、対人賠償責任保険の基本的な役割として最も適切な説明はどれか。\n〈自動車事故で区別する損害〉\n損害・場面 / 条件\n事故 / 国内の公道で契約自動車が第三者の車に衝突\n相手の身体 / 無関係の第三者が負傷し、法律上の賠償責任が生じた\n相手の財物 / 第三者所有の車や塀を損壊し、法律上の賠償責任が生じた\n本人の身体 / 契約自動車の運転者本人のけが\n本人の車両 / 契約自動車自体の修理費\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "対人賠償責任保険は、主に運転者本人の治療費を補償する仕組みである",
      "自動車事故で他人を死傷させ、法律上の損害賠償責任を負った場合に備える",
      "対人賠償責任保険は、事故で損害を受けた相手方の自動車修理費を補償する",
      "対人賠償責任保険は、自賠責保険で支払われる部分も重複して全額を補償する"
    ],
    "answer": 1,
    "explanation": "対人賠償責任保険は他人の生命・身体への法律上の賠償責任に備え、一般に自賠責の補償範囲を超える部分を対象とします。相手車の修理費、運転者本人のけがは別の補償区分です。一括支払いの手続があっても、同じ賠償損害を二重に受け取る意味ではありません。",
    "topic": "自賠責と任意自動車保険の対象区分",
    "revision": 3,
    "choiceExplanations": [
      "運転者自身のけがには人身傷害保険などが関連します。対人賠償責任保険は他人への法律上の賠償責任に備えるものです。",
      "正解。他人を死傷させて法律上の賠償責任を負う場合に備える保険です。自賠責保険との関係にも注意します。",
      "相手車両の修理費など他人の財物の損害は、対人ではなく対物賠償責任保険の対象となり得ます。",
      "自賠責保険による補償部分まで二重に支払われる仕組みではなく、一般にその超過部分などを補償します。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/car/about.html",
    "sourceLabel": "日本損害保険協会：自動車保険の補償区分",
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/insurance/car/point.html"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "id": "fp2-039",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "2026年中、資料の契約でAさんが死亡し、Cさんが死亡保険金を一時金で受け取った。この受取保険金の課税対象となる税目として、最も適切なものはどれか。\n〈死亡保険金の契約当事者〉\n項目 / 内容\n被保険者 / 夫Aさん\n名義上の保険契約者 / 夫Aさん\n保険料の実質負担者 / 妻Bさん（全額を負担）\n死亡保険金受取人 / 子Cさん\n受取額・方法 / 1,200万円、一時金\nA・B・Cは別人であり、Bさんは存命である。税目の区分のみを問い、控除・非課税限度額・納税額は計算しない。",
    "choices": [
      "Cさんの所得税の対象となる",
      "Cさんの相続税の対象となる",
      "Cさんの贈与税の対象となる",
      "死亡を原因とする保険金なので、税目の判定をせず常に非課税となる"
    ],
    "answer": 2,
    "explanation": "被保険者Aさん、保険料の実質負担者Bさん、受取人Cさんがすべて異なるため、Cさんの贈与税の対象です。名義上の契約者ではなく、実際に保険料を負担した人で判定します。保険料負担者と受取人が同一なら所得税、被保険者と保険料負担者が同一なら相続税の対象となります。",
    "topic": "死亡保険金の課税区分",
    "revision": 4,
    "choiceExplanations": [
      "不適切。所得税の区分は、保険料の負担者と受取人が同一人である場合です。",
      "不適切。Aさんは名義上の契約者ですが、実際の保険料負担者はBさんです。被保険者Aと負担者Bは異なります。",
      "正解。被保険者・実質負担者・受取人がA・B・Cと全員異なるため贈与税の対象です。",
      "不適切。死亡保険金は、身体の傷害に基因する入院給付金等の非課税扱いとは区別します。"
    ],
    "contentReview": "v92_insurance_tax_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "taxYear": 2026,
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1750.htm",
    "sourceLabel": "国税庁：No.1750 死亡保険金を受け取ったとき",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.92：所得補償保険金、満期保険金、死亡保険金について、支払原因・実質負担者・受取方法・所得区分・計算を限定照合。包括監修は未完了。"
  },
  {
    "id": "fp2-040",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の契約が有効に継続している場合の主契約の特徴として、最も適切な記述はどれか。\n〈保険料払込期間と保障期間〉\n項目 / 条件\n定期保険 / 10年間の死亡保障、満期保険金なし\n養老保険 / 死亡保険金・満期保険金はそれぞれ500万円\n終身保険 / 保険料払込は60歳まで、死亡保障は一生涯\n除外条件 / 解約・失効・高度障害保険金支払・年金移行・特約なし\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "定期保険では、満期まで生存すると死亡保険金と同額の満期保険金を受け取れる",
      "養老保険の死亡保険金は、一般に同契約の満期保険金より少額である",
      "終身保険は一般に一生涯の死亡保障を備える",
      "終身保険は、保険料払込期間満了時点で死亡保障も終了する"
    ],
    "answer": 2,
    "explanation": "終身保険では保険料払込が60歳で完了しても死亡保障は一生涯続きます。払込満了と保障終了を混同しません。養老保険の指定額は死亡時・満期時それぞれ500万円です。",
    "topic": "保険料払込期間と保障期間",
    "revision": 4,
    "choiceExplanations": [
      "定期保険は原則満期保険金のない一定期間の死亡保障です。",
      "養老保険は死亡保険金と満期保険金が一般に同額で、死亡保険金だけが少額になるのが原則ではありません。",
      "正解。終身保険は原則一生涯の死亡保障です。",
      "保険料の払込満了と、死亡保障が終了する時期は異なります。"
    ],
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/37.html",
    "additionalSourceUrls": [
      "https://www.jili.or.jp/knows_learns/kind/main/41.html",
      "https://www.jili.or.jp/knows_learns/kind/main/38.html"
    ],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "id": "fp2-041",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の配当性向として、最も適切なものはどれか。\n〈同一の株式単位で比較する配当性向〉\n項目 / 条件\n株価 / 2026年4月1日の提示株価 2800円\nEPS / 2025年1～12月の実績1株当たり当期純利益 200円\n年間1株配当 / 2025年1～12月の実績合計 70円\n普通株式のみ。EPS・BPSは必要な調整後の提示値。株式分割/併合、優先株、自己株式数の追加計算なし。\n配当は税引前。手数料・個人税額・売買差益なし。実績配当の将来継続を保証しない。\n法令基準日：2026年4月1日。企業・金額は独自仮定。指標の数学/定義確認であり、実企業の会計・投資判断・税法改正の包括監修ではない。",
    "choices": [
      "35％",
      "2.5％",
      "約285.7％",
      "65％"
    ],
    "answer": 0,
    "explanation": "配当性向の計算は年間1株配当÷EPS×100です。配当性向:70÷200×100=35％。倍率と百分率を区別します。提示した実績年度・1株単位の値を用い、会社全体の利益や予想値へ置き換えません。指標だけで値上がりや割安が保証されるわけではありません。",
    "topic": "配当性向の分母・単位・年度",
    "sourceUrl": "https://www.jpx.co.jp/glossary/ha/353.html",
    "sourceLabel": "JPXの株式指標定義／独自提示額の独立検算",
    "lawReferenceDate": "2026-04-01",
    "revision": 7,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v121_equity_metrics_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。配当性向:70÷200×100=35％。",
      "不適切。配当利回り:70÷2800×100=2.5％。",
      "不適切。EPS÷配当:200÷70×100≒285.7％（逆数）。",
      "不適切。利益の非配当割合:（200-70）÷200×100=65％。"
    ],
    "additionalSourceUrls": [
      "https://port.jpx.co.jp/jpxhp/portdocs/beginner_a_03.html"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂の指定数値/全選択肢を内部検算。公式定義との対応を併記し8問を法令改正照合件数に数えない。初回ID時期未確定。"
  },
  {
    "id": "fp2-042",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料のROE（自己資本当期純利益率）として、最も適切なものはどれか。\n〈利益と平均自己資本〉\n項目 / 条件\n対象期間 / 2025年1～12月\n当期純利益 / 400万円（普通株主に帰属する提示額）\n前期末自己資本 / 4,800万円\n当期末自己資本 / 5,200万円\n平均自己資本 / 前期末と当期末の単純平均\n平均総資産 / 8,000万円\n売上高 / 10,000万円\n自己資本は株式引受権・新株予約権・非支配株主持分等を除いた調整後の提示額。\n本問のROEは純利益÷平均自己資本×100。総資産や売上高を分母にしない。\n法令基準日：2026年4月1日。企業・金額は独自仮定。指標の数学/定義確認であり、実企業の会計・投資判断・税法改正の包括監修ではない。",
    "choices": [
      "4％",
      "5％",
      "8％",
      "62.5％"
    ],
    "answer": 2,
    "explanation": "平均自己資本（4,800＋5,200）÷2＝5,000万円。ROEは400÷5,000×100＝8％です。純利益は期間の利益、自己資本は両期末から求める平均です。売上高や平均総資産に置き換えません。",
    "topic": "ROEの分母・単位・年度",
    "sourceUrl": "https://www.jpx.co.jp/glossary/sa/549.html",
    "sourceLabel": "JPXの株式指標定義／独自提示額の独立検算",
    "lawReferenceDate": "2026-04-01",
    "revision": 7,
    "reviewStatus": "formula_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v121_equity_metrics_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。400÷10,000×100＝4％は売上高純利益率です。",
      "不適切。400÷8,000×100＝5％は総資産を分母にした値です。",
      "正解。400÷（（4,800＋5,200）÷2）×100＝8％です。",
      "不適切。平均自己資本5,000÷平均総資産8,000×100＝62.5％は自己資本比率です。"
    ],
    "additionalSourceUrls": [
      "https://port.jpx.co.jp/jpxhp/portdocs/beginner_a_03.html"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂の指定数値/全選択肢を内部検算。公式定義との対応を併記し8問を法令改正照合件数に数えない。初回ID時期未確定。"
  },
  {
    "id": "fp2-043",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の資産全体の1年間の収益率はどれか。\n〈期首投資額による加重平均〉\n項目 / 条件\n期首投資額 / X：120万円、Y：80万円、合計200万円\n1年間の実現収益率 / X：2％、Y：5％\n資産全体の収益率 / 各収益額の合計÷期首投資総額×100\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n同じ円建て。提示収益率は値上がり・配当等を含む総収益率。途中の追加投資・引出し・配分変更・再投資、手数料・税額なし。期待値と実現値を区別。",
    "choices": [
      "2.0％",
      "3.2％",
      "3.5％",
      "5.0％"
    ],
    "answer": 1,
    "explanation": "Xの収益2.4万円、Yの収益4万円、合計6.4万円。6.4÷200×100＝3.2％。期首比率60％と40％を用います。",
    "topic": "期首投資額による加重平均",
    "sourceUrl": "",
    "sourceLabel": "提示加重平均式の内部検算（法令一次資料照合ではない）",
    "lawReferenceDate": "2026-04-01",
    "revision": 8,
    "reviewStatus": "formula_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。2％はXだけの収益率です。",
      "正解。（120×0.02＋80×0.05）÷200×100＝3.2％です。",
      "不適切。3.5％は（2＋5）÷2という単純平均で、投資額が違います。",
      "不適切。5％はYだけの収益率です。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "id": "fp2-044",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の外貨の円換算額の変化はどれか。\n〈円換算額の差〉\n項目 / 条件\n保有外貨 / 100米ドル（両時点で同額）\n時点A / 1米ドル＝150円\n時点B / 1米ドル＝130円\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n外貨額の増減、利息、売買、追加投資・引出し、手数料、税額は考慮しない。",
    "choices": [
      "1万3,000円減少",
      "1万5,000円減少",
      "2,000円増加",
      "2,000円減少"
    ],
    "answer": 3,
    "explanation": "時点A15,000円、時点B13,000円。差は時点B－時点A＝－2,000円です。",
    "topic": "円換算額の差",
    "revision": 5,
    "contentReview": "v122_fx_weighted_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。13,000円は時点Bの換算額であり、減少額ではありません。",
      "不適切。15,000円は時点Aの換算額であり、減少額ではありません。",
      "不適切。差の大きさは2,000円ですが、増加ではなく減少です。",
      "正解。100×（130－150）＝－2,000円なので、2,000円減少です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.boj.or.jp/about/education/oshiete/intl/g18.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "日本銀行の円高・円安定義／独自仮定の換算検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "id": "fp2-045",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の固定利付債に関する説明として、最も適切なものはどれか。\n〈価格と利子の区別〉\n項目 / 条件\n額面・償還額 / 100円\n年利子 / 2円（固定、年1回、期末払い）\n残存期間 / 1年（次回利払時に償還）\n市場の要求利回り / 年2％から年3％へ上昇\n計算モデル / 価格＝（年利子＋償還額）÷（1＋要求利回り）\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "要求利回りが上がると理論価格は下がる",
      "要求利回りが上がると年利子は3円へ改定される",
      "額面が100円なので理論価格は100円で変わらない",
      "要求利回りが上がると理論価格は上がる"
    ],
    "answer": 0,
    "explanation": "要求利回りは評価の割引率であり、契約利率を変更するものではありません。額面・年利子・市場価格を混同しません。",
    "topic": "価格と利子の区別",
    "revision": 4,
    "choiceExplanations": [
      "正解。要求利回りの上昇で理論価格は100円から約99.03円へ下がります。",
      "不適切。固定年利子は2円のままで、3円へ改定されません。",
      "不適切。理論価格は100円のままではなく、約99.03円になります。",
      "不適切。理論価格は上昇しません。102÷1.03は100より小さくなります。"
    ],
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://market.jsda.or.jp/shijyo/saiken/saiken/index9.html",
    "additionalSourceUrls": [],
    "sourceLabel": "JSDA/JPXの限定定義と提示条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "id": "fp2-046",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税について、2026年12月1日以後の年末調整で改正後の基礎控除を適用する。居住者の合計所得金額が300万円で、他の適用要件を満たす場合の基礎控除額はどれか。",
    "choices": [
      "62万円",
      "104万円",
      "88万円",
      "67万円"
    ],
    "answer": 1,
    "explanation": "300万円は132万円超336万円以下の区分で、2026年分は104万円です。62万円は2026年分の655万円超2,350万円以下等、88万円は2025年分の300万円の区分、67万円は2026年分の489万円超655万円以下です。 法令基準日は2026年4月1日です。この改正の原則施行日は2026年12月1日で、2026年分に適用されます。施行前の月々の源泉徴収や準確定申告の取扱いを問うものではありません。",
    "topic": "所得税の基礎控除",
    "revision": 58,
    "contentReview": "v80_limited_primary_source_and_effective_date_review",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1199.htm",
    "sourceName": "国税庁：基礎控除（令和8年4月1日現在法令等）",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "taxYear": 2026,
    "sourceLabel": "国税庁：2026年分の基礎控除",
    "reviewNote": "Ver.80：基礎控除額・全選択肢・適用年・施行日を再確認。過去に公式照合履歴がある4問の再確認で、新規初回照合0。包括監修は未完了。",
    "sourceCheckedDate": "2026-10-13"
  },
  {
    "id": "fp2-047",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料の課税総所得金額はいくらか。所得税額や納付額ではなく、税率を適用する前の金額を答えること。\n〈課税所得と税額控除の段階〉\n項目 / 条件\n総所得金額 / 810万円（収入額ではなく、必要経費・給与所得控除等を反映済みの所得）\n所得控除合計 / 310万円（適用要件と限度を満たした確定額）\n所得税の税額控除 / 20万円（税額段階の適用要件・限度を満たす額）\n対象年分・納税者 / 2026年分、日本の居住者である個人\n他の条件 / 総合課税のみ。分離課税・損失繰越等の追加調整なし\n各所得控除の内訳や個別税額控除制度は別途確定した提示条件。各控除の法定定額を新しく検証した件数には含めない。\n法令基準日2026年4月1日、確認日2026年10月15日。国税庁の同基準日表示の基本事項と指定条件を限定点検。\n税法の施行日・年分と確認日を区別。2027年以降の税率説明を2026年の計算に混ぜない。",
    "choices": [
      "480万円",
      "500万円",
      "520万円",
      "810万円"
    ],
    "answer": 1,
    "explanation": "課税総所得金額は810－310＝500万円。万円同士で計算します。所得控除は税率適用前、税額控除は算出所得税額から差し引く段階です。必要経費・給与所得控除は総所得の提示額へ反映済みなので、再度差し引きません。税額控除は適用限度の範囲内の指定額。本問は税額や復興特別所得税、源泉徴収後の精算額を求める問題ではありません。",
    "topic": "課税所得と税額控除の段階",
    "revision": 51,
    "contentReview": "v128_tax_stage_scoped_migration",
    "choiceExplanations": [
      "不適切。810－310－20＝480万円。税額控除を所得から差し引いた誤りです。",
      "正解。810－310＝500万円です。",
      "不適切。810－310＋20＝520万円。税額控除を課税所得へ加算しません。",
      "不適切。810万円は所得控除310万円を引く前の額です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1000.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1100.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1200.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2260.htm"
    ],
    "sourceLabel": "国税庁の計算段階・暦年と指定数値の限定検算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂公式主要論点2/指定条件検算3を区別。法令全文/全個別控除の確認は未完了。fp3-022は税額控除を20から10万円へ変更して限度条件を改善。"
  },
  {
    "id": "fp2-048",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税で、次の設例における配偶者特別控除額として、最も適切なものはどれか。\n〈配偶者特別控除の判定資料〉\n項目 / 内容\n納税者の合計所得金額 / 920万円\n配偶者の合計所得金額 / 80万円\n判定する年分 / 2026年分\nその他の条件 / 生計を一にし、事業専従者ではないなど、他の要件を満たす\n配偶者の所得62万円超95万円以下、納税者の所得900万円超950万円以下の交点を用いる。",
    "choices": [
      "38万円",
      "26万円",
      "13万円",
      "0円"
    ],
    "answer": 1,
    "explanation": "配偶者の合計所得金額80万円は62万円超95万円以下、納税者の合計所得金額920万円は900万円超950万円以下です。2026年分の配偶者特別控除額表の交点は26万円です。38万円は納税者900万円以下、13万円は950万円超1,000万円以下の場合の同じ配偶者所得帯の金額です。",
    "topic": "所得区分",
    "revision": 4,
    "contentReview": "v84_2026_spouse_student_requirements_scoped_primary_review",
    "sourceUrl": "https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "誤り。38万円は、この配偶者所得帯で納税者の合計所得金額が900万円以下の場合です。",
      "正解。配偶者所得62万円超95万円以下、納税者所得900万円超950万円以下の交点は26万円です。",
      "誤り。13万円は、この配偶者所得帯で納税者の合計所得金額が950万円超1,000万円以下の場合です。",
      "誤り。設例は配偶者特別控除の所得要件を満たし、控除額は26万円です。"
    ],
    "taxYear": 2026,
    "sourceLabel": "国税庁：令和8年4月 源泉所得税の改正のあらまし",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.84：2026年分の配偶者控除・配偶者特別控除・勤労学生の主要所得要件と控除額を限定照合。IDには過去の公式照合履歴があるが、改訂後の主要論点は今回初めて照合。包括監修未完了。"
  },
  {
    "id": "fp2-049",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料の土地売却による譲渡所得金額として、最も適切なものはどれか。\n〈土地の取得費と譲渡費用〉\n項目 / 条件\n対象者・年分 / 日本の居住者である個人Aさん。2026年分\n売却資産 / 保有していた土地（商品ではない）。建物は含まない\n譲渡価額 / 5,800万円。ほかの対価なし\n取得費 / 3,650万円。資料で確定した実額の取得費を用いる\n譲渡費用 / 150万円。今回の売却のために直接要した費用で、取得費との重複なし\n追加条件 / 特別控除・その他の調整は適用しない。税額や税率は問わない\n金額の単位は万円。保有期間による長期・短期の税率計算は本問の対象外。",
    "choices": [
      "1,850万円",
      "2,000万円",
      "2,150万円",
      "2,300万円"
    ],
    "answer": 1,
    "explanation": "売却による収入から、取得費と売却に直接要した譲渡費用をそれぞれ一度だけ差し引きます。5,800－3,650－150＝2,000万円。提示された土地の実額取得費を使い、建物の減価償却や概算取得費の計算は行いません。この金額は売却代金そのものでも納付税額でもありません。",
    "topic": "土地の取得費と譲渡費用",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3202.htm",
    "sourceLabel": "国税庁の所得計算・必要経費の限定照合",
    "lawReferenceDate": "2026-04-01",
    "revision": 6,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v129_expense_scoped_migration",
    "choiceExplanations": [
      "不適切。5,800－3,650－150－150＝1,850万円は譲渡費用の二重控除です。",
      "正解。5,800－3,650－150＝2,000万円です。",
      "不適切。5,800－3,650＝2,150万円は譲渡費用を引き忘れています。",
      "不適切。5,800－3,650＋150＝2,300万円は譲渡費用を加算した誤りです。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂の基本事項限定照合1/提示条件の内部検算3。家内労働者特例・施行前の改正額を使用しない。法令全文・全例外は未確認。"
  },
  {
    "id": "fp2-050",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料のAさんの事業所得の基本計算に関する記述として、最も適切なものはどれか。\n〈事業所得と必要経費の区別〉\n項目 / 条件\n対象者 / 日本の居住者で、小売業を営む個人Aさん\n申告等 / 白色申告。家内労働者等の必要経費の特例・専従者控除は適用なし\n費用の区分 / 事業上必要な費用と、事業に関係しない純粋な生活費を区分する\n計算範囲 / 所得控除や税額計算に進む前の、事業所得の基本計算\n純粋な家事費と、業務上必要な部分を区分できる家事関連費は区別する。",
    "choices": [
      "必要経費を差し引かず、事業の総収入金額の全額を事業所得とする",
      "事業に関係しない家族の生活費も、支払った全額を事業の必要経費に含める",
      "総収入金額から必要経費を差し引いて所得金額を求める",
      "事業主個人の所得税と住民税は、事業所得の必要経費に含める"
    ],
    "answer": 2,
    "explanation": "事業の収入を得るための費用を必要経費として差し引きます。私生活の費用を混ぜず、事業主個人の所得税・住民税も除きます。混在費用の事業部分の区分や特例の個別要件は別の検討ですが、本問はその対象外としています。",
    "topic": "事業所得と必要経費の区別",
    "revision": 4,
    "choiceExplanations": [
      "不適切。総収入だけでなく、対応する必要経費を差し引く計算です。",
      "不適切。事業と無関係な家事上の生活費は必要経費に含めません。",
      "正解。本問の条件では総収入から必要経費を引きます。",
      "不適切。個人の所得税と住民税は必要経費になりません。"
    ],
    "contentReview": "v129_expense_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1350.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2210.htm"
    ],
    "sourceLabel": "国税庁の所得計算・必要経費の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂の基本事項限定照合1/提示条件の内部検算3。家内労働者特例・施行前の改正額を使用しない。法令全文・全例外は未確認。"
  },
  {
    "id": "fp2-051",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料から建ぺい率を求めると、最も適切なものはどれか。\n〈建築面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 400㎡（算定に用いる敷地面積として確定）\n建築面積 / 140㎡（算定上の値として確定）\n容積率算定対象の延べ面積 / 600㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "35％",
      "150％",
      "約23.3％",
      "65％"
    ],
    "answer": 0,
    "explanation": "建築面積140㎡を敷地面積400㎡で割り、100を掛けると35％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "topic": "建築面積と敷地面積の比",
    "revision": 4,
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。35％は、建築面積を敷地で割る計算です。",
      "不適切。150％は、延べ面積を使って容積率を求めている計算です。",
      "不適切。約23.3％は、建築面積を延べ面積で割っている計算です。",
      "不適切。65％は、建築面積以外の敷地の比率を求めている計算です。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "id": "fp2-052",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料について、取得時諸費用を含む投下資金に対する、空室損失・運営費用を控除した年間の比率はいくらか。本問ではこの比率を実質利回りとする。\n〈運営費控除後の利回り〉\n項目 / 条件\n対象期間 / 2026年の1年間を想定する独自の収支モデル\n年間満室賃料 / 600万円\n年間空室損失 / 30万円（満室賃料から減る額）\n年間運営費用 / 150万円（管理・修繕・物件の税金等の現金支出として確定。借入元利金・減価償却・個人の所得税等は含まない）\n購入価格 / 7,000万円\n取得時諸費用 / 500万円（購入価格との重複なし）\n追加条件 / 借入なし。ほかの収支・売却損益なし。将来の収入や運用成果を保証する設例ではない\n本問の比率 / 分子＝満室賃料－空室損失－運営費用、分母＝購入価格＋取得時諸費用\n金額はすべて万円、比率は％。非整数の比率は小数第2位を四捨五入し小数第1位まで表示。\nこの運営収支モデルは所得税法上の不動産所得の計算ではない。法令基準日2026年4月1日の教材として条件を指定。",
    "choices": [
      "5.6％",
      "6.0％",
      "7.6％",
      "8.0％"
    ],
    "answer": 0,
    "explanation": "運営費控除後の収支は600－30－150＝420万円。投下資金は7,000＋500＝7,500万円です。この2つの金額の比に100を掛けて百分率にします。借入元利金や個人の所得税を引いた後の利回りではありません。",
    "topic": "運営費控除後の利回り",
    "sourceUrl": "",
    "sourceLabel": "指定条件の計算検証",
    "lawReferenceDate": "2026-04-01",
    "revision": 6,
    "reviewStatus": "formula_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "choiceExplanations": [
      "正解。420÷7,500×100＝5.6％です。",
      "不適切。420÷7,000×100＝6.0％は取得時諸費用を分母から落としています。",
      "不適切。570÷7,500×100＝7.6％は運営費用150万円を控除していません。",
      "不適切。600÷7,500×100＝8.0％は空室損失と運営費用の両方を控除していません。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "id": "fp2-053",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の土地と建物について、最も適切な記述はどれか。\n〈土地と建物の登記の範囲〉\n項目 / 条件\n対象 / 独立した1筆の土地と、その上にある独立した戸建建物1個\n比較する事項 / 土地と建物の登記記録、建物の表題部の記録事項\n前提 / 通常の土地・建物を扱う。区分建物と敷地権の個別制度は対象外\n取引条件 / 建物の所有権移転登記だけを行った場合、土地の権利も当然に移るかを区別する\n独自設例。法令基準日は2026年4月1日。申請義務・期限等の改正事項は今回の出題対象外。",
    "choices": [
      "建物の所有権移転登記をすれば、その建物が建つ敷地の所有権も当然に移転する",
      "土地の所有権登記をすれば、その上に建つ建物の所有権も同じ登記記録で当然に公示される",
      "建物の登記記録には表題部がなく、建物の所在地や床面積は登記されない",
      "土地と建物は原則として別個の不動産で、それぞれ登記の対象となる"
    ],
    "answer": 3,
    "explanation": "土地と戸建建物の登記は、原則としてそれぞれを対象に行います。土地の所有権の記録と建物の所有権の記録、建物の物理的状況を示す表題部を区別します。登記自体を所有権移転のすべての成立要件と理解するものでもありません。",
    "topic": "土地と建物の登記の範囲",
    "revision": 3,
    "choiceExplanations": [
      "不適切。建物の移転登記だけで、その敷地の所有権まで当然に移転するものではありません。",
      "不適切。土地と建物の登記記録は別で、土地の登記だけで建物の所有権まで当然に公示されるわけではありません。",
      "不適切。建物にも表題部があり、所在・種類・構造・床面積などが記録されます。",
      "正解。資料の土地と戸建建物は原則として別個の不動産で、それぞれ登記の対象となります。"
    ],
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.mlit.go.jp/common/001121686.pdf",
    "additionalSourceUrls": [
      "https://houmukyoku.moj.go.jp/matsuyama/page000001_00390.html",
      "https://www.moj.go.jp/MINJI/minji02"
    ],
    "sourceLabel": "国土交通省本文・法務省/法務局の公式索引抜粋による登記基本事項の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v136_registration_scoped_migration",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "reviewNote": "公式本文と公式検索索引抜粋の照合範囲を区別。法務省/法務局ページ本文403、2026-04-01時点の規則全文・全改正未確認。新改訂主要点3/共通適用1/旧論点再確認2。包括監修未完了。"
  },
  {
    "id": "fp2-054",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の条件で、売主が手付解除のため買主に現実に提供する金額の総額はどれか。\n〈売主からの手付解除〉\n項目 / 条件\n売買の当事者 / 売主・買主とも宅地建物取引業者ではない個人。土地売買について民法の解約手付の規律を適用する\n受領済みの手付 / 100万円。買主が売主に交付済み\n解除する側 / 売主。買主・売主とも契約の履行に着手していない\n契約条件 / 2026年4月に新規締結したとする。手付解除を制限する特約や期限の定めはない\n問う金額 / 受領済み手付の返還相当分も含む、買主への提供総額。上乗せ分だけではない\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "100万円",
      "300万円",
      "400万円",
      "200万円"
    ],
    "answer": 3,
    "explanation": "売主は、相手方である買主が履行に着手する前であるなど資料の条件の下、受領した手付100万円の倍額200万円を現実に提供して手付解除します。この200万円に受領手付100万円をさらに足す必要はありません。提供総額と、受領手付に対する上乗せ相当分を区別します。",
    "topic": "売主からの手付解除",
    "revision": 4,
    "choiceExplanations": [
      "不適切。100万円は受領済み手付をそのまま返す額で、売主の倍額提供の総額に足りません。",
      "不適切。倍額の総額に、受領済みの手付をさらに加えた三重の計上です。",
      "不適切。必要な倍額をさらに2倍した額であり、資料の規律による総額ではありません。",
      "正解。100万円×2＝200万円を現実に提供します。受領済み手付の返還相当分を含む総額です。"
    ],
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19320170602044.htm",
    "additionalSourceUrls": [
      "https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20220220"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "id": "fp2-055",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の土地・建物を売却した場合の課税について、原則として最も適切なものはどれか。\n〈土地建物の譲渡と賃貸の区別〉\n項目 / 条件\n対象者・年分 / 日本の居住者である個人Aさん、2026年分\n対象資産 / 保有していた土地・建物。販売用の商品ではなく、譲渡所得の対象である\n比較する収入 / 不動産の売却による譲渡所得と、貸付けによる不動産所得\n除外 / 特別控除・非課税特例・具体的な税率や申告要否の判断は問わない\n法令基準日2026年4月1日。売却と貸付け、所得区分と税額の計算方式を区別する。",
    "choices": [
      "土地・建物の譲渡所得は、譲渡収入から取得費を控除せずに計算する",
      "土地の売却益は、原則として不動産所得に区分される",
      "土地や建物の売却による譲渡所得は、所有期間が5年を超える場合に限って給与所得と総合課税される",
      "給与所得などと分離して課税する"
    ],
    "answer": 3,
    "explanation": "土地・建物の譲渡所得は、売却代金から取得費・譲渡費用等を差し引いて求め、給与所得等と分けて税額を計算します。賃貸による不動産所得とは区分が異なります。長期・短期による具体的な税率計算は本問では扱いません。",
    "topic": "土地建物の譲渡と賃貸の区別",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3202.htm",
    "sourceLabel": "国税庁：土地建物の譲渡所得の限定確認",
    "lawReferenceDate": "2026-04-01",
    "revision": 5,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "choiceExplanations": [
      "不適切。譲渡所得の基本計算では、取得費と譲渡費用を考慮します。",
      "不適切。貸付けによる不動産所得と、売却による譲渡所得を混同しています。",
      "不適切。長期・短期の区分で給与所得との総合課税へ変わるものではありません。",
      "正解。土地・建物の譲渡所得は原則として給与所得等と分離して計算します。"
    ],
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "priorSourceCheckedDate": "2026-10-12",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1370.htm"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "id": "fp2-056",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で子1人の取得額はいくらか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、子3人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n分割対象の遺産 / 預金7,200万円のみ。債務や費用等の控除を要する事情はない\n計算の範囲 / 法定相続分に従う預金の配分だけを計算し、相続税額や非課税枠は計算しない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "1,800万円",
      "2,400万円",
      "3,600万円",
      "1,200万円"
    ],
    "answer": 3,
    "explanation": "配偶者1/2、子全体1/2です。同順位の3人で均等に分けるので、子1人の割合は1/2÷3＝1/6です。したがって7,200万円×1/6＝1,200万円です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "choiceExplanations": [
      "不適切。相続人全員で単純に均等割りする計算になっています。続柄ごとの法定相続分を先に確認します。",
      "不適切。資料で問う子1人の割合は1/6です。この選択肢はその割合に一致しません。",
      "不適切。同順位の相続人全体の取り分を、1人分と取り違えています。",
      "正解。7,200万円×1/6＝1,200万円です。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "id": "fp2-057",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で配偶者の取得額はいくらか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、被相続人の兄・姉の2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。被相続人に子・孫等も父母・祖父母等の直系尊属もいない。兄・姉はともに父母の双方を同じくする全血の兄弟姉妹である。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n分割対象の遺産 / 預金12,000万円のみ。債務や費用等の控除を要する事情はない\n計算の範囲 / 法定相続分に従う預金の配分だけを計算し、相続税額や非課税枠は計算しない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "3,000万円",
      "6,000万円",
      "8,000万円",
      "9,000万円"
    ],
    "answer": 3,
    "explanation": "配偶者3/4、兄弟姉妹全体1/4です。したがって12,000万円×3/4＝9,000万円です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "revision": 4,
    "choiceExplanations": [
      "不適切。配偶者以外の相続人全体の取り分を、配偶者の取り分と取り違えています。",
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。",
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。",
      "正解。12,000万円×3/4＝9,000万円です。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "id": "fp2-058",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の相続放棄について、最も適切な記述はどれか。\n〈相続放棄の申述と期間〉\n項目 / 条件\n対象 / 相続が既に開始し、成人Aさんが法律上の相続人となった\n検討する制度 / 民法上の相続放棄。生前の遺留分放棄や、遺産分割で取得額をゼロとする合意ではない\n手続条件 / 原則の熟慮期間内で、法定単純承認等に当たる事情はない\n範囲 / 手続の機関、開始時期、権利義務の承継を比較する\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "相続放棄は原則として家庭裁判所に申述して行う",
      "相続放棄の手続は、原則として公証役場で行う",
      "相続放棄をすると、預金などのプラスの財産だけを放棄して借入金債務は引き継ぐ",
      "相続放棄は、被相続人の生存中に家庭裁判所へ申述して成立させられる"
    ],
    "answer": 0,
    "explanation": "相続が開始した後、家庭裁判所へ相続放棄の申述をします。法律上の相続放棄では、その相続について初めから相続人でなかったものとされ、原則として権利と義務の双方を承継しません。預金だけ、債務だけといった選択的な承継ではありません。",
    "topic": "相続放棄の申述と期間",
    "revision": 4,
    "choiceExplanations": [
      "正解。民法上の相続放棄は、家庭裁判所に申述して行います。",
      "不適切。公証役場で手続をするだけでは、家庭裁判所への相続放棄の申述に代わりません。",
      "不適切。法律上の相続放棄は、原則として権利も義務も承継しない制度です。",
      "不適切。被相続人の生前に相続放棄の申述をして成立させる制度ではありません。生前の遺留分放棄と区別します。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_13/index.html",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132_qa.htm",
      "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_25/index.html"
    ],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "id": "fp2-059",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の遺産に係る基礎控除額はいくらか。\n〈相続税の基礎控除〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n法定相続人 / 法律上の配偶者と実子2人のみ。全員存命で、相続放棄・欠格・廃除・養子・代襲等はない\n人数の範囲 / 資料の相続人だけを数え、ほかの者を重複して加えない\n求めるもの / 遺産全体に係る相続税の基礎控除額。配偶者個人の税額軽減や死亡保険金の非課税枠ではない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "3,600万円",
      "4,200万円",
      "4,800万円",
      "5,400万円"
    ],
    "answer": 2,
    "explanation": "法定相続人は3人なので、遺産に係る基礎控除は3,000万円＋600万円×3＝4,800万円です。相続人ごとに3,000万円を付ける計算ではなく、遺産全体の控除額です。",
    "topic": "相続税の基礎控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm",
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "lawReferenceDate": "2026-04-01",
    "revision": 6,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。法定相続人を1人と数えた場合の額です。資料は3人です。",
      "不適切。法定相続人を2人と数えた場合の額です。資料は3人です。",
      "正解。資料の法定相続人3人で計算すると4,800万円です。",
      "不適切。法定相続人を4人と数えた場合の額です。資料は3人です。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。",
    "priorSourceReview": "v25_source_metadata"
  },
  {
    "id": "fp2-060",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で父母2人全体の取得額はいくらか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、被相続人の父・母の2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。被相続人に子・孫等の第1順位の相続人はいない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n分割対象の遺産 / 預金9,000万円のみ。債務や費用等の控除を要する事情はない\n計算の範囲 / 法定相続分に従う預金の配分だけを計算し、相続税額や非課税枠は計算しない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "3,000万円",
      "6,000万円",
      "2,250万円",
      "4,500万円"
    ],
    "answer": 0,
    "explanation": "配偶者2/3、父母全体1/3です。したがって9,000万円×1/3＝3,000万円です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "choiceExplanations": [
      "正解。9,000万円×1/3＝3,000万円です。",
      "不適切。配偶者の取り分を、問われた相続人の取り分と取り違えています。",
      "不適切。資料で問う父母2人全体の割合は1/3です。この選択肢はその割合に一致しません。",
      "不適切。資料で問う父母2人全体の割合は1/3です。この選択肢はその割合に一致しません。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の自動車購入と教育費を、ライフイベント表に時期・費用として整理できる。\n〈予定支出の時期と額〉\n項目 / 条件\n基点 / 2026年\n自動車購入 / 2029年に200万円\n教育費支出 / 2031年に300万円\n見積条件 / 各予定年の名目見積額。年々の収支計算は別表\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n期間・分母・使える資金の指定条件を確認する。年金資格・税率/保険料率・融資審査・全法令の包括監修ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。将来の出来事と見積資金を時系列で整理するのがライフイベント表です。200万円と300万円は異なる年の予定支出で、同じ年の年間支出500万円とするものではありません。",
    "topic": "予定支出の時期と額",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "id": "fp3-061",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。異なる年の出来事と費用をそれぞれ記入できます。",
      "不適切。資金の予定時期と額の整理はライフイベント表の目的です。"
    ],
    "sourceLabel": "日本FP協会の生活設計/家計定義／数値・比率は指定仮定の検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v119_life_plan_ratios_shortfall_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "基本定義/生活設計と独自の計算仮定を確認。必要保障額の公式枠組みと指定提示額の検算を併記し、制度受給資格の確認件数とはしない。初回ID時期未確定。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の家計の純資産は700万円である。\n〈同一時点の資産・負債〉\n区分・項目 / 金額（万円）\n時点 / 2026年4月1日現在\n資産：預金 / 300\n資産：投資信託時価 / 200\n資産：住宅時価 / 2,000\n負債：住宅ローン残高 / 1,800\n資料外の資産・負債はない。住宅等は提示時価、借入は同日の残高。売却費用・税額・評価差は考慮しない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "資産合計2,500万円－負債合計1,800万円＝純資産700万円です。すべて同じ時点の残高であり、年間収入や年間返済額とは区別します。",
    "topic": "家計の純資産",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "id": "fp3-062",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。同一時点の資産から負債残高を引くと記述の純資産額になります。",
      "不適切。負債残高を資産合計から一度控除する計算です。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v118_household_math_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の変動金利型住宅ローンは、適用金利が完済まで必ず固定されるので、金利上昇リスクを検討しなくてよい。\n〈変動金利の見直しと返済額〉\n項目 / 条件\n金利タイプ / 変動金利型\n契約上の金利見直し / 所定の時点で市場金利等を反映して見直す\n返済額の見直し / 適用金利の見直しとは別に契約のルールを確認\n設問の範囲 / 金利タイプの基本。5年ルール/125％上限を全商品共通としない\n法令基準日：2026年4月1日。金利・人物・条件は独自の仮定。\n基本論点の限定確認。個別契約・全法令・全改正・包括監修の完了を示すものではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。変動金利型は返済途中で適用金利が見直されるため、完済まで固定とは限りません。返済額がすぐ変わるかどうかとは別に、利息と元金返済の内訳等へ影響します。5年ごとの返済額見直しや125％の上限がすべての契約にあるとは扱いません。",
    "topic": "変動金利の見直しと返済額",
    "sourceUrl": "https://www.flat35.com/hajimete/atoz/01.html",
    "id": "fp3-063",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。変動金利の契約上の見直しと全期間固定金利を混同しています。",
      "正解。金利上昇を含めて資金計画を検討し、返済額見直しの条件も個別に確認します。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "住宅金融支援機構/日本FP協会/国税庁の限定論点。実質利回りは指定数式検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v120_remaining_life_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "現行商品の金利/統計平均は問題に転載しない。税理士制度No9203は2026-04-01基準、通達は2025-06-01記載、取得日2026-10-15と別記。実質利回りの数式検算と公式制度照合を分離。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の条件で運用した2年後の元利合計は、110万2,500円である。\n〈一時金の複利運用条件〉\n項目 / 内容\n運用開始時の元金 / 100万円\n年利 / 5％（固定）\n運用期間 / 2年間\n利息組入れ / 各年末・年1回\n期間中の追加入出金はない。税金・手数料は考慮しない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。100×1.05²＝110.25万円＝110万2,500円です。単利の110万円との違いは、1年目の利息5万円にも2年目の利息2,500円が付くことです。",
    "topic": "年1回複利の元利合計",
    "sourceUrl": "https://www.j-flec.go.jp/public/learn/glossary/h_fukuri/",
    "id": "fp3-064",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceLabel": "J-FLEC：複利の定義／設例数値は独立検算",
    "additionalSourceUrls": [],
    "choiceExplanations": [
      "正解。〇。100×1.05²＝110.25万円＝110万2,500円です。単利の110万円との違いは、1年目の利息5万円にも2年目の利息2,500円が付くことです。",
      "不適切。〇。100×1.05²＝110.25万円＝110万2,500円です。単利の110万円との違いは、1年目の利息5万円にも2年目の利息2,500円が付くことです。"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の大学進学計画では、入学金だけを準備すれば、授業料や通学費・生活費を見積もる必要はない。\n〈入学時費用と在学中の支出〉\n項目 / 条件\n進学予定 / 4年制大学\n入学時の支出 / 入学金・必要な初期費用\n在学中の支出 / 授業料、教材/通学費、必要な生活費\n通学形態 / 自宅通学か下宿かにより支出項目を確認\n範囲 / 費用の見積対象。全国平均額や奨学金/授業料支援資格は問わない\n法令基準日：2026年4月1日。金利・人物・条件は独自の仮定。\n基本論点の限定確認。個別契約・全法令・全改正・包括監修の完了を示すものではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。入学時の一時費用に加えて、在学中の授業料や通学・生活費を見積もります。自宅通学と下宿では住居費なども異なります。資料の平均額を将来の本人の必要額とせず、期間・進路・生活条件に合わせます。",
    "topic": "入学時費用と在学中の支出",
    "sourceUrl": "https://www.jafp.or.jp/personal_finance/student/handbook/files/04.pdf",
    "id": "fp3-065",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。入学金以外の在学中の支出を見落としています。",
      "正解。授業料等の継続費用を含め、通学形態や在学期間に応じて見積もります。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "住宅金融支援機構/日本FP協会/国税庁の限定論点。実質利回りは指定数式検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v120_remaining_life_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "現行商品の金利/統計平均は問題に転載しない。税理士制度No9203は2026-04-01基準、通達は2025-06-01記載、取得日2026-10-15と別記。実質利回りの数式検算と公式制度照合を分離。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の事故Aは、個人賠償責任保険の補償対象として検討できる。実際の支払可否は被保険者の範囲や免責事由などによる。\n〈私生活と業務の賠償事故〉\n項目 / 条件\n事故A / 休日に自転車で買い物中、過失で歩行者にけがをさせた\n事故B / 勤務先の仕事として配送中、過失で通行人にけがをさせた\n被害者 / いずれも無関係の第三者\n賠償責任 / いずれも法律上の損害賠償責任を負う\n保険 / 通常の個人賠償責任保険を検討。業務を拡張する特約なし\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。事故Aは私生活上の自転車事故で、他人の身体に対する法律上の賠償責任に備える個人賠償責任保険を検討します。契約範囲・免責・支払限度額などを確認する必要があります。",
    "topic": "個人賠償責任・私生活と職務遂行",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/body/q080.html",
    "id": "fp3-066",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。事故Aは私生活上の賠償事故として検討対象となり得ます。",
      "不適切。事故Aは私生活上の賠償事故として検討対象となり得ます。"
    ],
    "sourceLabel": "日本損害保険協会：個人賠償責任保険",
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/sme_insurance/liability/"
    ],
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の地震による建物の倒壊損害は、地震保険を付けていなくても、通常の火災保険の火災補償から必ず支払われる。\n〈地震による倒壊と契約条件〉\n項目 / 条件\n建物 / 本人所有の住居専用建物\n火災保険 / 建物を対象として契約\n地震保険 / 付帯していない\n事故原因 / 地震の揺れによる倒壊\n火災の発生 / なし\n拡張特約 / 地震損害を直接補償するものはない\n法令基準日：2026年4月1日。人物・金額・契約条件は独自の仮定。\n地震保険の損害区分認定、個別商品の全約款・拡張特約・実際の保険金査定は今回の確認対象外。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。通常の火災保険は、地震の揺れによる建物の倒壊損害を補償しません。地震火災費用の規定があっても、火災を伴わない倒壊損害そのものへの補償ではありません。地震保険等への備えと契約条件を別途確認します。",
    "topic": "地震による倒壊・通常火災補償との区別",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/home/q050.html",
    "id": "fp3-067",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "sourceLabel": "財務省公開資料・日本損害保険協会：火災/地震保険の基本区分",
    "reviewedAt": "2026-10-13",
    "choiceExplanations": [
      "不適切。地震の揺れによる倒壊は通常の火災補償の対象ではありません。",
      "正解。地震保険なしで倒壊損害が必ず補償されるとの記述は誤りです。"
    ],
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q051.html",
      "https://www.mof.go.jp/about_mof/councils/jishin_benkyoukai/proceeding/material_20260128_02.pdf"
    ],
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v112_fire_earthquake_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.112：建物/家財、事故原因、損害保険金/費用、付帯と保険金額を限定確認。2026年1月28日資料で4月基準以前の制度を照合。個別約款・全支払条件・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の事故A（20万円の損害）と別事故B（3万円の損害）の損害保険金は、順に15万円と0円となる。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n事故Aの対象損害額 / 20万円\n別事故Bの対象損害額 / 3万円（同じ免責・限度額を適用）\n差し引く免責金額 / 5万円\n支払限度額 / 100万円\n算定順序 / 対象損害額から免責を控除し、0円を下限とした後に限度額を適用\nその他条件 / 支払対象事故・実損払。比例払・他保険調整・費用保険金なし\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n本問で明示した差引免責方式と適用順序を使う。実際の商品は方式・約款が異なる場合があり、一般共通の支払算式とはしない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。事故Aは20－5＝15万円。事故Bは損害3万円が免責5万円以下なので、支払額は0円です。3－5＝－2万円として保険会社へ2万円を返す扱いにはしません。",
    "topic": "差引免責と支払限度額",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
    "id": "fp3-068",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。〇。事故Aは20－5＝15万円。事故Bは損害3万円が免責5万円以下なので、支払額は0円です。3－5＝－2万円として保険会社へ2万円を返す扱いにはしません。",
      "不適切。明示した差引免責と限度額の条件では記述の金額になります。"
    ],
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v113_deductible_limit_scoped_migration",
    "verificationStatus": "given_formula_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の契約A・Bは日額が同じなので、いずれも入院給付金は7万円となる。\n〈入院日数と給付対象日数〉\n項目 / 条件\n入院 / 今回の病気による入院は7日。両契約とも保障対象の原因\n日額 / A・Bとも1万円\n契約Aの条件 / 今回の入院7日すべてが支払対象\n契約Bの条件 / 最初の4日は支払対象外。5日目以降が支払対象\n追加条件 / 給付限度の残日数は十分。過去入院との通算、手術・一時金等の追加給付なし\n法令基準日：2026年4月1日。条件・金額は独自の学習用設例。\n基本的な仕組みと明示条件を確認する。商品別全約款・全法令・税務の包括監修ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。Aは1万円×7日＝7万円、Bは1万円×（7－4）日＝3万円です。同じ日額でも、何日目から支払われるかや支払限度などの条件で給付額は異なります。条件は独自の仮定で、現在の全商品が4日免責という意味ではありません。",
    "topic": "入院日数と給付対象日数",
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/35.html",
    "id": "fp3-069",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。Bの最初の4日が対象外である条件を無視しています。",
      "正解。支払対象はAが7日、Bが3日であり、給付額は同じではありません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "生命保険文化センター：医療・生前給付・保険料払込の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v115_medical_living_payment_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.115：給付対象日数/余命条件/全額請求/控除/払込頻度と期間を独自表で限定確認。新改訂内容照合と独立算術を分離。国税庁は給付構造の補助照合のみで税務移行を計上しない。商品約款と基準日法令全体は包括未確認。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の契約では対象損害額が100万円でも、保険金額2,000万円の全額を損害保険金として必ず受け取れる。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n契約 / 建物の実損払方式の火災保険\n保険金額 / 2,000万円\n支払対象の損害額 / 100万円（査定済み）\n免責金額 / 0円\n追加条件 / 比例払・費用保険金・他保険調整なし\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n基本用語と本問で指定した契約条件を確認する。個別商品約款・費用保険金・定額給付等の包括確認ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。与件の損害保険金は対象損害額100万円を限度額内で支払う100万円です。保険金額2,000万円は今回の損害額に関係なく全額受け取れる約束ではありません。費用保険金や定額の給付を含めない設例です。",
    "topic": "実損払と保険金額",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1.html",
    "id": "fp3-070",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。実損払の支払額と契約上の保険金額を混同しています。",
      "正解。与件の損害保険金は100万円であり、2,000万円全額の支払いではありません。"
    ],
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v113_deductible_limit_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料の債券は、他の条件が同じなら要求利回りの上昇によって理論価格が下がる。\n〈固定キャッシュフローの価格〉\n項目 / 条件\n額面・償還額 / 100円\n年利子 / 2円（固定、年1回、期末払い）\n残存期間 / 1年（次回利払時に償還）\n市場の要求利回り / 年2％から年3％へ上昇\n計算モデル / 価格＝（年利子＋償還額）÷（1＋要求利回り）\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "要求利回り2％の価格100円に対し、3％では約99.03円。契約上の年利子2円と償還額100円は変えません。",
    "topic": "固定キャッシュフローの価格",
    "sourceUrl": "https://market.jsda.or.jp/shijyo/saiken/saiken/index9.html",
    "id": "fp3-071",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。102÷1.02＝100円から、102÷1.03≒99.03円へ下がります。",
      "不適切。固定した受取額をより高い利回りで割り引くと、現在価値は小さくなります。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "JSDA/JPXの限定定義と提示条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料の普通株式を保有するAさんは、前年に1株60円の配当実績があり、今期も同額の配当予想が公表されているため、今期も必ず6,000円の配当を受け取れる。\n〈配当実績・予想と確定額〉\n項目 / 条件\n保有株式 / 架空の国内上場会社の普通株式100株\n前年の年間配当実績 / 1株60円（税引前）\n今期の年間配当予想 / 1株60円（予想として公表）\n今期の状態 / 業績悪化。予想は修正され得る。今期の実施配当は未確定\n除外条件 / 優先株・株式分割・特別な配当保証契約なし\n配当予想/確定の区別の限定照合。会社法の全配当規制・全決議要件や基準日時点全文を確認したものではない。\n法令基準日2026年4月1日、確認日2026年10月15日。設例・表は独自表現。\n商品定義/開示基本事項の確認であり、前年実績や配当予想は実際の企業データではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "配当実績は過去の支払、配当予想は将来見通しです。JPXの開示制度でも配当予想の修正や未定を扱います。100株の保有と前年実績だけで今年の同額支払を保証する説明は誤りです。一方、当期赤字だから必ず無配と断定する説明にも置き換えません。",
    "topic": "配当実績・予想と確定額",
    "sourceUrl": "https://faq.jpx.co.jp/disclo/tse/web/knowledge6852.html",
    "id": "fp3-072",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。100株×60円＝6,000円は予想どおり実施された場合の額にすぎず、実績・予想だけで確定支払額にはなりません。",
      "正解。前年実績や公表された予想と、今期の確定した配当は別です。減配や無配となる可能性があります。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "公式一次資料の配当/J-REIT/所得区分限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v127_dividends_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂公式論点3、単純再確認0、ID初回時期未確定。法律全文/全改正未確認。金融2に加え共通配当論点の税1をまとめて点検。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "米ドル建て資産を1万米ドル保有している。為替相場が1米ドル＝130円から150円に変化した場合、外貨額が同じであれば円換算額は20万円増える。税金・手数料は考慮しない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "1万米ドル×130円＝130万円、1万米ドル×150円＝150万円で、円換算額は20万円増えます。1米ドル当たりの円額が増える円安方向への変化です。売却していないため実現損益とは区別します。",
    "topic": "円安時の外貨建て資産の円換算",
    "sourceUrl": "https://www.boj.or.jp/about/education/oshiete/intl/g18.htm",
    "id": "fp3-073",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。150万円－130万円＝20万円の増加です。",
      "不適切。外貨保有額が一定でも、円安により円換算額は増えます。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "日本銀行の円高・円安定義／独自仮定の換算検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v215_exact_duplicate_replacement_fx",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "既存完全重複の解消。固定外貨額と円安による円換算額増加を独立検算。2026-04-01基準、法令依存なし。包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料のように国内株式・外国株式・債券に分散すれば、各資産が同時に下落する期間でも、元本割れは完全になくなる。\n〈分散と元本保証の違い〉\n項目 / 条件\n期首配分 / 国内株式40％、外国株式40％、債券20％\n同一期間の円建て総収益率 / 国内株式－20％、外国株式－10％、債券－3％\n期首投資総額 / 100万円\n外国資産の表示は為替変動を含む。為替損益を再加算しない。\n法令基準日：2026年4月1日。数値・資産は独自例。公式資料の図表・文章の転載ではない。\n円建て同一期間の税引前総収益率。途中の追加投資・引出し・配分変更、手数料・税、レバレッジなし。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "資産全体の収益率は0.4×（－20）＋0.4×（－10）＋0.2×（－3）＝－12.6％。期末87.4万円。異なる資産も同時に下落する場合があり、分散を元本保証と読み替えません。",
    "topic": "分散と元本保証の違い",
    "sourceUrl": "https://www.fsa.go.jp/policy/nisa2/invest/",
    "id": "fp3-074",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。加重平均は－12.6％であり、分散後も元本割れが生じます。",
      "正解。40×（－0.20）＋40×（－0.10）＋20×（－0.03）＝－12.6万円。元本割れを完全にはなくせません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "金融庁/総務省統計局の定義と独自指定モデルの検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v124_diversification_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の限定照合3/指定モデル内部検算3。公式背景の参照を重複加算しない。法令改正照合0、ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料の非上場投資信託では、組入証券の時価下落により基準価額が下がり、元本割れが生じることがある。\n〈純資産と基準価額〉\n項目 / 条件\n時点Aの資産 / 組入証券800万円、現金200万円\n時点Bの資産 / 組入証券700万円、現金200万円\n負債・総口数 / 負債0円、総口数1,000万口（両時点で同じ）\n表示単位 / 基準価額は1万口当たり\n口数の追加・解約、分配金、費用、税金、為替変動なし。価格下落の影響だけを比較する独自仮定。\n法令基準日：2026年4月1日。確認日と資料公表日を区別し、基本定義・指定例の限定点検として扱う。\n設例・表は独自表現で、公式資料の文章や画像を転載しない。全商品約款や全法令改正の包括監修ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "基準価額＝純資産総額÷総口数×1万口。時点Aは1円／口×1万口＝10,000円、Bは0.9円／口×1万口＝9,000円。一般の投資信託は預金ではなく、元本保証と読み替えません。",
    "topic": "純資産と基準価額",
    "sourceUrl": "https://www.imaj.or.jp/study/investmenttrust/about/navdividends.html",
    "id": "fp3-075",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。純資産は1,000万円から900万円、1万口当たり基準価額は10,000円から9,000円へ下がります。",
      "不適切。組入資産を時価で評価するため、総口数が一定なら純資産の下落により基準価額は下がります。"
    ],
    "additionalSourceUrls": [
      "https://www.fsa.go.jp/policy/nisa2/invest/"
    ],
    "sourceLabel": "公式発行元の基本定義・費用・取引方法の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v125_funds_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂公式定義7問。指定数値の補助検算は別の法令改正照合件数に加算しない。単純再確認0、ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "2026年分の所得税で、次の配偶者は、配偶者控除（配偶者特別控除ではない）の対象となる。\n〈配偶者の所得と控除区分〉\n項目 / 内容\n納税者の合計所得金額 / 800万円\n配偶者の合計所得金額 / 80万円\n判定する年分 / 2026年分\nその他の条件 / 生計を一にし、事業専従者ではないなど、他の要件を満たす\n2026年分は、配偶者の合計所得金額62万円以下が配偶者控除、62万円超133万円以下が配偶者特別控除の所得範囲。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。配偶者の合計所得金額80万円は62万円を超えるため、配偶者控除の対象ではありません。他の要件を満たせば配偶者特別控除の対象です。納税者の合計所得金額800万円は900万円以下、配偶者の所得80万円は62万円超95万円以下なので、配偶者特別控除額は38万円です。控除額が38万円でも、控除の名称と所得要件を混同しません。",
    "topic": "",
    "sourceUrl": "https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf",
    "id": "fp3-076",
    "revision": 59,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：令和8年4月 源泉所得税の改正のあらまし",
    "taxYear": 2026,
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v84_2026_spouse_student_requirements_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.84：2026年分の配偶者控除・配偶者特別控除・勤労学生の主要所得要件と控除額を限定照合。IDには過去の公式照合履歴があるが、改訂後の主要論点は今回初めて照合。包括監修未完了。",
    "choiceExplanations": [
      "誤り。所得80万円は62万円を超えるため、配偶者控除ではなく配偶者特別控除の所得範囲です。",
      "正解。配偶者控除ではありません。他の要件を満たす場合の配偶者特別控除額は38万円です。"
    ]
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "2026年分の所得税で、次の国外居住親族は控除対象扶養親族となり得る。\n〈国外居住親族の判定資料〉\n項目 / 内容\n親族・年齢 / 納税者の兄・35歳\n居住状況 / 国外居住（非居住者）\n留学・障害者 / いずれにも該当しない\n2026年中の支払 / 納税者から生活費40万円\nその他 / 生計・所得・事業専従者等の要件を満たす\n30歳以上70歳未満でも、生活費または教育費としてその年に38万円以上の支払を受ける場合は年齢帯の追加要件を満たす。必要書類は別途必要。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。30歳以上70歳未満の国外居住親族は、留学、障害者、または納税者からその年に生活費・教育費として38万円以上の支払を受けていることのいずれかに該当すれば、年齢帯の追加要件を満たします。本問は40万円なのでこの要件を満たします。親族関係、生計、2026年分の所得62万円以下などの一般要件と、所定書類の提出・提示も別途必要です。",
    "topic": "国外居住親族の扶養控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm",
    "id": "fp3-077",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。生活費40万円は38万円以上であり、30歳以上70歳未満の国外居住親族に対する追加要件の一つを満たします。",
      "誤り。留学・障害者でなくても、生活費または教育費として38万円以上の支払を受ける場合があります。"
    ],
    "taxYear": 2026,
    "sourceLabel": "国税庁：No.1180 扶養控除",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v85_2026_nonresident_dependent_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.85：国外居住親族の年齢帯、留学・障害・38万円送金の追加要件と確定申告書類を初回公式照合。所得要件は2026年分62万円以下。包括監修未完了。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "2026年分の所得税で、次の保険料を支払った場合、生命保険料控除額の合計は14万円である。\n〈生命保険料控除の計算資料〉\n項目 / 内容\n前提 / 納税者に23歳未満の扶養親族がいる\n新契約・一般生命保険料 / 年13万円\n新契約・介護医療保険料 / 年9万円\n新契約・個人年金保険料 / 年9万円\n一般生命保険料の2026年分特例を適用しても、3区分を合計した所得控除額には12万円の上限がある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。各区分だけを見れば、2026年分の一般生命保険料は23歳未満の扶養親族がいるため6万円、介護医療保険料と個人年金保険料は各4万円で、合計は14万円です。しかし、生命保険料控除全体の上限は12万円なので、控除額は12万円です。一般生命保険料の特例上限6万円と、控除全体の上限12万円を混同しないことが重要です。",
    "topic": "生命保険料控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1140.htm",
    "id": "fp3-078",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "誤り。区分別計算の合計14万円をそのまま控除できず、全体上限12万円が適用されます。",
      "正解。一般6万円、介護医療4万円、個人年金4万円の計14万円は、全体上限12万円に制限されます。"
    ],
    "taxYear": 2026,
    "sourceLabel": "国税庁：No.1140 生命保険料控除",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v86_2026_life_insurance_deduction_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.86：2026年分の23歳未満扶養親族に係る新一般生命保険料控除の特例、介護医療・個人年金との区別、合計上限12万円を公式照合。包括監修未完了。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "2026年分の所得税で、次の一般生命保険料を支払った場合、新契約分2万5,000円と旧契約分2万円の合計4万5,000円が、そのまま一般生命保険料控除額となる。\n〈新旧の一般生命保険料〉\n項目 / 内容\n扶養親族 / 23歳未満の扶養親族はいない\n新契約の支払保険料 / 3万円\n新契約分の計算額 / 3万円×1/2＋1万円＝2万5,000円\n旧契約の支払保険料 / 2万円\n旧契約分の計算額 / 2万円\n旧契約の支払保険料は6万円以下。新旧双方を適用する場合の控除上限は4万円。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。旧契約の支払保険料が6万円以下なので、新契約分2万5,000円と旧契約分2万円を合計しますが、新旧双方を適用する一般生命保険料控除の上限は4万円です。したがって控除額は4万円であり、4万5,000円ではありません。",
    "topic": "生命保険料控除（新旧契約併存）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1140.htm",
    "id": "fp3-079",
    "revision": 62,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "taxYear": 2026,
    "sourceLabel": "国税庁：No.1140 生命保険料控除",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v88_2026_new_old_life_insurance_contracts_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.88：新旧一般生命保険料・個人年金保険料の併存時に、旧契約支払6万円以下の合算上限4万円と、6万円超の旧契約単独計算を公式照合。包括監修未完了。",
    "choiceExplanations": [
      "誤り。新旧の計算額合計が4万円を超えるため、控除額は4万円です。",
      "正解。2万5,000円＋2万円＝4万5,000円ですが、新旧併用の上限4万円が適用されます。"
    ]
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "2026年中に毎月の給与から所得税等が源泉徴収されていても、その合計額と年間の本来の税額が一致しないことがあるため、勤務先が年末調整で差額を精算する場合がある。\n〈給与の源泉徴収と年末調整〉\n項目 / 内容\n毎月の給与 / 支払者が所得税等を源泉徴収\n年末調整 / 年間の源泉徴収税額と本来の年税額を比較\n源泉徴収額が多い場合 / 差額を還付\n源泉徴収額が少ない場合 / 差額を徴収\n年末調整の対象者・対象給与には要件がある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。毎月の源泉徴収額の合計は、その人が年間に納めるべき税額と必ずしも一致しません。年末調整は両者を一致させ、多ければ還付、少なければ徴収する手続です。給与所得者の扶養控除等（異動）申告書の提出など、対象者の要件は別途判定します。",
    "topic": "源泉徴収・年末調整・確定申告",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2662.htm",
    "id": "fp3-080",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。年末調整は年間の源泉徴収額と本来の年税額との差を精算します。",
      "誤り。毎月源泉徴収されていても、年間税額との過不足を年末調整する場合があります。"
    ],
    "taxYear": 2026,
    "sourceLabel": "国税庁：No.2662 年末調整のしかた",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v87_withholding_year_end_adjustment_return_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.87：給与の源泉徴収と年末調整、給与所得者の確定申告基準、普通預金利息の源泉分離課税を初回公式照合。包括監修未完了。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料の条件で、建ぺい率は50％である。正しければ〇、誤っていれば×を選びなさい。\n〈建築面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 240㎡（算定に用いる敷地面積として確定）\n建築面積 / 120㎡（算定上の値として確定）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "建築面積120㎡を敷地面積240㎡で割り、100を掛けると50％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "topic": "建築面積と敷地面積の比",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "id": "fp3-081",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。記述は正しく、建築面積120㎡を敷地面積240㎡で割り、100を掛けると50％です。分母は建築面積や延べ面積ではなく敷地面積です。",
      "不適切。記述は正しく、建築面積120㎡を敷地面積240㎡で割り、100を掛けると50％です。分母は建築面積や延べ面積ではなく敷地面積です。"
    ],
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料の条件で、容積率は180％である。正しければ〇、誤っていれば×を選びなさい。\n〈算定対象延べ面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 200㎡（算定に用いる敷地面積として確定）\n容積率算定対象の延べ面積 / 360㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "容積率算定対象の延べ面積360㎡を敷地面積200㎡で割り、100を掛けると180％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "topic": "算定対象延べ面積と敷地面積の比",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "id": "fp3-082",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。記述は正しく、容積率算定対象の延べ面積360㎡を敷地面積200㎡で割り、100を掛けると180％です。分母は建築面積や延べ面積ではなく敷地面積です。",
      "不適切。記述は正しく、容積率算定対象の延べ面積360㎡を敷地面積200㎡で割り、100を掛けると180％です。分母は建築面積や延べ面積ではなく敷地面積です。"
    ],
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料の抵当権設定の登記事項は、原則として土地の登記記録の権利部（乙区）に記録される。正しければ〇、誤っていれば×を選びなさい。\n〈金融機関の抵当権設定登記〉\n項目 / 条件\n対象 / Aさんの所有権の登記がある通常の土地1筆\n予定する登記 / 銀行を抵当権者とする抵当権設定登記\n前提 / 抵当権設定の要件は満たされ、適法に申請されるものとする\n範囲 / 記録する区分を問う。設定の効力発生時点や登記申請手続は問わない\n独自設例。法令基準日は2026年4月1日。申請義務・期限等の改正事項は今回の出題対象外。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "抵当権設定の登記事項は、通常は権利部の乙区に記録します。甲区は所有権に関する事項、表題部は土地の地目・地積等を扱います。抵当権を設定したという契約の場面と、設定登記を記録する区分という本問の対象を区別します。",
    "topic": "金融機関の抵当権設定登記",
    "sourceUrl": "https://houmukyoku.moj.go.jp/matsuyama/page000001_00390.html",
    "id": "fp3-083",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。抵当権は所有権以外の権利なので、設定の登記事項は通常乙区に記録されます。",
      "不適切。所有権を扱う甲区ではなく、所有権以外の権利を扱う乙区です。"
    ],
    "additionalSourceUrls": [
      "https://www.moj.go.jp/MINJI/minji02"
    ],
    "sourceLabel": "国土交通省本文・法務省/法務局の公式索引抜粋による登記基本事項の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v136_registration_scoped_migration",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "reviewNote": "公式本文と公式検索索引抜粋の照合範囲を区別。法務省/法務局ページ本文403、2026-04-01時点の規則全文・全改正未確認。新改訂主要点3/共通適用1/旧論点再確認2。包括監修未完了。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料の条件で、指定する建ぺい率の上限から、敷地全体の250㎡を建築面積にできる。正しければ〇、誤っていれば×を選びなさい。\n〈建ぺい率から求める面積上限〉\n項目 / 条件\n敷地面積 / 250㎡（算定に用いる敷地面積として確定）\n本問で用いる建ぺい率上限 / 60％\n計算範囲 / 提示された上限率による面積計算のみ。前面道路・角地・防火等の制限/緩和の追加計算なし\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "敷地面積250㎡に、上限率60％を100で割った比を掛け、150㎡です。建築面積の上限と延べ面積の上限は別に計算します。",
    "topic": "建ぺい率から求める面積上限",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "id": "fp3-084",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。記述は誤りで、敷地面積250㎡に、上限率60％を100で割った比を掛け、150㎡です。建築面積の上限と延べ面積の上限は別に計算します。",
      "正解。記述は誤りで、敷地面積250㎡に、上限率60％を100で割った比を掛け、150㎡です。建築面積の上限と延べ面積の上限は別に計算します。"
    ],
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料で、満室賃料を購入価格だけで割り、空室損失・運営費用・取得時諸費用を反映しない表面利回りは8％である。正しければ〇、誤っていれば×を選びなさい。\n〈満室賃料による表面利回り〉\n項目 / 条件\n対象期間 / 2026年の1年間を想定する独自の収支モデル\n年間満室賃料 / 240万円\n年間空室損失 / 0万円（満室賃料から減る額）\n年間運営費用 / 0万円（管理・修繕・物件の税金等の現金支出として確定。借入元利金・減価償却・個人の所得税等は含まない）\n購入価格 / 3,000万円\n取得時諸費用 / 0万円（購入価格との重複なし）\n追加条件 / 借入なし。ほかの収支・売却損益なし。将来の収入や運用成果を保証する設例ではない\n本問の比率 / 分子＝年間満室賃料、分母＝購入価格\n金額はすべて万円、比率は％。非整数の比率は小数第2位を四捨五入し小数第1位まで表示。\nこの運営収支モデルは所得税法上の不動産所得の計算ではない。法令基準日2026年4月1日の教材として条件を指定。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "240÷3,000×100＝8％です。空室や経費を控除した収支の比率とは条件が異なります。",
    "topic": "満室賃料による表面利回り",
    "sourceUrl": "",
    "id": "fp3-085",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。240÷3,000×100＝8％で、記述は正しいです。",
      "不適切。資料は表面利回りの計算なので、×とはなりません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定条件の計算検証",
    "sourceCheckedDate": null,
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料では、遺言があるため、ほかの相続人から遺留分侵害額を請求される可能性は一切ない。正しければ〇、誤っていれば×を選びなさい。\n〈遺留分の対象者と侵害額の請求〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人が死亡。2019年7月1日以後の相続として扱う\n範囲 / 遺留分の有無と金銭請求の基本。具体的な請求額・期間計算は問わない\n遺言の内容 / 相続人の1人へ全遺産を相続させる有効な遺言がある\n他の相続人 / 遺留分のある相続人が別におり、その遺留分が侵害され、請求権は消滅していない\n範囲 / 遺言があることだけで、侵害額の請求を一律に排除できるかを比較する\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "遺言で1人に全遺産を承継させても、ほかの遺留分権利者の権利が当然に消えるわけではありません。資料のように遺留分が侵害されていれば、要件を満たす権利者から金銭の支払を請求される可能性があります。",
    "topic": "遺留分の対象者と侵害額の請求",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/lkazi_07_26/index.html",
    "id": "fp3-086",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "sourceLabel": "裁判所・日本公証人連合会・千葉県立図書館・衆議院制定法律の対象論点限定照合",
    "reviewedAt": "2026-10-13",
    "v68ReviewScope": "兄弟姉妹の除外・金銭請求・2019年7月1日以後開始の相続という適用条件の限定確認。初回公式照合時期不明。",
    "choiceExplanations": [
      "不適切。遺言の存在だけで、ほかの相続人の遺留分侵害額請求を一律に排除できません。",
      "正解。資料の条件では、侵害額に相当する金銭の請求を受ける可能性があります。"
    ],
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19620180713072.htm"
    ],
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。",
    "priorSourceReview": "v68"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料で単純承認したBさんは、原則として預金だけでなく借入債務も承継する。正しければ〇、誤っていれば×を選びなさい。\n〈単純承認と財産・債務の承継〉\n項目 / 条件\n相続開始 / 2026年3月1日にAさんが死亡した\n相続人 / 成人の子Bさん1人のみ。配偶者やほかの子・代襲相続人はいない\nBさんの選択 / 単純承認した。相続放棄・限定承認はしていない\n借入金の条件 / Aさん本人の確定した借入債務。団体信用生命保険等による弁済や、債権者による免除はない\n財産と債務 / 預金700万円、借入金500万円が残っている\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "単純承認では財産に関する権利だけでなく債務も承継します。預金700万円と借入金500万円が残っているため、預金だけ受け取り、借入金は承継しないという選択にはなりません。",
    "topic": "単純承認と財産・債務の承継",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_14/index.html",
    "id": "fp3-087",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。資料の単純承認では、預金と借入債務の双方を承継します。",
      "不適切。借入金が預金より少なくても、借入債務の承継自体がなくなるわけではありません。"
    ],
    "additionalSourceUrls": [
      "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf"
    ],
    "sourceLabel": "裁判所・法テラス・国税庁講本の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料の遺産分割協議には原則として3人全員の合意が必要であり、配偶者と子1人の賛成だけでは成立しない。正しければ〇、誤っていれば×を選びなさい。\n〈遺産分割協議の参加者と合意〉\n項目 / 条件\n相続開始 / 2026年3月1日にAさんが死亡した\n共同相続人 / 法律上の配偶者と成人の子2人の計3人のみ。全員の所在・意思を確認できる\n分割する対象 / Aさん所有の土地・建物。遺言や分割禁止の定め、包括受遺者等はない\n手続の範囲 / 当事者間の遺産分割協議。調停・審判や所在不明者の特別手続ではない\n意思表示の条件 / 全員が自ら有効に合意できる。未成年者・成年被後見人の代理や利益相反等の問題はない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "遺産分割協議は共同相続人全員の参加と合意が必要です。資料では相続人が3人なので、配偶者と子1人という2人だけの賛成では協議は成立しません。人数や取得予定額による多数決とは区別します。",
    "topic": "遺産分割協議の参加者と合意",
    "sourceUrl": "https://www.houterasu.or.jp/site/faq/sozoku-bunkatsu-003.html",
    "id": "fp3-088",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。資料の3人全員の合意が必要で、2人だけの賛成では足りません。",
      "不適切。過半数の2人が賛成すればよいという多数決の制度ではありません。"
    ],
    "additionalSourceUrls": [
      "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf"
    ],
    "sourceLabel": "裁判所・法テラス・国税庁講本の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料では、Bさんの受諾がなくても、Aさんが申し出た時点で贈与契約が必ず成立する。正しければ〇、誤っていれば×を選びなさい。\n〈贈与契約の成立と受諾〉\n項目 / 条件\n時点 / 2026年3月1日。Aさん・Bさんとも存命の成人\n当事者の条件 / 双方に契約の意思能力があり、錯誤・詐欺・強迫等の事情はない\n範囲 / 民法上の通常の贈与契約の成立を問う。贈与税の取得時期・登記・履行・解除は問わない\n対象 / Aさんが所有する宅地。農地等の特別な許可を要する土地ではない\n意思表示 / AさんはBさんに無償で与えると申し出たが、Bさんは承諾していない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "贈与契約には、無償で財産を与えるという申出と、相手方の受諾の合致が必要です。資料ではBさんが承諾していないので、Aさんの申出だけで贈与契約が必ず成立するとはいえません。",
    "topic": "贈与契約の成立と受諾",
    "sourceUrl": "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf",
    "id": "fp3-089",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。Aさんの一方的な申出だけでは、資料の贈与契約は成立しません。",
      "正解。Bさんの受諾がないため、当事者間の意思が合致していません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "裁判所・法テラス・国税庁講本の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料では、遺言を作成して保管した時点で、記載された財産について直ちに相続が開始する。正しければ〇、誤っていれば×を選びなさい。\n〈相続の開始と死亡・遺産分割の時点〉\n項目 / 条件\n遺言の作成 / 2026年3月1日にAさんが紙の自筆証書遺言を作成し、自宅で保管した\nAさんの状態 / 作成時点では生存している。死亡したと扱われる事情もない\n他の契約 / 生前贈与や売買等による財産移転はしていない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "相続は死亡によって開始します。生存している本人が遺言を作成・保管しただけでは、相続はまだ開始しません。遺言の作成という準備と、相続開始の時点を区別します。",
    "topic": "相続の開始と死亡・遺産分割の時点",
    "sourceUrl": "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf",
    "id": "fp3-090",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。生存している間の遺言作成・保管だけでは相続は開始しません。",
      "正解。資料ではAさんが生存しているため、相続はまだ開始していません。"
    ],
    "additionalSourceUrls": [
      "https://www.library.pref.chiba.lg.jp/reference/pathfinder/pf_souzoku.html"
    ],
    "sourceLabel": "国税庁税務大学校 令和8年度相続税法講本（法令・通達基準2026年1月1日）対象論点・千葉県立図書館",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。 国税庁講本12/122/123頁の開始・承継、47頁の贈与定義を追加確認。講本の1月1日基準を4月1日統合全文と呼ばない。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "資料の資産額と負債額から、純資産額を求める式は（　）である。\n〈同一時点の資産・負債〉\n区分・項目 / 金額（万円）\n時点 / 2026年4月1日現在\n資産：資産合計 / 2,500\n負債：負債合計 / 1,700\n資料外の資産・負債はない。住宅等は提示時価、借入は同日の残高。売却費用・税額・評価差は考慮しない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "資産額－負債額",
      "資産額＋負債額",
      "負債額÷資産額"
    ],
    "answer": 0,
    "explanation": "純資産＝資産額－負債額です。提示例では2,500－1,700＝800万円。資産と負債の加算や、負債比率という割合とは区別します。",
    "topic": "家計の純資産",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "id": "fp3-091",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v118_household_math_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。資産額から負債額を控除した金額が純資産です。",
      "不適切。資産と負債を加えると返済義務を正味財産に加算してしまいます。",
      "不適切。負債÷資産は比率であり、万円単位の純資産額ではありません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "毎年末に15万円ずつ6回積み立て、年3％の年1回複利で運用する。最後の積立直後の元利合計を求めるために毎年の積立額に乗じる係数は（　）である。\n〈年3％・6年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.1941\n現価係数 / 0.8375\n年金終価係数 / 6.4684\n減債基金係数 / 0.1546\n年金現価係数 / 5.4172\n資本回収係数 / 0.1846\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "年金終価係数",
      "年金現価係数",
      "資本回収係数"
    ],
    "answer": 0,
    "explanation": "年金終価係数を用います。毎年末の積立額から最後の積立直後の元利合計を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "topic": "6つの係数・年金終価係数",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "id": "fp3-092",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ],
    "choiceExplanations": [
      "正解。毎年末の積立額から最後の積立直後の元利合計を求めます。",
      "不適切。毎年末の受取額から現在必要な元金を求めます。",
      "不適切。現在の元金から毎年末の一定取崩額を求めます。"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "資料の年間収支は（　）である。\n〈家計の年間収支・残高〉\n項目・期間 / 金額（万円、明記の利率を除く）\n手取り収入（年額） / 420（税・社会保険料控除後）\n生活費（年額） / 300\nその他支出（年額） / 60（生活費との重複なし）\n2026年の年間計画の提示額を使う。他の収入・支出、物価変動はない。税額・社会保険料を法令から計算する問題ではない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "60万円の赤字",
      "120万円の黒字",
      "60万円の黒字"
    ],
    "answer": 2,
    "explanation": "420－300－60＝60万円の黒字です。収入が支出を上回ると黒字で、赤字とは符号が逆です。手取り額なので税・社会保険料を追加控除しません。",
    "topic": "年間収支・手取り・金融資産残高",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "id": "fp3-093",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。収入420万円が支出360万円を上回るので、60万円は赤字ではありません。",
      "不適切。その他支出60万円を控除しないと420－300＝120万円の黒字です。",
      "正解。420－300－60＝60万円の黒字です。"
    ],
    "additionalSourceUrls": [
      "https://jafp.or.jp/know/fp/sheet/files/2_Income_outgo.pdf"
    ],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v118_household_math_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "資料の方式Xの名称は（　）である。\n〈一定の元利合計と返済方式〉\n項目 / 条件\n金利 / 全期間固定の年2％\n支払頻度 / 毎月末\n方式Xの性質 / 元金と利息を合わせた毎月返済額が原則一定\n除外条件 / 据置・繰上返済・ボーナス返済・途中変更なし。最終回等の端数調整を除く\n法令基準日：2026年4月1日。金利・人物・条件は独自の仮定。\n基本論点の限定確認。個別契約・全法令・全改正・包括監修の完了を示すものではない。",
    "choices": [
      "満期一括返済",
      "元利均等返済",
      "元金均等返済"
    ],
    "answer": 1,
    "explanation": "元利均等返済です。一定なのは毎月の元金＋利息の合計で、元金部分だけが一定という意味ではありません。元金均等では元金部分が一定、満期一括では元金を満期にまとめて返します。",
    "topic": "一定の元利合計と返済方式",
    "sourceUrl": "https://www.flat35.com/loan/lineup/kinto/index.html",
    "id": "fp3-094",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v120_remaining_life_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。満期一括返済は元金を満期にまとめて返す方式です。",
      "正解。元利均等返済は提示条件で毎月の元利合計が原則一定です。",
      "不適切。元金均等で一定なのは元金部分で、元利合計ではありません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "住宅金融支援機構/日本FP協会/国税庁の限定論点。実質利回りは指定数式検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "現行商品の金利/統計平均は問題に転載しない。税理士制度No9203は2026-04-01基準、通達は2025-06-01記載、取得日2026-10-15と別記。実質利回りの数式検算と公式制度照合を分離。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "資料の目的に最も合う表は（　）である。\n〈出来事と費用の時系列〉\n項目 / 条件\n整理したい項目 / 進学・住宅購入・退職などの予定\n記入情報 / 各出来事の時期と必要資金の見積り\n今回は求めないもの / 特定時点の資産負債、期間利益の計算\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n期間・分母・使える資金の指定条件を確認する。年金資格・税率/保険料率・融資審査・全法令の包括監修ではない。",
    "choices": [
      "損益計算書",
      "ライフイベント表",
      "貸借対照表"
    ],
    "answer": 1,
    "explanation": "ライフイベント表です。将来の出来事と時期・必要資金を一覧にします。貸借対照表は特定時点の資産負債等、損益計算書は一定期間の収益費用等を扱うため目的が異なります。",
    "topic": "出来事と費用の時系列",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "id": "fp3-095",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v119_life_plan_ratios_shortfall_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。損益計算書は一定期間の収益・費用と利益を整理する表です。",
      "正解。出来事の予定時期と必要資金を整理するライフイベント表です。",
      "不適切。貸借対照表は特定時点の資産・負債等の状況を示します。"
    ],
    "sourceLabel": "日本FP協会の生活設計/家計定義／数値・比率は指定仮定の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "基本定義/生活設計と独自の計算仮定を確認。必要保障額の公式枠組みと指定提示額の検算を併記し、制度受給資格の確認件数とはしない。初回ID時期未確定。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "会社員が勤務先の業務として商品を配送中、荷物を運ぶ際の過失で通行人にけがを負わせ、勤務先企業が法律上の損害賠償責任を負った。この業務中の事故について、通常の個人賠償責任保険（業務拡張特約なし）で補償される。最も適切な説明はどれか。",
    "choices": [
      "勤務先企業の業務中の賠償責任も通常の個人賠償責任保険で補償される",
      "通常の個人賠償責任保険では業務中の企業の賠償責任は対象とならず、事業者向けの賠償責任保険などを検討する",
      "企業の賠償責任は普通傷害保険で補償される"
    ],
    "answer": 1,
    "explanation": "通常の個人賠償責任保険は日常生活における個人の賠償責任に備えるもので、職務遂行に起因する企業の賠償責任を当然に補償するものではありません。業務中の事故に備えるには事業者向けの賠償責任保険などを検討し、契約上の対象業務・免責を確認します。",
    "topic": "業務中の賠償責任と個人賠償の対象外",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/body/q080.html",
    "id": "fp3-096",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。通常の個人賠償責任保険は、業務中に生じた勤務先企業の賠償責任を対象としません。",
      "正解。業務遂行中の企業の賠償責任と、私生活の個人賠償責任は区別します。",
      "不適切。普通傷害保険は主に被保険者自身のけがに備える保険です。"
    ],
    "sourceLabel": "日本損害保険協会：個人賠償責任保険",
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/insurance/car/point.html",
      "https://soudanguide.sonpo.or.jp/body/q071.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v216_liability_business_vs_personal_diversity",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "fp3-013との同一事故設例重複を解消。私生活の対人賠償から業務中の企業賠償の対象区分へ変更。個別商品約款の例外・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の契約の一般的な名称はどれか。\n〈死亡後に年金形式で受け取る保障〉\n項目 / 条件\n保険期間 / 60歳まで\n死亡時の給付 / 所定の受取人が月額10万円を原則60歳の満期まで受領\n最低保証 / 満期までの受取期間が短い場合も2年分を保証\n満期生存時 / 満期保険金なし\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "終身保険（死亡保険金を原則一時金で受け取る設計）",
      "養老保険（満期生存時の満期保険金を備える設計）",
      "収入保障保険"
    ],
    "answer": 2,
    "explanation": "一定期間内の死亡後、遺族等へ満期まで年金形式で給付する設計は収入保障保険です。最低保証がある場合、満期近くに死亡しても保証期間分を受け取れます。公的遺族年金や就業不能保障とは別です。",
    "topic": "死亡後に年金形式で受け取る保障",
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/40.html",
    "id": "fp3-097",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "終身保険の死亡一時金を指定した選択肢は、資料の期間と年金形式の給付とは異なります。",
      "養老保険の満期生存給付を指定した選択肢は、資料の満期保険金なしという条件と異なります。",
      "正解。収入保障保険の年金形式の死亡保障です。最低保証も契約条件として確認します。"
    ],
    "additionalSourceUrls": [
      "https://www.jili.or.jp/knows_learns/kind/main/37.html",
      "https://www.jili.or.jp/knows_learns/kind/main/38.html"
    ],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "火災保険に付帯する通常の地震保険について、資料の保険対象として適切な組合せは（　）である。\n〈地震保険で検討する物件〉\n項目 / 条件\nA / 住居として使用する本人所有の専用住宅\nB / 住宅内の本人所有の家具・家電などの生活用家財\nC / 住居として使用しない事務所専用建物\nD / 自家用乗用車\n法令基準日：2026年4月1日。人物・金額・契約条件は独自の仮定。\n地震保険の損害区分認定、個別商品の全約款・拡張特約・実際の保険金査定は今回の確認対象外。",
    "choices": [
      "CとD",
      "AとC",
      "AとB"
    ],
    "answer": 2,
    "explanation": "通常の地震保険の対象は、居住の用に供する建物と生活用動産である家財です。Aの住宅とBの生活用家財が対象になります。Cの事務所専用建物とDの自動車は、この地震保険の対象ではありません。建物・家財はそれぞれ保険対象として契約する必要があります。",
    "topic": "地震保険の対象・住宅と家財",
    "sourceUrl": "https://www.mof.go.jp/about_mof/councils/jishin_benkyoukai/proceeding/material_20260128_02.pdf",
    "id": "fp3-098",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v112_fire_earthquake_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。事務所専用建物と自動車はいずれも家計向けの通常の地震保険の対象外です。",
      "不適切。Aの住宅は対象ですが、Cは住居に使わない建物です。",
      "正解。居住用の建物と生活用家財の組合せです。"
    ],
    "sourceLabel": "財務省公開資料・日本損害保険協会：火災/地震保険の基本区分",
    "additionalSourceUrls": [
      "https://www.mof.go.jp/policy/financial_system/earthquake_insurance/jisin.htm"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.112：建物/家財、事故原因、損害保険金/費用、付帯と保険金額を限定確認。2026年1月28日資料で4月基準以前の制度を照合。個別約款・全支払条件・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の「損害額から差し引く5万円」を表す名称は（　）である。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n保険価額 / 建物の評価額2,000万円\n保険金額 / 契約上の損害保険金の限度2,000万円\n事故の対象損害額 / 50万円\n事故時の自己負担 / 対象損害額から5万円を差し引く\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n基本用語と本問で指定した契約条件を確認する。個別商品約款・費用保険金・定額給付等の包括確認ではない。",
    "choices": [
      "保険金額",
      "保険価額",
      "免責金額"
    ],
    "answer": 2,
    "explanation": "対象損害額から自己負担として差し引く5万円は免責金額です。契約上の支払限度額である保険金額、対象建物の評価額である保険価額とは区別します。",
    "topic": "差引免責と支払限度額",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
    "id": "fp3-099",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v113_deductible_limit_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "保険金額は契約で定める保険会社の支払限度額等であり、事故時の自己負担額ではありません。",
      "保険価額は保険の目的となる財物等の評価額であり、被保険者が事故ごとに負担する免責金額ではありません。",
      "正解。契約上、事故による損害のうち被保険者が負担する金額を免責金額といいます。"
    ],
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の車両について、法律に基づき運行に必要となる保険は（　）である。\n〈公道で運行する自家用車〉\n損害・場面 / 条件\n車両 / 国内の通常の自家用乗用車\n使用 / 公道で運行する\n確認事項 / 運行にあたり法律に基づいて加入する保険・共済\n例外車両 / 適用除外車両は対象にしない\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "自動車損害賠償責任保険",
      "任意自動車保険の対人賠償責任保険",
      "任意自動車保険の車両保険"
    ],
    "answer": 0,
    "explanation": "自賠責保険（共済）が法律に基づく強制保険です。任意の対人賠償保険や車両保険に加入していても、自賠責の加入義務に代わるものではありません。",
    "topic": "自賠責保険・共済の加入義務",
    "sourceUrl": "https://www.mlit.go.jp/jidosha/anzen/04relief/jibai/insurance.html",
    "id": "fp3-100",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。自賠責保険（共済）は法律に基づいて原則加入が義務付けられています。",
      "対人賠償責任保険は他人の死傷への賠償に備える任意保険で、強制加入とは異なります。",
      "車両保険は契約車両自体の損害に備える任意の補償で、強制加入ではありません。"
    ],
    "sourceLabel": "国土交通省：自賠責保険・共済",
    "additionalSourceUrls": [
      "https://www.mlit.go.jp/jidosha/jibaiseki/about/punish/index.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料のPBRとして、最も適切なものはどれか。\n〈同一の株式単位で比較するPBR〉\n項目 / 条件\n株価 / 2026年4月1日の提示株価 1200円\nEPS / 2025年1～12月の実績1株当たり当期純利益 120円\nBPS / 2025年末実績の1株当たり純資産 600円\n普通株式のみ。EPS・BPSは必要な調整後の提示値。株式分割/併合、優先株、自己株式数の追加計算なし。\n配当は税引前。手数料・個人税額・売買差益なし。実績配当の将来継続を保証しない。\n法令基準日：2026年4月1日。企業・金額は独自仮定。指標の数学/定義確認であり、実企業の会計・投資判断・税法改正の包括監修ではない。",
    "choices": [
      "0.5倍",
      "10倍",
      "2倍"
    ],
    "answer": 2,
    "explanation": "PBRの計算は株価÷BPSです。PBR:1200÷600=2倍。倍率と百分率を区別します。提示した実績年度・1株単位の値を用い、会社全体の利益や予想値へ置き換えません。指標だけで値上がりや割安が保証されるわけではありません。",
    "topic": "PBRの分母・単位・年度",
    "sourceUrl": "https://port.jpx.co.jp/jpxhp/portdocs/beginner_a_03.html",
    "id": "fp3-101",
    "revision": 51,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v121_equity_metrics_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。BPS÷株価:600÷1200=0.5倍（逆数）。",
      "不適切。PER:1200÷120=10倍。",
      "正解。PBR:1200÷600=2倍。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "JPXの株式指標定義／独自提示額の独立検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂の指定数値/全選択肢を内部検算。公式定義との対応を併記し8問を法令改正照合件数に数えない。初回ID時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料の債券の償還差益はいくらか。\n〈償還差益と元本〉\n項目 / 条件\n購入価格 / 95万円（経過利子なし）\n満期償還額 / 100万円\n計算対象 / 償還額－購入価格。利子収入は別で、本問には加算しない\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "95万円",
      "100万円",
      "5万円"
    ],
    "answer": 2,
    "explanation": "償還差益は5万円。償還額全額を利益とせず、購入に使った95万円を差し引きます。",
    "topic": "償還差益と元本",
    "sourceUrl": "https://www.jpx.co.jp/glossary/sa/519.html",
    "id": "fp3-102",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。95万円は購入価格そのものです。",
      "不適切。100万円は元本償還額そのものです。",
      "正解。100－95＝5万円です。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "JSDA/JPXの限定定義と提示条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料の1年後の元利合計はいくらか。\n〈元利合計と利息〉\n項目 / 条件\n当初元本 / 100万円\n提示運用利率 / 年2％（1年分、税引前）\n運用期間 / 満1年、利息は期末に1回受取\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "98万円",
      "102万円",
      "2万円"
    ],
    "answer": 1,
    "explanation": "利息2万円に元本100万円を加え、元利合計102万円。商品保証の判断ではなく提示利率による算術です。",
    "topic": "元利合計と利息",
    "sourceUrl": "",
    "id": "fp3-103",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。98万円は利息2万円を差し引いた値です。",
      "正解。100＋100×0.02＝102万円です。",
      "不適切。2万円は利息だけで、元本100万円を含めていません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定条件の内部検算（法令照合ではない）",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料の運用方針に該当する分類はどれか。\n〈運用目標と成果保証〉\n項目 / 条件\n運用対象 / 国内株式を主とする架空ファンド\n運用方針 / 特定の株価指数と連動する運用成果を目標とする\n成果の位置づけ / 指数との完全一致・元本・利益を保証しない\n法令基準日：2026年4月1日。確認日と資料公表日を区別し、基本定義・指定例の限定点検として扱う。\n設例・表は独自表現で、公式資料の文章や画像を転載しない。全商品約款や全法令改正の包括監修ではない。",
    "choices": [
      "インデックスファンド",
      "アクティブファンド（比較指数を上回る成果等を目指すもの）",
      "MMF（公社債や短期金融商品を中心に運用するもの）"
    ],
    "answer": 0,
    "explanation": "インデックス型は対象指数への連動を目標にします。費用や組入れ等の影響で完全に一致する保証はありません。ETFという上場区分とインデックス/アクティブという運用方針は別の軸で、すべてのETFが指数連動型というわけでもありません。",
    "topic": "運用目標と成果保証",
    "sourceUrl": "https://www.imaj.or.jp/study/investmenttrust/type/category.html",
    "id": "fp3-104",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。指数連動を目標とするのでインデックスファンドです。",
      "不適切。比較指数を上回る成果等を目指すアクティブ運用とは目標が違います。",
      "不適切。MMFは公社債や短期金融商品を中心に運用する公社債投資信託で、資料の国内株価指数連動とは違います。"
    ],
    "additionalSourceUrls": [
      "https://www.jpx.co.jp/faq/listed_product.html"
    ],
    "sourceLabel": "公式発行元の基本定義・費用・取引方法の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v125_funds_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂公式定義7問。指定数値の補助検算は別の法令改正照合件数に加算しない。単純再確認0、ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料の外貨の円換算額はどれか。\n〈換算の単位〉\n項目 / 条件\n保有外貨 / 100米ドル\n提示レート / 1米ドル＝150円\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n外貨額の増減、利息、売買、追加投資・引出し、手数料、税額は考慮しない。",
    "choices": [
      "150円",
      "100円",
      "15,000円"
    ],
    "answer": 2,
    "explanation": "米ドル×円／米ドルで米ドルの単位が消え、15,000円になります。",
    "topic": "換算の単位",
    "sourceUrl": "https://www.boj.or.jp/about/education/oshiete/intl/g18.htm",
    "id": "fp3-105",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。150円は1米ドル分の値です。",
      "不適切。100は米ドルの数量です。円換算にはレートを乗じます。",
      "正解。100米ドル×150円／米ドル＝15,000円です。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "日本銀行の円高・円安定義／独自仮定の換算検算",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2026年分の所得税で、扶養親族・同一生計配偶者等の合計所得金額の要件は（　）以下である。\n〈2026年分の扶養・特定親族に関する資料〉\n項目 / 内容\n改正後（2026年分） / 62万円以下\n改正前 / 58万円以下\n給与収入だけの場合の改正後の目安 / 136万円以下\n原則施行日は2026年12月1日。特定支出控除がある場合、給与収入の目安は異なる。",
    "choices": [
      "58万円",
      "62万円",
      "89万円"
    ],
    "answer": 1,
    "explanation": "2026年分の扶養親族・同一生計配偶者等の所得要件は合計所得金額62万円以下です。この改正は原則2026年12月1日に施行され、2026年分の所得税から適用されます。2026年11月までの給与等の源泉徴収事務には原則として改正が反映されず、12月の年末調整などで精算します。58万円は改正前、89万円は2026年分の勤労学生の所得要件です。給与だけの場合の136万円以下は給与収入の目安であり、合計所得金額の要件とは単位・段階が違います。",
    "topic": "扶養親族・同一生計配偶者の所得要件",
    "sourceUrl": "https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf",
    "id": "fp3-106",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v83_2026_dependent_requirements_scoped_primary_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2026,
    "sourceLabel": "国税庁：令和8年4月 源泉所得税の改正のあらまし",
    "reviewNote": "Ver.83：2026年分の所得要件・年齢・控除額・施行時期を限定照合。IDには過去の公式照合履歴があるが、改訂後の主要論点は今回初めて照合。包括監修未完了。",
    "sourceCheckedDate": "2026-10-14",
    "choiceExplanations": [
      "誤り。2026年分の扶養親族・同一生計配偶者等の所得要件は合計所得金額62万円以下です。58万円は改正前、89万円は2026年分の勤労学生の所得要件です。給与だけの場合の136万円以下は給与収入の目安であり、合計所得金額の要件とは単位・段階が違います。",
      "正解。2026年分の扶養親族・同一生計配偶者等の所得要件は合計所得金額62万円以下です。58万円は改正前、89万円は2026年分の勤労学生の所得要件です。給与だけの場合の136万円以下は給与収入の目安であり、合計所得金額の要件とは単位・段階が違います。",
      "誤り。2026年分の扶養親族・同一生計配偶者等の所得要件は合計所得金額62万円以下です。58万円は改正前、89万円は2026年分の勤労学生の所得要件です。給与だけの場合の136万円以下は給与収入の目安であり、合計所得金額の要件とは単位・段階が違います。"
    ]
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2026年分の所得税で、勤労学生控除の対象となる勤労学生の合計所得金額の要件は（　）以下である。\n〈2026年分の勤労学生の所得要件〉\n項目 / 内容\n改正後の合計所得金額 / 89万円以下\n改正前の合計所得金額 / 85万円以下\n給与収入だけの場合の改正後の目安 / 163万円以下\n勤労による所得があり、勤労によらない所得が10万円以下であること、所定の学校の学生等であることなど、ほかの要件も必要。",
    "choices": [
      "85万円",
      "89万円",
      "163万円"
    ],
    "answer": 1,
    "explanation": "2026年分の勤労学生の合計所得金額の要件は89万円以下です。85万円は改正前の合計所得要件、163万円は給与収入だけの場合の収入金額の目安です。合計所得金額と給与収入を区別します。勤労による所得があること、勤労によらない所得が10万円以下であること、所定の学校の学生等であることなどの要件も別途必要です。",
    "topic": "勤労学生控除の所得要件",
    "sourceUrl": "https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf",
    "id": "fp3-107",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v84_2026_spouse_student_requirements_scoped_primary_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2026,
    "sourceLabel": "国税庁：令和8年4月 源泉所得税の改正のあらまし",
    "reviewNote": "Ver.84：2026年分の配偶者控除・配偶者特別控除・勤労学生の主要所得要件と控除額を限定照合。IDには過去の公式照合履歴があるが、改訂後の主要論点は今回初めて照合。包括監修未完了。",
    "choiceExplanations": [
      "誤り。85万円以下は改正前の合計所得金額の要件です。",
      "正解。2026年分は合計所得金額89万円以下です。",
      "誤り。163万円以下は給与収入だけの場合の収入金額の目安であり、合計所得金額の上限ではありません。"
    ],
    "sourceCheckedDate": "2026-10-14"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2026年分の所得税で、合計所得金額500万円の居住者（他の要件を満たす）の基礎控除額はいくらか。\n〈2026年分の基礎控除〉\n項目 / 内容\n合計所得金額 / 500万円\n所得区分 / 489万円超655万円以下\n対象年分 / 2026年分\n制度の施行日 / 2026年12月1日\n年末調整等で改正後の2026年分基礎控除を適用する。施行前の準確定申告は除く。",
    "choices": [
      "63万円",
      "67万円",
      "62万円"
    ],
    "answer": 1,
    "explanation": "500万円は合計所得金額489万円超655万円以下の区分に該当し、2026年分の基礎控除額は67万円です。63万円は2025年分の同じ所得区分、62万円は2026年分の655万円超2,350万円以下などの区分です。2026年分の規定は2026年12月1日施行であり、施行前の準確定申告の取扱いは別です。",
    "topic": "所得税の基礎控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1199.htm",
    "id": "fp3-108",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v89_2026_basic_and_medical_deduction_scoped_primary_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2026,
    "sourceLabel": "国税庁：No.1199 基礎控除",
    "reviewNote": "Ver.89：2026年分の基礎控除所得区分、医療費控除の総所得金額等5％基準、補てん保険金の対応限度を公式照合。包括監修未完了。",
    "choiceExplanations": [
      "誤り。63万円は2025年分の同じ所得区分です。",
      "正解。2026年分の489万円超655万円以下は67万円です。",
      "誤り。62万円は2026年分の655万円超2,350万円以下などの区分です。"
    ],
    "sourceCheckedDate": "2026-10-14"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2026年分の所得税で、次の新旧個人年金保険料を支払った場合、個人年金保険料控除額はいくらか。\n〈新旧の個人年金保険料〉\n項目 / 内容\n新契約の支払保険料 / 2万円\n新契約分の計算額 / 2万円\n旧契約の支払保険料 / 4万円\n旧契約分の計算額 / 4万円×1/2＋1万2,500円＝3万2,500円\n旧契約の支払保険料は6万円以下。新旧双方を適用する場合の控除上限は4万円。",
    "choices": [
      "4万円",
      "5万2,500円",
      "7万2,500円"
    ],
    "answer": 0,
    "explanation": "新契約分2万円と旧契約分3万2,500円の合計は5万2,500円ですが、新旧双方を適用する個人年金保険料控除の上限は4万円です。したがって控除額は4万円です。",
    "topic": "生命保険料控除（新旧契約併存）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1140.htm",
    "id": "fp3-109",
    "revision": 60,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：No.1140 生命保険料控除",
    "contentReview": "v88_2026_new_old_life_insurance_contracts_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2026,
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.88：新旧一般生命保険料・個人年金保険料の併存時に、旧契約支払6万円以下の合算上限4万円と、6万円超の旧契約単独計算を公式照合。包括監修未完了。",
    "choiceExplanations": [
      "正解。計算額合計5万2,500円に新旧併用の上限4万円を適用します。",
      "誤り。新旧の計算額を合計しただけで、4万円の上限を適用していません。",
      "誤り。支払保険料の合計であり、控除額の計算結果ではありません。"
    ]
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2026年分の所得税で、30歳以上70歳未満の国外居住親族が控除対象扶養親族となるための追加要件に該当しないものはどれか。\n〈30歳以上70歳未満の国外居住親族〉\n項目 / 内容\n追加要件1 / 留学により国内に住所・居所を有しなくなった\n追加要件2 / 障害者である\n追加要件3 / 生活費・教育費としてその年に38万円以上の支払を受けた\n親族関係、生計、所得などの一般要件と所定書類も必要。",
    "choices": [
      "留学により国外居住となった",
      "障害者である",
      "生活費として年間20万円の支払を受けただけである"
    ],
    "answer": 2,
    "explanation": "年間20万円の支払だけでは、38万円以上という追加要件を満たしません。30歳以上70歳未満では、留学により国外居住となった人、障害者、またはその年に生活費・教育費として38万円以上の支払を受けた人のいずれかである必要があります。一般の扶養親族要件と書類要件は別途判定します。",
    "topic": "国外居住親族の扶養控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm",
    "id": "fp3-110",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "追加要件に該当します。留学により国内に住所・居所を有しなくなった人は対象になり得ます。",
      "追加要件に該当します。障害者である国外居住親族は対象になり得ます。",
      "正解。20万円は38万円未満であり、これだけでは追加要件を満たしません。"
    ],
    "taxYear": 2026,
    "sourceLabel": "国税庁：No.1180 扶養控除",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v85_2026_nonresident_dependent_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.85：国外居住親族の年齢帯、留学・障害・38万円送金の追加要件と確定申告書類を初回公式照合。所得要件は2026年分62万円以下。包括監修未完了。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "敷地面積200㎡、容積率算定の対象となる延べ面積300㎡の建物について、容積率として最も適切なものはどれか。延べ面積と敷地面積は計算上の確定値とし、各種不算入や建築規制の適否は考慮しない。",
    "choices": [
      "60％",
      "150％",
      "250％"
    ],
    "answer": 1,
    "explanation": "容積率＝容積率算定対象の延べ面積÷敷地面積×100＝300㎡÷200㎡×100＝150％です。建ぺい率は建築面積を用いる別の指標です。",
    "topic": "容積率の計算",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "id": "fp3-111",
    "revision": 5,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v215_exact_duplicate_replacement_far",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。300㎡÷200㎡の計算とは一致しません。",
      "正解。300㎡÷200㎡×100＝150％です。",
      "不適切。延べ面積と敷地面積の比を誤っています。"
    ],
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "既存完全重複の解消。容積率の定義と与件の比率を限定確認。建築許可の適否は判定せず、包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料で指定した容積率だけによる単純計算上の延べ面積の上限はどれか。\n〈容積率から求める延べ面積〉\n項目 / 条件\n敷地面積 / 200㎡。容積率の分母となる面積はこの200㎡とする\n参考：建築面積 / 150㎡。建築面積と各階を合計する延べ面積は別の数量である\n計算に用いる容積率 / 200％（倍率2.0）\n計算範囲 / 敷地面積×容積率の数量関係だけを問う。前面道路による限度、建ぺい率、高さ制限、床面積の算入除外等は考慮しない\n留意点 / 算出値は実際の敷地で建築可能と確認した面積ではなく、設例の単純計算値である\n独自設例。法令基準日は2026年4月1日。確認日や資料の公表日とは区別する。",
    "choices": [
      "400㎡",
      "200㎡",
      "150㎡"
    ],
    "answer": 0,
    "explanation": "容積率の分母は敷地面積なので、200㎡×2.0＝400㎡です。建築面積150㎡を掛け算の基礎に置き換えません。容積率は延べ面積、建ぺい率は建築面積との関係を示す割合です。本問は指定条件の算術で、現実の建築計画の適法性までは判定していません。",
    "topic": "容積率から求める延べ面積",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "id": "fp3-112",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。敷地面積200㎡×200％＝400㎡です。",
      "不適切。200㎡は容積率100％として計算した場合の面積です。本問では200％を用います。",
      "不適切。150㎡は参考の建築面積であって、容積率から求める延べ面積の上限ではありません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定モデルの内部計算（法令改正照合ではない）",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v137_valuation_and_property_models_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式基本事項3と指定条件内部検算3を区別。ID初回時期不明、法令全文/全改正/実機は未確認。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料で、空室損失反映後の賃料収入を購入価格で割った比率はいくらか。管理費は差し引かず、取得時諸費用も含めない。\n〈空室損失反映後・管理費控除前の比率〉\n項目 / 条件\n対象期間 / 2026年の1年間を想定する独自の収支モデル\n年間満室賃料 / 240万円\n年間空室損失 / 40万円（満室賃料から減る額）\n年間運営費用 / 20万円（管理・修繕・物件の税金等の現金支出として確定。借入元利金・減価償却・個人の所得税等は含まない）\n購入価格 / 4,000万円\n取得時諸費用 / 0万円（購入価格との重複なし）\n追加条件 / 借入なし。ほかの収支・売却損益なし。将来の収入や運用成果を保証する設例ではない\n本問の比率 / 分子＝満室賃料－空室損失（管理費控除前）、分母＝購入価格\n金額はすべて万円、比率は％。非整数の比率は小数第2位を四捨五入し小数第1位まで表示。\nこの運営収支モデルは所得税法上の不動産所得の計算ではない。法令基準日2026年4月1日の教材として条件を指定。",
    "choices": [
      "4.5％",
      "6％",
      "5％"
    ],
    "answer": 2,
    "explanation": "空室損失反映後の賃料は240－40＝200万円。200÷4,000×100＝5％。管理費20万円まで引いた180万円や、空室損失を引く前の240万円を使う計算とは区別します。本問の独自の指定比率を、運営費控除後の実質利回りと呼び替えないこと。",
    "topic": "空室損失反映後・管理費控除前の比率",
    "sourceUrl": "",
    "id": "fp3-113",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。180÷4,000×100＝4.5％は管理費も差し引いています。",
      "不適切。240÷4,000×100＝6％は空室損失を控除していません。",
      "正解。200÷4,000×100＝5％です。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定条件の計算検証",
    "sourceCheckedDate": null,
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料でAさんが着目している価格評価の考え方に対応する手法はどれか。\n〈将来の純収益と評価手法〉\n項目 / 条件\n対象 / 賃貸用の土地・建物\n着目する内容 / 将来、その不動産から得られると期待される純収益\n評価の考え方 / 純収益を将来受け取る時期や利回りを考慮し、現在の価格に反映する\n問う範囲 / 主要な評価手法の区別。具体的な鑑定額や税額は計算しない\n独自設例。法令基準日は2026年4月1日。確認日や資料の公表日とは区別する。",
    "choices": [
      "取引事例比較法",
      "原価法",
      "収益還元法"
    ],
    "answer": 2,
    "explanation": "収益還元法は収益性、取引事例比較法は市場の取引事例、原価法は再調達原価と減価修正に着目します。賃貸物件だから他の手法を一切使わないという意味ではなく、資料が示す評価の考え方を判別します。",
    "topic": "将来の純収益と評価手法",
    "sourceUrl": "https://www.mlit.go.jp/common/001043585.pdf",
    "id": "fp3-114",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v137_valuation_and_property_models_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。取引事例比較法は、比較可能な取引事例の価格を必要に応じて修正・補正し、対象との条件を比較する方法です。",
      "不適切。原価法は価格時点の再調達原価に減価修正を行う方法です。",
      "正解。将来の純収益を現在の価格に反映する考え方は、収益還元法に対応します。"
    ],
    "additionalSourceUrls": [
      "https://www.mlit.go.jp/totikensangyo/H30kouji01.html"
    ],
    "sourceLabel": "国土交通省の評価手法・地価指標の一次資料による基本事項の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式基本事項3と指定条件内部検算3を区別。ID初回時期不明、法令全文/全改正/実機は未確認。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料の固定資産税の分類として、最も適切なものはどれか。\n〈固定資産税の基本分類〉\n項目 / 条件\n対象資産 / 神奈川県内の土地・家屋\n課税関係 / 通常の市町村における一般的な課税関係を想定\n比較する内容 / 課税する主体と、国税か地方税かの区分\n除外 / 東京都23区などの特別な課税主体の取扱い、個別税額計算は扱わない\n法令基準日2026年4月1日、確認日とは別。税目の基本事項または提示設例の適用を確認する。",
    "choices": [
      "市町村等が課す地方税",
      "都道府県が原則として課する地方税",
      "市町村等が課す国税"
    ],
    "answer": 0,
    "explanation": "固定資産税は、原則として市町村が課税する地方税です。東京都23区内では都が課税しますが、一般原則と地域による取扱いを分けて考えます。",
    "topic": "固定資産税の基本分類",
    "sourceUrl": "https://www.tax.metro.tokyo.lg.jp/kazei/real_estate/kotei_tosi",
    "id": "fp3-115",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。資料の土地・家屋の固定資産税は、原則として市町村が課す地方税です。",
      "不適切。都道府県による課税を全国の原則とする説明ではありません。",
      "不適切。固定資産税は地方税であって、国税ではありません。"
    ],
    "additionalSourceUrls": [
      "https://www.pref.kanagawa.jp/zei/kenzei/a001/b011/010.html",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/osirase/9000.htm"
    ],
    "sourceLabel": "自治体・国税庁の不動産税基本事項と設例適用の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v135_property_tax_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要論点3/共通公式ルール適用2/過去論点再確認2を区別。法令全文/全改正/免税点等の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料の相続が開始した日はいつか。\n〈相続の開始と死亡・遺産分割の時点〉\n項目 / 条件\n死亡した日 / 2025年10月1日：Aさんが死亡した\n遺産分割協議 / 2025年11月15日：相続人Bさんらの遺産分割協議が成立した\n条件 / 死亡日は確定している。失踪宣告等による別の死亡時点を考慮しない\n範囲 / 相続開始の日を問う。遺産分割の成立日や各種手続の提出日とは区別する\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "11月15日（遺産分割協議が成立した日）",
      "家庭裁判所に相続を届け出た日",
      "10月1日（Aさんが死亡した日）"
    ],
    "answer": 2,
    "explanation": "相続は死亡によって開始するので、資料ではAさんが死亡した2025年10月1日です。後日の遺産分割協議の成立や、裁判所への届出を開始の条件とはしません。",
    "topic": "相続の開始と死亡・遺産分割の時点",
    "sourceUrl": "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf",
    "id": "fp3-116",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。11月15日は遺産分割協議の成立日で、相続開始の日ではありません。",
      "不適切。家庭裁判所への相続の届出が相続開始の条件ではありません。",
      "正解。資料ではAさんの死亡した10月1日に相続が開始しています。"
    ],
    "additionalSourceUrls": [
      "https://www.library.pref.chiba.lg.jp/reference/pathfinder/pf_souzoku.html"
    ],
    "sourceLabel": "国税庁税務大学校 令和8年度相続税法講本（法令・通達基準2026年1月1日）対象論点・千葉県立図書館",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。 国税庁講本12/122/123頁の開始・承継、47頁の贈与定義を追加確認。講本の1月1日基準を4月1日統合全文と呼ばない。",
    "priorSourceReview": "v51"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料の単純な正味財産額はいくらか。\n〈財産と借入金の単純な差引計算〉\n項目 / 条件\n時点と単位 / 2026年3月1日時点の資料。金額の単位は万円\n財産の額 / 預金800万円\n借入金の額 / 300万円\nほかの項目 / ほかの財産・債務・費用はなく、評価額の調整や二重計上はない\n求める範囲 / 示した財産の額から借入金を差し引く単純な正味額。相続税の課税価格・課税遺産総額・相続人別取得額ではない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "800万円",
      "500万円",
      "300万円"
    ],
    "answer": 1,
    "explanation": "財産800万円から借入金300万円を差し引き、800－300＝500万円です。これは資料の2項目の差引計算であり、税務上の債務控除の適用や相続税額を判定したものではありません。",
    "topic": "財産と借入金の単純な差引計算",
    "sourceUrl": "",
    "id": "fp3-117",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。借入金を差し引く前の財産額です。",
      "正解。資料の財産から借入金を差し引いた額です。",
      "不適切。差引後の額ではなく、借入金の額だけを答えています。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定条件の内部算術検算（法令改正照合ではない）",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料で配偶者の法定相続分はどれか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、子1人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "2分の1",
      "4分の1",
      "3分の2"
    ],
    "answer": 0,
    "explanation": "配偶者1/2、子全体1/2です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "id": "fp3-118",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。配偶者の割合は1/2です。",
      "不適切。資料で問う配偶者の割合は1/2です。この選択肢はその割合に一致しません。",
      "不適切。配偶者と共同相続する者の続柄が別の場合の割合を当てはめています。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料の紙の自筆証書遺言について、適切な説明はどれか。\n〈紙の自筆証書遺言と添付財産目録〉\n項目 / 条件\n作成時点 / 2026年3月1日。紙の自筆証書遺言を作成する\n保管の前提 / 本人が自宅で保管する。法務局の保管申請の用紙・余白等の様式は問わない\n比較する部分 / 財産を誰に承継させるかを書く本文、日付・氏名、添付する財産目録\n範囲 / 自書と署名・押印の方式を問う。遺言能力等を含めた有効性全体の審査ではない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "遺言者が本文をパソコンで作成し、署名だけを自書する",
      "遺言者が原則として本文を自書する",
      "遺言者以外が本文を代筆し、遺言者が押印する"
    ],
    "answer": 1,
    "explanation": "原則として本文を本人が自書し、日付・氏名も自書して押印します。添付財産目録に認められた自書の例外は、本文のパソコン作成や他人の代筆を認めるものではありません。",
    "topic": "紙の自筆証書遺言と添付財産目録",
    "sourceUrl": "https://www.koshonin.gr.jp/notary/ow02/2-q18",
    "id": "fp3-119",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。本文をパソコンで作成して署名だけ自書しても、本文自書の要件を満たしません。",
      "正解。本文は本人が自書するのが基本で、日付・氏名の自書と押印も必要です。",
      "不適切。本人が押印しても、他人が本文を代筆したことを補えません。"
    ],
    "sourceLabel": "裁判所・日本公証人連合会・千葉県立図書館・衆議院制定法律の対象論点限定照合",
    "reviewedAt": "2026-10-13",
    "v69ReviewScope": "紙の自筆証書遺言の本文・日付・氏名の自書、財産目録の例外、両面を含む署名押印の限定確認。",
    "v69PreviousSourceUrl": "",
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19620180713072.htm"
    ],
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。",
    "priorSourceReview": "v69"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料の遺産に係る基礎控除額はいくらか。\n〈相続税の基礎控除〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n法定相続人 / 法律上の配偶者と実子2人のみ。全員存命で、相続放棄・欠格・廃除・養子・代襲等はない\n人数の範囲 / 資料の相続人だけを数え、ほかの者を重複して加えない\n求めるもの / 遺産全体に係る相続税の基礎控除額。配偶者個人の税額軽減や死亡保険金の非課税枠ではない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "4,200万円",
      "4,800万円",
      "5,400万円"
    ],
    "answer": 1,
    "explanation": "法定相続人は3人なので、遺産に係る基礎控除は3,000万円＋600万円×3＝4,800万円です。相続人ごとに3,000万円を付ける計算ではなく、遺産全体の控除額です。",
    "topic": "相続税の基礎控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm",
    "id": "fp3-120",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。法定相続人を2人と数えた場合の額です。資料は3人です。",
      "正解。資料の法定相続人3人で計算すると4,800万円です。",
      "不適切。法定相続人を4人と数えた場合の額です。資料は3人です。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。",
    "priorSourceReview": "v25_source_metadata"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の年間収支として、最も適切なものはどれか。\n〈家計の年間収支・残高〉\n項目・期間 / 金額（万円、明記の利率を除く）\n手取り収入（年額） / 640（税・社会保険料控除後）\n生活費（年額） / 420\n住宅ローン元利返済（年額） / 120（生活費と重複なし）\nその他支出（年額） / 40（他項目と重複なし）\n2026年の年間計画の提示額を使う。他の収入・支出、物価変動はない。税額・社会保険料を法令から計算する問題ではない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "60万円の黒字",
      "180万円の黒字",
      "100万円の黒字",
      "220万円の黒字"
    ],
    "answer": 0,
    "explanation": "640－420－120－40＝60万円の黒字です。住宅ローンの年間返済額はその年の現金支出であり、ローン残高全額を年間支出に計上するものではありません。",
    "topic": "年間収支・手取り・金融資産残高",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "id": "fp2-061",
    "revision": 6,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v118_household_math_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。640－420－120－40＝60万円の黒字です。",
      "不適切。ローン返済120万円を控除しないと640－420－40＝180万円です。",
      "不適切。その他支出40万円を控除しないと640－420－120＝100万円です。",
      "不適切。ローン返済とその他支出を落とすと640－420＝220万円です。"
    ],
    "additionalSourceUrls": [
      "https://jafp.or.jp/know/fp/sheet/files/2_Income_outgo.pdf"
    ],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の純資産額として、最も適切なものはどれか。\n〈同一時点の資産・負債〉\n区分・項目 / 金額（万円）\n時点 / 2026年4月1日現在\n資産：預金 / 600\n資産：投資信託時価 / 900\n資産：自宅時価 / 3,600\n負債：住宅ローン残高 / 2,400\n負債：教育ローン残高 / 200\n資料外の資産・負債はない。住宅等は提示時価、借入は同日の残高。売却費用・税額・評価差は考慮しない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "1,600万円",
      "2,300万円",
      "2,500万円",
      "2,700万円"
    ],
    "answer": 2,
    "explanation": "資産合計5,100万円－負債合計2,600万円＝純資産2,500万円です。すべて同じ時点の残高であり、年間収入や年間返済額とは区別します。",
    "topic": "家計の純資産",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "id": "fp2-062",
    "revision": 7,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v118_household_math_scoped_migration",
    "choiceExplanations": [
      "不適切。投資信託900万円を資産から落とすと2,500－900＝1,600万円です。",
      "不適切。教育ローン200万円を二度控除すると2,500－200＝2,300万円です。",
      "正解。5,100－2,600＝2,500万円です。",
      "不適切。教育ローン200万円を控除しないと5,100－2,400＝2,700万円です。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "教育資金として現在200万円を準備し、年利2％で年1回複利運用する。3年後の元利合計として最も適切なものはどれか。期間中の追加入出金はなく、税金・手数料は考慮しない。",
    "choices": [
      "212万円",
      "212万2,416円",
      "208万800円",
      "206万円"
    ],
    "answer": 1,
    "explanation": "200万円×1.02³＝212万2,416円です。212万円は単利計算、208万800円は2年間の複利、206万円は年利や期間を取り違えた金額です。",
    "topic": "教育資金の3年複利計算",
    "sourceUrl": "https://www.j-flec.go.jp/public/learn/glossary/h_fukuri/",
    "id": "fp2-063",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v215_exact_duplicate_replacement_compound",
    "sourceCheckedDate": "2026-10-14",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "reviewNote": "既存完全重複の解消。独自数値の年1回複利を独立検算。法令依存なし、包括監修未完了。",
    "sourceLabel": "J-FLEC：複利の定義／設例数値は独立検算",
    "additionalSourceUrls": [],
    "choiceExplanations": [
      "不適切。200万円×(1＋0.02×3)＝212万円は単利です。",
      "正解。200万円×1.02³＝212万2,416円です。",
      "不適切。200万円×1.02²＝208万800円で、2年分です。",
      "不適切。年利2％で3年間の運用結果とは一致しません。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の条件における元金均等返済の説明として、最も適切なものはどれか。\n〈返済方式を比較する共通条件〉\n項目 / 内容\n金利 / 全期間固定・0％超\n返済間隔 / 毎月・一定\n元金均等返済 / 返済回数で借入元金を等分\n追加条件 / 繰上げ返済・延滞なし\n端数調整による最終回の差は考慮しない。元利均等返済との比較も同じ金利・返済間隔とする。",
    "choices": [
      "毎回の元金返済額は原則一定で、利息分は残高に応じて減る",
      "元金返済額は原則一定だが、返済が進むほど毎回の支払利息額は増える",
      "毎回の元利返済額は原則一定で、元金返済額は返済の進行に伴い増える",
      "毎回の返済元金額は返済当初が最も多く、返済が進むほど減る"
    ],
    "answer": 0,
    "explanation": "固定金利・同じ返済間隔では、元金均等返済の元金部分は毎回一定で、残高の減少につれ利息と元利返済額が減少します。元利返済額を一定にするのは元利均等返済です。",
    "topic": "元金均等返済と元利均等返済",
    "sourceUrl": "https://www.flat35.com/hajimete/atoz/04_fpcolumn.html",
    "id": "fp2-064",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。毎期の元金返済額が一定で、元金残高の減少とともに利息は減ります。",
      "残高に応じて算出する利息は返済が進むにつれて一般に減少します。",
      "毎期の元利合計額が一定なのは元利均等返済です。",
      "元金均等返済の毎期の元金返済部分は原則一定です。"
    ],
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceLabel": "住宅金融支援機構：元利均等返済と元金均等返済",
    "additionalSourceUrls": []
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の年間可処分所得に対する貯蓄率はどれか。\n〈可処分所得を分母にする貯蓄率〉\n項目 / 条件\n給与収入（控除前、年額） / 600万円\n所得税・住民税・社会保険料（年額合計） / 150万円\n年間貯蓄額 / 90万円\n本問の貯蓄率 / 貯蓄額÷可処分所得×100。給与収入や消費額を分母としない\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n期間・分母・使える資金の指定条件を確認する。年金資格・税率/保険料率・融資審査・全法令の包括監修ではない。",
    "choices": [
      "15％",
      "20％",
      "60％",
      "25％"
    ],
    "answer": 1,
    "explanation": "可処分所得600－150＝450万円。貯蓄率90÷450×100＝20％です。分母は設問で指定した可処分所得であり、給与収入600万円や貯蓄を除いた消費額360万円ではありません。",
    "topic": "可処分所得を分母にする貯蓄率",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "id": "fp2-065",
    "revision": 5,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v119_life_plan_ratios_shortfall_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。90÷600×100＝15％は控除前給与収入を分母にしています。",
      "正解。90÷（600－150）×100＝20％です。",
      "不適切。90÷150×100＝60％は税・保険料を分母にしています。",
      "不適切。90÷（450－90）×100＝25％は年間消費額を分母にしています。"
    ],
    "sourceLabel": "日本FP協会の生活設計/家計定義／数値・比率は指定仮定の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "基本定義/生活設計と独自の計算仮定を確認。必要保障額の公式枠組みと指定提示額の検算を併記し、制度受給資格の確認件数とはしない。初回ID時期未確定。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "年2％の年1回複利で運用しながら、毎年末に100万円ずつ5回受け取る。最後の受取後の残高を0円とするために必要な現在資金を、年間受取額に乗じて求める係数はどれか。\n〈年2％・5年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.1041\n現価係数 / 0.9057\n年金終価係数 / 5.2040\n減債基金係数 / 0.1922\n年金現価係数 / 4.7135\n資本回収係数 / 0.2122\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "減債基金係数",
      "年金現価係数",
      "資本回収係数",
      "年金終価係数"
    ],
    "answer": 1,
    "explanation": "年金現価係数を用います。毎年末の受取額から現在必要な元金を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "topic": "6つの係数・年金現価係数",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "id": "fp2-066",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。将来の目標額から毎年末の積立額を求めます。",
      "正解。毎年末の受取額から現在必要な元金を求めます。",
      "不適切。現在の元金から毎年末の一定取崩額を求めます。",
      "不適切。毎年末の積立額から最後の積立直後の元利合計を求めます。"
    ],
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の条件で必要保障額を検討する基本的な考え方として、最も適切なものはどれか。\n〈遺族資金の不足を見積もる〉\n項目 / 条件\n遺族の支出見込み合計 / 3,000万円（生活費・教育費・一時費用を含む）\n遺族の収入見込み合計 / 1,500万円（公的給付等、提示額）\n使える貯蓄 / 500万円\n死亡退職金の見込み / 300万円\n除外条件 / 期間内の物価・運用・税額変動、他の資金は考慮しない\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n期間・分母・使える資金の指定条件を確認する。年金資格・税率/保険料率・融資審査・全法令の包括監修ではない。",
    "choices": [
      "遺族の生活費・教育費の合計額に、遺族年金や預貯金を加えた金額が必要保障額になる",
      "必要保障額は年収の一定倍率で決まり、遺族年金による調整は行わない",
      "死亡退職金の見込み額は、必要保障額の計算で常に無視する",
      "遺族の必要資金から遺族の収入・資産等を差し引く"
    ],
    "answer": 3,
    "explanation": "基本は遺族の支出から収入・資産等を差し引く方法です。指定条件では3,000－1,500－500－300＝700万円が不足額の目安です。公的給付・預貯金・死亡退職金は必要額へ加える側ではなく差し引く資金源です。提示額であり年金受給資格や税額を計算したものではありません。",
    "topic": "遺族資金の不足を見積もる",
    "sourceUrl": "https://www.jafp.or.jp/personal_finance/fresh/workbook/files/9_amountofsecurity.pdf",
    "id": "fp2-067",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。遺族年金や預貯金は支出へ加算せず、利用できる資金として差し引きます。",
      "不適切。年収の一定倍率だけでは支出と利用可能資金の違いを反映できません。",
      "不適切。資料の死亡退職金300万円は利用できる資金として差し引きます。",
      "正解。支出から遺族収入・資産等を差し引き、提示条件では700万円の不足です。"
    ],
    "contentReview": "v119_life_plan_ratios_shortfall_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "sourceLabel": "日本FP協会の生活設計/家計定義／数値・比率は指定仮定の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "基本定義/生活設計と独自の計算仮定を確認。必要保障額の公式枠組みと指定提示額の検算を併記し、制度受給資格の確認件数とはしない。初回ID時期未確定。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料で指定した近似式による実質利回りとして、最も適切なものはどれか。\n〈名目利回りと購買力の変化〉\n項目 / 条件\n名目運用利回り / 年2％\n同じ1年間の物価上昇率 / 3％（実績の仮定）\n本問の近似式 / 名目利回り－物価上昇率\n厳密な倍率比較 / （1＋名目利回り）÷（1＋物価上昇率）－1\n除外条件 / 税・手数料なし。政策金利や将来予想インフレ率を問わない\n法令基準日：2026年4月1日。金利・人物・条件は独自の仮定。\n基本論点の限定確認。個別契約・全法令・全改正・包括監修の完了を示すものではない。",
    "choices": [
      "約－1％",
      "約1％",
      "約5％",
      "約2％"
    ],
    "answer": 0,
    "explanation": "近似値は2％－3％＝－1％です。厳密には1.02÷1.03－1＝－1/103≒－0.9709％で、近似値との差を区別します。1年間で名目金額が増えても、その間の物価上昇を下回ると購買力は低下します。",
    "topic": "名目利回りと購買力の変化",
    "sourceUrl": "https://www.boj.or.jp/about/press/koen_2025/data/ko250130a1.pdf",
    "id": "fp2-068",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v120_remaining_life_scoped_migration",
    "choiceExplanations": [
      "正解。指定近似式では2－3＝－1％です。",
      "不適切。差の絶対値だけで符号を落としています。",
      "不適切。名目2％と物価上昇3％を加える式ではありません。",
      "不適切。2％は物価調整前の名目利回りです。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "住宅金融支援機構/日本FP協会/国税庁の限定論点。実質利回りは指定数式検算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "given_formula_internal_check_comprehensive_audit_incomplete",
    "reviewNote": "現行商品の金利/統計平均は問題に転載しない。税理士制度No9203は2026-04-01基準、通達は2025-06-01記載、取得日2026-10-15と別記。実質利回りの数式検算と公式制度照合を分離。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料を踏まえた年間の住宅資金計画として、最も適切な考え方はどれか。\n〈ローン返済以外の住宅保有費〉\n項目 / 条件\n物件 / 自宅として所有する分譲マンション\n返済中の支出 / 住宅ローン返済\n所有に伴う支出 / 固定資産税、管理費、修繕積立金、必要な修繕費\nローン完済後 / 所有と管理・維持を続ける予定\n問う範囲 / 見込む費用の種類。税率・税額・個別管理規約は問わない\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n期間・分母・使える資金の指定条件を確認する。年金資格・税率/保険料率・融資審査・全法令の包括監修ではない。",
    "choices": [
      "住宅ローン返済額だけを年間支出に計上すれば、固定資産税・修繕費は通常考慮しなくてよい",
      "購入時の諸費用は購入年の支出として計上し、それ以降の保有コストを見込まない",
      "住宅ローン完済後は管理費や修繕積立金の支払いがなくなるため、住宅関連費用はゼロとしてよい",
      "住宅ローン返済だけでなく固定資産税や修繕費も見込む"
    ],
    "answer": 3,
    "explanation": "ローン返済だけでなく所有・維持に伴う費用も見込みます。購入年の諸費用とは別に、その後の固定資産税・管理費・修繕費等を検討します。ローン完済で所有や維持管理がなくなるわけではありません。",
    "topic": "ローン返済以外の住宅保有費",
    "sourceUrl": "https://jafp.or.jp/know/fp/sheet/files/2_Income_outgo.pdf",
    "id": "fp2-069",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v119_life_plan_ratios_shortfall_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。ローン返済とは別の所有・維持費も見込む必要があります。",
      "不適切。購入時諸費用を計上しても、それ以降の保有費用が消えるわけではありません。",
      "不適切。完済後も所有と維持管理を続けるため、資料の管理・修繕等の支出は残ります。",
      "正解。固定資産税や修繕費等の保有費用を返済額と区別して計画します。"
    ],
    "sourceLabel": "日本FP協会の生活設計/家計定義／数値・比率は指定仮定の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "基本定義/生活設計と独自の計算仮定を確認。必要保障額の公式枠組みと指定提示額の検算を併記し、制度受給資格の確認件数とはしない。初回ID時期未確定。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の20年間の資金不足額はどれか。\n〈老後の年間不足と期間総額〉\n項目 / 条件\n年金等の手取り収入 / 年300万円（税・社会保険料控除後の提示額）\n生活費 / 年360万円\n別途の民間保険料 / 年15万円（生活費に含まない）\n期間 / 20年間。毎年同額\n計算条件 / 物価変動・運用益・他の収支なし。税・社会保険料を再控除しない\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n期間・分母・使える資金の指定条件を確認する。年金資格・税率/保険料率・融資審査・全法令の包括監修ではない。",
    "choices": [
      "75万円",
      "1,200万円",
      "1,500万円",
      "1,800万円"
    ],
    "answer": 2,
    "explanation": "年間不足は360＋15－300＝75万円。20年分は75×20＝1,500万円です。年金等300万円は税・社会保険料控除後の提示額で、保険料15万円はその控除済み保険料と別の民間保険料です。",
    "topic": "老後の年間不足と期間総額",
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "id": "fp2-070",
    "revision": 6,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v119_life_plan_ratios_shortfall_scoped_migration",
    "choiceExplanations": [
      "不適切。75万円は1年分の不足で、20年分へ換算していません。",
      "不適切。民間保険料を除くと（360－300）×20＝1,200万円です。",
      "正解。（360＋15－300）×20＝1,500万円です。",
      "不適切。民間保険料を二度入れると（360＋15＋15－300）×20＝1,800万円です。"
    ],
    "sourceLabel": "日本FP協会の生活設計/家計定義／数値・比率は指定仮定の検算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "reviewNote": "基本定義/生活設計と独自の計算仮定を確認。必要保障額の公式枠組みと指定提示額の検算を併記し、制度受給資格の確認件数とはしない。初回ID時期未確定。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の保険価額と保険金額の関係を表す名称として、最も適切なものはどれか。\n〈保険価額と保険金額〉\n項目 / 条件\n対象 / 同一の建物\n保険価額 / 2,000万円（本問の評価額）\n保険金額 / 1,000万円\n契約数 / 1契約のみ\n設問範囲 / 契約状態の名称。事故時支払額・比例払計算は問わない\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n基本用語と本問で指定した契約条件を確認する。個別商品約款・費用保険金・定額給付等の包括確認ではない。",
    "choices": [
      "超過保険",
      "一部保険",
      "重複保険の確定",
      "再保険"
    ],
    "answer": 1,
    "explanation": "保険金額1,000万円が保険価額2,000万円に満たないため、一部保険です。保険金額が保険価額を超える超過保険とは逆です。実際の支払額は実損払・比例払等の契約条件により、本問の数値だけから必ず損害額の半分と判断しません。",
    "topic": "保険価額と一部保険",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/home/q056.html",
    "id": "fp2-071",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "超過保険は、保険金額が保険価額を上回る状態を指します。本問は逆に少ない状態です。",
      "正解。保険金額1,000万円が保険価額2,000万円を下回るため、一部保険に該当します。実際の支払額は約款によります。",
      "重複保険は、同じ保険の目的などについて複数の保険契約が存在する場合の論点です。提示された金額だけでは確定しません。",
      "再保険は保険者が引き受けたリスクの一部を別の保険者へ移す仕組みで、一部保険の意味ではありません。"
    ],
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v113_deductible_limit_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料のノンフリート契約を1年後に継続する場合、最も適切な説明はどれか。\n〈事故区分を指定した翌契約の等級〉\n項目 / 条件\n現在の契約 / 1年契約、12等級、事故有係数適用期間0年\n当年の保険金支払 / 契約上3等級ダウン事故に分類される事故1件のみ\n継続時の条件 / この事故1件で3等級ダウン、事故有係数適用期間を3年加算\n除外条件 / 他の事故、契約中断、等級の上下限、車両/記名被保険者変更なし\n比較範囲 / 翌契約の等級と事故有係数適用期間。料率・保険料の具体額は問わない\n法令基準日：2026年4月1日。条件・行為は独自の設例。\n基本区分と明示条件の限定確認。個別商品の全約款・全免責・全法令の包括監修ではない。",
    "choices": [
      "翌契約は9等級、事故有係数適用期間3年となる",
      "保険金を受け取っても翌契約は12等級、事故有係数適用期間0年のままである",
      "事故有係数が適用されると、同じ等級の無事故係数より割引率が必ず大きくなる",
      "3等級ダウン事故でも、保険金請求はすべてノーカウントなので翌契約は13等級になる"
    ],
    "answer": 0,
    "explanation": "指定された3等級ダウン事故1件では12－3＝9等級、事故有係数適用期間は0＋3＝3年です。事故区分には1等級ダウンやノーカウントもあり、保険金請求をすべて同じ扱いにしません。割増引率は契約・商品で異なり、今回は提示した等級と期間だけを扱います。",
    "topic": "事故区分を指定した翌契約の等級",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/car/q023.html",
    "id": "fp2-072",
    "revision": 5,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。12等級から3等級下がり9等級。指定条件により事故有係数適用期間3年です。",
      "不適切。指定された事故の支払いは翌契約の等級と適用期間に影響します。",
      "不適切。事故有係数は一般に同じ等級の無事故係数より割引が小さい方向です。",
      "不適切。資料は3等級ダウン事故を指定しています。1等級ダウン/ノーカウントという別区分と混同しています。"
    ],
    "contentReview": "v117_insurance_types_grade_moral_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "sourceLabel": "日本損害保険協会の基本区分/用語・指定事故条件。定期保険は生命保険文化センター",
    "sourceCheckedDate": "2026-10-15",
    "additionalSourceUrls": [],
    "reviewNote": "新改訂設例と全選択肢を限定照合。等級は指定条件の独立検算。公表日不明/商品別料率/全約款を包括確認としない。過去に照合されたIDでも今回の改訂論点として記録し初回ID確認に加算しない。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の条件による損害保険金として、最も適切な金額はどれか。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n対象となる損害額 / 30万円\n差し引く免責金額 / 5万円\n支払限度額 / 20万円\n算定順序 / 対象損害額から免責を控除し、0円を下限とした後に限度額を適用\nその他条件 / 支払対象事故・実損払。比例払・他保険調整・費用保険金なし\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n本問で明示した差引免責方式と適用順序を使う。実際の商品は方式・約款が異なる場合があり、一般共通の支払算式とはしない。",
    "choices": [
      "20万円",
      "25万円",
      "30万円",
      "5万円"
    ],
    "answer": 0,
    "explanation": "対象損害30－免責5＝25万円。0円を下限にして支払限度額20万円を適用すると、損害保険金は20万円です。限度額適用後に免責を再度差し引きません。",
    "topic": "差引免責と支払限度額",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
    "id": "fp2-073",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v113_deductible_limit_scoped_migration",
    "verificationStatus": "given_formula_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。免責控除後25万円に支払限度額20万円を適用し、20万円です。",
      "不適切。免責は控除しましたが、支払限度額を適用していません。",
      "不適切。損害額をそのまま答え、免責と必要な限度額を適用していません。",
      "不適切。これは自己負担の免責金額であり、支払保険金ではありません。"
    ],
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料を踏まえた賠償責任保険の基本的な説明として、最も適切なものはどれか。\n〈店舗の賠償事故の原因と被害者〉\n事例 / 条件\n事故A / 店舗床の水濡れを放置し、来店客が転倒して負傷\n事故B / 販売・引渡し後の弁当の衛生上の欠陥により購入者が食中毒\n事故C / 業務中の従業員が労災事故で負傷\n事故D / 保管を引き受けた顧客のカメラを破損\n共通条件 / 事業者がそれぞれの被害者に法律上の賠償責任を負う\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "施設賠償責任保険は、施設所有者が自身の所有建物の修理費を確保するための保険である",
      "賠償責任保険では、法律上の賠償責任がない事故でも自己所有財物の損害を原則補償する",
      "法律上の損害賠償責任を負うことによる損失を対象とすることがある",
      "製造物責任に関する賠償責任保険は、製品の欠陥が原因であっても第三者の身体障害を補償しない"
    ],
    "answer": 2,
    "explanation": "賠償責任保険は、被保険者が他人に対して法律上の損害賠償責任を負う場合の損失等に備えます。自社所有の建物の修理費を直接補償する財物保険とは区別します。製品の欠陥による第三者のけがもPL保険の検討対象となり得ます。",
    "topic": "施設・生産物・使用者・受託財物の賠償責任",
    "sourceUrl": "https://www.sonpo.or.jp/sme_insurance/liability/",
    "id": "fp2-074",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "施設賠償責任保険は第三者に対する法律上の賠償責任に備えるもので、自分の建物の修理費を主な対象にしません。",
      "賠償責任保険と自己財物の損害を補償する財物保険は区別します。",
      "正解。法律上の損害賠償責任を負った場合の損失を対象とする契約があります。",
      "PL保険は製品等に起因する第三者の身体障害・財物損壊等の賠償事故を対象とすることがあります。"
    ],
    "contentReview": "v111_liability_insurance_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "sourceLabel": "日本損害保険協会：事業者の賠償責任保険",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/body/q094.html",
      "https://www.sonpo.or.jp/sme_insurance/explanation/article02/",
      "https://www.tokiomarine-nichido.co.jp/hojin/pdf/ippan_yakkan_20220101.pdf"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の火災保険に通常の地震保険を付帯するとき、設定できる地震保険金額の最大額の組合せとして最も適切なものはどれか。\n〈建物と家財の保険金額〉\n項目 / 条件\n契約方式 / 建物・家財の火災保険に地震保険を付帯\n火災保険金額（建物） / 2,400万円\n火災保険金額（家財） / 3,000万円\n対象 / 住居専用建物と通常の生活用家財\n時価等 / 時価額による追加制約は今回生じない\n他の地震保険契約 / なし\n法令基準日：2026年4月1日。人物・金額・契約条件は独自の仮定。\n地震保険の損害区分認定、個別商品の全約款・拡張特約・実際の保険金査定は今回の確認対象外。",
    "choices": [
      "建物1,200万円・家財1,500万円",
      "建物1,200万円・家財1,000万円",
      "建物2,400万円・家財1,000万円",
      "建物720万円・家財900万円"
    ],
    "answer": 1,
    "explanation": "通常の地震保険金額は火災保険金額の30～50％の範囲で、建物5,000万円・家財1,000万円が限度です。最大額は建物min(2,400×50％,5,000)＝1,200万円、家財min(3,000×50％,1,000)＝1,000万円です。建物と家財を合算して一つの限度額を適用しません。これは契約時の設定額で、事故時の支払額ではありません。",
    "topic": "地震保険金額・付帯と別々の上限",
    "sourceUrl": "https://www.mof.go.jp/about_mof/councils/jishin_benkyoukai/proceeding/material_20260128_02.pdf",
    "id": "fp2-075",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。家財の50％は1,500万円ですが、家財の上限1,000万円を超えます。",
      "正解。建物1,200万円、家財1,000万円がそれぞれの最大額です。",
      "不適切。建物の火災保険金額全額を設定しており、50％の範囲を超えます。",
      "不適切。30％を用いた設定額で、今回問う最大額ではありません。"
    ],
    "contentReview": "v112_fire_earthquake_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "sourceLabel": "財務省公開資料・日本損害保険協会：火災/地震保険の基本区分",
    "additionalSourceUrls": [
      "https://www.mof.go.jp/policy/financial_system/earthquake_insurance/jisin.htm"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.112：建物/家財、事故原因、損害保険金/費用、付帯と保険金額を限定確認。2026年1月28日資料で4月基準以前の制度を照合。個別約款・全支払条件・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の生命保険について、最も適切な説明はどれか。\n〈契約上の役割と実際の保険料負担者〉\n項目 / 条件\n契約者 / 母A（保険会社と契約）\n被保険者 / 成人の子B\n死亡保険金受取人 / 母A\n実際の保険料負担者 / 父C（全額負担、途中変更なし）\n給付 / Bの死亡時にAが一時金として受領\n前提 / A・B・Cは別人で国内居住の個人。税額・控除額は問わない\n法令基準日：2026年4月1日。人物・契約条件は独自設例。\n明示した条文/課税区分の限定確認。全法令・全約款・個別請求/税額の包括監修ではない。",
    "choices": [
      "保険金受取人は、原則として保険の対象となる被保険者と同一人である",
      "被保険者は保障の対象となる人",
      "契約者は、保険事故が起きたとき保険金を受け取る者として必ず指定される",
      "契約者と保険金受取人の組合せは、保険金を受け取った場合の課税関係に影響しない"
    ],
    "answer": 1,
    "explanation": "被保険者Bは、生死等が保険の対象となる人です。契約者A・受取人Aとは別です。課税関係は契約者名義だけでなく実際の保険料負担者を確認します。与件では被保険者B・負担者C・受取人Aがすべて別人のため、死亡保険金は贈与税の対象です。契約者Aと受取人Aが同じという理由で所得税とは判断しません。",
    "topic": "契約上の役割と実際の保険料負担者",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1750.htm",
    "id": "fp2-076",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。資料では被保険者はB、死亡保険金受取人はAで、同一人ではありません。",
      "正解。被保険者Bはその生死等が保険の対象となる人です。",
      "不適切。契約者は契約の当事者で、必ず保険金受取人になるという定義ではありません。",
      "不適切。死亡保険金の課税関係は実際の保険料負担者・被保険者・受取人の関係で変わります。"
    ],
    "contentReview": "v116_consent_limitation_roles_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "additionalSourceUrls": [
      "https://jili.or.jp/knows_learns/basic/whatis.html",
      "https://laws.e-gov.go.jp/law/420AC0000000056"
    ],
    "sourceLabel": "保険法38条/95条限定照合、または国税庁1750（2026年4月1日現在）",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "NTA law basis2026-04-01; all-different individual death payment; role definitions, contract name vs actual payer; ID初回確認時期未確定。条文照合と基準日時点全改正/個別契約監修は区別。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料を踏まえた解約返戻金の一般的な説明として、最も適切なものはどれか。\n〈解約と解約返戻金〉\n項目 / 条件\n検討事項 / 生命保険主契約を途中で解約\n金額の確認 / 保険種類・契約条件・経過年数ごとの返戻金額を確認\n保障の扱い / 解約した元の契約の保障は終了\n比較基準 / 返戻金と、その時点までの払込保険料合計を区別\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "契約の種類や解約時点によって額が異なり、返戻金がない場合もある",
      "終身保険は解約して返戻金を受け取った後も、元の契約の死亡保障が続く",
      "解約返戻金は、解約時点によらず契約時に定めた同じ額となる",
      "解約返戻金がある契約では、払込保険料合計を必ず全額回収できる"
    ],
    "answer": 0,
    "explanation": "解約返戻金の有無・金額は保険種類や経過期間等で異なります。返戻金があっても払込保険料合計より少ない場合があります。解約した元の契約は消滅し、以降の保障はなくなります。",
    "topic": "解約と解約返戻金",
    "sourceUrl": "https://www.jili.or.jp/knows_learns/q_a/life_insurance/160.html",
    "id": "fp2-077",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。契約条件・経過期間で金額が異なり、返戻金がないこともあります。",
      "不適切。解約した契約の保障は終了します。払込満了後の継続と混同しています。",
      "不適切。契約後の経過年数等によって解約返戻金額は異なります。",
      "不適切。返戻金は払込保険料合計を下回る場合があり、元本保証ではありません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の行為のうち、保険のモラルリスクの典型例として最も適切なものはどれか。\n〈保険制度を不正に利用するリスク〉\n項目 / 条件\n行為A / 実際の事故被害を写真と修理見積りで正確に申告\n行為B / 補償内容と保険料を比較して契約を選ぶ\n行為C / 事故を防ぐため運転や設備管理を改善\n行為D / 保険金を不正に得る目的で、発生していない事故を故意に申告\n問う範囲 / 道徳的危険の意味。個別の刑罰・解除判断は問わない\n法令基準日：2026年4月1日。条件・行為は独自の設例。\n基本区分と明示条件の限定確認。個別商品の全約款・全免責・全法令の包括監修ではない。",
    "choices": [
      "行為A：実際の損害を正確に申告する",
      "行為B：補償と保険料を比較する",
      "行為C：事故予防を行う",
      "行為D：保険金の不正取得を目的に虚偽の事故を申告する"
    ],
    "answer": 3,
    "explanation": "モラルリスクは、保険金の不正取得を目的とする事故の偽装など、保険制度を不正に利用する道徳的危険です。資料では故意の虚偽申告である行為Dが該当します。正確な請求、契約比較、事故予防そのものを不正利用と扱いません。",
    "topic": "保険制度を不正に利用するリスク",
    "sourceUrl": "https://www.sonpo.or.jp/wakaru/word/",
    "id": "fp2-078",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。実際の事故を正確に申告する通常の請求です。",
      "不適切。保障と負担を比較する行為自体は保険の不正利用ではありません。",
      "不適切。事故防止は危険を減らす取組で、不正取得の行為ではありません。",
      "正解。不正取得を目的とする故意の事故偽装が道徳的危険の典型です。"
    ],
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/about/efforts/reduction/fuseiseikyu/index.html"
    ],
    "sourceLabel": "日本損害保険協会の基本区分/用語・指定事故条件。定期保険は生命保険文化センター",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v117_insurance_types_grade_moral_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂設例と全選択肢を限定照合。等級は指定条件の独立検算。公表日不明/商品別料率/全約款を包括確認としない。過去に照合されたIDでも今回の改訂論点として記録し初回ID確認に加算しない。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料のような自動車事故における自賠責保険の基本的な対象として、最も適切なものはどれか。\n〈自動車事故で区別する損害〉\n損害・場面 / 条件\n事故 / 国内の公道で契約自動車が第三者の車に衝突\n相手の身体 / 無関係の第三者が負傷し、法律上の賠償責任が生じた\n相手の財物 / 第三者所有の車や塀を損壊し、法律上の賠償責任が生じた\n本人の身体 / 契約自動車の運転者本人のけが\n本人の車両 / 契約自動車自体の修理費\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "対物事故について、相手の車両修理費を損害額に応じて補償する",
      "運転者本人の単独事故によるけがを、人身傷害保険と同様に補償する",
      "自賠責保険は、他人の死傷だけでなく相手の建物損害も同じ限度額で補償する",
      "自動車事故による他人の死傷に係る所定の損害賠償責任を補償する"
    ],
    "answer": 3,
    "explanation": "自賠責保険は他人の生命・身体の損害への所定の賠償責任に備えます。相手の車や塀の修理費は対象外です。単独事故の運転者本人のけがを人身傷害保険と同じように補償する制度でもありません。",
    "topic": "自賠責と任意自動車保険の対象区分",
    "sourceUrl": "https://www.mlit.go.jp/jidosha/anzen/04relief/jibai/insurance.html",
    "id": "fp2-079",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "他人の車両修理費等の対物損害は、自賠責ではなく任意の対物賠償保険などで備えます。",
      "自賠責保険は運転者本人のけがを補償する人身傷害保険ではありません。",
      "相手の建物等の物損は自賠責の補償対象外で、対人と同じ限度額で補償されません。",
      "正解。自賠責は交通事故により他人を死傷させた場合の法律上の賠償責任に対し、所定の限度額内で支払われます。"
    ],
    "contentReview": "v111_liability_insurance_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "sourceLabel": "国土交通省：自賠責の人身事故補償",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/car/about.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の比較について、最も適切な記述はどれか。\n〈月払と年払の年間負担〉\n項目 / 条件\n比較対象 / 同じ保障内容・保障期間の生命保険の見積り\n月払 / 月額10,000円を12回\n年払 / 年額114,000円を1回\n保障期間 / どちらの方法でも10年間。中途解約・失効・払込方法変更なし\n問う範囲 / 提示額の年間合計。全商品に同じ割引率を適用するとはしない\n法令基準日：2026年4月1日。条件・金額は独自の学習用設例。\n基本的な仕組みと明示条件を確認する。商品別全約款・全法令・税務の包括監修ではない。",
    "choices": [
      "月払と年払の年間総支払額は同じ120,000円である",
      "月払は年120,000円、年払は年114,000円であり、年払が6,000円少ない",
      "月払にすると保障期間も10年間から1か月に変わる",
      "年払114,000円は10年間の保険料すべてを契約時に払う一時払を意味する"
    ],
    "answer": 1,
    "explanation": "月払の年間合計は10,000円×12回＝120,000円。年払は114,000円で、差は6,000円です。年払は毎年1回払う方法であり、保険期間全体の保険料を契約時に1回払う一時払とは異なります。払込頻度と保障期間も別に確認します。",
    "topic": "月払と年払の年間負担",
    "sourceUrl": "https://www.jili.or.jp/knows_learns/basic/insurance/63.html",
    "id": "fp2-080",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v115_medical_living_payment_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。年払の提示額は114,000円で、月払12回の合計とは異なります。",
      "正解。120,000－114,000＝6,000円です。契約の提示条件に基づく比較です。",
      "不適切。与件の保障期間はどちらも10年間です。毎月の払込みは毎月の更新を意味しません。",
      "不適切。年払は毎年1回の払込みであり、保険期間全体の一時払とは異なります。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "生命保険文化センター：医療・生前給付・保険料払込の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.115：給付対象日数/余命条件/全額請求/控除/払込頻度と期間を独自表で限定確認。新改訂内容照合と独立算術を分離。国税庁は給付構造の補助照合のみで税務移行を計上しない。商品約款と基準日法令全体は包括未確認。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料のPBR（株価純資産倍率）として、最も適切なものはどれか。\n〈同一の株式単位で比較するPBR〉\n項目 / 条件\n株価 / 2026年4月1日の提示株価 2400円\nEPS / 2025年1～12月の実績1株当たり当期純利益 160円\nBPS / 2025年末実績の1株当たり純資産 800円\n年間1株配当 / 2025年1～12月の実績合計 48円\n普通株式のみ。EPS・BPSは必要な調整後の提示値。株式分割/併合、優先株、自己株式数の追加計算なし。\n配当は税引前。手数料・個人税額・売買差益なし。実績配当の将来継続を保証しない。\n法令基準日：2026年4月1日。企業・金額は独自仮定。指標の数学/定義確認であり、実企業の会計・投資判断・税法改正の包括監修ではない。",
    "choices": [
      "15倍",
      "3倍",
      "0.3333倍",
      "50倍"
    ],
    "answer": 1,
    "explanation": "PBR（株価純資産倍率）＝株価÷BPS（1株当たり純資産）です。2,400円÷800円＝3倍。15倍はPER（株価÷EPS）、50倍は株価÷年間配当の値で、PBRではありません。",
    "topic": "PBRとPERの分母の違い",
    "sourceUrl": "https://port.jpx.co.jp/jpxhp/portdocs/beginner_a_03.html",
    "id": "fp2-081",
    "revision": 5,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v217_equity_pbr_diversity",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。2,400円÷160円＝15倍はPERです。",
      "正解。2,400円÷800円＝3倍がPBRです。",
      "不適切。800円÷2,400円≒0.3333はPBRの逆数です。",
      "不適切。2,400円÷48円＝50倍は株価を年間配当で割った値です。"
    ],
    "additionalSourceUrls": [
      "https://www.jpx.co.jp/glossary/ka/73.html"
    ],
    "sourceLabel": "JPXの株式指標解説／独自提示額の独立検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "同じPERの数値差し替え設問を、PBRとPERの区別を問う問題に変更。提示数値・選択肢を独立検算。法令改正や実企業の投資判断の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料のPBRとして、最も適切なものはどれか。\n〈同一の株式単位で比較するPBR〉\n項目 / 条件\n株価 / 2026年4月1日の提示株価 1800円\nEPS / 2025年1～12月の実績1株当たり当期純利益 150円\nBPS / 2025年末実績の1株当たり純資産 900円\n年間1株配当 / 2025年1～12月の実績合計 45円\n普通株式のみ。EPS・BPSは必要な調整後の提示値。株式分割/併合、優先株、自己株式数の追加計算なし。\n配当は税引前。手数料・個人税額・売買差益なし。実績配当の将来継続を保証しない。\n法令基準日：2026年4月1日。企業・金額は独自仮定。指標の数学/定義確認であり、実企業の会計・投資判断・税法改正の包括監修ではない。",
    "choices": [
      "2倍",
      "12倍",
      "0.5倍",
      "40倍"
    ],
    "answer": 0,
    "explanation": "PBRの計算は株価÷BPSです。PBR:1800÷900=2倍。倍率と百分率を区別します。提示した実績年度・1株単位の値を用い、会社全体の利益や予想値へ置き換えません。指標だけで値上がりや割安が保証されるわけではありません。",
    "topic": "PBRの分母・単位・年度",
    "sourceUrl": "https://port.jpx.co.jp/jpxhp/portdocs/beginner_a_03.html",
    "id": "fp2-082",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v121_equity_metrics_scoped_migration",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。PBR:1800÷900=2倍。",
      "不適切。PER:1800÷150=12倍。",
      "不適切。BPS÷株価:900÷1800=0.5倍（逆数）。",
      "不適切。株価÷年間配当:1800÷45=40倍。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "JPXの株式指標定義／独自提示額の独立検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂の指定数値/全選択肢を内部検算。公式定義との対応を併記し8問を法令改正照合件数に数えない。初回ID時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の債券の税引前年間利子額はいくらか。\n〈額面を基準とする利子〉\n項目 / 条件\n額面 / 100万円\n固定表面利率 / 年1.5％\n期間 / 利子計算上の満1年\n購入価格 / 年間利子の計算に用いない\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "1,500円",
      "150,000円",
      "15,000円",
      "30,000円"
    ],
    "answer": 2,
    "explanation": "額面100万円×年1.5％＝15,000円。率を小数に直して額面に掛けます。購入価格で割る利回りとは区別します。",
    "topic": "額面を基準とする利子",
    "sourceUrl": "https://www.jpx.co.jp/glossary/sa/519.html",
    "id": "fp2-083",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "choiceExplanations": [
      "不適切。1,500円は1.5％を0.15％と扱った値です。",
      "不適切。150,000円は1.5％を15％と扱った値です。",
      "正解。1,000,000×0.015＝15,000円です。",
      "不適切。30,000円は2年分で、本問の1年分とは違います。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "JSDA/JPXの限定定義と提示条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の資産全体の1年間の収益率はどれか。\n〈期首比率による加重平均〉\n項目 / 条件\n期首投資比率 / A：40％、B：60％\n1年間の実現収益率 / A：1％、B：5％\n計算式 / 期首比率×各収益率の合計\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n同じ円建て。提示収益率は値上がり・配当等を含む総収益率。途中の追加投資・引出し・配分変更・再投資、手数料・税額なし。期待値と実現値を区別。",
    "choices": [
      "3.4％",
      "3.0％",
      "1.0％",
      "5.0％"
    ],
    "answer": 0,
    "explanation": "期首比率を小数で掛け、0.4％＋3.0％＝3.4％。期末比率に置き換えません。",
    "topic": "期首比率による加重平均",
    "sourceUrl": "",
    "id": "fp2-084",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。0.4×1＋0.6×5＝3.4％です。",
      "不適切。3％は（1＋5）÷2という単純平均です。",
      "不適切。1％はAだけの収益率です。",
      "不適切。5％はBだけの収益率です。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "提示加重平均式の内部検算（法令一次資料照合ではない）",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料と標準偏差に関する説明として、最も適切なものはどれか。\n〈平均と標準偏差の区別〉\n項目 / 条件\n等確率の3状態の収益率 / A：2％、4％、6％ ／ B：0％、4％、8％ ／ C：4％、4％、4％\n各状態の確率 / それぞれ3分の1\n分散の計算 / 平均との差の2乗の平均（3で割る。不偏分散ではない）\n標準偏差 / 分散の正の平方根。収益率の％ポイント単位\n提示した3状態が全状態で等確率という数学モデル。正規分布や将来の実測値への一致を仮定しない。\n法令基準日：2026年4月1日。数値・資産は独自例。公式資料の図表・文章の転載ではない。\n円建て同一期間の税引前総収益率。途中の追加投資・引出し・配分変更、手数料・税、レバレッジなし。",
    "choices": [
      "標準偏差が0なら、期待収益率も必ず0になる",
      "標準偏差が大きいほどリターンの変動幅は一般に大きい",
      "標準偏差はリターンの平均値を表す指標であり、リターンのばらつきを測るものではない",
      "標準偏差が大きい商品ほど、元本割れの可能性が低いことが保証される"
    ],
    "answer": 1,
    "explanation": "平均はいずれも4％。Aの分散（4＋0＋4）÷3＝8/3、Bは（16＋0＋16）÷3＝32/3、Cは0（単位は％ポイントの2乗）。標準偏差は約1.63、約3.27、0％ポイントです。標準偏差はすべての投資リスクを網羅する指標ではありません。",
    "topic": "平均と標準偏差の区別",
    "sourceUrl": "https://www.stat.go.jp/naruhodo/10_tokucho/chirabari.html",
    "id": "fp2-085",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v124_diversification_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。Cの標準偏差は0ですが、平均収益率は4％です。",
      "正解。Bは標準偏差約3.27％ポイント、Aは約1.63％ポイントで、平均4％からのばらつきはBの方が大きいです。",
      "不適切。平均は3資産とも4％ですが、標準偏差は違います。標準偏差は平均値そのものではありません。",
      "不適切。大きな標準偏差はばらつきの大きさを示すだけで、元本割れの少なさを保証しません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "金融庁/総務省統計局の定義と独自指定モデルの検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の限定照合3/指定モデル内部検算3。公式背景の参照を重複加算しない。法令改正照合0、ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料のAさんが利用するNISAつみたて投資枠の、1人当たりの年間投資上限額はどれか。残りの買付可能額ではなく、年間上限額を答えること。\n〈年間枠と未使用額〉\n項目 / 条件\n対象者・時点 / 2026年1月1日時点で30歳の国内居住者。法令基準日2026年4月1日\n対象制度 / 2024年1月開始のNISA。対象商品・買付方法の要件を満たす\n2026年の買付額 / つみたて投資枠で取得額60万円、成長投資枠の買付なし\n総枠の状況 / 年間枠の利用を妨げるほど保有しておらず、売却なし\n法令基準日2026年4月1日、確認日2026年10月15日。設例・数値は独自仮定。\nNISAは2024年開始の成人向け制度を対象とし、2027年以降の未成年者制度を本問へ混ぜない。",
    "choices": [
      "60万円",
      "360万円",
      "240万円",
      "120万円"
    ],
    "answer": 3,
    "explanation": "つみたて投資枠は年間120万円。提示条件では残り60万円ですが、問われた上限額は120万円です。未使用の年間投資枠は翌年へ繰り越せません。年間枠と非課税保有限度額の両方を守る必要があります。",
    "topic": "年間枠と未使用額",
    "sourceUrl": "https://www.fsa.go.jp/policy/nisa2/know/index.html",
    "id": "fp2-086",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "財務省・金融庁の制度基本事項と限定適用条件照合",
    "choiceExplanations": [
      "不適切。60万円は提示された既買付額で、年間上限額ではありません。",
      "不適切。360万円はつみたて120万円と成長240万円の年間枠の合計です。",
      "不適切。240万円は成長投資枠の年間上限です。",
      "正解。つみたて投資枠の年間上限は120万円。既買付60万円との差60万円は別の残額です。"
    ],
    "contentReview": "v126_nisa_bonds_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "additionalSourceUrls": [
      "https://www.mof.go.jp/tax_policy/publication/brochure/zeisei23/01.html",
      "https://www.jsda.or.jp/nisa/faq/"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式制度論点4問。法令全文/全歴史改正未確認。補助計算は重複加算なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の制度の非課税保有限度額（全体の総枠）はどれか。残額ではなく全体の上限を答えること。\n〈総枠と時価評価〉\n項目 / 条件\n対象者・基準日 / 2026年1月1日時点で40歳の国内居住者。2026年4月1日基準\n対象制度 / 2024年1月開始のNISA\n保有商品の取得額 / つみたて投資枠400万円、成長投資枠600万円、計1,000万円\n同商品の時価 / 計1,400万円（売却なし）\n旧制度保有 / 2023年までの旧NISA保有商品は本問の取得額に含めない\n法令基準日2026年4月1日、確認日2026年10月15日。設例・数値は独自仮定。\nNISAは2024年開始の成人向け制度を対象とし、2027年以降の未成年者制度を本問へ混ぜない。",
    "choices": [
      "1,800万円",
      "360万円",
      "240万円",
      "1,200万円"
    ],
    "answer": 0,
    "explanation": "総枠は簿価（取得額）ベース1,800万円、うち成長投資枠は1,200万円です。提示保有計1,000万円なら総枠の余地は800万円、成長部分の余地は600万円。ただし1年にこれを全部買えるわけではなく年間120万円/240万円の制限も別にあります。値上がり400万円を取得額へ加算しません。",
    "topic": "総枠と時価評価",
    "sourceUrl": "https://www.fsa.go.jp/policy/nisa2/know/index.html",
    "id": "fp2-087",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "財務省・金融庁の制度基本事項と限定適用条件照合",
    "choiceExplanations": [
      "正解。全体の総枠は取得額ベース1,800万円です。時価1,400万円を基準に減らす枠ではありません。",
      "不適切。360万円は年間の2枠合計であり、保有総枠ではありません。",
      "不適切。240万円は成長投資枠の年間上限です。",
      "不適切。1,200万円は全体総枠の内数である成長投資枠の保有限度額です。"
    ],
    "contentReview": "v126_nisa_bonds_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "additionalSourceUrls": [
      "https://www.mof.go.jp/tax_policy/publication/brochure/zeisei23/01.html",
      "https://www.jsda.or.jp/nisa/faq/"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式制度論点4問。法令全文/全歴史改正未確認。補助計算は重複加算なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の税金・費用控除前の売却益はいくらか。\n〈取得代金と売却益〉\n項目 / 条件\n購入 / 100株、1株1,250円\n売却 / 同じ100株すべて、1株1,400円\n保有中 / 株式分割・併合、配当、追加売買なし\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "140,000円",
      "15,000円",
      "1,500円",
      "125,000円"
    ],
    "answer": 1,
    "explanation": "取得代金125,000円、売却代金140,000円、差15,000円。1株差150円に数量100株を掛け、元本部分を利益に含めません。",
    "topic": "取得代金と売却益",
    "sourceUrl": "",
    "id": "fp2-088",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "choiceExplanations": [
      "不適切。140,000円は売却代金全体です。",
      "正解。（1,400－1,250）×100＝15,000円です。",
      "不適切。1,500円は数量10株で計算した値です。",
      "不適切。125,000円は取得代金全体です。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定条件の内部検算（法令照合ではない）",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の変化の説明として、最も適切なものはどれか。\n〈通貨ペアの変化〉\n項目 / 条件\n時点A / 1米ドル＝140円\n時点B / 1米ドル＝150円\n比較対象 / 円と米ドルの相対的価値のみ\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n外貨額の増減、利息、売買、追加投資・引出し、手数料、税額は考慮しない。",
    "choices": [
      "円高・ドル安",
      "円とドルがともに上昇",
      "円安・ドル高",
      "為替変動なし"
    ],
    "answer": 2,
    "explanation": "1米ドルの購入に必要な円が増えると、円の対ドル価値は下がります。円安・ドル高です。",
    "topic": "通貨ペアの変化",
    "sourceUrl": "https://www.boj.or.jp/about/education/oshiete/intl/g18.htm",
    "id": "fp2-089",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。1米ドルを買う円が増えるので、円高・ドル安とは逆です。",
      "不適切。この通貨ペアの相対価値について、両通貨が互いに同時に上昇することはありません。",
      "正解。1米ドルに必要な円が増え、円安・ドル高です。",
      "不適切。140円から150円へ変化しています。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "日本銀行の円高・円安定義／独自仮定の換算検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の運用管理費用（信託報酬）について、最も適切な説明はどれか。\n〈信託報酬の発生時期〉\n項目 / 条件\n購入時手数料 / 0円（架空ファンドの指定条件）\n信託報酬 / 年率0.55％、保有中の信託財産から日々控除\n換金時の信託財産留保額 / なし（架空ファンドの指定条件）\n費用の表示 / 年率0.55％は仮定した税込費用率で、税率ではない\n実際の費用・率・計算方法は商品と販売会社の目論見書等で確認する。本問は指定費用の性質を問う。\n法令基準日：2026年4月1日。確認日と資料公表日を区別し、基本定義・指定例の限定点検として扱う。\n設例・表は独自表現で、公式資料の文章や画像を転載しない。全商品約款や全法令改正の包括監修ではない。",
    "choices": [
      "信託報酬は投資信託の基準価額が上昇した場合にのみ計算される税金である",
      "信託報酬は投資信託の解約時だけ支払う費用で、日々の基準価額には影響しない",
      "投資信託の運用・管理にかかる継続的な費用である",
      "信託報酬は投資信託を購入するときだけ支払い、保有期間中には発生しない費用である"
    ],
    "answer": 2,
    "explanation": "信託報酬は信託財産から日々差し引かれ、基準価額に反映されます。購入時手数料が0でも信託報酬等まで0とは限りません。すでに控除後の基準価額で収益を計算する場合、同じ信託報酬を再度差し引いて二重控除しません。",
    "topic": "信託報酬の発生時期",
    "sourceUrl": "https://www.imaj.or.jp/study/investmenttrust/costtax/cost.html",
    "id": "fp2-090",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v125_funds_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。信託報酬は相場上昇時だけの税金ではなく、運用・管理の継続費用です。",
      "不適切。解約時だけの費用ではなく、保有中に日々控除されます。",
      "正解。運用・管理の継続費用として信託財産から間接的に負担します。",
      "不適切。購入時手数料とは別で、購入時だけ払って保有中は発生しない費用ではありません。"
    ],
    "additionalSourceUrls": [
      "https://www.jpx.co.jp/faq/listed_product.html"
    ],
    "sourceLabel": "公式発行元の基本定義・費用・取引方法の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式定義7問。指定数値の補助検算は別の法令改正照合件数に加算しない。単純再確認0、ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料の条件によるAさんの2026年分の事業所得はいくらか。\n〈売上原価と事務所家賃〉\n項目 / 条件\n対象者 / 日本の居住者で、小売業を営む個人Aさん\n総収入金額 / 500万円（当年の売上。ほかの収入なし）\n商品仕入額 / 120万円。期首・期末の商品在庫はいずれも0円で、当年仕入商品はすべて販売済み\n仕入れの条件 / 返品・値引き・割戻し・自家消費なし。売上原価は120万円\n事務所家賃 / 60万円。親族ではない貸主への事業専用事務所の当年分家賃で、全額当年の必要経費\n追加条件 / 白色申告。家内労働者等の特例・専従者控除なし。ほかの経費・調整なし\n金額の単位は万円。家賃は前払分や家事使用分を含めず、当年必要経費と確定した額。",
    "choices": [
      "380万円",
      "320万円",
      "440万円",
      "500万円"
    ],
    "answer": 1,
    "explanation": "在庫が期首・期末とも0円で、仕入商品はすべて当年販売済みなので、指定条件の売上原価は120万円です。必要経費は120＋60＝180万円、事業所得は500－180＝320万円。一般に仕入額とその年の売上原価が常に一致するわけではありません。所得控除・所得税・税引後手取りとは別の段階です。",
    "topic": "売上原価と事務所家賃",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1350.htm",
    "id": "fp2-091",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v129_expense_scoped_migration",
    "choiceExplanations": [
      "不適切。500－120＝380万円は家賃60万円を引き忘れた額です。",
      "正解。500－（120＋60）＝320万円です。",
      "不適切。500－60＝440万円は売上原価120万円を引き忘れた額です。",
      "不適切。500万円は売上原価と家賃の両方を引く前の収入です。"
    ],
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2210.htm"
    ],
    "sourceLabel": "国税庁の所得計算・必要経費の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂の基本事項限定照合1/提示条件の内部検算3。家内労働者特例・施行前の改正額を使用しない。法令全文・全例外は未確認。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "次の資料について、2026年分の給与所得の金額として最も適切なものはどれか。\n〈給与所得の計算資料〉\n項目 / 内容\n給与収入 / 750万円\n天引きされた社会保険料 / 80万円\n源泉所得税 / 40万円\n給与所得控除額（この収入区分） / 給与収入×10％＋110万円\n対象の計算 / 2026年12月1日以後の年末調整\n所得金額調整控除・特定支出控除などの調整はない。",
    "choices": [
      "525万円",
      "185万円",
      "565万円",
      "485万円"
    ],
    "answer": 2,
    "explanation": "給与所得控除額は750×10％＋110＝185万円、給与所得は750－185＝565万円です。525万円は源泉所得税40万円を誤って差し引いた額、185万円は給与所得控除額、485万円は社会保険料80万円を誤って差し引いた額です。社会保険料控除は給与所得算出後の所得控除であり、源泉所得税は給与所得の経費ではありません。2026年分でも750万円の給与所得控除の計算式は変わりません。",
    "topic": "給与所得",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm",
    "id": "fp2-092",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v82_limited_primary_source_and_conditions_review",
    "choiceExplanations": [
      "誤答。給与所得控除額は750×10％＋110＝185万円、給与所得は750－185＝565万円です。525万円は源泉所得税40万円を誤って差し引いた額、185万円は給与所得控除額、485万円は社会保険料80万円を誤って差し引いた額です。社会保険料控除は給与所得算出後の所得控除であり、源泉所得税は給与所得の経費ではありません。2026年分でも750万円の給与所得控除の計算式は変わりません。",
      "誤答。給与所得控除額は750×10％＋110＝185万円、給与所得は750－185＝565万円です。525万円は源泉所得税40万円を誤って差し引いた額、185万円は給与所得控除額、485万円は社会保険料80万円を誤って差し引いた額です。社会保険料控除は給与所得算出後の所得控除であり、源泉所得税は給与所得の経費ではありません。2026年分でも750万円の給与所得控除の計算式は変わりません。",
      "正解。給与所得控除額は750×10％＋110＝185万円、給与所得は750－185＝565万円です。525万円は源泉所得税40万円を誤って差し引いた額、185万円は給与所得控除額、485万円は社会保険料80万円を誤って差し引いた額です。社会保険料控除は給与所得算出後の所得控除であり、源泉所得税は給与所得の経費ではありません。2026年分でも750万円の給与所得控除の計算式は変わりません。",
      "誤答。給与所得控除額は750×10％＋110＝185万円、給与所得は750－185＝565万円です。525万円は源泉所得税40万円を誤って差し引いた額、185万円は給与所得控除額、485万円は社会保険料80万円を誤って差し引いた額です。社会保険料控除は給与所得算出後の所得控除であり、源泉所得税は給与所得の経費ではありません。2026年分でも750万円の給与所得控除の計算式は変わりません。"
    ],
    "taxYear": 2026,
    "sourceLabel": "国税庁：給与所得控除",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.82：対象年・与件・全選択肢・解説を公式資料で再確認。過去の公式照合履歴があるため新規初回照合に加算しない。包括監修未完了。",
    "sourceCheckedDate": "2026-10-14"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税で、次の資料に基づく通常の医療費控除額として最も適切なものはどれか。\n〈医療費と補てん保険金の資料〉\n項目 / 内容\n総所得金額等 / 300万円\n入院費 / 12万円\nその他の対象医療費 / 18万円\n入院を給付対象とする保険金 / 15万円\n保険金のうち入院費を超える3万円は、その他の医療費から差し引かない。他の補てん金・調整はない。",
    "choices": [
      "5万円",
      "8万円",
      "10万円",
      "20万円"
    ],
    "answer": 1,
    "explanation": "対象医療費は合計30万円です。入院に対応する保険金15万円は、給付対象となった入院費12万円を限度に差し引き、余る3万円をその他の医療費から差し引きません。総所得金額等300万円なので差引基準額は10万円です。したがって30万円－12万円－10万円＝8万円です。",
    "topic": "医療費控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm",
    "id": "fp2-093",
    "revision": 59,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：No.1120 医療費を支払ったとき",
    "contentReview": "v89_2026_basic_and_medical_deduction_scoped_primary_review",
    "taxYear": 2026,
    "sourceCheckedDate": "2026-10-14",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.89：2026年分の基礎控除所得区分、医療費控除の総所得金額等5％基準、補てん保険金の対応限度を公式照合。包括監修未完了。",
    "choiceExplanations": [
      "不適切。保険金15万円の全額を医療費合計から差し引いた場合の金額です。余剰3万円は他の医療費から差し引きません。",
      "正解。30万円－補てん対象限度12万円－10万円＝8万円です。",
      "不適切。差引基準額10万円を控除額そのものと取り違えています。",
      "不適切。補てん保険金または差引基準額の一方を適切に反映していません。"
    ]
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税で、次の資料に基づく生命保険料控除額の合計として、最も適切なものはどれか。\n〈生命保険料控除の計算資料〉\n項目 / 内容\n前提 / 納税者に23歳未満の扶養親族がいる\n新契約・一般生命保険料 / 年10万円\n新契約・介護医療保険料 / 年6万円\n新契約・個人年金保険料 / 年3万円\nいずれも控除対象となる契約とし、旧契約の支払はない。",
    "choices": [
      "10万円",
      "11万5,000円",
      "12万円",
      "13万5,000円"
    ],
    "answer": 1,
    "explanation": "一般生命保険料は2026年分特例により10万円×1/4＋3万円＝5万5,000円、介護医療保険料は6万円×1/4＋2万円＝3万5,000円、個人年金保険料は3万円×1/2＋1万円＝2万5,000円です。合計は11万5,000円で、全体上限12万円以下のためそのまま控除額となります。",
    "topic": "生命保険料控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1140.htm",
    "id": "fp2-094",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v86_2026_life_insurance_deduction_scoped_primary_review",
    "choiceExplanations": [
      "不適切。一般生命保険料に2026年分特例を適用しない場合の計算に近い金額です。",
      "正解。5万5,000円＋3万5,000円＋2万5,000円＝11万5,000円です。",
      "不適切。12万円は全体の上限であり、計算額が常に12万円になるわけではありません。",
      "不適切。区分ごとの計算式と全体上限を適用していません。"
    ],
    "taxYear": 2026,
    "sourceLabel": "国税庁：No.1140 生命保険料控除",
    "sourceCheckedDate": "2026-10-14",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.86：2026年分の23歳未満扶養親族に係る新一般生命保険料控除の特例、介護医療・個人年金との区別、合計上限12万円を公式照合。包括監修未完了。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料のような個人の所得区分について、最も適切な記述はどれか。\n〈配当所得と他の所得区分〉\n項目 / 条件\n納税者・対象 / 日本の居住者である個人。法人の税務ではない\n配当の例 / 内国法人の普通株式から受ける通常の剰余金配当\n除外 / 資本剰余金の減少、清算分配、みなし配当、事業に属する特殊取引は扱わない\n他の取引の例 / 個人保有株の通常の売却、居住用建物の貸付賃料\n所得区分の限定確認。申告方式の選択・税率・必要経費・損益通算の全条件は別に確認する。\n法令基準日2026年4月1日、確認日2026年10月15日。設例・表は独自表現。\n税務は国税庁の令和8年4月1日現在表示の主要論点を限定照合し、全法律全文・全改正や包括監修と区別する。",
    "choices": [
      "個人が受け取る上場株式等の売却益は、原則として配当所得である",
      "貸付用不動産の賃料収入は、原則として配当所得である",
      "法人から受け取る剰余金の配当などが該当する",
      "法人から受け取る剰余金の配当は、原則として雑所得である"
    ],
    "answer": 2,
    "explanation": "配当は株式の保有に伴う分配で、株式を売却した際の譲渡益や、不動産貸付の賃料とは所得区分が異なります。配当所得だから必ず配当控除を受けられるわけではなく、申告方式・発行体・分配の種類等で配当控除の適否が変わります。",
    "topic": "配当所得と他の所得区分",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1330.htm",
    "id": "fp2-095",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。株式の通常の売却益は株式等に係る譲渡所得等であり、配当所得ではありません。",
      "不適切。建物の貸付による賃料は原則として不動産所得です。",
      "正解。内国法人から受ける通常の剰余金配当などが配当所得に該当します。",
      "不適切。通常の剰余金配当を原則雑所得へ分類する説明は誤りです。"
    ],
    "contentReview": "v127_dividends_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1463.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1370.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1250.htm"
    ],
    "sourceLabel": "公式一次資料の配当/J-REIT/所得区分限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式論点3、単純再確認0、ID初回時期未確定。法律全文/全改正未確認。金融2に加え共通配当論点の税1をまとめて点検。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税で、次の特定親族について適用される特定親族特別控除額として、最も適切なものはどれか。\n〈2026年分の扶養・特定親族に関する資料〉\n項目 / 内容\n親族の年齢 / 20歳\n親族の合計所得金額 / 90万円超95万円以下\n納税者の合計所得金額 / 900万円以下\nその他の条件 / 生計を一にし、配偶者・事業専従者ではなく、他の要件を満たす\n2026年12月1日以後の年末調整で改正後の要件を適用する。",
    "choices": [
      "63万円",
      "51万円",
      "38万円",
      "0円"
    ],
    "answer": 1,
    "explanation": "特定親族の合計所得金額が90万円超95万円以下の場合、特定親族特別控除額は51万円です。63万円は62万円超85万円以下、38万円は配偶者特別控除の表などとの混同、0円はこの設例では誤りです。年齢19歳以上23歳未満、所得62万円超123万円以下等の特定親族の要件と、所得帯ごとの控除額を分けて判定します。",
    "topic": "特定親族特別控除",
    "sourceUrl": "https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf",
    "id": "fp2-096",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v83_2026_dependent_requirements_scoped_primary_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2026,
    "sourceLabel": "国税庁：令和8年4月 源泉所得税の改正のあらまし",
    "reviewNote": "Ver.83：2026年分の所得要件・年齢・控除額・施行時期を限定照合。IDには過去の公式照合履歴があるが、改訂後の主要論点は今回初めて照合。包括監修未完了。",
    "sourceCheckedDate": "2026-10-14",
    "choiceExplanations": [
      "誤り。特定親族の合計所得金額が90万円超95万円以下の場合、特定親族特別控除額は51万円です。63万円は62万円超85万円以下、38万円は配偶者特別控除の表などとの混同、0円はこの設例では誤りです。年齢19歳以上23歳未満、所得62万円超123万円以下等の特定親族の要件と、所得帯ごとの控除額を分けて判定します。",
      "正解。特定親族の合計所得金額が90万円超95万円以下の場合、特定親族特別控除額は51万円です。63万円は62万円超85万円以下、38万円は配偶者特別控除の表などとの混同、0円はこの設例では誤りです。年齢19歳以上23歳未満、所得62万円超123万円以下等の特定親族の要件と、所得帯ごとの控除額を分けて判定します。",
      "誤り。特定親族の合計所得金額が90万円超95万円以下の場合、特定親族特別控除額は51万円です。63万円は62万円超85万円以下、38万円は配偶者特別控除の表などとの混同、0円はこの設例では誤りです。年齢19歳以上23歳未満、所得62万円超123万円以下等の特定親族の要件と、所得帯ごとの控除額を分けて判定します。",
      "誤り。特定親族の合計所得金額が90万円超95万円以下の場合、特定親族特別控除額は51万円です。63万円は62万円超85万円以下、38万円は配偶者特別控除の表などとの混同、0円はこの設例では誤りです。年齢19歳以上23歳未満、所得62万円超123万円以下等の特定親族の要件と、所得帯ごとの控除額を分けて判定します。"
    ]
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税の確定申告で、次の国外居住親族について扶養控除を受ける場合に必要となる書類の組合せとして、最も適切なものはどれか。\n〈国外居住親族に係る確定申告資料〉\n項目 / 内容\n親族・年齢 / 納税者の子・35歳\n国外居住の理由 / 留学により国内に住所・居所を有しなくなった\n2026年中の送金 / 生活費を必要の都度送金・年合計20万円\nその他 / 生計・所得等の扶養親族要件を満たす\n外国語で作成された対象書類には、所定の日本語訳も必要。なお、これらの書類は源泉徴収・年末調整で提出・提示しておらず、確定申告時に初めて扶養控除の適用を受けるものとする。",
    "choices": [
      "親族関係書類のみ",
      "親族関係書類、送金関係書類および留学ビザ等書類",
      "親族関係書類および38万円送金書類のみ",
      "送金関係書類および留学ビザ等書類のみ"
    ],
    "answer": 1,
    "explanation": "30歳以上70歳未満で、留学により国外居住となった親族について扶養控除を受ける確定申告では、親族関係書類、送金関係書類および留学ビザ等書類が必要です。本問は留学要件で判定するため、年20万円でも直ちに38万円送金書類が必要になるわけではありません。本問では源泉徴収・年末調整時に書類を提出・提示していないため、確定申告時に親族関係書類・送金関係書類・留学ビザ等書類を添付または提示します。既に所定の書類を提出・提示している場合などは、確定申告時の取扱いが異なることがあります。",
    "topic": "国外居住親族の扶養控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1180.htm",
    "id": "fp2-097",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。親族関係書類だけでなく、送金関係書類と留学ビザ等書類も必要です。",
      "正解。留学により国外居住となった30歳以上70歳未満の親族に必要な3種類です。",
      "不適切。本問は38万円以上の送金ではなく留学要件で判定し、送金関係書類と留学ビザ等書類が必要です。",
      "不適切。国外居住者が納税者の親族であることを示す親族関係書類も必要です。"
    ],
    "contentReview": "v85_2026_nonresident_dependent_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2026,
    "sourceLabel": "国税庁：No.1180 扶養控除",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.85：国外居住親族の年齢帯、留学・障害・38万円送金の追加要件と確定申告書類を初回公式照合。所得要件は2026年分62万円以下。包括監修未完了。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料の税名の分類について、両方とも国税である組合せはどれか。\n〈国税と地方税の組合せ〉\n項目 / 条件\n分類の観点 / 国税か地方税かで分類する\n比較する税名 / 所得税、相続税、不動産取得税、固定資産税、住民税、事業税、都市計画税\n範囲 / 直接税/間接税や、税額・納付方法の分類は問わない\n「国税」と「地方税」の基本分類を確認し、都道府県と市町村の詳細な配分はこの問題では問わない。",
    "choices": [
      "不動産取得税と固定資産税",
      "住民税と事業税",
      "所得税と相続税",
      "固定資産税と都市計画税"
    ],
    "answer": 2,
    "explanation": "課税主体による国税と地方税の区分を確認します。本問の所得税・相続税は国税、ほかの選択肢にある税は地方税です。徴収の窓口や直接税・間接税の区分と混同しないこと。",
    "topic": "国税と地方税の組合せ",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/osirase/9000.htm",
    "id": "fp2-098",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v132_tax_classification_documents_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。不動産取得税と固定資産税は、いずれも地方税です。",
      "不適切。住民税と事業税は、いずれも地方税です。",
      "正解。所得税と相続税は、いずれも国税です。",
      "不適切。固定資産税と都市計画税は、いずれも地方税です。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁・東京都主税局の基本事項限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要事項4/既存主要論点再確認1を分離。医療費の旧確認論点は重複加算せず、新改訂の健康増進薬品の誤答根拠を確認。法令全文・全例外は未確認。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "Aさんについて、学生納付特例の所得審査と、承認期間の年金への反映に関する説明として最も適切なものはどれか。\n〈学生納付特例の所得と承認期間〉\n項目 / 内容\n申請年度 / 2026年度\n本人 / 国内居住・22歳・対象校の学生\n年金加入 / 国民年金第1号被保険者\n本人の2025年所得 / 110万円（他の所得なし）\n扶養親族等・社会保険料控除等 / なし\n父母の2025年所得合計 / 900万円\n別の仮定 / 申請が承認された期間について考える\n法令基準日：2026年4月1日。資料・人物・金額は独自の仮定。",
    "choices": [
      "本人の前年所得で審査し、承認期間は受給資格期間に入るが、追納しなければ老齢基礎年金額に反映されない",
      "父母の所得も合算し、承認期間は保険料全額免除と同様に年金額の2分の1に反映される",
      "本人の収入額だけで審査し、承認期間は年金の受給資格期間に入らない",
      "世帯主の所得だけで審査し、承認期間は追納しなくても全額納付と同額の年金額に反映される"
    ],
    "answer": 0,
    "explanation": "本人の前年所得が所得審査の対象です。与件では110万円が128万円以下で、父母の所得は合算しません。承認期間は年金の受給資格期間に算入されますが、追納しなければ老齢基礎年金額には反映されません。全額免除・未納・全額納付の期間とは扱いが異なります。",
    "topic": "学生納付特例・審査と年金額",
    "sourceUrl": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html",
    "id": "fp2-099",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v110_public_insurance_pension_scoped_migration",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "sourceLabel": "日本年金機構：学生納付特例・受給資格期間",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.110：本人/世帯・加入区分・対象年度・支払者・全選択肢・解説・資料を公式一次資料と限定照合。2026年4月1日以後の未対象の改正を適用せず、全例外・約款・包括監修は未完了。",
    "choiceExplanations": [
      "正解。所得審査の対象と、受給資格期間・年金額への反映を正しく区別しています。",
      "不適切。父母の所得は合算せず、学生納付特例は全額免除の2分の1反映とも異なります。",
      "不適切。審査対象は所得であり、承認期間は受給資格期間に入ります。",
      "不適切。世帯主だけの所得で判定せず、追納なしの承認期間は年金額に反映されません。"
    ],
    "additionalSourceUrls": [
      "https://www.nenkin.go.jp/service/yougo/kagyo/gakuseinofu.html",
      "https://www.nenkin.go.jp/service/kokunen/menjo/20150402-01.html"
    ]
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料の論点を踏まえ、損益通算の説明として最も適切なものはどれか。\n〈損益通算の対象と制限〉\n項目 / 条件\n対象税目 / 個人の所得税。法令基準日2026年4月1日\n比較する場面 / 不動産所得の赤字、事業所得の赤字、上場株式等の譲渡損失\n注意する費用 / 不動産所得の赤字には、その土地の取得借入金の利子に対応する部分が含まれる場合がある\n制度の区別 / 同じ年の他所得との損益通算と、翌年以後への繰越控除は別の制度\n全ての赤字に一律適用する制度ではない。個々の所得区分や申告方法を確認すること。",
    "choices": [
      "不動産所得の赤字は、原因や費用の内容を問わずすべて他の所得と通算できる",
      "一定の所得の損失を、所定のルールで他の所得と通算できる制度",
      "事業所得の赤字は要件なくすべての所得と損益通算でき、分離課税所得も区別しない",
      "上場株式等の譲渡損失は、原則として給与所得から自由に差し引ける"
    ],
    "answer": 1,
    "explanation": "損益通算は、制度の対象となる損失を所定の範囲・順序で他の所得から控除する仕組みです。不動産の赤字には土地取得借入金利子等による制限があり、株式の譲渡損失と給与所得も自由には通算できません。一定の上場株式等の配当等との通算は別途要件を確認します。損益通算後に残る損失の繰越しまで無条件に認める制度ではありません。",
    "topic": "損益通算の対象と制限",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2250.htm",
    "id": "fp2-100",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。例えば土地取得借入金の利子に対応する不動産所得の赤字部分は、他所得との損益通算の対象外です。",
      "正解。対象となる所得・損失と順序・制限を確認して適用する制度です。",
      "不適切。事業の赤字を、株式の申告分離課税などの所得にも無条件に通算できるわけではありません。",
      "不適切。上場株式等の譲渡損失を給与所得から自由に差し引くことはできません。"
    ],
    "contentReview": "v131_blue_return_loss_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1391.htm"
    ],
    "sourceLabel": "国税庁：青色申告・損益通算・損失申告の手引き",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要事項公式照合3/過去確認論点の再確認1を区別。法令基準日と2025損失発生年・2026以後の対象年分、確認日は別。条文全文・全例外は未確認。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の建ぺい率・容積率の順の組合せとして、最も適切なものはどれか。\n〈建ぺい率と容積率の比較〉\n項目 / 条件\n敷地面積 / 250㎡（算定に用いる敷地面積として確定）\n建築面積 / 125㎡（算定上の値として確定）\n容積率算定対象の延べ面積 / 375㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "150％・50％",
      "50％・150％",
      "約33.3％・150％",
      "50％・200％"
    ],
    "answer": 1,
    "explanation": "建ぺい率は125÷250×100＝50％、容積率は375÷250×100＝150％です。2つの比率は分母が共通で、分子が異なります。",
    "topic": "建ぺい率と容積率の比較",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "id": "fp2-101",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v133_building_ratio_scoped_migration",
    "choiceExplanations": [
      "不適切。建ぺい率と容積率の順番を逆にしています。",
      "正解。125÷250×100＝50％、375÷250×100＝150％です。",
      "不適切。約33.3％は建築面積125を延べ面積375で割った値です。",
      "不適切。200％は敷地250を建築面積125で割った値で、容積率ではありません。"
    ],
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料について、取得時諸費用を含む投下資金に対する、空室損失・運営費用を控除した年間の比率はいくらか。本問ではこの比率を実質利回りとする。\n〈運営費控除後の利回り〉\n項目 / 条件\n対象期間 / 2026年の1年間を想定する独自の収支モデル\n年間満室賃料 / 360万円\n年間空室損失 / 24万円（満室賃料から減る額）\n年間運営費用 / 66万円（管理・修繕・物件の税金等の現金支出として確定。借入元利金・減価償却・個人の所得税等は含まない）\n購入価格 / 5,400万円\n取得時諸費用 / 300万円（購入価格との重複なし）\n追加条件 / 借入なし。ほかの収支・売却損益なし。将来の収入や運用成果を保証する設例ではない\n本問の比率 / 分子＝満室賃料－空室損失－運営費用、分母＝購入価格＋取得時諸費用\n金額はすべて万円、比率は％。非整数の比率は小数第2位を四捨五入し小数第1位まで表示。\nこの運営収支モデルは所得税法上の不動産所得の計算ではない。法令基準日2026年4月1日の教材として条件を指定。",
    "choices": [
      "約4.7％",
      "約5.0％",
      "約5.2％",
      "約6.3％"
    ],
    "answer": 0,
    "explanation": "運営費控除後の収支は360－24－66＝270万円。投下資金は5,400＋300＝5,700万円です。この2つの金額の比に100を掛けて百分率にします。借入元利金や個人の所得税を引いた後の利回りではありません。",
    "topic": "運営費控除後の利回り",
    "sourceUrl": "",
    "id": "fp2-102",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "choiceExplanations": [
      "正解。270÷5,700×100＝約4.7％です。",
      "不適切。270÷5,400×100＝約5.0％は取得時諸費用を分母から落としています。",
      "不適切。294÷5,700×100＝約5.2％は空室損失24万円を控除していません。",
      "不適切。360÷5,700×100＝約6.3％は空室損失と運営費用を控除していません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定条件の計算検証",
    "sourceCheckedDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料で、満室賃料を購入価格だけで割り、空室損失・運営費用・取得時諸費用を反映しない表面利回りはどれか。\n〈満室賃料による表面利回り〉\n項目 / 条件\n対象期間 / 2026年の1年間を想定する独自の収支モデル\n年間満室賃料 / 240万円\n年間空室損失 / 40万円（満室賃料から減る額）\n年間運営費用 / 0万円（管理・修繕・物件の税金等の現金支出として確定。借入元利金・減価償却・個人の所得税等は含まない）\n購入価格 / 4,800万円\n取得時諸費用 / 200万円（購入価格との重複なし）\n追加条件 / 借入なし。ほかの収支・売却損益なし。将来の収入や運用成果を保証する設例ではない\n本問の比率 / 分子＝年間満室賃料、分母＝購入価格\n金額はすべて万円、比率は％。非整数の比率は小数第2位を四捨五入し小数第1位まで表示。\nこの運営収支モデルは所得税法上の不動産所得の計算ではない。法令基準日2026年4月1日の教材として条件を指定。",
    "choices": [
      "5.0％",
      "約4.2％",
      "4.8％",
      "4.0％"
    ],
    "answer": 0,
    "explanation": "240÷4,800×100＝5％です。空室や経費を控除した収支の比率とは条件が異なります。",
    "topic": "満室賃料による表面利回り",
    "sourceUrl": "",
    "id": "fp2-103",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "choiceExplanations": [
      "正解。240÷4,800×100＝5.0％です。",
      "不適切。200÷4,800×100＝約4.2％は空室損失を控除しています。",
      "不適切。240÷5,000×100＝4.8％は取得時諸費用も分母へ含めています。",
      "不適切。200÷5,000×100＝4.0％は空室損失を引き、取得時諸費用を分母へ含めています。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定条件の計算検証",
    "sourceCheckedDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の土地の権利部（甲区）に記録される事項として、最も適切なものはどれか。\n〈甲区に記録する事項の判別〉\n項目 / 条件\n対象 / 所有権の登記がある通常の土地1筆\n比較する内容 / 売買による所有権移転、抵当権設定、通行地役権設定、地目・地積\n地役権の条件 / 通行の負担を受ける承役地についての地役権設定登記を想定する\n範囲 / 登記する区分を比較する。各権利の成立要件や登録免許税は計算しない\n独自設例。法令基準日は2026年4月1日。申請義務・期限等の改正事項は今回の出題対象外。",
    "choices": [
      "売買による所有権移転",
      "金融機関を権利者とする抵当権の設定",
      "通行のための地役権の設定",
      "土地の地目と地積"
    ],
    "answer": 0,
    "explanation": "売買による所有権移転は甲区、抵当権設定と資料の承役地の地役権設定は乙区、土地の地目・地積は表題部の事項です。各選択肢が所有権、所有権以外の権利、物理的状況のどれを扱うかを確認します。",
    "topic": "甲区に記録する事項の判別",
    "sourceUrl": "https://houmukyoku.moj.go.jp/matsuyama/page000001_00390.html",
    "id": "fp2-104",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国土交通省本文・法務省/法務局の公式索引抜粋による登記基本事項の限定照合",
    "choiceExplanations": [
      "正解。売買による所有権移転は、所有権に関する登記事項なので甲区に記録します。",
      "不適切。金融機関の抵当権設定は所有権以外の権利に関する登記で、通常は乙区に記録します。",
      "不適切。資料の承役地についての通行地役権設定は、所有権以外の権利に関する登記で、通常は乙区に記録します。",
      "不適切。土地の地目・地積は物理的状況を示す表題部の事項で、甲区の事項ではありません。"
    ],
    "contentReview": "v136_registration_scoped_migration",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "priorSourceReview": "v51_official_source_based_limited_rule_review",
    "additionalSourceUrls": [
      "https://www.moj.go.jp/MINJI/minji02"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式本文と公式検索索引抜粋の照合範囲を区別。法務省/法務局ページ本文403、2026-04-01時点の規則全文・全改正未確認。新改訂主要点3/共通適用1/旧論点再確認2。包括監修未完了。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の土地譲渡所得金額はいくらか。\n〈土地売却の収入・費用・所得〉\n項目 / 条件\n対象者・年分 / 日本の居住者である個人Aさん、2026年分\n資産 / 保有していた土地（商品ではない）。建物は含まない\n譲渡収入 / 4,800万円\n取得費 / 3,000万円（実額として確定した取得費を用いる）\n譲渡費用 / 200万円（今回の売却に直接要した費用、取得費と重複なし）\n追加条件 / 特別控除・その他の調整は適用しない。税率・税額は問わない\n金額の単位は万円。所得控除や税額控除をこの段階の費用に足さない。",
    "choices": [
      "1,400万円",
      "1,800万円",
      "1,600万円",
      "2,000万円"
    ],
    "answer": 2,
    "explanation": "譲渡収入4,800－取得費3,000－譲渡費用200＝1,600万円です。取得費と譲渡費用をそれぞれ一度ずつ差し引きます。提示した土地の実額取得費を使い、概算取得費や建物の減価償却の計算は行いません。この所得金額を納付税額や売却代金そのものと混同しないこと。",
    "topic": "土地売却の収入・費用・所得",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3202.htm",
    "id": "fp2-105",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：土地建物の譲渡所得の限定確認",
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "choiceExplanations": [
      "不適切。4,800－3,000－200－200＝1,400万円は譲渡費用の二重控除です。",
      "不適切。4,800－3,000＝1,800万円は譲渡費用を控除していません。",
      "正解。4,800－3,000－200＝1,600万円です。",
      "不適切。4,800－3,000＋200＝2,000万円は譲渡費用を加算した誤りです。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の価格評価について、最も適切な記述はどれか。\n〈鑑定評価手法の比較〉\n項目 / 条件\n収集した資料 / 対象不動産と比較可能な複数の取引事例\n事例の違い / 取引時点、取引事情、地域の条件、個々の不動産の条件に相違がある\n検討する内容 / 比較可能性を確認し、必要な修正・補正を行って価格を求める\n範囲 / 主要な評価手法の基本。具体的な修正率や最終の鑑定額は問わない\n独自設例。法令基準日は2026年4月1日。確認日や資料の公表日とは区別する。",
    "choices": [
      "収益還元法は、再調達原価に減価修正を行って価格を求める手法である",
      "原価法は、将来期待される純収益の現在価値を基に価格を求める手法である",
      "取引事例比較法では、取引時点や個別条件に違いがあっても取引価格の単純平均だけを用い、修正・補正は行わない",
      "取引事例比較法では、適切な取引事例を選び、必要に応じて時点修正や事情補正等を行い、地域・個別条件を比較する"
    ],
    "answer": 3,
    "explanation": "取引事例比較法は、事例と対象の条件の違いを考慮して価格を試算します。原価法、収益還元法との取り違えと、単純平均だけでよいという説明を区別します。評価の出発点と、事例間の条件の相違をどう扱うかを確認します。",
    "topic": "鑑定評価手法の比較",
    "sourceUrl": "https://www.mlit.go.jp/common/001043585.pdf",
    "id": "fp2-106",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。再調達原価と減価修正は原価法の基本的な考え方で、収益還元法の説明ではありません。",
      "不適切。将来の純収益の現在価値に着目するのは収益還元法です。",
      "不適切。取引時点や事情等の相違を無視した単純平均だけで評価する方法ではありません。",
      "正解。取引事例比較法では、事例の選択、必要に応じた事情補正・時点修正、地域・個別の要因の比較を行います。"
    ],
    "contentReview": "v137_valuation_and_property_models_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "additionalSourceUrls": [
      "https://www.mlit.go.jp/totikensangyo/H30kouji01.html"
    ],
    "sourceLabel": "国土交通省の評価手法・地価指標の一次資料による基本事項の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式基本事項3と指定条件内部検算3を区別。ID初回時期不明、法令全文/全改正/実機は未確認。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料のモデルで空室率だけが10％から20％へ上昇するとき、最も適切な説明はどれか。\n〈空室率と収入・利回り〉\n項目 / 条件\n取得価格 / 6,000万円。期間中は変わらない\n満室時の年間家賃 / 600万円。各戸・各月の家賃は同じとし、家賃改定はない\n空室率の定義 / 年間の貸出可能な戸数×月数に対する空室の戸数×月数の割合\n家賃収入 / 満室時の年間家賃×（1－空室率）。未収・滞納・家賃保証・その他収入はない\n年間運営経費 / 120万円で一定。空室による家賃減少はこの経費に含めず、収入側だけで反映する\n比較する利回り / （実際の年間家賃収入－年間運営経費）÷取得価格×100。借入返済・所得税等・減価償却は含めない\n独自設例。法令基準日は2026年4月1日。確認日や資料の公表日とは区別する。",
    "choices": [
      "実際の年間家賃収入は、空室率にかかわらず600万円のままである",
      "年間運営経費が変わらなければ、資料で定義した利回りは空室率の上昇とともに高くなる",
      "実際の年間家賃収入は540万円から480万円へ減り、資料で定義した利回りは7％から6％へ低下する",
      "空室率が20％になると、実際の年間家賃収入は満室時の年間家賃600万円を上回る"
    ],
    "answer": 2,
    "explanation": "家賃収入は540万円から480万円、経費控除後の収入は420万円から360万円となります。利回りは7％から6％へ1ポイント低下します。空室分は家賃収入を減らす段階で反映済みなので、経費として重ねて差し引きません。資料の定義による内部計算であり、将来の市場予測ではありません。",
    "topic": "空室率と収入・利回り",
    "sourceUrl": "",
    "id": "fp2-107",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。600万円は満室時の金額です。実際の家賃収入には空室率を反映します。",
      "不適切。経費と取得価格が同じなら、家賃収入の減少によって資料の利回りは低下します。",
      "正解。600×0.9＝540、600×0.8＝480。経費控除後は420万円と360万円で、6,000万円に対して7％と6％です。",
      "不適切。資料の条件では空室率20％の家賃収入は480万円で、満室時600万円を上回りません。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定モデルの内部計算（法令改正照合ではない）",
    "sourceCheckedDate": null,
    "contentReview": "v137_valuation_and_property_models_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "公式基本事項3と指定条件内部検算3を区別。ID初回時期不明、法令全文/全改正/実機は未確認。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料から容積率の上限だけで求める算定対象延べ面積の上限を求めると、最も適切なものはどれか。\n〈容積率から求める面積上限〉\n項目 / 条件\n敷地面積 / 180㎡（算定に用いる敷地面積として確定）\n本問で用いる建ぺい率上限 / 60％\n本問で用いる容積率上限 / 300％\n計算範囲 / 提示された上限率による面積計算のみ。前面道路・角地・防火等の制限/緩和の追加計算なし\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "540㎡",
      "108㎡",
      "180㎡",
      "300㎡"
    ],
    "answer": 0,
    "explanation": "敷地面積180㎡に、上限率300％を100で割った比を掛け、540㎡です。建築面積の上限と延べ面積の上限は別に計算します。",
    "topic": "容積率から求める面積上限",
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "id": "fp2-108",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v133_building_ratio_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "正解。540㎡は、指定の容積率を使う計算です。",
      "不適切。108㎡は、建ぺい率による建築面積上限を求めている計算です。",
      "不適切。180㎡は、敷地面積をそのまま答えている計算です。",
      "不適切。300㎡は、割合の数値を面積の数値と取り違えている計算です。"
    ],
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の比較について、最も適切な記述はどれか。\n〈取得時の税と保有に伴う税〉\n項目 / 条件\n比較する場面 / 土地・家屋を売買・贈与または相続で取得する場面と、1月1日時点で所有する場面\n税の区別 / 不動産取得税と固定資産税は別の税目である\n地域条件 / 東京都23区以外の一般的な市町村での基本的な課税関係\n範囲 / 取得原因・課税主体の原則を問う。個別の免税点・税額軽減は計算しない\n法令基準日2026年4月1日、確認日とは別。税目の基本事項または提示設例の適用を確認する。",
    "choices": [
      "不動産取得税は市町村が毎年1月1日時点の所有者に課す税である",
      "不動産取得税は都道府県税で、売買・贈与等による取得が原則対象となる一方、相続による取得は課税されない",
      "不動産取得税は国税であり、相続による取得だけに課税される",
      "不動産取得税と固定資産税は同一税目で、納付時期だけが異なる"
    ],
    "answer": 1,
    "explanation": "不動産取得税は売買・贈与等による取得を原則対象とし、相続による取得は非課税です。一方、固定資産税は取得行為そのものではなく、賦課期日時点の所有等に着目する税です。税目を納付時期だけの違いと理解しないこと。",
    "topic": "取得時の税と保有に伴う税",
    "sourceUrl": "https://www.tax.metro.tokyo.lg.jp/kazei/real_estate/fudosan",
    "id": "fp2-109",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v135_property_tax_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "priorSourceReview": "v51_official_source_based_limited_rule_review",
    "choiceExplanations": [
      "不適切。市町村が1月1日の所有者へ課税する説明は、固定資産税の基本と混同しています。",
      "正解。不動産取得税は都道府県税で、相続による取得には課税されません。",
      "不適切。不動産取得税は地方税であり、相続のときだけ課される税でもありません。",
      "不適切。取得税と固定資産税は課税する原因等が異なる別の税目です。"
    ],
    "additionalSourceUrls": [
      "https://www.pref.kanagawa.jp/zei/kenzei/a001/b011/010.html",
      "https://www.tax.metro.tokyo.lg.jp/kazei/real_estate/kotei_tosi"
    ],
    "sourceLabel": "自治体・国税庁の不動産税基本事項と設例適用の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要論点3/共通公式ルール適用2/過去論点再確認2を区別。法令全文/全改正/免税点等の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料だけを用いて年間の資金収支を計算すると、最も適切なものはどれか。\n〈賃貸経営の年間資金収支〉\n項目 / 条件\n満室時の年間家賃 / 600万円\n空室による年間家賃の減少 / 60万円。実際の年間家賃収入は540万円で、未収・滞納はない\n年間運営支出 / 管理費・固定資産税等・実際に支払う修繕費の合計120万円。空室損失と借入返済は含まない\n年間借入返済 / 元金・利息を合わせて240万円。上記120万円との重複はない\n問う資金収支 / 実際の家賃収入から運営支出と借入返済を差し引いた金額\nその他 / 追加の収入・支出、所得税等、取得/売却代金はない。減価償却は現金支出ではないため加減しない\n独自設例。法令基準日は2026年4月1日。確認日や資料の公表日とは区別する。",
    "choices": [
      "180万円のプラス",
      "120万円のプラス",
      "420万円のプラス",
      "300万円のプラス"
    ],
    "answer": 0,
    "explanation": "満室時600万円から空室分60万円を引いた実収入は540万円です。そこから運営支出120万円と元利返済240万円を引き、資金収支は180万円のプラスとなります。課税所得や会計利益を求める問題ではなく、提示された現金の入出金を計算します。空室分、借入返済、修繕費を重複計上しないこと。",
    "topic": "賃貸経営の年間資金収支",
    "sourceUrl": "",
    "id": "fp2-110",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。実際の家賃収入540万円－運営支出120万円－元利返済240万円＝180万円です。",
      "不適切。540万円から空室分60万円をもう一度差し引くと120万円になり、空室損失の二重計上です。",
      "不適切。540万円－120万円＝420万円は借入返済前の金額です。本問の資金収支では元利返済240万円も差し引きます。",
      "不適切。540万円－240万円＝300万円では、運営支出120万円を差し引いていません。"
    ],
    "contentReview": "v137_valuation_and_property_models_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "additionalSourceUrls": [],
    "sourceLabel": "指定モデルの内部計算（法令改正照合ではない）",
    "sourceCheckedDate": null,
    "reviewNote": "公式基本事項3と指定条件内部検算3を区別。ID初回時期不明、法令全文/全改正/実機は未確認。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で子1人の法定相続分はどれか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、子2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "2分の1",
      "6分の1",
      "4分の1",
      "3分の1"
    ],
    "answer": 2,
    "explanation": "配偶者1/2、子全体1/2です。同順位の2人で均等に分けるので、子1人の割合は1/2÷2＝1/4です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "id": "fp2-111",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "choiceExplanations": [
      "不適切。同順位の相続人全体の取り分を、1人分と取り違えています。",
      "不適切。配偶者と子3人の場合の子1人分1/6等と混同しています。資料の子は2人です。",
      "正解。子1人の割合は1/4です。",
      "不適切。相続人全員で単純に均等割りする計算になっています。続柄ごとの法定相続分を先に確認します。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で父1人の取得額はいくらか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、被相続人の父・母の2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。被相続人に子・孫等の第1順位の相続人はいない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n分割対象の遺産 / 預金12,000万円のみ。債務や費用等の控除を要する事情はない\n計算の範囲 / 法定相続分に従う預金の配分だけを計算し、相続税額や非課税枠は計算しない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "4,000万円",
      "6,000万円",
      "8,000万円",
      "2,000万円"
    ],
    "answer": 3,
    "explanation": "配偶者2/3、父母全体1/3です。同順位の2人で均等に分けるので、父1人の割合は1/3÷2＝1/6です。したがって12,000万円×1/6＝2,000万円です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "id": "fp2-112",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。同順位の相続人全体の取り分を、1人分と取り違えています。",
      "不適切。資料で問う父1人の割合は1/6です。この選択肢はその割合に一致しません。",
      "不適切。配偶者の取り分を、問われた相続人の取り分と取り違えています。",
      "正解。12,000万円×1/6＝2,000万円です。"
    ],
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "reviewedAt": "2026-10-13",
    "v67ReviewScope": "家族関係・法定相続分・数値計算と全選択肢の限定点検。初回公式照合時期不明。資料確認日と設問の法令基準日は区別。",
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。",
    "priorSourceReview": "v67"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の死亡保険金について、相続税の非課税限度額の総額はいくらか。\n〈死亡保険金の非課税限度額〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n保険の条件 / Aさんが被保険者で、Aさん自身が保険料を全額負担していた\n法定相続人と受取人 / 法律上の配偶者と実子2人の計3人のみが死亡保険金を受領。全員存命で、放棄・欠格・廃除・養子・代襲等はない\n死亡保険金の合計 / 3人の受取額を合計して5,000万円。個人別の受取額や税額の配分は問わない\n求めるもの / 全相続人の受取保険金に対する非課税限度額の総額。相続税の基礎控除額ではない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "1,000万円",
      "5,000万円",
      "1,500万円",
      "500万円"
    ],
    "answer": 2,
    "explanation": "法定相続人は配偶者1人と子2人の計3人なので、非課税限度額は500万円×3＝1,500万円です。受取額5,000万円と非課税限度額は別です。法定相続人の数を使うことと、非課税の適用を受ける受取人の資格を区別し、資料では全員が相続人で放棄等もない条件としています。",
    "topic": "死亡保険金の非課税限度額",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4114.htm",
    "id": "fp2-113",
    "revision": 50,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "choiceExplanations": [
      "不適切。500万円×2人の額であり、配偶者を除くなど人数を1人少なく数えています。",
      "不適切。5,000万円は受取保険金の総額であり、全額が非課税となるわけではありません。",
      "正解。500万円×法定相続人3人＝1,500万円です。",
      "不適切。500万円は法定相続人1人分の算定単価で、今回は3人です。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。",
    "priorSourceReview": "prior_source_url_and_reviewedAt_metadata"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の単純な正味財産額はいくらか。\n〈財産と借入金の単純な差引計算〉\n項目 / 条件\n時点と単位 / 2026年3月1日時点の資料。金額の単位は万円\n財産の額 / 金融資産5,000万円\n借入金の額 / 1,200万円\nほかの項目 / ほかの財産・債務・費用はなく、評価額の調整や二重計上はない\n求める範囲 / 示した財産の額から借入金を差し引く単純な正味額。相続税の課税価格・課税遺産総額・相続人別取得額ではない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "6,200万円",
      "1,200万円",
      "3,800万円",
      "5,000万円"
    ],
    "answer": 2,
    "explanation": "財産5,000万円から借入金1,200万円を差し引き、5,000－1,200＝3,800万円です。これは資料の2項目の差引計算であり、税務上の債務控除の適用や相続税額を判定したものではありません。",
    "topic": "財産と借入金の単純な差引計算",
    "sourceUrl": "",
    "id": "fp2-114",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "choiceExplanations": [
      "不適切。財産額と借入金を差し引かず、加算しています。",
      "不適切。差引後の額ではなく、借入金の額だけを答えています。",
      "正解。資料の財産から借入金を差し引いた額です。",
      "不適切。借入金を差し引く前の財産額です。"
    ],
    "additionalSourceUrls": [],
    "sourceLabel": "指定条件の内部算術検算（法令改正照合ではない）",
    "sourceCheckedDate": "2026-10-15",
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "2026年中、Aさんが父から100万円、母から100万円の贈与を受けた。暦年課税による基礎控除後の課税価格はいくらか（ほかに贈与なし・非課税特例なし）。\n〈暦年課税の計算資料〉\n項目 / 内容\n父からの贈与 / 100万円\n母からの贈与 / 100万円\n年間受贈額 / 200万円\n基礎控除 / 受贈者ごとに年110万円\n基礎控除は贈与者ごとではなく、贈与を受けた人ごとの年間合計に適用する。",
    "choices": [
      "200万円",
      "110万円",
      "90万円",
      "0万円"
    ],
    "answer": 2,
    "explanation": "父母からの贈与を合計した200万円から、受贈者Aさんについて年110万円の基礎控除を差し引くため、課税価格は90万円です。基礎控除を父母それぞれに110万円ずつ適用することはできません。",
    "topic": "暦年課税の基礎控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4410.htm",
    "id": "fp2-115",
    "revision": 59,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：No.4410 複数の人から贈与を受けたとき",
    "contentReview": "v90_2026_gift_tax_scoped_primary_review",
    "taxYear": 2026,
    "sourceCheckedDate": "2026-10-14",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.90：2026年の暦年課税・相続時精算課税について、受贈者単位の年110万円、複数贈与者の合算・按分、選択要件と変更不可を公式照合。包括監修未完了。",
    "choiceExplanations": [
      "不適切。200万円は基礎控除前の年間受贈額です。",
      "不適切。110万円は基礎控除額そのものです。",
      "正解。100＋100－110＝90万円です。",
      "不適切。基礎控除を贈与者ごとに適用することはできません。"
    ]
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "2026年中の贈与について、相続時精算課税制度の一般的な説明として最も適切なものはどれか（住宅取得等の特例は考慮しない）。\n〈相続時精算課税の基本要件〉\n項目 / 内容\n一般の贈与者 / 贈与年1月1日に60歳以上の父母・祖父母など\n一般の受贈者 / 同日に18歳以上の推定相続人・孫など\n選択手続 / 受贈者が届出書等を提出\n選択後 / 同じ特定贈与者について暦年課税へ戻せない\n2024年1月1日以後の贈与には、相続時精算課税に年110万円の基礎控除がある。",
    "choices": [
      "同じ贈与者について選択した後も、毎年自由に暦年課税へ戻すことができる",
      "父母や祖父母などの一定の贈与者からの贈与について、要件を満たす受贈者が選択できる",
      "贈与者が選択すれば、受贈者の要件や届出を確認せず自動適用される",
      "相続時精算課税を選択すると、年110万円の基礎控除は適用されない"
    ],
    "answer": 1,
    "explanation": "相続時精算課税は、贈与者・受贈者の年齢や親族関係などの要件を満たし、受贈者が所定の届出をして選択します。選択した特定贈与者からの贈与は、その後、暦年課税へ変更できません。2024年1月1日以後の贈与には年110万円の基礎控除があります。",
    "topic": "相続時精算課税",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4103.htm",
    "id": "fp2-116",
    "revision": 59,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：No.4103 相続時精算課税の選択",
    "choiceExplanations": [
      "不適切。選択した特定贈与者について暦年課税へ戻すことはできません。",
      "正解。要件を満たす受贈者が所定の届出により選択します。",
      "不適切。贈与者の意思だけで自動適用される制度ではありません。",
      "不適切。2024年1月1日以後の贈与には年110万円の基礎控除があります。"
    ],
    "taxYear": 2026,
    "sourceCheckedDate": "2026-10-14",
    "contentReview": "v90_2026_gift_tax_scoped_primary_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.90：2026年の暦年課税・相続時精算課税について、受贈者単位の年110万円、複数贈与者の合算・按分、選択要件と変更不可を公式照合。包括監修未完了。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の課税遺産総額はいくらか。\n〈課税価格合計と課税遺産総額〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n法定相続人 / 法律上の配偶者と実子2人のみ。全員存命で、相続放棄・欠格・廃除・養子・代襲等はない\n人数の範囲 / 資料の相続人だけを数え、ほかの者を重複して加えない\n各人の課税価格の合計額 / 8,000万円。非課税額・債務等の控除や必要な贈与加算等を反映した後の確定済み合計である\n計算の範囲 / 確定済みの課税価格合計から遺産に係る基礎控除を1回だけ差し引く。税率適用後の税額は求めない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "2,600万円",
      "3,200万円",
      "3,800万円",
      "4,400万円"
    ],
    "answer": 1,
    "explanation": "法定相続人は3人なので、遺産に係る基礎控除は3,000万円＋600万円×3＝4,800万円です。課税価格合計8,000万円からこれを1回差し引き、8,000－4,800＝3,200万円です。資料の課税価格合計から、既に反映済みの債務等をもう一度控除しません。",
    "topic": "課税価格合計と課税遺産総額",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm",
    "id": "fp2-117",
    "revision": 5,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "choiceExplanations": [
      "不適切。法定相続人を4人と数えた場合の額です。資料は3人です。",
      "正解。資料の法定相続人3人で計算すると3,200万円です。",
      "不適切。法定相続人を2人と数えた場合の額です。資料は3人です。",
      "不適切。法定相続人を1人と数えた場合の額です。資料は3人です。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。",
    "priorSourceReview": "v25_source_metadata"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の贈与契約の成立について、最も適切な説明はどれか。\n〈贈与契約の成立と受諾〉\n項目 / 条件\n時点 / 2026年3月1日。Aさん・Bさんとも存命の成人\n当事者の条件 / 双方に契約の意思能力があり、錯誤・詐欺・強迫等の事情はない\n範囲 / 民法上の通常の贈与契約の成立を問う。贈与税の取得時期・登記・履行・解除は問わない\n対象 / Aさんが所有する現金をBさんへ無償で与える通常の贈与。特別な許認可を要しない\n比較する内容 / 受諾の必要性、家庭裁判所の許可、書面が契約成立に必須かを比較する\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "贈与契約の成立には、原則として家庭裁判所の許可が必要である",
      "贈与者が無償で与える意思を表示し、受贈者が受諾して成立する",
      "贈与者が贈与すると述べれば、受贈者が受諾しなくても贈与契約は成立する",
      "贈与契約は、当事者が口頭で合意しても成立せず、必ず書面が必要になる"
    ],
    "answer": 1,
    "explanation": "通常の贈与契約は、無償で与える申出と受諾の合致により成立します。資料では家庭裁判所の許可を一般的な成立要件とはしません。また、口頭の合意でも成立し得ます。書面の有無に応じた解除の取扱いや税務上の取得時期とは別の問題です。",
    "topic": "贈与契約の成立と受諾",
    "sourceUrl": "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf",
    "id": "fp2-118",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。資料の通常の現金贈与に、家庭裁判所の許可を一般的な成立要件とはしません。",
      "正解。Aさんの無償で与える意思表示と、Bさんの受諾が合致して成立します。",
      "不適切。相手方の受諾が必要であり、Aさんの一方的な発言だけでは足りません。",
      "不適切。口頭の合意でも契約は成立し得ます。書面の有無に応じた解除の扱いは別です。"
    ],
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "additionalSourceUrls": [],
    "sourceLabel": "裁判所・法テラス・国税庁講本の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の遺産分割協議について、最も適切な説明はどれか。\n〈遺産分割協議の参加者と合意〉\n項目 / 条件\n相続開始 / 2026年3月1日にAさんが死亡した\n共同相続人 / 法律上の配偶者と成人の子2人の計3人のみ。全員の所在・意思を確認できる\n分割する対象 / Aさん所有の土地・建物。遺言や分割禁止の定め、包括受遺者等はない\n手続の範囲 / 当事者間の遺産分割協議。調停・審判や所在不明者の特別手続ではない\n意思表示の条件 / 全員が自ら有効に合意できる。未成年者・成年被後見人の代理や利益相反等の問題はない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "遺産分割協議は、原則として被相続人の死亡前に共同相続人だけで確定できる",
      "遺産分割協議は、原則として共同相続人の過半数が同意すれば成立する",
      "共同相続人のうち一人が反対しても、財産額の過半数を承継する相続人の合意だけで成立する",
      "原則として共同相続人全員の合意が必要"
    ],
    "answer": 3,
    "explanation": "資料は相続開始後の任意の協議であり、共同相続人3人全員の合意が必要です。生前の準備や意向の確認と、相続開始後の遺産分割協議は別です。人数や財産額の過半数だけでは、反対する相続人を除いて協議を成立させられません。",
    "topic": "遺産分割協議の参加者と合意",
    "sourceUrl": "https://www.houterasu.or.jp/site/faq/sozoku-bunkatsu-003.html",
    "id": "fp2-119",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "不適切。遺産分割協議は相続開始後の共同相続人が行うもので、生前の準備だけで確定する説明ではありません。",
      "不適切。共同相続人の過半数という人数の多数決では成立しません。",
      "不適切。取得財産額の過半数を占める者が賛成しても、反対者を除いて成立させることはできません。",
      "正解。資料の遺産分割協議には3人全員の合意が必要です。"
    ],
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf"
    ],
    "sourceLabel": "裁判所・法テラス・国税庁講本の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の相続税の課税価格計算における債務控除について、適切な説明はどれか。\n〈相続税の債務控除と実際の負担〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n当事者 / Aさんと相続人Bさんはいずれも日本国籍があり、相続開始時に日本国内に住所を有する。国外転出時課税の納税猶予等はない\n借入金 / Aさんが死亡時に現に負っていた、確実な未弁済の通常の住宅ローン債務\nBさんの取得と負担 / Bさんは相続により財産を取得し、その借入債務を実際に負担する\n除外する事情 / 団体信用生命保険による弁済・返済免除、ほかの免除、非課税財産に関する債務等はない\n範囲 / 所定要件を満たす借入債務を差し引く方向を問う。葬式費用等の個別の可否や国際課税の全条件は問わない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "被相続人の一定の債務などを財産から差し引くことがある",
      "債務控除は相続財産の価額を増額する仕組みであり、借入金の残高は加算する",
      "被相続人の住宅ローン残高は、死亡時には自動的にすべて債務控除の対象外となる",
      "遺産の取得者が実際に負担する債務も、被相続人の債務であれば原則として控除できない"
    ],
    "answer": 0,
    "explanation": "資料の借入金は、死亡時に存在し確実と認められる被相続人の債務で、財産を取得した相続人が実際に負担します。所定の要件で財産の価額から差し引き、加算するものではありません。住宅ローンだから一律に対象外とはせず、団信等で相続人の返済が不要になる場合は区別します。",
    "topic": "相続税の債務控除と実際の負担",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4126.htm",
    "id": "fp2-120",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": "2026-04-01",
    "choiceExplanations": [
      "正解。資料の確実な債務を相続人が実際に負担する場合など、所定要件で差し引きます。",
      "不適切。債務控除は差し引く仕組みで、借入金を課税財産に加えるものではありません。",
      "不適切。住宅ローンだから一律に対象外とはしません。資料では団信等の弁済や免除もありません。",
      "不適切。資料のように、所定の債務を実際に負担する場合には控除対象となり得ます。"
    ],
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/sozoku-tokushu/souzoku-ayamarijireishu/ayamarijirei13.pdf"
    ],
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "sourceCheckedDate": "2026-10-15",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料のA社が通常の労災保険料を納める際、従業員給与から保険料の半額を控除し、残り半額を事業主が負担するのが原則である。\n〈労災保険料の負担関係〉\n項目 / 内容\n事業所 / 労災保険適用事業所のA社\n対象者 / A社に雇用される労働者\n対象の保険料 / 通常の労災保険料\n特別加入 / 対象に含めない\n法令基準日：2026年4月1日。資料・人物・金額は独自の仮定。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。通常の労災保険料は事業主が全額負担します。労働者と事業主の双方が負担する雇用保険料とは区別します。",
    "topic": "労災保険料の負担",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-121",
    "contentReview": "v110_public_insurance_pension_scoped_migration",
    "choiceExplanations": [
      "不適切。通常の労災保険料を労働者と折半する制度ではありません。",
      "正解。労災保険料は事業主の全額負担です。"
    ],
    "sourceUrl": "https://www.mhlw.go.jp/seisakunitsuite/bunya/koyou_roudou/roudoukijun/hoken/tokusetusaito/about.html",
    "sourceLabel": "厚生労働省：労働保険料の負担",
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.110：本人/世帯・加入区分・対象年度・支払者・全選択肢・解説・資料を公式一次資料と限定照合。2026年4月1日以後の未対象の改正を適用せず、全例外・約款・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "Aさんの2026年度の学生納付特例の所得審査では、本人の所得120万円に父母の所得を合算して判定する。\n〈学生納付特例の申請条件〉\n項目 / 内容\n申請年度 / 2026年度（2026年4月～2027年3月）\n本人 / 国内居住・21歳・対象校の学生\n年金加入 / 国民年金第1号被保険者\n本人の2025年所得 / 120万円（収入額ではない）\n扶養親族等・社会保険料控除等 / なし\n父母の2025年所得合計 / 800万円\n法令基準日：2026年4月1日。資料・人物・金額は独自の仮定。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。2026年度の通常の申請では本人の2025年所得を確認します。扶養親族等・社会保険料控除等がない与件の基準は128万円で、120万円は基準以下です。父母の所得800万円は合算しません。申請に基づく承認が必要で、所得条件を満たすだけで自動適用される制度ではありません。",
    "topic": "学生納付特例・本人所得と年度",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-122",
    "contentReview": "v110_public_insurance_pension_scoped_migration",
    "sourceUrl": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：学生納付特例",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.110：本人/世帯・加入区分・対象年度・支払者・全選択肢・解説・資料を公式一次資料と限定照合。2026年4月1日以後の未対象の改正を適用せず、全例外・約款・包括監修は未完了。",
    "choiceExplanations": [
      "不適切。学生納付特例は本人の前年所得で審査し、父母の所得は合算しません。",
      "正解。本人120万円は与件の基準128万円以下であり、父母の所得の多寡は問われません。"
    ],
    "additionalSourceUrls": [
      "https://www.nenkin.go.jp/service/kokunen/menjo/20150402-01.html"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の加入記録では期間の合計が132月であるため、老齢基礎年金の受給資格期間も132月となる。\n〈国民年金の加入記録〉\n項目 / 内容\n保険料納付済期間 / 108月\n学生納付特例の承認期間 / 12月（追納なし）\n未納期間 / 12月（納付・追納等なし）\n各期間は重複せず、20歳以上60歳未満の期間である。ほかに保険料免除期間、合算対象期間、厚生年金加入期間等はない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。納付済108月と学生納付特例の承認12月は受給資格期間に含まれますが、未納12月は含まれません。受給資格期間は120月（10年）です。また、追納していない学生納付特例期間は年金額の計算には反映されないため、年金額に反映するのは納付済108月です。",
    "topic": "学生納付特例と受給資格期間",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-123",
    "contentReview": "v93_pension_scoped_primary_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：国民年金保険料の学生納付特例制度",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.93：学生納付特例、付加年金、繰上げ・繰下げの条件・数値・各選択肢を限定確認。2026年4月1日基準。包括監修は未完了。",
    "choiceExplanations": [
      "不適切。加入記録上の期間と受給資格期間は同じとは限らず、未納12月を加えることはできません。",
      "正解。108＋12＝120月。学生納付特例を単なる未納と同じ扱いにしない点にも注意します。"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料のようにiDeCoで投資信託を選んだ場合、掛金の累計額が同じでも、運用結果によって年金資産の評価額が異なることがある。\n〈iDeCoの投資信託運用〉\n項目 / 内容\n制度 / 個人型確定拠出年金（iDeCo）\n運用商品 / 価格変動のある投資信託\n投資信託の特徴 / 元本保証なし\n比較する条件 / 掛金の累計額は同額\n異なる条件 / 運用期間中の値動き・運用結果\n法令基準日：2026年4月1日。資料・人物・金額は独自の仮定。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。iDeCoは拠出した資金を加入者が選ぶ商品で運用する制度です。投資信託の評価額は値動きにより変わり、元本割れも起こり得ます。iDeCoという制度に加入したこと自体で、投資信託の元本が保証されるわけではありません。",
    "topic": "iDeCo・投資信託の運用リスク",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-124",
    "contentReview": "v110_public_insurance_pension_scoped_migration",
    "choiceExplanations": [
      "正解。掛金累計額が同じでも投資信託の運用結果によって評価額は変わります。",
      "不適切。投資信託の元本保証を前提に、評価額が常に同じとはいえません。"
    ],
    "sourceUrl": "https://www.ideco-koushiki.jp/learn/practical/01.html",
    "sourceLabel": "国民年金基金連合会：iDeCo公式・投資信託の運用",
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.110：本人/世帯・加入区分・対象年度・支払者・全選択肢・解説・資料を公式一次資料と限定照合。2026年4月1日以後の未対象の改正を適用せず、全例外・約款・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "資料の条件で付加保険料を24月納付したAさんが、65歳から通常の老齢基礎年金を受給する場合、付加年金の加算年額は9,600円となる。\n〈付加保険料の納付記録〉\n項目 / 内容\n加入区分 / 国民年金第1号被保険者\n付加保険料の納付月数 / 24月\n付加保険料の月額 / 400円\n付加保険料の納付要件を満たし、国民年金基金には加入していない。繰上げ・繰下げはなく、付加年金の年額だけを問う。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。付加年金の加算年額は200円×納付月数なので、200円×24月＝4,800円です。400円×24月＝9,600円は納付した付加保険料の総額であり、毎年加算される年金額ではありません。",
    "topic": "付加保険料と付加年金の区別",
    "createdVersion": 9,
    "revision": 59,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-125",
    "contentReview": "v93_pension_scoped_primary_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/kokunen/hokenryo/fukanofu.html",
    "sourceLabel": "日本年金機構：付加保険料の納付",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.93：学生納付特例、付加年金、繰上げ・繰下げの条件・数値・各選択肢を限定確認。2026年4月1日基準。包括監修は未完了。",
    "choiceExplanations": [
      "不適切。月額保険料400円を納付月数に掛けた9,600円は払込総額です。",
      "正解。付加年金の年額に使うのは200円で、24月なら4,800円です。"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "資料の条件で付加保険料を36月納付した場合、付加年金の加算年額は（　）円となる。\n〈付加年金の計算資料〉\n項目 / 内容\n加入区分 / 国民年金第1号被保険者\n付加保険料の納付月数 / 36月\n付加保険料の月額 / 400円\n付加保険料の納付要件を満たし、国民年金基金には加入していない。65歳から通常受給し、繰上げ・繰下げはない。",
    "choices": [
      "7,200",
      "14,400",
      "86,400"
    ],
    "answer": 0,
    "explanation": "付加年金の加算年額は200円×36月＝7,200円です。14,400円は400円×36月という払込総額、86,400円は正しい加算年額を誤って月額と考えて12倍した額です。",
    "topic": "付加年金の年額計算",
    "createdVersion": 9,
    "revision": 59,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-126",
    "contentReview": "v93_pension_scoped_primary_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/kokunen/hokenryo/fukanofu.html",
    "sourceLabel": "日本年金機構：付加保険料の納付",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.93：学生納付特例、付加年金、繰上げ・繰下げの条件・数値・各選択肢を限定確認。2026年4月1日基準。包括監修は未完了。",
    "choiceExplanations": [
      "正解。年額の計算は200円×付加保険料の納付月数です。",
      "不適切。月額保険料400円を掛けた払込総額であり、加算年額ではありません。",
      "不適切。7,200円はすでに年額なので、さらに12倍はしません。"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "Aさんが2026年6月に資料の条件で老齢基礎年金を繰上げ請求する場合、減額率は（　）％となる。\n〈老齢基礎年金の繰上げ条件〉\n項目 / 内容\n生年月日 / 1962年6月2日\n請求月・年齢 / 2026年6月、64歳\n減額率の計算に用いる月数 / 12月\n受給資格 / 65歳時の通常受給に必要な資格を満たす\n全部繰上げとし、一部繰上げや特別支給の老齢厚生年金は考慮しない。減額率だけを問う。",
    "choices": [
      "4.8",
      "6.0",
      "9.6"
    ],
    "answer": 0,
    "explanation": "1962年4月2日以後生まれのため、1月当たりの減額率は0.4％です。0.4％×12月＝4.8％。6.0％は旧区分の0.5％を用いた計算、9.6％は0.4％を24月に掛けた計算です。繰上げによる減額は生涯続きます。",
    "topic": "老齢基礎年金の繰上げ減額率",
    "createdVersion": 9,
    "revision": 59,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-127",
    "contentReview": "v93_pension_scoped_primary_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/jukyu/seido/roureinenkin/kuriage-kurisage/20140421-01.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：年金の繰上げ受給",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.93：学生納付特例、付加年金、繰上げ・繰下げの条件・数値・各選択肢を限定確認。2026年4月1日基準。包括監修は未完了。",
    "choiceExplanations": [
      "正解。生年月日の区分と資料の12月から、0.4％×12＝4.8％です。",
      "不適切。1月0.5％は1962年4月1日以前生まれの区分です。",
      "不適切。資料の計算月数は24月ではなく12月です。"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "8年後に300万円を準備するため、年2％の年1回複利で運用しながら毎年末に8回同額を積み立てる。目標額に乗じて必要な毎年の積立額を求める係数は（　）である。\n〈年2％・8年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.1717\n現価係数 / 0.8535\n年金終価係数 / 8.5830\n減債基金係数 / 0.1165\n年金現価係数 / 7.3255\n資本回収係数 / 0.1365\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "資本回収係数",
      "減債基金係数",
      "現価係数"
    ],
    "answer": 1,
    "explanation": "減債基金係数を用います。将来の目標額から毎年末の積立額を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "topic": "6つの係数・減債基金係数",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-128",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "choiceExplanations": [
      "不適切。現在の元金から毎年末の一定取崩額を求めます。",
      "正解。将来の目標額から毎年末の積立額を求めます。",
      "不適切。将来の一時金から現在必要な一時金を求めます。"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "年3％の年1回複利で運用しながら、毎年末に80万円ずつ6回受け取る。最後の受取後の残高を0円とするために必要な現在資金を、年間受取額に乗じて求める係数は（　）である。\n〈年3％・6年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.1941\n現価係数 / 0.8375\n年金終価係数 / 6.4684\n減債基金係数 / 0.1546\n年金現価係数 / 5.4172\n資本回収係数 / 0.1846\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "年金現価係数",
      "年金終価係数",
      "終価係数"
    ],
    "answer": 0,
    "explanation": "年金現価係数を用います。毎年末の受取額から現在必要な元金を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "topic": "6つの係数・年金現価係数",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-129",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "choiceExplanations": [
      "正解。毎年末の受取額から現在必要な元金を求めます。",
      "不適切。毎年末の積立額から最後の積立直後の元利合計を求めます。",
      "不適切。現在の一時金から将来の元利合計を求めます。"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "資料のAさん・Bさん・Cさんのうち、国民年金の第1号被保険者に該当するのは（　）である。\n〈3人の働き方と年金加入条件〉\n対象者 / 条件\nAさん / 国内居住・35歳の自営業者。厚生年金未加入で第3号でもない\nBさん / 国内居住・35歳。第2号被保険者の配偶者に扶養され、第3号の認定要件を満たす。自身の厚生年金加入なし\nCさん / 国内居住・35歳の会社員。厚生年金に加入\n法令基準日：2026年4月1日。資料・人物・金額は独自の仮定。",
    "choices": [
      "Aさん",
      "Bさん",
      "Cさん"
    ],
    "answer": 0,
    "explanation": "国内居住の20歳以上60歳未満で、第2号・第3号に該当しないAさんが第1号被保険者です。Bさんは与件により第3号、厚生年金加入者のCさんは第2号です。自営業という名称だけでなく、年齢・居住・加入条件を確認します。",
    "topic": "国民年金の第1・第2・第3号区分",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-130",
    "contentReview": "v110_public_insurance_pension_scoped_migration",
    "choiceExplanations": [
      "正解。20歳以上60歳未満の国内居住者で、第2号・第3号に該当しない自営業者です。",
      "不適切。与件で第3号の認定要件を満たしています。",
      "不適切。35歳の厚生年金加入者は第2号です。"
    ],
    "sourceUrl": "https://www.nenkin.go.jp/section/faq/kokunen/seido/kanyu/seidosetsumei/20140602-01.html",
    "sourceLabel": "日本年金機構：被保険者区分",
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.110：本人/世帯・加入区分・対象年度・支払者・全選択肢・解説・資料を公式一次資料と限定照合。2026年4月1日以後の未対象の改正を適用せず、全例外・約款・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の養老保険では、期間中に死亡した場合は死亡保険金、満期時に生存している場合は満期保険金を受け取れる。\n〈養老保険の支払事由〉\n項目 / 条件\n契約 / 定額型の養老保険主契約\n保険期間 / 20年\n死亡保険金／満期保険金 / 各500万円\n除外条件 / 解約・失効・高度障害保険金支払・特約なし\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。養老保険は期間内の死亡と満期時の生存を別の給付事由とします。死亡保険金と満期保険金を同じ被保険者について二重に受け取る仕組みではありません。",
    "topic": "養老保険の支払事由",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-131",
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "choiceExplanations": [
      "正解。死亡時と満期生存時の給付事由を正しく区別しています。",
      "不適切。養老保険は満期生存時の給付も備えます。"
    ],
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/38.html",
    "additionalSourceUrls": [],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の収入保障保険では、一時金の受取額は年金形式で受け取る場合の合計より少なくなる。\n〈収入保障保険の受取方法〉\n項目 / 条件\n選択可能な受取方法 / 年金形式、または一時金\n年金形式の受取総額 / 1,200万円（本問の提示額）\n一時金 / 所定の年金現価換算により1,100万円（本問の提示額）\n比較範囲 / 税引前の契約給付額。換算利率の算出は問わない\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。提示額では1,100万円＜1,200万円です。一時金は将来の年金を現価に換算した額で、単純な年金合計と区別します。数値は独自の仮定であり、具体的な換算額・率は契約によります。",
    "topic": "収入保障保険の受取方法",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-132",
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "choiceExplanations": [
      "正解。与件の一時金1,100万円は年金合計1,200万円より100万円少額です。",
      "不適切。一時金と将来の年金合計が必ず等額になるわけではありません。"
    ],
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/40.html",
    "additionalSourceUrls": [],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の確定年金では、被保険者が死亡した後も残り7回分に対応する年金または所定の一時金を受取人が受け取れる。\n〈確定年金と死亡後の残期間〉\n項目 / 条件\n契約 / 10年確定年金\n支払回数 / 年1回、合計10回\n死亡時点 / 3回の年金を受領済み。第4回の支払前に死亡\n死亡後 / 残期間相当の年金または一時金を所定の受取人へ支払う契約\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。確定年金は生死にかかわらず所定期間の給付を保証します。10回中3回受取済みなので残りは7回分です。一時金は年金合計と常に同額とせず所定の換算によります。公的年金の加入月数計算ではありません。",
    "topic": "確定年金と死亡後の残期間",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-133",
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "choiceExplanations": [
      "正解。契約上の10回から受領済み3回を引いた7回分に対応する給付です。",
      "不適切。生存中だけ支払う年金と確定年金を混同しています。"
    ],
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/30.html",
    "additionalSourceUrls": [],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の事故では、地震火災費用保険金の規定があるため、地震を原因とする焼損額1,000万円の全額が、通常の火災損害保険金として支払われる。\n〈地震火災の直接損害と費用保険金〉\n項目 / 条件\n保険対象 / 住居専用建物\n火災保険金額 / 2,000万円\n地震保険 / 付帯していない\n事故 / 地震を原因とする火災で建物が半焼以上と判定\n焼損額 / 1,000万円\n地震火災費用の契約上の算式 / 火災保険金額の5％、1事故300万円限度\n支払条件 / 地震火災費用の支払条件を満たす。別の補償・他保険調整なし\n法令基準日：2026年4月1日。人物・金額・契約条件は独自の仮定。\n地震保険の損害区分認定、個別商品の全約款・拡張特約・実際の保険金査定は今回の確認対象外。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。地震を原因とする焼損の直接損害は、通常の火災損害保険金の対象ではありません。与件の地震火災費用はmin(2,000万円×5％,300万円)＝100万円で、焼損額1,000万円を全額補償するものではありません。この算式は本問の契約条件であり、すべての商品に共通する支払条件ではありません。",
    "topic": "地震火災費用と損害保険金",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-134",
    "contentReview": "v112_fire_earthquake_scoped_migration",
    "sourceUrl": "https://soudanguide.sonpo.or.jp/home/q050.html",
    "sourceLabel": "財務省公開資料・日本損害保険協会：火災/地震保険の基本区分",
    "reviewedAt": "2026-10-13",
    "choiceExplanations": [
      "不適切。費用保険金と、地震火災による直接損害全額の補償を混同しています。",
      "正解。与件では限定的な費用保険金100万円であり、直接損害1,000万円の全額補償ではありません。"
    ],
    "additionalSourceUrls": [
      "https://www.mof.go.jp/about_mof/councils/jishin_benkyoukai/proceeding/material_20260128_02.pdf"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.112：建物/家財、事故原因、損害保険金/費用、付帯と保険金額を限定確認。2026年1月28日資料で4月基準以前の制度を照合。個別約款・全支払条件・包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "資料の事故Aは、施設所有（管理）者賠償責任保険で検討する事故の例である。\n〈店舗の賠償事故の原因と被害者〉\n事例 / 条件\n事故A / 店舗床の水濡れを放置し、来店客が転倒して負傷\n事故B / 販売・引渡し後の弁当の衛生上の欠陥により購入者が食中毒\n事故C / 業務中の従業員が労災事故で負傷\n事故D / 保管を引き受けた顧客のカメラを破損\n共通条件 / 事業者がそれぞれの被害者に法律上の賠償責任を負う\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。施設の管理不備による来店客のけがへの賠償は、施設所有（管理）者賠償責任保険を検討します。引渡し後の食品が原因の事故Bとは原因が異なります。",
    "topic": "施設・生産物・使用者・受託財物の賠償責任",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-135",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "choiceExplanations": [
      "正解。店舗床の管理不備が原因の事故Aは施設管理に伴う賠償事故です。",
      "不適切。施設管理の不備と引渡し後の生産物の欠陥を区別します。"
    ],
    "sourceUrl": "https://www.sonpo.or.jp/sme_insurance/liability/",
    "sourceLabel": "日本損害保険協会：事業者の賠償責任保険",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/body/q094.html",
      "https://www.sonpo.or.jp/sme_insurance/explanation/article02/",
      "https://www.tokiomarine-nichido.co.jp/hojin/pdf/ippan_yakkan_20220101.pdf"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の事故Bに対応する保険として、基本的な対象区分が最も適切なものはどれか。\n〈店舗の賠償事故の原因と被害者〉\n事例 / 条件\n事故A / 店舗床の水濡れを放置し、来店客が転倒して負傷\n事故B / 販売・引渡し後の弁当の衛生上の欠陥により購入者が食中毒\n事故C / 業務中の従業員が労災事故で負傷\n事故D / 保管を引き受けた顧客のカメラを破損\n共通条件 / 事業者がそれぞれの被害者に法律上の賠償責任を負う\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "生産物賠償責任保険（PL保険）",
      "施設所有（管理）者賠償責任保険",
      "使用者賠償責任保険"
    ],
    "answer": 0,
    "explanation": "販売・引渡し後の食品の欠陥が購入者の身体に損害を生じさせた事故Bでは、生産物賠償責任保険（PL保険）を検討します。施設管理、従業員の労災、預かった財物の破損とは区別します。",
    "topic": "施設・生産物・使用者・受託財物の賠償責任",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-136",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "choiceExplanations": [
      "正解。販売・引渡し後の食品を原因とする購入者の食中毒は、生産物事故による賠償責任に該当し得ます。",
      "施設管理の不備で店内の客が転倒する事故などを想定した補償で、販売食品そのものを原因とする事故とは区別します。",
      "従業員の労災事故に伴う使用者の賠償責任に備えるもので、購入者の食中毒は対象が異なります。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/body/q094.html",
    "sourceLabel": "日本損害保険協会：事業者の賠償責任保険",
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/sme_insurance/liability/",
      "https://www.sonpo.or.jp/sme_insurance/explanation/article02/",
      "https://www.tokiomarine-nichido.co.jp/hojin/pdf/ippan_yakkan_20220101.pdf"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "2026年中、Aさんが資料の満期保険金を一時金で受け取った。この保険金に係る一時所得から総所得金額に算入する金額は（　）万円である。\n〈満期保険金の計算資料〉\n項目 / 内容\n保険料の実質負担者・受取人 / いずれもAさん\n満期保険金の受取額 / 480万円\nAさんが払い込んだ保険料の総額 / 350万円\n受取りの方法 / 一時金\n保険期間・払込方法 / 10年、年払\n他の一時所得や配当金はなく、源泉分離課税となる金融類似商品ではない。税額そのものは問わない。",
    "choices": [
      "40",
      "80",
      "130"
    ],
    "answer": 0,
    "explanation": "まず480－350＝130万円の差益から、一時所得の特別控除50万円を差し引くと一時所得は80万円。総所得金額に算入するのはその2分の1の40万円です。80万円は2分の1にする前、130万円は特別控除前の差益です。",
    "topic": "満期保険金の一時所得",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-137",
    "contentReview": "v92_insurance_tax_scoped_primary_review",
    "choiceExplanations": [
      "正解。（480－350－50）×1/2＝40万円です。",
      "不適切。80万円は一時所得の金額であり、総所得金額に算入する際は2分の1にします。",
      "不適切。130万円は保険料を差し引いた後、特別控除50万円を差し引く前の金額です。"
    ],
    "taxYear": 2026,
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1755.htm",
    "sourceLabel": "国税庁：No.1755 生命保険契約に係る満期保険金等を受け取ったとき",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.92：所得補償保険金、満期保険金、死亡保険金について、支払原因・実質負担者・受取方法・所得区分・計算を限定照合。包括監修は未完了。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の保険給付を請求する権利について、保険法95条1項が定める一般的な消滅時効期間は（　）である。\n〈保険給付請求権の消滅時効〉\n項目 / 条件\n対象 / 保険法に基づく保険給付請求権\n契約 / 2026年4月1日以後の新規契約\n起算の考え方 / 権利を行使することができる時から\n除外条件 / 時効の完成猶予・更新、特別の取扱いは考慮しない\n問う範囲 / 法定期間。事故日から一律に起算する具体的日付計算は問わない\n法令基準日：2026年4月1日。人物・契約条件は独自設例。\n明示した条文/課税区分の限定確認。全法令・全約款・個別請求/税額の包括監修ではない。",
    "choices": [
      "3年間",
      "10年間",
      "1年間"
    ],
    "answer": 0,
    "explanation": "保険法95条1項の保険給付請求権は、権利を行使できる時から3年間行使しない場合に時効で消滅するという規定です。契約日から3年、事故日から必ず3年と一律に置き換えません。完成猶予・更新等や実際の請求手続きは別の検討です。",
    "topic": "保険給付請求権の消滅時効",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-138",
    "contentReview": "v116_consent_limitation_roles_scoped_migration",
    "choiceExplanations": [
      "正解。対象は保険給付請求権で、法定期間は3年間です。",
      "不適切。この請求権の一般的な期間は10年間ではありません。",
      "不適切。保険者の保険料請求権等と対象を混同せず、保険給付請求権は3年間です。"
    ],
    "sourceUrl": "https://laws.e-gov.go.jp/law/420AC0000000056",
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/16920080606056.htm"
    ],
    "sourceLabel": "保険法38条/95条限定照合、または国税庁1750（2026年4月1日現在）",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Article95(1); current indexed wording vs original wording, effective2020-04-01 metadata; exact historical full text pending; ID初回確認時期未確定。条文照合と基準日時点全改正/個別契約監修は区別。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の仕組みを持つ一般的な特約の名称は（　）である。\n〈死亡保険金の生前受取〉\n項目 / 条件\n医師の判断 / 被保険者の余命が6か月以内\n給付の性格 / 所定範囲内で死亡保険金の一部または全部を生前に受け取る\n受取額 / 請求対象額から所定の利息・保険料等を控除\n問う範囲 / 特約の名称。税金・具体的な受取額の算定は問わない\n法令基準日：2026年4月1日。条件・金額は独自の学習用設例。\n基本的な仕組みと明示条件を確認する。商品別全約款・全法令・税務の包括監修ではない。",
    "choices": [
      "リビング・ニーズ特約",
      "入院日額の給付を目的とする医療保険の主契約",
      "満期生存時の給付を備える養老保険の主契約"
    ],
    "answer": 0,
    "explanation": "リビング・ニーズ特約は、所定の余命条件を満たす場合に死亡保険金を生前に受け取る仕組みです。入院日数に応じる給付や満期生存時の給付とは異なります。請求対象額と控除後の実際の受取額も区別します。",
    "topic": "死亡保険金の生前受取",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-139",
    "contentReview": "v115_medical_living_payment_scoped_migration",
    "choiceExplanations": [
      "正解。資料は死亡保険金を前払いするリビング・ニーズ特約の基本構造です。",
      "不適切。入院日額の給付は支払対象入院日数等に応じるもので、死亡保険金の前払いとは異なります。",
      "不適切。養老保険の満期給付は満期時の生存を条件とし、余命判断による死亡保険金の前払いではありません。"
    ],
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/special/9259.html",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/law/shitsugi/shotoku/01/03.htm"
    ],
    "sourceLabel": "生命保険文化センター：医療・生前給付・保険料払込の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.115：給付対象日数/余命条件/全額請求/控除/払込頻度と期間を独自表で限定確認。新改訂内容照合と独立算術を分離。国税庁は給付構造の補助照合のみで税務移行を計上しない。商品約款と基準日法令全体は包括未確認。"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "資料の相手の車や塀への法律上の賠償責任に備える保険は（　）である。\n〈自動車事故で区別する損害〉\n損害・場面 / 条件\n事故 / 国内の公道で契約自動車が第三者の車に衝突\n相手の身体 / 無関係の第三者が負傷し、法律上の賠償責任が生じた\n相手の財物 / 第三者所有の車や塀を損壊し、法律上の賠償責任が生じた\n本人の身体 / 契約自動車の運転者本人のけが\n本人の車両 / 契約自動車自体の修理費\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "対物賠償保険",
      "車両保険",
      "人身傷害保険"
    ],
    "answer": 0,
    "explanation": "対物賠償保険を検討します。第三者の財物への賠償と、契約自動車自体の損害に備える車両保険、本人等の身体損害に備える人身傷害保険は対象が異なります。",
    "topic": "自賠責と任意自動車保険の対象区分",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-140",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "choiceExplanations": [
      "正解。他人の車・塀等の物的損害への法律上の賠償責任に備えます。",
      "車両保険は通常、自分の契約車両自体の損害に備えます。",
      "人身傷害保険は事故に伴う被保険者等の身体損害の補償です。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/car/about.html",
    "sourceLabel": "日本損害保険協会：自動車保険の補償区分",
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/insurance/car/point.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "日経平均株価は、東京証券取引所の全上場銘柄の株価合計を銘柄数で割るだけの、未調整の単純平均指数である。\n〈日経平均の対象と調整〉\n項目 / 条件\n参照する論点 / 日経平均株価の対象銘柄と算出方法\n対象から除外するもの / 特定日の株価、指数値、実際の除数・銘柄入替結果\n比較 / 全上場銘柄の未調整単純平均かどうかを判断\n算出方法の限定確認。2026年4月1日時点の個別銘柄一覧や全算出要領改訂履歴を照合したという意味ではない。\n法令基準日：2026年4月1日。確認日と資料公表日を区別し、基本定義・指定例の限定点検として扱う。\n設例・表は独自表現で、公式資料の文章や画像を転載しない。全商品約款や全法令改正の包括監修ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "対象は東証プライム市場から選定される225銘柄です。株価換算係数や除数による調整があり、全上場株式を同じ重みで単純平均する説明は誤りです。除数の実数は時点で変わるため固定値として覚えません。",
    "topic": "日経平均の対象と調整",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-141",
    "contentReview": "v125_funds_scoped_migration",
    "choiceExplanations": [
      "不適切。選定された225銘柄が対象で、全上場銘柄の未調整単純平均ではありません。",
      "正解。選定225銘柄の株価に株価換算係数の調整を行い、合計を除数で割って算出します。"
    ],
    "sourceUrl": "https://indexes.nikkei.co.jp/nkave/index/profile?idx=nk225",
    "additionalSourceUrls": [
      "https://indexes.nikkei.co.jp/atoz/2017/04/divisor.html"
    ],
    "sourceLabel": "公式発行元の基本定義・費用・取引方法の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式定義7問。指定数値の補助検算は別の法令改正照合件数に加算しない。単純再確認0、ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料のETFは、取引所の取引時間中に市場価格で売買するため、通常の株式と同様に指値や成行の注文を出すことができる。\n〈ETFの注文と約定〉\n項目 / 条件\n商品 / 東京証券取引所に上場する架空ETF\n市場価格の例 / 同一取引日の時点A：1口1,000円、時点B：1口1,020円\n注文条件 / 取引時間中で注文受付可能。売買停止・システム障害等はない\n時刻・取引時間の具体的な制度変更を問わず、注文方法の基本を限定確認。価格は独自仮定。\n法令基準日：2026年4月1日。確認日と資料公表日を区別し、基本定義・指定例の限定点検として扱う。\n設例・表は独自表現で、公式資料の文章や画像を転載しない。全商品約款や全法令改正の包括監修ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "ETFには市場での需給で変わる取引価格があります。指値は希望価格を指定する注文、成行は価格を指定しない注文です。注文を出せることと、希望価格で必ず約定することは別で、基準価額での約定も保証されません。",
    "topic": "ETFの注文と約定",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-142",
    "contentReview": "v125_funds_scoped_migration",
    "choiceExplanations": [
      "正解。ETFは取引所で市場価格により売買でき、指値・成行等の注文方法が使えます。",
      "不適切。通常の非上場投資信託と同じ価格決定方式に限定されるわけではありません。"
    ],
    "sourceUrl": "https://www.jpx.co.jp/faq/listed_product.html",
    "additionalSourceUrls": [
      "https://www.jpx.co.jp/equities/products/etfs/trading/"
    ],
    "sourceLabel": "公式発行元の基本定義・費用・取引方法の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式定義7問。指定数値の補助検算は別の法令改正照合件数に加算しない。単純再確認0、ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料のETFでは、1日に1回公表される基準価額と取引所の市場価格が常に一致するため、取引時間中の市場価格は動かない。\n〈基準価額と市場価格〉\n項目 / 条件\n商品 / 取引所に上場する架空ETF\n直近公表された基準価額 / 前日評価時点、1口当たり1,005円\n当日の市場価格 / 時点A：1口1,000円、時点B：1口1,020円\n時点の注意 / 前日基準価額と当日市場価格は同一時刻の評価ではない\n口数単位はすべて1口当たり。1万口当たりの表示と混同しない。架空価格で実データではない。\n法令基準日：2026年4月1日。確認日と資料公表日を区別し、基本定義・指定例の限定点検として扱う。\n設例・表は独自表現で、公式資料の文章や画像を転載しない。全商品約款や全法令改正の包括監修ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "ETFの基準価額は純資産に基づく値、市場価格は取引所での需給等で決まる値です。両者は乖離する場合があります。資料は公表時点が異なるので、この差だけで同時点のプレミアムや裁定利益を断定しません。",
    "topic": "基準価額と市場価格",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-143",
    "contentReview": "v125_funds_scoped_migration",
    "choiceExplanations": [
      "不適切。市場価格は取引時間中に動き、基準価額との一致は保証されません。",
      "正解。基準価額の公表頻度と市場価格の値動きは別です。資料でも市場価格は1,000円から1,020円へ動いています。"
    ],
    "sourceUrl": "https://www.jpx.co.jp/faq/listed_product.html",
    "additionalSourceUrls": [
      "https://www.jpx.co.jp/equities/products/etfs/etf-outline/01.html"
    ],
    "sourceLabel": "公式発行元の基本定義・費用・取引方法の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式定義7問。指定数値の補助検算は別の法令改正照合件数に加算しない。単純再確認0、ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料の2債券では、要求利回りの上昇による理論価格の下落率は、残存4年の方が残存1年より小さい。\n〈残存期間と理論価格変化〉\n項目 / 条件\n共通の額面・償還額 / 100円\n共通の年利子 / 2円（固定、各年末払い）\n残存期間 / 短期債1年、長期債4年\n要求利回り / 両債券とも年2％から年3％へ上昇\n評価モデル / 各年利子の割引現在価値の合計＋償還額の割引現在価値\n固定利付・満期一括償還、途中償還権なし。各年の割引率は同じと仮定する。\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "価格P＝Σ（t＝1～n）2÷（1＋y）^t＋100÷（1＋y）^n。y＝0.02でP＝100円。y＝0.03でn＝1は約99.0291円、n＝4は約96.2829円です。下落率は約0.9709％と約3.7171％。この比較は固定された提示条件の計算であり、利率や信用条件の違う全商品で同じ関係を保証するものではありません。",
    "topic": "残存期間と理論価格変化",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-144",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "choiceExplanations": [
      "不適切。1年債は約0.97％、4年債は約3.72％の下落なので、4年債の方が大きくなります。",
      "正解。上昇前はどちらも100円、上昇後は1年債約99.03円、4年債約96.28円。提示条件では4年債の方が下落率は大きいです。"
    ],
    "sourceUrl": "https://market.jsda.or.jp/shijyo/saiken/saiken/index9.html",
    "additionalSourceUrls": [],
    "sourceLabel": "JSDA/JPXの限定定義と提示条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "資料の指定モデルでは、AとBを半分ずつ組み合わせると、Aのみ又はBのみの場合より資産全体の収益率のばらつきを小さくできる。\n〈組合せによるばらつきの縮小〉\n項目 / 条件\n全2状態の収益率 / 状態1：A 0％、B 8％ ／ 状態2：A 8％、B 0％\n状態の確率 / 状態1、状態2とも2分の1\n期首配分 / A 50％、B 50％\n資産全体の収益率 / 期首比率による各収益率の加重平均\n状態は同じ期間の同時の結果。時点をずらしたデータを混ぜない。提示モデルの全状態とし、実際の将来状態を表すものではない。\n法令基準日：2026年4月1日。数値・資産は独自例。公式資料の図表・文章の転載ではない。\n円建て同一期間の税引前総収益率。途中の追加投資・引出し・配分変更、手数料・税、レバレッジなし。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "A、B単独の平均は4％、標準偏差は4％ポイント。半分ずつでは両状態で4％なので標準偏差0。これは2状態だけから成る指定モデルの結果で、現実の将来相関・利率・元本を保証するものではありません。",
    "topic": "組合せによるばらつきの縮小",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-145",
    "contentReview": "v124_diversification_scoped_migration",
    "choiceExplanations": [
      "正解。両状態とも0.5×0＋0.5×8＝4％（順序が逆でも同じ）。組合せの標準偏差は0です。",
      "不適切。AとB単独は0％と8％の間で変動しますが、半分ずつの組合せは提示モデル内で4％一定です。"
    ],
    "sourceUrl": "https://www.fsa.go.jp/policy/nisa2/invest/",
    "additionalSourceUrls": [],
    "sourceLabel": "金融庁/総務省統計局の定義と独自指定モデルの検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の限定照合3/指定モデル内部検算3。公式背景の参照を重複加算しない。法令改正照合0、ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料の債券の税引前年間利子額はいくらか。\n〈額面を基準とする利子〉\n項目 / 条件\n額面 / 100万円\n固定表面利率 / 年2％\n期間 / 利子計算上の満1年\n購入価格 / 年間利子の計算に用いない\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "2,000円",
      "20,000円",
      "200,000円"
    ],
    "answer": 1,
    "explanation": "額面100万円×年2％＝20,000円。率を小数に直して額面に掛けます。購入価格で割る利回りとは区別します。",
    "topic": "額面を基準とする利子",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-146",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "choiceExplanations": [
      "不適切。2,000円は2％を0.2％と扱った値です。",
      "正解。1,000,000×0.02＝20,000円です。",
      "不適切。200,000円は2％を20％と扱った値です。"
    ],
    "sourceUrl": "https://www.jpx.co.jp/glossary/sa/519.html",
    "additionalSourceUrls": [],
    "sourceLabel": "JSDA/JPXの限定定義と提示条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料の配当利回りとして、最も適切なものはどれか。\n〈同一の株式単位で比較する配当利回り〉\n項目 / 条件\n株価 / 2026年4月1日の提示株価 2500円\nBPS / 2025年末実績の1株当たり純資産 1000円\n年間1株配当 / 2025年1～12月の実績合計 50円\n普通株式のみ。EPS・BPSは必要な調整後の提示値。株式分割/併合、優先株、自己株式数の追加計算なし。\n配当は税引前。手数料・個人税額・売買差益なし。実績配当の将来継続を保証しない。\n法令基準日：2026年4月1日。企業・金額は独自仮定。指標の数学/定義確認であり、実企業の会計・投資判断・税法改正の包括監修ではない。",
    "choices": [
      "5％",
      "0.02％",
      "2％"
    ],
    "answer": 2,
    "explanation": "配当利回りの計算は年間1株配当÷株価×100です。配当利回り:50÷2500×100=2％。倍率と百分率を区別します。提示した実績年度・1株単位の値を用い、会社全体の利益や予想値へ置き換えません。指標だけで値上がりや割安が保証されるわけではありません。",
    "topic": "配当利回りの分母・単位・年度",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-147",
    "contentReview": "v121_equity_metrics_scoped_migration",
    "choiceExplanations": [
      "不適切。年間配当÷BPS:50÷1000×100=5％。",
      "不適切。配当÷株価=0.02を、100倍せず％表示した誤り。",
      "正解。配当利回り:50÷2500×100=2％。"
    ],
    "sourceUrl": "https://www.jpx.co.jp/glossary/ka/85.html",
    "additionalSourceUrls": [
      "https://port.jpx.co.jp/jpxhp/portdocs/beginner_a_03.html"
    ],
    "sourceLabel": "JPXの株式指標定義／独自提示額の独立検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂の指定数値/全選択肢を内部検算。公式定義との対応を併記し8問を法令改正照合件数に数えない。初回ID時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料の資産全体の期待収益率はどれか。\n〈期待収益率の加重平均〉\n項目 / 条件\n投資比率 / A：50％、B：50％\n期待収益率 / A：2％、B：6％\n計算式 / 投資比率×各期待収益率の合計\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n同じ円建て。提示収益率は値上がり・配当等を含む総収益率。途中の追加投資・引出し・配分変更・再投資、手数料・税額なし。期待値と実現値を区別。",
    "choices": [
      "3％",
      "4％",
      "8％"
    ],
    "answer": 1,
    "explanation": "期待収益率は4％。期待値は実際の収益を保証せず、資産の相関や独立性にかかわらず期待値の加重平均です。",
    "topic": "期待収益率の加重平均",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-148",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "choiceExplanations": [
      "不適切。3％はA75％、B25％なら得られる値で、提示比率と異なります。",
      "正解。0.5×2＋0.5×6＝4％です。",
      "不適切。8％は2＋6をそのまま足した値で、投資比率を掛けていません。"
    ],
    "sourceUrl": "",
    "additionalSourceUrls": [],
    "sourceLabel": "提示加重平均式の内部検算（法令一次資料照合ではない）",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料の変化は、対米ドルで円にとってどれか。\n〈円高の判断〉\n項目 / 条件\n時点A / 1米ドル＝145円\n時点B / 1米ドル＝135円\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n外貨額の増減、利息、売買、追加投資・引出し、手数料、税額は考慮しない。",
    "choices": [
      "円安",
      "円高",
      "変化なし"
    ],
    "answer": 1,
    "explanation": "少ない円で同じ米ドルを購入できるため、対ドルで円の価値が高まっています。",
    "topic": "円高の判断",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-149",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "choiceExplanations": [
      "不適切。必要な円の減少は円安ではありません。",
      "正解。同じ1米ドルを少ない円で購入できるため円高です。",
      "不適切。145円から135円へ変化しています。"
    ],
    "sourceUrl": "https://www.boj.or.jp/about/education/oshiete/intl/g18.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "日本銀行の円高・円安定義／独自仮定の換算検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資料のAさんが2026年に買い付ける対象商品の、NISA制度上の非課税保有期間はどれか。\n〈新旧制度の保有期間〉\n項目 / 条件\n対象者 / 2026年1月1日時点で25歳の国内居住者\n法令基準日・対象買付 / 2026年4月1日。2026年のNISAつみたて投資枠で対象投資信託を取得\n旧制度の保有 / 2023年に旧つみたてNISAで取得した別商品も保有するが、本問の対象外\n区別するもの / 非課税制度の期間と、投資信託自体の信託期間・繰上償還\n法令基準日2026年4月1日、確認日2026年10月15日。設例・数値は独自仮定。\nNISAは2024年開始の成人向け制度を対象とし、2027年以降の未成年者制度を本問へ混ぜない。",
    "choices": [
      "最大20年間",
      "最大5年間",
      "期限なし"
    ],
    "answer": 2,
    "explanation": "2026年取得分は2024年開始のNISA制度の対象で、非課税保有期間は無期限です。2023年取得の旧制度商品まで自動的に無期限になるわけではなく、新制度へのロールオーバーもできません。制度上の無期限は、ファンドが永久に存続する保証や元本保証ではありません。",
    "topic": "新旧制度の保有期間",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.fsa.go.jp/policy/nisa2/know/index.html",
    "sourceLabel": "財務省・金融庁の制度基本事項と限定適用条件照合",
    "id": "fp3-150",
    "contentReview": "v126_nisa_bonds_scoped_migration",
    "choiceExplanations": [
      "不適切。20年は2023年までの旧つみたてNISAの非課税保有期間です。",
      "不適切。5年は旧一般NISAの非課税保有期間です。",
      "正解。2024年開始制度の非課税保有期間は無期限で、本問の2026年取得分も該当します。"
    ],
    "additionalSourceUrls": [
      "https://www.mof.go.jp/tax_policy/publication/brochure/zeisei23/01.html",
      "https://www.jsda.or.jp/nisa/faq/"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式制度論点4問。法令全文/全歴史改正未確認。補助計算は重複加算なし。ID初回時期未確定。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "国内銀行の普通預金利息は、原則として支払時の源泉徴収によって納税が完結するため、確定申告で給与所得と合算して税額を精算することはできない。\n〈普通預金利息の課税資料〉\n項目 / 内容\n所得区分 / 利子所得\n所得税等の税率 / 15.315％\n地方税の税率 / 5％\n原則の課税方式 / 源泉分離課税\n特定公社債等の利子や非課税制度などは別途取り扱う。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。国内預貯金の利子は原則として、所得税および復興特別所得税15.315％と地方税5％が源泉徴収され、それにより納税が完結する源泉分離課税です。普通預金利息を給与所得と合算して確定申告することはできません。特定公社債等や非課税制度は別です。",
    "topic": "源泉徴収・年末調整・確定申告",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-151",
    "contentReview": "v87_withholding_year_end_adjustment_return_scoped_primary_review",
    "choiceExplanations": [
      "正解。普通預金利息は原則として源泉分離課税で納税が完結します。",
      "誤り。給与所得の源泉徴収のように年末調整・確定申告で精算する仕組みではありません。"
    ],
    "taxYear": 2026,
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1310.htm",
    "sourceLabel": "国税庁：No.1310 利息を受け取ったとき",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.87：給与の源泉徴収と年末調整、給与所得者の確定申告基準、普通預金利息の源泉分離課税を初回公式照合。包括監修未完了。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "資料の公的年金等に係る雑所得は、老齢年金の収入金額から給与所得控除額を差し引いて計算する。正しければ〇、誤っていれば×を選びなさい。\n〈老齢年金に用いる控除〉\n項目 / 条件\n対象者・年分 / 日本の居住者である個人Aさん、2026年分\n年金の種類 / 国民年金・厚生年金の老齢年金。遺族年金・障害年金や生命保険契約の個人年金は扱わない\n対象の段階 / 源泉徴収前の公的年金等収入から、その所得金額を求める段階\n比較する控除 / 給与所得控除と公的年金等控除。具体的な控除額や税額は問わない\n法令基準日2026年4月1日。資料は独自の設例。指定する計算段階を確認すること。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "老齢年金については、公的年金等の収入から公的年金等控除を差し引くのが基本です。給与所得控除との置き換えはできません。公的年金等控除の具体額は年齢・年金収入・他の所得などの条件で判断するため、今回は定額を提示していません。所得金額と源泉徴収額・年金振込額も区別します。",
    "topic": "老齢年金に用いる控除",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-152",
    "contentReview": "v130_income_retirement_scoped_migration",
    "choiceExplanations": [
      "不適切。給与所得控除を使うという部分が誤りです。",
      "正解。公的年金等に係る雑所得では、公的年金等控除を使います。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1600.htm",
    "sourceLabel": "国税庁：給与・年金・退職所得の基本計算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要事項4/指定条件内部検算2。控除額の計算と所得金額/税額を区別。全改正・条文全文・全例外の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "資料の純損失は、法令基準日時点の制度の原則では、翌年以後3年間にわたり繰り越して所得金額から控除することができる。正しければ〇、誤っていれば×を選びなさい。\n〈純損失の原則的な繰越期間〉\n項目 / 条件\n対象者 / 日本の居住者で、小売業を営む個人Aさん\n損失の発生 / 2025年分について青色申告。事業の損失を損益通算しても控除しきれない純損失が残った\n申告等 / 損失が生じた年の申告とその後の連続申告など、繰越しの要件を満たす\n損失の区分 / 災害による損失ではなく、特定非常災害等による5年特例の適用なし\nほかの制度 / 前年への繰戻し還付は受けず、株式の譲渡損失・居住用財産の特例などは扱わない\n期間内でも既に控除した損失は再利用しない。各年の控除額は未控除残高や所得により決まり、本問はその金額を計算しない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "損益通算をしても残る純損失について、提示条件では原則として翌年以後3年間繰り越せます。2025年分の損失なら、法令基準日時点の制度で対象となる年分は2026～2028年分です。事業の赤字全額をそのまま純損失とせず、先に損益通算を行います。災害特例の5年とは区別し、繰戻し還付に使用した同じ損失を重ねて繰り越すものではありません。",
    "topic": "純損失の原則的な繰越期間",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-153",
    "contentReview": "v131_blue_return_loss_scoped_migration",
    "choiceExplanations": [
      "正解。資料は通常の青色申告による純損失で、原則の3年繰越しに該当します。",
      "不適切。資料の条件で原則3年とする記述は正しいため、×ではありません。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2070.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/shinkoku/tebiki/2025/pdf/003.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2210.htm"
    ],
    "sourceLabel": "国税庁：青色申告・損益通算・損失申告の手引き",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要事項公式照合3/過去確認論点の再確認1を区別。法令基準日と2025損失発生年・2026以後の対象年分、確認日は別。条文全文・全例外は未確認。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "資料の固定資産税は地方税である。一般に市町村が課税するが、東京都23区内では都が都税として課税する取扱いがあり、国税ではない。正しければ〇、誤っていれば×を選びなさい。\n〈固定資産税の課税主体〉\n項目 / 条件\n比較する地域 / 通常の市町村と、東京都23区内\n対象とする税 / 土地・家屋に係る固定資産税\n問う内容 / 国税/地方税の区分と、東京都23区の課税主体\n範囲 / 評価額・税率・住宅用地の軽減計算は問わない\n法令基準日は2026年4月1日。地域による課税主体を区別する基本事項の設問。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "固定資産税は地方税です。市町村が課税する基本と、東京都23区内の都による課税を区別します。「都が課税する」から国税になるという理解は誤りです。",
    "topic": "固定資産税の課税主体",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-154",
    "contentReview": "v132_tax_classification_documents_scoped_migration",
    "choiceExplanations": [
      "正解。固定資産税は地方税で、23区内の土地・家屋は都が都税として課税します。",
      "不適切。都税として課税しても国税に変わるわけではなく、資料の説明は正しい記述です。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/osirase/9000.htm",
    "additionalSourceUrls": [
      "https://www.tax.metro.tokyo.lg.jp/kazei/real_estate/kotei_tosi"
    ],
    "sourceLabel": "国税庁・東京都主税局の基本事項限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要事項4/既存主要論点再確認1を分離。医療費の旧確認論点は重複加算せず、新改訂の健康増進薬品の誤答根拠を確認。法令全文・全例外は未確認。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "2026年12月1日以後の年末調整で、次の子は所得税の扶養控除の対象となる。\n〈2026年分の扶養・特定親族に関する資料〉\n項目 / 内容\n判定時点 / 2026年12月31日\n子の年齢 / 15歳\n合計所得金額 / 60万円\nその他の条件 / 納税者と生計を一にし、他の扶養親族要件を満たす\n2026年分の所得税を対象とし、国外居住親族ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。合計所得金額60万円は、2026年分の扶養親族の所得要件62万円以下を満たします。しかし扶養控除の対象となる控除対象扶養親族は年末時点で16歳以上です。この子は15歳なので扶養親族ではあっても扶養控除の対象ではありません。年齢要件と所得要件を分けて判定します。",
    "topic": "税額控除と所得控除",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-155",
    "contentReview": "v83_2026_dependent_requirements_scoped_primary_review",
    "sourceUrl": "https://www.nta.go.jp/publication/pamph/gensen/2026kaisei.pdf",
    "sourceLabel": "国税庁：令和8年4月 源泉所得税の改正のあらまし",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.83：2026年分の所得要件・年齢・控除額・施行時期を限定照合。IDには過去の公式照合履歴があるが、改訂後の主要論点は今回初めて照合。包括監修未完了。",
    "taxYear": 2026,
    "choiceExplanations": [
      "誤り。×。合計所得金額60万円は、2026年分の扶養親族の所得要件62万円以下を満たします。しかし扶養控除の対象となる控除対象扶養親族は年末時点で16歳以上です。この子は15歳なので扶養親族ではあっても扶養控除の対象ではありません。年齢要件と所得要件を分けて判定します。",
      "正解。×。合計所得金額60万円は、2026年分の扶養親族の所得要件62万円以下を満たします。しかし扶養控除の対象となる控除対象扶養親族は年末時点で16歳以上です。この子は15歳なので扶養親族ではあっても扶養控除の対象ではありません。年齢要件と所得要件を分けて判定します。"
    ]
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "資料による退職所得控除額はいくらか。退職所得金額や税額ではなく控除額を答えること。\n〈退職所得控除の二段階計算〉\n項目 / 条件\n対象年分 / 2026年分。日本の居住者である個人\n退職手当 / 勤務先から一度だけ受ける通常の退職一時金。本人負担掛金なし\n勤続期間 / 満30年（1年未満の端数なし）\n勤続等 / 一般従業員のみとして連続勤務。役員等の勤務期間なし\n控除の調整 / 過去・同年の他の退職金や確定拠出年金の一時金受給なし。勤続期間の重複調整なし\n追加条件 / 障害が原因の退職ではなく、ほかの特例なし\n法令基準日2026年4月1日。資料は独自の設例。指定する計算段階を確認すること。",
    "choices": [
      "2,100万円",
      "1,500万円",
      "1,200万円"
    ],
    "answer": 1,
    "explanation": "最初の20年分800万円に、残り10年分の70×10＝700万円を加え、1,500万円となります。全勤続年数に同じ単価を掛けたり、加算分だけを答えたりしないこと。2分の1を掛けるのは退職所得金額を計算する次の段階であり、控除額には掛けません。",
    "topic": "退職所得控除の二段階計算",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm",
    "sourceLabel": "国税庁：給与・年金・退職所得の基本計算",
    "id": "fp3-156",
    "contentReview": "v130_income_retirement_scoped_migration",
    "choiceExplanations": [
      "不適切。30×70＝2,100万円は、20年以下の部分にも70万円を用いた誤りです。",
      "正解。800＋70×10＝1,500万円です。",
      "不適切。30×40＝1,200万円は、20年超の部分にも40万円を用いた誤りです。"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要事項4/指定条件内部検算2。控除額の計算と所得金額/税額を区別。全改正・条文全文・全例外の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "資料の本人掛金について、2026年分の所得税では（　）として24万円を所得控除する。\n〈iDeCoの本人負担掛金〉\n項目 / 内容\n対象年分 / 2026年分\n本人が支払ったiDeCo掛金 / 合計24万円\n拠出条件 / 加入要件・限度額に適合した掛金\n他の対象掛金 / なし\n所得控除の区分を問う。24万円がそのまま税額から差し引かれるという意味ではない。\n法令基準日：2026年4月1日。資料・人物・金額は独自の仮定。",
    "choices": [
      "社会保険料控除",
      "生命保険料控除",
      "小規模企業共済等掛金控除"
    ],
    "answer": 2,
    "explanation": "iDeCoの加入者本人が支払った掛金24万円は、小規模企業共済等掛金控除として全額を所得控除します。国民年金保険料等の社会保険料控除、民間の保険料に関する生命保険料控除とは区分が違います。控除額と実際の税負担の減少額は区別します。",
    "topic": "iDeCo掛金の全額所得控除",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-157",
    "contentReview": "v110_public_insurance_pension_scoped_migration",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1135.htm",
    "sourceLabel": "国税庁No.1135：個人型年金加入者掛金の控除",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.110：本人/世帯・加入区分・対象年度・支払者・全選択肢・解説・資料を公式一次資料と限定照合。2026年4月1日以後の未対象の改正を適用せず、全例外・約款・包括監修は未完了。",
    "choiceExplanations": [
      "不適切。iDeCo掛金は国民年金保険料等と同じ社会保険料控除ではありません。",
      "不適切。民間の生命保険料等に適用する控除とは別です。",
      "正解。個人型年金加入者掛金は小規模企業共済等掛金控除です。"
    ],
    "additionalSourceUrls": [],
    "taxYear": 2026
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "資料の条件で勤続年数が20年を超える場合、退職所得控除の計算で20年超の部分に加算する1年当たりの額はどれか。\n〈勤続20年超の加算単価〉\n項目 / 条件\n対象年分 / 2026年分。日本の居住者である個人\n退職手当 / 勤務先から一度だけ受ける通常の退職一時金。本人負担掛金なし\n勤続年数 / 20年を超え、年未満の端数はないものとする\n勤続等 / 一般従業員のみとして連続勤務。役員等の勤務期間なし\n控除の調整 / 過去・同年の他の退職金や確定拠出年金の一時金受給なし。勤続期間の重複調整なし\n追加条件 / 障害が原因の退職ではなく、ほかの特例なし\n法令基準日2026年4月1日。資料は独自の設例。指定する計算段階を確認すること。",
    "choices": [
      "60万円",
      "40万円",
      "70万円"
    ],
    "answer": 2,
    "explanation": "20年までの控除額800万円を先に置き、超過年数の1年につき70万円を加えます。40万円と70万円を使う区分が異なります。60万円はこの基本計算の単価ではありません。",
    "topic": "勤続20年超の加算単価",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm",
    "sourceLabel": "国税庁：給与・年金・退職所得の基本計算",
    "id": "fp3-158",
    "contentReview": "v130_income_retirement_scoped_migration",
    "choiceExplanations": [
      "不適切。超過部分の年当たり額は60万円ではありません。",
      "不適切。40万円は20年以下の部分に用いる年当たり額です。",
      "正解。20年を超える部分は1年当たり70万円を加算します。"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要事項4/指定条件内部検算2。控除額の計算と所得金額/税額を区別。全改正・条文全文・全例外の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "資料のAさんが承認を受け、所定の帳簿記録等に基づいて行う申告方式の名称はどれか。\n〈青色申告と還付申告の区別〉\n項目 / 条件\n対象者・年分 / 日本の居住者で、小売業を営む個人Aさん。2026年分\n承認 / 所定の承認申請を行い、税務署長の承認を受けている\n記帳等 / 申告に必要な帳簿記録と書類保存を行う\n比較する制度 / 帳簿・承認を前提に所定の特典を受ける申告方式と、納め過ぎた税金の還付を求める申告を区別する\n青色申告の対象所得は事業・不動産・山林。白色申告を記帳不要と誤解しないこと。",
    "choices": [
      "青色申告",
      "還付申告",
      "白色申告"
    ],
    "answer": 0,
    "explanation": "青色申告は承認と記帳等を前提とする制度です。帳簿があるという事実だけで青色申告になるわけではありません。また、還付の有無と青色・白色の区分は別の観点で、青色申告でも還付申告となることがあります。個別の特別控除額は要件によるため、本問では金額を指定しません。",
    "topic": "青色申告と還付申告の区別",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-159",
    "contentReview": "v131_blue_return_loss_scoped_migration",
    "choiceExplanations": [
      "正解。資料の帳簿・承認を前提とする申告方式は青色申告です。",
      "不適切。還付申告は納め過ぎた税金の還付を求める申告であり、資料の方式の名称ではありません。",
      "不適切。白色申告にも記帳等の義務がありますが、資料は承認を受けた青色申告を尋ねています。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2070.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2030.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2080.htm"
    ],
    "sourceLabel": "国税庁：青色申告・損益通算・損失申告の手引き",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要事項公式照合3/過去確認論点の再確認1を区別。法令基準日と2025損失発生年・2026以後の対象年分、確認日は別。条文全文・全例外は未確認。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "次の資料について、2026年分の給与所得の金額は（　）万円である。\n〈給与所得の計算資料〉\n項目 / 内容\n給与収入 / 200万円\n対象の計算 / 2026年12月1日以後の年末調整\n給与所得の計算（この収入区分） / 給与収入から74万円を差し引く\n所得金額調整控除・特定支出控除などの調整はない。",
    "choices": [
      "132",
      "126",
      "200"
    ],
    "answer": 1,
    "explanation": "給与所得は200－74＝126万円です。2026年分のこの収入区分には74万円の控除を適用します。132万円は200×30％＋8万円＝68万円を旧計算で控除した金額、200万円は控除前の収入です。給与収入660万円未満では所定の給与所得計算表等を用い、この問題では200万円の区分だけを示しています。原則施行日は2026年12月1日で、2026年分に適用されます。施行前の月々の源泉徴収を問う問題ではありません。",
    "topic": "給与所得計算",
    "createdVersion": 9,
    "revision": 58,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-160",
    "contentReview": "v82_limited_primary_source_and_conditions_review",
    "choiceExplanations": [
      "誤答。給与所得は200－74＝126万円です。2026年分のこの収入区分には74万円の控除を適用します。132万円は200×30％＋8万円＝68万円を旧計算で控除した金額、200万円は控除前の収入です。給与収入660万円未満では所定の給与所得計算表等を用い、この問題では200万円の区分だけを示しています。原則施行日は2026年12月1日で、2026年分に適用されます。施行前の月々の源泉徴収を問う問題ではありません。",
      "正解。給与所得は200－74＝126万円です。2026年分のこの収入区分には74万円の控除を適用します。132万円は200×30％＋8万円＝68万円を旧計算で控除した金額、200万円は控除前の収入です。給与収入660万円未満では所定の給与所得計算表等を用い、この問題では200万円の区分だけを示しています。原則施行日は2026年12月1日で、2026年分に適用されます。施行前の月々の源泉徴収を問う問題ではありません。",
      "誤答。給与所得は200－74＝126万円です。2026年分のこの収入区分には74万円の控除を適用します。132万円は200×30％＋8万円＝68万円を旧計算で控除した金額、200万円は控除前の収入です。給与収入660万円未満では所定の給与所得計算表等を用い、この問題では200万円の区分だけを示しています。原則施行日は2026年12月1日で、2026年分に適用されます。施行前の月々の源泉徴収を問う問題ではありません。"
    ],
    "taxYear": 2026,
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1410.htm",
    "sourceLabel": "国税庁：給与所得控除",
    "reviewNote": "Ver.82：対象年・与件・全選択肢・解説を公式資料で再確認。過去の公式照合履歴があるため新規初回照合に加算しない。包括監修未完了。",
    "sourceCheckedDate": "2026-10-14"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料では、Aさんは2026年度分の固定資産税の法令上の納税義務者には通常ならない。正しければ〇、誤っていれば×を選びなさい。\n〈賦課期日と売買後の精算〉\n項目 / 条件\n2026年1月1日 / 売主Bさんが土地の所有者として登記され、固定資産課税台帳にも登録されている\n2026年1月2日 / 買主Aさんが売買により取得し、同日に所有権移転登記も完了した\nその後 / 2026年末までAさんが所有。Bさんも存命で、相続や所有者不明などの特別な取扱いはない\n精算の仮定 / 売買当事者が税相当額を日割り等で精算する合意をしても、法令上の納税義務者とは区別する\n対象 / 2026年度分の固定資産税。次年度の課税や精算額は問わない\n法令基準日2026年4月1日、確認日とは別。税目の基本事項または提示設例の適用を確認する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "固定資産税の賦課期日は毎年1月1日です。資料ではその時点の登記等の名義はBさんなので、通常はBさんが2026年度分の納税義務者です。1月2日以後の売買による移転と、当事者間の合意による税相当額の精算を、法令上の納税義務の変更と混同しないこと。",
    "topic": "賦課期日と売買後の精算",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-161",
    "contentReview": "v135_property_tax_scoped_migration",
    "choiceExplanations": [
      "正解。賦課期日である1月1日の登記等の条件から、通常はBさんが納税義務者です。",
      "不適切。日割り等でAさんに負担が生じても、本問の法令上の納税義務者がAさんへ変わるわけではありません。"
    ],
    "sourceUrl": "https://www.city.joso.lg.jp/data/doc/1774848303_doc_149_0.pdf",
    "additionalSourceUrls": [
      "https://www.tax.metro.tokyo.lg.jp/kazei/real_estate/kotei_tosi"
    ],
    "sourceLabel": "自治体・国税庁の不動産税基本事項と設例適用の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要論点3/共通公式ルール適用2/過去論点再確認2を区別。法令全文/全改正/免税点等の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料のように所定の要件を満たす場合、定期建物賃貸借の期間を6か月とすることも認められる。正しければ〇、誤っていれば×を選びなさい。\n〈6か月の定期建物賃貸借〉\n項目 / 条件\n対象 / 個人が新たに借りる居住用建物。旧契約からの切替えではない\n予定する期間 / 6か月。期間の始めと終わりを契約で定める\n予定する契約 / 更新がない旨を定めた定期建物賃貸借契約\n締結方法 / 今回は紙の書面で契約し、賃貸人は契約書とは別に事前説明文書を交付して必要な説明を行うものとする\n範囲 / 所定の手続を満たす前提で、6か月の期間設定と更新の有無を問う。中途解約や終了通知の期間計算は問わない\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "所定の要件を満たす定期建物賃貸借では、6か月のような1年未満の期間も有効に定められます。期間満了による終了と、当事者が改めて合意する再契約は区別します。普通建物賃貸借で1年未満の期間を定めた場合は、期間の定めがないものとみなされる扱いがあります。資料では紙の手続を選んでいますが、法律上、一定の要件を満たす電子化も認められています。",
    "topic": "6か月の定期建物賃貸借",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-162",
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "choiceExplanations": [
      "正解。定期建物賃貸借では1年未満の期間も有効に定められます。",
      "不適切。所定の要件を満たす定期建物賃貸借まで、6か月の期間設定が無効になるわけではありません。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/common/001334935.pdf",
    "additionalSourceUrls": [
      "https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000030.html",
      "https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000060.html"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料では、あらかじめ農業委員会に所定の届出をすることにより、農地法の転用許可が不要となる取扱いがある。正しければ〇、誤っていれば×を選びなさい。\n〈市街化区域内の自己転用〉\n項目 / 条件\n区域 / 都市計画法上の市街化区域内であると確認された農地\n転用する者 / 既にその農地を所有するAさん。売買や賃借による権利移転は伴わない\n転用の目的 / 自己の住宅の敷地にする\n前提 / 生産緑地指定等の別の制限はなく、届出の適用条件を満たすものとする\n範囲 / 農地法上の自己転用の手続を問う。建築確認等、他法令による手続は別に確認する\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "資料のような市街化区域内の自己転用では、あらかじめ農業委員会へ所定の届出をすることにより、農地法の転用許可が不要となる取扱いがあります。市街化区域というだけで無手続に転用できるわけではありません。売買等を伴う転用や、建築など他法令の要件まで不要になるものでもありません。",
    "topic": "市街化区域内の自己転用",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-163",
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "choiceExplanations": [
      "正解。市街化区域内の自己転用で所定の条件を満たす場合、事前の農業委員会への届出で許可不要となる扱いがあります。",
      "不適切。資料の条件では届出による許可不要の扱いがあります。ただし無手続でよいという意味ではありません。"
    ],
    "sourceUrl": "https://www.maff.go.jp/j/nousin/noukei/totiriyo/ihan_tenyo.html",
    "additionalSourceUrls": [
      "https://www.pref.nagano.lg.jp/nosei/sangyo/nogyo/nochiho/tenyo.html"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料で、買主が同意していれば、宅地建物取引士でない営業担当者だけによる説明で、宅地建物取引業法上の重要事項説明の義務を満たす。正しければ〇、誤っていれば×を選びなさい。\n〈重要事項説明を行う者〉\n項目 / 条件\n取引 / 宅地建物取引業者が、日本国内の宅地売買を媒介する\n買主 / 宅地建物取引業者ではない個人Aさん\n予定する説明 / 契約成立前の、宅地建物取引業法上の重要事項説明\n担当者 / 宅地建物取引士でない営業担当者だけが説明し、宅地建物取引士による説明は行わない\n範囲 / 説明を行う者の資格要件を問う。電子書面やIT重説を使うこと自体の可否は問わない\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "資料の重要事項説明は、宅地建物取引士が行います。買主が了承したという理由だけで、その資格要件を外すことはできません。一定の要件を満たすIT重説や電子書面の利用が可能であることと、説明担当者の資格要件は別の問題です。",
    "topic": "重要事項説明を行う者",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-164",
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "choiceExplanations": [
      "不適切。買主の同意だけで、宅地建物取引士による重要事項説明を省略することはできません。",
      "正解。資料の重要事項説明は宅地建物取引士が行う必要があり、無資格の営業担当者だけで代えることはできません。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/totikensangyo/const/content/001853619.pdf",
    "additionalSourceUrls": [
      "https://www.mlit.go.jp/common/001201742.pdf"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "資料の土地譲渡所得金額は270万円である。正しければ〇、誤っていれば×を選びなさい。\n〈土地売却の収入・費用・所得〉\n項目 / 条件\n対象者・年分 / 日本の居住者である個人Aさん、2026年分\n資産 / 保有していた土地（商品ではない）。建物は含まない\n譲渡収入 / 800万円\n取得費 / 500万円（実額として確定した取得費を用いる）\n譲渡費用 / 30万円（今回の売却に直接要した費用、取得費と重複なし）\n追加条件 / 特別控除・その他の調整は適用しない。税率・税額は問わない\n金額の単位は万円。所得控除や税額控除をこの段階の費用に足さない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "譲渡収入800－取得費500－譲渡費用30＝270万円です。取得費と譲渡費用をそれぞれ一度ずつ差し引きます。提示した土地の実額取得費を使い、概算取得費や建物の減価償却の計算は行いません。この所得金額を納付税額や売却代金そのものと混同しないこと。",
    "topic": "土地売却の収入・費用・所得",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-165",
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "choiceExplanations": [
      "正解。800－500－30＝270万円です。",
      "不適切。提示条件で270万円となる記述は正しいため、×とはなりません。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3202.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁：土地建物の譲渡所得の限定確認",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料から建ぺい率を求めると、最も適切なものはどれか。\n〈建築面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 240㎡（算定に用いる敷地面積として確定）\n建築面積 / 96㎡（算定上の値として確定）\n容積率算定対象の延べ面積 / 600㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "60％",
      "250％",
      "40％"
    ],
    "answer": 2,
    "explanation": "建築面積96㎡を敷地面積240㎡で割り、100を掛けると40％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "topic": "建築面積と敷地面積の比",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-166",
    "contentReview": "v133_building_ratio_scoped_migration",
    "choiceExplanations": [
      "不適切。60％は、建築面積以外の敷地の比率を求めている計算です。",
      "不適切。250％は、延べ面積を使って容積率を求めている計算です。",
      "正解。40％は、建築面積を敷地で割る計算です。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料から容積率を求めると、最も適切なものはどれか。\n〈算定対象延べ面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 320㎡（算定に用いる敷地面積として確定）\n容積率算定対象の延べ面積 / 240㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "約133.3％",
      "75％",
      "25％"
    ],
    "answer": 1,
    "explanation": "容積率算定対象の延べ面積240㎡を敷地面積320㎡で割り、100を掛けると75％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "topic": "算定対象延べ面積と敷地面積の比",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-167",
    "contentReview": "v133_building_ratio_scoped_migration",
    "choiceExplanations": [
      "不適切。約133.3％は、分子と分母を逆転している計算です。",
      "正解。75％は、算定対象延べ面積を敷地で割る計算です。",
      "不適切。25％は、敷地と延べ面積の差の比率を求めている計算です。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料の条件で、売主が手付解除のため買主に現実に提供する金額の総額はどれか。\n〈売主からの手付解除〉\n項目 / 条件\n売買の当事者 / 売主・買主とも宅地建物取引業者ではない個人。土地売買について民法の解約手付の規律を適用する\n受領済みの手付 / 100万円。買主が売主に交付済み\n解除する側 / 売主。買主・売主とも契約の履行に着手していない\n契約条件 / 2026年4月に新規締結したとする。手付解除を制限する特約や期限の定めはない\n問う金額 / 受領済み手付の返還相当分も含む、買主への提供総額。上乗せ分だけではない\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "200万円",
      "100万円",
      "300万円"
    ],
    "answer": 0,
    "explanation": "売主は、相手方である買主が履行に着手する前であるなど資料の条件の下、受領した手付100万円の倍額200万円を現実に提供して手付解除します。この200万円に受領手付100万円をさらに足す必要はありません。提供総額と、受領手付に対する上乗せ相当分を区別します。",
    "topic": "売主からの手付解除",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-168",
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "choiceExplanations": [
      "正解。100万円×2＝200万円を現実に提供します。受領済み手付の返還相当分を含む総額です。",
      "不適切。100万円は受領済み手付をそのまま返す額で、売主の倍額提供の総額に足りません。",
      "不適切。倍額の総額に、受領済みの手付をさらに加えた三重の計上です。"
    ],
    "sourceUrl": "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19320170602044.htm",
    "additionalSourceUrls": [
      "https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20220220"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料で、区分所有法が管理者に求める集会招集の最低頻度として、最も適切なのはどれか。\n〈管理者による集会招集の頻度〉\n項目 / 条件\n対象 / 区分所有法が適用され、管理者が選任されている区分所有建物\n問う義務 / 管理者による集会の招集\n問う頻度 / 法律上の最低頻度。規約で追加の招集を求める場合や臨時集会とは区別する\n除外 / 理事会の頻度、標準管理規約の会計年度開始後の期限、通知期間、決議の多数要件は問わない\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "半年に1回",
      "年に1回",
      "毎月"
    ],
    "answer": 1,
    "explanation": "区分所有法第34条第2項では、管理者は少なくとも毎年1回、集会を招集しなければならないとされています。年1回だけしか招集できないという上限ではありません。規約上の追加義務、臨時集会、理事会の開催頻度とは区別します。",
    "topic": "管理者による集会招集の頻度",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-169",
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "choiceExplanations": [
      "不適切。その頻度で追加招集すること自体を禁止するものではありませんが、法律上の最低頻度を答えたものではありません。",
      "正解。法律が管理者に求める最低頻度は、少なくとも毎年1回です。",
      "不適切。その頻度で追加招集すること自体を禁止するものではありませんが、法律上の最低頻度を答えたものではありません。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/jutakukentiku/house/content/001760662.pdf",
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/21720250530047.htm",
      "https://laws.e-gov.go.jp/law/337AC0000000069?occasion_date=20250604"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "資料で2026年度分の固定資産税の法令上の納税義務者となるのは、原則どの時点の所有者か。\n〈賦課期日と売買後の精算〉\n項目 / 条件\n2026年1月1日 / 売主Bさんが土地の所有者として登記され、固定資産課税台帳にも登録されている\n2026年1月2日 / 買主Aさんが売買により取得し、同日に所有権移転登記も完了した\nその後 / 2026年末までAさんが所有。Bさんも存命で、相続や所有者不明などの特別な取扱いはない\n精算の仮定 / 売買当事者が税相当額を日割り等で精算する合意をしても、法令上の納税義務者とは区別する\n対象 / 2026年度分の固定資産税。次年度の課税や精算額は問わない\n法令基準日2026年4月1日、確認日とは別。税目の基本事項または提示設例の適用を確認する。",
    "choices": [
      "1月2日の買主",
      "1月1日の所有者",
      "年末時点の所有者"
    ],
    "answer": 1,
    "explanation": "固定資産税の賦課期日は毎年1月1日です。資料ではその時点の登記等の名義はBさんなので、通常はBさんが2026年度分の納税義務者です。1月2日以後の売買による移転と、当事者間の合意による税相当額の精算を、法令上の納税義務の変更と混同しないこと。",
    "topic": "賦課期日と売買後の精算",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-170",
    "contentReview": "v135_property_tax_scoped_migration",
    "choiceExplanations": [
      "不適切。1月2日の買主Aさんではなく、賦課期日の所有者等を確認します。",
      "正解。1月1日の所有者として登記等されていたBさんが原則として納税義務者です。",
      "不適切。年末の所有者Aさんを基準に遡って課税するものではありません。"
    ],
    "sourceUrl": "https://www.city.joso.lg.jp/data/doc/1774848303_doc_149_0.pdf",
    "additionalSourceUrls": [
      "https://www.tax.metro.tokyo.lg.jp/kazei/real_estate/kotei_tosi"
    ],
    "sourceLabel": "自治体・国税庁の不動産税基本事項と設例適用の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要論点3/共通公式ルール適用2/過去論点再確認2を区別。法令全文/全改正/免税点等の包括監修ではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料のBさんは、預金700万円を相続する一方で、借入金500万円だけを承継しないと一方的に選ぶことはできない。正しければ〇、誤っていれば×を選びなさい。\n〈単純承認と財産・債務の承継〉\n項目 / 条件\n相続開始 / 2026年3月1日にAさんが死亡した\n相続人 / 成人の子Bさん1人のみ。配偶者やほかの子・代襲相続人はいない\nBさんの選択 / 単純承認した。相続放棄・限定承認はしていない\n借入金の条件 / Aさん本人の確定した借入債務。団体信用生命保険等による弁済や、債権者による免除はない\n財産と債務 / 預金700万円、借入金500万円が残っている\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "単純承認は、相続財産のうち都合のよいものだけを選んで承継する制度ではありません。資料ではBさんが唯一の相続人であり、預金と借入債務をともに承継します。限定承認や相続放棄とは制度・手続を区別します。",
    "topic": "単純承認と財産・債務の承継",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-171",
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "choiceExplanations": [
      "正解。単純承認では、預金だけ受け取り借入金を一方的に除外する選択はできません。",
      "不適切。単純承認と、所定の手続を要する限定承認・相続放棄を混同しています。"
    ],
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_14/index.html",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf"
    ],
    "sourceLabel": "裁判所・法テラス・国税庁講本の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料のAさんは、家庭裁判所への申述をしなくても、遺産分割で取得額をゼロにしたことにより法律上の相続放棄をしたことになる。正しければ〇、誤っていれば×を選びなさい。\n〈相続放棄の申述と期間〉\n項目 / 条件\n状況 / 相続開始後、共同相続人の成人Aさんが、他の相続人に遺産を受け取らないと伝えた\n遺産分割 / Aさんの取得額をゼロとする合意をした\n家庭裁判所への手続 / 相続放棄の申述はしていない\n区別する内容 / 財産を取得しない分割の合意と、民法上の相続放棄\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "遺産分割の結果として財産を取得しないことと、法律上の相続放棄は別です。資料では家庭裁判所への申述がないため、それだけで法律上の放棄をしたとはいえません。債務の承継も、財産を取得しないという相続人間の合意だけで当然になくなるわけではありません。",
    "topic": "相続放棄の申述と期間",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-172",
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_13/index.html",
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "reviewedAt": "2026-10-13",
    "v66ReviewScope": "相続放棄の申述先・熟慮期間の起算点・期間伸長。初回公式照合時期不明。法令基準日を新たに確定するものではない。",
    "choiceExplanations": [
      "不適切。遺産分割で取得額をゼロにする合意だけでは、法律上の相続放棄にはなりません。",
      "正解。民法上の相続放棄には、家庭裁判所への申述が必要です。"
    ],
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132_qa.htm",
      "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_25/index.html"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。",
    "priorSourceReview": "v66"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料の預金を法定相続分で分けると、配偶者は4,000万円、子1人は2,000万円を取得する。正しければ〇、誤っていれば×を選びなさい。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、子2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n分割対象の遺産 / 預金8,000万円のみ。債務や費用等の控除を要する事情はない\n計算の範囲 / 法定相続分に従う預金の配分だけを計算し、相続税額や非課税枠は計算しない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "配偶者1/2、子全体1/2です。同順位の2人で均等に分けるので、子1人の割合は1/2÷2＝1/4です。したがって8,000万円×1/4＝2,000万円です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-173",
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "choiceExplanations": [
      "正解。資料の子1人の割合は1/4で、取得額は2,000万円です。",
      "不適切。資料の相続人構成と法定相続分から計算すると、記述の取得額になります。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料では、Bさんが単純承認しても、預金額を超える400万円の借入債務だけは自動的に免除される。正しければ〇、誤っていれば×を選びなさい。\n〈単純承認と財産・債務の承継〉\n項目 / 条件\n相続開始 / 2026年3月1日にAさんが死亡した\n相続人 / 成人の子Bさん1人のみ。配偶者やほかの子・代襲相続人はいない\nBさんの選択 / 単純承認した。相続放棄・限定承認はしていない\n借入金の条件 / Aさん本人の確定した借入債務。団体信用生命保険等による弁済や、債権者による免除はない\n財産と債務 / 預金800万円、借入金1,200万円のみが残っている\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "1,200万円－800万円＝400万円の不足があっても、単純承認ではその部分が自動的に免除されることはありません。資料では弁済や免除の事情がなく、Bさんは自己の財産からも弁済する責任を負い得ます。限定承認による責任の限定と区別します。",
    "topic": "単純承認と財産・債務の承継",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-174",
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "choiceExplanations": [
      "不適切。財産の不足額400万円が、単純承認によって自動で免除されることはありません。",
      "正解。単純承認では、相続で得た預金額を超える債務も原則として承継します。"
    ],
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_14/index.html",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf"
    ],
    "sourceLabel": "裁判所・法テラス・国税庁講本の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "資料の保険契約に関する権利の評価額は、解約返戻金等を基に計算すると250万円となる。正しければ〇、誤っていれば×を選びなさい。\n〈保険事故未発生の契約に関する権利〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n契約者と保険料負担者 / 契約者Aさんが保険料を全額負担していた。法人やほかの保険料負担者はいない\n被保険者 / 配偶者Bさん。Aさん死亡時もBさんは存命で、保険事故は発生していない\n取得するもの / 相続人が取得する生命保険契約に関する権利。Aさん死亡による死亡保険金ではない\n解約返戻金 / 相続開始時に解約するとした場合の返戻金240万円\n別途返還される額 / 前納保険料10万円と剰余金5万円。これらは上記240万円に含まれていない\n控除する源泉所得税等 / 該当する所得税・復興特別所得税の合計5万円。上記の各金額からまだ差し引かれていない\nほかの調整 / ほかに加算・控除する額はない。全て万円単位で端数処理は不要\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "保険事故が未発生なので、死亡保険金ではなく契約に関する権利を評価します。240万円＋別途前納保険料10万円＋剰余金5万円－源泉所得税等5万円＝250万円です。資料では各加算額は返戻金に含まれておらず、源泉税も未控除なので、それぞれ1回だけ反映します。",
    "topic": "保険事故未発生の契約に関する権利",
    "createdVersion": 9,
    "revision": 60,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-175",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hyoka/4660.htm",
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。",
    "choiceExplanations": [
      "正解。240＋10＋5－5＝250万円です。前納保険料等を二重に加えません。",
      "不適切。返戻金だけの240万円ではなく、資料の別途返還額と税額を反映すると250万円です。"
    ],
    "additionalSourceUrls": [
      "https://www.nta.go.jp/law/shitsugi/sozoku/14/05.htm"
    ],
    "priorSourceReview": "v59_FOCUSED_REVIEW"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料で兄1人の法定相続分はどれか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、被相続人の兄・姉の2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。被相続人に子・孫等も父母・祖父母等の直系尊属もいない。兄・姉はともに父母の双方を同じくする全血の兄弟姉妹である。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "1/4",
      "1/2",
      "1/8"
    ],
    "answer": 2,
    "explanation": "配偶者3/4、兄弟姉妹全体1/4です。同順位の2人で均等に分けるので、兄1人の割合は1/4÷2＝1/8です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-176",
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "choiceExplanations": [
      "不適切。同順位の相続人全体の取り分を、1人分と取り違えています。",
      "不適切。配偶者の取り分を確保せず、遺産全体を兄・姉の2人だけで等分しています。",
      "正解。兄1人の割合は1/8です。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料で子1人の法定相続分はどれか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 配偶者はいない。子2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "1/4",
      "3/4",
      "1/2"
    ],
    "answer": 2,
    "explanation": "子A・子Bの2人で全体を等分し、各1/2です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-177",
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "choiceExplanations": [
      "不適切。既に1人分となった割合を、人数でもう一度割っています。",
      "不適切。資料で問う子1人の割合は1/2です。この選択肢はその割合に一致しません。",
      "正解。子1人の割合は1/2です。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料の貸宅地の相続税評価額はいくらか。\n〈通常の借地権の目的となる貸宅地〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n権利の条件 / 建物所有を目的とする通常の借地権（地上権又は土地の賃借権）の目的となる宅地。定期借地権等・区分地上権・使用貸借ではない\n土地の自用地としての価額 / 8,000万円。必要な画地補正等を反映した後の与件額\n借地権割合 / 対象地域に借地権の取引慣行があり、本問では60％と与える\n適用範囲 / 通常の貸宅地の相続税評価額。小規模宅地等の特例、貸家建付地の計算やほかの調整は適用しない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "4,800万円",
      "8,000万円",
      "3,200万円"
    ],
    "answer": 2,
    "explanation": "通常の借地権の目的となる貸宅地は、自用地としての価額から借地権相当額を控除します。8,000万円－8,000万円×60％＝3,200万円です。借りる側の借地権相当額と、貸す側の土地の評価額を取り違えないようにします。",
    "topic": "通常の借地権の目的となる貸宅地",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-178",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "choiceExplanations": [
      "不適切。借地権部分60％の額で、貸す側の土地の評価額ではありません。",
      "不適切。借地権相当額を控除する前の自用地価額です。",
      "正解。自用地価額から借地権相当額を控除すると3,200万円です。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hyoka/4613.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料の遺産に係る基礎控除額はいくらか。\n〈相続税の基礎控除〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n法定相続人 / 法律上の配偶者と実子1人のみ。全員存命で、相続放棄・欠格・廃除・養子・代襲等はない\n人数の範囲 / 資料の相続人だけを数え、ほかの者を重複して加えない\n求めるもの / 遺産全体に係る相続税の基礎控除額。配偶者個人の税額軽減や死亡保険金の非課税枠ではない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "3,600万円",
      "4,200万円",
      "4,800万円"
    ],
    "answer": 1,
    "explanation": "法定相続人は2人なので、遺産に係る基礎控除は3,000万円＋600万円×2＝4,200万円です。相続人ごとに3,000万円を付ける計算ではなく、遺産全体の控除額です。",
    "topic": "相続税の基礎控除",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm",
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "id": "fp3-179",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "sourceName": "制度確認用の公的資料",
    "choiceExplanations": [
      "不適切。法定相続人を1人と数えた場合の額です。資料は2人です。",
      "正解。資料の法定相続人2人で計算すると4,200万円です。",
      "不適切。法定相続人を3人と数えた場合の額です。資料は2人です。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。",
    "priorSourceReview": "v25_source_metadata"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "資料のBさんが持つ、借地権の負担が付いた土地の所有権を一般に何というか。\n〈借りる側の権利と貸す側の所有権〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n相続で取得したもの / Aさんが所有していた宅地の所有権を相続人Bさんが取得した\n第三者Cさんの権利 / Cさんは建物所有を目的として、その土地を借りる借地権を持つ\nBさんの立場 / Bさんは土地を貸す側の所有者。土地を借りる側の権利を取得した設例ではない\n範囲 / 借地権の負担が付いた土地の所有権の一般的な呼称を問う。相続税評価額や鑑定価格は計算しない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "賃借権だけ",
      "地上権だけ",
      "底地権"
    ],
    "answer": 2,
    "explanation": "借地権が付着した宅地の所有権は、一般に底地（底地権）と呼ばれます。借りる側の土地の賃借権や地上権と、貸す側に帰属する所有権を区別します。",
    "topic": "借りる側の権利と貸す側の所有権",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-180",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "choiceExplanations": [
      "不適切。土地の賃借権は借りる側の権利で、資料のBさんの所有権の呼称ではありません。",
      "不適切。建物所有目的の地上権も土地を利用する側の権利で、Bさんが持つ土地所有権とは異なります。",
      "正解。借地権の負担が付いた宅地の所有権は、一般に底地（底地権）と呼ばれます。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/common/001043585.pdf",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hyoka/4613.htm"
    ],
    "sourceLabel": "国土交通省 不動産鑑定評価基準（2014年5月1日改正）底地の定義のみ",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "10年後に600万円を準備するため、年3％の年1回複利で運用しながら毎年末に10回同額を積み立てる。目標額に乗じて必要な毎年の積立額を求める係数はどれか。\n〈年3％・10年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.3439\n現価係数 / 0.7441\n年金終価係数 / 11.4639\n減債基金係数 / 0.0872\n年金現価係数 / 8.5302\n資本回収係数 / 0.1172\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "減債基金係数",
      "年金現価係数",
      "終価係数",
      "資本回収係数"
    ],
    "answer": 0,
    "explanation": "減債基金係数を用います。将来の目標額から毎年末の積立額を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "topic": "6つの係数・減債基金係数",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-121",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "choiceExplanations": [
      "正解。将来の目標額から毎年末の積立額を求めます。",
      "不適切。毎年末の受取額から現在必要な元金を求めます。",
      "不適切。現在の一時金から将来の元利合計を求めます。",
      "不適切。現在の元金から毎年末の一定取崩額を求めます。"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の条件で運用した3年後の元利合計として、万円未満を四捨五入した金額はどれか。\n〈一時金の複利運用条件〉\n項目 / 内容\n運用開始時の元金 / 1,200万円\n年利 / 3％（固定）\n運用期間 / 3年間\n利息組入れ / 各年末・年1回\n期間中の追加入出金はない。税金・手数料は考慮しない。",
    "choices": [
      "1,308万円",
      "1,273万円",
      "1,236万円",
      "1,311万円"
    ],
    "answer": 3,
    "explanation": "1,200×1.03³＝1,311.2724万円。万円未満を四捨五入すると1,311万円です。1,308万円は単利3年、1,273万円は複利2年を万円単位に四捨五入、1,236万円は1年間だけ運用した額です。",
    "topic": "年1回複利の元利合計",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-122",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceUrl": "https://www.j-flec.go.jp/public/learn/glossary/h_fukuri/",
    "sourceLabel": "J-FLEC：複利の定義／設例数値は独立検算",
    "additionalSourceUrls": [],
    "choiceExplanations": [
      "不適切。1,200×(1＋0.03×3)の単利計算です。",
      "不適切。1,200×1.03²＝1,273.08万円で、運用期間を2年にしています。",
      "不適切。1,200×1.03＝1,236万円で、1年分しか計算していません。",
      "正解。3年複利の1,311.2724万円を万円未満四捨五入します。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "Aさんの国民年金加入記録が資料のとおりである場合、老齢基礎年金の受給資格期間と年金額に反映する期間の組合せとして、最も適切なものはどれか。\n〈受給資格と年金額を判定する加入記録〉\n項目 / 内容\n保険料納付済期間 / 108月\n学生納付特例の承認期間 / 12月（追納なし）\n未納期間 / 12月（納付・追納等なし）\n各期間は重複せず、20歳以上60歳未満の期間である。ほかに保険料免除期間、合算対象期間、厚生年金加入期間等はない。年金額そのものは計算しない。",
    "choices": [
      "受給資格期間132月・年金額に反映する期間132月",
      "受給資格期間120月・年金額に反映する期間108月",
      "受給資格期間108月・年金額に反映する期間108月",
      "受給資格期間120月・年金額に反映する期間120月"
    ],
    "answer": 1,
    "explanation": "学生納付特例の承認12月は受給資格期間に含まれるので、108＋12＝120月です。ただし追納なしでは年金額に反映せず、年金額に反映するのは納付済108月です。未納12月はどちらにも含めません。受給資格の10年を満たすことと、満額の年金を受け取ることは別です。",
    "topic": "学生納付特例の資格期間と年金額",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-123",
    "contentReview": "v93_pension_scoped_primary_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/kokunen/menjo/20150514.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：国民年金保険料の学生納付特例制度",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.93：学生納付特例、付加年金、繰上げ・繰下げの条件・数値・各選択肢を限定確認。2026年4月1日基準。包括監修は未完了。",
    "choiceExplanations": [
      "不適切。未納12月を受給資格期間にも年金額にも加えています。",
      "正解。学生納付特例は資格には含めますが、追納なしでは年金額に含めません。",
      "不適切。学生納付特例の承認12月を受給資格期間から除いています。",
      "不適切。追納していない学生納付特例12月を年金額に含めています。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の対象賃金から算定する雇用保険の賃金日額として、最も適切な金額はどれか。\n〈離職直前6カ月の賃金資料〉\n項目 / 内容\n算定場面 / 雇用保険の一般被保険者が2026年3月31日に離職\n算定対象の6カ月 / 毎月の対象賃金は各30万円（合計180万円）\n別途支給された賞与 / 6カ月ごとに支給する賞与60万円\nその他の賃金 / なし\n計算方法 / 対象賃金6カ月分を180で除す\n各月は算定の対象となる月で、例外的な算定方法は適用しない。基本手当日額の給付率・上下限額は問わない。\n法令基準日：2026年4月1日。資料・人物・金額は独自の仮定。",
    "choices": [
      "10,000円",
      "13,333円",
      "20,000円",
      "5,000円"
    ],
    "answer": 0,
    "explanation": "賃金日額＝対象賃金1,800,000円÷180＝10,000円です。6カ月ごとの賞与600,000円は3カ月を超える期間ごとの賃金なので除外します。賃金日額に給付率等を適用した基本手当日額は別の金額であり、本問では求めません。",
    "topic": "雇用保険・賃金日額と賞与除外",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-124",
    "contentReview": "v110_public_insurance_pension_scoped_migration",
    "choiceExplanations": [
      "正解。月30万円×6カ月÷180＝10,000円です。",
      "不適切。除外すべき賞与60万円を加えた240万円÷180の値です。",
      "不適切。6カ月の180万円を90で除しており、分母が違います。",
      "不適切。対象賃金を360で除しており、原則の180ではありません。"
    ],
    "sourceUrl": "https://www.hellowork.mhlw.go.jp/insurance/insurance_basicbenefit.html",
    "sourceLabel": "厚生労働省ハローワーク：基本手当の賃金日額",
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.110：本人/世帯・加入区分・対象年度・支払者・全選択肢・解説・資料を公式一次資料と限定照合。2026年4月1日以後の未対象の改正を適用せず、全例外・約款・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の本人掛金について、2026年分所得税の小規模企業共済等掛金控除額として最も適切なものはどれか。\n〈企業型DCのマッチング拠出〉\n項目 / 内容\n対象年分 / 2026年分\n本人が支払った加入者掛金 / 合計120,000円\n会社が支払った事業主掛金 / 合計180,000円\n拠出条件 / 制度・規約・拠出限度額に適合した掛金\n他の対象掛金 / なし\n掛金の所得控除区分と控除額のみを問う。税率・具体的な節税額、制度の加入要件・拠出限度額は計算対象外。\n法令基準日：2026年4月1日。資料・人物・金額は独自の仮定。",
    "choices": [
      "300,000円",
      "120,000円",
      "180,000円",
      "40,000円"
    ],
    "answer": 1,
    "explanation": "企業型年金の加入者本人がその年に支払った掛金は、小規模企業共済等掛金控除として全額120,000円を所得控除します。会社拠出180,000円を本人の控除額に加算しません。生命保険料控除の上限とも異なります。所得控除額と、税額そのものの減少額は同じではありません。",
    "topic": "企業型DCの加入者掛金・所得控除",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-125",
    "contentReview": "v110_public_insurance_pension_scoped_migration",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1135.htm",
    "sourceLabel": "国税庁No.1135：企業型年金加入者掛金の控除",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.110：本人/世帯・加入区分・対象年度・支払者・全選択肢・解説・資料を公式一次資料と限定照合。2026年4月1日以後の未対象の改正を適用せず、全例外・約款・包括監修は未完了。",
    "choiceExplanations": [
      "不適切。本人120,000円と会社180,000円を合算しています。",
      "正解。本人が支払った掛金120,000円の全額です。",
      "不適切。会社拠出額を本人の控除額にしています。",
      "不適切。新契約の生命保険料控除の上限と混同しています。"
    ],
    "additionalSourceUrls": [],
    "taxYear": 2026
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "現在の1000万円を年2％の年1回複利で運用しながら、毎年末に5回同額を取り崩す。最後の取崩し後の残高を0円とするために現在額に乗じる係数はどれか。\n〈年2％・5年の独自計算による係数表〉\n係数 / 値\n終価係数 / 1.1041\n現価係数 / 0.9057\n年金終価係数 / 5.2040\n減債基金係数 / 0.1922\n年金現価係数 / 4.7135\n資本回収係数 / 0.2122\n利率は全期間固定。税金・手数料は考慮しない。係数は小数第5位を四捨五入して表示。今回の問いは係数名の選択であり、表の丸め値から金額を算定しない。",
    "choices": [
      "減債基金係数",
      "年金終価係数",
      "現価係数",
      "資本回収係数"
    ],
    "answer": 3,
    "explanation": "資本回収係数を用います。現在の元金から毎年末の一定取崩額を求めます。係数は年利と期間だけでなく、資金移動の向きと期末の積立・受取りに対応させます。",
    "topic": "6つの係数・資本回収係数",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "math_and_stated_assumptions_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-126",
    "contentReview": "v109_time_value_and_repayment_scoped_check",
    "choiceExplanations": [
      "不適切。将来の目標額から毎年末の積立額を求めます。",
      "不適切。毎年末の積立額から最後の積立直後の元利合計を求めます。",
      "不適切。将来の一時金から現在必要な一時金を求めます。",
      "正解。現在の元金から毎年末の一定取崩額を求めます。"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.109：2026年4月1日をサイト基準日として、数学的定義・与件・全選択肢・解説・単位・資料を限定確認。法令の施行日や税年に依存しない固定仮定。制度改正照合・包括監修の完了数には含めない。",
    "sourceUrl": "https://www.jafp.or.jp/exam/mohan/files/g2_202605_qa.pdf",
    "sourceLabel": "日本FP協会：係数の出題テーマ／係数値は数学式による独立計算",
    "additionalSourceUrls": [
      "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の可処分所得に対する年間返済負担率はどれか。\n〈指定した手取りに対する返済比率〉\n項目 / 条件\n住宅ローン残高 / 2,400万円（現時点）\n年間元利返済 / 144万円\n年間可処分所得 / 480万円\n年間生活費 / 400万円\n本問の比率 / 年間元利返済÷年間可処分所得×100。金融機関の融資審査基準とは区別\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n期間・分母・使える資金の指定条件を確認する。年金資格・税率/保険料率・融資審査・全法令の包括監修ではない。",
    "choices": [
      "30％",
      "36％",
      "6％",
      "約83.3％"
    ],
    "answer": 0,
    "explanation": "144÷480×100＝30％です。分母は指定した可処分所得。金融機関の返済負担率で使われる控除前の年収を提示した問題ではありません。ローン残高は返済期間全体の残債であり年間収入ではありません。",
    "topic": "指定した手取りに対する返済比率",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-127",
    "contentReview": "v119_life_plan_ratios_shortfall_scoped_migration",
    "choiceExplanations": [
      "正解。144÷480×100＝30％です。",
      "不適切。144÷400×100＝36％は生活費を分母にしています。",
      "不適切。144÷2,400×100＝6％はローン残高を分母にしています。",
      "不適切。400÷480×100≒83.3％は生活費の手取りに対する比率です。"
    ],
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "sourceLabel": "日本FP協会の生活設計/家計定義／数値・比率は指定仮定の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "基本定義/生活設計と独自の計算仮定を確認。必要保障額の公式枠組みと指定提示額の検算を併記し、制度受給資格の確認件数とはしない。初回ID時期未確定。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "Aさんが2026年6月に資料の条件で老齢基礎年金を繰下げ受給する場合、受け取る年額として最も適切なものはどれか。\n〈老齢基礎年金の繰下げ条件〉\n項目 / 内容\n生年月日 / 1959年6月2日\n65歳時点の老齢基礎年金年額 / 800,000円（本問の計算用の額）\n繰下げ申出月・年齢 / 2026年6月、67歳\n増額率の計算に用いる月数 / 24月\n65歳時に受給権があり、まだ老齢基礎年金を受給していない。障害・遺族年金の受給権はなく、繰下げの要件を満たす。振替加算・付加年金・改定による年金額変動・税金は考慮しない。",
    "choices": [
      "867,200円",
      "896,000円",
      "934,400円",
      "968,000円"
    ],
    "answer": 2,
    "explanation": "繰下げ増額率は1月当たり0.7％なので、0.7％×24月＝16.8％です。800,000円×1.168＝934,400円。867,200円は12月だけ増額した額、896,000円は誤って1月0.5％とした額、968,000円は30月で計算した額です。",
    "topic": "老齢基礎年金の繰下げ年額計算",
    "createdVersion": 9,
    "revision": 59,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-128",
    "contentReview": "v93_pension_scoped_primary_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/jukyu/seido/roureinenkin/kuriage-kurisage/20140421-02.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：年金の繰下げ受給",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.93：学生納付特例、付加年金、繰上げ・繰下げの条件・数値・各選択肢を限定確認。2026年4月1日基準。包括監修は未完了。",
    "choiceExplanations": [
      "不適切。800,000円×（1＋0.007×12）であり、12月分しか増額していません。",
      "不適切。800,000円×（1＋0.005×24）であり、1月当たりの率を誤っています。",
      "正解。800,000円×（1＋0.007×24）＝934,400円です。",
      "不適切。800,000円×（1＋0.007×30）であり、資料の24月と異なります。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の2026年末金融資産残高として、最も適切なものはどれか。\n〈家計の年間収支・残高〉\n項目・期間 / 金額（万円、明記の利率を除く）\n2025年末金融資産残高 / 1,500\n2026年の指定運用利率 / 年2％（税・手数料なし）\n運用対象 / 前年末残高1,500万円のみ\n2026年の年間収支 / 黒字100万円（運用益を含まない）\n収支の加算時点 / 100万円は2026年末に加算し、その年の運用対象外\n2026年の年間計画の提示額を使う。他の収入・支出、物価変動はない。税額・社会保険料を法令から計算する問題ではない。\n法令基準日：2026年4月1日。金額・計算条件は独自の仮定。\n定義・指定条件の計算確認。税率・保険料率・全法令・包括監修の確認とは区別する。",
    "choices": [
      "1,630万円",
      "1,530万円",
      "1,632万円",
      "1,600万円"
    ],
    "answer": 0,
    "explanation": "運用益1,500×2％＝30万円。期末残高1,500＋30＋100＝1,630万円です。年間収支100万円には運用益が含まれず、年末加算額100万円にその年の2％を再計算しません。",
    "topic": "年間収支・手取り・金融資産残高",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-129",
    "contentReview": "v118_household_math_scoped_migration",
    "choiceExplanations": [
      "正解。前年末残高1,500万円に運用益30万円と年間黒字100万円を加えます。",
      "不適切。年間黒字100万円を加えないと1,500＋30＝1,530万円です。",
      "不適切。年末加算100万円にも運用益2万円を付けると1,632万円ですが、指定条件に反します。",
      "不適切。運用益30万円を加えないと1,500＋100＝1,600万円です。"
    ],
    "sourceUrl": "https://www.jafp.or.jp/know/fp/sheet/",
    "additionalSourceUrls": [
      "https://jafp.or.jp/know/fp/sheet/files/2_Income_outgo.pdf"
    ],
    "sourceLabel": "日本FP協会：家計の基本定義／提示額の独立計算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "家計の定義は公式説明、設例数値・全誤答式は内部検算。税制改正/個別保険料率の照合件数にしない。初回ID時期未確定。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資料の行為について、最も適切なものはどれか。\n〈FP資格と税務書類の作成業務〉\n項目 / 条件\nAさんの資格 / FP技能士のみ。税理士登録・弁護士等の資格/届出なし\n依頼 / 顧客の所得税申告書の作成\n作成方法 / 課税関係を自己の判断で検討して作成（単なる代書ではない）\n頻度と報酬 / 無報酬で反復継続して行う予定\n除外条件 / 税理士法50条の許可等の特例・法令上の例外に該当しない\n法令基準日：2026年4月1日。金利・人物・条件は独自の仮定。\n基本論点の限定確認。個別契約・全法令・全改正・包括監修の完了を示すものではない。",
    "choices": [
      "金融商品取引業の登録さえあれば作成できる",
      "FP技能士の資格があれば報酬の有無に関係なく税務書類の作成を業として行える",
      "原則として税理士等の資格がなければ、有償・無償を問わず税務書類の作成を業として行えない",
      "顧客が同意すれば資格がなくても税務代理を業として行える"
    ],
    "answer": 2,
    "explanation": "税務書類の作成を他人の求めに応じて業として行うには、税理士等に認められた法令上の要件が必要です。業としてとは反復継続、又はその意思がある場合を含み、無報酬だから対象外とはなりません。FP資格や顧客の同意だけでは業務規制を解除できません。単なる代書や許可等の例外は与件から除いています。",
    "topic": "FP資格と税務書類の作成業務",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-130",
    "contentReview": "v120_remaining_life_scoped_migration",
    "choiceExplanations": [
      "不適切。金融商品取引業の登録は税務書類作成の法令上の要件に代わりません。",
      "不適切。FP資格だけでは自己判断で税務書類を作成する業務を行えません。",
      "正解。資料の反復継続・自己判断・例外なしという条件では、無報酬でも税理士等の法令要件が必要です。",
      "不適切。顧客の同意があっても税理士法の業務規制をなくせません。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/osirase/9203.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/law/tsutatsu/kihon/zeirishi/02.htm",
      "https://www.nta.go.jp/taxes/zeirishi/zeirishiseido/qa/06.htm"
    ],
    "sourceLabel": "住宅金融支援機構/日本FP協会/国税庁の限定論点。実質利回りは指定数式検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "現行商品の金利/統計平均は問題に転載しない。税理士制度No9203は2026-04-01基準、通達は2025-06-01記載、取得日2026-10-15と別記。実質利回りの数式検算と公式制度照合を分離。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の事故Bに対応する保険として、基本的な対象区分が最も適切なものはどれか。\n〈店舗の賠償事故の原因と被害者〉\n事例 / 条件\n事故A / 店舗床の水濡れを放置し、来店客が転倒して負傷\n事故B / 販売・引渡し後の弁当の衛生上の欠陥により購入者が食中毒\n事故C / 業務中の従業員が労災事故で負傷\n事故D / 保管を引き受けた顧客のカメラを破損\n共通条件 / 事業者がそれぞれの被害者に法律上の賠償責任を負う\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "施設所有（管理）者賠償責任保険",
      "生産物賠償責任保険（PL保険）",
      "使用者賠償責任保険",
      "受託者賠償責任保険"
    ],
    "answer": 1,
    "explanation": "販売・引渡し後の食品の欠陥が購入者の身体に損害を生じさせた事故Bでは、生産物賠償責任保険（PL保険）を検討します。施設管理、従業員の労災、預かった財物の破損とは区別します。",
    "topic": "施設・生産物・使用者・受託財物の賠償責任",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-131",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "choiceExplanations": [
      "施設の欠陥・使用管理に起因する対人事故への備えであり、引渡し後の食品そのものによる食中毒とは主な事故原因が異なります。",
      "正解。販売・引渡し後の食品を原因とする購入者の食中毒は生産物事故に係る賠償責任に該当し得ます。",
      "使用者が従業員に負う労災関連の賠償責任への備えであり、食品購入者は従業員ではありません。",
      "預かった他人の財物の損壊等に係る賠償責任を補償するもので、販売した食品の事故による顧客の負傷とは異なります。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/body/q094.html",
    "sourceLabel": "日本損害保険協会：事業者の賠償責任保険",
    "additionalSourceUrls": [
      "https://www.sonpo.or.jp/sme_insurance/liability/",
      "https://www.sonpo.or.jp/sme_insurance/explanation/article02/",
      "https://www.tokiomarine-nichido.co.jp/hojin/pdf/ippan_yakkan_20220101.pdf"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の条件で落雷により家電に損害が生じた場合の、保険対象と補償の関係として最も適切なものはどれか。\n〈建物のみの契約と家財を含む契約〉\n項目 / 条件\n契約A / 火災保険の対象は建物のみ。落雷補償あり\n契約B / 火災保険の対象は建物と家財。両方に落雷補償あり\n事故 / 住宅内の本人所有のテレビが落雷で破損\n損害原因 / 経年劣化・故意・地震ではない\nその他の条件 / 被保険者・保険期間・免責等の支払条件を満たす\n法令基準日：2026年4月1日。人物・金額・契約条件は独自の仮定。\n地震保険の損害区分認定、個別商品の全約款・拡張特約・実際の保険金査定は今回の確認対象外。",
    "choices": [
      "契約Bでは家財の落雷損害として補償対象となり得る",
      "契約Aでも建物に落雷補償があればテレビは必ず保険対象に含まれる",
      "テレビが家財に該当しても、火災保険では落雷損害を補償する契約は存在しない",
      "契約Bは家財を対象としているため、経年劣化による故障も落雷事故と同じ扱いになる"
    ],
    "answer": 0,
    "explanation": "テレビは家財です。家財を対象とし落雷補償のある契約Bでは、与件の落雷損害は補償対象となり得ます。建物だけの契約Aの保険対象にはテレビは含まれません。家財を契約しても、経年劣化を落雷事故と同じ原因として扱うものではありません。",
    "topic": "火災保険・建物家財と落雷補償",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-132",
    "contentReview": "v112_fire_earthquake_scoped_migration",
    "choiceExplanations": [
      "正解。家財を保険対象として契約し、落雷補償を付けたBを検討します。",
      "不適切。建物の補償を付けるだけで、家財も自動的に保険対象になるわけではありません。",
      "不適切。家財の落雷損害に備える契約があります。",
      "不適切。家財の契約対象と、損害原因に関する支払条件は別です。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/home/q050.html",
    "sourceLabel": "財務省公開資料・日本損害保険協会：火災/地震保険の基本区分",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q051.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.112：建物/家財、事故原因、損害保険金/費用、付帯と保険金額を限定確認。2026年1月28日資料で4月基準以前の制度を照合。個別約款・全支払条件・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の条件で、自賠責の補償額と区別して任意の対人賠償責任保険が負担する賠償損害額はどれか。\n〈対人賠償と自賠責の計算用条件〉\n損害・場面 / 条件\n事故 / 国内の自動車事故で無関係の第三者1人が死亡\n被保険者の法的賠償責任額 / 4,500万円（過失等の調整後）\n自賠責で補償される額 / 3,000万円（減額・他の控除なし）\n対人賠償保険の限度額 / 無制限\nその他の支払条件 / 保険期間・被保険者範囲等を満たす。免責・他保険調整なし\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n計算用に明示した条件を適用する。実際の事故における法的賠償額、自賠責の査定・減額、個別約款全体は本問では判定しない。",
    "choices": [
      "4,500万円",
      "3,000万円",
      "1,500万円",
      "7,500万円"
    ],
    "answer": 2,
    "explanation": "任意の対人賠償保険が負担する部分は、4,500－3,000＝1,500万円です。自賠責と合わせた4,500万円の賠償を二重には計上しません。賠償額・自賠責の補償額と減額なし等は本問で与えた条件です。",
    "topic": "対人賠償・自賠責との負担区分",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-133",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "choiceExplanations": [
      "不適切。自賠責3,000万円の部分まで任意保険の負担に含めています。",
      "不適切。これは与件の自賠責の補償額です。",
      "正解。4,500－3,000＝1,500万円です。",
      "不適切。法的賠償責任額に自賠責の補償額を加えて二重計上しています。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/car/about.html",
    "sourceLabel": "日本損害保険協会：自動車保険の補償区分",
    "additionalSourceUrls": [
      "https://www.mlit.go.jp/jidosha/anzen/04relief/jibai/insurance.html",
      "https://soudanguide.sonpo.or.jp/car/q006.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の変額終身保険について、最も不適切な記述はどれか。\n〈変額終身保険の保証対象〉\n項目 / 条件\n主契約 / 変額終身保険\n基本死亡保険金額 / 1,000万円。運用実績にかかわらず最低保証\n解約返戻金 / 運用実績により変動し、最低保証なし\n範囲 / 特約・貸付残高・支払免責は考慮しない。有期型ではない\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "運用実績が悪ければ、基本死亡保険金額は最低保証なく必ず1,000万円未満となる",
      "解約返戻金には最低保証がなく、払込保険料合計を下回ることがある",
      "保険期間は終身であり、有期型の満期保険金とは区別する",
      "基本死亡保険金額の最低保証と、解約返戻金の保証の有無は別に確認する"
    ],
    "answer": 0,
    "explanation": "運用が悪化しても、資料で指定した基本死亡保険金額1,000万円の最低保証は失われません。一方、解約返戻金には最低保証がなく、払込保険料合計を下回る場合があります。終身型には満期保険金はありません。",
    "topic": "変額終身保険の保証対象",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-134",
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "choiceExplanations": [
      "正解（最も不適切）。指定された死亡保障の最低保証と反する記述です。",
      "適切。解約返戻金は運用で変動し、払込保険料合計は保証されません。",
      "適切。終身型は一生涯の死亡保障で、有期型の満期給付とは区別します。",
      "適切。死亡保障の最低保証を解約返戻金にも適用するのは誤りです。"
    ],
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/main/29.html",
    "additionalSourceUrls": [
      "https://www.jili.or.jp/knows_learns/kind/main/37.html"
    ],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の範囲で、実損てん補型の財物保険の損害保険金について最も不適切な説明はどれか。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n対象 / 財物の偶然な事故を対象とする実損てん補型の保険\n算定条件 / 対象損害・契約の保険金額・免責等を確認\n含めない給付 / 費用保険金・定額の傷害/医療給付\n商品差 / 対象事故・特約・免責の条件は契約により異なる\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n基本用語と本問で指定した契約条件を確認する。個別商品約款・費用保険金・定額給付等の包括確認ではない。",
    "choices": [
      "損害額を超えて必ず利得を得られる仕組みである",
      "免責金額を設定する契約がある",
      "対象損害の範囲は約款により異なる",
      "財物への偶然な事故による損害を補償する契約がある"
    ],
    "answer": 0,
    "explanation": "実損てん補型の財物保険は、対象となる損害と契約条件に基づく損害保険金を支払うもので、損害を超える利得を必ず得る制度ではありません。免責や対象事故の条件があることは適切です。定額給付型の傷害・医療給付等まで同じ説明を適用しません。",
    "topic": "実損てん補型財物保険の損害保険金",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-135",
    "contentReview": "v113_deductible_limit_scoped_migration",
    "choiceExplanations": [
      "正解（最も不適切）。実損てん補型の保険は通常、被った損害額や契約条件を基に支払額を決め、超過利得を約束しません。",
      "免責金額を設ける損害保険はあり、この記述は適切です。",
      "補償範囲は商品・約款・特約で異なるため、この記述は適切です。",
      "偶然な事故による財物損害を補償する商品はあり、この記述は適切です。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1.html",
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の特約について、最も適切な記述はどれか。\n〈リビング・ニーズ特約の全額請求〉\n項目 / 条件\n主契約の死亡保険金額 / 2,000万円\n医師の判断 / 被保険者の余命6か月以内\n請求条件 / 主契約の死亡保険金の全部を対象とする生前給付を請求\n受取額 / 請求対象額から所定の利息・半年分の保険料を差し引く\n全額請求後 / 付加された医療関係の特約を含めて契約は消滅する設計\n除外範囲 / 税務・指定代理請求・具体的な控除額の計算は問わない\n法令基準日：2026年4月1日。条件・金額は独自の学習用設例。\n基本的な仕組みと明示条件を確認する。商品別全約款・全法令・税務の包括監修ではない。",
    "choices": [
      "所定の余命要件等を満たせば死亡保険金の生前受取ができ、与件の全額請求後は契約が消滅する",
      "余命の診断がなくても、被保険者の希望だけで請求できる",
      "生前給付を受け取った後も、請求した2,000万円の死亡保障は全額残る",
      "請求対象額が2,000万円なら、利息・保険料の控除なく2,000万円を必ず受け取れる"
    ],
    "answer": 0,
    "explanation": "リビング・ニーズ特約は所定の余命要件等を満たす場合に死亡保険金を生前に受け取る制度です。与件では死亡保険金の全額を対象とするため契約は消滅します。また請求対象額2,000万円と、利息・保険料等を控除した実際の受取額を混同しません。部分請求後の残保障とは区別します。",
    "topic": "リビング・ニーズ特約の全額請求",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-136",
    "contentReview": "v115_medical_living_payment_scoped_migration",
    "choiceExplanations": [
      "正解。余命要件による生前給付と、与件の全額請求による契約消滅を正しく説明しています。",
      "不適切。希望だけではなく、医師の余命判断等の所定要件が必要です。",
      "不適切。生前給付分の死亡保障を二重に受け取れません。全額請求では契約が消滅します。",
      "不適切。与件では請求対象額から利息・保険料等を差し引きます。"
    ],
    "sourceUrl": "https://www.jili.or.jp/knows_learns/kind/special/9259.html",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/law/shitsugi/shotoku/01/03.htm"
    ],
    "sourceLabel": "生命保険文化センター：医療・生前給付・保険料払込の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.115：給付対象日数/余命条件/全額請求/控除/払込頻度と期間を独自表で限定確認。新改訂内容照合と独立算術を分離。国税庁は給付構造の補助照合のみで税務移行を計上しない。商品約款と基準日法令全体は包括未確認。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の契約者貸付制度について、最も適切な説明はどれか。\n〈契約者貸付と保障の継続〉\n項目 / 条件\n対象契約 / 解約返戻金があり、契約者貸付を利用できる生命保険\n貸付可能額 / 解約返戻金の所定の範囲内\n利息 / 所定の利息が付く\n保障と精算 / 通常は保障継続。未返済元利金は死亡・満期保険金等から控除\n失効の注意 / 元利金が返戻金を超え、通知された額を期限内に払わないと失効する場合がある\n法令基準日：2026年4月1日。金額・契約条件は学習用の独自設例。\n主契約の基本的な仕組みを問う。商品別の約款・引受条件・全支払要件の包括確認ではない。",
    "choices": [
      "契約者貸付を利用すると、死亡保障は貸付実行時点で必ず全額消滅する",
      "貸付可能額は、通常、解約返戻金の一定範囲で定められる",
      "契約者貸付は、解約返戻金を担保にするため、通常は無利息で利用できる",
      "契約者貸付は、解約返戻金のない掛け捨て定期保険であっても死亡保険金額の範囲で利用できる"
    ],
    "answer": 1,
    "explanation": "契約者貸付の限度は通常、解約返戻金の一定範囲です。利用中も一般に保障は続きますが、利息が付き、未返済元利金は保険金等から控除されます。過大な貸付残高と所定の払込み不履行による失効にも注意します。",
    "topic": "契約者貸付と保障の継続",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-137",
    "contentReview": "v114_life_insurance_design_scoped_migration",
    "choiceExplanations": [
      "貸付によって保障が必ず全額消滅するわけではありません。利息の累積で契約が失効するリスク等はあります。",
      "正解。通常、解約返戻金の一定範囲内で貸付可能額が決まります。",
      "契約者貸付は通常利息が生じるため、無利息という記述は不適切です。",
      "返戻金のない商品では、通常それを基礎とする契約者貸付を利用できません。死亡保険金額だけで決まりません。"
    ],
    "sourceUrl": "https://www.jili.or.jp/knows_learns/basic/continuance/93.html",
    "additionalSourceUrls": [],
    "sourceLabel": "生命保険文化センター：主契約・受取方法・解約/貸付の基本説明",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.114：独自設例の条件、正答・全選択肢理由・単位・資料表を限定照合。公表日未記載の一般説明は確認日と区別。商品別約款・税務・法令全体・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "2026年中、Aさんが保険料を全額負担した生命保険から満期保険金400万円を一時金で受け取った。払込保険料は320万円で、ほかに一時所得はない。総所得金額に算入される金額はいくらか。\n〈満期保険金の一時所得計算〉\n項目 / 内容\n満期保険金 / 400万円\n払込保険料 / 320万円\n特別控除 / 50万円\n受取方法 / 一時金\n保険料負担者と受取人はAさんで同一。源泉分離課税となる短期の一時払養老保険等ではない。",
    "choices": [
      "15万円",
      "30万円",
      "50万円",
      "80万円"
    ],
    "answer": 0,
    "explanation": "満期保険金を一時金で受け取り、保険料負担者と受取人が同一の場合は原則として一時所得です。一時所得は400万円－320万円－50万円＝30万円で、その2分の1の15万円を総所得金額に算入します。",
    "topic": "満期保険金の課税",
    "createdVersion": 9,
    "revision": 60,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-138",
    "contentReview": "v91_2026_insurance_proceeds_tax_scoped_primary_review",
    "choiceExplanations": [
      "正解。｛400－320－50｝×1/2＝15万円です。",
      "不適切。30万円は2分の1を乗じる前の一時所得の金額です。",
      "不適切。50万円は一時所得の特別控除額です。",
      "不適切。80万円は保険金と払込保険料の差額で、特別控除と2分の1課税を反映していません。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1755.htm",
    "sourceLabel": "国税庁：No.1755 生命保険契約に係る満期保険金等を受け取ったとき",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.91：満期保険金の一時所得、疾病による入院給付金、建物損害の補てん保険金を2026年4月1日基準で公式照合。商品・休業補償等の全例外を含む包括監修ではない。",
    "taxYear": 2026
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の事故Aに対応する保険として、基本的な対象区分が最も適切なものはどれか。\n〈店舗の賠償事故の原因と被害者〉\n事例 / 条件\n事故A / 店舗床の水濡れを放置し、来店客が転倒して負傷\n事故B / 販売・引渡し後の弁当の衛生上の欠陥により購入者が食中毒\n事故C / 業務中の従業員が労災事故で負傷\n事故D / 保管を引き受けた顧客のカメラを破損\n共通条件 / 事業者がそれぞれの被害者に法律上の賠償責任を負う\n法令基準日：2026年4月1日。事故・人物は独自の仮定。\n保険種目の基本区分を問う。実際の保険金支払いは、契約の被保険者・対象事故・免責・限度額などによる。個別商品約款全体の確認は行っていない。",
    "choices": [
      "生産物賠償責任保険（PL保険）",
      "施設所有（管理）者賠償責任保険",
      "受託者賠償責任保険",
      "使用者賠償責任保険"
    ],
    "answer": 1,
    "explanation": "店舗床の管理不備によって顧客が負傷した事故Aでは、施設所有（管理）者賠償責任保険を検討します。販売後の生産物、従業員、受託財物の事故とは分けて考えます。",
    "topic": "施設・生産物・使用者・受託財物の賠償責任",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-139",
    "contentReview": "v111_liability_insurance_scoped_migration",
    "choiceExplanations": [
      "販売・引渡し後の商品の欠陥事故を想定しており、店舗床の管理上の事故による来店客のけがとは異なります。",
      "正解。店舗の施設・設備の所有、使用または管理に起因する対人賠償責任に備える保険です。",
      "預かった他人の物が損壊した事故ではなく、来店者本人のけがへの賠償責任を問う設問です。",
      "従業員への労災事故ではなく、来店した顧客のけがへの賠償責任である点が異なります。"
    ],
    "sourceUrl": "https://www.sonpo.or.jp/sme_insurance/liability/",
    "sourceLabel": "日本損害保険協会：事業者の賠償責任保険",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/body/q094.html",
      "https://www.sonpo.or.jp/sme_insurance/explanation/article02/",
      "https://www.tokiomarine-nichido.co.jp/hojin/pdf/ippan_yakkan_20220101.pdf"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.111：事故原因・被害者・被保険者の役割、補償の基本区分、全選択肢・解説・独自資料を限定照合。商品別の拡張特約・全免責・支払査定の包括確認は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "資料の条件による損害保険金として、最も適切な金額はどれか。\n〈損害保険金の計算用契約条件〉\n項目 / 条件\n対象となる損害額 / 200万円\n差し引く免責金額 / 20万円\n支払限度額 / 150万円\n算定順序 / 対象損害額から免責を控除し、0円を下限とした後に限度額を適用\nその他条件 / 支払対象事故・実損払。比例払・他保険調整・費用保険金なし\n法令基準日：2026年4月1日。人物・金額は独自の仮定。\n本問で明示した差引免責方式と適用順序を使う。実際の商品は方式・約款が異なる場合があり、一般共通の支払算式とはしない。",
    "choices": [
      "180万円",
      "150万円",
      "200万円",
      "130万円"
    ],
    "answer": 1,
    "explanation": "対象損害200－免責20＝180万円。0円を下限にして支払限度額150万円を適用すると、損害保険金は150万円です。限度額適用後に免責を再度差し引きません。",
    "topic": "差引免責と支払限度額",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "given_formula_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-140",
    "contentReview": "v113_deductible_limit_scoped_migration",
    "choiceExplanations": [
      "不適切。免責は控除しましたが、支払限度額を適用していません。",
      "正解。免責控除後180万円に支払限度額150万円を適用し、150万円です。",
      "不適切。損害額をそのまま答え、免責と必要な限度額を適用していません。",
      "不適切。限度額適用後に免責を再度差し引くなど、指定順序を誤っています。"
    ],
    "sourceUrl": "https://soudanguide.sonpo.or.jp/basic/5_1_q4.html",
    "sourceLabel": "日本損害保険協会：免責・保険価額・実損払の基本説明／設例算式は指定条件",
    "additionalSourceUrls": [
      "https://soudanguide.sonpo.or.jp/home/q056.html"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.113：契約仮定の適用順序・ゼロ下限・単位・全誤答理由・基本用語を限定確認。指定算式の内部検算と一般的な一次資料照合を区別。商品別約款・全法令・包括監修は未完了。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の満期保有時の単利最終利回り（年率、近似式）はどれか。\n〈単利最終利回りの近似〉\n項目 / 条件\n額面・償還額 / 100円\n購入価格 / 104円（経過利子なし）\n固定表面利率 / 年2％、年利子2円\n残存期間 / 満4年（年1回、4回の年利子）\n指定式 / ｛年利子＋（償還額－購入価格）÷残存年数｝÷購入価格×100\n利子の再投資収益を加算しない。年率％は小数第3位を四捨五入して小数第2位まで表示。\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "約1.92％",
      "約2.00％",
      "約0.96％",
      "約1.00％"
    ],
    "answer": 2,
    "explanation": "償還差損－4円を4年で年割りし、年利子2円に－1円を足します。年平均収益1円÷購入104円×100≒0.9615％、約0.96％。指定の単利近似であり、キャッシュフローから求める複利利回りではありません。",
    "topic": "単利最終利回りの近似",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-141",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "choiceExplanations": [
      "不適切。2÷104×100≒1.92％は償還差損を無視した直接利回りです。",
      "不適切。2÷100×100＝2％は表面利率で、購入価格や償還差損を反映しません。",
      "正解。｛2＋（100－104）÷4｝÷104×100≒0.96％です。",
      "不適切。分子1円を額面100円で割った1％。分母は購入価格104円です。"
    ],
    "sourceUrl": "https://www.jpx.co.jp/glossary/sa/519.html",
    "additionalSourceUrls": [
      "https://www.jpx.co.jp/glossary/ta/296.html"
    ],
    "sourceLabel": "JSDA/JPXの限定定義と提示条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料のJ-REITについて、最も不適切な記述はどれか。\n〈J-REITの換金と配当控除〉\n項目 / 条件\n商品形態 / 国内の上場不動産投資法人の投資口\n投資家 / 日本の居住者である個人。法人投資家ではない\n対象分配 / 利益を原資とする通常の分配金（利益超過分配・資本払戻しは除く）\n税務の判断 / 所得税の配当控除の対象かを問う。税率や税額計算は問わない\n保有資産 / 賃貸不動産等。架空設例で個別銘柄ではない\n上場投資法人の投資口を対象とし、REITへ投資するETFや一般投資信託へ一律に同じ税務扱いを広げない。\n法令基準日2026年4月1日、確認日2026年10月15日。設例・表は独自表現。\n税務は国税庁の令和8年4月1日現在表示の主要論点を限定照合し、全法律全文・全改正や包括監修と区別する。",
    "choices": [
      "発行体による買戻しが常に保証されるオープンエンド型である",
      "市場で売買できるものがある",
      "分配金は税法上の配当控除対象とはならない",
      "不動産の賃料等を原資とする分配がある"
    ],
    "answer": 0,
    "explanation": "J-REITは市場で投資口を売買する換金方法と、投資法人が解約に応じる方法を混同しません。個人が受ける通常の利益分配が配当所得として扱われることと、配当控除の対象になることは別です。投資法人の配当等は配当控除の対象外です。",
    "topic": "J-REITの換金と配当控除",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-142",
    "contentReview": "v127_dividends_scoped_migration",
    "choiceExplanations": [
      "正解（最も不適切）。基本的に中途解約に応じないクローズドエンド型です。発行体による常時買戻しを保証するオープンエンド型ではありません。",
      "適切。上場投資口は取引所の市場で売買できます。ただし希望価格や時点で必ず約定する保証とは別です。",
      "適切。国税庁は投資法人から支払を受ける配当等を所得税の配当控除の対象外としています。",
      "適切。不動産の賃料や売却益等が分配の原資となります。ただし分配額や元本は保証されません。"
    ],
    "sourceUrl": "https://www.jpx.co.jp/equities/products/reits/outline/",
    "additionalSourceUrls": [
      "https://www.imaj.or.jp/study/reit/about/scheme.html",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1250.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1330.htm"
    ],
    "sourceLabel": "公式一次資料の配当/J-REIT/所得区分限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式論点3、単純再確認0、ID初回時期未確定。法律全文/全改正未確認。金融2に加え共通配当論点の税1をまとめて点検。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の1年間の税引前収益額はいくらか。\n〈利子と償還差益の合計〉\n項目 / 条件\n額面・満期償還額 / 100万円\n購入価格 / 99万円（経過利子なし）\n固定表面利率 / 年1％\n保有期間 / 満1年、年利子を1回受領\n計算対象 / 利子＋償還差益（元本償還額そのものは利益ではない）\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "100万円",
      "2万円",
      "99万円",
      "1万円"
    ],
    "answer": 1,
    "explanation": "受取総額は元本償還100万円＋利子1万円＝101万円。購入99万円との差が2万円。100－99の差益をもう一度足して二重計上しません。",
    "topic": "利子と償還差益の合計",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-143",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "choiceExplanations": [
      "不適切。100万円は元本償還額です。収益額ではありません。",
      "正解。利子1万円＋償還差益1万円＝2万円です。",
      "不適切。99万円は購入価格です。",
      "不適切。1万円は利子または償還差益の一方だけです。"
    ],
    "sourceUrl": "https://www.jpx.co.jp/glossary/sa/519.html",
    "additionalSourceUrls": [],
    "sourceLabel": "JSDA/JPXの限定定義と提示条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の配当利回り（税引前）として、最も適切なものはどれか。\n〈同一の株式単位で比較する配当利回り〉\n項目 / 条件\n株価 / 2026年4月1日の提示株価 3000円\nEPS / 2025年1～12月の実績1株当たり当期純利益 150円\n年間1株配当 / 2025年1～12月の実績合計 45円\n普通株式のみ。EPS・BPSは必要な調整後の提示値。株式分割/併合、優先株、自己株式数の追加計算なし。\n配当は税引前。手数料・個人税額・売買差益なし。実績配当の将来継続を保証しない。\n法令基準日：2026年4月1日。企業・金額は独自仮定。指標の数学/定義確認であり、実企業の会計・投資判断・税法改正の包括監修ではない。",
    "choices": [
      "30％",
      "20倍",
      "1.5％",
      "70％"
    ],
    "answer": 2,
    "explanation": "配当利回り（税引前）＝年間1株配当÷株価×100＝45円÷3,000円×100＝1.5％です。配当性向は45円÷EPS150円×100＝30％で、分母が異なります。",
    "topic": "配当利回りと配当性向の違い",
    "createdVersion": 9,
    "revision": 5,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "given_assumptions_math_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-144",
    "contentReview": "v218_dividend_yield_diversity",
    "choiceExplanations": [
      "不適切。45円÷EPS150円×100＝30％は配当性向です。",
      "不適切。株価3,000円÷EPS150円＝20倍はPERです。",
      "正解。45円÷株価3,000円×100＝1.5％です。",
      "不適切。EPSのうち配当に回さなかった割合（150－45）÷150×100＝70％です。"
    ],
    "sourceUrl": "https://www.jpx.co.jp/glossary/ha/353.html",
    "additionalSourceUrls": [
      "https://port.jpx.co.jp/jpxhp/portdocs/beginner_a_03.html"
    ],
    "sourceLabel": "JPXの株式指標定義／配当利回りと配当性向の独立検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "fp2-041と同じ配当性向の反復を配当利回りへ変更。数値・選択肢・解説を独立検算。法令改正や実企業の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の資産全体の期待収益率はどれか。\n〈不均等配分の期待収益率〉\n項目 / 条件\n投資比率 / A：75％、B：25％\n期待収益率 / A：4％、B：8％\n計算式 / 投資比率×各期待収益率の合計\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n同じ円建て。提示収益率は値上がり・配当等を含む総収益率。途中の追加投資・引出し・配分変更・再投資、手数料・税額なし。期待値と実現値を区別。",
    "choices": [
      "4％",
      "8％",
      "6％",
      "5％"
    ],
    "answer": 3,
    "explanation": "加重平均は3％＋2％＝5％。期待収益率は将来収益を保証しません。分散投資によって元本が保証されるという意味でもありません。",
    "topic": "不均等配分の期待収益率",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-145",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "choiceExplanations": [
      "不適切。4％はAだけの期待収益率です。",
      "不適切。8％はBだけの期待収益率です。",
      "不適切。6％は（4＋8）÷2という単純平均です。",
      "正解。0.75×4＋0.25×8＝5％です。"
    ],
    "sourceUrl": "",
    "additionalSourceUrls": [],
    "sourceLabel": "提示加重平均式の内部検算（法令一次資料照合ではない）",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の2資産を組み合わせる場合、最も適切な説明はどれか。\n〈負相関と必要配分〉\n項目 / 条件\n全3状態の収益率 / 状態1：A－2％、B16％ ／ 状態2：A2％、B4％ ／ 状態3：A6％、B－8％\n状態の確率 / それぞれ3分の1\n2資産の関係 / B＝10－3A。ピアソン相関係数－1\n提示する期首配分 / A75％、B25％\n提示配分による相殺は指定の全3状態モデル内の結果。過去の相関から現実の将来相関が－1と保証されるものではない。\n法令基準日：2026年4月1日。数値・資産は独自例。公式資料の図表・文章の転載ではない。\n円建て同一期間の税引前総収益率。途中の追加投資・引出し・配分変更、手数料・税、レバレッジなし。",
    "choices": [
      "完全な負の相関であり、組合せで変動を打ち消し得る",
      "相関係数が−1でも、二つの資産を組み合わせた分散効果は全く生じない",
      "相関係数が−1なら、一方の収益率が上昇すると他方も同じ率で上昇する",
      "相関係数が−1なら、二つの資産の収益率は必ず同じ平均値を持つ"
    ],
    "answer": 0,
    "explanation": "Aの平均2％、Bの平均4％。標準偏差はBがAの3倍なので、A75％/B25％で0.75σA＝0.25σB。各状態の合計は－1.5＋4＝2.5、1.5＋1＝2.5、4.5－2＝2.5％。50％ずつなら7％、3％、－1％で変動は残り、負相関だけで任意配分が無変動になるわけではありません。",
    "topic": "負相関と必要配分",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-146",
    "contentReview": "v124_diversification_scoped_migration",
    "choiceExplanations": [
      "正解。完全な負相関です。提示配分では各状態で2.5％になり、モデル内の変動を相殺できます。",
      "不適切。提示配分で変動は相殺できます。分散効果が全くないとはいえません。",
      "不適切。負相関では偏差の方向が逆です。本例ではAが上がるとBはその3倍の幅で下がります。",
      "不適切。Aの平均は2％、Bの平均は4％で異なります。相関－1は平均の一致を意味しません。"
    ],
    "sourceUrl": "https://www.stat.go.jp/naruhodo/10_tokucho/hukusu.html",
    "additionalSourceUrls": [],
    "sourceLabel": "金融庁/総務省統計局の定義と独自指定モデルの検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の限定照合3/指定モデル内部検算3。公式背景の参照を重複加算しない。法令改正照合0、ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料の要求利回り上昇後の理論価格として、最も適切なものはどれか。\n〈金利と固定利付債の価格〉\n項目 / 条件\n額面・償還額 / 100円\n年利子 / 2円（固定、年1回、期末払い）\n残存期間 / 1年（次回利払時に償還）\n市場の要求利回り / 年2％から年3％へ上昇\n計算モデル / 価格＝（年利子＋償還額）÷（1＋要求利回り）\n法令基準日：2026年4月1日。金額・利率・期間は独自の仮定で、実際の商品・相場を示さない。\n税金・手数料・信用状態の変化・不履行なし。数値計算の条件であり、現実の商品で元本や収益を保証する説明ではない。",
    "choices": [
      "価格が上昇する",
      "利払額は自動的に2倍になる",
      "価格は金利に影響されない",
      "価格が下落する"
    ],
    "answer": 3,
    "explanation": "価格は将来の利子と償還額の現在価値です。受取額を固定して割引率を上げると価格は下がります。",
    "topic": "金利と固定利付債の価格",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-147",
    "contentReview": "v123_bond_cashflow_scoped_migration",
    "choiceExplanations": [
      "不適切。約101円へ上がるのでなく、約99.03円へ下がります。",
      "不適切。年利子2円は固定であり、要求利回りの上昇で4円にはなりません。",
      "不適切。固定した受取額でも割引率が変われば理論価格は変わります。",
      "正解。102÷1.03≒99.03円となり、上昇前の100円より下がります。"
    ],
    "sourceUrl": "https://market.jsda.or.jp/shijyo/saiken/saiken/index9.html",
    "additionalSourceUrls": [],
    "sourceLabel": "JSDA/JPXの限定定義と提示条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "価格関係の公式限定照合3と指定条件内部検算8を区別。内部検算の公式枠組み参照は公式件数へ重複加算しない。法令改正照合なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "個人向け国債の基本商品区分について、最も適切なものはどれか。\n〈満期と利率方式の区別〉\n項目 / 条件\n対象商品 / 財務省が発行する個人向け国債の基本3タイプ\n基準日 / 2026年4月1日（2026年3月4日公表の発行資料と基本概要を参照）\n比較する満期 / 3年満期、5年満期、10年満期\n出題対象外 / 特定発行回の利率、税率、中途換金調整額、利回りの比較\n法令基準日2026年4月1日、確認日2026年10月15日。設例・数値は独自仮定。\n基準日前の発行資料で3タイプを限定確認。全発行条件や全改正を確認したものではない。",
    "choices": [
      "10年満期のみ固定金利型",
      "すべて変動金利型",
      "3年満期のみ変動金利型",
      "3年満期・5年満期は固定金利型、10年満期は変動金利型"
    ],
    "answer": 3,
    "explanation": "固定3年・固定5年は発行時の利率が満期まで変わらず、変動10年は半年ごとに適用利率が変わる区分です。満期の長短と利率が固定/変動かは別の属性です。ここで扱う区分から特定回の実際の利率や収益を推定しません。",
    "topic": "満期と利率方式の区別",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.mof.go.jp/jgbs/individual/kojinmuke/",
    "sourceLabel": "財務省・金融庁の制度基本事項と限定適用条件照合",
    "id": "fp2-148",
    "contentReview": "v126_nisa_bonds_scoped_migration",
    "choiceExplanations": [
      "不適切。10年満期は変動金利型で、固定金利型ではありません。",
      "不適切。3年と5年満期は固定金利型なので、すべて変動ではありません。",
      "不適切。3年満期は固定、10年満期が変動です。",
      "正解。3年と5年満期は固定金利型、10年満期は変動金利型です。"
    ],
    "additionalSourceUrls": [
      "https://www.mof.go.jp/jgbs/individual/kojinmuke/houdouhappyou/p20260304.pdf"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式制度論点4問。法令全文/全歴史改正未確認。補助計算は重複加算なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "ドル建て評価額が一定の資料の資産について、時点Aを基準とする円換算額の変化率はどれか。\n〈変化率の基準額〉\n項目 / 条件\nドル建て評価額 / 100米ドル（両時点で同額）\n時点A / 1米ドル＝150円\n時点B / 1米ドル＝135円\n変化率 / （時点Bの円換算額－時点Aの円換算額）÷時点Aの円換算額×100\n時点・相場・資産は独自の比較用仮定で、実際の相場や商品実績ではない。法令基準日：2026年4月1日。\n外貨額の増減、利息、売買、追加投資・引出し、手数料、税額は考慮しない。",
    "choices": [
      "約11.1％増加",
      "10％減少",
      "変化なし",
      "10％増加"
    ],
    "answer": 1,
    "explanation": "基準額は時点Aの15,000円。差－1,500円をこれで割り10％減少です。時点B13,500円を分母にしません。",
    "topic": "変化率の基準額",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-149",
    "contentReview": "v122_fx_weighted_scoped_migration",
    "choiceExplanations": [
      "不適切。約11.1％は135から150へ戻る場合の増加率で、比較方向と分母が違います。",
      "正解。（13,500－15,000）÷15,000×100＝－10％なので、10％減少です。",
      "不適切。ドル建て額は一定でも円換算額は減少しています。",
      "不適切。変化率の絶対値は10％ですが、符号は負です。"
    ],
    "sourceUrl": "https://www.boj.or.jp/about/education/oshiete/intl/g18.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "日本銀行の円高・円安定義／独自仮定の換算検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義2問と内部検算11問を区別。法令改正照合は加算なし。ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "資料も踏まえた投資信託の費用の説明として、最も不適切なものはどれか。\n〈購入・保有・換金の費用〉\n項目 / 条件\nファンドAの購入時手数料 / 0円（ノーロード）\nファンドAの信託報酬 / 保有中に信託財産から日々控除\nファンドBの信託財産留保額 / 換金時に設定あり（信託財産へ留保）\n比較条件 / A・Bは架空の別商品。具体的な率や金額は問わない\n全選択肢の「適切/不適切」を、最も不適切なものを選ぶ問い方に合わせて判定する。\n法令基準日：2026年4月1日。確認日と資料公表日を区別し、基本定義・指定例の限定点検として扱う。\n設例・表は独自表現で、公式資料の文章や画像を転載しない。全商品約款や全法令改正の包括監修ではない。",
    "choices": [
      "信託報酬がかかる商品の手数料は、売却時にのみ一括払いするのが常に原則",
      "保有期間中に信託報酬がかかる商品がある",
      "購入時手数料がかからない商品がある",
      "信託財産留保額が設定されている商品がある"
    ],
    "answer": 0,
    "explanation": "信託報酬と購入時手数料、信託財産留保額は区別します。留保額は販売会社への手数料と同じではなく信託財産へ留保されます。ノーロードは購入時手数料がないという意味で、全費用0を意味しません。",
    "topic": "購入・保有・換金の費用",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-150",
    "contentReview": "v125_funds_scoped_migration",
    "choiceExplanations": [
      "正解（不適切）。信託報酬を売却時だけ一括払いするのが常に原則ではなく、保有中に日々間接負担します。",
      "適切。保有期間中に信託報酬を負担する商品があります。",
      "適切。購入時手数料が0のノーロードの商品・取扱いがあります。",
      "適切。信託財産留保額が設定される商品もあり、必ずすべての商品に設定されるわけではありません。"
    ],
    "sourceUrl": "https://www.imaj.or.jp/study/investmenttrust/costtax/cost.html",
    "additionalSourceUrls": [],
    "sourceLabel": "公式発行元の基本定義・費用・取引方法の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式定義7問。指定数値の補助検算は別の法令改正照合件数に加算しない。単純再確認0、ID初回時期未確定。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料による退職所得控除額はいくらか。退職所得金額や税額ではなく控除額を答えること。\n〈退職所得控除の二段階計算〉\n項目 / 条件\n対象年分 / 2026年分。日本の居住者である個人\n退職手当 / 勤務先から一度だけ受ける通常の退職一時金。本人負担掛金なし\n勤続期間 / 満28年（1年未満の端数なし）\n勤続等 / 一般従業員のみとして連続勤務。役員等の勤務期間なし\n控除の調整 / 過去・同年の他の退職金や確定拠出年金の一時金受給なし。勤続期間の重複調整なし\n追加条件 / 障害が原因の退職ではなく、ほかの特例なし\n法令基準日2026年4月1日。資料は独自の設例。指定する計算段階を確認すること。",
    "choices": [
      "1,360万円",
      "1,120万円",
      "560万円",
      "800万円"
    ],
    "answer": 0,
    "explanation": "最初の20年分800万円に、残り8年分の70×8＝560万円を加え、1,360万円となります。全勤続年数に同じ単価を掛けたり、加算分だけを答えたりしないこと。2分の1を掛けるのは退職所得金額を計算する次の段階であり、控除額には掛けません。",
    "topic": "退職所得控除の二段階計算",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm",
    "sourceLabel": "国税庁：給与・年金・退職所得の基本計算",
    "id": "fp2-151",
    "contentReview": "v130_income_retirement_scoped_migration",
    "choiceExplanations": [
      "正解。800＋70×8＝1,360万円です。",
      "不適切。28×40＝1,120万円は、20年超の加算単価を使っていません。",
      "不適切。8×70＝560万円は加算部分だけで、800万円が欠けています。",
      "不適切。800万円は最初の20年分のみで、超過8年分が欠けています。"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要事項4/指定条件内部検算2。控除額の計算と所得金額/税額を区別。全改正・条文全文・全例外の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料の退職所得金額の計算式として、最も適切なものはどれか。\n〈一般退職手当の所得計算〉\n項目 / 条件\n対象年分 / 2026年分。日本の居住者である個人\n退職手当 / 勤務先から一度だけ受ける通常の退職一時金。本人負担掛金なし\n勤務期間 / 一般従業員として満12年。短期退職手当等・特定役員退職手当等のいずれにも該当しない\n勤続等 / 一般従業員のみとして連続勤務。役員等の勤務期間なし\n控除の調整 / 過去・同年の他の退職金や確定拠出年金の一時金受給なし。勤続期間の重複調整なし\n追加条件 / 障害が原因の退職ではなく、ほかの特例なし\n収入の条件 / 収入金額は源泉徴収前の額で、退職所得控除額を上回る\n法令基準日2026年4月1日。資料は独自の設例。指定する計算段階を確認すること。",
    "choices": [
      "退職所得控除額だけ",
      "収入金額×2",
      "収入金額そのもの",
      "（収入金額−退職所得控除額）×1/2"
    ],
    "answer": 3,
    "explanation": "資料の通常の退職手当では、源泉徴収前の収入から退職所得控除を引いた残額を2分の1にします。一般従業員であっても短期退職手当等には別の取扱いがあるため、役員でないという条件だけで無条件にこの式を当てはめないこと。退職所得金額は税額や振込手取り額ではありません。",
    "topic": "一般退職手当の所得計算",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-152",
    "contentReview": "v130_income_retirement_scoped_migration",
    "choiceExplanations": [
      "不適切。退職所得控除額は収入から引く額であり、退職所得金額そのものではありません。",
      "不適切。収入全額を2倍する計算ではありません。",
      "不適切。退職所得控除と控除後の2分の1計算が欠けています。",
      "正解。資料は短期・特定役員の例外に該当せず、控除後の金額に2分の1を掛けます。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm",
    "sourceLabel": "国税庁：給与・年金・退職所得の基本計算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要事項4/指定条件内部検算2。控除額の計算と所得金額/税額を区別。全改正・条文全文・全例外の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税で、次の一般生命保険料について適用される控除額として、最も適切なものはどれか。\n〈新旧の一般生命保険料〉\n項目 / 内容\n扶養親族 / 23歳未満の扶養親族はいない\n新契約の支払保険料 / 8万円\n新契約分の計算額 / 8万円×1/4＋2万円＝4万円\n旧契約の支払保険料 / 8万円\n旧契約分の計算額 / 8万円×1/4＋2万5,000円＝4万5,000円\n旧契約の支払保険料が6万円を超える場合は、旧契約分だけで計算した控除額を用いる。",
    "choices": [
      "4万円",
      "4万5,000円",
      "5万円",
      "8万5,000円"
    ],
    "answer": 1,
    "explanation": "旧契約の年間支払保険料が6万円を超えるため、一般生命保険料控除は旧契約分だけで計算した4万5,000円です。新契約分4万円との合計8万5,000円を用いることも、新契約分だけを選ぶこともありません。旧契約だけなら上限は5万円ですが、本問の計算額は4万5,000円です。",
    "topic": "生命保険料控除（新旧契約併存）",
    "createdVersion": 9,
    "revision": 62,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1140.htm",
    "sourceLabel": "国税庁：No.1140 生命保険料控除",
    "id": "fp2-153",
    "contentReview": "v88_2026_new_old_life_insurance_contracts_scoped_primary_review",
    "choiceExplanations": [
      "不適切。新契約分だけの計算額であり、本問では旧契約の支払保険料が6万円を超えます。",
      "正解。旧契約8万円×1/4＋2万5,000円＝4万5,000円です。",
      "不適切。5万円は旧契約だけを適用する場合の上限であり、本問の計算額ではありません。",
      "不適切。新旧の計算額を単純合計する扱いではありません。"
    ],
    "taxYear": 2026,
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.88：新旧一般生命保険料・個人年金保険料の併存時に、旧契約支払6万円以下の合算上限4万円と、6万円超の旧契約単独計算を公式照合。包括監修未完了。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年中、Aさんは、自分を被保険者・給付金受取人とする医療保険から、疾病による入院を給付原因とする入院給付金を受け取った。この給付金の所得税上の取扱いとして最も適切なものはどれか。\n〈入院給付金の契約・給付条件〉\n項目 / 内容\n被保険者 / Aさん\n給付金受取人 / Aさん\n給付原因 / Aさんの疾病による入院\n受取方法 / 一時金\n死亡保険金、満期保険金、勤務先からの給与ではない。医療費控除の補てん金計算は別論点。",
    "choices": [
      "一時所得として課税される",
      "給与所得として課税される",
      "雑所得として課税される",
      "原則として非課税"
    ],
    "answer": 3,
    "explanation": "疾病により支払を受ける入院費給付金等は、所得税基本通達9-21により、身体の傷害に基因して支払を受けるものとして原則非課税です。死亡保険金や満期保険金の課税関係とは区別します。",
    "topic": "入院給付金の課税",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-154",
    "contentReview": "v91_2026_insurance_proceeds_tax_scoped_primary_review",
    "choiceExplanations": [
      "不適切。満期保険金と異なり、本問の疾病による入院給付金は原則非課税です。",
      "不適切。勤務先から受ける労務の対価ではありません。",
      "不適切。受取方法が一時金であることだけで雑所得にはなりません。",
      "正解。疾病による本人の入院給付金は原則非課税です。"
    ],
    "taxYear": 2026,
    "sourceUrl": "https://www.nta.go.jp/law/tsutatsu/kihon/shotoku/02/04.htm",
    "sourceLabel": "国税庁：所得税基本通達9-20・9-21",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.91：満期保険金の一時所得、疾病による入院給付金、建物損害の補てん保険金を2026年4月1日基準で公式照合。商品・休業補償等の全例外を含む包括監修ではない。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料の法人が負担・納付した中退共掛金について、最も適切な説明はどれか。\n〈中退共の納付済み掛金と法人・従業員の課税〉\n項目 / 条件\n対象期間 / 2026年3月分の通常の毎月の掛金\n契約 / 中小企業退職金共済制度（中退共）の有効な契約。企業と従業員は加入要件を満たしている\n対象となる人 / 法人が雇用する通常の従業員。役員や使用人兼務役員の加入可否を判定する設例ではない\n負担と納付 / 法人が掛金の全額を負担し、2026年3月中に現実に納付済み。未納付の未払金や将来分の一括前納ではない\n比較する範囲 / 法人税の損金算入と、掛金支出時点での従業員への給与課税。受取時の退職金課税や地方税の外形標準課税等は問わない\n独自設例。法令基準日は2026年4月1日。所定要件を満たす通常の納付済み掛金に限定します。",
    "choices": [
      "法人が負担する中退共の掛金は、原則として交際費として損金算入限度額を判定する",
      "法人が負担する中退共の掛金は、原則として役員給与として損金算入される",
      "法人が負担する中退共の掛金は、従業員が受け取る時点を待たずに全額給与課税される",
      "一定の要件で法人の損金となる"
    ],
    "answer": 3,
    "explanation": "資料の有効な中退共契約に基づいて法人が負担・納付した掛金は、所定の要件で法人の損金に算入できます。掛金を支出した時点では従業員の給与として課税されません。従業員向けの掛金を、交際費や役員給与として扱う説明とは区別します。また、現実に納付していない額を未払金として損金算入できるという意味ではありません。",
    "topic": "中退共の納付済み掛金と法人・従業員の課税",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-155",
    "contentReview": "v143_chutaikyo_scoped_migration",
    "choiceExplanations": [
      "不適切。資料の従業員向け退職金共済掛金を、交際費として限度額判定する取扱いではありません。",
      "不適切。資料の対象者は役員ではなく通常の従業員であり、掛金を役員給与として損金算入する説明ではありません。",
      "不適切。所定の掛金を法人が支出した時点では、従業員の給与として課税されません。",
      "正解。資料の所定要件を満たす納付済み掛金は、法人の損金に算入できます。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hojin/5231.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/law/tsutatsu/kihon/hojin/09/09_03.htm",
      "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000119655.html"
    ],
    "sourceLabel": "国税庁No.5231（2026年4月1日現在法令等）・法人税基本通達9-3-1・厚生労働省",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "今回改訂の全肢主要点を新たに限定照合。納付時期はV133部分確認の再確認。同一1問を新規1+再確認1の2問として加算しない。施行令135条等の基準日統合全文、役員加入可否の詳細は未確認。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年中、Aさんが暦年課税で父から80万円、祖母から100万円を受贈した。基礎控除後の課税価格はいくらか（ほかに贈与なし・非課税特例なし）。\n〈複数贈与者からの受贈資料〉\n項目 / 内容\n父からの贈与 / 80万円\n祖母からの贈与 / 100万円\n年間受贈額 / 180万円\n暦年課税の基礎控除 / 年110万円\n同じ受贈者が1年間に受けた贈与を合計して計算する。",
    "choices": [
      "180万円",
      "70万円",
      "0万円",
      "110万円"
    ],
    "answer": 1,
    "explanation": "同じ受贈者Aさんの年間受贈額は80万円＋100万円＝180万円です。贈与者が2人でも基礎控除は合計110万円なので、課税価格は180万円－110万円＝70万円です。",
    "topic": "贈与税・暦年課税",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4410.htm",
    "sourceLabel": "国税庁：No.4410 複数の人から贈与を受けたとき",
    "id": "fp2-156",
    "contentReview": "v90_2026_gift_tax_scoped_primary_review",
    "choiceExplanations": [
      "不適切。180万円は基礎控除前の年間受贈額です。",
      "正解。80＋100－110＝70万円です。",
      "不適切。基礎控除を贈与者ごとに適用することはできません。",
      "不適切。110万円は基礎控除額であり、控除後の課税価格ではありません。"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.90：2026年の暦年課税・相続時精算課税について、受贈者単位の年110万円、複数贈与者の合算・按分、選択要件と変更不可を公式照合。包括監修未完了。",
    "taxYear": 2026
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料の純損失について、翌年以後の原則的な繰越期間の説明として最も適切なものはどれか。\n〈純損失の原則的な繰越期間〉\n項目 / 条件\n対象者 / 日本の居住者で、小売業を営む個人Aさん\n損失の発生 / 2025年分について青色申告。事業の損失を損益通算しても控除しきれない純損失が残った\n申告等 / 損失が生じた年の申告とその後の連続申告など、繰越しの要件を満たす\n損失の区分 / 災害による損失ではなく、特定非常災害等による5年特例の適用なし\nほかの制度 / 前年への繰戻し還付は受けず、株式の譲渡損失・居住用財産の特例などは扱わない\n期間内でも既に控除した損失は再利用しない。各年の控除額は未控除残高や所得により決まり、本問はその金額を計算しない。",
    "choices": [
      "純損失の繰越控除は、原則として翌年以後10年間適用される",
      "原則として翌年以後3年間の繰越が可能",
      "純損失の繰越控除は、原則として翌年にしか適用できない",
      "純損失の繰越控除は、原則として翌年以後5年間適用される"
    ],
    "answer": 1,
    "explanation": "損益通算をしても残る純損失について、提示条件では原則として翌年以後3年間繰り越せます。2025年分の損失なら、法令基準日時点の制度で対象となる年分は2026～2028年分です。事業の赤字全額をそのまま純損失とせず、先に損益通算を行います。災害特例の5年とは区別し、繰戻し還付に使用した同じ損失を重ねて繰り越すものではありません。",
    "topic": "純損失の原則的な繰越期間",
    "createdVersion": 9,
    "revision": 59,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-157",
    "contentReview": "v131_blue_return_loss_scoped_migration",
    "choiceExplanations": [
      "不適切。個人所得税の本問の純損失について、原則10年ではありません。",
      "正解。本問の原則は翌年以後3年間です。",
      "不適切。翌年だけに限定されず、原則3年間の制度です。",
      "不適切。災害に係る一定の純損失には5年特例がありますが、本問はその適用がありません。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2070.htm",
    "sourceLabel": "国税庁：青色申告・損益通算・損失申告の手引き",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要事項公式照合3/過去確認論点の再確認1を区別。法令基準日と2025損失発生年・2026以後の対象年分、確認日は別。条文全文・全例外は未確認。",
    "priorSourceCheckedDate": "2026-10-13",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/shinkoku/tebiki/2025/pdf/003.pdf",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2210.htm"
    ]
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年分の所得税について、給与所得者の年末調整と確定申告に関する記述のうち、最も適切なものはどれか。\n〈給与所得者の申告判定資料〉\n項目 / 内容\n給与の支払先 / 1か所\n給与収入 / 1,800万円（全額が源泉徴収対象）\n年末調整 / 勤務先で実施済み\n給与・退職以外の所得 / 副業による所得25万円\nその他 / 申告不要となる特例所得はなく、他の例外なし\n給与以外の「収入」ではなく「所得」で判定する。",
    "choices": [
      "年末調整済みなので確定申告は不要である",
      "給与・退職以外の所得が20万円を超えるため、原則として確定申告が必要である",
      "給与収入が2,000万円以下なら、給与以外の所得額にかかわらず確定申告は不要である",
      "副業所得25万円は年末調整で勤務先が必ず精算する"
    ],
    "answer": 1,
    "explanation": "1か所から給与を受け、その全部が源泉徴収対象であっても、給与所得・退職所得以外の所得の合計が20万円を超える場合は原則として確定申告が必要です。本問の副業所得は25万円なので該当します。年末調整は勤務先が給与について行う精算であり、この副業所得まで必ず精算するものではありません。給与収入2,000万円超は年末調整対象外ですが、2,000万円以下であることだけで申告不要とは決まりません。",
    "topic": "源泉徴収・年末調整・確定申告",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-158",
    "contentReview": "v87_withholding_year_end_adjustment_return_scoped_primary_review",
    "choiceExplanations": [
      "不適切。年末調整済みでも、給与・退職以外の所得が20万円を超えるなどの要件に該当すれば確定申告が必要です。",
      "正解。本問では副業所得25万円が20万円を超えます。",
      "不適切。2,000万円以下でも、給与・退職以外の所得などにより確定申告が必要な場合があります。",
      "不適切。勤務先の年末調整が副業所得を必ず精算するわけではありません。"
    ],
    "taxYear": 2026,
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1900.htm",
    "sourceLabel": "国税庁：No.1900 給与所得者で確定申告が必要な人／No.2662 年末調整のしかた",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.87：給与の源泉徴収と年末調整、給与所得者の確定申告基準、普通預金利息の源泉分離課税を初回公式照合。包括監修未完了。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2026年中、個人事業主Aさんの事業用建物が火災で損害を受け、建物自体の損害を補てんする保険金を受け取った。所得税上の取扱いとして最も適切なものはどれか。\n〈火災保険金の給付内容〉\n項目 / 内容\n被災資産 / 事業用の建物（固定資産）\n保険金の対象 / 建物自体の物的損害\n含まれないもの / 商品・棚卸資産、休業収益、必要経費の補てん\n建物損失を必要経費へ算入する場合は、保険金で補てんされた部分を損失額から差し引く。",
    "choices": [
      "原則として譲渡所得となる",
      "事業用資産なので必ず事業所得となる",
      "原則として非課税となる",
      "原則として一時所得となる"
    ],
    "answer": 2,
    "explanation": "建物の物的損害を補てんする保険金は原則非課税です。ただし、建物の損失額を計算する際は保険金で補てんされた部分を差し引きます。商品・棚卸資産や休業収益、必要経費の補てんを目的とする保険金は別の取扱いとなり得ます。",
    "topic": "損害保険金の税務",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-159",
    "contentReview": "v91_2026_insurance_proceeds_tax_scoped_primary_review",
    "choiceExplanations": [
      "不適切。建物売却の対価ではないため、原則として譲渡所得ではありません。",
      "不適切。事業用であることだけで、建物損害の補てん金が必ず事業所得になるわけではありません。",
      "正解。建物自体の損害を補てんする保険金は原則非課税です。",
      "不適切。所定の資産損害の補てん金を当然に一時所得とはしません。"
    ],
    "taxYear": 2026,
    "sourceUrl": "https://www.nta.go.jp/publication/pamph/koho/kurashi/html/04_2.htm",
    "sourceLabel": "国税庁：保険と税",
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.91：満期保険金の一時所得、疾病による入院給付金、建物損害の補てん保険金を2026年4月1日基準で公式照合。商品・休業補償等の全例外を含む包括監修ではない。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "資料の通常の医療費控除について、最も適切な記述はどれか。\n〈医療費控除と給付金の対応〉\n項目 / 条件\n対象者・年分 / 日本の居住者である給与所得者Aさん。2026年分\n支払う対象 / その年中に実際に支払った、本人または生計を一にする親族の医療費\n補てん給付 / 医療費の補てんを目的とする保険金等は、どの医療費に対応するかを確認する\n比較する購入費 / 病気の治療に必要な医薬品と、治療目的ではなく健康増進のためだけのビタミン剤\n範囲 / 通常の医療費控除。セルフメディケーション税制の特例は扱わず、控除額の数値計算は問わない\n所得控除の額と還付税額は別。還付の有無や金額は税額・既納付額等による。",
    "choices": [
      "医療費控除は所得税の所得控除に該当する",
      "医療費控除の額を求める際、医療費の補てんを目的とする保険金は一切差し引かない",
      "治療目的ではなく健康増進のためだけに購入したビタミン剤も、通常の医療費控除の対象になる",
      "医療費控除では、控除の対象となった費用の全額が算出後の所得税額から直接差し引かれる"
    ],
    "answer": 0,
    "explanation": "医療費控除は所得控除です。医療費の補てん給付は、その給付目的となった医療費の範囲で差し引き、超過分をほかの医療費へ振り替えて差し引きません。治療に必要な医薬品と健康増進だけの購入費も区別します。控除額そのものが全額還付される制度ではありません。",
    "topic": "医療費控除と給付金の対応",
    "createdVersion": 9,
    "revision": 59,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1120.htm",
    "sourceLabel": "国税庁・東京都主税局の基本事項限定照合",
    "id": "fp2-160",
    "contentReview": "v132_tax_classification_documents_scoped_migration",
    "choiceExplanations": [
      "正解。医療費控除は税額控除ではなく所得控除です。",
      "不適切。補てん目的の保険金等は、給付の対象となった医療費を限度として差し引きます。",
      "不適切。治療目的ではなく健康増進だけのビタミン剤の購入費は、通常の医療費控除の対象となりません。",
      "不適切。控除対象額をそのまま算出税額から引く税額控除ではありません。"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂公式主要事項4/既存主要論点再確認1を分離。医療費の旧確認論点は重複加算せず、新改訂の健康増進薬品の誤答根拠を確認。法令全文・全例外は未確認。",
    "priorSourceCheckedDate": "2026-10-13",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1122.htm"
    ]
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料から容積率を求めると、最も適切なものはどれか。\n〈算定対象延べ面積と敷地面積の比〉\n項目 / 条件\n敷地面積 / 240㎡（算定に用いる敷地面積として確定）\n建築面積 / 96㎡（算定上の値として確定）\n容積率算定対象の延べ面積 / 360㎡（算入・不算入の調整後の確定値）\n計算範囲 / 提示された確定面積から比率を計算する。既存建物の適法性や建築許可の可否は判定しない\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "40％",
      "150％",
      "約26.7％",
      "約66.7％"
    ],
    "answer": 1,
    "explanation": "容積率算定対象の延べ面積360㎡を敷地面積240㎡で割り、100を掛けると150％です。分母は建築面積や延べ面積ではなく敷地面積です。",
    "topic": "算定対象延べ面積と敷地面積の比",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-161",
    "contentReview": "v133_building_ratio_scoped_migration",
    "choiceExplanations": [
      "不適切。40％は、建ぺい率を求めている計算です。",
      "正解。150％は、算定対象延べ面積を敷地で割る計算です。",
      "不適切。約26.7％は、建築面積を延べ面積で割っている計算です。",
      "不適切。約66.7％は、分子と分母を逆転している計算です。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の条件で、売主が手付解除のため買主に現実に提供する金額の総額はどれか。\n〈売主からの手付解除〉\n項目 / 条件\n売買の当事者 / 売主・買主とも宅地建物取引業者ではない個人。土地売買について民法の解約手付の規律を適用する\n受領済みの手付 / 150万円。買主が売主に交付済み\n解除する側 / 売主。買主・売主とも契約の履行に着手していない\n契約条件 / 2026年4月に新規締結したとする。手付解除を制限する特約や期限の定めはない\n問う金額 / 受領済み手付の返還相当分も含む、買主への提供総額。上乗せ分だけではない\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "450万円",
      "300万円",
      "150万円",
      "0万円"
    ],
    "answer": 1,
    "explanation": "売主は、相手方である買主が履行に着手する前であるなど資料の条件の下、受領した手付150万円の倍額300万円を現実に提供して手付解除します。この300万円に受領手付150万円をさらに足す必要はありません。提供総額と、受領手付に対する上乗せ相当分を区別します。",
    "topic": "売主からの手付解除",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-162",
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "choiceExplanations": [
      "不適切。倍額の総額に、受領済みの手付をさらに加えた三重の計上です。",
      "正解。150万円×2＝300万円を現実に提供します。受領済み手付の返還相当分を含む総額です。",
      "不適切。150万円は受領済み手付をそのまま返す額で、売主の倍額提供の総額に足りません。",
      "不適切。売主からの手付解除では、買主への金銭提供を不要とはできません。"
    ],
    "sourceUrl": "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19320170602044.htm",
    "additionalSourceUrls": [
      "https://laws.e-gov.go.jp/law/129AC0000000089?occasion_date=20220220"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の契約について、最も適切な記述はどれか。\n〈6か月の定期建物賃貸借〉\n項目 / 条件\n対象 / 個人が新たに借りる居住用建物。旧契約からの切替えではない\n予定する期間 / 6か月。期間の始めと終わりを契約で定める\n予定する契約 / 更新がない旨を定めた定期建物賃貸借契約\n締結方法 / 今回は紙の書面で契約し、賃貸人は契約書とは別に事前説明文書を交付して必要な説明を行うものとする\n範囲 / 所定の手続を満たす前提で、6か月の期間設定と更新の有無を問う。中途解約や終了通知の期間計算は問わない\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "定期建物賃貸借でも期間を1年未満とすると、必ず期間の定めのない賃貸借とみなされる",
      "定期建物賃貸借は、貸主に更新拒絶の正当事由がなければ期間満了後も当然に更新する",
      "定期建物賃貸借は、契約の終期を定めずに締結することができる",
      "資料のように所定の要件を満たせば、契約期間を6か月とすることもできる"
    ],
    "answer": 3,
    "explanation": "所定の要件を満たす定期建物賃貸借では、6か月のような1年未満の期間も有効に定められます。期間満了による終了と、当事者が改めて合意する再契約は区別します。普通建物賃貸借で1年未満の期間を定めた場合は、期間の定めがないものとみなされる扱いがあります。資料では紙の手続を選んでいますが、法律上、一定の要件を満たす電子化も認められています。",
    "topic": "6か月の定期建物賃貸借",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-163",
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "choiceExplanations": [
      "不適切。1年未満を期間の定めなしとみなす普通借家の扱いと、所定要件を満たす定期借家は区別します。",
      "不適切。資料の定期借家は更新がない契約です。改めて合意する再契約とは別です。",
      "不適切。定期建物賃貸借は期間を定める契約です。",
      "正解。所定の方式・事前説明等の条件を満たせば、6か月の期間設定もできます。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/common/001334935.pdf",
    "additionalSourceUrls": [
      "https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000030.html",
      "https://www.mlit.go.jp/jutakukentiku/house/jutakukentiku_house_tk3_000060.html"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の固定資産税について、原則的な賦課期日を示すものとして最も適切なのはどれか。\n〈固定資産税の賦課期日と年度〉\n項目 / 条件\n問う基準日 / 固定資産税の賦課期日（所有者等を判定する日）\n対象 / 通常の土地・家屋に係る固定資産税\n時点の区別 / 賦課期日と、年度初め・納税通知書の発送日・納期限は別のもの\n範囲 / 2026年度分の基本的な賦課関係を、2026年4月1日基準の教材として確認する\n法令基準日2026年4月1日、確認日とは別。税目の基本事項または提示設例の適用を確認する。",
    "choices": [
      "毎年7月1日",
      "毎年12月31日",
      "毎年1月1日",
      "毎年4月1日"
    ],
    "answer": 2,
    "explanation": "固定資産税は、原則として毎年1月1日を賦課期日とします。2026年度分の判定日も2026年1月1日で、教材の法令基準日4月1日や納期限に置き換えるものではありません。",
    "topic": "固定資産税の賦課期日と年度",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-164",
    "contentReview": "v135_property_tax_scoped_migration",
    "choiceExplanations": [
      "不適切。7月1日を賦課期日とするものではありません。",
      "不適切。年末12月31日ではなく、年初の1月1日です。",
      "正解。固定資産税の賦課期日は原則として毎年1月1日です。",
      "不適切。4月1日は年度初めであり、固定資産税の賦課期日ではありません。"
    ],
    "sourceUrl": "https://www.city.joso.lg.jp/data/doc/1774848303_doc_149_0.pdf",
    "additionalSourceUrls": [
      "https://www.tax.metro.tokyo.lg.jp/kazei/real_estate/kotei_tosi"
    ],
    "sourceLabel": "自治体・国税庁の不動産税基本事項と設例適用の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要論点3/共通公式ルール適用2/過去論点再確認2を区別。法令全文/全改正/免税点等の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料について、取得時諸費用を含む投下資金に対する、空室損失・運営費用を控除した年間の比率はいくらか。本問ではこの比率を実質利回りとする。\n〈運営費控除後の利回り〉\n項目 / 条件\n対象期間 / 2026年の1年間を想定する独自の収支モデル\n年間満室賃料 / 200万円\n年間空室損失 / 0万円（満室賃料から減る額）\n年間運営費用 / 50万円（管理・修繕・物件の税金等の現金支出として確定。借入元利金・減価償却・個人の所得税等は含まない）\n購入価格 / 2,500万円\n取得時諸費用 / 500万円（購入価格との重複なし）\n追加条件 / 借入なし。ほかの収支・売却損益なし。将来の収入や運用成果を保証する設例ではない\n本問の比率 / 分子＝満室賃料－空室損失－運営費用、分母＝購入価格＋取得時諸費用\n金額はすべて万円、比率は％。非整数の比率は小数第2位を四捨五入し小数第1位まで表示。\nこの運営収支モデルは所得税法上の不動産所得の計算ではない。法令基準日2026年4月1日の教材として条件を指定。",
    "choices": [
      "5％",
      "8％",
      "6％",
      "約6.7％"
    ],
    "answer": 0,
    "explanation": "運営費控除後の収支は200－0－50＝150万円。投下資金は2,500＋500＝3,000万円です。この2つの金額の比に100を掛けて百分率にします。借入元利金や個人の所得税を引いた後の利回りではありません。",
    "topic": "運営費控除後の利回り",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-165",
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "choiceExplanations": [
      "正解。150÷3,000×100＝5％です。",
      "不適切。200÷2,500×100＝8％は満室賃料と購入価格だけを使っています。",
      "不適切。150÷2,500×100＝6％は取得時諸費用を分母から落としています。",
      "不適切。200÷3,000×100＝約6.7％は運営費用50万円を控除していません。"
    ],
    "sourceUrl": "",
    "additionalSourceUrls": [],
    "sourceLabel": "指定条件の計算検証",
    "sourceCheckedDate": null,
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料で、区分所有法が管理者に求める集会招集の最低頻度として、最も適切なのはどれか。\n〈管理者による集会招集の頻度〉\n項目 / 条件\n対象 / 区分所有法が適用され、管理者が選任されている区分所有建物\n問う義務 / 管理者による集会の招集\n問う頻度 / 法律上の最低頻度。規約で追加の招集を求める場合や臨時集会とは区別する\n除外 / 理事会の頻度、標準管理規約の会計年度開始後の期限、通知期間、決議の多数要件は問わない\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "3年に1回",
      "半年に1回",
      "毎月1回",
      "毎年1回"
    ],
    "answer": 3,
    "explanation": "区分所有法第34条第2項では、管理者は少なくとも毎年1回、集会を招集しなければならないとされています。年1回だけしか招集できないという上限ではありません。規約上の追加義務、臨時集会、理事会の開催頻度とは区別します。",
    "topic": "管理者による集会招集の頻度",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-166",
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "choiceExplanations": [
      "不適切。3年に1回では、少なくとも毎年1回という最低頻度に足りません。",
      "不適切。その頻度で追加招集すること自体を禁止するものではありませんが、法律上の最低頻度を答えたものではありません。",
      "不適切。その頻度で追加招集すること自体を禁止するものではありませんが、法律上の最低頻度を答えたものではありません。",
      "正解。法律が管理者に求める最低頻度は、少なくとも毎年1回です。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/jutakukentiku/house/content/001760662.pdf",
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/21720250530047.htm",
      "https://laws.e-gov.go.jp/law/337AC0000000069?occasion_date=20250604"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の農地法上の手続について、最も適切な記述はどれか。\n〈市街化区域内の自己転用〉\n項目 / 条件\n区域 / 都市計画法上の市街化区域内であると確認された農地\n転用する者 / 既にその農地を所有するAさん。売買や賃借による権利移転は伴わない\n転用の目的 / 自己の住宅の敷地にする\n前提 / 生産緑地指定等の別の制限はなく、届出の適用条件を満たすものとする\n範囲 / 農地法上の自己転用の手続を問う。建築確認等、他法令による手続は別に確認する\n独自設例。法令基準日は2026年4月1日。資料の前提に従い、問われた範囲を判断する。",
    "choices": [
      "農地法上の転用許可は、資料の条件でも必ず必要で、事前の届出で許可不要になることはない",
      "あらかじめ農業委員会へ所定の届出をすることで、農地法の転用許可が不要となる取扱いがある",
      "市街化区域内で自己所有の農地なので、農地法上は届出も許可も一切不要である",
      "市街化区域内の農地は、住宅敷地への転用が農地法上すべて禁止されている"
    ],
    "answer": 1,
    "explanation": "資料のような市街化区域内の自己転用では、あらかじめ農業委員会へ所定の届出をすることにより、農地法の転用許可が不要となる取扱いがあります。市街化区域というだけで無手続に転用できるわけではありません。売買等を伴う転用や、建築など他法令の要件まで不要になるものでもありません。",
    "topic": "市街化区域内の自己転用",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_historical_full_text_pending",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-167",
    "contentReview": "v138_property_contract_and_management_scoped_migration",
    "choiceExplanations": [
      "不適切。資料の条件では、所定の届出で許可不要となる扱いがあります。",
      "正解。事前の農業委員会への届出と、転用許可が不要になる扱いを区別します。",
      "不適切。許可が不要でも、所定の届出を省略できるという意味ではありません。",
      "不適切。資料のように所定の条件を満たす転用まで一律に禁止されるわけではありません。"
    ],
    "sourceUrl": "https://www.maff.go.jp/j/nousin/noukei/totiriyo/ihan_tenyo.html",
    "additionalSourceUrls": [
      "https://www.pref.nagano.lg.jp/nosei/sangyo/nogyo/nochiho/tenyo.html"
    ],
    "sourceLabel": "国会制定法・国土交通省・農林水産省等による設問主要点の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点5/共通ルール設例適用5。手付3問の内部算術を別記。全法令/全改正/基準日統合全文の確認ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料から建ぺい率の上限だけで求める建築面積の上限を求めると、最も適切なものはどれか。\n〈建ぺい率から求める面積上限〉\n項目 / 条件\n敷地面積 / 350㎡（算定に用いる敷地面積として確定）\n本問で用いる建ぺい率上限 / 60％\n本問で用いる容積率上限 / 200％\n計算範囲 / 提示された上限率による面積計算のみ。前面道路・角地・防火等の制限/緩和の追加計算なし\n端数処理 / 必要な場合、百分率は小数第2位を四捨五入して小数第1位まで。整数で表せるものは整数表示\n面積単位は㎡、比率単位は％。図表の面積はこの設例の計算条件。法令基準日2026年4月1日。\n他の建築規制・具体的な不算入要件の適用判定は、この計算問題の範囲外。",
    "choices": [
      "210㎡",
      "700㎡",
      "140㎡",
      "350㎡"
    ],
    "answer": 0,
    "explanation": "敷地面積350㎡に、上限率60％を100で割った比を掛け、210㎡です。建築面積の上限と延べ面積の上限は別に計算します。",
    "topic": "建ぺい率から求める面積上限",
    "createdVersion": 9,
    "revision": 51,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-168",
    "contentReview": "v133_building_ratio_scoped_migration",
    "choiceExplanations": [
      "正解。210㎡は、指定の建ぺい率を使う計算です。",
      "不適切。700㎡は、容積率を使い延べ面積上限を求めている計算です。",
      "不適切。140㎡は、残りの敷地部分を求めている計算です。",
      "不適切。350㎡は、敷地全体をそのまま答えている計算です。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/plateaudocument/toc4/toc4_02/toc4_02_03/toc4_02_03_02/_urobuildingdetailattribute/",
    "sourceLabel": "国土交通省：比率の基本定義と指定条件の検算",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式定義の代表照合2問と同根拠の指定条件内部検算16問を分離。条文全文・全改正・建築可能性の包括監修ではない。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料で比較する公的な地価指標について、最も適切な記述はどれか。\n〈地価指標の価格時点〉\n項目 / 条件\n比較する制度 / 地価公示と都道府県地価調査\n区別する日付 / 価格を判定する時点と、結果を公表する時期は同じものではない\n比較する価格 / 標準地等の指標価格と個別の土地の実際の取引価格\n範囲 / 制度の基本的な価格時点・実施主体。2026年4月1日後に公表された地価変動の実績値は使わない\n独自設例。法令基準日は2026年4月1日。確認日や資料の公表日とは区別する。",
    "choices": [
      "地価公示は毎年7月1日時点、都道府県地価調査は毎年1月1日時点の価格を判定する",
      "地価公示は都道府県知事が、都道府県地価調査は国の土地鑑定委員会が価格を判定する",
      "地価公示の価格と、個々の土地の実際の取引価格は必ず同じ金額になる",
      "地価公示では、土地鑑定委員会が毎年1月1日時点の標準地の正常な価格を判定し、通常3月に公示する"
    ],
    "answer": 3,
    "explanation": "地価公示は国の土地鑑定委員会による1月1日時点の標準地の正常な価格、都道府県地価調査は都道府県知事による7月1日時点の基準地の標準価格です。価格時点、公表時期、実施主体を別々に整理します。個別の土地の取引価格には時期や条件の違いがあるため、指標価格との一致を一律に要求するものではありません。",
    "topic": "地価指標の価格時点",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-169",
    "contentReview": "v137_valuation_and_property_models_scoped_migration",
    "choiceExplanations": [
      "不適切。価格時点が逆です。地価公示は1月1日、都道府県地価調査は7月1日が基本です。",
      "不適切。主体が逆です。地価公示は土地鑑定委員会、都道府県地価調査は都道府県知事が判定します。",
      "不適切。地価公示は取引の指標等となりますが、個別の取引価格を必ず同額に固定するものではありません。",
      "正解。地価公示は価格時点の1月1日と、公示時期の通常3月を区別します。"
    ],
    "sourceUrl": "https://www.mlit.go.jp/totikensangyo/H30kouji01.html",
    "additionalSourceUrls": [
      "https://www.mlit.go.jp/totikensangyo/totikensangyo_fr4_000044.html"
    ],
    "sourceLabel": "国土交通省の評価手法・地価指標の一次資料による基本事項の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "公式基本事項3と指定条件内部検算3を区別。ID初回時期不明、法令全文/全改正/実機は未確認。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "資料の土地譲渡所得金額はいくらか。\n〈土地売却の収入・費用・所得〉\n項目 / 条件\n対象者・年分 / 日本の居住者である個人Aさん、2026年分\n資産 / 保有していた土地（商品ではない）。建物は含まない\n譲渡収入 / 7,000万円\n取得費 / 4,000万円（実額として確定した取得費を用いる）\n譲渡費用 / 300万円（今回の売却に直接要した費用、取得費と重複なし）\n追加条件 / 特別控除・その他の調整は適用しない。税率・税額は問わない\n金額の単位は万円。所得控除や税額控除をこの段階の費用に足さない。",
    "choices": [
      "2,400万円",
      "3,000万円",
      "2,700万円",
      "3,300万円"
    ],
    "answer": 2,
    "explanation": "譲渡収入7,000－取得費4,000－譲渡費用300＝2,700万円です。取得費と譲渡費用をそれぞれ一度ずつ差し引きます。提示した土地の実額取得費を使い、概算取得費や建物の減価償却の計算は行いません。この所得金額を納付税額や売却代金そのものと混同しないこと。",
    "topic": "土地売却の収入・費用・所得",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-170",
    "contentReview": "v134_rent_yield_land_transfer_scoped_migration",
    "choiceExplanations": [
      "不適切。7,000－4,000－300－300＝2,400万円は譲渡費用の二重控除です。",
      "不適切。7,000－4,000＝3,000万円は譲渡費用を控除していません。",
      "正解。7,000－4,000－300＝2,700万円です。",
      "不適切。7,000－4,000＋300＝3,300万円は譲渡費用を加算した誤りです。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3202.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁：土地建物の譲渡所得の限定確認",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "内部検算9/過去公式主要論点再確認1。利回りモデルは定義した分子分母を検算し、法令改正照合としない。条文全文/包括監修未完了。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で兄1人の法定相続分はどれか。\n〈相続人の構成と法定相続分〉\n項目 / 条件\n相続人の構成 / 法律上の配偶者、被相続人の兄・姉の2人\n家族関係の条件 / 相続人は資料の者のみで、全員が相続開始時に存命。相続放棄・欠格・廃除・代襲相続等の事情はない。被相続人に子・孫等も父母・祖父母等の直系尊属もいない。兄・姉はともに父母の双方を同じくする全血の兄弟姉妹である。\n分割の前提 / 遺言、指定相続分、特別受益・寄与分等による調整はないものとし、法定相続分どおりに分ける\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "1/8",
      "1/4",
      "1/2",
      "1/16"
    ],
    "answer": 0,
    "explanation": "配偶者3/4、兄弟姉妹全体1/4です。同順位の2人で均等に分けるので、兄1人の割合は1/4÷2＝1/8です。資料は法定相続分どおりに分ける前提です。現実の遺産分割で常にその割合どおりの取得が強制されるという意味ではありません。",
    "topic": "相続人の構成と法定相続分",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-171",
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "choiceExplanations": [
      "正解。兄1人の割合は1/8です。",
      "不適切。同順位の相続人全体の取り分を、1人分と取り違えています。",
      "不適切。配偶者の取り分を確保せず、遺産全体を兄・姉の2人だけで等分しています。",
      "不適切。既に1人分となった割合を、人数でもう一度割っています。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の貸宅地の相続税評価額はいくらか。\n〈通常の借地権の目的となる貸宅地〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n権利の条件 / 建物所有を目的とする通常の借地権（地上権又は土地の賃借権）の目的となる宅地。定期借地権等・区分地上権・使用貸借ではない\n土地の自用地としての価額 / 12,000万円。必要な画地補正等を反映した後の与件額\n借地権割合 / 対象地域に借地権の取引慣行があり、本問では60％と与える\n適用範囲 / 通常の貸宅地の相続税評価額。小規模宅地等の特例、貸家建付地の計算やほかの調整は適用しない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "1億2,000万円",
      "7,200万円",
      "4,800万円",
      "1億9,200万円"
    ],
    "answer": 2,
    "explanation": "通常の借地権の目的となる貸宅地は、自用地としての価額から借地権相当額を控除します。12,000万円－12,000万円×60％＝4,800万円です。借りる側の借地権相当額と、貸す側の土地の評価額を取り違えないようにします。",
    "topic": "通常の借地権の目的となる貸宅地",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-172",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "choiceExplanations": [
      "不適切。借地権相当額を控除する前の自用地価額です。",
      "不適切。借地権部分60％の額で、貸す側の土地の評価額ではありません。",
      "正解。自用地価額から借地権相当額を控除すると4,800万円です。",
      "不適切。自用地価額に借地権相当額を加算しており、控除の方向が逆です。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hyoka/4613.htm",
    "additionalSourceUrls": [],
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の契約に関する権利の評価方法として、最も適切なのはどれか。\n〈保険事故未発生の契約に関する権利〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n契約者と保険料負担者 / 契約者Aさんが保険料を全額負担していた。法人やほかの保険料負担者はいない\n被保険者 / 配偶者Bさん。Aさん死亡時もBさんは存命で、保険事故は発生していない\n取得するもの / 相続人が取得する生命保険契約に関する権利。Aさん死亡による死亡保険金ではない\n参考数値 / 死亡保険金額1,000万円、払込保険料累計400万円、相続開始時の解約返戻金300万円\n調整の条件 / 別途返還される前納保険料・剰余金等も源泉所得税等もなく、解約返戻金は正の額である\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "生命保険契約に関する権利は、未発生の死亡保険金額で評価するのが原則である",
      "生命保険契約に関する権利の相続税評価は、原則として払込保険料の累計額で行う",
      "生命保険契約に関する権利の評価額は、保険事故が発生していなければ常に0円になる",
      "原則として相続開始時の解約返戻金相当額による"
    ],
    "answer": 3,
    "explanation": "保険事故未発生の契約に関する権利は、原則として相続開始時に解約した場合の返戻金額を基に評価します。資料は加減算する別の額がないため300万円です。未発生の死亡保険金額1,000万円や払込保険料累計400万円とは区別し、返戻金があるため0円でもありません。",
    "topic": "保険事故未発生の契約に関する権利",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-173",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "choiceExplanations": [
      "不適切。未発生の死亡保険金額1,000万円を、この権利の評価額にはしません。",
      "不適切。払込保険料累計400万円ではなく、解約返戻金等が基準です。",
      "不適切。資料では解約返戻金300万円があり、保険事故未発生だから0円とはなりません。",
      "正解。資料は別途加減算する額がないため、相続開始時の解約返戻金300万円によります。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hyoka/4660.htm",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/law/shitsugi/sozoku/14/05.htm"
    ],
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の課税遺産総額はいくらか。\n〈課税価格合計と課税遺産総額〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n法定相続人 / 法律上の配偶者と実子2人のみ。全員存命で、相続放棄・欠格・廃除・養子・代襲等はない\n人数の範囲 / 資料の相続人だけを数え、ほかの者を重複して加えない\n各人の課税価格の合計額 / 9,000万円。非課税額・債務等の控除や必要な贈与加算等を反映した後の確定済み合計である\n計算の範囲 / 確定済みの課税価格合計から遺産に係る基礎控除を1回だけ差し引く。税率適用後の税額は求めない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "3,600万円",
      "4,200万円",
      "4,800万円",
      "5,400万円"
    ],
    "answer": 1,
    "explanation": "法定相続人は3人なので、遺産に係る基礎控除は3,000万円＋600万円×3＝4,800万円です。課税価格合計9,000万円からこれを1回差し引き、9,000－4,800＝4,200万円です。資料の課税価格合計から、既に反映済みの債務等をもう一度控除しません。",
    "topic": "課税価格合計と課税遺産総額",
    "createdVersion": 9,
    "revision": 5,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4152.htm",
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "id": "fp2-174",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "sourceName": "制度確認用の公的資料",
    "choiceExplanations": [
      "不適切。法定相続人を4人と数えた場合の額です。資料は3人です。",
      "正解。資料の法定相続人3人で計算すると4,200万円です。",
      "不適切。法定相続人を2人と数えた場合の額です。資料は3人です。",
      "不適切。法定相続人を1人と数えた場合の額です。資料は3人です。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "2026年中、Aさんは父・母の双方からの贈与について相続時精算課税を適用している。父から120万円、母から100万円を受け取った場合、年110万円の基礎控除の配分として正しいものはどれか（ほかに贈与なし、父母・Aさんは適用要件を満たす）。\n〈相続時精算課税の按分資料〉\n項目 / 内容\n父からの贈与 / 120万円\n母からの贈与 / 100万円\n合計 / 220万円\n年の基礎控除 / 受贈者Aさんについて110万円\n複数の特定贈与者がいるときは、特定贈与者ごとの課税価格で基礎控除を按分する。",
    "choices": [
      "父・母それぞれに110万円ずつ適用する",
      "父に60万円、母に50万円を配分する",
      "相続時精算課税には110万円の基礎控除を適用しない",
      "父に110万円を全額適用し、母には配分しない"
    ],
    "answer": 1,
    "explanation": "年110万円の基礎控除を贈与額の比率で按分します。父分は110万円×120万円÷220万円＝60万円、母分は110万円×100万円÷220万円＝50万円です。特定贈与者ごとに110万円ずつ控除するのではありません。",
    "topic": "相続時精算課税・年110万円",
    "createdVersion": 9,
    "revision": 50,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4410.htm",
    "sourceLabel": "国税庁：No.4410 複数の人から贈与を受けたとき",
    "id": "fp2-175",
    "contentReview": "v90_2026_gift_tax_scoped_primary_review",
    "choiceExplanations": [
      "不適切。基礎控除は受贈者について年110万円であり、特定贈与者ごとに全額を使えません。",
      "正解。110×120÷220＝60万円、110×100÷220＝50万円です。",
      "不適切。2024年1月1日以後の贈与には相続時精算課税にも年110万円の基礎控除があります。",
      "不適切。受領順ではなく特定贈与者ごとの課税価格で按分します。"
    ],
    "sourceCheckedDate": "2026-10-14",
    "reviewNote": "Ver.90：2026年の暦年課税・相続時精算課税について、受贈者単位の年110万円、複数贈与者の合算・按分、選択要件と変更不可を公式照合。包括監修未完了。",
    "taxYear": 2026
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で単純承認したBさんについて、最も適切な記述はどれか。\n〈単純承認と財産・債務の承継〉\n項目 / 条件\n相続開始 / 2026年3月1日にAさんが死亡した\n相続人 / 成人の子Bさん1人のみ。配偶者やほかの子・代襲相続人はいない\nBさんの選択 / 単純承認した。相続放棄・限定承認はしていない\n借入金の条件 / Aさん本人の確定した借入債務。団体信用生命保険等による弁済や、債権者による免除はない\n財産と債務 / Aさん所有の住宅と、未弁済の住宅ローン債務が残っている\n範囲 / 借入債務を承継するかを問う。税額や相続人間の負担調整は問わない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "財産だけでなく原則として借入金などの債務も引き継ぐ",
      "単純承認した場合、被相続人の債務を引き継ぐには別途家庭裁判所の許可が必要である",
      "被相続人の住宅ローン債務は、原則として相続開始日に消滅する",
      "土地・建物の所有権を相続した人は、借入金などの債務を全く承継しない"
    ],
    "answer": 0,
    "explanation": "単純承認では、被相続人の財産に関する権利義務を原則として承継します。住宅の所有権を得るだけで住宅ローンが消えるわけではなく、債務承継のために別途家庭裁判所の許可を受ける制度でもありません。資料は団信等による弁済や免除を除外しています。",
    "topic": "単純承認と財産・債務の承継",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-176",
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "choiceExplanations": [
      "正解。住宅等の財産だけでなく、未弁済の借入債務も原則として承継します。",
      "不適切。単純承認に伴う債務の承継ごとに、家庭裁判所の許可を必要とはしません。",
      "不適切。資料は団信等の弁済や免除がなく、死亡だけで住宅ローンが消えるわけではありません。",
      "不適切。不動産の所有権を相続したことだけで、借入債務の承継を回避できません。"
    ],
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_14/index.html",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf"
    ],
    "sourceLabel": "裁判所・法テラス・国税庁講本の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の2人が限定承認をする場合、最も適切な説明はどれか。\n〈限定承認の共同申述と責任の範囲〉\n項目 / 条件\n相続開始 / 2026年3月1日にAさんが死亡した\n共同相続人 / 成人Bさん・Cさんの2人のみで、双方が相続人である。放棄・欠格・廃除等はない\n手続の条件 / 自己のために相続の開始があったことを知った時から原則3か月以内。法定単純承認等の事情はない\n比較する内容 / 共同して行う者、家庭裁判所への申述、弁済責任の範囲\n範囲 / 通常の限定承認の原則を問う。具体的な期間満了日や清算手続の全要件は問わない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "限定承認は、共同相続人のうち過半数が賛成すれば他の相続人の同意なく行える",
      "原則として共同相続人の全員が共同して家庭裁判所に申述する",
      "限定承認は、相続人全員が合意していれば家庭裁判所への申述を要しない",
      "限定承認をした相続人は、相続財産を超える債務についても自身の財産から弁済する義務がある"
    ],
    "answer": 1,
    "explanation": "資料ではBさん・Cさんの全員が共同し、家庭裁判所に限定承認の申述を行います。全員の私的な合意だけで申述を省略できません。原則として相続により得た財産の範囲で被相続人の債務等を弁済する制度であり、単純承認の無限の責任とは区別します。",
    "topic": "限定承認の共同申述と責任の範囲",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-177",
    "contentReview": "v141_acceptance_partition_gift_and_net_assets_scoped_migration",
    "choiceExplanations": [
      "不適切。資料の共同相続人全員が共同して行う必要があり、過半数だけの同意では足りません。",
      "正解。資料ではBさん・Cさんの2人が共同して家庭裁判所に申述します。",
      "不適切。全員が合意しても、家庭裁判所への所定の申述は必要です。",
      "不適切。原則の弁済責任は相続によって得た財産の範囲であり、相続財産を超える債務を当然に自己財産で弁済する説明ではありません。"
    ],
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_14/index.html",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/about/organization/ntc/kohon/souzoku/pdf/all.pdf"
    ],
    "sourceLabel": "裁判所・法テラス・国税庁講本の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点公式限定照合4/共通適用5/内部計算のみ2。ID初回時期不明は計上しない。国税庁講本は2026年1月1日基準で、4月1日統合全文を確認したものではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料で家庭裁判所へ相続放棄を申述する原則の期間は、Aさんが示された事実を知った時からどれか。\n〈相続放棄の申述と期間〉\n項目 / 条件\n相続人 / 成人Aさん\n起算点の事実 / 被相続人が死亡したことと、それにより自己が法律上の相続人になったことをAさんが知った\n期間の条件 / 家庭裁判所による期間伸長、特定非常災害による特例、遅れて財産等を認識した場合の例外などはない\n範囲 / 原則の熟慮期間の長さを問う。具体的な満了日や休日による期限計算は問わない\n独自設例。法令基準日は2026年4月1日。実際の家族関係と手続の条件は資料による。",
    "choices": [
      "3か月以内",
      "1か月以内",
      "1年以内",
      "5年以内"
    ],
    "answer": 0,
    "explanation": "起算点は、自己のために相続の開始があったことを知った時であり、原則3か月以内に申述します。死亡した日を知らない場合などもあるため、全ての人について死亡日から一律に数える説明ではありません。申立てにより家庭裁判所が期間を伸長する場合等は、本問の前提から除いています。",
    "topic": "相続放棄の申述と期間",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_13/index.html",
    "sourceLabel": "国税庁No.4132/QA（2026年4月1日法令表示）・裁判所の限定照合",
    "id": "fp2-178",
    "contentReview": "v139_inheritance_shares_and_renunciation_scoped_migration",
    "choiceExplanations": [
      "正解。資料の事実を知った時から、原則3か月以内です。",
      "不適切。1か月は相続放棄の原則の熟慮期間ではありません。",
      "不適切。通常の熟慮期間を1年とはしません。期間伸長等の別の取扱いとは区別します。",
      "不適切。5年は資料の相続放棄の原則の熟慮期間ではありません。"
    ],
    "reviewedAt": "2026-10-13",
    "v66ReviewScope": "相続放棄の申述先・熟慮期間の起算点・期間伸長。初回公式照合時期不明。法令基準日を新たに確定するものではない。",
    "additionalSourceUrls": [
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132.htm",
      "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4132_qa.htm",
      "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_25/index.html"
    ],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点4/共通適用12/過去公式再確認4。法定相続分16問の内部分数計算を別記。全法令全文・全改正・包括監修ではない。",
    "priorSourceReview": "v66"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の配偶者に対する税額軽減について、最も適切な説明はどれか。\n〈配偶者の税額軽減と適用手続〉\n項目 / 条件\n相続開始 / 2026年3月1日に被相続人Aさんが死亡した\n対象者 / 被相続人の法律上の配偶者で、遺産分割等により実際に正味の遺産を取得した\n分割と財産の条件 / 申告期限までに分割が完了しており、隠蔽・仮装財産はない\n適用の条件 / 申告書と取得財産を確認できる所定書類を提出するなど、制度適用の要件を満たす\n比較するもの / 対象者、実際の取得額、法定相続分相当額と1億6,000万円の比較、申告手続\n範囲 / 基本的な軽減の枠を問う。未分割財産の後日適用や、更正の請求の期限計算等は問わない\n独自設例。法令基準日は2026年4月1日。金額は資料の条件に限定します。",
    "choices": [
      "配偶者の税額軽減は、配偶者が相続税の申告をしなくても自動的に全額適用される",
      "配偶者が取得した正味遺産額が法定相続分相当額または1億6,000万円のいずれか多い額まで、配偶者の相続税額が軽減される",
      "配偶者の税額軽減は、配偶者だけでなく被相続人の兄弟姉妹にも同じ要件で適用される",
      "配偶者の税額軽減では、正味遺産額のうち配偶者が取得した金額にかかわらず、必ず1億6,000万円までしか対象にならない"
    ],
    "answer": 1,
    "explanation": "配偶者が実際に取得した正味の遺産額について、法定相続分相当額と1億6,000万円のうち多い額までは配偶者に相続税がかからない制度です。全相続人共通の控除ではなく、配偶者が対象です。資料は分割・申告等の要件を満たす前提ですが、無申告で自動適用されるという意味ではありません。",
    "topic": "配偶者の税額軽減と適用手続",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4158.htm",
    "sourceLabel": "国税庁タックスアンサー（2026年4月1日現在法令等）対象点",
    "id": "fp2-179",
    "contentReview": "v142_inheritance_tax_policy_and_land_scoped_migration",
    "choiceExplanations": [
      "不適切。所定の申告等を要し、何も提出しなくても自動的に適用される制度ではありません。",
      "正解。実際の正味取得額について、法定相続分相当額と1億6,000万円の多い額を基準にします。",
      "不適切。被相続人の配偶者を対象とする制度で、兄弟姉妹に同じ要件で適用するものではありません。",
      "不適切。法定相続分相当額が1億6,000万円より多い場合は、その多い額が基準です。"
    ],
    "additionalSourceUrls": [],
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "主要点限定公式照合5/共通適用2/過去点再確認6。独立計算10を別記。統合条文全文/全改正/包括監修ではない。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "資料の紙の自筆証書遺言について、最も適切な記述はどれか。\n〈紙の自筆証書遺言と添付財産目録〉\n項目 / 条件\n作成時点 / 2026年3月1日。紙の自筆証書遺言を作成する\n保管の前提 / 本人が自宅で保管する。法務局の保管申請の用紙・余白等の様式は問わない\n比較する部分 / 財産を誰に承継させるかを書く本文、日付・氏名、添付する財産目録\n範囲 / 自書と署名・押印の方式を問う。遺言能力等を含めた有効性全体の審査ではない\n独自設例。法令基準日は2026年4月1日。資料の条件に限定した問題です。",
    "choices": [
      "自筆証書遺言は、遺言者が口頭で意思を伝え、それを第三者が記録するだけで成立する",
      "自筆証書遺言は、原則として遺言者が全文・日付・氏名を自書し押印する（財産目録の例外あり）",
      "添付する財産目録をパソコンで作成する場合は、財産目録以外の遺言本文もパソコンで作成できる",
      "自筆証書遺言では、本文を第三者が代筆しても、遺言者が署名・押印すれば原則として有効になる"
    ],
    "answer": 1,
    "explanation": "原則として全文・日付・氏名を本人が自書して押印します。添付財産目録には自書の例外がありますが、各葉等への署名・押印が必要で、本文はその例外に含まれません。口頭の意思の記録だけや、第三者の代筆に本人が署名・押印するだけでは、この方式を満たしません。",
    "topic": "紙の自筆証書遺言と添付財産目録",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": "2026-04-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-180",
    "contentReview": "v140_reserved_portion_handwritten_will_inheritance_start_scoped_migration",
    "choiceExplanations": [
      "不適切。口頭の意思を第三者が記録するだけでは、紙の自筆証書遺言の自書要件を満たしません。",
      "正解。原則の全文・日付・氏名の自書と押印、添付財産目録の例外を区別した説明です。",
      "不適切。パソコン作成の例外は添付財産目録であり、財産目録以外の本文には広がりません。",
      "不適切。第三者が本文を代筆した場合、本人の署名・押印だけでは本文自書の要件を補えません。"
    ],
    "sourceUrl": "https://www.koshonin.gr.jp/notary/ow02/2-q18",
    "additionalSourceUrls": [
      "https://www.shugiin.go.jp/internet/itdb_housei.nsf/html/housei/19620180713072.htm"
    ],
    "sourceLabel": "裁判所・日本公証人連合会・千葉県立図書館・衆議院制定法律の対象論点限定照合",
    "sourceCheckedDate": "2026-10-15",
    "reviewNote": "新改訂主要点2/共通適用1/過去公式再確認7。基準日統合全文・全改正の確認ではない。"
  }
];