import { Semester } from '../interfaces'

export const data: Semester[] = [
  {
    year: 109,
    semester: 1,
    credits: 17,
    courses: [
      {
        id: 0,
        name: '健康體適能',
        credits: 1,
        info: '四3,4(籃球F~I)'
      },
      {
        id: 0,
        name: '大學國文：文化思想與寫作（一）',
        credits: 3,
        info: '二8,9,10(共102)'
      },
      {
        id: 0,
        name: '西班牙文一上',
        credits: 3,
        info: '三8,9(共204)五8,9(共204)'
      },
      {
        id: 0,
        name: '微積分1',
        credits: 2,
        info: '一10(新203)三6,7(新203)五6,7(新203)'
      },
      {
        id: 0,
        name: '微積分2',
        credits: 2,
        info: '一10(新203)三6,7(新203)五6,7(新203)'
      },
      {
        id: 0,
        name: '普通物理學甲上',
        credits: 3,
        info: '三3,4(綜501)五3,4(綜501)'
      },
      {
        id: 0,
        name: '計算機概論',
        credits: 3,
        info: '一2,3,4(資101)'
      },
      {
        id: 0,
        name: '計算機程式設計',
        credits: 3,
        info: '一7,8,9(博雅101)'
      }
    ]
  },
  {
    year: 109,
    semester: 2,
    credits: 24,
    courses: [
      {
        id: 0,
        name: '西班牙文一下',
        credits: 3,
        info: '三1,2(共204)五1,2(共204)'
      },
      {
        id: 0,
        name: '微積分3',
        credits: 2,
        info: '一10(新203)三6,7(新203)五6,7(新203)'
      },
      {
        id: 0,
        name: '微積分4',
        credits: 2,
        info: '一10(新203)三6,7(新203)五6,7(新203)'
      },
      {
        id: 0,
        name: '普通物理學甲下',
        credits: 3,
        info: '三3,4(普402)五3,4(普402)'
      },
      {
        id: 0,
        name: '網路管理與資料管理',
        credits: 1,
        info: '一2,3,4(資R204)'
      },
      {
        id: 0,
        name: '資料結構與演算法',
        credits: 3,
        info: '二6,7,8(資104)'
      },
      {
        id: 0,
        name: '數位系統與實驗',
        credits: 3,
        info: '一6,7,8(資103)'
      },
      {
        id: 0,
        name: '離散數學',
        credits: 3,
        info: '四3,4,5(資102)'
      },
      {
        id: 0,
        name: '數學之美',
        credits: 2,
        info: '五8,9(博雅101)'
      },
      {
        id: 0,
        name: '新生講座－能力養成',
        credits: 2,
        info: '二A,B,C(資104)'
      }
    ]
  },
  {
    year: 110,
    semester: 1,
    credits: 21,
    courses: [
      {
        id: 0,
        name: '普通心理學',
        credits: 3,
        info: '一2,3,4(請洽系所辦)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/10126' },
          { name: 'Web', url: 'https://zh.wikibooks.org/zh-tw/超普通心理学' },
          { name: 'Webex', url: 'https://ntucc.webex.com/meet/tren' },
          {
            name: 'Ceiba',
            url: 'https://ceiba.ntu.edu.tw/course/e4f9fd/index.htm'
          }
        ]
      },
      {
        id: 0,
        name: '網路服務程式設計',
        credits: 3,
        info: '二2,3,4(資104)',
        links: [
          {
            name: 'Github',
            url: 'https://github.com/ntuee-webprogramming?tab=repositories'
          },
          { name: 'Webex', url: 'https://ntucc.webex.com/meet/cyhuang' },
          {
            name: 'Ceiba',
            url: 'https://ceiba.ntu.edu.tw/course/fdb723/index.htm'
          },
          { name: 'HW Web', url: 'https://wp.ee.ntu.edu.tw/' },
          { name: 'Github', url: 'https://github.com/guanboo-yang/wp1101' }
        ]
      },
      {
        id: 0,
        name: '線性代數',
        credits: 3,
        info: '二7,8,9(資101)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/9949' },
          {
            name: 'Gradescope',
            url: 'https://www.gradescope.com/courses/317562'
          },
          {
            name: 'Webex',
            url: 'https://ntucc.webex.com/ntucc/j.php?MTID=m1629c24fcf294fe501df933db0598de2'
          },
          { name: 'Meet', url: 'https://meet.google.com/rws-rcvh-ecq' },
          { name: 'Meet', url: 'https://meet.google.com/tah-ckeg-hqd' }
        ]
      },
      {
        id: 0,
        name: '演算法設計與分析',
        credits: 3,
        info: '四7,8,9(資104)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/8583' },
          {
            name: 'Gradescope',
            url: 'https://www.gradescope.com/courses/307088'
          },
          {
            name: 'Gather Town',
            url: 'https://gather.town/app/VUst2xwK1W1kVUvX/ADA%202021'
          },
          { name: 'Judge', url: 'https://ada-judge.csie.ntu.edu.tw' },
          {
            name: 'YouTube',
            url: 'https://www.youtube.com/playlist?list=PLOAQYZPRn2V7lSunztJ4h0Sb0ejUA4Juq'
          },
          { name: 'Mail', url: 'mailto:ada-ta@csie.ntu.edu.tw' },
          { name: 'Slido', url: 'https://app.sli.do/' }
        ]
      },
      {
        id: 0,
        name: '系統程式設計',
        credits: 3,
        info: '三2,3,4(請洽系所辦)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/10398' },
          { name: 'Webex', url: 'https://ntucc.webex.com/meet/pjcheng' },
          {
            name: 'Web',
            url: 'https://www.csie.ntu.edu.tw/~pjcheng/course/sp2021/'
          },
          { name: 'Github', url: 'https://github.com/ntucsiesp2021' }
        ]
      },
      {
        id: 0,
        name: '前瞻資訊科技一',
        credits: 3,
        info: '五7,8,9(資104)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/8610' },
          { name: 'Slido', url: 'https://app.sli.do/' }
        ]
      },
      {
        id: 0,
        name: '計算機程式設計',
        credits: 3,
        info: '四2,3,4(資R204)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/7383' },
          { name: 'Judge', url: 'https://jgirl.ddns.net/' },
          {
            name: 'Webex',
            url: 'https://ntucc.webex.com/ntucc/j.php?MTID=m0b372ea3650948ac6435d0b7f786967d'
          },
          {
            name: 'Ceiba',
            url: 'https://ceiba.ntu.edu.tw/course/84f13b/index.htm'
          }
        ]
      }
    ]
  },
  {
    year: 110,
    semester: 2,
    credits: 24,
    courses: [
      {
        id: 0,
        name: '賽局理論',
        credits: 3,
        info: '一7,8,9(綜合大講堂)',
        links: [{ name: 'Ceiba', url: 'https://ceiba.ntu.edu.tw/1102gt' }]
      },
      {
        id: 0,
        name: '分散式金融導論',
        credits: 3,
        info: '一A,B,C(普102)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/12667' },
          { name: 'Websites', url: 'https://www.csie.ntu.edu.tw/~defi/' },
          { name: 'Meet', url: 'https://meet.google.com/pms-pfvu-ici' },
          { name: 'Mail', url: 'mailto:liao@csie.ntu.edu.tw' }
        ]
      },
      {
        id: 0,
        name: '作業系統',
        credits: 3,
        info: '二3,4,5(資104)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/11767' },
          { name: 'Mail', url: 'mailto:ntuos@googlegroups.com' },
          { name: 'Mail', url: 'mailto:cwlin@csie.ntu.edu.tw' }
        ]
      },
      {
        id: 0,
        name: '密碼學導論',
        credits: 3,
        info: '二8,9,10(綜合大講堂)',
        links: [
          {
            name: 'Ceiba',
            url: 'https://ceiba.ntu.edu.tw/course/1a5b13/index.htm'
          },
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/12735' },
          {
            name: 'Slido',
            url: 'https://app.sli.do/event/qi3rDSMw2WjEv8VN1T2SV3/live/questions'
          }
        ]
      },
      {
        id: 0,
        name: '物件導向程式設計',
        credits: 3,
        info: '四2,3,4(資R204)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/11719' },
          { name: 'Judge', url: 'https://jgirl.ddns.net/' }
        ]
      },
      {
        id: 0,
        name: '機率',
        credits: 3,
        info: '四7,8,9(資102)',
        links: [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/14799' }]
      },
      {
        id: 0,
        name: '機器學習',
        credits: 4,
        info: '五7,8,9,10(博理112)',
        links: [
          {
            name: 'Website',
            url: 'https://speech.ee.ntu.edu.tw/~hylee/ml/2022-spring.php'
          },
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/11666' },
          { name: 'Kaggle', url: 'https://www.kaggle.com/' },
          {
            name: 'Gradescope',
            url: 'https://www.gradescope.com/courses/364364'
          }
        ]
      },
      {
        id: 0,
        name: '服務學習甲',
        credits: 0,
        info: ''
      },
      {
        id: 0,
        name: '進階網路管理與系統管理',
        credits: 2,
        info: ''
      }
    ]
  },
  {
    year: 111,
    semester: 1,
    credits: 0,
    courses: [
      {
        id: 0,
        name: '自動機與形式語言',
        professor: '陳偉菘',
        credits: 3,
        info: '一3,4,5(資104)',
        links: [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/18693' }]
      },
      {
        id: 0,
        name: '智慧型汽車導論',
        professor: '林忠緯',
        credits: 3,
        info: '一7,8,9(資103)',
        links: [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/16494' }]
      },
      {
        id: 0,
        name: '計算機結構',
        professor: '洪士灝',
        credits: 3,
        info: '二2,3,4(資104)',
        links: [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/16621' }]
      },
      {
        id: 0,
        name: '羽球初級',
        professor: '李文心',
        credits: 1,
        info: '二8,9(綜館多功能)',
        links: [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/19580' }]
      },
      {
        id: 0,
        name: '數位語音處理概論',
        professor: '李琳山',
        credits: 3,
        info: '三2,3,4(電二229)',
        links: [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/20073' }]
      },
      {
        id: 0,
        name: '計算機網路',
        professor: '逄愛君',
        credits: 3,
        info: '三7,8,9(資102)',
        links: [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/20138' }]
      },
      {
        id: 0,
        name: '深度學習之應用',
        professor: '陳縕儂',
        credits: 3,
        info: '四2,3,4(資103)',
        links: [
          { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/19828' },
          {
            name: 'Website',
            url: 'https://www.csie.ntu.edu.tw/~miulab/f111-adl'
          }
        ]
      },
      {
        id: 0,
        name: '認識全球與在地國際化',
        professor: '袁孝維',
        credits: 3,
        info: '四8,9(博雅102)',
        links: [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/19398' }]
      },
      {
        id: 0,
        name: '金融科技導論',
        professor: '廖世偉',
        credits: 3,
        info: '五A,B,C(資103)',
        links: [
          { name: 'Website', url: 'https://www.csie.ntu.edu.tw/~fintech' },
          {
            name: 'Excel',
            url: 'https://docs.google.com/spreadsheets/d/1DaMp9tnldaRLo32aSDPH5KgmcVAmmVF1zJYkJkWxpy0'
          }
        ],
        visit: true
      },
      {
        id: 0,
        name: '區塊鏈與數據分析',
        professor: '廖世偉',
        credits: 3,
        info: '六1,2,3,4(請洽系所辦)',
        links: [
          { name: 'Website', url: 'https://www.csie.ntu.edu.tw/~data' }
          // { name: 'Excel', url: 'https://docs.google.com/spreadsheets/d/1DaMp9tnldaRLo32aSDPH5KgmcVAmmVF1zJYkJkWxpy0' },
        ]
      },
      {
        id: 0,
        name: '專題研究',
        professor: '廖世偉',
        credits: 2,
        info: ''
      }
    ]
  }
]
