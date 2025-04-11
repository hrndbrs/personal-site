export default defineI18nLocale(async () => ({
  meta: {
    title: "バグは機能になる",
    description:
      "直感的でスケーラブルなWebアプリケーションを、クリーンで保守性の高いコードで構築するフルスタック開発者です。",
    keywords:
      "ヘルナンド・ボロシ, ソフトウェア開発者, フルスタック開発者, JavaScript, TypeScript, ポートフォリオ",
    author: "ヘルナンド・ボロシ",
  },
  Hero: {
    intro: "こんにちは、私は",
    texts: [
      "ヘルナンド・ボロシ",
      "ソフトウェア開発者",
      "全力で取り組んでいます",
      "ちょっとお疲れ気味",
    ],
    description:
      "フルスタックで信頼性が高く直感的なデジタル体験を創り出す開発者",
    button: "プロジェクトを見る",
  },
  About: {
    title: "自己紹介",
    description: "魅力的なデジタル体験の創造に情熱を注いでいます",
    p1: "フルスタック開発に精通し、多様な技術スタックを扱ってきた実務経験を活かして、信頼性が高く、スケーラブルで、ユーザーに寄り添ったWebアプリケーションの開発を行っています。フロントエンドからバックエンドまで、クリーンで保守性の高いコードでアイデアをかたちにすることに、日々やりがいを感じています。",
    p2: "単に「動く」コードではなく、「しっかりと機能し、心地よく使える」コードを書くことを大切にしています。パフォーマンス、一貫性、そしてシームレスなユーザー体験を重視しながら、チームとの連携や複雑な課題への挑戦を通じて、常に学び、成長し、価値あるソリューションを生み出すことを目指しています",
    location: {
      title: "所在地",
      value: "インドネシア・南タンゲラン",
    },
    education: {
      title: "学歴",
      value: "機械工学学士",
    },
    email: {
      title: "メールアドレス",
    },
    phone: {
      title: "電話番号",
    },
    experience: {
      title: "経験年数",
      value: "{years}+ 年の経験",
    },
  },
  History: {
    title: "経歴",
    header: "キャリアと学歴",
    description: "私のスキルを培ってきた職務経験と学歴をご紹介します。",
    education: {
      title: "学歴・資格",
      degree: "学位",
      institution: "教育機関",
      year: "年",
      description: "説明",
      view: {
        education: "卒業証書を見る",
        certification: "認定証を見る",
      },
    },
    experience: {
      title: "職歴",
      position: "役職",
      company: "会社名",
      period: "期間",
      description: "業務内容",
      achievements: "主な成果",
    },
  },
  Skills: {
    title: "スキル",
    description: "専門知識と技術スタック",
    categories: {
      PL: {
        name: "プログラミング言語",
        skills: ["JavaScript", "TypeScript", "Python", "Golang"],
      },
      FE: {
        name: "フロントエンド開発",
        skills: [
          "HTML",
          "CSS",
          "Vue.js",
          "React",
          "Angular",
          "Nuxt.js",
          "Next.js",
          "Tailwind CSS",
          "Apollo Client",
        ],
      },
      SM: {
        name: "状態管理",
        skills: ["Pinia", "Zustand", "Redux", "Redux Toolkit"],
      },
      BE: {
        name: "バックエンド開発",
        skills: [
          "Node.js",
          "Express",
          "Django",
          "FastAPI",
          "Golang",
          "RabbitMQ",
          "Apollo Server",
        ],
      },
      DB: {
        name: "データベース",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
      },
      VC: {
        name: "バージョン管理",
        skills: ["Git", "GitHub", "GitLab"],
      },
      LA: {
        name: "言語スキル",
        skills: ["インドネシア語", "英語", "日本語"],
      },
    },
  },
  Projects: {
    title: "プロジェクト",
    description: "注目の開発実績",
  },
  Contact: {
    title: "お問い合わせ",
    header: "つながりましょう",
    description:
      "現在フリーランスとして活動しており、新しいプロジェクトやコラボレーションの機会を積極的に探しています。ご相談やご質問があれば、お気軽にご連絡ください。",
    fields: {
      name: "お名前",
      email: "メールアドレス",
      subject: "件名",
      message: "メッセージ内容",
    },
    success: "メッセージが送信されました！",
    button: "送信",
  },
  Footer: {
    subtitle: "コード、好奇心、そして丁寧さで創る。",
  },
}));
