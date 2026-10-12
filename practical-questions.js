// FP実技：学習用オリジナル例題。参考PDFの文章・図表は転載していません。
const PRACTICAL_TRACKS = [
  {
    "id": "jafp3",
    "level": "3",
    "org": "日本FP協会",
    "name": "資産設計提案業務",
    "format": "3択",
    "officialCount": 20,
    "minutes": 60,
    "source": "https://www.jafp.or.jp/exam/mohan/files/j3_202605_q.pdf"
  },
  {
    "id": "jafp2",
    "level": "2",
    "org": "日本FP協会",
    "name": "資産設計提案業務",
    "format": "4択・数値入力",
    "officialCount": 40,
    "minutes": 90,
    "source": "https://www.jafp.or.jp/exam/mohan/files/j2_202605_q.pdf"
  },
  {
    "id": "kinzai3_personal",
    "level": "3",
    "org": "金融財政事情研究会",
    "name": "個人資産相談業務",
    "format": "3択（5事例×3問）",
    "officialCount": 15,
    "minutes": 60,
    "source": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_j_kojin.pdf"
  },
  {
    "id": "kinzai3_insurance",
    "level": "3",
    "org": "金融財政事情研究会",
    "name": "保険顧客資産相談業務",
    "format": "3択（5事例×3問）",
    "officialCount": 15,
    "minutes": 60,
    "source": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp03_j_hoken.pdf"
  },
  {
    "id": "kinzai2_personal",
    "level": "2",
    "org": "金融財政事情研究会",
    "name": "個人資産相談業務",
    "format": "事例・数値入力等",
    "officialCount": 15,
    "minutes": 90,
    "source": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_j_kojin.pdf",
    "disabled": true
  },
  {
    "id": "kinzai2_business",
    "level": "2",
    "org": "金融財政事情研究会",
    "name": "中小事業主資産相談業務",
    "format": "事例・数値入力等",
    "officialCount": 15,
    "minutes": 90,
    "source": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_j_chusho.pdf",
    "disabled": true
  },
  {
    "id": "kinzai2_life",
    "level": "2",
    "org": "金融財政事情研究会",
    "name": "生保顧客資産相談業務",
    "format": "事例・数値入力等",
    "officialCount": 15,
    "minutes": 90,
    "source": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_j_seiho.pdf",
    "disabled": true
  },
  {
    "id": "kinzai2_nonlife",
    "level": "2",
    "org": "金融財政事情研究会",
    "name": "損保顧客資産相談業務",
    "format": "事例・数値入力等",
    "officialCount": 15,
    "minutes": 90,
    "source": "https://www.kinzai.or.jp/uploads/lib/question/202605/cbt_fp02_j_sonpo.pdf",
    "disabled": true
  }
];
const PRACTICAL_QUESTIONS = [
  {
    "id": "pr-jafp3-001",
    "track": "jafp3",
    "case": 1,
    "caseTitle": "家計のバランスシート",
    "caseText": "保有資産は預金250万円、投資信託350万円、住宅時価3,000万円。負債は住宅ローン1,600万円のみとする。",
    "question": "純資産額はいくらか。",
    "kind": "choice",
    "choices": [
      "1,600万円",
      "2,000万円",
      "3,600万円"
    ],
    "answer": 1,
    "explanation": "資産合計3,600万円から負債1,600万円を差し引き、純資産は2,000万円。",
    "topic": "資産設計",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-002",
    "track": "jafp3",
    "case": 2,
    "caseTitle": "金融資産残高の推移",
    "caseText": "前年末の金融資産残高500万円、年間収支は＋60万円、運用利率は年2％。年末の収支を加算するとする。",
    "question": "当年末の金融資産残高はいくらか。",
    "kind": "choice",
    "choices": [
      "560万円",
      "570万円",
      "572万円"
    ],
    "answer": 1,
    "explanation": "500×1.02＋60＝570万円。運用するのは前年末残高であり、年間収支はその後に加算する。",
    "topic": "キャッシュフロー",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-003",
    "track": "jafp3",
    "case": 3,
    "caseTitle": "生活費の将来額",
    "caseText": "現在の年間生活費は180万円。毎年2％ずつ増えると仮定し、複利で2年後の生活費を計算する。",
    "question": "2年後の生活費として最も近いものはどれか。",
    "kind": "choice",
    "choices": [
      "約183.6万円",
      "約187.3万円",
      "約194.4万円"
    ],
    "answer": 1,
    "explanation": "180×1.02×1.02＝187.272万円なので約187.3万円。",
    "topic": "キャッシュフロー",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-004",
    "track": "jafp3",
    "case": 4,
    "caseTitle": "保険による損害への備え",
    "caseText": "Aさんは住宅の一般的な火災保険に加入している。地震保険には未加入とし、特約は考慮しない。",
    "question": "地震そのものによる建物の倒壊について、適切な記述はどれか。",
    "kind": "choice",
    "choices": [
      "通常の火災保険で必ず補償される",
      "地震保険を付帯しなければ、一般に火災保険だけでは補償されない",
      "経年劣化として火災保険が補償する"
    ],
    "answer": 1,
    "explanation": "一般的な火災保険では地震を原因とする損害は補償対象外。地震保険で備える。",
    "topic": "リスク管理",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-005",
    "track": "jafp3",
    "case": 5,
    "caseTitle": "建ぺい率",
    "caseText": "敷地面積200㎡、建築面積80㎡の住宅を考える。",
    "question": "建ぺい率はいくらか。",
    "kind": "choice",
    "choices": [
      "40％",
      "60％",
      "250％"
    ],
    "answer": 0,
    "explanation": "建ぺい率＝建築面積÷敷地面積＝80÷200＝40％。",
    "topic": "不動産",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-006",
    "track": "jafp3",
    "case": 6,
    "caseTitle": "債券の最終利回り",
    "caseText": "額面100円、購入価格102円、償還価格100円、表面利率年2％、残存期間4年の債券。税金・手数料なし、単利で計算する。",
    "question": "最終利回り（年率）の概算値はどれか。",
    "kind": "choice",
    "choices": [
      "約1.47％",
      "約1.96％",
      "約2.45％"
    ],
    "answer": 0,
    "explanation": "{2＋(100－102)÷4}÷102×100＝約1.47％。",
    "topic": "金融資産運用",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-007",
    "track": "jafp3",
    "case": 7,
    "caseTitle": "配当利回り",
    "caseText": "ある株式の株価は1,600円、1株当たり年間配当金は48円。",
    "question": "配当利回りはいくらか。",
    "kind": "choice",
    "choices": [
      "2％",
      "3％",
      "4％"
    ],
    "answer": 1,
    "explanation": "48÷1,600×100＝3％。",
    "topic": "金融資産運用",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-008",
    "track": "jafp3",
    "case": 8,
    "caseTitle": "期待収益率",
    "caseText": "資産Aを40％（期待収益率2％）、資産Bを60％（期待収益率5％）組み入れた。",
    "question": "ポートフォリオの期待収益率はいくらか。",
    "kind": "choice",
    "choices": [
      "3.2％",
      "3.8％",
      "4.2％"
    ],
    "answer": 1,
    "explanation": "2％×40％＋5％×60％＝0.8％＋3.0％＝3.8％。",
    "topic": "金融資産運用",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-009",
    "track": "jafp3",
    "case": 9,
    "caseTitle": "一時所得の計算",
    "caseText": "個人が一時払の養老保険を満期まで保有し、満期保険金600万円を受領した。既払込保険料は480万円。他の一時所得や必要経費はなく、適用する特別控除額は50万円とする。",
    "question": "この保険金から生じる課税対象の一時所得の総所得金額算入額はいくらか。",
    "kind": "choice",
    "choices": [
      "35万円",
      "70万円",
      "120万円"
    ],
    "answer": 0,
    "explanation": "(600－480－50)×1/2＝35万円。税額そのものを問うものではない。",
    "topic": "タックスプランニング",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-010",
    "track": "jafp3",
    "case": 10,
    "caseTitle": "暦年課税の基礎控除",
    "caseText": "成人の子が親から同じ年に現金300万円を贈与され、他の贈与はなく、贈与税の非課税特例や相続時精算課税は利用しない。",
    "question": "暦年課税における基礎控除後の課税価格はいくらか。",
    "kind": "choice",
    "choices": [
      "110万円",
      "190万円",
      "300万円"
    ],
    "answer": 1,
    "explanation": "300－110＝190万円。これは贈与税額ではなく課税価格。",
    "topic": "相続・贈与",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-011",
    "track": "jafp3",
    "case": 11,
    "caseTitle": "相続税の基礎控除",
    "caseText": "被相続人には配偶者と子2人がいる。子は全員生存し、相続放棄はない。",
    "question": "相続税の遺産に係る基礎控除額はいくらか。",
    "kind": "choice",
    "choices": [
      "3,600万円",
      "4,800万円",
      "5,400万円"
    ],
    "answer": 1,
    "explanation": "法定相続人は3人。3,000万円＋600万円×3＝4,800万円。",
    "topic": "相続・贈与",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp3-012",
    "track": "jafp3",
    "case": 12,
    "caseTitle": "法定相続分",
    "caseText": "相続人は配偶者と子2人のみ。遺言等による特別な事情は考慮しない。",
    "question": "子1人の法定相続分はいくらか。",
    "kind": "choice",
    "choices": [
      "1/2",
      "1/3",
      "1/4"
    ],
    "answer": 2,
    "explanation": "配偶者1/2、子全体1/2。子が2人なので、それぞれ1/4。",
    "topic": "相続・贈与",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp2-001",
    "track": "jafp2",
    "case": 1,
    "caseTitle": "債券の利回り",
    "caseText": "表面利率年1.5％、購入価格98円、償還価格100円、残存期間4年。額面100円につき、税金・手数料なし、単利とする。",
    "question": "最終利回り（年率）を小数点以下第2位までの％で入力してください。",
    "kind": "numeric",
    "choices": [],
    "answer": 2.04,
    "explanation": "{1.5＋(100－98)÷4}÷98×100＝2.040816…％。小数点以下第3位を四捨五入して2.04％。",
    "topic": "債券利回り",
    "lawReferenceDate": "2025-04-01",
    "unit": "％",
    "tolerance": 0.005
  },
  {
    "id": "pr-jafp2-002",
    "track": "jafp2",
    "case": 2,
    "caseTitle": "株式の財務指標",
    "caseText": "1株当たり当期純利益150円、1株当たり年間配当金60円、株価1,800円、1株当たり純資産1,200円。",
    "question": "配当性向として適切なものはどれか。",
    "kind": "choice",
    "choices": [
      "25％",
      "33.3％",
      "40％",
      "66.7％"
    ],
    "answer": 2,
    "explanation": "60÷150×100＝40％。配当性向は配当金を当期純利益で除して求める。",
    "topic": "株式指標",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp2-003",
    "track": "jafp2",
    "case": 3,
    "caseTitle": "家計の純資産",
    "caseText": "預金1,200万円、有価証券400万円、住宅の時価4,800万円、住宅ローン残高2,500万円。これ以外の資産・負債なし。",
    "question": "純資産額（万円）を数字で入力してください。",
    "kind": "numeric",
    "choices": [],
    "answer": 3900,
    "explanation": "(1,200＋400＋4,800)－2,500＝3,900万円。",
    "topic": "資産設計",
    "lawReferenceDate": "2025-04-01",
    "unit": "万円",
    "tolerance": 0
  },
  {
    "id": "pr-jafp2-004",
    "track": "jafp2",
    "case": 4,
    "caseTitle": "譲渡所得の算式",
    "caseText": "一般的な資産の譲渡で、譲渡収入780万円、取得費560万円、譲渡費用20万円。特別控除などを考慮せず差引利益のみを求める。",
    "question": "譲渡による差引利益はどれか。",
    "kind": "choice",
    "choices": [
      "180万円",
      "200万円",
      "220万円",
      "240万円"
    ],
    "answer": 1,
    "explanation": "780－560－20＝200万円。この額をそのまま課税譲渡所得と断定するものではない。",
    "topic": "譲渡所得",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp2-005",
    "track": "jafp2",
    "case": 5,
    "caseTitle": "資産配分と期待収益率",
    "caseText": "資産Aの投資割合30％・期待収益率4％、資産Bの投資割合70％・期待収益率−1％。",
    "question": "全体の期待収益率を％で入力してください。",
    "kind": "numeric",
    "choices": [],
    "answer": 0.5,
    "explanation": "4％×0.3＋(−1％)×0.7＝0.5％。",
    "topic": "金融資産運用",
    "lawReferenceDate": "2025-04-01",
    "unit": "％",
    "tolerance": 0.0001
  },
  {
    "id": "pr-jafp2-006",
    "track": "jafp2",
    "case": 6,
    "caseTitle": "賃貸不動産の表面利回り",
    "caseText": "購入価格2,400万円の賃貸住宅で、満室想定の月額家賃が12万円。諸費用・空室は考慮しない。",
    "question": "年間の表面利回りはいくらか。",
    "kind": "choice",
    "choices": [
      "5％",
      "6％",
      "7％",
      "8％"
    ],
    "answer": 1,
    "explanation": "12万円×12か月÷2,400万円×100＝6％。",
    "topic": "不動産",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp2-007",
    "track": "jafp2",
    "case": 7,
    "caseTitle": "建ぺい率の計算",
    "caseText": "敷地面積250㎡、建築面積200㎡。地域の建築規制への適合性は問わず実際の比率を求める。",
    "question": "建ぺい率はどれか。",
    "kind": "choice",
    "choices": [
      "60％",
      "75％",
      "80％",
      "125％"
    ],
    "answer": 2,
    "explanation": "200÷250×100＝80％。",
    "topic": "不動産",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp2-008",
    "track": "jafp2",
    "case": 8,
    "caseTitle": "容積率の計算",
    "caseText": "敷地面積240㎡、建築物の延べ面積180㎡。",
    "question": "容積率を％で入力してください。",
    "kind": "numeric",
    "choices": [],
    "answer": 75,
    "explanation": "180÷240×100＝75％。",
    "topic": "不動産",
    "lawReferenceDate": "2025-04-01",
    "unit": "％",
    "tolerance": 0
  },
  {
    "id": "pr-jafp2-009",
    "track": "jafp2",
    "case": 9,
    "caseTitle": "生命保険金と税金",
    "caseText": "契約者（保険料負担者）および被保険者が父、死亡保険金受取人は子。父の死亡により保険金が支払われた。",
    "question": "この死亡保険金について一般に適用される税目はどれか。",
    "kind": "choice",
    "choices": [
      "所得税",
      "贈与税",
      "相続税",
      "固定資産税"
    ],
    "answer": 2,
    "explanation": "保険料を負担していた被相続人の死亡による保険金は、みなし相続財産として原則相続税の対象となる。",
    "topic": "保険税務",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp2-010",
    "track": "jafp2",
    "case": 10,
    "caseTitle": "公的年金と税務",
    "caseText": "個人型確定拠出年金（iDeCo）の加入者が拠出した掛金について、他の特例は考慮しない。",
    "question": "所得税の所得控除の区分はどれか。",
    "kind": "choice",
    "choices": [
      "生命保険料控除",
      "小規模企業共済等掛金控除",
      "寄附金控除",
      "社会保険料控除"
    ],
    "answer": 1,
    "explanation": "iDeCo加入者が拠出した掛金は原則として小規模企業共済等掛金控除の対象。",
    "topic": "年金税務",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-jafp2-011",
    "track": "jafp2",
    "case": 11,
    "caseTitle": "相続税の基礎控除",
    "caseText": "被相続人には配偶者と子3人がいる。他の相続人や放棄はない。",
    "question": "遺産に係る基礎控除額（万円）を入力してください。",
    "kind": "numeric",
    "choices": [],
    "answer": 5400,
    "explanation": "法定相続人4人なので、3,000万円＋600万円×4＝5,400万円。",
    "topic": "相続",
    "lawReferenceDate": "2025-04-01",
    "unit": "万円",
    "tolerance": 0
  },
  {
    "id": "pr-jafp2-012",
    "track": "jafp2",
    "case": 12,
    "caseTitle": "リスク管理の事例",
    "caseText": "会社員Aさんは、事故によって第三者にケガをさせるリスクと自分の死亡に備えるリスクを区別して検討している。",
    "question": "被保険者が法律上の損害賠償責任を負うリスクに主として対応する保険はどれか。",
    "kind": "choice",
    "choices": [
      "個人賠償責任保険",
      "終身生命保険",
      "養老保険",
      "個人年金保険"
    ],
    "answer": 0,
    "explanation": "第三者への賠償責任に備える代表例は個人賠償責任保険。契約の補償範囲は要確認。",
    "topic": "リスク管理",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-001",
    "track": "kinzai3_personal",
    "case": 1,
    "caseTitle": "遺族年金・介護保険の相談",
    "caseText": "会社員Aさん42歳、妻Bさん40歳、子Cさん12歳、子Dさん9歳の4人家族。Aさんは厚生年金の被保険者で、妻と子を生計維持している。具体的な年金額の年度変動は問わない。",
    "question": "Aさんが死亡した場合の公的年金の遺族給付について、一般に適切な説明はどれか。",
    "kind": "choice",
    "choices": [
      "子のある配偶者は、要件を満たせば遺族基礎年金を受け得る",
      "子のある配偶者に遺族基礎年金が支払われることはない",
      "遺族厚生年金があると遺族基礎年金は一切支払われない"
    ],
    "answer": 0,
    "explanation": "子の要件などを満たす配偶者は遺族基礎年金の対象となり得る。",
    "topic": "遺族年金",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-002",
    "track": "kinzai3_personal",
    "case": 1,
    "caseTitle": "遺族年金・介護保険の相談",
    "caseText": "会社員Aさん42歳、妻Bさん40歳、子Cさん12歳、子Dさん9歳の4人家族。Aさんは厚生年金の被保険者で、妻と子を生計維持している。具体的な年金額の年度変動は問わない。",
    "question": "原則的な遺族厚生年金の額は、死亡した人の老齢厚生年金の報酬比例部分の何割に相当するか。",
    "kind": "choice",
    "choices": [
      "2分の1",
      "4分の3",
      "全額"
    ],
    "answer": 1,
    "explanation": "原則、報酬比例部分の4分の3。実際の額は受給要件・調整等で変わる。",
    "topic": "遺族年金",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-003",
    "track": "kinzai3_personal",
    "case": 1,
    "caseTitle": "遺族年金・介護保険の相談",
    "caseText": "会社員Aさん42歳、妻Bさん40歳、子Cさん12歳、子Dさん9歳の4人家族。Aさんは厚生年金の被保険者で、妻と子を生計維持している。具体的な年金額の年度変動は問わない。",
    "question": "公的介護保険の第2号被保険者について適切な記述はどれか。",
    "kind": "choice",
    "choices": [
      "40歳以上65歳未満の医療保険加入者",
      "20歳以上60歳未満の全住民",
      "65歳以上の住民のみ"
    ],
    "answer": 0,
    "explanation": "第2号被保険者は40歳以上65歳未満の医療保険加入者。",
    "topic": "公的介護保険",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-004",
    "track": "kinzai3_personal",
    "case": 2,
    "caseTitle": "株式・債券の比較",
    "caseText": "AさんはX社株を検討中。株価1,200円、1株当たり純利益100円、1株当たり純資産800円、年間配当金24円。別にY社債は額面100円、購入価格104円、償還価格100円、残存4年、表面利率年2％とする。税・手数料なし。",
    "question": "X社のPER（株価収益率）はいくらか。",
    "kind": "choice",
    "choices": [
      "8倍",
      "12倍",
      "24倍"
    ],
    "answer": 1,
    "explanation": "株価1,200円÷EPS100円＝12倍。",
    "topic": "株式指標",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-005",
    "track": "kinzai3_personal",
    "case": 2,
    "caseTitle": "株式・債券の比較",
    "caseText": "AさんはX社株を検討中。株価1,200円、1株当たり純利益100円、1株当たり純資産800円、年間配当金24円。別にY社債は額面100円、購入価格104円、償還価格100円、残存4年、表面利率年2％とする。税・手数料なし。",
    "question": "X社のPBR（株価純資産倍率）はいくらか。",
    "kind": "choice",
    "choices": [
      "1.5倍",
      "12倍",
      "0.67倍"
    ],
    "answer": 0,
    "explanation": "1,200÷800＝1.5倍。",
    "topic": "株式指標",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-006",
    "track": "kinzai3_personal",
    "case": 2,
    "caseTitle": "株式・債券の比較",
    "caseText": "AさんはX社株を検討中。株価1,200円、1株当たり純利益100円、1株当たり純資産800円、年間配当金24円。別にY社債は額面100円、購入価格104円、償還価格100円、残存4年、表面利率年2％とする。税・手数料なし。",
    "question": "Y社債の最終利回り（年率・単利）の概算はいくらか。",
    "kind": "choice",
    "choices": [
      "約0.96％",
      "約1.50％",
      "約2.00％"
    ],
    "answer": 0,
    "explanation": "{2＋(100－104)÷4}÷104×100＝約0.9615％。",
    "topic": "債券利回り",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-007",
    "track": "kinzai3_personal",
    "case": 3,
    "caseTitle": "所得税・贈与税の相談",
    "caseText": "個人事業主Aさんは自分の事業の申告方法を検討している。別途、長女（成人）が同年中にAさんから現金250万円を受け取った。贈与はこの1件のみで、非課税特例と相続時精算課税は適用しない。",
    "question": "個人事業の売上から必要経費を差し引いて求める所得は原則としてどれか。",
    "kind": "choice",
    "choices": [
      "給与所得",
      "事業所得",
      "退職所得"
    ],
    "answer": 1,
    "explanation": "事業として営む事業の収入・必要経費は原則、事業所得の計算対象。",
    "topic": "所得税",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-008",
    "track": "kinzai3_personal",
    "case": 3,
    "caseTitle": "所得税・贈与税の相談",
    "caseText": "個人事業主Aさんは自分の事業の申告方法を検討している。別途、長女（成人）が同年中にAさんから現金250万円を受け取った。贈与はこの1件のみで、非課税特例と相続時精算課税は適用しない。",
    "question": "上記の長女について、暦年課税の基礎控除後の贈与税の課税価格はいくらか。",
    "kind": "choice",
    "choices": [
      "110万円",
      "140万円",
      "250万円"
    ],
    "answer": 1,
    "explanation": "250－110＝140万円。",
    "topic": "贈与税",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-009",
    "track": "kinzai3_personal",
    "case": 3,
    "caseTitle": "所得税・贈与税の相談",
    "caseText": "個人事業主Aさんは自分の事業の申告方法を検討している。別途、長女（成人）が同年中にAさんから現金250万円を受け取った。贈与はこの1件のみで、非課税特例と相続時精算課税は適用しない。",
    "question": "青色申告者の事業所得等から生じた純損失の繰越控除期間は、原則何年間か。",
    "kind": "choice",
    "choices": [
      "1年間",
      "3年間",
      "10年間"
    ],
    "answer": 1,
    "explanation": "一定の要件を満たす青色申告者は、純損失を原則翌年以後3年間繰り越せる。",
    "topic": "所得税",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-010",
    "track": "kinzai3_personal",
    "case": 4,
    "caseTitle": "不動産活用の相談",
    "caseText": "Aさんは敷地240㎡に延べ面積300㎡・建築面積96㎡の賃貸住宅を検討している。購入・建築費用の総額を2,000万円、満室想定家賃を月9万円とする。税・空室・諸費用は計算上考慮しない。",
    "question": "建ぺい率はどれか。",
    "kind": "choice",
    "choices": [
      "40％",
      "60％",
      "80％"
    ],
    "answer": 0,
    "explanation": "96÷240×100＝40％。",
    "topic": "建築規制",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-011",
    "track": "kinzai3_personal",
    "case": 4,
    "caseTitle": "不動産活用の相談",
    "caseText": "Aさんは敷地240㎡に延べ面積300㎡・建築面積96㎡の賃貸住宅を検討している。購入・建築費用の総額を2,000万円、満室想定家賃を月9万円とする。税・空室・諸費用は計算上考慮しない。",
    "question": "延べ面積に基づく容積率はどれか。",
    "kind": "choice",
    "choices": [
      "80％",
      "125％",
      "150％"
    ],
    "answer": 1,
    "explanation": "300÷240×100＝125％。",
    "topic": "建築規制",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-012",
    "track": "kinzai3_personal",
    "case": 4,
    "caseTitle": "不動産活用の相談",
    "caseText": "Aさんは敷地240㎡に延べ面積300㎡・建築面積96㎡の賃貸住宅を検討している。購入・建築費用の総額を2,000万円、満室想定家賃を月9万円とする。税・空室・諸費用は計算上考慮しない。",
    "question": "想定する賃貸不動産の表面利回りはどれか。",
    "kind": "choice",
    "choices": [
      "5.4％",
      "6.0％",
      "9.0％"
    ],
    "answer": 0,
    "explanation": "9万円×12÷2,000万円×100＝5.4％。",
    "topic": "不動産収益",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-013",
    "track": "kinzai3_personal",
    "case": 5,
    "caseTitle": "相続と宅地評価",
    "caseText": "Aさんが死亡し、法定相続人は妻Bさんと子Cさん・Dさんの合計3人。遺言など特別な事情はなく、居住用宅地の相続税評価額は4,000万円。配偶者が宅地を取得し、特定居住用宅地等の小規模宅地等の特例の適用要件を満たすものとする。",
    "question": "法定相続分として適切なのはどれか。",
    "kind": "choice",
    "choices": [
      "妻1/3・子各1/3",
      "妻1/2・子各1/4",
      "妻2/3・子各1/6"
    ],
    "answer": 1,
    "explanation": "配偶者と子が相続人なら配偶者1/2、子全体1/2。子2人で各1/4。",
    "topic": "法定相続分",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-014",
    "track": "kinzai3_personal",
    "case": 5,
    "caseTitle": "相続と宅地評価",
    "caseText": "Aさんが死亡し、法定相続人は妻Bさんと子Cさん・Dさんの合計3人。遺言など特別な事情はなく、居住用宅地の相続税評価額は4,000万円。配偶者が宅地を取得し、特定居住用宅地等の小規模宅地等の特例の適用要件を満たすものとする。",
    "question": "相続税の遺産に係る基礎控除額はいくらか。",
    "kind": "choice",
    "choices": [
      "3,600万円",
      "4,200万円",
      "4,800万円"
    ],
    "answer": 2,
    "explanation": "3,000万円＋600万円×法定相続人3人＝4,800万円。",
    "topic": "相続税",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_personal-015",
    "track": "kinzai3_personal",
    "case": 5,
    "caseTitle": "相続と宅地評価",
    "caseText": "Aさんが死亡し、法定相続人は妻Bさんと子Cさん・Dさんの合計3人。遺言など特別な事情はなく、居住用宅地の相続税評価額は4,000万円。配偶者が宅地を取得し、特定居住用宅地等の小規模宅地等の特例の適用要件を満たすものとする。",
    "question": "宅地の全体が特定居住用宅地等の対象となり評価額を80％減額できる場合、課税価格に算入する宅地評価額はいくらか。",
    "kind": "choice",
    "choices": [
      "800万円",
      "2,000万円",
      "3,200万円"
    ],
    "answer": 0,
    "explanation": "4,000万円×(1－0.8)＝800万円。限度面積等の適用要件を満たすという設例。",
    "topic": "宅地評価",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-001",
    "track": "kinzai3_insurance",
    "case": 1,
    "caseTitle": "生命保険の保障設計",
    "caseText": "Aさん（35歳）は妻Bさんと子Cさんと暮らす会社員。保険見直しを検討し、終身死亡保障500万円、定期死亡保障1,500万円、疾病入院日額1万円（支払対象の日数で計算）の保険に加入している。特約の重複・免責はないとする。",
    "question": "両方の死亡保障の保険金が支払われる場合の合計額はいくらか。",
    "kind": "choice",
    "choices": [
      "500万円",
      "1,500万円",
      "2,000万円"
    ],
    "answer": 2,
    "explanation": "500＋1,500＝2,000万円。",
    "topic": "死亡保障",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-002",
    "track": "kinzai3_insurance",
    "case": 1,
    "caseTitle": "生命保険の保障設計",
    "caseText": "Aさん（35歳）は妻Bさんと子Cさんと暮らす会社員。保険見直しを検討し、終身死亡保障500万円、定期死亡保障1,500万円、疾病入院日額1万円（支払対象の日数で計算）の保険に加入している。特約の重複・免責はないとする。",
    "question": "支払対象となる入院日数が5日であった場合の入院給付金はいくらか。",
    "kind": "choice",
    "choices": [
      "1万円",
      "5万円",
      "10万円"
    ],
    "answer": 1,
    "explanation": "日額1万円×5日＝5万円。",
    "topic": "医療保障",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-003",
    "track": "kinzai3_insurance",
    "case": 1,
    "caseTitle": "生命保険の保障設計",
    "caseText": "Aさん（35歳）は妻Bさんと子Cさんと暮らす会社員。保険見直しを検討し、終身死亡保障500万円、定期死亡保障1,500万円、疾病入院日額1万円（支払対象の日数で計算）の保険に加入している。特約の重複・免責はないとする。",
    "question": "一般に、子の成長・独立に伴う死亡時の必要保障額について適切な説明はどれか。",
    "kind": "choice",
    "choices": [
      "一般に子の独立が進むと必要保障額は減少する傾向",
      "子の独立に伴い必ず増加する",
      "加入者の年齢と家族構成に無関係である"
    ],
    "answer": 0,
    "explanation": "遺族生活費や教育費負担の見通しが変わるため、必要保障額もライフステージで変わる。",
    "topic": "保険見直し",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-004",
    "track": "kinzai3_insurance",
    "case": 2,
    "caseTitle": "退職後の社会保険",
    "caseText": "会社員Aさんは退職して個人事業主として独立する予定。現在は協会けんぽの被保険者で、退職後は任意継続も検討している。所定の加入期間など必要要件を満たすものとする。",
    "question": "協会けんぽの任意継続加入を申し出る原則的な期限は、資格喪失日から何日以内か。",
    "kind": "choice",
    "choices": [
      "14日",
      "20日",
      "30日"
    ],
    "answer": 1,
    "explanation": "原則、資格喪失日（退職日の翌日）から20日以内に申出。",
    "topic": "健康保険",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-005",
    "track": "kinzai3_insurance",
    "case": 2,
    "caseTitle": "退職後の社会保険",
    "caseText": "会社員Aさんは退職して個人事業主として独立する予定。現在は協会けんぽの被保険者で、退職後は任意継続も検討している。所定の加入期間など必要要件を満たすものとする。",
    "question": "協会けんぽの任意継続被保険者となれる期間の上限は原則どれか。",
    "kind": "choice",
    "choices": [
      "1年間",
      "2年間",
      "3年間"
    ],
    "answer": 1,
    "explanation": "任意継続被保険者となれるのは原則最長2年間。",
    "topic": "健康保険",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-006",
    "track": "kinzai3_insurance",
    "case": 2,
    "caseTitle": "退職後の社会保険",
    "caseText": "会社員Aさんは退職して個人事業主として独立する予定。現在は協会けんぽの被保険者で、退職後は任意継続も検討している。所定の加入期間など必要要件を満たすものとする。",
    "question": "一般的な国民健康保険に加入した個人事業主の私傷病による休業補償について、適切なのはどれか。",
    "kind": "choice",
    "choices": [
      "会社員と同様の傷病手当金が全国一律で必ず支給される",
      "就業不能時の所得減少に備える検討が必要",
      "雇用保険の基本手当が必ず毎月支給される"
    ],
    "answer": 1,
    "explanation": "国民健康保険は保険者によって任意給付の扱いが異なり、会社員の健康保険と同じ傷病手当金が全国一律に保障されるわけではない。",
    "topic": "所得補償",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-007",
    "track": "kinzai3_insurance",
    "case": 3,
    "caseTitle": "損害保険の補償範囲",
    "caseText": "Aさんは住宅用建物と家財を対象とする火災保険に加入中。一般的な住宅火災保険の基本的な補償を前提とし、地震保険と特約は付帯していない。自動車保険への加入も検討している。",
    "question": "落雷によって自宅家財が損害を受けた場合、一般的な火災保険の補償の考え方はどれか。",
    "kind": "choice",
    "choices": [
      "一般に補償対象となる",
      "必ず地震保険でしか補償されない",
      "経年劣化として扱う"
    ],
    "answer": 0,
    "explanation": "落雷は一般的な火災保険の代表的な補償事故。ただし対象や契約条件を確認する。",
    "topic": "火災保険",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-008",
    "track": "kinzai3_insurance",
    "case": 3,
    "caseTitle": "損害保険の補償範囲",
    "caseText": "Aさんは住宅用建物と家財を対象とする火災保険に加入中。一般的な住宅火災保険の基本的な補償を前提とし、地震保険と特約は付帯していない。自動車保険への加入も検討している。",
    "question": "地震が直接原因で建物が倒壊した場合の備えとして適切なのはどれか。",
    "kind": "choice",
    "choices": [
      "火災保険だけで必ず補償",
      "地震保険の付帯を検討",
      "生命保険の死亡保障で建物損害を補償"
    ],
    "answer": 1,
    "explanation": "一般的な火災保険では地震による直接損害を対象外とするため地震保険が重要。",
    "topic": "地震保険",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-009",
    "track": "kinzai3_insurance",
    "case": 3,
    "caseTitle": "損害保険の補償範囲",
    "caseText": "Aさんは住宅用建物と家財を対象とする火災保険に加入中。一般的な住宅火災保険の基本的な補償を前提とし、地震保険と特約は付帯していない。自動車保険への加入も検討している。",
    "question": "自動車事故で他人にケガをさせ法律上の損害賠償責任を負う場合、任意自動車保険で主に対応するものはどれか。",
    "kind": "choice",
    "choices": [
      "対人賠償責任保険",
      "車両保険",
      "搭乗者傷害保険"
    ],
    "answer": 0,
    "explanation": "第三者に対する人身損害の賠償責任に備えるのは対人賠償責任保険。契約条件に従う。",
    "topic": "自動車保険",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-010",
    "track": "kinzai3_insurance",
    "case": 4,
    "caseTitle": "保険金に係る税金",
    "caseText": "Aさんは保険料400万円を自ら負担した一時払養老保険（5年超保有）の満期保険金500万円を自分で受け取った。他に一時所得はなく必要経費なしとする。別途、本人負担の死亡保険契約では本人が被保険者、妻が受取人。",
    "question": "満期保険金による一時所得の特別控除前の差益はいくらか。",
    "kind": "choice",
    "choices": [
      "50万円",
      "100万円",
      "500万円"
    ],
    "answer": 1,
    "explanation": "500－400＝100万円。",
    "topic": "一時所得",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-011",
    "track": "kinzai3_insurance",
    "case": 4,
    "caseTitle": "保険金に係る税金",
    "caseText": "Aさんは保険料400万円を自ら負担した一時払養老保険（5年超保有）の満期保険金500万円を自分で受け取った。他に一時所得はなく必要経費なしとする。別途、本人負担の死亡保険契約では本人が被保険者、妻が受取人。",
    "question": "この保険金から生じる一時所得の総所得金額への算入額はいくらか。",
    "kind": "choice",
    "choices": [
      "25万円",
      "50万円",
      "100万円"
    ],
    "answer": 0,
    "explanation": "(500－400－50)÷2＝25万円。",
    "topic": "一時所得",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-012",
    "track": "kinzai3_insurance",
    "case": 4,
    "caseTitle": "保険金に係る税金",
    "caseText": "Aさんは保険料400万円を自ら負担した一時払養老保険（5年超保有）の満期保険金500万円を自分で受け取った。他に一時所得はなく必要経費なしとする。別途、本人負担の死亡保険契約では本人が被保険者、妻が受取人。",
    "question": "Aさんが死亡して妻に死亡保険金が支払われたとき、一般に対象となる税目はどれか。",
    "kind": "choice",
    "choices": [
      "相続税",
      "贈与税",
      "固定資産税"
    ],
    "answer": 0,
    "explanation": "保険料負担者＝被相続人・被保険者＝被相続人の死亡保険金は、原則として相続税の対象。",
    "topic": "保険と相続",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-013",
    "track": "kinzai3_insurance",
    "case": 5,
    "caseTitle": "死亡保険金と相続税",
    "caseText": "Aさんが死亡し、法定相続人は妻Bさんと2人の子の合計3人。Aさんが保険料を負担した死亡保険から、受取人である妻に2,500万円が支払われた。全員が相続人である。",
    "question": "相続税の死亡保険金の非課税限度額（法定相続人3人）は原則いくらか。",
    "kind": "choice",
    "choices": [
      "500万円",
      "1,000万円",
      "1,500万円"
    ],
    "answer": 2,
    "explanation": "500万円×法定相続人3人＝1,500万円。",
    "topic": "相続税",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-014",
    "track": "kinzai3_insurance",
    "case": 5,
    "caseTitle": "死亡保険金と相続税",
    "caseText": "Aさんが死亡し、法定相続人は妻Bさんと2人の子の合計3人。Aさんが保険料を負担した死亡保険から、受取人である妻に2,500万円が支払われた。全員が相続人である。",
    "question": "上記の死亡保険金のうち非課税枠を超える部分はいくらか。",
    "kind": "choice",
    "choices": [
      "500万円",
      "1,000万円",
      "2,000万円"
    ],
    "answer": 1,
    "explanation": "2,500－1,500＝1,000万円。",
    "topic": "相続税",
    "lawReferenceDate": "2025-04-01"
  },
  {
    "id": "pr-kinzai3_insurance-015",
    "track": "kinzai3_insurance",
    "case": 5,
    "caseTitle": "死亡保険金と相続税",
    "caseText": "Aさんが死亡し、法定相続人は妻Bさんと2人の子の合計3人。Aさんが保険料を負担した死亡保険から、受取人である妻に2,500万円が支払われた。全員が相続人である。",
    "question": "法定相続人が配偶者と子2人である場合、相続税の基礎控除はいくらか。",
    "kind": "choice",
    "choices": [
      "3,600万円",
      "4,800万円",
      "5,400万円"
    ],
    "answer": 1,
    "explanation": "3,000万円＋600万円×3人＝4,800万円。死亡保険金の非課税枠とは別の制度。",
    "topic": "相続税",
    "lawReferenceDate": "2025-04-01"
  }
];
