// FPラボ 学科 Ver.53：未検証86問の主要論点レビュー、選択肢品質の重点改訂
const QUESTIONS = [
  {
    "id": "fp3-001",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "Aさんは5年後に住宅購入、8年後に子の進学を予定している。これらの支出予定を反映し、各年の収入・支出と金融資産残高の推移を見通す資料としてキャッシュフロー表を用いる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。キャッシュフロー表は将来の年次収支と金融資産残高を計算する表です。住宅購入費や進学費用を予定年の支出へ反映します。ライフイベント表は出来事と必要資金を整理する別の資料です。"
  },
  {
    "id": "fp3-002",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "Aさんが死亡保障1,000万円、保険期間10年の一般的な定期保険に加入した。保険期間が満了して生存していても、通常は満期保険金を受け取れない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。定期保険は定められた期間の死亡保障が中心で、一般に満期保険金はありません。満期時の生存給付を設ける養老保険と混同しないようにします。"
  },
  {
    "id": "fp3-003",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "債券の発行体が利息や元本を約束どおり支払えなくなるリスクを何というか。",
    "choices": [
      "信用リスク",
      "流動性リスク",
      "為替リスク"
    ],
    "answer": 0,
    "explanation": "信用リスクは発行体の信用状態の悪化などにより利息や元本が支払われなくなる可能性を指します。",
    "choiceExplanations": [
      "正解。発行体の経営・財務状態の悪化などによって利息や元本を受け取れない可能性が信用リスクです。",
      "流動性リスクは、希望する時期や価格で金融商品を売却できない可能性です。発行体の不払いそのものではありません。",
      "為替リスクは、外貨建て資産などの円換算額が為替変動で増減する可能性です。"
    ]
  },
  {
    "id": "fp3-004",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "給与収入があるAさんと、賃貸住宅を貸し付けているBさんでは、所得税法上、給与所得と不動産所得の計算方法が同一である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。給与所得は原則として給与収入から給与所得控除額を差し引き、不動産所得は原則として不動産収入から必要経費を差し引きます。所得の種類ごとに計算方法が異なります。"
  },
  {
    "id": "fp3-005",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "敷地面積200㎡、建築面積100㎡、容積率算定上の延べ面積300㎡の建物がある。建ぺい率はいくらか。",
    "choices": [
      "50％",
      "150％",
      "約33.3％"
    ],
    "answer": 0,
    "explanation": "建ぺい率＝建築面積100㎡÷敷地面積200㎡×100＝50％。150％は延べ面積300㎡÷敷地面積200㎡で求める容積率、約33.3％は建築面積100㎡÷延べ面積300㎡と分母を取り違えた値です。",
    "revision": 5,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-006",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "父が死亡し、子Aが適法に相続放棄をした場合、子Aはその父の相続について初めから相続人にならなかったものとみなされる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。相続放棄は所定の期間内に家庭裁判所へ申述する手続きです。放棄者はその相続について初めから相続人でなかったものとみなされます。遺産分割で取得額をゼロにすることとは別です。"
  },
  {
    "id": "fp2-001",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資金計画に関する次の記述のうち、最も適切なものはどれか。",
    "choices": [
      "ライフイベント表には将来の主な予定と必要資金を整理できる",
      "ライフイベント表は将来の金融資産残高を毎年算出するための表である",
      "バランスシートの純資産は、資産合計から負債合計を除き、年収を加えて求める",
      "可処分所得は、給与収入から所得税・住民税・社会保険料を差し引き、所得控除額を加えて求める"
    ],
    "answer": 0,
    "explanation": "ライフイベント表は将来のイベントと必要資金を整理するものです。②金融資産残高の年次推移はキャッシュフロー表で整理します。③純資産は資産－負債で、年収は加算しません。④所得控除は税額計算に用いる制度で、可処分所得に加えるものではありません。",
    "revision": 4,
    "contentReview": "v46_first_touch_choice_rationale",
    "choiceExplanations": [
      "正解。ライフイベント表は将来の予定や必要資金を時系列に整理します。",
      "金融資産残高の各年の推移は通常キャッシュフロー表で試算します。",
      "純資産は資産合計－負債合計です。年収を加算する計算ではありません。",
      "可処分所得は収入から税金・社会保険料等を控除する考え方であり、所得控除額を加算しません。"
    ],
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-002",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "生命保険の一般的な仕組みに関する記述として、最も適切なものはどれか。",
    "choices": [
      "終身保険は原則として一生涯の死亡保障を目的とする",
      "定期保険は一般に一定期間の死亡保障を備え、生存満期時に解約返戻金が必ず支払われる",
      "養老保険は死亡時と満期時の両方に備えるが、死亡保険金額は満期保険金額より必ず少ない",
      "終身保険は保険料払込期間が終わると保障も終了するが、解約返戻金は残る"
    ],
    "answer": 0,
    "explanation": "終身保険は一般に死亡保障が一生涯続きます。②定期保険には通常満期保険金がなく、解約返戻金も契約により異なります。③養老保険の死亡保険金と満期保険金は一般に同額です。④保険料払込満了と死亡保障終了は同じではありません。",
    "revision": 3,
    "contentReview": "arithmetic_or_concept_distractor_review_v19",
    "choiceExplanations": [
      "正解。終身保険は保険料払込満了後も原則として死亡保障が一生涯続きます。",
      "定期保険には一般に満期保険金がなく、解約返戻金の有無・水準も契約で異なります。",
      "養老保険では死亡保険金と満期保険金は一般に同額であり、死亡保険金が必ず少ないわけではありません。",
      "終身保険の払込期間と保障期間は異なります。払込満了が死亡保障の終了を意味しません。"
    ]
  },
  {
    "id": "fp2-003",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "債券価格と市場金利の一般的な関係について、最も適切なものはどれか。",
    "choices": [
      "市場金利の上昇時、既発の固定利付債券の市場価格は一般に上昇する",
      "市場金利が上昇すると既発債券価格は一般に下落する",
      "市場金利の上昇による既発債券の価格変動は、残存期間が長いほど必ず小さくなる",
      "市場金利が上昇すると既発の固定利付債券の利率（クーポン）も一般に自動的に上がる"
    ],
    "answer": 1,
    "explanation": "固定利付債券では、市場金利が上昇すると既発債券の価格は一般に下落します。①は反対です。③一般に金利感応度は残存期間が長いほど大きくなりやすく、逆ではありません。④既発の固定利付債券のクーポンは市場金利に連動して変更されません。",
    "revision": 3,
    "contentReview": "arithmetic_or_concept_distractor_review_v19",
    "choiceExplanations": [
      "市場金利上昇に伴い、既発固定利付債券の市場価格は一般に下がるため逆です。",
      "正解。市場金利が上がると、既発固定利付債券の価格は一般に下落します。",
      "一般に残存期間が長いほど金利変動の影響を受けやすく、「必ず小さくなる」は誤りです。",
      "固定利付債券の利率（クーポン）は通常発行時に定まり、市場金利に合わせて自動変更されません。"
    ]
  },
  {
    "id": "fp2-004",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の所得税について、居住者の合計所得金額が600万円で他の適用要件を満たす場合、基礎控除額はいくらか。",
    "choices": [
      "58万円",
      "63万円",
      "68万円",
      "95万円"
    ],
    "answer": 1,
    "explanation": "2025年分の合計所得金額600万円は489万円超655万円以下に当たり、基礎控除は63万円です。68万円は336万円超489万円以下、95万円は132万円以下、58万円は655万円超2,350万円以下等の区分です。",
    "revision": 4,
    "contentReview": "v25_primary_source_or_formula_review",
    "sourceUrl": "https://www.nta.go.jp/users/gensen/2025kiso/",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "source_checked_selected_points",
    "lawReferenceDate": "2025-01-01"
  },
  {
    "id": "fp2-005",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "敷地面積240㎡、建築面積96㎡、容積率算定上の延べ面積360㎡の建物がある。建ぺい率として最も適切なものはどれか。",
    "choices": [
      "40％",
      "150％",
      "約26.7％",
      "60％"
    ],
    "answer": 0,
    "explanation": "建ぺい率＝建築面積96÷敷地面積240×100＝40％。150％は延べ面積360÷敷地240で求める容積率、約26.7％は建築面積96÷延べ面積360で分母を取り違えた値、60％は敷地面積240と建築面積96の差144を敷地で割った値です。",
    "revision": 3,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "id": "fp2-006",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "相続に関する記述として、最も適切なものはどれか。",
    "choices": [
      "相続放棄は原則として家庭裁判所への申述が必要である",
      "共同相続人全員の同意で遺産を受け取らなければ、家庭裁判所への申述がなくても相続放棄と同じ法律効果が生じる",
      "相続放棄の申述期間は、原則として自己のために相続の開始があったことを知った時から6カ月である",
      "相続放棄した者は、相続税の基礎控除における法定相続人の数からも必ず除外する"
    ],
    "answer": 0,
    "explanation": "相続放棄は原則として家庭裁判所への申述が必要です。②遺産分割で取得しないことと法律上の相続放棄は別です。③熟慮期間は原則3カ月であり6カ月ではありません。④相続税の基礎控除は放棄がなかったものとして法定相続人の数を計算します。",
    "revision": 3,
    "contentReview": "arithmetic_or_concept_distractor_review_v19",
    "choiceExplanations": [
      "正解。相続放棄は原則として家庭裁判所への申述によって行います。",
      "遺産分割で何も受け取らない合意と、相続債務も承継しない法的な相続放棄は異なります。",
      "熟慮期間の原則は相続開始を知った時から3カ月であり、6カ月ではありません。",
      "相続税の基礎控除に用いる法定相続人の数は、原則として相続放棄がなかったものとした場合の数です。"
    ]
  },
  {
    "id": "fp3-007",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "ある時点のAさんの資産が預金500万円と住宅2,000万円、負債が住宅ローン1,700万円だけの場合、家計のバランスシートに記載する純資産は800万円である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。資産合計＝500＋2,000＝2,500万円、負債＝1,700万円なので、純資産＝2,500－1,700＝800万円です。特定時点の財産状況を整理するのがバランスシートです。"
  },
  {
    "id": "fp3-008",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "年収600万円から税金90万円、社会保険料90万円を差し引いた可処分所得はいくらか。",
    "choices": [
      "420万円",
      "510万円",
      "330万円"
    ],
    "answer": 0,
    "explanation": "可処分所得＝600－90－90＝420万円。510万円は税金90万円のみを控除し社会保険料を控除しない場合。330万円は税金と社会保険料の合計180万円をさらに90万円余分に控除した場合で、与件の税金90万円を二重計上した計算です。",
    "revision": 3,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-009",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "現在の100万円を一定の利率で5年間運用したときの将来の金額を求めるために使う係数はどれか。",
    "choices": [
      "資本回収係数",
      "終価係数",
      "現価係数"
    ],
    "answer": 1,
    "explanation": "終価係数は現在の一時金を複利運用した場合の将来価値を求める係数です。現価係数はその逆です。",
    "choiceExplanations": [
      "資本回収係数は、現在のまとまった資金を取り崩して毎期受け取る一定額を求めるための係数です。",
      "正解。終価係数は、現在の100万円を5年間複利運用した将来の金額を求めるときに使います。",
      "現価係数は、将来受け取る一定の一時金を現在価値に割り引く係数で、計算の向きが逆です。"
    ]
  },
  {
    "id": "fp3-010",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "預貯金700万円、有価証券500万円、住宅ローン残高450万円がある。ほかの資産・負債がない場合、純資産額はいくらか。",
    "choices": [
      "1,200万円",
      "750万円",
      "450万円"
    ],
    "answer": 1,
    "explanation": "資産は700＋500＝1,200万円、負債450万円のため純資産は750万円。1,200万円は住宅ローンを控除しない場合、450万円は住宅ローン残高そのものを純資産と取り違えた値です。",
    "revision": 4,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-011",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "母が保険料を負担し、子を被保険者とする死亡保険契約は、保険契約者と被保険者が別人なので、被保険者の同意があっても一切締結できない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。死亡保険では契約者と被保険者が別人となる契約もあります。他人の死亡を保険事故とする契約には被保険者の同意などの要件があるため、別人という理由だけで一律に無効にはなりません。"
  },
  {
    "id": "fp3-012",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "火災による建物損害額80万円、免責金額10万円、支払限度額60万円の契約である。損害額から免責金額を引いた後に限度額を適用する場合、支払保険金はいくらか。",
    "choices": [
      "70万円",
      "60万円",
      "80万円"
    ],
    "answer": 1,
    "explanation": "免責控除後は80－10＝70万円ですが限度額60万円を超えるため保険金は60万円。70万円は限度額を適用しなかった場合、80万円は免責と限度額の両方を無視した場合です。",
    "revision": 4,
    "contentReview": "v42_individual_question_choice_answer_explanation_check",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-013",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "個人が私生活で自転車に乗り、歩行者にけがをさせて法律上の損害賠償責任を負った。職務中の事故ではない場合、一般に最も適切な保険はどれか。",
    "choices": [
      "個人賠償責任保険",
      "施設所有（管理）者賠償責任保険",
      "生産物賠償責任保険（PL保険）"
    ],
    "answer": 0,
    "explanation": "私生活での自転車事故による法律上の賠償責任は、契約条件を満たせば個人賠償責任保険で補償されます。施設管理上の事故や販売した製品による事故に備える事業者向け賠償責任保険とは対象が異なります。",
    "choiceExplanations": [
      "正解。職務外での自転車事故など、日常生活で他人にけがを負わせた法的賠償責任に備えます（契約条件による）。",
      "施設の欠陥・管理や所定の業務遂行による第三者への賠償が主な対象で、私生活の自転車事故ではありません。",
      "販売・引渡し後の製品の欠陥などが原因の第三者への賠償責任に備えるもので、本件の原因とは異なります。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp3-014",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "死亡した場合に死亡保険金、満期まで生存した場合に満期保険金が支払われる生命保険は一般にどれか。",
    "choices": [
      "養老保険",
      "定期保険",
      "収入保障保険"
    ],
    "answer": 0,
    "explanation": "養老保険は保険期間中の死亡時の死亡保険金と、満期時の満期保険金を備える生命保険です。",
    "choiceExplanations": [
      "正解。養老保険は保険期間中の死亡保障と、満期まで生存した場合の満期保険金を備えます。",
      "定期保険は一定期間の死亡保障が中心で、通常、満期まで生存しても満期保険金はありません。",
      "収入保障保険は死亡時などに遺族へ一定期間の年金形式で給付する設計が中心で、一般の養老保険のような満期保険金ではありません。"
    ]
  },
  {
    "id": "fp3-015",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "Aさんが保有する固定利付債券について、発行体の信用状況などが変わらないとき、市場金利が上昇すると既発債券の市場価格は一般に上昇する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。固定利付債券は、市場金利が上昇すると既発債券の価格が一般に下落します。新しい高利回りの債券に対し、既発債券の魅力が相対的に低下するためです。"
  },
  {
    "id": "fp3-016",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "株式だけでなく債券や外国資産にも分散して投資した場合でも、経済危機などにより複数の資産が同時に下落し、損失が発生する可能性はある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。分散投資は特定資産への集中を避けるために有効ですが、相関関係や市場全体の変動により複数資産が同時に下落するリスクは残ります。損失の可能性がゼロになるわけではありません。"
  },
  {
    "id": "fp3-017",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "米ドル預金1万ドルについて、手数料等を無視し、1ドル＝150円から130円に円高が進んだ場合、円換算額は150万円から130万円に減少する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。円換算額＝外貨額×円相場です。10,000ドル×150円＝150万円、10,000ドル×130円＝130万円。円高になると、同額の米ドルの円換算額は減少します。"
  },
  {
    "id": "fp3-018",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "株価1,800円、1株当たり利益（EPS）150円、1株当たり純資産（BPS）300円の株式のPERは何倍か。",
    "choices": [
      "6倍",
      "12倍",
      "約0.083倍"
    ],
    "answer": 1,
    "explanation": "PER＝株価1,800円÷EPS150円＝12倍。6倍は株価÷BPSで求めるPBR。約0.083倍はEPS150円÷株価1,800円と分子・分母を逆にした値です。",
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "revision": 1
  },
  {
    "id": "fp3-019",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "会社員Aさんの給与所得を計算する際、原則として給与収入から給与所得控除額ではなく、住宅ローン元本の年間返済額を直接差し引く。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。給与所得＝給与収入－給与所得控除額が基本です。住宅ローン元本の返済額は給与所得の計算上の直接の控除項目ではありません。住宅借入金等特別控除は別の要件がある税額控除です。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1400.htm"
  },
  {
    "id": "fp3-020",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "土地建物の譲渡所得や上場株式等の譲渡所得には、給与所得などと課税方式を分けて税額を計算する制度がある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。所得税には総合課税のほか分離課税があります。土地建物の譲渡所得や一定の株式譲渡所得は、給与所得等と区分して税額を計算する仕組みです。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1300.htm"
  },
  {
    "id": "fp3-021",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "所得税の所得区分のうち、一般的な銀行預金の利子に該当するものはどれか。",
    "choices": [
      "給与所得",
      "利子所得",
      "不動産所得"
    ],
    "answer": 1,
    "explanation": "一般的な銀行預金の利子は利子所得です。給与所得は勤務先からの給与等に関する所得、不動産所得は土地・建物などの貸付けによる所得であり、預金利子とは区分が異なります。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1300.htm",
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "revision": 1
  },
  {
    "id": "fp3-022",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "ある人の合計所得金額が360万円、所得控除の合計額が120万円である。さらに税額控除が20万円あるが、ほかの調整はない。課税所得金額はいくらか。",
    "choices": [
      "220万円",
      "240万円",
      "360万円"
    ],
    "answer": 1,
    "explanation": "課税所得金額＝360－120＝240万円。220万円は、課税所得の算定後に税額から差し引く20万円の税額控除を、誤って課税所得からも差し引いた値。360万円は所得控除120万円を忘れた値です。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1100.htm",
    "contentReview": "v42_individual_question_choice_answer_explanation_check",
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "revision": 1
  },
  {
    "id": "fp3-023",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "敷地面積200㎡の土地に、容積率の算定対象となる延べ面積300㎡の建物がある。面積の算入除外等を考えない場合、容積率は150％となる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。容積率＝算定対象延べ面積300㎡÷敷地面積200㎡×100＝150％です。建ぺい率は建築面積を分子とするため別の指標です。"
  },
  {
    "id": "fp3-024",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "敷地面積200㎡、建築面積100㎡の建物について、建ぺい率は50％である（面積算定の特例は考慮しない）。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。建ぺい率＝建築面積100㎡÷敷地面積200㎡×100＝50％です。敷地面積を分子にして求める200％は逆算した誤りです。"
  },
  {
    "id": "fp3-025",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "Aさんが所有する土地にBさんが所有する建物が建っている場合、土地と建物は常に同一人の所有とみなされ、別々に登記することはできない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。日本の不動産法制では土地と建物は原則として別個の不動産です。土地所有者と建物所有者が異なることもあり、それぞれについて登記されます。"
  },
  {
    "id": "fp3-026",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "敷地面積200㎡、建築面積100㎡、容積率算定上の延べ面積300㎡の場合、容積率はいくらか。",
    "choices": [
      "50％",
      "150％",
      "300％"
    ],
    "answer": 1,
    "explanation": "容積率＝容積率算定上の延べ面積300÷敷地面積200×100＝150％。50％は建築面積100÷敷地面積200で建ぺい率を計算した場合、300％は延べ面積300÷建築面積100と誤った分母を使った場合です。",
    "revision": 4,
    "contentReview": "grounded_distractor_review_v22"
  },
  {
    "id": "fp3-027",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "被相続人に子・直系尊属・配偶者がなく、兄弟姉妹が法定相続人となる場合、兄弟姉妹には遺留分が認められない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。遺留分が認められるのは兄弟姉妹を除く一定の法定相続人です。兄弟姉妹が法定相続人になっても、遺留分はありません。"
  },
  {
    "id": "fp3-028",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "相続人が配偶者と子1人だけの場合、法定相続分における配偶者の割合はどれか。",
    "choices": [
      "3分の2",
      "2分の1",
      "4分の3"
    ],
    "answer": 1,
    "explanation": "配偶者と子が相続人のとき、配偶者の法定相続分は2分の1、子の法定相続分は2分の1です。",
    "choiceExplanations": [
      "3分の2は配偶者と直系尊属が相続人となる場合の配偶者の法定相続分です。",
      "正解。配偶者と子が相続人なら、配偶者は1/2、子全体が1/2です。",
      "4分の3は配偶者と兄弟姉妹が相続人となる場合の配偶者の法定相続分です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp3-029",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "相続人が配偶者と被相続人の父母だけの場合、配偶者の法定相続分はどれか。",
    "choices": [
      "2分の1",
      "4分の3",
      "3分の2"
    ],
    "answer": 2,
    "explanation": "配偶者と直系尊属が相続人となる場合、配偶者は3分の2、直系尊属は3分の1を相続します。",
    "choiceExplanations": [
      "2分の1は配偶者と子が相続人となる場合の配偶者の法定相続分です。",
      "4分の3は配偶者と兄弟姉妹が相続人となる場合の配偶者の法定相続分です。",
      "正解。配偶者と父母が相続人なら配偶者2/3、父母全体1/3です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp3-030",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "相続放棄を行うための申述先として適切なものはどれか。",
    "choices": [
      "税務署",
      "家庭裁判所",
      "法務局"
    ],
    "answer": 1,
    "explanation": "相続放棄は被相続人の最後の住所地を管轄する家庭裁判所に申述するのが原則です。",
    "sourceUrl": "https://www.courts.go.jp/saiban/qa/qa_kazi/index.html",
    "choiceExplanations": [
      "税務署は税の申告等を扱いますが、相続放棄の申述先ではありません。",
      "正解。相続放棄は原則として被相続人の最後の住所地を管轄する家庭裁判所へ申述します。",
      "法務局は登記等の手続きを扱う機関で、相続放棄の申述先ではありません。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp2-007",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "会社員Aさんの給与収入は900万円、所得税45万円、住民税35万円、社会保険料130万円である。年間の生活費は480万円、住宅ローンの元本返済額は90万円で、ほかの収支はない。Aさんの年間貯蓄可能額として最も適切なものはどれか。",
    "choices": [
      "690万円",
      "120万円",
      "210万円",
      "600万円"
    ],
    "answer": 1,
    "explanation": "給与収入900万円から所得税45・住民税35・社会保険料130を引くと可処分所得690万円。さらに生活費480万円と住宅ローン元本返済90万円を控除して年間貯蓄可能額120万円です。690万円は生活費・元本返済を引く前、210万円は元本返済90万円を引き忘れた場合、600万円は生活費を引かず元本返済のみを可処分所得から引いた場合です。",
    "revision": 6,
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "id": "fp2-008",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "100万円を年利3％で2年間、年1回の複利で運用し、税金や手数料がない場合、2年後の元利合計として最も適切なものはどれか。",
    "choices": [
      "109万円",
      "106万円",
      "106万900円",
      "103万円"
    ],
    "answer": 2,
    "explanation": "年1回複利なので元利合計は100万円×1.03×1.03＝106万900円です。106万円は単利計算（100万円＋3万円×2年）、103万円は1年分の利息のみ、109万円は複利の3年間分に近い額で、本問の2年とは条件が異なります。",
    "revision": 2,
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "id": "fp2-009",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "Aさんの保有資産は預金1,000万円、株式800万円、投資信託500万円、自宅の時価4,200万円である。住宅ローン残高3,100万円とカードローン残高200万円がある場合、純資産額はいくらか。",
    "choices": [
      "3,000万円",
      "3,200万円",
      "3,400万円",
      "3,600万円"
    ],
    "answer": 1,
    "explanation": "資産合計＝1,000＋800＋500＋4,200＝6,500万円。負債合計＝3,100＋200＝3,300万円。純資産額＝6,500－3,300＝3,200万円。3,400万円はカードローンを差し引き忘れた場合です。 選択肢ごとの違いは下の「各選択肢の解説」で確認できます。",
    "revision": 5,
    "contentReview": "calculation_and_distractor_review_v21",
    "choiceExplanations": [
      "3,000万円：正しい純資産3,200万円より200万円小さく、負債を重複控除したような結果です。",
      "3,200万円：資産6,500万円から住宅ローン3,100万円とカードローン200万円を控除します。",
      "3,400万円：カードローン200万円の控除漏れです。",
      "3,600万円：負債の一部を控除せず、純資産を400万円過大計上しています。"
    ]
  },
  {
    "id": "fp2-010",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "現在の一時金を複利運用したときの将来価値を求める係数として、最も適切なものはどれか。",
    "choices": [
      "年金現価係数",
      "減債基金係数",
      "終価係数",
      "現価係数"
    ],
    "answer": 2,
    "explanation": "終価係数は現在価値に掛けて将来の一時金額を求める係数です。現価係数は逆に将来価値から現在価値を求める係数です。",
    "choiceExplanations": [
      "年金現価係数は、毎期受け取る年金額から必要な現在資金を求めます。",
      "減債基金係数は将来の目標額から毎期の必要積立額を求めます。",
      "正解。いまある一時金を複利運用した将来価値＝現在価値×終価係数です。",
      "現価係数は将来の一時金額を現在価値に割り引くとき使います。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp2-011",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "保険の種類と基本的な補償に関する次の記述のうち、最も適切なものはどれか。",
    "choices": [
      "定期保険は、保障期間内に死亡した場合だけでなく満期まで生存した場合にも原則として満期保険金を支払う",
      "個人賠償責任保険は、被保険者が業務中に第三者へ与えた損害賠償責任を主な補償対象とする",
      "対物賠償責任保険は他人の財物を損壊した場合の法律上の賠償責任に備える",
      "一般的な車両保険では、地震を直接の原因とする津波による車両損害も通常の補償対象となる"
    ],
    "answer": 2,
    "explanation": "対物賠償責任保険は他人の財物の損害について被保険者が負う法律上の賠償責任に備えます。商品・事故態様による免責には注意します。",
    "revision": 3,
    "choiceExplanations": [
      "定期保険には通常、満期保険金はありません。",
      "日常生活の個人賠償責任保険は、業務中の事故を主な対象にするものではありません。",
      "正解。他人の財物損壊による法律上の賠償責任を対物賠償責任保険で備えます。",
      "地震・噴火・津波を原因とする車両損害は一般の車両保険では原則対象外で、特約等の確認が必要です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-012",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "火災保険の対象となる事故で建物に180万円の損害が生じた。契約は損害額から免責20万円を差し引いた金額を支払う方式で、支払限度額は150万円とする。今回の支払保険金はいくらか。",
    "choices": [
      "140万円",
      "150万円",
      "160万円",
      "180万円"
    ],
    "answer": 1,
    "explanation": "免責控除後は180－20＝160万円ですが、支払限度額150万円が適用されるため150万円です。160万円は限度額を無視、180万円は免責と限度額の双方を無視した金額です。 選択肢ごとの違いは下の「各選択肢の解説」で確認できます。",
    "revision": 5,
    "contentReview": "calculation_and_distractor_review_v21",
    "choiceExplanations": [
      "140万円：免責や限度額を誤って二重に差し引いたような結果です。",
      "150万円：180－20＝160万円ですが、支払限度額150万円が優先されます。",
      "160万円：免責金額だけを差し引き、支払限度額を適用していません。",
      "180万円：免責金額も支払限度額も無視した額です。"
    ]
  },
  {
    "id": "fp2-013",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "自動車保険の基本的な補償について、最も適切な記述はどれか。",
    "choices": [
      "対物賠償責任保険は他人の車や建物などへの法律上の賠償責任に備える",
      "人身傷害保険は、相手方の車両の修理費に対する法律上の賠償責任を補償する",
      "対人賠償責任保険は、運転者本人が負傷した場合の治療費を、過失割合にかかわらず補償する",
      "車両保険は、契約車両で他人の車を損壊した場合の法律上の賠償責任を補償する"
    ],
    "answer": 0,
    "explanation": "対物賠償責任保険は、事故で他人の車や建物などを壊し、法律上の賠償責任を負った場合の補償です。",
    "revision": 3,
    "choiceExplanations": [
      "正解。他人の車や建物に生じた損害の賠償責任は対物賠償です。",
      "人身傷害保険は被保険者等の人身損害を対象とするもので、相手車の修理費ではありません。",
      "対人賠償は他人の身体に対する法的賠償です。運転者本人のケガとは別です。",
      "車両保険は契約車両自体の損害に備えます。相手車の賠償は対物賠償です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-014",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "養老保険と定期保険の一般的な特徴に関する記述として、最も適切なものはどれか。",
    "choices": [
      "養老保険は満期保険金があるが、保険期間中の死亡時には解約返戻金だけが支払われる",
      "定期保険には、死亡保険金と同額の満期保険金が一般に設けられている",
      "養老保険は保険期間満了時に被保険者が生存していれば満期保険金が支払われる",
      "定期保険は、保険料の払込期間とは無関係に死亡保障が一生涯継続する"
    ],
    "answer": 2,
    "explanation": "養老保険は死亡保険金と満期保険金を備えます。定期保険は一定期間の死亡保障を目的とし、通常は満期保険金がありません。",
    "revision": 3,
    "choiceExplanations": [
      "養老保険は期間中の死亡保険金も備えており、死亡時に解約返戻金だけを支払うものではありません。",
      "定期保険には通常満期保険金がありません。養老保険との取り違えです。",
      "正解。養老保険は満期生存時の満期保険金を備えます。",
      "定期保険は一定期間の保障であり、終身保障ではありません。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-015",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "X社の株価2,400円、1株当たり当期純利益（EPS）200円、1株当たり純資産（BPS）1,200円、1株当たり年間配当金60円とする。PERとして最も適切なものはどれか。",
    "choices": [
      "2倍",
      "12倍",
      "2.5％",
      "30％"
    ],
    "answer": 1,
    "explanation": "PER＝株価2,400÷EPS200＝12倍。2倍は株価÷BPS＝PBR、2.5％は年間配当60÷株価2,400＝配当利回り、30％は年間配当60÷EPS200＝配当性向です。いずれも与件から計算できますが、PERではありません。",
    "revision": 4,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "id": "fp2-016",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "X社の株価2,400円、発行済株式数500万株、自己資本75億円、当期純利益10億円である。自己株式はないものとする。X社のPBRとして最も適切なものはどれか。",
    "choices": [
      "1.6倍",
      "12倍",
      "約13.3％",
      "約0.625倍"
    ],
    "answer": 0,
    "explanation": "BPS＝自己資本75億円÷500万株＝1,500円。PBR＝株価2,400円÷BPS1,500円＝1.6倍。12倍は株価2,400円÷EPS200円で求めたPER、約13.3％は当期純利益10億円÷自己資本75億円で求めるROE、約0.625倍はBPS1,500円÷株価2,400円と分子・分母を逆にした数値です。",
    "revision": 6,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "choiceExplanations": [
      "1.4倍：BPSを大きく見積もるとPBRは低く計算されます。",
      "1.5倍：自己資本75億円と発行済500万株の単位換算を確認してください。",
      "1.6倍：BPS＝1,500円、PBR＝2,400÷1,500＝1.6倍です。",
      "1.8倍：発行済株式数と自己資本の換算を誤ると過大になります。"
    ],
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "id": "fp2-017",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "株価2,500円、1株当たり当期純利益（EPS）200円、1株当たり年間配当金75円のX社について、配当利回りと配当性向の組合せとして最も適切なものはどれか。",
    "choices": [
      "配当利回り3.0％・配当性向37.5％",
      "配当利回り3.0％・配当性向30.0％",
      "配当利回り4.0％・配当性向37.5％",
      "配当利回り37.5％・配当性向3.0％"
    ],
    "answer": 0,
    "explanation": "配当利回り＝75÷2,500×100＝3.0％。配当性向＝75÷200×100＝37.5％。配当利回りの分母は株価、配当性向の分母はEPSです。 選択肢ごとの違いは下の「各選択肢の解説」で確認できます。",
    "revision": 5,
    "contentReview": "calculation_and_distractor_review_v21",
    "choiceExplanations": [
      "正解。配当利回りの分母は株価、配当性向の分母はEPSです。",
      "配当性向30.0％が誤りです。75÷200×100＝37.5％です。",
      "配当利回り4.0％が誤りです。75÷2,500×100＝3.0％です。",
      "配当利回りと配当性向の数値を逆にした組合せです。"
    ]
  },
  {
    "id": "fp2-018",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "二つの資産のリターンの相関係数について、最も適切な記述はどれか。",
    "choices": [
      "相関係数が＋1なら、二つの資産の収益率は常に同じ数値になる",
      "相関係数は－1から＋1までの範囲に収まらず、分散の大きい資産では＋1を超える",
      "相関係数－1は完全な負の線形相関を意味する",
      "相関係数が0なら、二つの資産の間には非線形の関係も一切存在しない"
    ],
    "answer": 2,
    "explanation": "相関係数は－1から＋1の範囲です。－1は完全な負の線形相関、＋1は完全な正の線形相関を示します。",
    "revision": 2,
    "choiceExplanations": [
      "相関係数＋1は完全な正の線形関係を表しますが、平均収益率や変動幅が同じとは限りません。",
      "相関係数は定義上－1から＋1までであり、資産の分散が大きいことを理由に範囲を超えません。",
      "正解。相関係数－1は、二つの収益率の間に完全な負の線形相関があることを意味します。",
      "相関係数0は線形相関がないことを示すだけで、非線形の関係が存在しないとは断定できません。"
    ]
  },
  {
    "id": "fp2-019",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の所得税で、合計所得金額が700万円の居住者が他の適用要件を満たす場合、基礎控除額として正しいのはどれか。",
    "choices": [
      "48万円",
      "58万円",
      "63万円",
      "68万円"
    ],
    "answer": 1,
    "explanation": "2025年分で合計所得金額655万円超2,350万円以下の場合は58万円です。63万円は489万円超655万円以下、68万円は336万円超489万円以下、48万円は2,350万円超2,400万円以下の区分です。",
    "sourceUrl": "https://www.nta.go.jp/users/gensen/2025kiso/",
    "revision": 3,
    "contentReview": "v25_primary_source_or_formula_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "source_checked_selected_points",
    "lawReferenceDate": "2025-01-01"
  },
  {
    "id": "fp2-020",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "Aさんの総所得金額は720万円、所得控除合計は260万円、税額控除額は15万円である。他の調整を考慮しない場合、所得税の「課税所得金額」はいくらか。",
    "choices": [
      "445万円",
      "460万円",
      "475万円",
      "720万円"
    ],
    "answer": 1,
    "explanation": "課税所得金額は総所得金額720万円－所得控除260万円＝460万円。445万円は税額控除15万円を課税所得から差し引いた場合。720万円は所得控除を行わない場合です。税額控除は原則として所得税額から差し引くため、所得を計算する段階では使いません。",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1100.htm",
    "revision": 5,
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "id": "fp2-021",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "所得税の課税対象期間に関する次の記述のうち、最も適切なものはどれか。",
    "choices": [
      "年の途中で独立開業した場合、その年の所得税の計算期間は開業日から翌年の同日の前日までになる",
      "個人の所得税は、原則として前年12月1日から当年11月30日までの所得を対象とする",
      "個人の所得税は原則として1月1日から12月31日までの所得を対象とする",
      "個人の所得税は、原則として当年4月1日から翌年3月31日までの所得を対象とする"
    ],
    "answer": 2,
    "explanation": "個人の所得税は暦年（1月1日から12月31日）を単位として計算します。",
    "revision": 3,
    "choiceExplanations": [
      "個人の所得税の年分は原則暦年です。開業日から翌年の同日の前日までではありません。",
      "前年12月から当年11月までの12カ月ではありません。",
      "正解。個人の所得税は1月1日から12月31日までを単位として計算します。",
      "4月から翌3月は会計年度の例で、個人所得税の課税対象期間ではありません。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-022",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の所得税について、合計所得金額が400万円で他の適用要件を満たす居住者の基礎控除額はどれか。",
    "choices": [
      "58万円",
      "63万円",
      "68万円",
      "88万円"
    ],
    "answer": 2,
    "explanation": "合計所得金額400万円は336万円超489万円以下の区分のため、基礎控除額は68万円です。88万円は132万円超336万円以下、63万円は489万円超655万円以下、58万円は655万円超2,350万円以下等の区分に対応します。",
    "sourceUrl": "https://www.nta.go.jp/users/gensen/2025kiso/",
    "revision": 3,
    "contentReview": "v25_primary_source_or_formula_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "source_checked_selected_points",
    "lawReferenceDate": "2025-01-01"
  },
  {
    "id": "fp2-023",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "敷地面積250㎡、建ぺい率の上限60％、容積率の上限200％の土地がある。角地緩和など他の制限を考慮しない場合、建築面積の上限として最も適切なものはどれか。",
    "choices": [
      "150㎡",
      "500㎡",
      "100㎡",
      "250㎡"
    ],
    "answer": 0,
    "explanation": "建築面積上限＝敷地250㎡×建ぺい率60％＝150㎡。500㎡は容積率200％で計算する延べ面積上限、100㎡は建ぺい率の60％を差し引いた残りの40％部分、250㎡は敷地全体を建築面積としてしまった値です。",
    "revision": 3,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "id": "fp2-024",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "敷地面積200㎡、建築面積80㎡、容積率算定上の延べ面積300㎡の建物がある。容積率として最も適切なものはどれか。",
    "choices": [
      "40％",
      "約26.7％",
      "150％",
      "250％"
    ],
    "answer": 2,
    "explanation": "容積率＝延べ面積300㎡÷敷地面積200㎡×100＝150％。40％は建築面積80㎡÷敷地面積200㎡の建ぺい率、約26.7％は建築面積80㎡÷延べ面積300㎡、250％は延べ面積300㎡と敷地面積200㎡を加算した500㎡を敷地面積で割った値です。",
    "revision": 3,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "id": "fp2-025",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "不動産の登記記録に関する記述のうち、最も適切なものはどれか。",
    "choices": [
      "登記記録の表題部には、原則として抵当権の設定状況のみが記載される",
      "権利部の甲区には、原則として所有権に関する登記事項が記録される",
      "権利部の乙区には、原則として土地の地目や地積が記録される",
      "抵当権の設定登記は、原則として権利部の甲区に記録される"
    ],
    "answer": 1,
    "explanation": "甲区は所有権に関する事項、乙区は抵当権など所有権以外の権利に関する事項を記録します。地目や地積などは表題部に記録されます。",
    "sourceUrl": "https://www.moj.go.jp/MINJI/minji02.html",
    "sourceLabel": "法務省：不動産登記のABC",
    "lawReferenceDate": "2026-04-01",
    "revision": 3,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "choiceExplanations": [
      "表題部には土地の所在・地目・地積等が記録されます。抵当権の記録場所ではありません。",
      "正解。権利部の甲区は所有権の保存・移転等に関する記録です。",
      "乙区は抵当権など所有権以外の権利を扱い、地目・地積は表題部です。",
      "抵当権は所有権以外の権利なので通常乙区に記録されます。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-026",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "不動産に関連する税金について、最も適切な記述はどれか。",
    "choices": [
      "登録免許税は、不動産取得税と同じく都道府県税である",
      "不動産取得税は原則として都道府県税である",
      "不動産取得税は、原則として市町村が課税する地方税である",
      "固定資産税は、原則として都道府県が課税する地方税である"
    ],
    "answer": 1,
    "explanation": "不動産取得税は都道府県税で、固定資産税は原則として市町村税（東京23区は都税）です。",
    "revision": 3,
    "choiceExplanations": [
      "登録免許税は国税です。不動産取得税と同じ都道府県税ではありません。",
      "正解。不動産取得税は都道府県税です。",
      "不動産取得税の課税主体は原則都道府県で、市町村ではありません。",
      "固定資産税は原則市町村税です（東京都23区などの例外あり）。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-027",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "被相続人の遺産は9,600万円で、法定相続人は配偶者と子2人のみである。遺言・相続放棄等がなく、法定相続分で取得するとき、配偶者の取得額はいくらか。",
    "choices": [
      "4,800万円",
      "3,200万円",
      "2,400万円",
      "7,200万円"
    ],
    "answer": 0,
    "explanation": "法定相続分の割合を決めてから、遺産額に乗じます。子・父母・兄弟姉妹が複数人なら、その集団の相続分をさらに同順位の人数で分けます。",
    "choiceExplanations": [
      "正解。配偶者は1/2なので9,600×1/2＝4,800万円。",
      "1/3を使った額。配偶者と子が相続人なら配偶者は1/2であり、相続人3人で単純均等割りしません。",
      "子1人の法定相続額。子全体は1/2、子2人で均分するため1人1/4です。",
      "配偶者と兄弟姉妹の場合の配偶者3/4を当てはめた額。今回は子がいるので異なります。"
    ],
    "contentReview": "v46_first_touch_case_and_choices",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp2-028",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "被相続人の遺産は9,000万円で、法定相続人は配偶者と被相続人の父母のみである。法定相続分に従う場合、配偶者の取得額はいくらか。",
    "choices": [
      "3,000万円",
      "6,750万円",
      "6,000万円",
      "4,500万円"
    ],
    "answer": 2,
    "explanation": "法定相続分の割合を決めてから、遺産額に乗じます。子・父母・兄弟姉妹が複数人なら、その集団の相続分をさらに同順位の人数で分けます。",
    "choiceExplanations": [
      "父母全体の取り分1/3を配偶者に当てはめた額。",
      "配偶者と兄弟姉妹の組合せの3/4を使った額。今回は父母です。",
      "正解。配偶者2/3×9,000＝6,000万円。",
      "配偶者と子の場合の1/2を誤用した額。"
    ],
    "contentReview": "v46_first_touch_case_and_choices",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp2-029",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "遺留分に関する次の記述のうち、最も適切なものはどれか。",
    "choices": [
      "遺留分は、法定相続分の割合にかかわらず相続人全員へ均等に割り当てられる",
      "被相続人の兄弟姉妹には遺留分があるが、兄弟姉妹を代襲する甥・姪には遺留分がない",
      "兄弟姉妹には遺留分が認められない",
      "遺留分を侵害された者は、原則として遺留分侵害額に相当する不動産の持分移転だけを請求できる"
    ],
    "answer": 2,
    "explanation": "兄弟姉妹は法定相続人になる場合もありますが、遺留分はありません。遺留分侵害額請求は原則として金銭請求です。",
    "revision": 3,
    "choiceExplanations": [
      "遺留分は相続人全員へ均等配分するものではなく、法定相続分等に応じて計算します。",
      "兄弟姉妹にはそもそも遺留分が認められません。",
      "正解。兄弟姉妹（代襲した甥・姪を含む）には遺留分がありません。",
      "遺留分侵害額請求は原則として金銭の支払を求める制度で、不動産持分移転だけを請求するものではありません。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-030",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "遺産8,400万円を、配偶者と子2人が法定相続分に従って相続する。遺言や特例の事情がない場合、子1人の取得額はいくらか。",
    "choices": [
      "2,100万円",
      "4,200万円",
      "2,800万円",
      "1,050万円"
    ],
    "answer": 0,
    "explanation": "法定相続分の割合を決めてから、遺産額に乗じます。子・父母・兄弟姉妹が複数人なら、その集団の相続分をさらに同順位の人数で分けます。",
    "choiceExplanations": [
      "正解。子全体1/2を2人で分けるので8,400×1/2÷2＝2,100万円。",
      "子2人全体の法定相続額1/2を、1人分と取り違えた額。",
      "法定相続人3人で遺産を単純均等割りした額。配偶者と子の法定相続分は異なります。",
      "子1人の1/4をさらに2人で割ってしまった額。"
    ],
    "contentReview": "v46_first_touch_case_and_choices",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp3-031",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "Aさんは5年後の住宅購入と8年後の子の進学を予定している。ライフイベント表には、予定年だけでなく必要資金の見積額も記入すると、資金準備を考える際に役立つ。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。時期と費用を同じ表で把握すると、キャッシュフロー表へ反映する資金需要が分かります。ライフイベント表そのものは収支・残高の年次計算表ではありません。",
    "topic": "ライフイベント表"
  },
  {
    "id": "fp3-032",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "Aさんの年間給与収入600万円、所得税・住民税の合計90万円、社会保険料80万円の場合、家計の可処分所得を430万円とする計算は妥当である（他の控除はない）。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。可処分所得＝給与収入600－所得税・住民税90－社会保険料80＝430万円です。住宅ローン返済や食費などの生活支出は、可処分所得から支払う項目です。",
    "topic": "可処分所得"
  },
  {
    "id": "fp3-033",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "100万円を年利5％で2年間複利運用し、利息を毎年元本に組み入れると、税金・手数料を無視した2年後の元利合計は110万円である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。複利では100万円×1.05×1.05＝110万2,500円です。110万円は元本100万円に対し毎年5万円ずつ利息を付ける単利計算です。",
    "topic": "複利"
  },
  {
    "id": "fp3-034",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "毎年同額を積み立て、一定の利率で複利運用した場合の将来の積立総額を求めるときに使う係数はどれか。",
    "choices": [
      "資本回収係数",
      "年金終価係数",
      "現価係数"
    ],
    "answer": 1,
    "explanation": "年金終価係数は毎期同額を積み立てたときの一定期間後の元利合計を求める係数です。",
    "topic": "6つの係数",
    "choiceExplanations": [
      "資本回収係数は現在のまとまった資金から毎期受け取れる一定額を求めるもので、積立後の元利合計を求める係数ではありません。",
      "正解。年金終価係数は、毎期同額を積み立てて運用した将来の元利合計額を求める係数です。",
      "現価係数は将来の一時金を現在価値に割り引く係数であり、毎年の積立の累積計算には使いません。"
    ]
  },
  {
    "id": "fp3-035",
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "手取り前の年間収入500万円、税金・社会保険料合計110万円、その他の年間支出330万円とする。年間収支の黒字額はいくらか。",
    "choices": [
      "170万円",
      "60万円",
      "390万円"
    ],
    "answer": 1,
    "explanation": "手取り額＝500－110＝390万円、黒字額＝390－330＝60万円。170万円は税金・社会保険料を控除しない場合、390万円は手取り額そのものを黒字額と誤認した場合です。",
    "topic": "キャッシュフロー計算",
    "revision": 3,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-036",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "個人賠償責任保険に加入していれば、勤務先での業務中に起こした賠償事故についても、業務内容や契約の免責規定にかかわらず必ず補償される。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。個人賠償責任保険は通常、日常生活上の賠償責任を中心に補償します。職務遂行に起因する賠償責任などは一般に対象外で、業務用の賠償責任保険等を検討します。",
    "topic": "個人賠償責任"
  },
  {
    "id": "fp3-037",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "損害額50万円、免責金額5万円を差し引く方式の火災保険について、他の支払条件が満たされる場合、支払保険金は45万円となる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。差引方式の免責金額であれば50－5＝45万円です。免責金額は契約条件によって自己負担となる部分であり、支払限度額等の条件があれば別途考慮します。",
    "topic": "免責金額"
  },
  {
    "id": "fp3-038",
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "入院給付金日額1万円で「入院3日目から支払対象」と定める契約について、所定の対象となる入院を5日間した場合、支払対象日数は3日であり、給付金額は3万円となる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。入院1日目・2日目は支払対象外、3〜5日目の3日間が対象です。1万円×3日＝3万円。給付開始日や日数制限は契約ごとに異なるため、設問の条件を確認します。",
    "topic": "医療保険"
  },
  {
    "id": "fp3-039",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "損害額70万円に対して免責金額5万円が設定され、他の減額条件がない保険の支払保険金はいくらか。",
    "choices": [
      "65万円",
      "75万円",
      "70万円"
    ],
    "answer": 0,
    "explanation": "免責金額を損害額から控除し、70－5＝65万円。70万円は免責金額を差し引かない場合、75万円は免責金額を逆に加算した場合です。",
    "topic": "免責の計算"
  },
  {
    "id": "fp3-040",
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "Aさんは子が独立するまでの10年間に限り、死亡時の遺族保障1,000万円を準備したい。満期保険金や終身保障は必要ない。一般に目的に最も合う生命保険はどれか。",
    "choices": [
      "養老保険",
      "終身保険",
      "定期保険"
    ],
    "answer": 2,
    "explanation": "一定期間に限定して死亡保障を確保し、満期保険金を必要としない場合は定期保険が一般的な選択肢です。養老保険は生存満期時の給付を、終身保険は一生涯の死亡保障を備えます。保険料や保障条件は個別契約で確認します。",
    "topic": "生命保険の種類",
    "choiceExplanations": [
      "養老保険は期間中の死亡保障に加えて満期生存時の満期保険金があるため、満期給付不要という条件とは異なります。",
      "終身保険は原則として一生涯の死亡保障です。今回求めている保障は10年間に限られています。",
      "正解。一定期間の死亡保障を目的とし、通常満期保険金がない定期保険が条件に合います。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp3-041",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "1株1,200円で100株購入した株式が1株900円まで値下がりした場合、売買手数料などを考慮しなければ、保有株式の評価額は3万円減少している。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。購入時の評価額は1,200円×100株＝12万円、値下がり後は900円×100株＝9万円。差額3万円の評価損です。売却しなくても市場価格によって評価額は変化します。",
    "topic": "株式リスク"
  },
  {
    "id": "fp3-042",
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "米ドル資産3,000ドルを保有するAさんについて、1ドル＝140円から120円に円高が進んだとき、手数料を無視した円換算額は42万円から36万円に減少する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。3,000×140＝42万円、3,000×120＝36万円です。円高は同じ外貨額を円換算した金額を押し下げます。",
    "topic": "為替リスク"
  },
  {
    "id": "fp3-043",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "株価2,000円、BPS1,000円、EPS250円の場合、PBRは何倍か。",
    "choices": [
      "8倍",
      "2倍",
      "0.5倍"
    ],
    "answer": 1,
    "explanation": "PBR＝株価2,000円÷BPS1,000円＝2倍。8倍は株価2,000円÷EPS250円で求めるPER、0.5倍はBPS1,000円÷株価2,000円と分子・分母を逆にした値です。",
    "topic": "PBR",
    "revision": 3,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-044",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "X社の株価は1,500円、1株当たり年間配当金は60円、1株当たり純利益（EPS）は240円である。配当利回りは何％か。",
    "choices": [
      "4％",
      "25％",
      "0.04％"
    ],
    "answer": 0,
    "explanation": "配当利回り＝60÷1,500×100＝4％。25％は年間配当60円÷EPS240円×100で求める配当性向であり、別指標です。0.04％は60÷1,500＝0.04を百分率に直さず％を付けた場合です。",
    "topic": "配当利回り",
    "contentReview": "v42_individual_question_choice_answer_explanation_check",
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "revision": 1
  },
  {
    "id": "fp3-045",
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "1米ドル＝150円、保有外貨が100米ドル、別途円預金が1万5,000円ある。外貨100米ドルだけの円換算額はいくらか（為替手数料なし）。",
    "choices": [
      "150円",
      "3万円",
      "1万5,000円"
    ],
    "answer": 2,
    "explanation": "100米ドル×150円／米ドル＝15,000円。150円は1米ドル分だけを計算した値。3万円は100米ドルの円換算額15,000円に、別途保有する円預金15,000円まで加えた値です。外貨額だけを求める点に注意します。",
    "topic": "為替換算",
    "revision": 3,
    "contentReview": "v42_individual_question_choice_answer_explanation_check",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-046",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "所得税の医療費控除で所得控除額が20万円になった場合、所得税額そのものが必ず20万円減る。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。医療費控除は所得控除です。課税所得から20万円を控除した後、適用税率等によって税額への影響が決まります。20万円を直接税額から差し引く税額控除ではありません。",
    "topic": "所得控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/shinkoku/tokushu/keisubetsu/iryou-koujo.htm",
    "sourceLabel": "国税庁：令和7年分の医療費控除",
    "sourceCheckedDate": "2026-10-13",
    "contentReview": "v58_limited_primary_source_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "id": "fp3-047",
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "Aさんが住宅を賃貸し、年間家賃収入120万円と必要経費30万円があるとき、ほかの条件を無視した不動産所得は90万円である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。家賃収入120万円－必要経費30万円＝不動産所得90万円です。賃貸収入額そのものが課税対象所得額とは限りません。",
    "topic": "不動産所得"
  },
  {
    "id": "fp3-048",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "給与所得者に交付され、年間の給与等の支払金額や源泉徴収税額などを確認できる書類はどれか。",
    "choices": [
      "固定資産評価証明書",
      "不動産登記事項証明書",
      "給与所得の源泉徴収票"
    ],
    "answer": 2,
    "explanation": "給与の支払者は、給与等の支払金額や源泉徴収税額等を記載した源泉徴収票を受給者に交付します。",
    "topic": "所得区分",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hotei/7411.htm",
    "sourceLabel": "国税庁：給与所得の源泉徴収票",
    "lawReferenceDate": "2026-04-01",
    "revision": 3,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "choiceExplanations": [
      "固定資産評価証明書は土地・家屋の固定資産税評価などを証明するもので、給与の源泉徴収額は示しません。",
      "登記事項証明書は不動産の所在や権利関係等の記録です。",
      "正解。源泉徴収票には年間の給与支払金額や源泉徴収税額などが記載されます。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp3-049",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "算出した所得税額から直接差し引く制度を一般に何というか。",
    "choices": [
      "所得控除",
      "税額控除",
      "必要経費"
    ],
    "answer": 1,
    "explanation": "税額控除は所得税額から直接差し引くものです。所得控除は課税所得計算時に控除します。",
    "topic": "税額控除",
    "choiceExplanations": [
      "所得控除は、税率を掛ける前の所得金額から控除する仕組みです。算出後の税額から直接差し引くものではありません。",
      "正解。税額控除は、原則として算出した所得税額から直接差し引く仕組みです。",
      "必要経費は事業所得などの収入から所得を計算するときに差し引く費用であり、税額控除ではありません。"
    ]
  },
  {
    "id": "fp3-050",
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "ある人の所得金額が400万円、所得控除の合計が130万円で、その他の調整がない場合、課税所得金額はいくらか。",
    "choices": [
      "270万円",
      "530万円",
      "130万円"
    ],
    "answer": 0,
    "explanation": "課税所得＝所得金額400－所得控除130＝270万円。530万円は所得控除を差し引かず加えてしまった値、130万円は所得控除額そのものです。",
    "topic": "課税所得計算",
    "revision": 3,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-051",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "敷地面積200㎡、建築面積80㎡、延べ面積160㎡の建物について、建ぺい率は80％である（面積算定上の特例なし）。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。建ぺい率＝建築面積80㎡÷敷地面積200㎡×100＝40％です。80％は延べ面積160㎡÷敷地面積200㎡から求めた容積率であり、指標を取り違えています。",
    "topic": "建ぺい率"
  },
  {
    "id": "fp3-052",
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "土地や家屋を相続によって取得した場合、売買で取得した場合と同様に、通常は不動産取得税が課される。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。不動産取得税は都道府県税ですが、相続による取得は原則として課税対象外です。贈与による取得や売買による取得とは異なるので、取得原因に注意します。",
    "topic": "土地と建物",
    "sourceUrl": "https://www.tax.metro.tokyo.lg.jp/scene/real_estate",
    "sourceLabel": "東京都主税局：不動産にかかる税金",
    "lawReferenceDate": "2026-04-01",
    "revision": 2,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12"
  },
  {
    "id": "fp3-053",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "敷地面積300㎡、建築面積120㎡、容積率算定上の延べ面積750㎡の建物がある。建ぺい率はどれか。",
    "choices": [
      "40％",
      "250％",
      "60％"
    ],
    "answer": 0,
    "explanation": "建ぺい率＝建築面積120㎡÷敷地300㎡＝40％。250％は延べ面積750㎡÷敷地300㎡で計算した容積率、60％は敷地のうち建築面積以外の部分（300－120）÷300㎡です。",
    "topic": "建ぺい率計算",
    "revision": 3,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-054",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "敷地面積250㎡、容積率算定上の延べ面積500㎡、建築面積125㎡の場合、容積率はどれか。",
    "choices": [
      "50％",
      "200％",
      "100％"
    ],
    "answer": 1,
    "explanation": "容積率＝延べ面積500㎡÷敷地250㎡＝200％。50％は建築面積125㎡÷敷地250㎡による建ぺい率、100％は延べ面積と敷地面積との差250㎡を敷地面積250㎡で割った値であり、容積率ではありません。",
    "topic": "容積率計算",
    "revision": 3,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp3-055",
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "不動産の登記記録において、土地の所有者が変わったことを記録するのは、原則としてどの部分か。",
    "choices": [
      "権利部（甲区）",
      "権利部（乙区）",
      "表題部"
    ],
    "answer": 0,
    "explanation": "所有権の移転などは権利部（甲区）に登記します。乙区は抵当権・地上権など所有権以外の権利、表題部は地目・地積など不動産の物理的な状況を記録します。",
    "topic": "不動産登記",
    "contentReview": "v51_official_source_based_limited_rule_review",
    "verificationStatus": "v51_rule_limited_answer_and_choice_review_not_full_certification",
    "revision": 1
  },
  {
    "id": "fp3-056",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "Aさんが遺言で全財産を友人へ遺贈すると記載した場合でも、Aさんの配偶者が存命であれば、要件に応じて遺留分侵害額請求の対象となることがある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。遺言で遺産の行き先を指定できても、配偶者など遺留分を持つ相続人がいる場合は、所定の要件で遺留分侵害額を請求されることがあります。",
    "topic": "遺言と遺留分"
  },
  {
    "id": "fp3-057",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "自筆証書遺言の本文は原則自書が必要だが、添付する財産目録をパソコンで作成し、所定の署名・押印等の要件を満たすことは認められる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。自筆証書遺言の本文は原則として自書が必要です。一方、財産目録は自書以外でも作成可能で、各ページへの署名・押印等の法定要件があります。",
    "topic": "遺留分",
    "sourceUrl": "https://www.moj.go.jp/MINJI/minji07_00240.html",
    "sourceLabel": "法務省：自筆証書遺言の方式",
    "lawReferenceDate": "2026-04-01",
    "revision": 2,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12"
  },
  {
    "id": "fp3-058",
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "被相続人の相続人が配偶者と子2人で、法定相続分どおり遺産1億円を分ける場合、子1人当たりの取得額は2,500万円である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。配偶者の法定相続分は1/2＝5,000万円、子全体で1/2＝5,000万円。子2人で等分すると各1/4＝2,500万円です。",
    "topic": "法定相続分"
  },
  {
    "id": "fp3-059",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "相続人が配偶者と被相続人の兄弟姉妹のみの場合、配偶者の法定相続分はどれか。",
    "choices": [
      "2分の1",
      "4分の3",
      "3分の2"
    ],
    "answer": 1,
    "explanation": "配偶者と兄弟姉妹が共同相続人となる場合、配偶者は4分の3、兄弟姉妹全体で4分の1です。",
    "topic": "法定相続分",
    "choiceExplanations": [
      "2分の1は配偶者と子の場合の配偶者の法定相続分です。",
      "正解。配偶者と兄弟姉妹が相続人なら配偶者3/4です。",
      "3分の2は配偶者と父母の場合の配偶者の法定相続分です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp3-060",
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "財産の所有者が亡くなり、その人の財産や権利義務を相続人が承継することを一般に何というか。",
    "choices": [
      "贈与",
      "売買",
      "相続"
    ],
    "answer": 2,
    "explanation": "相続は人の死亡により財産・権利義務を原則として包括的に承継することです。贈与は当事者の意思表示に基づく無償の財産移転、売買は代金の支払いを伴う取引であり、死亡を原因とした承継とは異なります。",
    "topic": "相続の基本",
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "revision": 1
  },
  {
    "id": "fp2-031",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "家計の貸借対照表を作る。預貯金1,500万円、投資信託700万円、自宅4,800万円、自動車200万円、住宅ローン残高3,600万円、教育ローン残高300万円の場合、純資産はいくらか。",
    "choices": [
      "3,000万円",
      "3,100万円",
      "3,300万円",
      "3,600万円"
    ],
    "answer": 2,
    "explanation": "預貯金1,500＋投資信託700＋自宅4,800＋自動車200＝資産7,200万円。住宅ローン3,600＋教育ローン300＝負債3,900万円。純資産は3,300万円。3,600万円は教育ローン300万円を控除しない場合、3,000万円は教育ローンを二重に控除した場合です。",
    "topic": "家計のバランスシート",
    "revision": 6,
    "contentReview": "v23_arithmetic_explanation_audit",
    "choiceExplanations": [
      "教育ローン300万円を負債として二度控除した場合、3,300－300＝3,000万円になります。",
      "自動車200万円を資産に計上しなければ、3,300－200＝3,100万円となります。",
      "正解。資産1,500＋700＋4,800＋200＝7,200万円、負債3,600＋300＝3,900万円。差額3,300万円です。",
      "教育ローン300万円を負債に入れない場合、7,200－3,600＝3,600万円になります。"
    ]
  },
  {
    "id": "fp2-032",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "毎年末に一定額を5年間積み立て、年利2％で運用したときの将来の元利合計を求めるため、毎年の積立額に乗じる係数として最も適切なものはどれか。",
    "choices": [
      "年金終価係数",
      "資本回収係数",
      "年金現価係数",
      "減債基金係数"
    ],
    "answer": 0,
    "explanation": "年金終価係数は、毎期一定額を積み立てた場合の将来の元利合計を求める係数です。",
    "topic": "年金終価係数",
    "choiceExplanations": [
      "正解。毎年末の一定額積立てから将来の元利合計を求めるのは年金終価係数です。",
      "資本回収係数は現在資金を一定期間の毎期受取額等に換算するとき使います。",
      "年金現価係数は将来の一定額の年金受取を現在価値へ割り引くための係数です。",
      "減債基金係数は目標とする将来額を達成する毎年の積立額を求めるための係数です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp2-033",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "借入金1,000万円について、元本均等返済方式と元利均等返済方式を同一利率・返済期間で比較した場合の説明として、一般に最も適切なものはどれか。",
    "choices": [
      "同じ借入額・金利・返済期間なら、総返済額は一般に元利均等返済の方が元本均等返済より少ない",
      "元本均等返済の毎回の元本返済額は一定である",
      "元本均等返済方式では、返済回数を重ねるほど各回の支払利息額が増加する",
      "元利均等返済方式は、毎回の元利返済額が返済当初は多く、返済が進むと減少する"
    ],
    "answer": 1,
    "explanation": "元本均等返済は毎回の元本返済額が一定で、通常は元本残高の減少とともに利息が減ります。元利均等返済は毎回の元利合計額が原則一定であり、一般に総返済額は元本均等より大きくなります（同条件・正の利率）。",
    "topic": "住宅ローン",
    "revision": 3,
    "choiceExplanations": [
      "同条件の一般的な比較では、初期の元本減少が速い元本均等の方が総利息は小さくなりやすいです。",
      "正解。元金均等返済は毎期返済する元金部分が一定です。",
      "残高が減るにつれて利息も原則減少するため、利息額が毎回増えるという説明は逆です。",
      "毎期の元利合計額が原則一定なのは元利均等返済。元金部分の比率は次第に増えます。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-034",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "元金均等返済方式で1,200万円を借り入れ、年利1.5％、6年間で毎年末に元本200万円ずつ返済する。利息は各年の期首元本残高に対して計算する。第3回目の年末返済額（元本と利息の合計）として最も適切なものはどれか。",
    "choices": [
      "209万円",
      "212万円",
      "215万円",
      "218万円"
    ],
    "answer": 1,
    "explanation": "元金均等返済では各年の元本返済額は200万円。2回返済後の元金残高は1,200－200×2＝800万円。3年目の利息は800×1.5％＝12万円、元利合計212万円。毎年の利息計算に使う残高を借入当初の1,200万円としないことが重要です。",
    "topic": "複利計算",
    "sourceUrl": "",
    "sourceLabel": "計算式による照合",
    "lawReferenceDate": null,
    "revision": 5,
    "reviewStatus": "formula_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "id": "fp2-035",
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "共働き世帯の手取り年間収入は合計760万円、生活費は月43万円、年間保険料は24万円、年末一括の旅行費が40万円である。これ以外の支出がないときの年間収支はどうなるか。",
    "choices": [
      "180万円の黒字",
      "164万円の黒字",
      "156万円の黒字",
      "140万円の黒字"
    ],
    "answer": 0,
    "explanation": "年間生活費43×12＝516万円。年払保険料24万円、旅行費40万円を加えると年間支出580万円。手取り収入760－支出580＝180万円の黒字です。生活費を年額換算してから年払いの費用を足します。",
    "topic": "可処分所得",
    "revision": 5,
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "id": "fp2-036",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "火災保険における免責金額の説明として、一般に最も適切なものはどれか。",
    "choices": [
      "免責金額は、保険金額そのものから毎回差し引いて契約上の保険金額を減らす仕組みである",
      "免責金額は、保険事故の有無にかかわらず満期時に契約者へ返還される金額である",
      "免責金額以下の損害でも、保険会社は保険金額の全額を支払うのが原則である",
      "保険金支払時に契約で定めた自己負担に相当する金額である"
    ],
    "answer": 3,
    "explanation": "免責金額は事故時に被保険者が負担する額です。保険金額自体を減らしたり、満期に払い戻されたりする金額ではありません。",
    "topic": "免責金額",
    "revision": 3,
    "choiceExplanations": [
      "免責金額は契約上の保険金額そのものを毎回減らす額ではなく、事故ごとの自己負担の条件です。",
      "免責金額は解約返戻金や満期返戻金とは異なります。",
      "免責金額以下の損害では、一般的な免責控除方式なら支払保険金は発生しません。",
      "正解。契約に定める被保険者の自己負担相当額です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-037",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "建物の火災による損害額が120万円、免責金額が10万円、支払限度額が100万円である。契約上、免責金額控除後に支払限度額を適用するとき、支払保険金はいくらか。",
    "choices": [
      "90万円",
      "100万円",
      "110万円",
      "120万円"
    ],
    "answer": 1,
    "explanation": "免責控除後の損害額＝120－10＝110万円ですが、支払限度額100万円を超えるため100万円です。110万円は支払限度額を考慮しない誤りです。 選択肢ごとの違いは下の「各選択肢の解説」で確認できます。",
    "topic": "損害保険の計算",
    "revision": 5,
    "contentReview": "calculation_and_distractor_review_v21",
    "choiceExplanations": [
      "90万円：免責金額10万円を限度額100万円から再び差し引くと誤ります。",
      "100万円：120－10＝110万円ですが、限度額100万円を適用します。",
      "110万円：免責額は差し引いていますが支払限度額を適用していません。",
      "120万円：免責金額と支払限度額を適用していません。"
    ]
  },
  {
    "id": "fp2-038",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "対人賠償責任保険の一般的な機能について、最も適切な記述はどれか。",
    "choices": [
      "対人賠償責任保険は、主に運転者本人の治療費を補償する仕組みである",
      "自動車事故で他人を死傷させ、法律上の損害賠償責任を負った場合に備える",
      "対人賠償責任保険は、事故で損害を受けた相手方の自動車修理費を補償する",
      "対人賠償責任保険は、自賠責保険で支払われる部分も重複して全額を補償する"
    ],
    "answer": 1,
    "explanation": "対人賠償責任保険は、自動車事故で他人の生命・身体を害し法律上の賠償責任を負った場合の損害に備えます。",
    "topic": "対人賠償責任",
    "revision": 2,
    "choiceExplanations": [
      "運転者自身のけがには人身傷害保険などが関連します。対人賠償責任保険は他人への法律上の賠償責任に備えるものです。",
      "正解。他人を死傷させて法律上の賠償責任を負う場合に備える保険です。自賠責保険との関係にも注意します。",
      "相手車両の修理費など他人の財物の損害は、対人ではなく対物賠償責任保険の対象となり得ます。",
      "自賠責保険による補償部分まで二重に支払われる仕組みではなく、一般にその超過部分などを補償します。"
    ]
  },
  {
    "id": "fp2-039",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "生命保険の保険金受取人と保険契約者に関する記述として、最も適切なものはどれか。",
    "choices": [
      "保険料を負担する人と死亡保険金受取人の組合せは、受取保険金に関する課税関係に影響しない",
      "保険金受取人は契約上の保険金を受領する者として指定される",
      "死亡保険金受取人は、契約者と同一人物でなければ指定できない",
      "生命保険契約で一度指定した死亡保険金受取人は、契約後に変更することができない"
    ],
    "answer": 1,
    "explanation": "保険金受取人は、約定した保険事故等が発生したとき保険金を受け取る者です。契約者と別人の場合もあります。",
    "topic": "保険契約の当事者",
    "revision": 3,
    "choiceExplanations": [
      "保険料負担者と受取人の関係は所得税・相続税・贈与税などの税目判断に影響します。",
      "正解。保険金受取人は契約で保険金の受領者として指定されます。",
      "受取人と契約者は同じ人でなくても構いません。",
      "契約内容や同意等の要件を満たせば受取人変更が可能な場合があります。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-040",
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "終身保険・定期保険・養老保険の基本的な特徴のうち、最も適切な記述はどれか。",
    "choices": [
      "定期保険では、満期まで生存すると死亡保険金と同額の満期保険金を受け取れる",
      "養老保険の死亡保険金は、一般に同契約の満期保険金より少額である",
      "終身保険は一般に一生涯の死亡保障を備える",
      "終身保険は、保険料払込期間満了時点で死亡保障も終了する"
    ],
    "answer": 2,
    "explanation": "終身保険は原則として一生涯の死亡保障を備えます。養老保険は死亡保障と満期保障を備え、定期保険は通常満期保険金がありません。",
    "topic": "生命保険比較",
    "revision": 3,
    "choiceExplanations": [
      "定期保険は原則満期保険金のない一定期間の死亡保障です。",
      "養老保険は死亡保険金と満期保険金が一般に同額で、死亡保険金だけが少額になるのが原則ではありません。",
      "正解。終身保険は原則一生涯の死亡保障です。",
      "保険料の払込満了と、死亡保障が終了する時期は異なります。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-041",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "X社の1株当たり当期純利益（EPS）は200円、年間配当金は70円、株価は2,800円である。X社の配当性向として最も適切なものはどれか。",
    "choices": [
      "35％",
      "2.5％",
      "約285.7％",
      "25％"
    ],
    "answer": 0,
    "explanation": "配当性向＝1株配当70円÷EPS200円×100＝35％。2.5％は配当利回り（70÷2,800×100）、約285.7％はEPS200÷配当70×100と分子・分母を逆にした値、25％は年間配当70÷株価2,800×1,000で本来100倍するところを1,000倍した値です。",
    "topic": "PER",
    "sourceUrl": "https://www.j-flec.go.jp/links/jikan/word/110.html",
    "sourceLabel": "J-FLEC：配当性向",
    "lawReferenceDate": null,
    "revision": 6,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "id": "fp2-042",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "X社の当期純利益は400万円、平均自己資本は5,000万円、平均総資産は8,000万円、売上高は1億円である。自己資本利益率（ROE）として最も適切なものはどれか。",
    "choices": [
      "4％",
      "5％",
      "8％",
      "62.5％"
    ],
    "answer": 2,
    "explanation": "ROE＝当期純利益400万円÷平均自己資本5,000万円×100＝8％。4％は売上高当期純利益率（400÷10,000）、5％はROA（400÷8,000）、62.5％は自己資本比率（5,000÷8,000）です。",
    "topic": "PBR",
    "sourceUrl": "",
    "sourceLabel": "計算式による照合",
    "lawReferenceDate": null,
    "revision": 6,
    "reviewStatus": "formula_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "id": "fp2-043",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "投資総額200万円のうち120万円を年2％の商品X、80万円を年5％の商品Yに投資した。税金・手数料がなく、年途中の資金移動がないとき、ポートフォリオの年間利回りはどれか。",
    "choices": [
      "2.0％",
      "3.2％",
      "3.5％",
      "5.0％"
    ],
    "answer": 1,
    "explanation": "年間収益はXが120×2％＝2.4万円、Yが80×5％＝4.0万円。合計6.4万円÷200万円×100＝3.2％。2.0％はXだけの利回り、5.0％はYだけの利回り、3.5％は投資比率120：80を無視し、2％と5％を単純平均した値です。",
    "topic": "配当利回り",
    "sourceUrl": "",
    "sourceLabel": "計算式による照合",
    "lawReferenceDate": null,
    "revision": 7,
    "reviewStatus": "formula_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v42_individual_question_choice_answer_explanation_check",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp2-044",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "100米ドルを外貨預金として保有する。為替相場が1米ドル150円から130円になったとき、円換算額は何円減少するか（為替手数料・金利なし）。",
    "choices": [
      "1万3,000円減少",
      "1万5,000円減少",
      "2,000円増加",
      "2,000円減少"
    ],
    "answer": 3,
    "explanation": "変更前は100×150＝15,000円、変更後は100×130＝13,000円。差は2,000円の減少。1万3,000円は変更後の円換算残高、1万5,000円は変更前の残高を差額と取り違えた値。2,000円増加は円高時の増減方向を逆にした値です。",
    "topic": "為替変動",
    "revision": 4,
    "contentReview": "v42_individual_question_choice_answer_explanation_check",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "id": "fp2-045",
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "債券と市場金利の関係に関する次の記述のうち、一般に最も適切なものはどれか。",
    "choices": [
      "市場金利が上がると、既発の固定利付債券の市場価格は一般に下落する",
      "市場金利が上がると、変動利付債券の価格は同条件の固定利付債券より必ず大きく下落する",
      "同程度の条件なら、残存期間が長い固定利付債券ほど金利変動による価格変動は一般に小さい",
      "額面より高い価格で購入した固定利付債券の最終利回りは、一般に表面利率を上回る"
    ],
    "answer": 0,
    "explanation": "固定利付債券は市場金利が上がると価格が下がるのが一般的です。同程度の条件なら残存期間が長いほど金利感応度は大きくなりやすく、額面より高く買えば償還差損により最終利回りは表面利率より低くなりやすいです。",
    "topic": "債券価格",
    "revision": 3,
    "choiceExplanations": [
      "正解。市場金利上昇時には既発固定利付債券の市場価格は一般に下落します。",
      "変動利付債券は利払い条件が見直されるため、固定利付債券より必ず大きく下落するとはいえません。",
      "同程度の条件なら残存期間が長い債券の方が金利変動の影響を大きく受けやすいです。",
      "額面超で買い額面償還する場合、償還差損により最終利回りは通常表面利率を下回ります。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-046",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の所得税の基礎控除について、合計所得金額が300万円で他の適用要件を満たす居住者の控除額として、最も適切なものはどれか。",
    "choices": [
      "58万円",
      "68万円",
      "88万円",
      "95万円"
    ],
    "answer": 2,
    "explanation": "合計所得金額300万円は132万円超336万円以下の区分で、2025年分の基礎控除額は88万円です。95万円は132万円以下、68万円は336万円超489万円以下、58万円は655万円超2,350万円以下等の区分で用いられます。 本問は2025年分の所得税を対象とします。改正の原則施行日は2025年12月1日で、2025年分に適用されます。所得の対象年と施行日は区別し、別年分にこの金額をそのまま当てはめません。",
    "topic": "所得税の基礎控除",
    "revision": 57,
    "contentReview": "v57_limited_primary_source_and_conditions_review",
    "sourceUrl": "https://www.nta.go.jp/users/gensen/2025kiso/index.htm",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "lawReferenceDate": "2025-12-01",
    "taxYear": 2025,
    "sourceLabel": "国税庁：令和7年度基礎控除改正",
    "reviewNote": "Ver.57：限定論点を一次資料と照合。適用年・設例条件・未確認範囲はFOCUSED_REVIEW_V57.csvに記録。全面監修ではありません。"
  },
  {
    "id": "fp2-047",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "所得税の計算で、Aさんの所得合計が810万円、所得控除合計が310万円、税額控除が20万円ある。ほかに調整がなければ課税所得金額はいくらか。",
    "choices": [
      "480万円",
      "500万円",
      "520万円",
      "810万円"
    ],
    "answer": 1,
    "explanation": "課税所得金額は、総所得金額等810万円から所得控除310万円を差し引いて500万円です。税額控除20万円は所得からではなく算出された税額から差し引きます。480万円は税額控除まで所得から引いた場合、520万円は税額控除を所得に加えてしまった場合、810万円は所得控除を反映しなかった場合です。",
    "topic": "課税所得計算",
    "revision": 50,
    "contentReview": "v23_arithmetic_explanation_audit",
    "choiceExplanations": [
      "810－310－20＝480万円。税額控除20万円まで課税所得の計算段階で差し引いた誤りです。",
      "正解。810－310＝500万円。税額控除は課税所得の算定後に別途扱います。",
      "810－310＋20＝520万円。税額控除額を課税所得に加える計算はしません。",
      "所得控除310万円を差し引いていない金額です。"
    ]
  },
  {
    "id": "fp2-048",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の所得税について、合計所得金額が2,380万円の居住者が他の適用要件を満たす場合、基礎控除額はいくらか。",
    "choices": [
      "0円",
      "16万円",
      "32万円",
      "48万円"
    ],
    "answer": 3,
    "explanation": "2,350万円超2,400万円以下は48万円。32万円は2,400万円超2,450万円以下、16万円は2,450万円超2,500万円以下、0円は2,500万円超の区分です。所得の境界条件を正確に判定します。",
    "topic": "所得区分",
    "revision": 3,
    "contentReview": "v25_primary_source_or_formula_review",
    "sourceUrl": "https://www.nta.go.jp/users/gensen/2025kiso/",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "source_checked_selected_points",
    "lawReferenceDate": "2025-01-01"
  },
  {
    "id": "fp2-049",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "Aさんは土地を5,800万円で譲渡した。取得費は3,650万円、譲渡仲介手数料など譲渡費用は150万円で、特別控除は適用しない。土地の譲渡所得金額として最も適切なものはどれか。",
    "choices": [
      "1,850万円",
      "2,000万円",
      "2,150万円",
      "2,300万円"
    ],
    "answer": 1,
    "explanation": "土地の譲渡所得金額＝譲渡価額5,800－取得費3,650－譲渡費用150＝2,000万円。2,150万円は譲渡費用を控除しない場合、1,850万円は譲渡費用150万円を二度控除した場合です。取得費と譲渡費用は異なる項目であり両方控除します。",
    "topic": "所得税の暦年課税",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3202.htm",
    "sourceLabel": "国税庁：分離課税の譲渡所得の計算",
    "lawReferenceDate": "2026-04-01",
    "revision": 5,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "id": "fp2-050",
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "事業所得の基本的な計算に関する記述のうち、最も適切なものはどれか。簡略化のため他の調整は考慮しない。",
    "choices": [
      "事業所得の赤字は、事業所得以外の所得と損益通算することができない",
      "事業用の建物を購入した場合、その購入代金は原則として購入年に全額必要経費になる",
      "総収入金額から必要経費を差し引いて所得金額を求める",
      "事業所得を求める際は、総収入金額から所得控除を差し引き、必要経費は別に差し引かない"
    ],
    "answer": 2,
    "explanation": "事業所得は原則として総収入金額－必要経費で算定します。実際には青色申告特別控除などの制度があるため本問では省略しています。",
    "topic": "事業所得",
    "revision": 3,
    "choiceExplanations": [
      "事業所得の赤字は、要件・例外の範囲で他の所得と損益通算できることがあります。",
      "事業用建物の取得費は通常、減価償却を通じて各年の必要経費に計上します。",
      "正解。基本は総収入金額－必要経費で事業所得を求めます。",
      "所得控除は事業所得の必要経費とは別の段階で適用する仕組みです。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-051",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "敷地面積400㎡、建築面積140㎡、容積率算定上の延べ面積600㎡の建物がある。建ぺい率として最も適切なものはどれか。",
    "choices": [
      "35％",
      "150％",
      "約23.3％",
      "65％"
    ],
    "answer": 0,
    "explanation": "建ぺい率＝建築面積140÷敷地400×100＝35％。150％は延べ面積600÷敷地400で求める容積率、約23.3％は建築面積140÷延べ面積600、65％は敷地のうち建築面積以外の部分（400－140）÷400の比率です。",
    "topic": "建ぺい率",
    "revision": 3,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "id": "fp2-052",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "賃貸不動産の年間満室賃料収入は360万円、空室等による収入減が24万円、年間運営費用が66万円である。購入価格5,400万円、取得時諸費用300万円とすると、取得時諸費用も投下資金に含めた実質利回りとして最も適切なものはどれか。",
    "choices": [
      "4.7％",
      "5.0％",
      "5.4％",
      "6.0％"
    ],
    "answer": 0,
    "explanation": "実収入＝360－24＝336万円。運営費控除後＝336－66＝270万円。投下資金＝5,400＋300＝5,700万円。270÷5,700×100＝約4.7368％≒4.7％（小数第2位を四捨五入）。5.0％は分母を購入価格だけとした場合です。 選択肢ごとの違いは下の「各選択肢の解説」で確認できます。",
    "topic": "容積率",
    "sourceUrl": "",
    "sourceLabel": "計算式による照合",
    "lawReferenceDate": null,
    "revision": 5,
    "reviewStatus": "formula_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "calculation_and_distractor_review_v21",
    "choiceExplanations": [
      "4.7％：年間純収益270万円÷投下資金5,700万円×100≒4.7％です。",
      "5.0％：270÷5,400×100。取得時諸費用300万円を分母に含め忘れています。",
      "5.4％：空室損失・費用または投下資金の一部を見落とした場合に起こりうる過大評価です。",
      "6.0％：360÷6,000×100のように満室賃料をそのまま使ってしまうと誤ります。"
    ]
  },
  {
    "id": "fp2-053",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "不動産登記と所有権に関する記述として、最も適切なものはどれか。",
    "choices": [
      "建物の所有権移転登記をすれば、その建物が建つ敷地の所有権も当然に移転する",
      "土地の所有権登記をすれば、その上に建つ建物の所有権も同じ登記記録で当然に公示される",
      "建物の登記記録には表題部がなく、建物の所在地や床面積は登記されない",
      "土地と建物は原則として別個の不動産で、それぞれ登記の対象となる"
    ],
    "answer": 3,
    "explanation": "土地と建物は別個の不動産であり、それぞれ登記の対象となります。",
    "topic": "不動産登記",
    "revision": 2,
    "choiceExplanations": [
      "建物の所有権移転登記だけで、敷地の所有権まで当然に移転するものではありません。土地と建物は別の不動産です。",
      "土地の登記記録と建物の登記記録は別に作られます。土地の所有権登記だけで建物所有権が同時に公示されるわけではありません。",
      "建物の登記記録にも表題部があり、所在地や種類、構造、床面積などが記録されます。",
      "正解。土地と建物はそれぞれ独立した不動産として扱い、原則として別々の登記記録の対象です。"
    ]
  },
  {
    "id": "fp2-054",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "土地の売買契約で買主が解約手付100万円を売主に交付した。契約に特段の定めがなく、買主がまだ履行に着手していないとき、売主が手付解除するために現実に提供すべき金額はいくらか。",
    "choices": [
      "100万円",
      "300万円",
      "400万円",
      "200万円"
    ],
    "answer": 3,
    "explanation": "法定相続分・手付解除の規則を適用し、各選択肢を設例の条件から比較してください。",
    "topic": "不動産取引",
    "revision": 3,
    "choiceExplanations": [
      "受け取った手付100万円を返すだけでは、売主側からの手付解除に必要な倍額提供にはなりません。",
      "手付100万円の倍額200万円に、さらに元の100万円を加えた誤計算です。",
      "手付100万円の倍額をさらに2倍してしまった額です。",
      "正解。売主は受領した手付100万円の倍額＝200万円を現実に提供して手付解除します。"
    ],
    "contentReview": "v46_first_touch_case_and_choices",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-055",
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "個人が土地・建物を売却した際の譲渡所得の課税について、原則として最も適切なものはどれか。",
    "choices": [
      "土地・建物の譲渡所得は、譲渡収入から取得費を控除せずに計算する",
      "土地の売却益は、原則として不動産所得に区分される",
      "土地や建物の売却による譲渡所得は、所有期間が5年を超える場合に限って給与所得と総合課税される",
      "給与所得などと分離して課税する"
    ],
    "answer": 3,
    "explanation": "土地・建物の譲渡所得は給与所得などと分けて計算する分離課税です。税率は譲渡年の1月1日現在の所有期間による長期・短期の区分や特例で異なります。",
    "topic": "不動産取得税",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3202.htm",
    "sourceLabel": "国税庁：土地・建物の譲渡所得と分離課税",
    "lawReferenceDate": "2026-04-01",
    "revision": 4,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "choiceExplanations": [
      "譲渡所得の基本計算では取得費を考慮します。",
      "土地売却益は原則譲渡所得で、貸付収入の不動産所得とは異なります。",
      "土地建物の譲渡所得は原則分離課税で、給与所得と合算する総合課税ではありません。",
      "正解。土地建物等の譲渡所得は原則として給与所得等と分離して課税されます。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-056",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "遺産7,200万円を、配偶者と子3人が法定相続分に従って相続する。遺言・放棄などの事情がなければ、子1人の取得額はいくらか。",
    "choices": [
      "1,800万円",
      "2,400万円",
      "3,600万円",
      "1,200万円"
    ],
    "answer": 3,
    "explanation": "法定相続分の割合を決めてから、遺産額に乗じます。子・父母・兄弟姉妹が複数人なら、その集団の相続分をさらに同順位の人数で分けます。",
    "topic": "法定相続分",
    "choiceExplanations": [
      "配偶者を含めた4人で単純均等割りした額。子の取り分はまず全体の1/2です。",
      "子3人だけで遺産全額を均等割りした額。配偶者の1/2を無視しています。",
      "子3人全体の相続分1/2を、1人の取得額と誤認した額。",
      "正解。子全体1/2を3人で均分し、7,200×1/2÷3＝1,200万円。"
    ],
    "contentReview": "v46_first_touch_case_and_choices",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "id": "fp2-057",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "遺産1億2,000万円を、配偶者と被相続人の兄弟姉妹2人が法定相続分に従って相続する。子・直系尊属はおらず、兄弟姉妹は全血で同順位とする。配偶者の取得額はいくらか。",
    "choices": [
      "3,000万円",
      "6,000万円",
      "8,000万円",
      "9,000万円"
    ],
    "answer": 3,
    "explanation": "法定相続分の割合を決めてから、遺産額に乗じます。子・父母・兄弟姉妹が複数人なら、その集団の相続分をさらに同順位の人数で分けます。",
    "topic": "法定相続分",
    "revision": 3,
    "choiceExplanations": [
      "兄弟姉妹全体の1/4を配偶者の取り分と取り違えた額。",
      "配偶者と子が相続人の場合の配偶者1/2を適用した額。",
      "配偶者と父母が相続人の場合の配偶者2/3を適用した額。",
      "正解。配偶者と兄弟姉妹の相続では配偶者3/4。1億2,000×3/4＝9,000万円。"
    ],
    "contentReview": "v46_first_touch_case_and_choices",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-058",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "相続放棄に関する記述として、最も適切なものはどれか。",
    "choices": [
      "相続放棄は原則として家庭裁判所に申述して行う",
      "相続放棄の手続は、原則として公証役場で行う",
      "相続放棄をすると、預金などのプラスの財産だけを放棄して借入金債務は引き継ぐ",
      "相続放棄は、被相続人の生存中に家庭裁判所へ申述して成立させられる"
    ],
    "answer": 0,
    "explanation": "相続放棄は原則として家庭裁判所に申述して行い、その相続について初めから相続人でなかったものとみなされます。",
    "topic": "相続放棄",
    "revision": 3,
    "choiceExplanations": [
      "正解。相続放棄は家庭裁判所への申述によって行います。",
      "公証役場での手続きでは相続放棄は成立しません。",
      "放棄すれば原則プラスの財産もマイナスの債務も引き継がない扱いです。",
      "生前の相続放棄の申述はできません。相続開始後に熟慮期間等を確認します。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "id": "fp2-059",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "被相続人の法定相続人が配偶者と子2人の計3人で、遺産に係る相続税の基礎控除を求める。基礎控除額として最も適切なものはどれか（相続放棄・養子等の特殊事情なし）。",
    "choices": [
      "3,600万円",
      "4,200万円",
      "4,800万円",
      "5,400万円"
    ],
    "answer": 2,
    "explanation": "遺産に係る基礎控除額は3,000万円＋600万円×法定相続人3人＝4,800万円。3,600万円は1人、4,200万円は2人、5,400万円は4人として計算した数値です。",
    "topic": "遺留分",
    "sourceUrl": "https://www.keisan.nta.go.jp/oshirase/sozoku/yohihantei/goriyomae/hoteisozokunin.html",
    "sourceLabel": "国税庁：相続税の基礎控除額",
    "lawReferenceDate": "2026-04-01",
    "revision": 5,
    "reviewStatus": "primary_source_checked",
    "reviewedAt": "2026-10-12",
    "contentReview": "v25_primary_source_or_formula_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "source_checked_selected_points"
  },
  {
    "id": "fp2-060",
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "遺産9,000万円を、配偶者と被相続人の父母が法定相続分に従って相続する。父母2人の取得額の合計はいくらか。",
    "choices": [
      "3,000万円",
      "6,000万円",
      "2,250万円",
      "4,500万円"
    ],
    "answer": 0,
    "explanation": "法定相続分の割合を決めてから、遺産額に乗じます。子・父母・兄弟姉妹が複数人なら、その集団の相続分をさらに同順位の人数で分けます。",
    "topic": "法定相続分",
    "choiceExplanations": [
      "正解。父母全体の法定相続分は1/3なので9,000×1/3＝3,000万円。",
      "配偶者の法定相続分2/3を父母全体の取り分と取り違えた額。",
      "兄弟姉妹全体の1/4を適用した額。今回は父母が相続人です。",
      "配偶者と子の場合の子全体の1/2を誤用した額。"
    ],
    "contentReview": "v46_first_touch_case_and_choices",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "revision": 1
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "Aさんが3年後に200万円の自動車購入、5年後に300万円の教育費支出を予定する場合、それぞれの時期と費用をライフイベント表に整理することができる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。ライフイベント表は結婚・進学・住宅購入などの時期と必要資金を見積もる表です。収支や金融資産残高の変化の算出は、キャッシュフロー表で行います。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-061",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "Aさんの預金300万円、投資信託200万円、住宅2,000万円、住宅ローン残高1,800万円である。この時点の家計の純資産は700万円である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。資産は300＋200＋2,000＝2,500万円、負債は1,800万円。純資産＝2,500－1,800＝700万円です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-062",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "Aさんが変動金利型住宅ローンを選んだ場合、適用金利は契約時から完済時まで必ず固定されるため、金利上昇リスクを考える必要はない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。変動金利型は契約の定めに従って適用金利が見直される場合があります。返済額の改定ルールは商品ごとに確認が必要です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-063",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "100万円を年利5％（税金・手数料なし）で、毎年末に利息を元本に組み入れて2年間運用した場合、2年後の元利合計は110万2,500円である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。複利では100万円×1.05×1.05＝110万2,500円。利息を元本に組み入れない単利の110万円とは異なります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-064",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "子の大学進学に向けた教育資金計画では、入学金さえ確保すればよく、在学中の授業料・通学費・生活費を見積もる必要はない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。入学時の一時費用だけでなく、在学期間中に続く支出も含めて資金計画を立てます。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-065",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "個人が日常生活で自転車を運転中、過失で歩行者にけがを負わせ、法律上の賠償責任を負った場合、個人賠償責任保険が補償の対象となることがある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。自転車による日常生活上の事故に伴う賠償責任は対象となり得ます。ただし実際の補償可否は被保険者の範囲や約款・免責事由によります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-066",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "一般的な住宅用火災保険で火災補償に加入していれば、地震で建物が倒壊した損害も、地震保険を付けずに必ず補償される。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。地震・噴火・これらによる津波を原因とする損害は通常の火災保険では原則対象外で、地震保険等の契約条件を確認します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-067",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "損害額20万円の事故に免責金額5万円を差し引く契約で、他の支払条件が満たされる場合、支払保険金は15万円となる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。免責控除方式の例では、支払額＝20－5＝15万円です。免責の適用方式や支払限度額は契約で確認します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-068",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "入院給付金日額1万円の医療保険なら、入院の原因や支払対象日数にかかわらず、7日入院した場合にはどの契約でも必ず7万円が支払われる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。免責期間、給付対象となる入院、入院日数の数え方、支払限度等は商品・約款で異なります。日額だけで給付額は確定しません。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-069",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "損害額が100万円で、損害をてん補するタイプの火災保険の保険金額が2,000万円なら、事故によって必ず2,000万円を受け取り利益が生じる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。実損てん補型では保険金額は原則支払限度額であり、支払額は損害額・免責金額・契約条件を基に算定します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-070",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "固定利率の既発債券について、発行体の信用状態など他の条件が同じなら、市場金利が上がると債券価格は一般に下落しやすい。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。新たに発行される債券の利回りが上がるほど、相対的に利率の低い既発債券の市場価値は下がりやすくなります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-071",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "上場株式を100株保有している人は、発行企業が赤字になった年でも、前年度と同じ配当金額を法律上必ず受け取れる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。配当は会社の業績、配当可能額、配当方針、決議等で変わり、常に同額が保証されるわけではありません。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-072",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "外貨預金1万米ドルについて、1ドル＝150円から130円に円高が進み、外貨額が変わらないとき、円換算額は150万円から130万円に減少する（手数料は考慮しない）。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。円換算額は外貨額×為替レートです。10,000×150＝150万円、10,000×130＝130万円となります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-073",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "国内株式・外国株式・債券へ資金を分散すれば、市場全体が下落する局面でも、投資損失が生じる可能性を完全になくせる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。分散は特定銘柄への集中リスクを抑える効果が期待できますが、市場全体の変動など共通のリスクは残ります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-074",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "保有する投資信託の組入資産の市場価格が下落した場合、基準価額が下がることがあり、投資元本が保証されているとは限らない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。投資信託の基準価額は運用資産の時価等を反映します。元本保証のない投資信託では損失が発生し得ます。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-075",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "2025年分の総所得金額等が300万円のAさんは、年間の控除対象医療費30万円を支払い、その医療費を補てんする保険金5万円を受け取った。他の調整はなく通常の医療費控除を選択する場合、控除額は15万円である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。対象医療費30万円－その医療費を補てんする保険金5万円－差引基準額10万円＝15万円です。補てん保険金は給付の目的となった医療費から控除します。 総所得金額等300万円の5％は15万円で、10万円との比較では小さい10万円を差し引きます。総所得金額等が200万円未満なら5％相当額を使います。保険金等は給付の目的となる医療費を限度に控除し、余りを他の医療費から差し引きません。控除額の上限は200万円です。",
    "topic": "",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/shinkoku/tokushu/keisubetsu/iryou-koujo.htm",
    "id": "fp3-076",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：令和7年分の医療費控除",
    "taxYear": 2025,
    "sourceCheckedDate": "2026-10-13",
    "contentReview": "v58_limited_primary_source_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "所得税で課税所得を求める際の所得控除と、計算した税額から直接差し引く税額控除は、控除する段階が異なる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。所得控除は税率を適用する前の所得金額から差し引き、税額控除は算出した税額から差し引きます。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-077",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "Aさんが勤務先から受け取る給与に対する所得税は国税、Aさんの個人住民税は地方税に分類される。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。所得税は国、住民税は都道府県・市区町村が課す税として区別します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-078",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "2025年中に、新契約（2012年1月1日以後に締結した所定の契約）の一般生命保険料を10万円支払った会社員は、所得税の生命保険料控除により、支払額10万円をそのまま算出所得税額から差し引ける。剰余金・割戻金はないものとする。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。生命保険料控除は所得控除であり、税額から直接差し引く税額控除ではありません。2025年分の新契約の一般生命保険料10万円に対する控除額は、年間支払額8万円超の区分で4万円です。支払った10万円全額を所得から引くわけでも、4万円をそのまま税額から引くわけでもありません。",
    "topic": "生命保険料控除・所得控除と税額控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/tetsuzuki/shinsei/annai/gensen/pdf/2025bun_04_input.pdf",
    "id": "fp3-079",
    "revision": 60,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "taxYear": 2025,
    "sourceLabel": "国税庁：令和7年分保険料控除申告書",
    "sourceCheckedDate": "2026-10-13",
    "contentReview": "v60_limited_primary_source_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.60：所得控除区分・対象年・主要論点を限定点検。確認日と法令基準日は別。全例外・全法令の監修は未完了。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "給与明細で所得税等が源泉徴収されている場合、給与の支払者が給与支払時に一定税額を控除し、所定の手続で納付する仕組みが働いている。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。源泉徴収は給与などの支払者が支払時に税額を差し引いて納付する仕組みです。年末調整や確定申告で精算される場合があります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-080",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "敷地面積240㎡、建築面積120㎡の住宅について、建ぺい率は50％である（面積算定上の特例なし）。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。建ぺい率＝建築面積120㎡÷敷地面積240㎡×100＝50％。延べ面積を分子にする容積率とは異なります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-081",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "敷地面積200㎡、算定対象の延べ面積360㎡の建物について、容積率は180％である（算入除外等の特例なし）。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。容積率＝算定対象延べ面積360㎡÷敷地面積200㎡×100＝180％。建ぺい率は建築面積で計算します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-082",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "Aさんが所有する土地に銀行の抵当権を設定した場合、その抵当権は原則として不動産登記記録の権利部（乙区）に記録される。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。登記の権利部甲区は所有権、乙区は抵当権など所有権以外の権利を扱います。表題部は物理的状況等を記録します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-083",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "建ぺい率の上限が60％の敷地について、角地緩和や防火地域等の例外条件がなければ、敷地面積の100％を建築面積にできる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。建ぺい率60％なら通常、建築面積の上限は敷地面積×60％です。一定の緩和・適用除外は別途検討します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-084",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "年間満室賃料240万円、物件価格3,000万円の賃貸住宅について、年間経費等を控除しない表面利回りは8％である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。表面利回りは240÷3,000×100＝8％です。空室や経費を見込む実質利回りとは区別します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-085",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "遺言書で特定の相続人に全遺産を相続させると定めれば、ほかの相続人に遺留分があっても、その侵害額を請求される可能性は一切ない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。兄弟姉妹以外の一定の相続人には遺留分があり、要件を満たせば遺留分侵害額請求の対象になることがあります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-086",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "Aさんが死亡し、借入金500万円と預金700万円を残した場合、単純承認した相続人は、原則として預金だけでなく借入債務も承継する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。単純承認ではプラスの財産とともに、原則として被相続人の債務も承継します。生命保険の団信などで債務が弁済される場合は別途確認します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-087",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "相続人が配偶者と子2人の計3人である場合、遺産分割協議には原則として3人全員の合意が必要であり、配偶者と子1人の賛成だけでは成立しない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。共同相続人全員の合意が原則必要です。多数決で成立するものではありません。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-088",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "AさんがBさんに「この土地を無償であげる」と申し出たが、Bさんが承諾していない。この時点で、贈与契約はBさんの意思にかかわらず必ず成立する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。贈与は贈与者の意思表示と受贈者の受諾により成立する契約です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-089",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "Aさんが自筆証書遺言を作成して保管した時点で、Aさんが生存していても、その遺言に記載された財産について直ちに相続が開始する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。相続は人の死亡によって開始します。遺言書の作成・保管だけで生前に相続が開始するわけではありません。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-090",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "現在の資産額と負債額から純資産を求める式として適切なものはどれか。",
    "choices": [
      "資産額－負債額",
      "資産額＋負債額",
      "負債額÷資産額"
    ],
    "answer": 0,
    "explanation": "純資産＝資産－負債です。資産と負債を足すと、返済義務のある借入金まで自己の正味財産として数えてしまいます。負債÷資産は負債比率に関連する計算で、純資産額ではありません。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-091",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "毎年一定額を積み立て、将来の元利合計を求めたいときに使う係数はどれか。",
    "choices": [
      "年金終価係数",
      "年金現価係数",
      "資本回収係数"
    ],
    "answer": 0,
    "explanation": "年金終価係数は、毎年の一定額積立てから将来の元利合計額を求める係数です。年金現価係数は将来の一定額の受取額を現在価値に直し、資本回収係数は現在の元金から毎期の受取額等を求めます。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-092",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "手取り年収420万円、年間生活費300万円、その他支出60万円の場合、年間収支はいくらか。",
    "choices": [
      "60万円の赤字",
      "120万円の黒字",
      "60万円の黒字"
    ],
    "answer": 2,
    "explanation": "年間収支＝手取り年収420－生活費300－その他支出60＝60万円の黒字です。120万円の黒字はその他支出60万円を差し引き忘れた結果です。60万円の赤字は計算結果の符号を逆にした場合です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-093",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "毎年同額の元利返済を行う住宅ローンの返済方式はどれか。",
    "choices": [
      "満期一括返済",
      "元利均等返済",
      "元金均等返済"
    ],
    "answer": 1,
    "explanation": "元利均等返済では、原則として毎回の元金と利息の合計返済額が一定です。元金均等返済は元金返済部分が一定のため当初の総返済額が大きくなりやすく、満期一括返済では元金を満期にまとめて返します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-094",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "FPのライフプランニングで、人生の出来事とその必要資金を時系列で整理する表はどれか。",
    "choices": [
      "損益計算書",
      "ライフイベント表",
      "貸借対照表"
    ],
    "answer": 1,
    "explanation": "ライフイベント表は、進学・住宅購入・退職などの出来事と必要資金を時系列で整理する表です。損益計算書は一定期間の利益、貸借対照表は特定時点の資産・負債等を示し、ライフイベントの一覧とは目的が異なります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-095",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "日常生活で自転車事故を起こし、歩行者にけがをさせて賠償責任を負った場合に対応し得る保険はどれか。",
    "choices": [
      "普通傷害保険",
      "個人賠償責任保険",
      "自転車の車両損害保険"
    ],
    "answer": 1,
    "explanation": "個人賠償責任保険は、日常生活の法律上の賠償責任を対象とする場合があります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-096",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "普通傷害保険は主として被保険者自身の傷害事故に備えるもので、他人への法律上の賠償責任を補償するものではありません。",
      "正解。日常生活での自転車事故による法律上の対人賠償責任に備えることができます（約款による）。",
      "自転車本体の盗難・破損などへの備えであり、歩行者の治療費等への賠償責任を補償するものではありません。"
    ]
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "被保険者が亡くなると、残された家族に一定期間年金形式で保険金を支払う設計がある保険はどれか。",
    "choices": [
      "終身保険（死亡保険金を原則一時金で受け取る設計）",
      "養老保険（満期生存時の満期保険金を備える設計）",
      "収入保障保険"
    ],
    "answer": 2,
    "explanation": "収入保障保険は、所定の保険期間内に死亡すると、その後一定期間、遺族等が年金形式で給付を受け取る設計を持ちます。通常の終身保険の一時金給付や養老保険の満期保険金と区別します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-097",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "終身保険は死亡保障が一生涯続くものですが、設問は期間を定めた年金形式の遺族保障という仕組みを問うています。",
      "養老保険は所定期間の死亡保障と満期時の生存給付を備える商品で、遺族に一定期間年金で給付する仕組みとは異なります。",
      "正解。所定期間中の死亡後、契約上定めた満期まで年金形式で給付する設計があります。"
    ]
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "火災保険とセットで契約するのが原則で、地震等を原因とする住宅・家財の損害に備える制度はどれか。",
    "choices": [
      "火災保険の水災補償",
      "火災保険の落雷補償",
      "地震保険"
    ],
    "answer": 2,
    "explanation": "地震保険は地震・噴火・それらによる津波に起因する住宅・生活用家財の損害に備え、原則として火災保険とセットで契約します。洪水等に備える水災補償、落雷に備える火災保険の補償項目とは事故原因が異なります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-098",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "choiceExplanations": [
      "水災補償は洪水・土砂災害等の所定損害に備えるもので、地震による損害を一般に補償しません。",
      "落雷補償は落雷による建物・家財の所定損害を対象とするもので、地震・津波による被害の制度とは異なります。",
      "正解。原則として火災保険に付帯し、地震・噴火・これらによる津波に起因する住宅・家財の所定損害に備えます。"
    ]
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "保険で、事故が起きても一定額までは自分で負担する仕組みの名称はどれか。",
    "choices": [
      "保険金額",
      "保険価額",
      "免責金額"
    ],
    "answer": 2,
    "explanation": "免責金額は、損害が発生した際に被保険者が自己負担する所定額です。保険金額（契約で定める支払限度額）や保険価額（保険の目的の評価額）とは異なります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-099",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "choiceExplanations": [
      "保険金額は契約で定める保険会社の支払限度額等であり、事故時の自己負担額ではありません。",
      "保険価額は保険の目的となる財物等の評価額であり、被保険者が事故ごとに負担する免責金額ではありません。",
      "正解。契約上、事故による損害のうち被保険者が負担する金額を免責金額といいます。"
    ]
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "自動車の対人事故で、法律により原則として契約が義務付けられる保険はどれか。",
    "choices": [
      "自動車損害賠償責任保険",
      "任意自動車保険の対人賠償責任保険",
      "任意自動車保険の車両保険"
    ],
    "answer": 0,
    "explanation": "自賠責保険は自動車（原付等を含む）の運行に関する強制保険です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-100",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "正解。自賠責保険（共済）は法律に基づいて原則加入が義務付けられています。",
      "対人賠償責任保険は他人の死傷への賠償に備える任意保険で、強制加入とは異なります。",
      "車両保険は契約車両自体の損害に備える任意の補償で、強制加入ではありません。"
    ]
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "X社の株価が1,200円、1株当たり純資産（BPS）が600円、1株当たり利益（EPS）が120円である。X社のPBRは何倍か。",
    "choices": [
      "0.5倍",
      "10倍",
      "2倍"
    ],
    "answer": 2,
    "explanation": "PBR＝株価1,200円÷BPS600円＝2倍です。0.5倍は分子と分母を逆にした600÷1,200の値です。10倍は株価1,200円÷EPS120円で計算するPERであり、PBRではありません。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-101",
    "revision": 50,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "choiceExplanations": [
      "BPS600円÷株価1,200円＝0.5倍。PBRの割り算を逆にしています。",
      "株価1,200円÷EPS120円＝10倍はPERです。PBRの分母はEPSではなくBPSです。",
      "正解。株価1,200円÷BPS600円＝2倍です。"
    ]
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "額面100万円の債券を95万円で購入し、満期に100万円が返済された場合、償還差益はいくらか（手数料・税金なし）。",
    "choices": [
      "95万円",
      "100万円",
      "5万円"
    ],
    "answer": 2,
    "explanation": "償還差益は償還額100万円－購入額95万円＝5万円です。95万円は購入価格、100万円は償還額をそのまま選んだ場合です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-102",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "元本100万円を年2％で1年間運用した場合の期末額はどれか（税金・手数料なし）。",
    "choices": [
      "98万円",
      "102万円",
      "2万円"
    ],
    "answer": 1,
    "explanation": "1年分の利息＝100万円×2％＝2万円、期末額＝100＋2＝102万円。98万円は利息を加えず差し引いた場合、2万円は元本を含めず利息だけを答えた場合です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-103",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "一般に株価指数の値動きへの連動を目指して運用する投資信託はどれか。",
    "choices": [
      "インデックスファンド",
      "アクティブファンド（比較指数を上回る成果を目標とするもの）",
      "ターゲットイヤーファンド（目標年に合わせ資産配分を変更するもの）"
    ],
    "answer": 0,
    "explanation": "インデックスファンドは日経平均株価やTOPIXなど対象指数の値動きへの連動を目標とします。アクティブファンドは比較指数を上回る運用成果等を目指し、ターゲットイヤーファンドは目標年に応じて資産配分を変化させる設計で、狙いが異なります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-104",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "正解。対象とする指数（ベンチマーク）への連動を目標に運用します。",
      "比較指数を上回る成果を狙うアクティブ運用は、指数への連動そのものを目的とするインデックス運用と異なります。",
      "目標年に近づくにつれて資産配分を変化させる設計は、特定指数への連動という運用目標とは異なります。"
    ]
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "外貨建て資産100米ドルを1ドル150円で円換算した金額はどれか（手数料なし）。",
    "choices": [
      "150円",
      "100円",
      "15,000円"
    ],
    "answer": 2,
    "explanation": "100米ドル×150円／米ドル＝15,000円です。150円は為替レートのみ、100円は保有通貨の数量のみを回答した場合です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-105",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2025年分の所得税の基礎控除について、合計所得金額が120万円の居住者（他の適用要件を満たす）の控除額はいくらか。",
    "choices": [
      "58万円",
      "88万円",
      "95万円"
    ],
    "answer": 2,
    "explanation": "2025年分は合計所得金額132万円以下の基礎控除が95万円です。88万円は132万円超336万円以下、58万円は655万円超2,350万円以下等の区分です。 本問は2025年分の所得税を対象とします。改正の原則施行日は2025年12月1日で、2025年分に適用されます。所得の対象年と施行日は区別し、別年分にこの金額をそのまま当てはめません。",
    "topic": "所得税の基礎控除",
    "sourceUrl": "https://www.nta.go.jp/users/gensen/2025kiso/index.htm",
    "id": "fp3-106",
    "revision": 57,
    "createdVersion": 8,
    "lawReferenceDate": "2025-12-01",
    "contentReview": "v57_limited_primary_source_and_conditions_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2025,
    "sourceLabel": "国税庁：令和7年度基礎控除改正",
    "reviewNote": "Ver.57：限定論点を一次資料と照合。適用年・設例条件・未確認範囲はFOCUSED_REVIEW_V57.csvに記録。全面監修ではありません。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2025年分の所得税の基礎控除について、合計所得金額300万円の居住者（他の適用要件を満たす）の控除額はいくらか。",
    "choices": [
      "68万円",
      "88万円",
      "95万円"
    ],
    "answer": 1,
    "explanation": "合計所得金額300万円は132万円超336万円以下の区分で88万円です。95万円は132万円以下、68万円は336万円超489万円以下の区分です。 本問は2025年分の所得税を対象とします。改正の原則施行日は2025年12月1日で、2025年分に適用されます。所得の対象年と施行日は区別し、別年分にこの金額をそのまま当てはめません。",
    "topic": "所得税の基礎控除",
    "sourceUrl": "https://www.nta.go.jp/users/gensen/2025kiso/index.htm",
    "id": "fp3-107",
    "revision": 57,
    "createdVersion": 8,
    "lawReferenceDate": "2025-12-01",
    "contentReview": "v57_limited_primary_source_and_conditions_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2025,
    "sourceLabel": "国税庁：令和7年度基礎控除改正",
    "reviewNote": "Ver.57：限定論点を一次資料と照合。適用年・設例条件・未確認範囲はFOCUSED_REVIEW_V57.csvに記録。全面監修ではありません。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2025年分の所得税の基礎控除について、合計所得金額500万円の居住者（他の適用要件を満たす）の控除額はいくらか。",
    "choices": [
      "58万円",
      "63万円",
      "68万円"
    ],
    "answer": 1,
    "explanation": "500万円は合計所得金額489万円超655万円以下に当たり、2025年分の基礎控除額は63万円。68万円は336万円超489万円以下、58万円は655万円超2,350万円以下等の区分です。 本問は2025年分の所得税を対象とします。改正の原則施行日は2025年12月1日で、2025年分に適用されます。所得の対象年と施行日は区別し、別年分にこの金額をそのまま当てはめません。",
    "topic": "所得税の基礎控除",
    "sourceUrl": "https://www.nta.go.jp/users/gensen/2025kiso/index.htm",
    "id": "fp3-108",
    "revision": 57,
    "createdVersion": 8,
    "lawReferenceDate": "2025-12-01",
    "contentReview": "v57_limited_primary_source_and_conditions_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2025,
    "sourceLabel": "国税庁：令和7年度基礎控除改正",
    "reviewNote": "Ver.57：限定論点を一次資料と照合。適用年・設例条件・未確認範囲はFOCUSED_REVIEW_V57.csvに記録。全面監修ではありません。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2025年分の総所得金額等が300万円、年間の控除対象医療費の支払額が28万円、その対象医療費を補てんする保険金等が8万円の場合、通常の医療費控除額はどれか（他の調整なし）。",
    "choices": [
      "18万円",
      "20万円",
      "10万円"
    ],
    "answer": 2,
    "explanation": "医療費控除額＝支払額28－補てん額8－差引基準額10＝10万円。18万円は補てん額を控除せず28－10とした場合、20万円は差引基準額を控除せず28－8とした場合です。 総所得金額等300万円の5％は15万円で、10万円との比較では小さい10万円を差し引きます。総所得金額等が200万円未満なら5％相当額を使います。保険金等は給付の目的となる医療費を限度に控除し、余りを他の医療費から差し引きません。控除額の上限は200万円です。",
    "topic": "",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/shinkoku/tokushu/keisubetsu/iryou-koujo.htm",
    "id": "fp3-109",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：令和7年分の医療費控除",
    "contentReview": "v58_limited_primary_source_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2025,
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "消費税の性格として、最も適切なものはどれか。",
    "choices": [
      "地方税のみ",
      "直接税のみ",
      "間接税"
    ],
    "answer": 2,
    "explanation": "消費税は消費に着目した間接税です。国税の消費税と地方消費税があります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-110",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "国税の消費税もあるため、地方税のみとの説明は不適切です。",
      "消費税は販売価格等に転嫁される間接税の性格で、直接税のみとはいえません。",
      "正解。消費税は間接税であり、国税の消費税と地方消費税があります。"
    ]
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "土地面積300㎡、建築面積120㎡、容積率算定上の延べ面積750㎡の建物がある。建ぺい率はどれか。",
    "choices": [
      "40％",
      "250％",
      "60％"
    ],
    "answer": 0,
    "explanation": "建ぺい率＝120÷300＝40％。250％は延べ面積750÷土地300による容積率、60％は土地のうち建築面積以外（300－120）÷300の比率です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-111",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "土地面積200㎡、建築面積150㎡、容積率200％の場合、単純計算による延べ面積の上限はどれか（ほかの規制は考慮しない）。",
    "choices": [
      "400㎡",
      "200㎡",
      "150㎡"
    ],
    "answer": 0,
    "explanation": "延べ面積上限＝敷地面積200㎡×容積率200％＝400㎡。200㎡は容積率100％と取り違えた場合、150㎡は建築面積をそのまま延べ面積の上限と誤認した場合です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-112",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "購入価格4,000万円、年間満室賃料240万円、年間空室損失40万円、年間管理費20万円の賃貸物件がある。空室損失を反映した年間賃料収入を購入価格で割った利回りはいくらか（取得諸費用は考慮しない）。",
    "choices": [
      "4.5％",
      "6％",
      "5％"
    ],
    "answer": 2,
    "explanation": "空室損失控除後の賃料収入は240－40＝200万円。200÷4,000×100＝5％。6％は満室賃料240万円を使った表面利回り、4.5％は空室損失40万円と管理費20万円をともに控除した場合の利回りです。本問が問うのは管理費控除前の空室損失反映後利回りであり、一般的な表面利回りとは区別します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-113",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed",
    "verificationStatus": "arithmetic_reviewed_law_not_audited"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "不動産の価格を求める鑑定評価手法のうち、将来収益に着目するものはどれか。",
    "choices": [
      "取引事例比較法",
      "原価法",
      "収益還元法"
    ],
    "answer": 2,
    "explanation": "収益還元法は不動産から将来期待される純収益等を基に価格を評価する手法です。取引事例比較法は類似物件の取引事例、原価法は再調達原価と減価等に着目します。何を評価の出発点にするかで区別します。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-114",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "固定資産税は一般にどのような税か。",
    "choices": [
      "市町村等が課す地方税",
      "都道府県が原則として課する地方税",
      "市町村等が課す国税"
    ],
    "answer": 0,
    "explanation": "固定資産税は原則として市町村（東京都23区は都）が課す地方税です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-115",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "正解。原則市町村が課税します。東京都23区では都が課す例外があります。",
      "都道府県が原則として課す税ではありません（東京都23区等の例外は別）。",
      "市町村等が課す地方税であり、国税ではありません。"
    ]
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "Aさんが10月1日に死亡し、相続人Bさんが11月15日に遺産分割協議を終えた。相続が開始した日は原則いつか。",
    "choices": [
      "11月15日（遺産分割協議が成立した日）",
      "家庭裁判所に相続を届け出た日",
      "10月1日（Aさんが死亡した日）"
    ],
    "answer": 2,
    "explanation": "相続は被相続人の死亡時に開始します（民法882条）。遺産分割協議の成立日や家庭裁判所での手続日を相続開始日と取り違えないようにします。",
    "topic": "",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_13/index.html",
    "id": "fp3-116",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v51_official_source_based_limited_rule_review",
    "verificationStatus": "v51_rule_limited_answer_and_choice_review_not_full_certification"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "遺産に預金800万円と借入金300万円があるとき、差引後の正味額はどれか（ほかの財産等はない）。",
    "choices": [
      "800万円",
      "500万円",
      "300万円"
    ],
    "answer": 1,
    "explanation": "正味額は預金800万円－借入金300万円＝500万円。800万円は負債を控除せず資産だけを答えた場合、300万円は負債だけを回答した場合です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-117",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "法定相続人が配偶者と子1人の場合、法定相続分の配偶者の割合はどれか。",
    "choices": [
      "2分の1",
      "4分の1",
      "3分の2"
    ],
    "answer": 0,
    "explanation": "配偶者と子が共同相続する場合、配偶者の法定相続分は2分の1です。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-118",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "正解。配偶者と子が法定相続人なら、配偶者と子全体が各1/2です。",
      "1/4は子2人がいる場合の子1人分等で現れ得る数値で、ここでの配偶者分ではありません。",
      "2/3は配偶者と直系尊属が共同相続する場合の配偶者分です。"
    ]
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "自筆証書遺言について、一般に適切な説明はどれか。",
    "choices": [
      "遺言者が本文をパソコンで作成し、署名だけを自書する",
      "遺言者が原則として本文を自書する",
      "遺言者以外が本文を代筆し、遺言者が押印する"
    ],
    "answer": 1,
    "explanation": "自筆証書遺言の本文は原則として遺言者本人が自書します。財産目録には例外があります。",
    "topic": "",
    "sourceUrl": "",
    "id": "fp3-119",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "財産目録には例外がありますが、自筆証書遺言の本文は原則自書が必要です。",
      "正解。本文は原則遺言者本人が自書します。日付・氏名の自書、押印等の要件もあります。",
      "本文を第三者が代筆するだけでは自筆証書遺言の自書要件を満たしません。"
    ]
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "法定相続人が配偶者と子2人の場合、相続税の遺産に係る基礎控除額はいくらか（養子・相続放棄等なし）。",
    "choices": [
      "4,200万円",
      "4,800万円",
      "5,400万円"
    ],
    "answer": 1,
    "explanation": "法定相続人は3人。3,000万円＋600万円×3＝4,800万円です。4,200万円は2人、5,400万円は4人と誤って数えた場合の金額です。",
    "topic": "",
    "sourceUrl": "https://www.keisan.nta.go.jp/oshirase/sozoku/yohihantei/goriyomae/hoteisozokunin.html",
    "id": "fp3-120",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：制度・税務の解説",
    "contentReview": "v25_primary_source_or_formula_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "source_checked_selected_points"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "年間手取り収入640万円、生活費420万円、住宅ローン年間返済額120万円、その他支出40万円である。年間収支として最も適切なものはどれか。",
    "choices": [
      "60万円の黒字",
      "180万円の黒字",
      "100万円の黒字",
      "220万円の黒字"
    ],
    "answer": 0,
    "explanation": "年間収支＝640－420－120－40＝60万円の黒字。180万円の黒字は住宅ローン返済120万円を除外、100万円の黒字はその他支出40万円を除外、220万円の黒字は住宅ローン返済120万円とその他支出40万円をともに除外した値です。",
    "topic": "キャッシュフロー",
    "sourceUrl": "",
    "id": "fp2-061",
    "revision": 5,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "Aさんの保有資産は、預金600万円、投資信託900万円、自宅の時価3,600万円である。負債は住宅ローン2,400万円、教育ローン200万円である。株式など他の資産・負債はない。純資産額はいくらか。",
    "choices": [
      "1,600万円",
      "2,300万円",
      "2,500万円",
      "2,700万円"
    ],
    "answer": 2,
    "explanation": "資産合計600＋900＋3,600＝5,100万円。負債合計2,400＋200＝2,600万円。純資産＝5,100－2,600＝2,500万円。2,700万円は教育ローン200万円を差し引かない場合、2,300万円は教育ローンを二重に控除した場合です。",
    "topic": "家計バランスシート",
    "sourceUrl": "",
    "id": "fp2-062",
    "revision": 6,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v23_arithmetic_explanation_audit",
    "choiceExplanations": [
      "投資信託900万円を資産から計上しない場合、正しい純資産2,500－900＝1,600万円になります。",
      "教育ローン200万円を二重に控除すると、正しい純資産2,500－200＝2,300万円になります。",
      "正解。資産600＋900＋3,600＝5,100万円、負債2,400＋200＝2,600万円、純資産2,500万円です。",
      "教育ローン200万円を負債に含めない場合、5,100－2,400＝2,700万円です。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "100万円を年3％の複利で2年間運用した期末の元利合計はいくらか（税金・手数料なし）。",
    "choices": [
      "106万円",
      "109万円",
      "103万円",
      "106万900円"
    ],
    "answer": 3,
    "explanation": "年3％の2年複利なので100万円×1.03²＝106万900円。106万円は単利を2年間適用した場合、103万円は1年で運用を終えた場合です。109万円は複利3年間の値に近く、設問の運用期間とは異なります。",
    "topic": "複利",
    "sourceUrl": "",
    "id": "fp2-063",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "元金均等返済方式の住宅ローンに関する記述として最も適切なものはどれか。",
    "choices": [
      "毎回の元金返済額は原則一定で、利息分は残高に応じて減る",
      "元金返済額は原則一定だが、返済が進むほど毎回の支払利息額は増える",
      "毎回の元利返済額は原則一定で、元金返済額は返済の進行に伴い増える",
      "毎回の返済元金額は返済当初が最も多く、返済が進むほど減る"
    ],
    "answer": 0,
    "explanation": "元金均等返済は元金の返済額が一定で、残高減少に伴い利息と総返済額は一般に減ります。",
    "topic": "住宅ローン",
    "sourceUrl": "",
    "id": "fp2-064",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "正解。毎期の元金返済額が一定で、元金残高の減少とともに利息は減ります。",
      "残高に応じて算出する利息は返済が進むにつれて一般に減少します。",
      "毎期の元利合計額が一定なのは元利均等返済です。",
      "元金均等返済の毎期の元金返済部分は原則一定です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "年間給与収入600万円、所得税・住民税・社会保険料の合計150万円、年間貯蓄額90万円とする。年間可処分所得に対する貯蓄率として最も適切なものはどれか。",
    "choices": [
      "15％",
      "20％",
      "60％",
      "25％"
    ],
    "answer": 1,
    "explanation": "可処分所得＝600－150＝450万円。貯蓄率＝90÷450×100＝20％。15％は給与収入600万円を分母とした値、60％は貯蓄90万円を税金等150万円で割った値、25％は可処分所得から貯蓄を引いた年間消費額360万円を分母にして90÷360×100とした値です。",
    "topic": "貯蓄率",
    "sourceUrl": "",
    "id": "fp2-065",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "将来毎年一定額の年金を受け取る場合に、その年金の現在価値を求める係数として最も適切なものはどれか。",
    "choices": [
      "減債基金係数",
      "年金現価係数",
      "資本回収係数",
      "年金終価係数"
    ],
    "answer": 1,
    "explanation": "年金現価係数は将来の一定期間にわたる年金収入の現在価値を求める係数です。",
    "topic": "6つの係数",
    "sourceUrl": "",
    "id": "fp2-066",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "減債基金係数は将来の目標額を得るための定期積立額を求めます。",
      "正解。年金現価係数は将来の定期的受取額から現在必要な元金を求めます。",
      "資本回収係数は現在の元金に対する毎期の取り崩し額を求めます。",
      "年金終価係数は毎期の積立額から将来の合計額を求めます。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "保険の必要保障額を検討する際の基本的な考え方として最も適切なものはどれか。",
    "choices": [
      "遺族の生活費・教育費の合計額に、遺族年金や預貯金を加えた金額が必要保障額になる",
      "必要保障額は年収の一定倍率で決まり、遺族年金による調整は行わない",
      "死亡退職金の見込み額は、必要保障額の計算で常に無視する",
      "遺族の必要資金から遺族の収入・資産等を差し引く"
    ],
    "answer": 3,
    "explanation": "一般に必要保障額は遺族の支出見込額などから公的給付・遺族の収入・資産等を差し引いて見積もります。",
    "topic": "必要保障額",
    "sourceUrl": "",
    "id": "fp2-067",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "遺族年金や預貯金は遺族の収入・資金源として必要保障額から差し引く側です。",
      "必要保障額は遺族の支出見込みと公的給付等を踏まえて見積もるため、年収の固定倍率だけでは決まりません。",
      "死亡退職金等は遺族が受け取る見込みの資金として通常考慮します。",
      "正解。遺族の必要資金－遺族の収入・資産等を基本に算出します。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "資産運用でインフレ率が3％、名目運用利回りが2％の場合、実質利回りの近似値として最も適切なものはどれか。",
    "choices": [
      "約－1％",
      "約1％",
      "約5％",
      "約2％"
    ],
    "answer": 0,
    "explanation": "名目運用利回り2％－インフレ率3％＝実質利回りの近似値は－1％です。正確な実質利回りは1.02÷1.03－1≒－0.97％。プラス1％になるわけではありません。",
    "topic": "実質利回り",
    "sourceUrl": "",
    "id": "fp2-068",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v23_arithmetic_explanation_audit",
    "choiceExplanations": [
      "正解。近似式では名目利回り2％－インフレ率3％＝－1％です。厳密には1.02÷1.03－1≒－0.97％です。",
      "2％と3％の差の絶対値だけを答えて符号を落とすと＋1％になりますが、実質利回りはマイナスです。",
      "名目利回り2％とインフレ率3％を加算すると5％になりますが、物価上昇を控除する計算なので不適切です。",
      "2％はインフレ率を調整しない名目利回りです。実質利回りとしてそのまま回答することはできません。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "住宅購入後のライフプランを作る際、年間の資金計画として計上することが一般に適切なものはどれか。",
    "choices": [
      "住宅ローン返済額だけを年間支出に計上すれば、固定資産税・修繕費は通常考慮しなくてよい",
      "購入時の諸費用は購入年の支出として計上し、それ以降の保有コストを見込まない",
      "住宅ローン完済後は管理費や修繕積立金の支払いがなくなるため、住宅関連費用はゼロとしてよい",
      "住宅ローン返済だけでなく固定資産税や修繕費も見込む"
    ],
    "answer": 3,
    "explanation": "住宅購入後の資金計画にはローン返済だけでなく、固定資産税・修繕費・管理費などの保有コストを含めます。購入時諸費用は購入年の支出ですが、その後の費用が不要になるわけではなく、ローン完済後も管理・維持費が発生します。",
    "topic": "住宅資金計画",
    "sourceUrl": "",
    "id": "fp2-069",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "公的年金等の年間収入が300万円、生活費が年間360万円、別途毎年15万円の保険料支出が見込まれる。20年間の老後資金不足額はいくらか（物価変動・運用益なし）。",
    "choices": [
      "75万円",
      "1,200万円",
      "1,500万円",
      "1,800万円"
    ],
    "answer": 2,
    "explanation": "年間不足額＝360＋15－300＝75万円。20年間では75×20＝1,500万円です。75万円は年間不足額をそのまま回答した場合、1,200万円は保険料支出を除いて(360－300)×20とした場合、1,800万円は保険料15万円を誤って二重計上し(360＋15＋15－300)×20とした場合です。",
    "topic": "老後資金",
    "sourceUrl": "",
    "id": "fp2-070",
    "revision": 5,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v25_primary_source_or_formula_review"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "火災保険の保険価額が2,000万円、保険金額が1,000万円の場合に生じる可能性のある一般的な契約状態はどれか。",
    "choices": [
      "超過保険",
      "一部保険",
      "重複保険の確定",
      "再保険"
    ],
    "answer": 1,
    "explanation": "保険金額が保険価額より少ない状態を一部保険といいます。支払額は契約条件によります。",
    "topic": "一部保険",
    "sourceUrl": "",
    "id": "fp2-071",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "超過保険は、保険金額が保険価額を上回る状態を指します。本問は逆に少ない状態です。",
      "正解。保険金額1,000万円が保険価額2,000万円を下回るため、一部保険に該当します。実際の支払額は約款によります。",
      "重複保険は、同じ保険の目的などについて複数の保険契約が存在する場合の論点です。提示された金額だけでは確定しません。",
      "再保険は保険者が引き受けたリスクの一部を別の保険者へ移す仕組みで、一部保険の意味ではありません。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "自動車保険の等級別料率制度に関する記述として、一般に最も適切なものはどれか。",
    "choices": [
      "事故の有無等によって次契約の等級や保険料率が変わる",
      "事故で保険金を請求しても、事故有係数の適用期間や保険料率には影響しない",
      "事故有係数が適用される契約では、無事故係数の契約より保険料率が必ず低くなる",
      "等級別料率制度では、無事故であっても契約継続時に原則として等級が1等級下がる"
    ],
    "answer": 0,
    "explanation": "ノンフリート等級別料率制度では、事故有無や事故区分等に応じた等級・事故有係数適用期間が保険料に影響します。",
    "topic": "自動車保険",
    "sourceUrl": "",
    "id": "fp2-072",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "正解。事故の有無・事故区分等で等級や事故有係数適用期間が変わる場合があります。",
      "事故での保険金請求は、契約条件等に応じて翌年度以降の等級・料率等に影響し得ます。",
      "一般に事故有係数の適用は無事故係数より保険料を割高にする方向です。",
      "通常、無事故で継続すれば等級は上がる方向であり、毎年1等級下がるわけではありません。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "対象損害額30万円、免責金額5万円、保険金支払限度額20万円の損害保険契約がある。損害額から免責を差し引いた後に限度額を適用する場合、支払保険金はいくらか。",
    "choices": [
      "20万円",
      "25万円",
      "30万円",
      "5万円"
    ],
    "answer": 0,
    "explanation": "免責控除後は30－5＝25万円ですが、限度額20万円を上回るので支払額は20万円。25万円は限度額を無視、30万円は免責金額と限度額の双方を無視、5万円は免責金額そのものを答えた場合です。",
    "topic": "免責金額",
    "sourceUrl": "",
    "id": "fp2-073",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "賠償責任保険について最も適切な記述はどれか。",
    "choices": [
      "施設賠償責任保険は、施設所有者が自身の所有建物の修理費を確保するための保険である",
      "賠償責任保険では、法律上の賠償責任がない事故でも自己所有財物の損害を原則補償する",
      "法律上の損害賠償責任を負うことによる損失を対象とすることがある",
      "製造物責任に関する賠償責任保険は、製品の欠陥が原因であっても第三者の身体障害を補償しない"
    ],
    "answer": 2,
    "explanation": "賠償責任保険は、被保険者が法律上の損害賠償責任を負うことによる損失等を対象とする保険です。",
    "topic": "賠償責任保険",
    "sourceUrl": "",
    "id": "fp2-074",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "施設賠償責任保険は第三者に対する法律上の賠償責任に備えるもので、自分の建物の修理費を主な対象にしません。",
      "賠償責任保険と自己財物の損害を補償する財物保険は区別します。",
      "正解。法律上の損害賠償責任を負った場合の損失を対象とする契約があります。",
      "PL保険は製品等に起因する第三者の身体障害・財物損壊等の賠償事故を対象とすることがあります。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "地震保険の契約に関する記述として、最も適切なものはどれか。",
    "choices": [
      "地震保険は居住用建物だけを対象とし、生活用家財を保険の対象とすることはできない",
      "原則として火災保険に付帯して契約する",
      "地震保険は、火災保険とは切り離して単独契約するのが原則である",
      "地震が原因の火災による建物損害は、通常の火災保険だけで原則補償される"
    ],
    "answer": 1,
    "explanation": "一般向け地震保険は、原則として住居用建物・生活用家財に対し火災保険に付帯して契約します。",
    "topic": "地震保険",
    "sourceUrl": "",
    "id": "fp2-075",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "地震保険は居住用建物だけでなく、生活用家財も対象にできます。",
      "正解。一般の地震保険は火災保険に付帯して契約します。",
      "地震保険は原則単独では契約できません。",
      "地震を原因とする火災損害は通常の火災保険では原則として補償対象外です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "生命保険の契約者・被保険者・保険金受取人の違いについて最も適切な説明はどれか。",
    "choices": [
      "保険金受取人は、原則として保険の対象となる被保険者と同一人である",
      "被保険者は保障の対象となる人",
      "契約者は、保険事故が起きたとき保険金を受け取る者として必ず指定される",
      "契約者と保険金受取人の組合せは、保険金を受け取った場合の課税関係に影響しない"
    ],
    "answer": 1,
    "explanation": "被保険者は保険事故の対象となる人です。契約者・被保険者・受取人は異なる場合があります。",
    "topic": "生命保険契約",
    "sourceUrl": "",
    "id": "fp2-076",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "契約者・被保険者・受取人は契約内容により同一とは限りません。",
      "正解。被保険者は保障の対象となる人です。",
      "契約者は契約手続きを行う立場であり、必ず保険金受取人になるわけではありません。",
      "保険金の税目は保険料負担者・被保険者・受取人などの関係で変わり得ます。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "解約返戻金について最も適切な記述はどれか。",
    "choices": [
      "解約時点や契約によって金額が変わり、返戻金がない商品もある",
      "死亡保障のある終身保険は、解約した後でも元の契約の保障が継続する",
      "低解約返戻金型の終身保険では、保険料払込期間中でも解約返戻金が高くなるように設計されている",
      "解約返戻金がある保険では、一般に払込保険料の累計額を下回ることはない"
    ],
    "answer": 0,
    "explanation": "解約返戻金の有無と水準は保険種類・契約条件・経過年数等によります。",
    "topic": "解約返戻金",
    "sourceUrl": "",
    "id": "fp2-077",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "正解。返戻金の有無・額は契約の種類や経過年数、条件により異なり、返戻金がない商品もあります。",
      "生命保険は解約すると原則としてその契約の保障も終了します。解約後も元の死亡保障が続くとはいえません。",
      "低解約返戻金型は所定期間の返戻金を通常型より低く抑える設計が一般的で、「高くなる」は逆です。",
      "解約返戻金があっても、その時点までの払込保険料合計を下回る場合があります。元本保証とは限りません。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "損害保険のモラルリスクに関する説明として最も適切なものはどれか。",
    "choices": [
      "市場金利の変動",
      "保険料を分割払いする仕組み",
      "地震の規模の予測誤差",
      "保険金を不正に得ようとする行為等によるリスク"
    ],
    "answer": 3,
    "explanation": "モラルリスクは保険制度を悪用した故意事故や不正請求などの危険を指します。",
    "topic": "保険募集とリスク",
    "sourceUrl": "",
    "id": "fp2-078",
    "revision": 1,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "市場金利の変動は金融・金利リスクの話であり、保険金の不正取得等に関するモラルリスクとは別です。",
      "分割払いは保険料の支払方法であり、その仕組み自体がモラルリスクの定義ではありません。",
      "地震の規模の予測誤差は自然災害の不確実性であり、故意事故・不正請求などのモラルリスクと異なります。",
      "正解。保険金の不正取得を目的とする故意の事故や虚偽請求などがモラルリスクの典型例です。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "自賠責保険（自動車損害賠償責任保険）の基本的な補償範囲について、最も適切なものはどれか。",
    "choices": [
      "対物事故について、相手の車両修理費を損害額に応じて補償する",
      "運転者本人の単独事故によるけがを、人身傷害保険と同様に補償する",
      "自賠責保険は、他人の死傷だけでなく相手の建物損害も同じ限度額で補償する",
      "自動車事故による他人の死傷に係る所定の損害賠償責任を補償する"
    ],
    "answer": 3,
    "explanation": "自賠責保険は自動車事故の被害者救済を目的とする強制保険で、他人の死傷に対する所定の損害賠償責任に備えます。物損や運転者本人のけがは対象外です。",
    "topic": "自賠責保険",
    "sourceUrl": "",
    "id": "fp2-079",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "他人の車両修理費等の対物損害は、自賠責ではなく任意の対物賠償保険などで備えます。",
      "自賠責保険は運転者本人のけがを補償する人身傷害保険ではありません。",
      "相手の建物等の物損は自賠責の補償対象外で、対人と同じ限度額で補償されません。",
      "正解。自賠責は交通事故により他人を死傷させた場合の法律上の賠償責任に対し、所定の限度額内で支払われます。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "保険料の払込方法として、一般に「年払」と「月払」の違いについて正しいものはどれか。",
    "choices": [
      "同じ保険種類と保障条件なら、年払・月払の年間保険料総額はどの商品でも必ず等しい",
      "年払と月払では保険料の払込頻度が異なり、同じ保障条件でも年間の総支払額が異なる場合がある",
      "年払から月払へ変更すると、保障期間が自動的に12分の1に短縮される",
      "同じ保障内容でも月払契約なら保険事故の補償が1カ月ごとに消滅し、更新契約が必要となる"
    ],
    "answer": 1,
    "explanation": "年払は原則年に1回、月払は原則毎月保険料を支払う方法です。払込回数に応じた保険料率の設定等により、同じ保障条件でも年間総額が異なる場合があります。払込頻度と保障期間・保険事故の範囲は別の概念です。",
    "topic": "保険料払込",
    "sourceUrl": "",
    "id": "fp2-080",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "choiceExplanations": [
      "払込方法別の料率や割引等により年間総額が異なる場合があり、「必ず等しい」は誤りです。",
      "正解。払込回数が異なるほか、年払の方が月払12回合計より割安な設計の契約もあります。",
      "保険料の払込頻度を変更しただけで、保障期間が自動的に12分の1になるわけではありません。",
      "保険料を毎月支払うことと、毎月保障を終了させて別契約を締結し直すことは同じではありません。"
    ]
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "X社の株価は2,400円、EPSは160円、BPSは800円、年間1株配当は48円である。PERは何倍か。",
    "choices": [
      "3倍",
      "15倍",
      "2％",
      "30％"
    ],
    "answer": 1,
    "explanation": "PER＝株価2,400円÷EPS160円＝15倍。3倍はPBR（2,400÷800）、2％は配当利回り（48÷2,400×100）、30％は配当性向（48÷160×100）です。",
    "topic": "PER",
    "sourceUrl": "",
    "id": "fp2-081",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "X社の株価1,800円、BPS900円、EPS150円、年間1株配当45円の場合、PBRとして最も適切なものはどれか。",
    "choices": [
      "2倍",
      "12倍",
      "2.5％",
      "30％"
    ],
    "answer": 0,
    "explanation": "PBR＝株価1,800÷BPS900＝2倍。12倍はPER（1,800÷150）、2.5％は配当利回り（45÷1,800×100）、30％は配当性向（45÷150×100）です。",
    "topic": "PBR",
    "sourceUrl": "",
    "id": "fp2-082",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "額面100万円、表面利率年1.5％の債券の年間利子額はいくらか（税引前）。",
    "choices": [
      "1,500円",
      "150,000円",
      "15,000円",
      "30,000円"
    ],
    "answer": 2,
    "explanation": "年利子額＝額面100万円×表面利率1.5％＝15,000円。1,500円は率を0.15％として計算した場合、150,000円は率を15％として計算した場合。表面利率をパーセントから小数へ直して計算します。",
    "topic": "債券利子",
    "sourceUrl": "",
    "id": "fp2-083",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "株式Aに40％を年1％、株式Bに60％を年5％で投資した場合、ポートフォリオの加重平均利回りはどれか。",
    "choices": [
      "3.4％",
      "3.0％",
      "1.0％",
      "5.0％"
    ],
    "answer": 0,
    "explanation": "加重平均利回り＝40％×1％＋60％×5％＝0.4％＋3.0％＝3.4％。3.0％は2つの利回りを単純平均した値、1.0％はAだけ、5.0％はBだけの利回りを全体に適用した値です。",
    "topic": "加重平均利回り",
    "sourceUrl": "",
    "id": "fp2-084",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "標準偏差を投資リスクの指標として用いる場合、他の条件が同じなら最も適切な説明はどれか。",
    "choices": [
      "標準偏差が0なら、期待収益率も必ず0になる",
      "標準偏差が大きいほどリターンの変動幅は一般に大きい",
      "標準偏差はリターンの平均値を表す指標であり、リターンのばらつきを測るものではない",
      "標準偏差が大きい商品ほど、元本割れの可能性が低いことが保証される"
    ],
    "answer": 1,
    "explanation": "標準偏差は収益率が平均値からどの程度ばらつくかを示します。大きいほど一般に価格・リターンの変動幅が大きいと考えます。標準偏差0でも平均リターンが0とは限らず、平均値そのものを測る指標でも、元本割れが起こらないことを保証する指標でもありません。",
    "topic": "リスクと標準偏差",
    "sourceUrl": "",
    "id": "fp2-085",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "2024年以降のNISAのつみたて投資枠の年間投資上限について最も適切なものはどれか（2026年10月時点の一般向け制度）。",
    "choices": [
      "60万円",
      "360万円",
      "240万円",
      "120万円"
    ],
    "answer": 3,
    "explanation": "つみたて投資枠の年間上限は120万円です。成長投資枠は240万円で、併用可能です。",
    "topic": "NISA",
    "sourceUrl": "https://www.fsa.go.jp/policy/nisa2/know/",
    "id": "fp2-086",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "金融庁：NISA特設サイト",
    "choiceExplanations": [
      "60万円は2024年以降のつみたて投資枠の上限ではありません。",
      "360万円はつみたて投資枠120万円と成長投資枠240万円の年間合計上限です。",
      "240万円は成長投資枠の年間上限です。",
      "正解。つみたて投資枠の年間上限は120万円です（2024年開始制度）。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "2024年以降のNISAの非課税保有限度額（全体の総枠）は、2026年10月時点の一般向け制度ではいくらか。",
    "choices": [
      "1,800万円",
      "360万円",
      "240万円",
      "1,200万円"
    ],
    "answer": 0,
    "explanation": "2024年開始のNISAでは、非課税保有限度額（総枠）は簿価ベースで1,800万円。成長投資枠の総枠内の上限は1,200万円であり、年間投資上限360万円（120万円＋240万円）とは別です。",
    "topic": "NISA",
    "sourceUrl": "https://www.fsa.go.jp/policy/nisa2/know/",
    "id": "fp2-087",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "金融庁：NISA特設サイト",
    "choiceExplanations": [
      "正解。2024年開始のNISAの非課税保有限度額（総枠）は簿価で1,800万円です。",
      "360万円はつみたて投資枠120万円と成長投資枠240万円を合わせた年間投資上限です。",
      "240万円は成長投資枠の年間投資上限で、総枠ではありません。",
      "1,200万円は成長投資枠で使える非課税保有限度額（総枠の内数）です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "株式を100株、1株1,250円で購入し、1株1,400円で全株売却した。売買手数料・税金を考えない売却益はいくらか。",
    "choices": [
      "140,000円",
      "15,000円",
      "1,500円",
      "125,000円"
    ],
    "answer": 1,
    "explanation": "売却益＝（1,400円－1,250円）×100株＝150円×100＝15,000円。140,000円は売却代金全体、125,000円は取得代金全体です。両者の差だけが売買益になります。",
    "topic": "株式譲渡損益",
    "sourceUrl": "",
    "id": "fp2-088",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "為替が1ドル140円から1ドル150円になった場合、為替の変化として最も適切なものはどれか。",
    "choices": [
      "円高・ドル安",
      "円とドルがともに上昇",
      "円安・ドル高",
      "為替変動なし"
    ],
    "answer": 2,
    "explanation": "1ドル140円から150円への変化は、1ドルに必要な円が10円増えたため円安・ドル高です。円高・ドル安はその逆で、通貨ペアの両方が同じ方向に高くなるという説明や変動なしという説明も当てはまりません。",
    "topic": "為替",
    "sourceUrl": "",
    "id": "fp2-089",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "信託報酬について最も適切な記述はどれか。",
    "choices": [
      "信託報酬は投資信託の基準価額が上昇した場合にのみ計算される税金である",
      "信託報酬は投資信託の解約時だけ支払う費用で、日々の基準価額には影響しない",
      "投資信託の運用・管理にかかる継続的な費用である",
      "信託報酬は投資信託を購入するときだけ支払い、保有期間中には発生しない費用である"
    ],
    "answer": 2,
    "explanation": "信託報酬は投資信託の運用・管理の対価として、保有期間中に信託財産から継続的に差し引かれる費用です。相場が上がったときだけの税金ではなく、購入時だけ・解約時だけ発生する費用でもありません。",
    "topic": "投資信託の費用",
    "sourceUrl": "",
    "id": "fp2-090",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "事業による売上収入500万円、商品の仕入費用120万円、事務所家賃60万円とする。これらがすべて必要経費で、ほかの収支や調整がない場合の事業所得はいくらか。",
    "choices": [
      "380万円",
      "320万円",
      "440万円",
      "500万円"
    ],
    "answer": 1,
    "explanation": "必要経費は仕入費用120＋家賃60＝180万円。事業所得＝収入500－経費180＝320万円。380万円は家賃60万円を控除し忘れた場合、440万円は仕入費用120万円を控除し忘れた場合、500万円は両方の必要経費を控除し忘れた場合です。",
    "topic": "事業所得",
    "sourceUrl": "",
    "id": "fp2-091",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "grounded_distractor_review_v22"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の給与収入750万円、給与から天引きされた社会保険料80万円、源泉所得税40万円とする。給与所得控除額は法定の計算で求め、所得金額調整控除・特定支出控除などの調整はない。給与所得の金額はいくらか。",
    "choices": [
      "565万円",
      "525万円",
      "485万円",
      "750万円"
    ],
    "answer": 0,
    "explanation": "給与所得控除額＝750万円×10％＋110万円＝185万円。給与所得＝750－185＝565万円です。525万円は源泉所得税40万円、485万円は社会保険料80万円まで差し引いた誤りです。750万円は控除前の給与収入です。社会保険料控除は所得控除で、給与所得の算出後に扱います。源泉所得税は所得を計算する経費ではありません。",
    "topic": "給与所得",
    "sourceUrl": "https://www.nta.go.jp/english/taxes/individual/12012.htm",
    "id": "fp2-092",
    "revision": 57,
    "createdVersion": 8,
    "lawReferenceDate": "2025-12-01",
    "contentReview": "v57_limited_primary_source_and_conditions_review",
    "choiceExplanations": [
      "正解。750－（750×10％＋110）＝565万円。",
      "給与所得565万円から源泉所得税40万円を誤って控除した額です。",
      "給与所得565万円から社会保険料80万円を誤って控除した額です。",
      "給与所得控除前の収入額です。"
    ],
    "taxYear": 2025,
    "sourceLabel": "国税庁：給与所得の計算",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.57：限定論点を一次資料と照合。適用年・設例条件・未確認範囲はFOCUSED_REVIEW_V57.csvに記録。全面監修ではありません。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の総所得金額等が300万円、年間の控除対象医療費25万円、その医療費を補てんした保険金5万円の場合、通常の医療費控除額はいくらか（他の調整なし）。",
    "choices": [
      "15万円",
      "20万円",
      "5万円",
      "10万円"
    ],
    "answer": 3,
    "explanation": "医療費控除額＝25万円－補填保険金5万円－差引基準額10万円＝10万円。15万円は保険金による補填5万円を控除し忘れた場合（25－10）、20万円は差引基準額10万円を控除し忘れた場合（25－5）、5万円は補填保険金5万円を誤って二重に控除した場合（25－5－5－10）です。 総所得金額等300万円の5％は15万円で、10万円との比較では小さい10万円を差し引きます。総所得金額等が200万円未満なら5％相当額を使います。保険金等は給付の目的となる医療費を限度に控除し、余りを他の医療費から差し引きません。控除額の上限は200万円です。",
    "topic": "医療費控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/shinkoku/tokushu/keisubetsu/iryou-koujo.htm",
    "id": "fp2-093",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：令和7年分の医療費控除",
    "contentReview": "v58_limited_primary_source_review",
    "taxYear": 2025,
    "sourceCheckedDate": "2026-10-13",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "所得控除40万円によって課税所得が40万円減少する。減少する部分の所得税率は20％、住民税の所得割税率は10％とする。所得税の減税額のみはいくらか（復興特別所得税等は考慮しない）。",
    "choices": [
      "12万円",
      "8万円",
      "40万円",
      "4万円"
    ],
    "answer": 1,
    "explanation": "所得税の軽減額は40万円×20％＝8万円です。12万円は住民税の減少分40万円×10％＝4万円まで加えた場合、40万円は所得控除額そのものを税額控除と誤解した場合、4万円は住民税の10％だけを掛けた場合です。",
    "topic": "所得控除と税率",
    "sourceUrl": "",
    "id": "fp2-094",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "grounded_distractor_review_v22"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "配当所得の説明として最も適切なものはどれか。",
    "choices": [
      "個人が受け取る上場株式等の売却益は、原則として配当所得である",
      "貸付用不動産の賃料収入は、原則として配当所得である",
      "法人から受け取る剰余金の配当などが該当する",
      "法人から受け取る剰余金の配当は、原則として雑所得である"
    ],
    "answer": 2,
    "explanation": "会社からの利益配当などは配当所得に該当します。株式売却益は通常、譲渡所得等の扱いです。",
    "topic": "所得区分",
    "sourceUrl": "",
    "id": "fp2-095",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "株式の売却益は一般に株式等の譲渡所得等に分類されます。",
      "建物の賃料は原則として不動産所得です。",
      "正解。法人の剰余金の配当などは配当所得です。",
      "法人からの剰余金配当は原則雑所得ではなく配当所得です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の所得税の基礎控除について、合計所得金額が100万円の居住者（他の適用要件を満たす）の基礎控除額はいくらか。",
    "choices": [
      "48万円",
      "58万円",
      "88万円",
      "95万円"
    ],
    "answer": 3,
    "explanation": "2025年分について合計所得金額132万円以下の基礎控除は95万円です。58万円は改正後の原則的な基礎控除額で、低所得者に対する加算を含みません。88万円は合計所得金額132万円超336万円以下の区分、48万円は改正前の原則額です。 本問は2025年分の所得税を対象とします。改正の原則施行日は2025年12月1日で、2025年分に適用されます。所得の対象年と施行日は区別し、別年分にこの金額をそのまま当てはめません。",
    "topic": "所得税の基礎控除",
    "sourceUrl": "https://www.nta.go.jp/users/gensen/2025kiso/index.htm",
    "id": "fp2-096",
    "revision": 57,
    "createdVersion": 8,
    "lawReferenceDate": "2025-12-01",
    "contentReview": "v57_limited_primary_source_and_conditions_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "taxYear": 2025,
    "sourceLabel": "国税庁：令和7年度基礎控除改正",
    "reviewNote": "Ver.57：限定論点を一次資料と照合。適用年・設例条件・未確認範囲はFOCUSED_REVIEW_V57.csvに記録。全面監修ではありません。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "自宅を賃貸して受け取る家賃収入が原則として属する所得区分はどれか（事業的規模等による特例の細部は考えない）。",
    "choices": [
      "給与所得",
      "不動産所得",
      "一時所得",
      "利子所得"
    ],
    "answer": 1,
    "explanation": "土地・建物等の貸付けから生じる所得は原則として不動産所得です。",
    "topic": "不動産所得",
    "sourceUrl": "",
    "id": "fp2-097",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "家賃収入は雇用の対価ではないので給与所得ではありません。",
      "正解。土地・建物の貸付けから生じる所得は原則不動産所得です。",
      "一時所得は一時的な利益等の一定の所得区分で、通常の継続的賃料収入とは異なります。",
      "利子所得は公社債や預貯金の利子等に関する所得区分です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "国税である組み合わせはどれか。",
    "choices": [
      "不動産取得税と固定資産税",
      "住民税と事業税",
      "所得税と相続税",
      "固定資産税と都市計画税"
    ],
    "answer": 2,
    "explanation": "国税の組み合わせは所得税と相続税です。不動産取得税・事業税は都道府県税、固定資産税・都市計画税は市町村税（東京都23区等は例外的な取扱いあり）、住民税は地方税です。税名だけでなく課税主体で整理します。",
    "topic": "国税と地方税",
    "sourceUrl": "",
    "id": "fp2-098",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v43_options_explanation_individual_review",
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "国民年金の学生納付特例制度の所得審査について、適切なものはどれか。",
    "choices": [
      "学生本人の前年所得が審査対象であり、家族の所得の多寡は原則問われない",
      "学生本人と父母の前年所得を合算して基準を満たす必要がある",
      "学生本人の収入の有無だけで判定され、所得額は問われない",
      "世帯主だけの前年所得で判定する"
    ],
    "answer": 0,
    "explanation": "学生納付特例の審査では原則として申請する学生本人の前年所得を確認します。家族の所得の多寡は問いません。所得と収入を混同しないことが重要です。",
    "topic": "雑所得",
    "sourceUrl": "https://www.nenkin.go.jp/service/yougo/kagyo/gakuseinofu.html",
    "id": "fp2-099",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v58_limited_primary_source_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "sourceLabel": "日本年金機構：学生納付特例・追納",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "損益通算について最も適切な説明はどれか。",
    "choices": [
      "不動産所得の赤字は、原因や費用の内容を問わずすべて他の所得と通算できる",
      "一定の所得の損失を、所定のルールで他の所得と通算できる制度",
      "事業所得の赤字は要件なくすべての所得と損益通算でき、分離課税所得も区別しない",
      "上場株式等の譲渡損失は、原則として給与所得から自由に差し引ける"
    ],
    "answer": 1,
    "explanation": "損益通算は制度で認められた所得の損失を他の所得から差し引く仕組みで、対象・例外があります。",
    "topic": "損益通算",
    "sourceUrl": "",
    "id": "fp2-100",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "不動産所得の赤字には土地取得に係る借入金利子に対応する部分等、損益通算できないものがあります。",
      "正解。一定の赤字を法令に定める範囲で他の所得と通算する制度です。",
      "事業所得の赤字もすべて無条件に通算できるわけではなく、対象所得と個別制限があります。",
      "株式等の譲渡損失は原則として給与所得と直接損益通算できません。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "敷地面積250㎡、建築面積125㎡、延べ面積375㎡の建物について建ぺい率と容積率の組み合わせはどれか（算入・不算入の調整なし）。",
    "choices": [
      "150％・50％",
      "50％・150％",
      "33.3％・150％",
      "50％・200％"
    ],
    "answer": 1,
    "explanation": "建ぺい率＝建築面積125÷敷地面積250×100＝50％、容積率＝延べ面積375÷敷地面積250×100＝150％。150％・50％は2つの比率を取り違えた場合、33.3％は建築面積125を延べ面積375で割った場合、200％は敷地面積250を建築面積125で割った場合の数値です。",
    "topic": "建ぺい率と容積率",
    "sourceUrl": "",
    "id": "fp2-101",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "grounded_distractor_review_v22"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "賃貸物件の年間満室賃料は360万円、年間空室損失は24万円、年間運営費用は66万円である。購入価格は5,400万円、取得時諸費用は300万円とする。取得時諸費用も投下資金に含めた実質利回りとして、最も近いものはどれか。",
    "choices": [
      "約4.7％",
      "約5.0％",
      "約5.2％",
      "約6.3％"
    ],
    "answer": 0,
    "explanation": "年間純収益＝360－24－66＝270万円。投下資金＝5,400＋300＝5,700万円。実質利回り＝270÷5,700×100＝約4.7％。約5.0％は取得時諸費用300万円を分母に含めない場合（270÷5,400）、約5.2％は空室損失24万円を控除しない場合（294÷5,700）、約6.3％は空室損失と運営費用を両方とも控除しない場合（360÷5,700）です。",
    "topic": "実質利回り",
    "sourceUrl": "",
    "id": "fp2-102",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "grounded_distractor_review_v22"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "年間満室賃料が240万円、年間空室損失が40万円の賃貸物件がある。購入価格は4,800万円、取得時諸費用は200万円とする。空室損失を考慮せず、購入価格のみを分母とする表面利回りはどれか。",
    "choices": [
      "5.0％",
      "約4.2％",
      "4.8％",
      "4.0％"
    ],
    "answer": 0,
    "explanation": "表面利回り＝年間満室賃料240÷購入価格4,800×100＝5.0％。約4.2％は空室損失40万円を控除した賃料200万円を分子に用いた場合（200÷4,800）、4.8％は取得時諸費用を含む5,000万円を分母に用いた場合（240÷5,000）、4.0％は空室損失を控除し取得時諸費用も分母に含めた場合（200÷5,000）です。",
    "topic": "表面利回り",
    "sourceUrl": "",
    "id": "fp2-103",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "grounded_distractor_review_v22"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "土地の登記記録の権利部（甲区）に記録される事項として最も適切なものはどれか。",
    "choices": [
      "売買による所有権移転",
      "金融機関を権利者とする抵当権の設定",
      "通行のための地役権の設定",
      "土地の地目と地積"
    ],
    "answer": 0,
    "explanation": "権利部（甲区）は所有権に関する登記事項（所有権の移転等）を記録します。②抵当権・③地役権は所有権以外の権利であり原則乙区、④地目・地積は表題部です。",
    "topic": "不動産登記",
    "sourceUrl": "https://www.moj.go.jp/MINJI/minji02.html",
    "id": "fp2-104",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "法務省：登記制度の説明",
    "choiceExplanations": [
      "正解。甲区は所有権に関する登記事項を記録する区分です。",
      "建物の構造は主に表題部で扱う事項です。",
      "抵当権は通常乙区で扱い、甲区の記録ではありません。",
      "口座残高は不動産の登記記録に記載されません。"
    ],
    "contentReview": "v51_official_source_based_limited_rule_review",
    "verificationStatus": "v51_rule_limited_answer_and_choice_review_not_full_certification"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "土地を4,800万円で譲渡し、取得費3,000万円、譲渡費用200万円の場合、単純計算による譲渡所得はいくらか（特別控除等なし）。",
    "choices": [
      "1,400万円",
      "1,800万円",
      "1,600万円",
      "2,000万円"
    ],
    "answer": 2,
    "explanation": "譲渡所得は4,800－3,000－200＝1,600万円です。1,800万円は譲渡費用を控除し忘れた額、1,400万円は費用を二重控除した額、2,000万円は譲渡費用を加算した額です。",
    "topic": "譲渡所得",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/joto/3202.htm",
    "id": "fp2-105",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：制度・税務の解説",
    "contentReview": "calculation_and_distractor_check_v18",
    "choiceExplanations": [
      "譲渡費用200万円を二度引き、4,800－3,000－200－200＝1,400万円とした計算です。",
      "譲渡費用200万円を忘れ、4,800－3,000＝1,800万円とした計算です。",
      "正解。譲渡価額4,800－取得費3,000－譲渡費用200＝1,600万円。",
      "譲渡費用200万円を差し引かず加えてしまい、4,800－3,000＋200＝2,000万円とした計算です。"
    ]
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "不動産の鑑定評価手法のうち、「類似物件の取引事例を比較して価格を求める」方法はどれか。",
    "choices": [
      "収益還元法",
      "原価法",
      "費用配分法",
      "取引事例比較法"
    ],
    "answer": 3,
    "explanation": "取引事例比較法は類似物件の取引価格を修正・補正して対象不動産の価格を試算します。",
    "topic": "鑑定評価",
    "sourceUrl": "",
    "id": "fp2-106",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "収益還元法は将来の純収益等に着目して価値を求めます。",
      "原価法は再調達原価などのコストに着目します。",
      "「費用配分法」は設問の説明に対応する主要な不動産鑑定評価の三手法ではありません。",
      "正解。比較可能な取引事例を修正・比較するのは取引事例比較法です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "投資用不動産において、空室率が上昇しその他の条件が変わらないときの一般的な影響はどれか。",
    "choices": [
      "空室率が上昇しても、表面利回りの計算に使う想定年間賃料と実際の家賃収入は必ず一致する",
      "空室率が上昇すると、物件価格が同じなら実質利回りは必ず高まる",
      "実際の賃料収入は減少しやすい",
      "空室率が上昇すると、満室時に想定した年間賃料収入より実際の収入が増える"
    ],
    "answer": 2,
    "explanation": "空室が増えると賃料収入が減り、実質利回りやキャッシュフローが悪化する可能性があります。",
    "topic": "不動産投資",
    "sourceUrl": "",
    "id": "fp2-107",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "空室率が上昇すると、満室時想定賃料と実収入は通常一致しなくなります。「必ず一致する」は適切ではありません。",
      "物件価格が同じでも空室増で実収入が減れば、実質利回りは低下しやすく、「必ず高まる」は逆です。",
      "正解。空室期間が長くなるほど受け取れる家賃は減少しやすく、収益・キャッシュフローに悪影響が生じ得ます。",
      "空室率上昇だけで満室時想定賃料を上回る家賃収入が生じるとはいえません。"
    ]
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "敷地面積180㎡、指定容積率300％、指定建ぺい率60％の土地がある。前面道路幅員などの制限・緩和を考慮しない場合、容積率に基づく延べ面積の上限はどれか。",
    "choices": [
      "540㎡",
      "108㎡",
      "180㎡",
      "300㎡"
    ],
    "answer": 0,
    "explanation": "容積率に基づく延べ面積上限＝180㎡×300％＝540㎡。108㎡は建ぺい率60％を用いて求める建築面積の上限、180㎡は敷地面積、300㎡は指定容積率の300という数値を面積と取り違えた値です。",
    "topic": "容積率",
    "sourceUrl": "",
    "id": "fp2-108",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "verificationStatus": "arithmetic_verified_only"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "不動産取得税と固定資産税の違いについて、最も適切な記述はどれか。",
    "choices": [
      "不動産取得税は市町村が毎年1月1日時点の所有者に課す税である",
      "不動産取得税は都道府県税で、売買・贈与等による取得が原則対象となる一方、相続による取得は課税されない",
      "不動産取得税は国税であり、相続による取得だけに課税される",
      "不動産取得税と固定資産税は同一税目で、納付時期だけが異なる"
    ],
    "answer": 1,
    "explanation": "不動産取得税は土地や家屋を売買・贈与等で取得したときに原則都道府県が課す地方税で、相続による取得は課税されません。①は固定資産税の課税主体・賦課期日と混同、③は課税主体と取得原因の逆転、④は取得時の税と保有に伴う税の混同です。",
    "topic": "不動産取得税",
    "sourceUrl": "",
    "id": "fp2-109",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "v51_official_source_based_limited_rule_review",
    "verificationStatus": "v51_rule_limited_answer_and_choice_review_not_full_certification"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "自己所有の賃貸用建物について、維持費用を含む収支計画を立てる際の対応として最も適切なものはどれか。",
    "choices": [
      "固定資産税や修繕費、空室損失を見込む",
      "空室率を見込む場合でも、固定資産税や管理費は収支計画から除外してよい",
      "建物の修繕費は、竣工後一定年数が経過しても収支計画上は見込む必要がない",
      "ローン返済額は支出ではなく、毎年の賃貸収支を計算するときに一切考慮しない"
    ],
    "answer": 0,
    "explanation": "賃貸経営の収支は、空室・修繕・税金・借入返済等を考慮して試算します。",
    "topic": "不動産事業計画",
    "sourceUrl": "",
    "id": "fp2-110",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "正解。空室損失・税金・修繕などを見込むことで現実的な収支を試算できます。",
      "固定資産税や管理費は空室率とは独立して発生し得るため、除外できません。",
      "修繕は経年により必要となり得るので、見込まない計画は適切ではありません。",
      "不動産の事業収支・手元資金の見通しでは借入返済を無条件に無視できません（会計上の費用区分とは別です）。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "配偶者と子2人が法定相続人である場合、遺言や特別受益等を考えない子1人の法定相続分はどれか。",
    "choices": [
      "2分の1",
      "6分の1",
      "4分の1",
      "3分の1"
    ],
    "answer": 2,
    "explanation": "配偶者と子が相続人の場合、配偶者1/2・子全体1/2。子2人で均等に分けるため各子は1/4です。1/2は子全体の法定相続分を各子の持分と混同した場合、1/3は配偶者と子2人の3人に均等配分した場合です。1/6は設問の条件から通常の法定相続分としては導けません。",
    "topic": "法定相続分",
    "sourceUrl": "",
    "id": "fp2-111",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "grounded_distractor_review_v22"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "遺産1億2,000万円を、配偶者と被相続人の父母2人が法定相続分で取得する。父母は同順位であり、遺言・相続放棄等はない。父1人の法定相続額はいくらか。",
    "choices": [
      "4,000万円",
      "6,000万円",
      "8,000万円",
      "2,000万円"
    ],
    "answer": 3,
    "explanation": "法定相続分の割合を決めてから、遺産額に乗じます。子・父母・兄弟姉妹が複数人なら、その集団の相続分をさらに同順位の人数で分けます。",
    "topic": "法定相続分",
    "sourceUrl": "",
    "id": "fp2-112",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "父母全体に認められる1/3の取得額であり、父1人分ではありません。",
      "配偶者と子が相続人の場合の子全体の1/2を使った額。",
      "配偶者の法定相続分2/3に相当する額。",
      "正解。父母全体1/3を2人で均分し、1億2,000×1/3÷2＝2,000万円。"
    ],
    "contentReview": "v46_first_touch_case_and_choices",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "被相続人Aさんを被保険者とする生命保険契約で、Aさん自身が保険料を全額負担していた。Aさんの死亡により、法定相続人である配偶者と子2人が死亡保険金を合計5,000万円受け取った。3人とも相続放棄はしておらず、養子等の特殊事情がない。この死亡保険金の相続税における非課税限度額の総額はどれか。",
    "choices": [
      "1,000万円",
      "5,000万円",
      "1,500万円",
      "500万円"
    ],
    "answer": 2,
    "explanation": "被相続人を被保険者とし、被相続人が保険料を負担した死亡保険金を相続人が受け取る場合の非課税限度額は、500万円×法定相続人の数です。配偶者1人＋子2人＝3人なので、500万円×3＝1,500万円。受取保険金の総額5,000万円と非課税限度額1,500万円は別の概念です。受取人が相続人でない場合などには扱いが異なります。",
    "topic": "死亡保険金の非課税枠",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4114.htm",
    "id": "fp2-113",
    "revision": 49,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁 No.4114（相続税の課税対象になる死亡保険金）",
    "contentReview": "calculation_and_distractor_check_v18",
    "choiceExplanations": [
      "500万円×2人と計算すると1,000万円ですが、配偶者1人と子2人で法定相続人は3人です。",
      "受取額5,000万円の全額が非課税になるわけではありません。500万円×法定相続人3人が上限です。",
      "正解。500万円×法定相続人3人＝1,500万円です。",
      "500万円は法定相続人1人当たりの枠で、今回は3人です。"
    ]
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "遺産として金融資産5,000万円と借入金1,200万円があるとき、単純な正味財産額はいくらか（ほかの財産・債務なし）。",
    "choices": [
      "6,200万円",
      "1,200万円",
      "3,800万円",
      "5,000万円"
    ],
    "answer": 2,
    "explanation": "単純な正味財産額＝金融資産5,000－借入金1,200＝3,800万円。6,200万円は借入金を加算した場合、1,200万円は債務額だけを答えた場合、5,000万円は借入金を差し引かず金融資産額を答えた場合です。",
    "topic": "正味財産",
    "sourceUrl": "",
    "id": "fp2-114",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "contentReview": "grounded_distractor_review_v22"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "贈与税の暦年課税で、2025年中に父から100万円、母から100万円の贈与を受けた場合、基礎控除後の課税価格はいくらか（ほかに贈与なし・非課税特例なし）。",
    "choices": [
      "200万円",
      "110万円",
      "90万円",
      "0万円"
    ],
    "answer": 2,
    "explanation": "暦年課税の基礎控除110万円は、受贈者ごとの年額です。父100＋母100＝200万円、200－110＝90万円。200万円は基礎控除を差し引かない場合、110万円は基礎控除額そのものを答えた場合、0万円は父母それぞれの贈与に110万円ずつ基礎控除を適用できると誤解した場合です。",
    "topic": "暦年課税の基礎控除",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4410.htm",
    "id": "fp2-115",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：複数贈与者からの贈与",
    "contentReview": "v58_limited_primary_source_review",
    "taxYear": 2025,
    "sourceCheckedDate": "2026-10-13",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "2025年中の贈与について、相続時精算課税制度の一般的な説明として最も適切なものはどれか（住宅取得等の特例は考慮しない）。",
    "choices": [
      "同じ贈与者について相続時精算課税を選択した後も、毎年自由に暦年課税へ戻すことができる",
      "父母や祖父母などの一定の贈与者からの贈与について、要件を満たす受贈者が選択できる",
      "相続時精算課税は、贈与者が選択すれば受贈者の要件を確認せず自動適用される",
      "相続時精算課税を選択すると、2024年以降の年110万円の基礎控除も適用されなくなる"
    ],
    "answer": 1,
    "explanation": "相続時精算課税は、父母・祖父母等の一定の贈与者と受贈者の年齢・親族関係等の要件を満たし、受贈者が所定の届出を行って適用します。同じ贈与者について一度選択すると、その後の贈与を暦年課税に自由に戻すことはできません。2024年以後の贈与には年110万円の相続時精算課税の基礎控除があります。 一般の年齢要件は贈与年の1月1日時点で贈与者60歳以上、受贈者18歳以上です。受贈者は贈与者の直系卑属である推定相続人または孫であるなどの要件を満たす必要があり、贈与者が単独で選択する制度ではありません。",
    "topic": "相続時精算課税",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4410.htm",
    "id": "fp2-116",
    "revision": 58,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：複数贈与者からの贈与",
    "choiceExplanations": [
      "相続時精算課税を選択した特定贈与者からの贈与について、後から暦年課税へ任意に切り替えることはできません。",
      "正解。所定の贈与者・受贈者の要件と届出が必要です。",
      "贈与者だけの意思では適用されません。受贈者の要件と所定の手続きを確認します。",
      "2024年1月1日以後の贈与には、相続時精算課税に年110万円の基礎控除があります。"
    ],
    "taxYear": 2025,
    "sourceCheckedDate": "2026-10-13",
    "contentReview": "v58_limited_primary_source_review",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "相続税の課税価格合計8,000万円、法定相続人3人の場合、課税遺産総額はどれか（基礎控除以外の調整等なし）。",
    "choices": [
      "2,600万円",
      "3,200万円",
      "3,800万円",
      "4,400万円"
    ],
    "answer": 1,
    "explanation": "基礎控除は3,000＋600×3＝4,800万円。課税遺産総額は8,000－4,800＝3,200万円です。2,600万円は法定相続人4人、3,800万円は2人、4,400万円は1人として算出した場合に対応します。",
    "topic": "課税遺産総額",
    "sourceUrl": "https://www.keisan.nta.go.jp/oshirase/sozoku/yohihantei/goriyomae/hoteisozokunin.html",
    "id": "fp2-117",
    "revision": 4,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "reviewedAt": "2026-10-12",
    "sourceLabel": "国税庁：制度・税務の解説",
    "contentReview": "v25_primary_source_or_formula_review",
    "sourceName": "制度確認用の公的資料",
    "verificationStatus": "source_checked_selected_points"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "贈与契約の成立について最も適切なものはどれか。",
    "choices": [
      "贈与契約の成立には、原則として家庭裁判所の許可が必要である",
      "贈与者が無償で与える意思を表示し、受贈者が受諾して成立する",
      "贈与者が贈与すると述べれば、受贈者が受諾しなくても贈与契約は成立する",
      "贈与契約は、当事者が口頭で合意しても成立せず、必ず書面が必要になる"
    ],
    "answer": 1,
    "explanation": "贈与は無償で与える意思表示と受け取る意思表示の合致により成立する契約です。",
    "topic": "贈与契約",
    "sourceUrl": "",
    "id": "fp2-118",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "贈与契約の成立に家庭裁判所の許可が一般的に必要なわけではありません。",
      "正解。贈与者の無償譲渡の意思と受贈者の受諾が合致して成立します。",
      "相手方の承諾が必要であり、贈与者の一方的発言だけでは契約になりません。",
      "原則として口頭でも贈与契約は成立します（履行前の解除の取扱いは別）。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "被相続人の遺産分割協議に関する説明として最も適切なものはどれか。",
    "choices": [
      "遺産分割協議は、原則として被相続人の死亡前に共同相続人だけで確定できる",
      "遺産分割協議は、原則として共同相続人の過半数が同意すれば成立する",
      "共同相続人のうち一人が反対しても、財産額の過半数を承継する相続人の合意だけで成立する",
      "原則として共同相続人全員の合意が必要"
    ],
    "answer": 3,
    "explanation": "共同相続人全員の合意により遺産分割の内容を決めるのが原則です。",
    "topic": "遺産分割",
    "sourceUrl": "",
    "id": "fp2-119",
    "revision": 3,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "遺産分割協議は相続開始後の共同相続人による協議です。",
      "過半数の同意だけでは原則成立しません。",
      "取得財産の金額による多数決でも、原則として協議成立とはなりません。",
      "正解。遺産分割協議には原則として共同相続人全員の合意が必要です。"
    ],
    "contentReview": "v46_first_touch_choice_rationale",
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "相続税の課税価格計算における債務控除の基本的な考え方として適切なものはどれか。",
    "choices": [
      "被相続人の一定の債務などを財産から差し引くことがある",
      "債務控除は相続財産の価額を増額する仕組みであり、借入金の残高は加算する",
      "被相続人の住宅ローン残高は、死亡時には自動的にすべて債務控除の対象外となる",
      "遺産の取得者が実際に負担する債務も、被相続人の債務であれば原則として控除できない"
    ],
    "answer": 0,
    "explanation": "相続税の課税価格を計算する際、要件を満たす債務や葬式費用等を控除できる場合があります。",
    "topic": "債務控除",
    "sourceUrl": "",
    "id": "fp2-120",
    "revision": 2,
    "createdVersion": 8,
    "lawReferenceDate": null,
    "choiceExplanations": [
      "正解。相続税では所定の債務や葬式費用を相続財産の価格から控除できる場合があります。",
      "債務控除は一定の債務を「差し引く」仕組みであり、課税財産に上乗せするものではありません。",
      "住宅ローンも被相続人の債務なら控除対象となり得ますが、団体信用生命保険などで弁済される場合等は個別確認が必要です。",
      "実際に負担する所定の債務について控除が認められる場合があり、「原則控除できない」は逆です。"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "労災保険料について、会社が従業員の毎月の給与から保険料の半額を控除し、残り半額を会社が負担するのが原則である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。労働者災害補償保険の保険料は原則として事業主が全額負担します。従業員と事業主で保険料を分担する雇用保険等とは区別します。",
    "topic": "労災保険",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-121",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "国民年金の学生納付特例の審査で、原則として学生本人だけでなく父母の所得も合算して判定される。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "学生納付特例は原則として学生本人の前年所得で審査します。家族の所得の多寡は問いません。",
    "topic": "学生納付特例",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-122",
    "contentReview": "v58_limited_primary_source_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/yougo/kagyo/gakuseinofu.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：学生納付特例・追納",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "学生納付特例が承認された期間は、老齢基礎年金の受給資格期間には含まれるが、追納しないと年金額の計算には反映されない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "学生納付特例期間は受給資格期間には算入されますが、追納しなければ老齢基礎年金額には算入されません。",
    "topic": "学生納付特例と年金額",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-123",
    "contentReview": "v58_limited_primary_source_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/yougo/kagyo/gakuseinofu.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：学生納付特例・追納",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "AさんがiDeCoで元本変動のある投資信託を選んだ場合、拠出額が同じでも、運用結果によって将来受け取る金額が変わることがある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。iDeCoは確定拠出年金制度で、運用商品を選択し、成果によって受取額が変化します。投資信託に元本保証はありません。",
    "topic": "iDeCoの運用",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-124",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "true_false",
    "question": "国民年金の付加保険料を24カ月納付した場合、付加年金の加算年額は原則4,800円となる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。付加年金の年額＝200円×付加保険料納付月数です。200円×24カ月＝4,800円（年額）。付加保険料（月額400円）と付加年金の加算年額を混同しないようにします。 付加保険料として支払う額は月400円ですが、年金の加算年額に使う係数は1月分につき200円です。月額の納付額と受取年額の計算を区別します。",
    "topic": "付加年金",
    "createdVersion": 9,
    "revision": 58,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-125",
    "contentReview": "v58_limited_primary_source_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/kokunen/hokenryo/fukanofu.html",
    "sourceLabel": "日本年金機構：付加保険料",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "国民年金の付加年金額（年額）を算定する際、付加保険料納付月数に乗じる額はどれか。",
    "choices": [
      "200円",
      "1,000円",
      "400円"
    ],
    "answer": 0,
    "explanation": "国民年金の付加年金の年額は200円×付加保険料納付済月数で求めます。400円は付加保険料の月額であり、年金額の乗数200円と区別します。1,000円はどちらの法定額でもありません。※額は制度改正の確認対象です。 付加保険料として支払う額は月400円ですが、年金の加算年額に使う係数は1月分につき200円です。月額の納付額と受取年額の計算を区別します。",
    "topic": "付加年金計算",
    "createdVersion": 9,
    "revision": 58,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-126",
    "contentReview": "v58_limited_primary_source_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/kokunen/hokenryo/fukanofu.html",
    "sourceLabel": "日本年金機構：付加保険料",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "国民年金の学生納付特例期間について、追納が承認された月の前からさかのぼって追納できるのは、原則として何年以内の期間か。",
    "choices": [
      "2年",
      "5年",
      "10年"
    ],
    "answer": 2,
    "explanation": "承認月の前10年以内の対象期間について追納が可能です。追納すれば将来の年金額を増やせます。 ここでいう承認月は、学生納付特例の当初の承認月ではなく、後から保険料を納める追納の承認月です。特例期間の翌年度から数えて3年度目以降に追納する場合は加算額が付くため、当時の保険料だけで済むとは限りません。老齢基礎年金を受け取れる方は追納できません。",
    "topic": "学生納付特例と追納期限",
    "createdVersion": 9,
    "revision": 58,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-127",
    "contentReview": "v58_limited_primary_source_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/yougo/kagyo/gakuseinofu.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：学生納付特例・追納",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "年利が一定のとき、将来の目標額を得るために毎年積み立てる必要額を求める係数はどれか。",
    "choices": [
      "資本回収係数",
      "減債基金係数",
      "現価係数"
    ],
    "answer": 1,
    "explanation": "将来の目標額に減債基金係数を乗じると、毎年の必要積立額を計算できます。",
    "topic": "係数・減債基金",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-128",
    "contentReview": "v46_first_touch_choice_rationale",
    "choiceExplanations": [
      "資本回収係数は現在元金から各期の受取額等を求める係数です。",
      "正解。将来の目標額に対して毎年必要な積立額を求めるのは減債基金係数です。",
      "現価係数は将来の一時金額から現在価値を求める係数です。"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "毎年一定額を受け取りたい場合、その受取額を賄うために必要な現在の資金を求める係数はどれか。",
    "choices": [
      "年金現価係数",
      "年金終価係数",
      "終価係数"
    ],
    "answer": 0,
    "explanation": "各年の受取額から、その受取期間に必要な現在資金を計算するのは年金現価係数です。",
    "topic": "係数・年金現価",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-129",
    "contentReview": "v46_first_touch_choice_rationale",
    "choiceExplanations": [
      "正解。毎年の受取額を年金現価係数で現在価値へ換算します。",
      "年金終価係数は毎年の積立額から将来の累計額を求めます。",
      "終価係数は現在の一時金額を複利運用した将来価値を求めます。"
    ]
  },
  {
    "level": "3",
    "category": "ライフプランニングと資金計画",
    "format": "three_choice",
    "question": "国民年金の第1号被保険者となる人の例として最も適切なのはどれか（年齢・居住要件を満たすものとする）。",
    "choices": [
      "自営業者で厚生年金に加入していない人",
      "厚生年金加入者に扶養される配偶者で所定要件を満たす人",
      "厚生年金に加入する会社員"
    ],
    "answer": 0,
    "explanation": "自営業者等で厚生年金に加入していない所定の人は、国民年金第1号被保険者に該当します。",
    "topic": "公的年金の被保険者区分",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-130",
    "contentReview": "v46_first_touch_choice_rationale",
    "choiceExplanations": [
      "正解。所定要件を満たす自営業者等は第1号被保険者です。",
      "厚生年金被保険者に扶養され所定要件を満たす配偶者は通常第3号被保険者です。",
      "厚生年金加入の会社員は一般に国民年金第2号被保険者です。"
    ]
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "一般的な養老保険では、保険期間中の死亡時に死亡保険金、満期まで生存した場合に満期保険金が支払われる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。養老保険は死亡保障と生存時の満期保障を組み合わせた生命保険です。一般に定期保険には満期保険金がないため違いを確認します。",
    "topic": "養老保険",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-131",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "収入保障保険で死亡保険金を年金形式ではなく一時金で受け取ると、受け取る時点や金額の換算方法などによって年金形式の受取総額より少なくなることがある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。収入保障保険は遺族の生活資金を年金形式で準備する商品です。一時金に換算する際は所定の割引等で年金受取総額と異なる場合があります。契約条件によります。",
    "topic": "収入保障保険",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-132",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "確定年金の年金支払期間が10年で、受取開始3年後に被保険者が死亡した場合、残りの期間に係る年金は所定の受取人等へ支払われる仕組みがある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。確定年金は生死にかかわらず所定期間の支払を保証する設計です。被保険者死亡後の未払期間分も、所定の受取人等が受け取る場合があります。",
    "topic": "個人年金・確定年金",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-133",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "住宅の火災保険で火災補償を付けていれば、地震が原因で発生した火災の損害も、一般に地震保険がなくても必ず火災補償で支払われる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。地震・噴火またはこれらによる津波を原因とする火災・倒壊などは、一般的な火災保険では原則免責です。地震保険や契約上の特約などを区別します。",
    "topic": "火災保険と地震",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-134",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "true_false",
    "question": "飲食店が管理する床の水濡れで客が転倒・負傷し、店側に法律上の損害賠償責任が生じた場合、施設所有（管理）者賠償責任保険が対象となることがある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。店舗の施設・設備の所有、使用、管理に起因して第三者を負傷させた賠償責任を補償する保険です。販売した食品の欠陥で食中毒が生じた場合のPL保険とは事故原因が異なります。",
    "topic": "施設管理に関する賠償責任",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-135",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "他人に販売した食品が原因の食中毒による法律上の賠償責任に備える保険として適切なものはどれか。",
    "choices": [
      "生産物賠償責任保険（PL保険）",
      "施設所有（管理）者賠償責任保険",
      "使用者賠償責任保険"
    ],
    "answer": 0,
    "explanation": "製造・販売して引き渡した食品を原因とする食中毒で、第三者に対して法律上の賠償責任を負う場合はPL保険が検討対象です。店舗の床等の管理事故による賠償や、従業員の労災に伴う賠償とは事故原因・被害者が異なります。",
    "topic": "PL保険の対象",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-136",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。販売・引渡し後の食品を原因とする購入者の食中毒は、生産物事故による賠償責任に該当し得ます。",
      "施設管理の不備で店内の客が転倒する事故などを想定した補償で、販売食品そのものを原因とする事故とは区別します。",
      "従業員の労災事故に伴う使用者の賠償責任に備えるもので、購入者の食中毒は対象が異なります。"
    ]
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "保険事故が起こらず契約期間が満了したとき、一般に死亡保険金と同額の満期保険金を受け取れる生命保険はどれか。",
    "choices": [
      "収入保障保険",
      "養老保険",
      "定期保険"
    ],
    "answer": 1,
    "explanation": "養老保険は一定期間の死亡保障と、満期生存時の満期保険金を組み合わせる保険です。定期保険は通常、満期保険金がなく、収入保障保険は死亡保険金を年金形式などで受け取る設計の保険です。",
    "topic": "養老保険と定期保険",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-137",
    "contentReview": "v43_options_explanation_individual_review"
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "保険金の請求権について、保険法上の一般的な消滅時効期間は何年間か。",
    "choices": [
      "3年間",
      "10年間",
      "1年間"
    ],
    "answer": 0,
    "explanation": "保険法に基づく保険給付請求権などの消滅時効は、原則として3年です。",
    "topic": "保険法・時効",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-138",
    "contentReview": "v46_first_touch_choice_rationale",
    "choiceExplanations": [
      "正解。保険法上の保険給付請求権等の消滅時効は原則3年です。",
      "一般的な債権の時効を混同して10年を選ぶのは誤りです。",
      "保険法の保険給付請求権は原則1年ではなく3年です。"
    ]
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "一般の生命保険で、被保険者の余命が所定の期間以内と判断されると死亡保険金を生前に受け取れる特約はどれか。",
    "choices": [
      "リビング・ニーズ特約",
      "災害割増特約",
      "先進医療特約"
    ],
    "answer": 0,
    "explanation": "リビング・ニーズ特約は、通常余命6か月以内等の所定条件で死亡保険金の全部・一部を生前給付するものです。",
    "topic": "リビング・ニーズ",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-139",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。リビング・ニーズ特約は余命など所定条件を満たすと死亡保険金の一部等を生前に受け取れます。",
      "災害割増特約は所定の災害事故による死亡等の保障上乗せを目的とします。",
      "先進医療特約は所定の先進医療の技術料等に備えるもので、死亡保険金前払とは異なります。"
    ]
  },
  {
    "level": "3",
    "category": "リスク管理",
    "format": "three_choice",
    "question": "一般の自動車保険において、相手の自動車や塀など他人の財物に与えた損害の法的賠償に備えるのはどれか。",
    "choices": [
      "対物賠償保険",
      "車両保険",
      "人身傷害保険"
    ],
    "answer": 0,
    "explanation": "対物賠償保険は他人の財物への法律上の賠償責任に備える保険です。",
    "topic": "自動車・対物賠償",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "individually_compared_with_choices_statutory_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-140",
    "contentReview": "v46_first_touch_choice_rationale",
    "choiceExplanations": [
      "正解。他人の車・塀等の物的損害への法律上の賠償責任に備えます。",
      "車両保険は通常、自分の契約車両自体の損害に備えます。",
      "人身傷害保険は事故に伴う被保険者等の身体損害の補償です。"
    ]
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "日経平均株価は、東京証券取引所の全上場銘柄の株価を単純平均して求める指数である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。日経平均株価は日本経済新聞社が選定する225銘柄を対象とし、算出にも調整を行います。全上場銘柄の単純平均ではありません。",
    "topic": "日経平均",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-141",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "AさんがETFを証券取引所で買う場合、通常の上場株式と同様に、取引時間中の市場価格で売買注文を出すことができる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。ETFは上場投資信託です。取引所で市場価格を形成し、株式と同様に指値や成行など所定の注文方法で売買できます。基準価額と市場価格が一致する保証はありません。",
    "topic": "ETF",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-142",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "上場投資信託（ETF）の取引所での市場価格は、1日に1回算出される基準価額と常に完全に一致するため、取引時間中に値動きしない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。ETFの市場価格は需給などで取引時間中にも変化し、基準価額等と乖離する場合があります。基準価額が算出される頻度と、市場価格の変動は別です。",
    "topic": "ETFの費用",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-143",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "発行体や利率などの条件が同じ固定利付債券を比較する場合、一般に残存期間が長い債券の方が、市場金利変動による価格への影響は小さい。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。他の条件が同じなら、一般に残存期間が長い債券ほど市場金利変動の影響を受けやすくなります。市場金利上昇と価格下落の関係とは別に、感応度にも注目します。",
    "topic": "金利上昇と債券価格",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-144",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "true_false",
    "question": "Aさんが、値動きが必ずしも同じ方向ではない株式と債券を組み合わせることには、資産全体の値動きの振れ幅を抑える効果が期待できる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。相関の低い資産を組み合わせると分散効果が期待できます。ただし組入比率や相場環境によって効果は異なり、損失が完全になくなるわけではありません。",
    "topic": "分散と相関",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-145",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "額面100万円の債券のクーポンが年2％のとき、税引前の年間利子はいくらか。",
    "choices": [
      "2,000円",
      "20,000円",
      "200,000円"
    ],
    "answer": 1,
    "explanation": "税引前の年間利子＝額面100万円×2％＝20,000円です。2,000円は利率を0.2％と誤って扱った場合、200,000円は利率を20％として扱った場合です。",
    "topic": "債券・利子",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-146",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "X社株式の株価2,500円、1株当たり年間配当50円、BPS1,000円の場合、配当利回りはどれか。",
    "choices": [
      "5％",
      "2.5倍",
      "2％"
    ],
    "answer": 2,
    "explanation": "配当利回り＝50÷2,500×100＝2％。2.5倍は株価2,500円÷BPS1,000円によるPBRであり、配当利回りではありません。5％は配当50円÷BPS1,000円×100と、分母を株価ではなくBPSにした値です。",
    "topic": "配当利回り",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-147",
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "資産Aの期待収益率が年2％、資産Bが年6％で、AとBへの投資比率が50％ずつの場合、ポートフォリオの期待収益率はどれか。",
    "choices": [
      "3％",
      "4％",
      "8％"
    ],
    "answer": 1,
    "explanation": "加重平均利回り＝2％×50％＋6％×50％＝4％。3％は資産Bの期待収益率6％に投資比率50％を掛け、資産A分を落とした値。8％は2％＋6％と両資産の利回りを単純に足した値です。",
    "topic": "期待収益率",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-148",
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "外国通貨の値段が1米ドル＝145円から1米ドル＝135円になった場合、円についてどれか。",
    "choices": [
      "円安",
      "円高",
      "変化なし"
    ],
    "answer": 1,
    "explanation": "1ドル＝145円から135円へ変化すると、同じ1ドルを手に入れるための円が10円少なくなり、円高・ドル安です。円安は逆に1ドルを買うのに必要な円が増える状態で、「変化なし」でもありません。",
    "topic": "為替レート",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-149",
    "contentReview": "v43_options_explanation_individual_review"
  },
  {
    "level": "3",
    "category": "金融資産運用",
    "format": "three_choice",
    "question": "NISA口座の対象商品を保有する際、2024年開始の制度における非課税保有期間は原則どうなっているか。",
    "choices": [
      "最大20年間",
      "最大5年間",
      "期限なし"
    ],
    "answer": 2,
    "explanation": "2024年開始のNISAでは、非課税保有期間は無期限です。「最大5年」や「最大20年」は旧制度の非課税期間を連想させる選択肢で、新しい制度の保有期間には当てはまりません。※出題対象年を2024年開始制度に限定しています。",
    "topic": "NISA非課税期間",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.fsa.go.jp/policy/nisa2/know/",
    "sourceLabel": "公式資料（論点確認用）",
    "id": "fp3-150",
    "contentReview": "v43_options_explanation_individual_review"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "国内銀行の普通預金の利息について、一般に所得税等が所定の税率で源泉徴収され、原則として確定申告による精算を要しない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。国内預金の利息は原則として源泉分離課税により課税が完結します。給与の源泉徴収と異なり、原則として確定申告での精算対象になりません。非課税制度が適用される例外は別です。",
    "topic": "源泉分離課税",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-151",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "公的年金等の収入から算出する雑所得は、原則として給与所得控除額を差し引いて計算する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。公的年金等に係る雑所得は、原則として公的年金等の収入から公的年金等控除額を差し引きます。給与所得控除は給与所得の計算に使う別の制度です。",
    "topic": "公的年金等の雑所得",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-152",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "青色申告者に生じた所定の純損失は、法定の要件を満たせば、翌年以後3年間にわたり繰り越して控除できる場合がある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。青色申告者の純損失は、所定の要件で原則として翌年以後3年間繰り越して控除できます。ただし、特定非常災害による所定の純損失は5年間に延長される場合があります。本問は「3年間繰り越せる場合がある」ので正しい記述です。",
    "topic": "純損失の繰越控除",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-153",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "固定資産税は、原則として各市町村が課税する地方税であり、すべての納税者に対して国が一律に直接賦課する国税ではない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。固定資産税は地方税であり、原則として市町村が土地・家屋・償却資産などに課税します。東京都23区では都が課税するなどの取扱いがあります。",
    "topic": "地方税・固定資産税",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-154",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "true_false",
    "question": "扶養控除は所得控除に分類される一方、配当控除は所定の税額から差し引く税額控除に分類される。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。扶養控除は課税所得を求める際に所得から差し引く所得控除、配当控除は一定の要件で算出した所得税額から差し引く税額控除です。名称が似ていても控除する段階が違います。",
    "topic": "税額控除と所得控除",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-155",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "勤続30年の給与所得者が退職した場合、一般的な退職所得控除額はいくらか（障害退職等の特例なし）。",
    "choices": [
      "2,100万円",
      "1,500万円",
      "1,200万円"
    ],
    "answer": 1,
    "explanation": "20年まで800万円＋20年を超える10年×70万円＝1,500万円です。",
    "topic": "退職所得控除",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm",
    "sourceLabel": "公式資料（論点確認用）",
    "id": "fp3-156",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "30年間すべてに20年超部分の単価70万円を使うと30×70＝2,100万円となります。正しくは20年までの800万円を先に計算します。",
      "正解。20年まで800万円＋（30－20）年×70万円＝1,500万円です。",
      "勤続30年すべてに20年以下の単価40万円を使うと30×40＝1,200万円です。20年超部分は70万円です。"
    ]
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "iDeCoの加入者自身が支払った掛金について、所得税の所得控除は原則どれか。",
    "choices": [
      "社会保険料控除",
      "生命保険料控除",
      "小規模企業共済等掛金控除"
    ],
    "answer": 2,
    "explanation": "iDeCoで加入者本人が負担した掛金は小規模企業共済等掛金控除の対象です。社会保険料控除は国民年金保険料等、生命保険料控除は対象となる民間保険料等に適用されます。控除の区分を区別します。",
    "topic": "iDeCoの所得控除",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-157",
    "contentReview": "v60_limited_primary_source_review",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1135.htm",
    "sourceLabel": "国税庁 No.1135 小規模企業共済等掛金控除",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.60：所得控除区分・対象年・主要論点を限定点検。確認日と法令基準日は別。全例外・全法令の監修は未完了。"
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "20年を超える勤続年数に対する退職所得控除額の計算では、超過年数1年当たり原則何万円を加算するか。",
    "choices": [
      "60万円",
      "40万円",
      "70万円"
    ],
    "answer": 2,
    "explanation": "退職所得控除は20年を超える部分について、1年当たり70万円を加算して計算します。",
    "topic": "退職所得控除計算",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm",
    "sourceLabel": "公式資料（論点確認用）",
    "id": "fp3-158",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "20年超の加算単価は年60万円ではありません。",
      "40万円は20年以下の勤続年数1年当たりの基本単価です。",
      "正解。勤続20年を超える年数については、超過1年当たり70万円を加算します。"
    ]
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "所得税で、事業所得や不動産所得などを一定の条件で申告する際に、所定の帳簿記録等により優遇を受けられる申告方法はどれか。",
    "choices": [
      "青色申告",
      "還付申告のみ",
      "白色申告"
    ],
    "answer": 0,
    "explanation": "青色申告は一定の帳簿作成・申請等の要件を満たした場合に特別控除などの特典があります。",
    "topic": "青色申告",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-159",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。青色申告には事前承認申請・帳簿記録等の要件があり、所定の特例を受けられます。",
      "還付申告は税金が戻る場合の申告で、青色申告と同じ優遇申告方式の名称ではありません。",
      "白色申告は青色申告の所定要件・青色申告特別控除とは別の方式です。"
    ]
  },
  {
    "level": "3",
    "category": "タックスプランニング",
    "format": "three_choice",
    "question": "2025年分の給与収入が600万円で、所得金額調整控除・特定支出控除などの調整がない場合の給与所得はいくらか。",
    "choices": [
      "764万円",
      "164万円",
      "436万円"
    ],
    "answer": 2,
    "explanation": "2025年分の給与所得計算表では、600万円÷4＝150万円（千円未満の端数なし）、150万円×3.2－44万円＝436万円です。給与所得控除額は600－436＝164万円。764万円は控除164万円を加算した値、164万円は給与所得ではなく控除額です。給与収入660万円未満では計算表の端数処理にも注意します。",
    "topic": "給与所得計算",
    "createdVersion": 9,
    "revision": 57,
    "lawReferenceDate": "2025-12-01",
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-160",
    "contentReview": "v57_limited_primary_source_and_conditions_review",
    "choiceExplanations": [
      "控除額を収入に加算しています。",
      "給与所得控除額であり給与所得ではありません。",
      "正解。計算表に従い436万円。"
    ],
    "taxYear": 2025,
    "sourceUrl": "https://www.nta.go.jp/english/taxes/individual/12012.htm",
    "sourceLabel": "国税庁：給与所得の計算",
    "reviewNote": "Ver.57：限定論点を一次資料と照合。適用年・設例条件・未確認範囲はFOCUSED_REVIEW_V57.csvに記録。全面監修ではありません。"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "固定資産税の賦課期日は原則として毎年1月1日なので、1月2日に土地を購入した人は、通常その年度の固定資産税の納税義務者とはならない。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。固定資産税は原則1月1日現在の所有者がその年度の納税義務者です。売買当事者間で税相当額を日割り精算する契約があっても、法令上の納税義務者が自動で変わるわけではありません。",
    "topic": "固定資産税の賦課期日",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-161",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "所定の手続を満たして締結する定期建物賃貸借契約では、契約期間を6カ月に設定することも認められる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。定期建物賃貸借は期間を1年未満に設定できます。通常の建物賃貸借で期間を1年未満に定める場合の取扱いとは異なり、事前説明等の要件があります。",
    "topic": "定期借家契約",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-162",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "市街化区域内の農地を農地以外の用途に転用する場合、原則として所定の届出により、農地法の許可が不要となる場合がある。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。市街化区域内の農地転用には、所定の届出を行うことで許可を要しない扱いがあります。市街化調整区域などの農地と同じではありません。転用主体や届出先も確認します。",
    "topic": "農地転用",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-163",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "宅地建物取引業者が宅地の売買を媒介する際、契約前の重要事項説明を宅地建物取引士でない営業担当者だけが実施しても、買主が同意すれば宅地建物取引業法上の説明義務を満たす。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。重要事項説明は原則として宅地建物取引士が行う必要があります。買主の同意だけで宅地建物取引士以外の説明に代えることはできません。",
    "topic": "宅地建物取引士の重要事項説明",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-164",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "true_false",
    "question": "Aさんが土地を800万円で売却し、取得費500万円と譲渡費用30万円がある場合、特別控除等を考慮しない譲渡所得の金額は270万円である。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。譲渡所得（特別控除前）＝売却額800－取得費500－譲渡費用30＝270万円です。譲渡代金800万円がそのまま譲渡所得になるわけではありません。",
    "topic": "不動産の譲渡所得",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-165",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "敷地面積240㎡、建築面積96㎡、容積率算定上の延べ面積600㎡の建物がある。建ぺい率はいくらか。",
    "choices": [
      "60％",
      "250％",
      "40％"
    ],
    "answer": 2,
    "explanation": "建ぺい率＝建築面積96÷敷地240＝40％。250％は延べ面積600㎡÷敷地240㎡による容積率、60％は建築面積以外の敷地（240－96）÷240の割合です。",
    "topic": "建ぺい率・事例",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-166",
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "敷地面積320㎡、容積率算定対象の延べ面積240㎡の建物がある。容積率はどれか。",
    "choices": [
      "約133.3％",
      "75％",
      "25％"
    ],
    "answer": 1,
    "explanation": "容積率＝延べ面積240㎡÷敷地320㎡＝75％。約133.3％は敷地320÷延べ240と分子・分母を逆にした値、25％は未利用とみなした部分（320－240）÷敷地320の割合ですが、容積率ではありません。",
    "topic": "容積率・事例",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-167",
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed"
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "不動産売買で、買主は売主へ解約手付100万円を交付した。買主・売主とも契約の履行に着手しておらず、特約がない。売主が手付解除のため現実に提供する額はどれか。",
    "choices": [
      "200万円",
      "100万円",
      "300万円"
    ],
    "answer": 0,
    "explanation": "売主による解約手付解除は、買主が履行に着手する前など所定の条件の下、受領した手付100万円の倍額200万円を現実に提供します。",
    "topic": "解約手付",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-168",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。受領した手付100万円の倍額（100×2）である200万円を現実に提供します。",
      "受け取った手付100万円を単に返すだけの計算で、売主からの解除に必要な倍額提供に足りません。",
      "倍額200万円に元の100万円をさらに加えた計算で、手付金を重複計上しています。"
    ]
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "建物の区分所有法において、管理者は少なくともどの頻度で集会を招集しなければならないか。",
    "choices": [
      "半年に1回",
      "年に1回",
      "毎月"
    ],
    "answer": 1,
    "explanation": "区分所有法上、管理者は少なくとも毎年1回、集会を招集します。",
    "topic": "管理組合集会",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-169",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "半年に1回を法定最低頻度とする規定ではありません。",
      "正解。管理者は少なくとも毎年1回集会を招集する必要があります。",
      "毎月招集を義務付けた規定ではありません。"
    ]
  },
  {
    "level": "3",
    "category": "不動産",
    "format": "three_choice",
    "question": "Aさんが1月2日に宅地を取得した場合、その年の固定資産税の納税義務者となるのは原則どちらか（通常の賦課関係を想定）。",
    "choices": [
      "1月2日の買主",
      "1月1日の所有者",
      "年末時点の所有者"
    ],
    "answer": 1,
    "explanation": "固定資産税の賦課期日は1月1日であり、その時点の所有者が原則として納税義務者です。",
    "topic": "固定資産税・取得日",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-170",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "取得日が1月2日でも、同年の賦課期日1月1日にはまだ買主ではないため誤りです。",
      "正解。原則として毎年1月1日時点の所有者を納税義務者とします。",
      "年末時点の所有者ではなく、賦課期日1月1日が基準です。"
    ]
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "父の遺産として預金700万円と借入金500万円が残った。相続人が単純承認をした場合、原則として預金だけでなく借入金も承継する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。単純承認では被相続人のプラスの財産とともに、債務も原則として承継します。預金700万円だけを受け取り借入金500万円を一方的に除外することはできません。",
    "topic": "単純承認",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-171",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "相続人Aが他の相続人に「私は遺産を受け取らない」と伝えて遺産分割で取得額をゼロにした場合、家庭裁判所への申述なしで、法律上の相続放棄をしたことになる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。遺産分割で取得しない合意と、民法上の相続放棄は異なります。相続放棄には原則として家庭裁判所への申述が必要で、債務の取扱いにも影響します。",
    "topic": "相続放棄の手続",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-172",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "相続人が配偶者と子2人の場合、遺産8,000万円を法定相続分で分けると、配偶者4,000万円、子1人につき2,000万円となる。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。配偶者1/2＝4,000万円、子全体1/2＝4,000万円、子2人で等分すると各1/4＝2,000万円です。法定相続分は遺産分割の目安であり、必ずその割合で分割する義務があるわけではありません。",
    "topic": "配偶者と子の法定相続分",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-173",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "父が預金800万円と借入金1,200万円を残した場合、子が単純承認しても、預金額を超える400万円の借入金だけは自動的に免除される。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 1,
    "explanation": "×。単純承認では債務も原則として承継するため、預金額を超える借入金が自動で免除されるわけではありません。限定承認や相続放棄などを検討する場合は要件と手続が必要です。",
    "topic": "債務の調査",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-174",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "true_false",
    "question": "契約者Aさんが保険料を全額負担していた生命保険で、被保険者は配偶者Bさんである。Aさんの死亡時にBさんは存命で保険事故は発生しておらず、相続人が取得する生命保険契約に関する権利は、原則として相続開始時の解約返戻金相当額などを基に相続税評価する。",
    "choices": [
      "〇 正しい",
      "× 誤り"
    ],
    "answer": 0,
    "explanation": "〇。Aさん自身が保険料を全額負担し、Aさんの死亡時には保険事故が発生していないため、死亡保険金ではなく契約に関する権利を評価します。相続開始時に解約した場合の返戻金を基に、別途返還される前納保険料や剰余金等を加え、該当する源泉所得税等を差し引きます。名義上の契約者だけで判断せず、実際の保険料負担者を確認します。解約返戻金のない掛捨保険は評価しません。",
    "topic": "生命保険契約の権利評価",
    "createdVersion": 9,
    "revision": 59,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-175",
    "contentReview": "v59_limited_primary_source_review",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/hyoka/4660.htm",
    "sourceLabel": "国税庁 No.4660",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.59：適用条件・主要論点・選択肢を限定点検。確認日は法令基準日と別。包括的な法令・約款監修は未完了。"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "配偶者と被相続人の兄・姉の3人が法定相続人となった場合、兄1人の法定相続分はどれか（ほかに相続人なし）。",
    "choices": [
      "1/4",
      "1/2",
      "1/8"
    ],
    "answer": 2,
    "explanation": "配偶者と兄弟姉妹が共同相続人の場合、兄弟姉妹全体の法定相続分は1/4です。兄と姉の2名で等分するため兄は1/8です。1/4は兄弟姉妹全体の割合、1/2は配偶者と兄弟姉妹を同順位とみなして等分する誤りです。",
    "topic": "兄弟姉妹の法定相続分",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-176",
    "contentReview": "automatic_structural_check_only"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "被相続人の子Aと子Bが法定相続人で、配偶者はいない。遺言などがない場合のAの法定相続分はどれか。",
    "choices": [
      "1/4",
      "3/4",
      "1/2"
    ],
    "answer": 2,
    "explanation": "子A・子Bのみが法定相続人で、代襲相続等もなければ法定相続分は均等の各2分の1です。4分の1や4分の3は、この相続人構成からは導かれません。相続人の人数と続柄を先に確認します。",
    "topic": "法定相続分・子のみ",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-177",
    "contentReview": "v43_options_explanation_individual_review"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "自用地としての価額8,000万円、借地権割合60％の貸宅地について、単純な相続税評価額はどれか（通常の貸宅地、ほかの調整なし）。",
    "choices": [
      "4,800万円",
      "8,000万円",
      "3,200万円"
    ],
    "answer": 2,
    "explanation": "貸宅地評価額＝自用地価額8,000万円×（1－借地権割合60％）＝3,200万円。4,800万円は借地権部分（8,000×60％）の価額、8,000万円は借地権価額を控除しない自用地価額そのものです。",
    "topic": "貸宅地の評価",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-178",
    "contentReview": "v41_arithmetic_and_distractors_individually_reviewed"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "法定相続人が配偶者と子1人の場合、相続税の遺産に係る基礎控除額はいくらか（特殊事情なし）。",
    "choices": [
      "3,600万円",
      "4,200万円",
      "4,800万円"
    ],
    "answer": 1,
    "explanation": "法定相続人は2人です。3,000万円＋600万円×2＝4,200万円。3,600万円は1人、4,800万円は3人と数えた場合です。",
    "topic": "相続税の基礎控除",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "source_checked_selected_points",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.keisan.nta.go.jp/oshirase/sozoku/yohihantei/goriyomae/hoteisozokunin.html",
    "sourceLabel": "公式資料（論点確認用）",
    "id": "fp3-179",
    "contentReview": "v25_primary_source_or_formula_review",
    "sourceName": "制度確認用の公的資料"
  },
  {
    "level": "3",
    "category": "相続・事業承継",
    "format": "three_choice",
    "question": "被相続人から相続で取得した借地権のある土地のうち、借地権が設定されている土地の所有者が持つ権利を一般に何というか。",
    "choices": [
      "賃借権だけ",
      "地上権だけ",
      "底地権"
    ],
    "answer": 2,
    "explanation": "地主が持つ所有権のうち借地権の負担が付いた部分は、一般に底地権（底地）と呼ばれます。",
    "topic": "底地と借地権",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP3級学科試験（出題分野・形式を参考）",
    "id": "fp3-180",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "賃借権は借りる側の利用権であり、地主側が持つ所有権の名称ではありません。",
      "地上権も他人の土地を利用するための権利で、地主側に残る所有権の名称とは異なります。",
      "正解。借地権の付いた土地について地主が保有する権利を一般に底地権といいます。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "顧客が年末ごとに一定額を10年間積み立て、年3％で運用する計画である。10年後の目標額から必要な年末積立額を求める場合に用いる係数として最も適切なのはどれか。",
    "choices": [
      "減債基金係数",
      "年金現価係数",
      "終価係数",
      "資本回収係数"
    ],
    "answer": 0,
    "explanation": "一定の目標額に減債基金係数を乗じると、必要な各年の積立額が求められます。",
    "topic": "減債基金係数の応用",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-121",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。将来の目標額に減債基金係数を掛けて、毎年末の一定積立額を求めます。",
      "年金現価係数は将来の年金受取額から必要な現在資金を求めます。目標額から積立額を逆算する係数ではありません。",
      "終価係数は現在の一時金を複利運用した将来価値を求めます。積立額の算定には直接対応しません。",
      "資本回収係数は現在資金を一定期間で毎期取り崩す額を求める等に使います。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "現在の資金1,200万円を年3％の複利で運用する場合、3年後の元利合計額として最も近いものはどれか（税金・手数料なし）。",
    "choices": [
      "1,308万円",
      "1,274万円",
      "1,236万円",
      "1,311万円"
    ],
    "answer": 3,
    "explanation": "3年後の元利合計＝1,200×1.03³＝約1,311.27万円。最も近いのは1,311万円です。1,308万円は年3％の単利を3年適用した場合（1,200×1.09）、1,236万円は1年だけ3％増加させた場合（1,200×1.03）、1,274万円は2年間複利で増やした場合（1,200×1.03²＝約1,273.08）です。",
    "topic": "複利将来価値",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-122",
    "contentReview": "grounded_distractor_review_v22"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "国民年金の学生納付特例が承認された期間に関する説明として、最も適切なものはどれか。",
    "choices": [
      "受給資格期間にも年金額計算にも算入されない",
      "受給資格期間に算入され、追納しなくても老齢基礎年金額に反映される",
      "受給資格期間には算入されるが、追納しなければ老齢基礎年金額には反映されない",
      "受給資格期間には算入されないが、年金額計算には算入される"
    ],
    "answer": 2,
    "explanation": "学生納付特例期間は、老齢基礎年金の受給資格期間には含まれますが、追納しない限り年金額には反映されません。「資格期間に入る」ことと「年金額が増える」ことを混同しないでください。",
    "topic": "学生納付特例",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-123",
    "contentReview": "v58_limited_primary_source_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/yougo/kagyo/gakuseinofu.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：学生納付特例・追納",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "雇用保険の一般的な基本手当の「賃金日額」に関する記述として、最も適切なのはどれか。",
    "choices": [
      "原則として離職前3カ月の対象賃金合計を90で除する",
      "離職前6カ月に支給された3カ月を超える期間ごとの賞与は、通常すべて賃金日額の算定に含める",
      "原則として離職前12カ月の賃金合計を365で除する",
      "原則として離職前6カ月の対象賃金を180で除し、3カ月を超える期間ごとの賞与等は除外する"
    ],
    "answer": 3,
    "explanation": "賃金日額は原則として離職前6カ月に支払われた対象賃金の合計額を180で除して求めます。臨時に支払われる賃金や3カ月を超える期間ごとに支払われる賞与等は、通常この計算に含みません。すべての名称の「賞与」を一律に除外するという意味ではありません。",
    "topic": "雇用保険の基本手当",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-124",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "対象期間は原則として離職直前6カ月であり、3カ月÷90日ではありません。",
      "3カ月を超える期間ごとに支給される賞与等は、通常は対象賃金に含めません。",
      "12カ月÷365日ではなく、一般に対象賃金の6カ月分÷180日です。",
      "正解。6カ月分の対象賃金÷180日が基本で、臨時の賃金・所定の賞与等は除外します。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "企業型DCで加入者が拠出するマッチング拠出掛金の所得税上の扱いとして、最も適切なのはどれか。",
    "choices": [
      "配当控除の対象",
      "小規模企業共済等掛金控除の対象",
      "給与所得控除の対象",
      "税額控除の対象"
    ],
    "answer": 1,
    "explanation": "企業型DCのマッチング拠出で加入者本人が負担した掛金は、所得税上、小規模企業共済等掛金控除の対象です。給与所得控除や配当控除ではなく、税額から直接差し引く税額控除でもありません。加入要件や拠出上限は別途確認が必要です。",
    "topic": "企業型DC・所得控除",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-125",
    "contentReview": "v60_limited_primary_source_review",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1135.htm",
    "sourceLabel": "国税庁 No.1135 小規模企業共済等掛金控除",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.60：所得控除区分・対象年・主要論点を限定点検。確認日と法令基準日は別。全例外・全法令の監修は未完了。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "Aさんは手元の資金1,000万円を使い、今後毎年末に一定額を5年間取り崩したいと考える。年2％の複利運用を前提に、年間取崩額を算定する係数として適切なのはどれか。",
    "choices": [
      "減債基金係数",
      "年金終価係数",
      "現価係数",
      "資本回収係数"
    ],
    "answer": 3,
    "explanation": "現在資金から受け取れる年金額（一定額）を求める場合は資本回収係数です。",
    "topic": "資本回収係数",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-126",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "減債基金係数は将来の目標額に必要な毎期積立額を求める係数で、現在の資金を取り崩す計算とは逆です。",
      "年金終価係数は毎期一定額を積み立てた将来の元利合計を求める係数です。",
      "現価係数は将来の一時金額から現在価値を求める係数で、現在の一時金から毎年の取崩額を求めるものではありません。",
      "正解。資本回収係数は現在のまとまった資金を、一定期間の毎期受取額・返済額へ換算するときに使います。"
    ]
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "住宅ローン残高2,400万円、年間元利返済額144万円、年間可処分所得480万円、年間生活費400万円の世帯について、可処分所得に対する年間返済負担率はいくらか。",
    "choices": [
      "30％",
      "36％",
      "6％",
      "約83.3％"
    ],
    "answer": 0,
    "explanation": "返済負担率＝年間返済額144万円÷可処分所得480万円×100＝30％。36％は144÷生活費400×100、6％は144÷住宅ローン残高2,400×100、約83.3％は生活費400÷可処分所得480×100を計算した値です。分子・分母に何を使うかを区別します。",
    "topic": "住宅ローン返済負担率",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-127",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "国民年金の学生納付特例期間について、追納の承認がされた月を基準とする追納可能期間の説明として、最も適切なものはどれか。",
    "choices": [
      "追納できるのは原則承認月の前2年以内",
      "原則として追納の承認がされた月の前10年以内の対象期間について追納できる",
      "追納の対象は承認日の翌月以後の保険料に限られる",
      "追納しても老齢基礎年金の額には一切影響しない"
    ],
    "answer": 1,
    "explanation": "追納は原則として追納承認月の前10年以内の対象期間が範囲です。学生納付特例期間を追納すると将来の老齢基礎年金額の増額につながります。一定期間経過後には加算額が生じる場合があります。 ここでいう承認月は、学生納付特例の当初の承認月ではなく、後から保険料を納める追納の承認月です。特例期間の翌年度から数えて3年度目以降に追納する場合は加算額が付くため、当時の保険料だけで済むとは限りません。老齢基礎年金を受け取れる方は追納できません。",
    "topic": "iDeCo元本保証の誤解",
    "createdVersion": 9,
    "revision": 58,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-128",
    "contentReview": "v58_limited_primary_source_review",
    "sourceUrl": "https://www.nenkin.go.jp/service/yougo/kagyo/gakuseinofu.html",
    "sourceName": "制度確認用の公的資料",
    "sourceLabel": "日本年金機構：学生納付特例・追納",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "前年末金融資産残高1,500万円、年率2％の運用利率、当年の年間収支は黒字100万円である。運用益は前年末残高に対してのみ計算する場合、当年末の金融資産残高はどれか。",
    "choices": [
      "1,630万円",
      "1,530万円",
      "1,632万円",
      "1,600万円"
    ],
    "answer": 0,
    "explanation": "前年末残高の運用益は1,500×2％＝30万円。よって期末残高＝1,500＋30＋100＝1,630万円。1,530万円は当年黒字100万円を加えない値、1,632万円は当年黒字にまで2％の運用益2万円を加えた値、1,600万円は運用益30万円を加えない値です。",
    "topic": "キャッシュフロー資産残高",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-129",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "ライフプランニングと資金計画",
    "format": "four_choice",
    "question": "FP技能士のAさん（税理士・弁護士等の資格なし）が、顧客から依頼を受け、反復継続して所得税の申告書を自己の判断に基づいて作成する場合の記述として、最も適切なのはどれか。",
    "choices": [
      "金融商品取引業の登録さえあれば作成できる",
      "FP技能士の資格があれば報酬の有無に関係なく税務書類の作成を業として行える",
      "原則として税理士等の資格がなければ、有償・無償を問わず税務書類の作成を業として行えない",
      "顧客が同意すれば資格がなくても税務代理を業として行える"
    ],
    "answer": 2,
    "explanation": "税理士法上、税務代理・税務書類の作成・税務相談を「業として」行うには原則として税理士等の資格・資格に基づく要件が必要です。業として行う場合、有償か無償かは問いません。本問は単なる転記ではなく、自己の判断による申告書作成を反復継続するケースです。",
    "topic": "FPの業務範囲・税理士法",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-130",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "金融商品取引業の登録は税理士業務を行う資格にはなりません。",
      "FP技能士の資格だけでは税務書類を業として作成できません。無償でも業として行う場合は同様です。",
      "正解。税理士等に認められた税理士業務は、原則として無資格者が報酬の有無にかかわらず業として行えません。",
      "本人の同意があっても税理士法上の業務規制がなくなるわけではありません。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "飲食店が販売した弁当の品質に起因して購入者が食中毒となり、法律上の賠償責任を負った場合に備える保険として最も適切なのはどれか。",
    "choices": [
      "施設所有（管理）者賠償責任保険",
      "生産物賠償責任保険（PL保険）",
      "使用者賠償責任保険",
      "受託者賠償責任保険"
    ],
    "answer": 1,
    "explanation": "販売・引渡し後の製品に起因する賠償事故には、PL保険が対応し得ます。",
    "topic": "PL保険・事例",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-131",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "施設の欠陥・使用管理に起因する対人事故への備えであり、引渡し後の食品そのものによる食中毒とは主な事故原因が異なります。",
      "正解。販売・引渡し後の食品を原因とする購入者の食中毒は生産物事故に係る賠償責任に該当し得ます。",
      "使用者が従業員に負う労災関連の賠償責任への備えであり、食品購入者は従業員ではありません。",
      "預かった他人の財物の損壊等に係る賠償責任を補償するもので、販売した食品の事故による顧客の負傷とは異なります。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "一般の住居用火災保険に関する記述として、最も適切なものはどれか（特約等なし）。",
    "choices": [
      "落雷による家電の損害が補償対象となる契約がある",
      "故意に引き起こした火災の損害も、被保険者が保険料を払っていれば原則補償される",
      "一般的な火災保険では、水災補償を付けていれば地震による倒壊も補償される",
      "一般的な火災保険では、住宅の経年劣化に伴う腐食損害も落雷損害と同じように補償される"
    ],
    "answer": 0,
    "explanation": "火災保険は契約内容に応じ落雷による損害を補償します。腐食など経年劣化や地震損害は原則対象外です。",
    "topic": "火災保険・落雷",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-132",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。落雷による家財損害は、家財に落雷補償を付けた契約で対象となり得ます。建物のみの契約では家電が対象外となる点に注意します。",
      "故意による損害は一般に免責事由です。保険料を支払ったことだけで補償されません。",
      "水災は大雨・洪水等に関する補償で、地震による倒壊は原則として地震保険等の対象です。",
      "経年劣化や腐食による損害は、偶然な事故としての落雷とは原因が違い、一般に免責されます。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "自動車保険で、被保険者が自動車事故で他人にケガを負わせ、法律上の賠償責任を負った。対人賠償保険の一般的な支払い範囲として最も適切なのはどれか。",
    "choices": [
      "契約自動車の運転者本人が負傷した場合の人身傷害保険金",
      "事故で損傷した契約自動車自体の修理費",
      "自賠責保険等による補償部分を除く賠償損害",
      "相手車両の修理費についての対物賠償保険金"
    ],
    "answer": 2,
    "explanation": "対人賠償責任保険は、原則として自賠責保険等の支払限度額を超える部分等の対人賠償責任に備えます。",
    "topic": "自動車・対人賠償",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-133",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "運転者本人の死傷への補償は人身傷害保険等の領域で、他人に対する対人賠償責任ではありません。",
      "契約車両自体の損害に対する車両保険と、他人の死傷への対人賠償保険は異なります。",
      "正解。自動車事故で他人を死傷させた際の法律上の賠償責任に備え、自賠責等の補償超過部分などを対象とします。",
      "相手の自動車などの物損は対物賠償責任の領域で、対人賠償ではありません。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "一般的な変額終身保険（基本死亡保険金額に最低保証がある商品）について、最も不適切な記述はどれか。特約は考慮しない。",
    "choices": [
      "基本死亡保険金額は、運用実績が悪ければ最低保証なく必ず減少する",
      "定期保険は一定期間の死亡保障を提供する",
      "終身保険は原則として生涯の死亡保障を提供する",
      "養老保険は満期保険金を備える"
    ],
    "answer": 0,
    "explanation": "基本死亡保険金額に最低保証がある変額終身保険では、運用が悪くても基本死亡保険金額まで下がる仕組みではありません。一方で解約返戻金については最低保証がない場合があります。死亡保険金と解約返戻金の区別がポイントです。",
    "topic": "生命保険・変額終身",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-134",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解（最も不適切）。問題文では基本死亡保険金額に最低保証があると指定しており、運用が悪いだけで最低保証を失うわけではありません。",
      "定期保険は所定期間の死亡保障を主目的とするため適切です。",
      "終身保険は一般に一生涯の死亡保障を備えます。保険料払込期間と保障期間は別です。",
      "養老保険には一般に満期保険金があり、記述は適切です。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "損害保険に関する記述のうち、最も不適切なのはどれか。",
    "choices": [
      "損害額を超えて必ず利得を得られる仕組みである",
      "免責金額を設定する契約がある",
      "対象損害の範囲は約款により異なる",
      "財物への偶然な事故による損害を補償する契約がある"
    ],
    "answer": 0,
    "explanation": "実損てん補型の損害保険は、原則として被った損害に対するてん補であり、利得を保証するものではありません。",
    "topic": "損害てん補の原則",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-135",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解（最も不適切）。実損てん補型の保険は通常、被った損害額や契約条件を基に支払額を決め、超過利得を約束しません。",
      "免責金額を設ける損害保険はあり、この記述は適切です。",
      "補償範囲は商品・約款・特約で異なるため、この記述は適切です。",
      "偶然な事故による財物損害を補償する商品はあり、この記述は適切です。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "リビング・ニーズ特約について最も適切な記述はどれか。",
    "choices": [
      "一般に余命6か月以内など所定条件で生前に死亡保険金を受け取れる",
      "リビング・ニーズ特約では、余命の診断がなくても被保険者の希望だけで死亡保険金を前払いできる",
      "リビング・ニーズ特約は、保険期間満了時の生存給付金の受取額を増やす制度である",
      "リビング・ニーズ特約の給付金を受けた後は、受け取った額に相当する死亡保障もそのまま残る"
    ],
    "answer": 0,
    "explanation": "リビング・ニーズ特約は、所定の余命条件などを満たす場合に死亡保険金の一部・全部の生前受取ができる特約です。",
    "topic": "リビング・ニーズ特約",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-136",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。余命の診断など所定の要件を満たせば、死亡保険金の一定額を生前に受け取れる特約です。",
      "単なる希望だけでは利用できず、契約所定の余命・診断要件等が必要です。",
      "満期の生存給付金を増額する仕組みではなく、死亡保険金の生前給付です。",
      "受け取った部分に対応する死亡保障は通常減額され、同額の保障が無条件に残るわけではありません。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "解約返戻金がある生命保険に設定される契約者貸付制度について、一般的に最も適切な記述はどれか。",
    "choices": [
      "契約者貸付を利用すると、死亡保障は貸付実行時点で必ず全額消滅する",
      "貸付可能額は、通常、解約返戻金の一定範囲で定められる",
      "契約者貸付は、解約返戻金を担保にするため、通常は無利息で利用できる",
      "契約者貸付は、解約返戻金のない掛け捨て定期保険であっても死亡保険金額の範囲で利用できる"
    ],
    "answer": 1,
    "explanation": "契約者貸付は通常、解約返戻金の一定割合の範囲で利用でき、利息が生じます。貸付対象や条件は保険種類・約款によります。",
    "topic": "生命保険の契約者貸付",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-137",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "貸付によって保障が必ず全額消滅するわけではありません。利息の累積で契約が失効するリスク等はあります。",
      "正解。通常、解約返戻金の一定範囲内で貸付可能額が決まります。",
      "契約者貸付は通常利息が生じるため、無利息という記述は不適切です。",
      "返戻金のない商品では、通常それを基礎とする契約者貸付を利用できません。死亡保険金額だけで決まりません。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "個人が受け取る入院給付金の所得税上の取扱いについて一般に最も適切なものはどれか（本人が疾病の治療で入院し受領）。",
    "choices": [
      "原則非課税",
      "入院給付金は、保険料負担者が本人の場合に限って必ず一時所得となる",
      "本人が治療のために受け取った入院給付金は、原則として雑所得になる",
      "本人が治療のために受け取った入院給付金は、給与所得として課税される"
    ],
    "answer": 0,
    "explanation": "本人の疾病による入院に対して本人が受け取る所定の入院給付金は、原則として所得税が非課税です。満期保険金のように保険料負担者との関係だけで一時所得に分類したり、年金形式の保険金と同じ雑所得に分類したりしません。勤務先からの労働の対価でもないため給与所得ではありません。ただし、医療費控除の計算では、補てん対象となる医療費から入院給付金を差し引く扱いと区別する必要があります。",
    "topic": "給付金の課税",
    "createdVersion": 9,
    "revision": 59,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-138",
    "contentReview": "v59_limited_primary_source_review",
    "choiceExplanations": [
      "正解。疾病・傷害を原因として本人が受け取る所定の入院給付金は一般に非課税です。",
      "保険料の負担者だけを理由に一律に一時所得へ分類するものではありません。",
      "治療に伴う所定の入院給付金は一般に非課税であり、原則雑所得ではありません。",
      "本人が受け取った給付金を雇用の対価である給与所得とするのは誤りです。"
    ],
    "sourceUrl": "https://www.nta.go.jp/publication/pamph/koho/kurashi/html/04_2.htm",
    "sourceLabel": "国税庁 保険と税",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.59：適用条件・主要論点・選択肢を限定点検。確認日は法令基準日と別。包括的な法令・約款監修は未完了。"
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "店舗の床が濡れていたため顧客が転倒・負傷し、店舗が法律上の賠償責任を負った。対象として検討する保険として最も適切なのはどれか。",
    "choices": [
      "生産物賠償責任保険（PL保険）",
      "施設所有（管理）者賠償責任保険",
      "受託者賠償責任保険",
      "使用者賠償責任保険"
    ],
    "answer": 1,
    "explanation": "店舗の床の管理不備によって来店客が転倒し、法律上の賠償責任が生じるケースでは、施設所有（管理）者賠償責任保険を検討します。販売製品による事故・預かった他人の財物の損害・従業員の労災に係る賠償とは区別します。",
    "topic": "施設賠償責任・事例",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-139",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "販売・引渡し後の商品の欠陥事故を想定しており、店舗床の管理上の事故による来店客のけがとは異なります。",
      "正解。店舗の施設・設備の所有、使用または管理に起因する対人賠償責任に備える保険です。",
      "預かった他人の物が損壊した事故ではなく、来店者本人のけがへの賠償責任を問う設問です。",
      "従業員への労災事故ではなく、来店した顧客のけがへの賠償責任である点が異なります。"
    ]
  },
  {
    "level": "2",
    "category": "リスク管理",
    "format": "four_choice",
    "question": "火災による対象損害額200万円、免責金額20万円、支払限度額150万円の契約である。免責金額を差し引いた後、支払限度額を適用する場合、支払保険金はいくらか。",
    "choices": [
      "180万円",
      "150万円",
      "200万円",
      "130万円"
    ],
    "answer": 1,
    "explanation": "損害200－免責20＝180万円。限度額150万円を超えるため150万円が正解。180万円は限度額を無視、200万円は免責と限度額をともに無視した値。130万円は限度額150万円からさらに免責20万円を差し引いた値で、適用順序を誤っています。",
    "topic": "免責と限度額",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-140",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "額面100円、表面利率年2％（年利子2円）、残存4年の債券を104円で買い、額面100円で償還される場合、最終利回りの単利近似（年率）はどれか。",
    "choices": [
      "約1.92％",
      "約2.00％",
      "約0.96％",
      "約1.00％"
    ],
    "answer": 2,
    "explanation": "最終利回り近似＝｛年利子2円＋（償還100－買付104）÷4年｝÷104×100＝1÷104×100≒0.96％。約1.92％は償還差損を無視して2÷104、約2.00％は差損を無視して2÷額面100、約1.00％は差損を年割りした後の1円を買付104円でなく額面100円で割った値です。",
    "topic": "債券最終利回り",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-141",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "上場不動産投資信託（J-REIT）について最も不適切なものはどれか。",
    "choices": [
      "発行体による買戻しが常に保証されるオープンエンド型である",
      "市場で売買できるものがある",
      "分配金は税法上の配当控除対象とはならない",
      "不動産の賃料等を原資とする分配がある"
    ],
    "answer": 0,
    "explanation": "上場J-REITは一般にクローズドエンド型であり、株式のように市場で売買します。",
    "topic": "J-REITの仕組み",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-142",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解（最も不適切）。上場J-REITは市場売買される仕組みで、発行体による常時買戻しは保証されません。",
      "上場J-REITには証券取引所で売買できる投資口があり、適切な記述です。",
      "J-REITの分配金は通常、所得税の配当控除の対象ではありません。",
      "保有不動産の賃料などから得られる収益が分配原資となることがあり、適切です。"
    ]
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "額面100万円、表面利率年1％の債券を99万円で購入し、1年後に額面100万円で償還された。税金・費用がなく、年利子も1回受け取った場合の収益額はいくらか。",
    "choices": [
      "100万円",
      "2万円",
      "99万円",
      "1万円"
    ],
    "answer": 1,
    "explanation": "年利子は額面100×1％＝1万円、償還差益は100－99＝1万円。したがって収益額は2万円です。100万円は元本償還額そのもの、99万円は購入価格そのもの、1万円は利子または償還差益のどちらか一方しか数えない値です。",
    "topic": "債券利子と償還差益",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-143",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "X社の株価は3,000円、EPSは150円、1株当たり年間配当金は45円である。配当性向として正しいのはどれか。",
    "choices": [
      "70％",
      "約333.3％",
      "30％",
      "1.5％"
    ],
    "answer": 2,
    "explanation": "配当性向＝配当45円÷EPS150円×100＝30％。70％は（EPS150－配当45）÷EPS150×100で求める内部留保率、約333.3％はEPS150÷配当45×100と分子・分母を逆にした値、1.5％は配当45÷株価3,000×100で求める配当利回りです。",
    "topic": "配当性向・計算",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-144",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "A資産の期待収益率は4％、B資産は8％。投資比率はAが75％、Bが25％である。税金・手数料は考えない場合、ポートフォリオ期待収益率はどれか。",
    "choices": [
      "4％",
      "8％",
      "6％",
      "5％"
    ],
    "answer": 3,
    "explanation": "加重平均＝4％×0.75＋8％×0.25＝3％＋2％＝5％。4％は資産Aのみ、8％は資産Bのみの期待収益率、6％は2資産を各50％と仮定した単純平均です。",
    "topic": "ポートフォリオ期待収益率",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-145",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "2資産間の相関係数が−1である場合、最も適切な説明はどれか。",
    "choices": [
      "完全な負の相関であり、組合せで変動を打ち消し得る",
      "相関係数が−1でも、二つの資産を組み合わせた分散効果は全く生じない",
      "相関係数が−1なら、一方の収益率が上昇すると他方も同じ率で上昇する",
      "相関係数が−1なら、二つの資産の収益率は必ず同じ平均値を持つ"
    ],
    "answer": 0,
    "explanation": "相関係数−1は完全な負の相関を示し、適切な組入比率で変動が相殺される場合があります。",
    "topic": "相関係数と分散",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-146",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。完全な負の相関を示します。ただし資産の変動幅などに応じ適切な組入比率が必要です。",
      "相関係数が−1なら分散効果が全くないとの記述は逆で、組合せにより変動が相殺し得ます。",
      "同じ方向に動くのは正の相関の説明です。−1は反対方向へ動く完全な負の線形関係です。",
      "相関係数は平均収益率の一致を意味しません。平均が違っても−1となり得ます。"
    ]
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "直近の市場金利上昇により既発固定利付債券の市場価格が変化した場合、一般に最も適切なものはどれか。",
    "choices": [
      "価格が上昇する",
      "利払額は自動的に2倍になる",
      "価格は金利に影響されない",
      "価格が下落する"
    ],
    "answer": 3,
    "explanation": "市場金利が上昇すると、既発固定利付債券は相対的な魅力が低下し、一般に市場価格が下落します。固定利付債券の契約上の利払額が自動的に2倍になるわけではありません。金利が変わっても価格が変化しない、価格が上昇するという説明も一般的な関係と逆です。",
    "topic": "金利と債券価格",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-147",
    "contentReview": "v43_options_explanation_individual_review"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "個人向け国債の3年・5年・10年という満期の違いに関する説明として最も適切なものはどれか（商品ラインアップの一般的な区分）。",
    "choices": [
      "10年満期のみ固定金利型",
      "すべて変動金利型",
      "3年満期のみ変動金利型",
      "3年満期・5年満期は固定金利型、10年満期は変動金利型"
    ],
    "answer": 3,
    "explanation": "個人向け国債の商品区分は、固定金利型の3年・5年と、変動金利型の10年です。「10年のみ固定」「すべて変動」「3年のみ変動」はいずれも商品区分が逆または不正確です。実際の募集条件・利率は発行回ごとに確認します。",
    "topic": "個人向け国債",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.mof.go.jp/jgbs/individual/kojinmuke/",
    "sourceLabel": "公式資料（論点確認用）",
    "id": "fp2-148",
    "contentReview": "v43_options_explanation_individual_review"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "米ドル建て投資信託の米ドルベースの価値が一定のまま、為替相場が1米ドル150円から135円になった。為替手数料・分配金がなければ、円換算価値の変化率はどれか。",
    "choices": [
      "約11.1％増加",
      "10％減少",
      "変化なし",
      "10％増加"
    ],
    "answer": 1,
    "explanation": "同じ外貨額を円に換算するため変化率＝（135－150）÷150×100＝－10％。約11.1％は135円から150円へ逆方向に動いたときの上昇率15÷135×100、変化なしは為替変動を無視した値、10％増加は円高・ドル安による方向を反対にした値です。",
    "topic": "為替変動・円換算",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-149",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "金融資産運用",
    "format": "four_choice",
    "question": "投資信託に関連する費用について、最も不適切なものはどれか。",
    "choices": [
      "信託報酬がかかる商品の手数料は、売却時にのみ一括払いするのが常に原則",
      "保有期間中に信託報酬がかかる商品がある",
      "購入時手数料がかからない商品がある",
      "信託財産留保額が設定されている商品がある"
    ],
    "answer": 0,
    "explanation": "不適切なのは「信託報酬を売却時にのみ一括払いするのが常に原則」という説明です。信託報酬（運用管理費用）は保有期間中に信託財産から日々差し引かれ、基準価額に反映されます。購入時手数料が無料の商品や信託財産留保額を設定する商品もあります。",
    "topic": "投資信託の費用",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-150",
    "contentReview": "v43_options_explanation_individual_review"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "勤続28年の会社員が一般の退職一時金を受け取る。障害退職などの特例はない。退職所得控除額はいくらか。",
    "choices": [
      "1,360万円",
      "1,120万円",
      "560万円",
      "800万円"
    ],
    "answer": 0,
    "explanation": "退職所得控除は勤続20年まで40万円×20＝800万円、20年超8年分は70万円×8＝560万円。合計1,360万円。1,120万円は28年間すべてを40万円で計算、560万円は20年超の加算分だけ、800万円は20年までの部分だけの値です。",
    "topic": "退職所得控除計算",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/1420.htm",
    "sourceLabel": "公式資料（論点確認用）",
    "id": "fp2-151",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "会社員が受け取る退職一時金について、適用要件を満たす場合の所得税上の退職所得金額の計算として最も適切なのはどれか（通常の退職金・特定役員退職手当等ではない）。",
    "choices": [
      "退職所得控除額だけ",
      "収入金額×2",
      "収入金額そのもの",
      "（収入金額−退職所得控除額）×1/2"
    ],
    "answer": 3,
    "explanation": "通常の退職所得は原則（退職金の収入金額−退職所得控除額）×1/2で算定します。",
    "topic": "退職所得の計算",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-152",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "退職所得控除額そのものを退職所得金額とするわけではありません。",
      "退職金の全額を2倍するものではなく、通常は控除後の金額に1/2を乗じます。",
      "所定の退職所得控除を無視して収入全額を退職所得とするのは誤りです。",
      "正解。通常の退職一時金は（退職金収入－退職所得控除額）×1/2で計算します（控除後がマイナスなら0）。"
    ]
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の所得税について、旧制度（2011年12月31日以前の所定契約）に基づく一般生命保険料控除のみを適用するとき、その所得税上の控除上限額として最も適切なのはどれか。",
    "choices": [
      "2万円",
      "5万円",
      "12万円",
      "4万円"
    ],
    "answer": 1,
    "explanation": "2025年分の所得税で、旧契約の一般生命保険料控除だけを適用する場合の上限は5万円です。2万円はこの上限ではなく、4万円は同年分の新契約の一般生命保険料控除の上限、12万円は生命保険料控除全体の合計上限です。2026・2027年分には23歳未満の扶養親族を有する場合の新生命保険料に関する特例がありますが、旧契約だけの控除上限が一律6万円になるという意味ではありません。本問は2025年分・旧契約のみを問います。",
    "topic": "旧生命保険料控除",
    "createdVersion": 9,
    "revision": 60,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/tetsuzuki/shinsei/annai/gensen/pdf/2025bun_04_input.pdf",
    "sourceLabel": "国税庁：令和7年分保険料控除申告書",
    "id": "fp2-153",
    "contentReview": "v60_limited_primary_source_review",
    "choiceExplanations": [
      "2万円は旧一般生命保険料控除の所得税上の上限ではありません。",
      "正解。2025年分、旧契約の一般生命保険料控除のみを適用する場合の最高額は5万円です。",
      "12万円は複数区分の生命保険料控除の合計上限と混同した金額です。",
      "4万円は新制度の一般生命保険料控除（2025年分）の上限です。"
    ],
    "taxYear": 2025,
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.60：所得控除区分・対象年・主要論点を限定点検。確認日と法令基準日は別。全例外・全法令の監修は未完了。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年中に受け取った傷病に基因する入院給付金（所定の非課税要件を満たすもの）の所得税上の取扱いはどれか。",
    "choices": [
      "譲渡所得",
      "給与所得",
      "利子所得",
      "原則として非課税"
    ],
    "answer": 3,
    "explanation": "疾病・傷害に基因して支給される所定の入院給付金は所得税法上、非課税とされます。",
    "topic": "入院給付金の課税",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-154",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "資産譲渡の対価ではなく、身体の傷病に基因する給付金です。",
      "雇用の対価ではないため、給与所得とは扱いません。",
      "預貯金利息などではないため、利子所得には該当しません。",
      "正解。所定の疾病・傷害に基因する入院給付金は一般に非課税です。"
    ]
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "法人が従業員のために負担する中小企業退職金共済の掛金について、一般的な扱いとして最も適切なのはどれか。",
    "choices": [
      "法人が負担する中退共の掛金は、原則として交際費として損金算入限度額を判定する",
      "法人が負担する中退共の掛金は、原則として役員給与として損金算入される",
      "法人が負担する中退共の掛金は、従業員が受け取る時点を待たずに全額給与課税される",
      "一定の要件で法人の損金となる"
    ],
    "answer": 3,
    "explanation": "中退共掛金は所定要件を満たす場合、法人において損金算入できます。",
    "topic": "中小企業退職金共済",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-155",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "中退共の従業員向け掛金は、原則として交際費とは性格が異なります。",
      "従業員のための制度であり、原則として役員への報酬として処理するものではありません。",
      "所定の掛金は一般に従業員がその時点で給与課税されるものではありません。",
      "正解。所定要件を満たす従業員向け掛金は法人の損金に算入できます。"
    ]
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "2025年分の贈与税について、暦年課税で父から80万円、祖母から100万円を受贈し、他の贈与・特例がない場合の基礎控除後の課税価格はどれか。",
    "choices": [
      "180万円",
      "70万円",
      "0万円",
      "110万円"
    ],
    "answer": 1,
    "explanation": "同じ受贈者の年間受贈額180万円から暦年課税の基礎控除110万円を控除して70万円です。",
    "topic": "贈与税・暦年課税",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4410.htm",
    "sourceLabel": "国税庁：複数贈与者からの贈与",
    "id": "fp2-156",
    "contentReview": "v58_limited_primary_source_review",
    "choiceExplanations": [
      "年間受贈総額180万円であり、基礎控除前の金額です。",
      "正解。80＋100－110＝70万円。暦年課税の110万円の基礎控除は受贈者ごとに年間合算で適用します。",
      "年間の贈与180万円が基礎控除110万円を超えるため、課税価格0円にはなりません。",
      "110万円は基礎控除額そのもので、控除後の課税価格ではありません。"
    ],
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "所得税の確定申告で、過去の青色申告による純損失の繰越控除制度について最も適切なものはどれか（所定の要件を満たすものとする）。",
    "choices": [
      "純損失の繰越控除は、原則として翌年以後10年間適用される",
      "原則として翌年以後3年間の繰越が可能",
      "純損失の繰越控除は、原則として翌年にしか適用できない",
      "純損失の繰越控除は、原則として翌年以後5年間適用される"
    ],
    "answer": 1,
    "explanation": "原則として青色申告者の所定の純損失は翌年以後3年間繰越控除できます。特定非常災害に係る一定の損失については5年間の例外があります。本問は原則期間を尋ねています。 原則3年間ですが、一定の特定非常災害による純損失には5年間となる特例があります。5年が常に適用されるわけではなく、災害・損失割合等の要件を確認します。本問は原則の期間を尋ねています。",
    "topic": "純損失の繰越控除",
    "createdVersion": 9,
    "revision": 58,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-157",
    "contentReview": "v58_limited_primary_source_review",
    "choiceExplanations": [
      "10年は一般的な青色申告の純損失の繰越期間ではありません。",
      "正解。青色申告・申告継続などの要件で、通常は翌年以後3年間繰り越せます。",
      "翌年1年間に限られず、その後3年間繰り越せるのが原則です。",
      "5年間は特定非常災害に係る所定の損失など例外的な場合に適用され得ますが、通常の原則期間ではありません。"
    ],
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/shotoku/2070.htm",
    "sourceLabel": "国税庁：青色申告制度",
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "所得税について正しい記述はどれか。",
    "choices": [
      "給与収入を得る給与所得者は、給与所得控除の代わりに常に必要経費の実額を差し引く",
      "上場会社から受け取る配当は、原則として譲渡所得に分類される",
      "公的年金等の収入は、原則として給与所得に分類される",
      "給与所得の金額は給与収入から給与所得控除額を控除するのが原則"
    ],
    "answer": 3,
    "explanation": "給与所得は原則として給与収入から給与所得控除額を差し引いて計算します。通常の必要経費をそのまま差し引く仕組みではなく、上場株式等の配当は一般に配当所得、公的年金等は一般に雑所得に区分されます。",
    "topic": "所得区分の理解",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-158",
    "contentReview": "v43_options_explanation_individual_review"
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "個人事業主が保有する事業用の建物が火災で損害を受け、その建物自体の損害を補てんする損害保険金を受け取った。棚卸資産や休業による収益の補償、必要経費の補てんは含まれないものとする。この保険金の所得税上の取扱いとして最も適切なのはどれか。",
    "choices": [
      "事業用建物に係る火災保険金は、原則として譲渡所得に分類される",
      "個人事業主が受け取る火災保険金は、事業用資産に係るものであれば必ず事業所得となる",
      "原則非課税",
      "事業用建物の損害を補う火災保険金は、原則として一時所得に分類される"
    ],
    "answer": 2,
    "explanation": "事業用固定資産である建物の物的損害を補てんする所定の保険金は、原則として非課税です。ただし、事業用固定資産の損失を必要経費に算入する際は、保険金で補てんされた部分を差し引く必要があります。棚卸資産・休業損失・必要経費の補てんは別の取扱いとなり得ます。",
    "topic": "損害保険金の税務",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-159",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "建物損害のてん補金は建物売却の対価ではなく、原則譲渡所得になりません。",
      "建物損害の保険金と休業利益の補償等は扱いが異なり、事業用だから必ず事業所得にはなりません。",
      "正解。資産損害を補てんする損害保険金は原則非課税。事業収益の補償等の別性質の保険金には注意します。",
      "所定の資産損害の補てん金は一般に非課税であり、当然に一時所得とはなりません。"
    ]
  },
  {
    "level": "2",
    "category": "タックスプランニング",
    "format": "four_choice",
    "question": "給与所得者が医療費控除に関して確定申告を検討している。最も適切なのはどれか。",
    "choices": [
      "医療費控除は所得税の所得控除に該当する",
      "医療費控除の額を求める際、医療費の補てんを目的とする保険金は一切差し引かない",
      "美容整形の費用も、その内容を問わず医療費控除の対象になる",
      "医療費控除では、控除の対象となった費用の全額が算出後の所得税額から直接差し引かれる"
    ],
    "answer": 0,
    "explanation": "医療費控除は、要件を満たす医療費について所得金額から差し引く所得控除です。医療費の補てんを目的とする保険金等は、給付の対象となった医療費の額まで差し引きます。医療費の範囲は診療・治療等の目的や内容で判断するため、美容整形という名称だけで全て対象とはいえません。控除対象額をそのまま税額から引く税額控除でもありません。",
    "topic": "医療費控除の基本",
    "createdVersion": 9,
    "revision": 58,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/shinkoku/tokushu/keisubetsu/iryou-koujo.htm",
    "sourceLabel": "国税庁：令和7年分の医療費控除",
    "id": "fp2-160",
    "contentReview": "v58_limited_primary_source_review",
    "choiceExplanations": [
      "正解。所得控除です。",
      "補てん目的の保険金等を対象医療費の範囲で差し引くため誤りです。",
      "医療費の目的・内容を問わず全て対象とする点が誤りです。",
      "所得控除と税額控除を混同しています。"
    ],
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "敷地面積240㎡、建築面積96㎡、容積率算定上の延べ面積360㎡の建物がある。容積率はいくらか（不算入部分はない）。",
    "choices": [
      "40％",
      "150％",
      "約26.7％",
      "約66.7％"
    ],
    "answer": 1,
    "explanation": "容積率＝延べ面積360㎡÷敷地面積240㎡×100＝150％。40％は建築面積96㎡÷敷地面積240㎡の建ぺい率、約26.7％は建築面積96㎡÷延べ面積360㎡、約66.7％は敷地面積240㎡÷延べ面積360㎡と分子・分母を逆転した値です。",
    "topic": "容積率計算",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_verified_only",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-161",
    "contentReview": "v40_independent_calculation_and_distractor_review"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "売主が買主から解約手付150万円を受領済みで、相手方が履行に着手する前に売主から解除する場合、売主が現実に提供する金額はどれか。",
    "choices": [
      "450万円",
      "300万円",
      "150万円",
      "0万円"
    ],
    "answer": 1,
    "explanation": "売主は受領済みの手付150万円の倍額である300万円を現実に提供して手付解除します。150万円は単に受領金を返すだけの額、0万円は代金のやり取り不要と誤解した場合、450万円は受領手付をさらに上乗せして3倍額と誤算した場合です。設問は法令適用要件を簡略化しており、本格監査が必要です。",
    "topic": "解約手付の倍返し",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-162",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "居住用不動産の定期建物賃貸借に関する説明として、最も適切なのはどれか。",
    "choices": [
      "定期建物賃貸借の期間は、普通借家契約と同じく法律上1年以上とする必要がある",
      "定期建物賃貸借は期間満了後も、貸主から正当事由が提示されなければ当然に更新する",
      "定期建物賃貸借では契約期間を定めずに終了時期を未定とすることができる",
      "契約期間を6か月とすることもできる"
    ],
    "answer": 3,
    "explanation": "定期建物賃貸借契約は1年未満の期間でも設定できます。締結にあたり所定の書面等による要件があります。",
    "topic": "定期建物賃貸借",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-163",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "定期建物賃貸借は1年未満の期間も設定できるため誤りです。",
      "定期建物賃貸借は所定要件の下で更新がない契約です。正当事由がないだけで当然更新されません。",
      "期間の定めがある契約であり、終了時期を定めないという説明は不適切です。",
      "正解。所定の方式・事前説明等の条件を満たせば、契約期間を6カ月にすることもできます。"
    ]
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "固定資産税の賦課期日について最も適切なのはどれか。",
    "choices": [
      "毎年7月1日",
      "毎年12月31日",
      "毎年1月1日",
      "毎年4月1日"
    ],
    "answer": 2,
    "explanation": "固定資産税の賦課期日は原則毎年1月1日です。",
    "topic": "固定資産税の賦課期日",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-164",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "固定資産税の賦課期日は7月1日ではありません。",
      "固定資産税の賦課期日は大みそかではありません。",
      "正解。原則として毎年1月1日（賦課期日）の所有者に課税します。",
      "4月1日など年度初めではなく、1月1日を基準とします。"
    ]
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "取得価格2,500万円、取得時諸費用500万円、年間満室家賃収入200万円、年間維持管理費・税金等50万円の賃貸用建物について、空室損失なしとする。取得諸費用を含めた投下資金に対する、運営費控除後の年間実質利回りはいくらか（借入金利息は考慮しない）。",
    "choices": [
      "5％",
      "8％",
      "6％",
      "約6.7％"
    ],
    "answer": 0,
    "explanation": "純収益＝200－50＝150万円。投下資金＝2,500＋500＝3,000万円。実質利回り150÷3,000×100＝5％。8％は満室賃料200÷取得価格2,500で求める表面利回り、6％は取得時諸費用を分母から落とし150÷2,500で求めた値、約6.7％は維持管理費を差し引かず200÷3,000で計算した値です。",
    "topic": "賃貸不動産の実質利回り",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-165",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "区分所有建物の管理者が最低限集会を招集する法定頻度として最も適切なのはどれか。",
    "choices": [
      "3年に1回",
      "半年に1回",
      "毎月1回",
      "毎年1回"
    ],
    "answer": 3,
    "explanation": "区分所有法では管理者は少なくとも毎年1回、集会を招集する必要があります。",
    "topic": "区分所有法",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-166",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "管理者の集会招集は3年に1回では足りません。",
      "半年に1回を最低とする法定ルールではなく、少なくとも年1回です。",
      "毎月1回の招集を法律上の最低頻度としているわけではありません。",
      "正解。区分所有法では管理者は少なくとも毎年1回集会を招集します。"
    ]
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "市街化区域内の農地を住宅敷地へ転用する場合、農地法上の手続に関して最も適切なのはどれか（所定要件を満たすものとする）。",
    "choices": [
      "市街化区域内の農地を自己の住宅用地に転用する場合も、農業委員会への届出では足りず原則として都道府県知事の許可が必要になる",
      "届出で許可不要となる場合がある",
      "市街化区域内の農地を宅地に転用する場合、農地法の届出によって許可不要となることはない",
      "市街化区域内の農地の転用は、農地法の手続きを行わなくても用途変更を自由にできる"
    ],
    "answer": 1,
    "explanation": "市街化区域内の農地転用は、一定の要件で農業委員会への届出により許可不要となります。",
    "topic": "農地転用の届出",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-167",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "市街化区域内の農地転用で所定の届出をすれば許可が不要となる例外があるため、一律に許可必要は誤りです。",
      "正解。所定の市街化区域内農地の転用は、農業委員会への届出で許可不要となる場合があります。",
      "届出によって許可不要となる場面があり、「ない」と断定できません。",
      "許可不要でも所定の届出などが必要で、何の手続きも不要というわけではありません。"
    ]
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "敷地面積350㎡、建ぺい率の上限60％、容積率の上限200％である。角地緩和などの他の条件を考慮しないとき、建築面積の上限として最も適切なものはどれか。",
    "choices": [
      "210㎡",
      "700㎡",
      "140㎡",
      "350㎡"
    ],
    "answer": 0,
    "explanation": "建ぺい率60％の上限から求める建築面積は、敷地面積350㎡×60％＝210㎡です。容積率200％から求める上限は延べ面積700㎡で、建築面積とは別です。角地や防火地域による緩和等は設問で考慮しません。",
    "topic": "建ぺい率・建築面積",
    "createdVersion": 9,
    "revision": 50,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_verified_only",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-168",
    "contentReview": "v40_independent_calculation_and_distractor_review",
    "choiceExplanations": [
      "正解。敷地350㎡×建ぺい率上限60％＝210㎡です。",
      "700㎡は敷地350㎡×容積率200％で求めた延べ面積の上限で、建築面積ではありません。",
      "140㎡は350㎡×（100％－建ぺい率60％）で求めた残りの敷地面積であり、建築面積上限ではありません。",
      "350㎡は敷地全体を建築面積に使用する計算です。建ぺい率60％の上限を無視しています。"
    ]
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "地価の公的指標に関する説明として、最も適切なのはどれか。",
    "choices": [
      "固定資産税評価額は、毎年の課税基準日ごとに必ずすべての土地・家屋で評価替えされる",
      "相続税評価で用いられる路線価は、原則として地方自治体が3年ごとに評価替えを行う",
      "公示地価と不動産の実際の取引価格は、原則として同じ金額になるよう法的に統一されている",
      "公示地価は国土交通省が公表する標準地の価格"
    ],
    "answer": 3,
    "explanation": "公示地価は国土交通省が標準地について毎年公表する価格です。固定資産税評価額の評価替えは原則3年ごとで、路線価は相続税等の評価に用いられ国税庁が公表します。公示地価と個々の実際の取引価格が必ず一致するわけではありません。",
    "topic": "公示地価と評価額",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "conceptual_choice_explanation_checked_law_not_fully_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-169",
    "contentReview": "v43_options_explanation_individual_review"
  },
  {
    "level": "2",
    "category": "不動産",
    "format": "four_choice",
    "question": "土地の売却代金7,000万円、取得費4,000万円、譲渡費用300万円で、特別控除等の適用がない場合、譲渡所得金額はいくらか。",
    "choices": [
      "2,400万円",
      "3,000万円",
      "2,700万円",
      "3,300万円"
    ],
    "answer": 2,
    "explanation": "譲渡所得＝売却7,000－取得費4,000－譲渡費用300＝2,700万円。2,400万円は譲渡費用300万円を二重に引いた値、3,000万円は譲渡費用を引き忘れた値、3,300万円は譲渡費用を引かず加えた値です。",
    "topic": "不動産譲渡所得の計算",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-170",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "被相続人の相続人が配偶者と兄・姉の3人の場合、兄1人の法定相続分はどれか（父母・子はおらず、遺言等なし）。",
    "choices": [
      "1/8",
      "1/4",
      "1/2",
      "1/16"
    ],
    "answer": 0,
    "explanation": "相続人が配偶者と兄・姉である場合、配偶者の法定相続分は3/4、兄弟姉妹全体が1/4。兄と姉の2人で均等に分けるので兄は1/8です。1/4は兄弟姉妹全体の割合を兄1人に割り当てた場合です。",
    "topic": "兄弟姉妹の法定相続分",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-171",
    "contentReview": "v23_arithmetic_explanation_audit"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "自用地としての価額1億2,000万円、借地権割合60％の貸宅地の相続税評価額はいくらか（通常の貸宅地とし、ほかの補正なし）。",
    "choices": [
      "1億2,000万円",
      "7,200万円",
      "4,800万円",
      "1億9,200万円"
    ],
    "answer": 2,
    "explanation": "貸宅地は自用地価額12,000万円×（1－借地権割合0.6）＝4,800万円。12,000万円は借地権相当額を控除しない場合、7,200万円は借地権部分12,000×0.6、19,200万円は借地権価額7,200万円を自用地価額に誤って加えた値です。",
    "topic": "貸宅地評価額",
    "createdVersion": 9,
    "revision": 3,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-172",
    "contentReview": "v42_individual_question_choice_answer_explanation_check"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "相続開始日にまだ保険事故が生じていない生命保険契約に関する権利の相続税評価について最も適切なのはどれか。",
    "choices": [
      "生命保険契約に関する権利は、未発生の死亡保険金額で評価するのが原則である",
      "生命保険契約に関する権利の相続税評価は、原則として払込保険料の累計額で行う",
      "生命保険契約に関する権利の評価額は、保険事故が発生していなければ常に0円になる",
      "原則として相続開始時の解約返戻金相当額による"
    ],
    "answer": 3,
    "explanation": "生命保険契約に関する権利は原則、相続開始時の解約返戻金相当額を基に評価します。",
    "topic": "生命保険契約に関する権利",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-173",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "死亡保険金額そのものを権利の評価額とするわけではありません（死亡事故未発生の場合）。",
      "払い込んだ保険料の単純累計ではなく、相続開始時の解約返戻金相当額等が基準です。",
      "契約に価値がある可能性があり、保険事故未発生でも必ず0円とはいえません。",
      "正解。原則、相続開始時の解約返戻金相当額を基に評価します。"
    ]
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "相続税の課税価格の合計額が9,000万円で、法定相続人は配偶者と子2人の計3人である。特例・加算等を考慮しない場合、課税遺産総額はいくらか。",
    "choices": [
      "3,600万円",
      "4,200万円",
      "4,800万円",
      "5,400万円"
    ],
    "answer": 1,
    "explanation": "基礎控除＝3,000＋600×法定相続人3人＝4,800万円。課税遺産総額＝9,000－4,800＝4,200万円。3,600万円は法定相続人を4人と数えた場合、4,800万円は2人と数えた場合、5,400万円は1人と数えた場合の課税遺産総額であり、全て同じ与件から算出できます。",
    "topic": "相続税課税遺産総額",
    "createdVersion": 9,
    "revision": 4,
    "lawReferenceDate": null,
    "verificationStatus": "arithmetic_reviewed_law_not_audited",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.keisan.nta.go.jp/oshirase/sozoku/yohihantei/goriyomae/hoteisozokunin.html",
    "sourceLabel": "公式資料（論点確認用）",
    "id": "fp2-174",
    "contentReview": "v42_individual_question_choice_answer_explanation_check",
    "sourceName": "制度確認用の公的資料"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "2025年中、Aさんは父・母の双方からの贈与について相続時精算課税を適用している。父から120万円、母から100万円を受け取り、ほかに贈与はない。この年の相続時精算課税に係る110万円の基礎控除について、正しい説明はどれか（父母・Aさんは適用要件を満たす）。",
    "choices": [
      "父からの贈与と母からの贈与に、それぞれ110万円ずつの基礎控除を適用する",
      "基礎控除110万円を贈与額に応じて按分し、父からの贈与に60万円、母からの贈与に50万円を配分する",
      "110万円の基礎控除は暦年課税だけの制度であり、相続時精算課税には適用されない",
      "先に父から贈与された120万円に基礎控除110万円を全額適用し、母からの贈与には配分しない"
    ],
    "answer": 1,
    "explanation": "2024年1月1日以後の相続時精算課税には、受贈者について年110万円の基礎控除があります。複数の特定贈与者から同じ年に贈与を受ける場合は、贈与額に応じて110万円を按分します。父120万円・母100万円の合計220万円より、父分は110×120÷220＝60万円、母分は110×100÷220＝50万円です。特定贈与者ごとに110万円ずつ控除するのではありません。",
    "topic": "相続時精算課税・年110万円",
    "createdVersion": 9,
    "revision": 49,
    "lawReferenceDate": null,
    "verificationStatus": "selected_points_checked_comprehensive_audit_incomplete",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/zoyo/4410.htm",
    "sourceLabel": "国税庁：複数贈与者からの贈与",
    "id": "fp2-175",
    "contentReview": "v58_limited_primary_source_review",
    "choiceExplanations": [
      "特定贈与者が2人いても、受贈者に対する年110万円の基礎控除をそれぞれ全額使うことはできません。",
      "正解。父は110×120÷220＝60万円、母は110×100÷220＝50万円に按分し、合計110万円を控除します。",
      "2024年1月1日以後の贈与には、相続時精算課税にも年110万円の基礎控除が設けられています。",
      "複数の特定贈与者から同一年に贈与があるとき、受領順で基礎控除を優先配分するのではなく贈与額に応じて按分します。"
    ],
    "sourceCheckedDate": "2026-10-13",
    "reviewNote": "Ver.58：主要論点と適用年・設例条件を限定点検。確認日と法令基準日は別。最新法令・全例外の包括監修ではありません。"
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "住宅を所有する被相続人が亡くなり相続人が単純承認した。相続債務に関して最も適切なのはどれか。",
    "choices": [
      "財産だけでなく原則として借入金などの債務も引き継ぐ",
      "単純承認した場合、被相続人の債務を引き継ぐには別途家庭裁判所の許可が必要である",
      "被相続人の住宅ローン債務は、原則として相続開始日に消滅する",
      "土地・建物の所有権を相続した人は、借入金などの債務を全く承継しない"
    ],
    "answer": 0,
    "explanation": "相続人の単純承認では原則として被相続人の権利義務を包括承継します。",
    "topic": "単純承認と債務",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-176",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。単純承認では、原則として被相続人の権利だけでなく債務も承継します。",
      "単純承認のたびに債務承継のための家庭裁判所の許可を要するものではありません。",
      "住宅ローンは原則相続債務ですが、団信などによる弁済の有無は別途確認が必要です。",
      "不動産の取得だけで債務を無条件に回避できるわけではありません。"
    ]
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "複数の共同相続人が限定承認をする場合について、民法上、最も適切な説明はどれか。",
    "choices": [
      "限定承認は、共同相続人のうち過半数が賛成すれば他の相続人の同意なく行える",
      "原則として共同相続人の全員が共同して家庭裁判所に申述する",
      "限定承認は、相続人全員が合意していれば家庭裁判所への申述を要しない",
      "限定承認をした相続人は、相続財産を超える債務についても自身の財産から弁済する義務がある"
    ],
    "answer": 1,
    "explanation": "共同相続人が限定承認をするときは、原則として共同相続人全員が共同して家庭裁判所へ申述します。債務の弁済責任は相続によって得た財産の範囲内です。",
    "topic": "限定承認の手続",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-177",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "限定承認は原則として共同相続人全員が共同で行うもので、多数決ではありません。",
      "正解。原則共同相続人の全員が共同して家庭裁判所に申述します。",
      "全員の合意があっても、家庭裁判所への所定の申述を省略できるわけではありません。",
      "限定承認では原則として相続によって得た財産を限度に債務を弁済する考え方です。"
    ]
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "相続開始を知った相続人が家庭裁判所で相続放棄の申述を検討する場合、原則の期間として最も適切なのはどれか（熟慮期間の伸長などなし）。",
    "choices": [
      "3か月以内",
      "1か月以内",
      "1年以内",
      "5年以内"
    ],
    "answer": 0,
    "explanation": "原則として自己のために相続の開始があったことを知った時から3か月以内です。",
    "topic": "相続放棄の熟慮期間",
    "createdVersion": 9,
    "revision": 1,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.courts.go.jp/saiban/syurui/syurui_kazi/kazi_06_13/index.html",
    "sourceLabel": "公式資料（論点確認用）",
    "id": "fp2-178",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "正解。原則、自己のために相続開始を知った時から3カ月以内に放棄等を検討します。",
      "1カ月ではありません。原則3カ月の熟慮期間です。",
      "原則1年ではありません。所定の期間伸長が認められる場合は別途手続きが必要です。",
      "原則5年ではありません。期間を過ぎると単純承認とみなされる場合があります。"
    ]
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "相続税の配偶者に対する税額軽減について最も適切な説明はどれか（具体的な適用要件を満たす前提）。",
    "choices": [
      "配偶者の税額軽減は、配偶者が相続税の申告をしなくても自動的に全額適用される",
      "配偶者が取得した正味遺産額が法定相続分相当額または1億6,000万円のいずれか多い額まで、配偶者の相続税額が軽減される",
      "配偶者の税額軽減は、配偶者だけでなく被相続人の兄弟姉妹にも同じ要件で適用される",
      "配偶者の税額軽減では、正味遺産額のうち配偶者が取得した金額にかかわらず、必ず1億6,000万円までしか対象にならない"
    ],
    "answer": 1,
    "explanation": "配偶者の税額軽減は「1億6,000万円または法定相続分相当額」のいずれか多い額までが基本です。申告や遺産分割など所定要件があります。",
    "topic": "配偶者の税額軽減",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "sourceUrl": "https://www.nta.go.jp/taxes/shiraberu/taxanswer/sozoku/4158.htm",
    "sourceLabel": "公式資料（論点確認用）",
    "id": "fp2-179",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "配偶者の税額軽減は通常、申告等の所定要件があり、無申告で自動適用されません。",
      "正解。配偶者の正味取得額が1億6,000万円または法定相続分相当額の多い方まで、所定の要件で税額軽減されます。",
      "配偶者を対象とする特例で、兄弟姉妹へ同じ条件で適用されるものではありません。",
      "正味遺産の法定相続分相当額が1億6,000万円を超える場合、その大きい額が基準になります。"
    ]
  },
  {
    "level": "2",
    "category": "相続・事業承継",
    "format": "four_choice",
    "question": "民法上の遺言について、次のうち最も適切なのはどれか。",
    "choices": [
      "自筆証書遺言は、遺言者が口頭で意思を伝え、それを第三者が記録するだけで成立する",
      "自筆証書遺言は、原則として遺言者が全文・日付・氏名を自書し押印する（財産目録の例外あり）",
      "自筆証書遺言は一度作成すると、遺言者が新たな遺言を作っても撤回できない",
      "自筆証書遺言では、本文を第三者が代筆しても、遺言者が署名・押印すれば原則として有効になる"
    ],
    "answer": 1,
    "explanation": "自筆証書遺言は原則として全文・日付・氏名の自書と押印が必要です。財産目録に一定の例外があります。",
    "topic": "自筆証書遺言の要件",
    "createdVersion": 9,
    "revision": 2,
    "lawReferenceDate": null,
    "verificationStatus": "needs_review",
    "themeReferenceUrl": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_g.pdf",
    "themeReferenceLabel": "金財2026年5月公表・FP2級学科試験（出題分野・形式を参考）",
    "id": "fp2-180",
    "contentReview": "automatic_structural_check_only",
    "choiceExplanations": [
      "口頭の意思を第三者が記録するだけでは通常の自筆証書遺言の方式を満たしません。",
      "正解。原則、遺言者が全文・日付・氏名を自書し押印します。財産目録には所定の例外があります。",
      "遺言者は所定の方式によって前の遺言を撤回できます。作成後の撤回ができないわけではありません。",
      "本文の代筆では、原則として自筆証書遺言の自書要件を満たしません。"
    ]
  }
];
