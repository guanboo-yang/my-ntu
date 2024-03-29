import { Department, College, Category } from '../interfaces'

export const links: {
  [key: string]: { name: string; url: string }[]
} = {
  '13088': [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/18693' }],
  '20938': [
    { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/21386' },
    { name: 'Website', url: 'https://www.csie.ntu.edu.tw/~data' },
    { name: 'Meet', url: 'https://meet.google.com/axe-omnp-vfg' },
    {
      name: 'Excel',
      url: 'https://docs.google.com/spreadsheets/d/1HNqA8DD8s7or-ehl4xK85F9MC3ncwhP4rJ808UiGCRk/edit#gid=0'
    }
  ],
  '32336': [
    { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/19828' },
    { name: 'Kaggle', url: 'https://www.kaggle.com/competitions' },
    { name: 'Website', url: 'https://www.csie.ntu.edu.tw/~miulab/f111-adl' },
    {
      name: 'Video',
      url: 'https://www.csie.ntu.edu.tw/~miulab/f111-adl#syllabus'
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/playlist?list=PLOAQYZPRn2V5yumEV1Wa4JvRiDluf83vn'
    },
    { name: 'Slido', url: 'https://app.sli.do/event/mPPtwamPwAx2LbPULN9v2A' }
  ],
  '44602': [{ name: 'Meet', url: 'https://meet.google.com/toa-cdwu-cpy' }],
  '48143': [
    { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/20138' },
    { name: 'Gradescope', url: 'https://www.gradescope.com/courses/442336' }
  ],
  '51383': [
    { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/20073' },
    { name: 'Website', url: 'https://speech.ee.ntu.edu.tw/DSP2022Autumn' },
    { name: 'Video', url: 'https://speech.ee.ntu.edu.tw/DSP2022Autumn#video' }
  ],
  '57575': [
    { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/16494' },
    { name: 'Gradescope', url: 'https://www.gradescope.com/courses/406307' },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/playlist?list=PLZn91hOY62sx7wVWVuDPbxixwk1XoV4Ti'
    }
  ],
  '67883': [
    { name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/16621' },
    {
      name: 'Webex',
      url: 'https://ntucc.webex.com/ntucc/j.php?MTID=m02c5b882b2074d0402094b3450c1467a'
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/playlist?list=PLqwUtSomsxQBGIBvIZ1Fr9v-rQJQI8und'
    }
  ],
  '77445': [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/19398' }],
  '95108': [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/21705' }],
  '97112': [{ name: 'Cool', url: 'https://cool.ntu.edu.tw/courses/19580' }]
}

export const times: {
  [key: string]: string
} = {
  '0': '07:10',
  '1': '08:10',
  '2': '09:10',
  '3': '10:20',
  '4': '11:20',
  '5': '12:20',
  '6': '13:20',
  '7': '14:20',
  '8': '15:30',
  '9': '16:30',
  X: '17:30',
  A: '18:25',
  B: '19:20',
  C: '20:15',
  D: '21:10'
}

export const departments: Department[] = [
  {
    id: '0020',
    college_id: '0',
    name_short: '體育室',
    name_full: '體育室',
    name_alt: null
  },
  {
    id: '0030',
    college_id: '0',
    name_short: '軍訓室',
    name_full: '軍訓室',
    name_alt: null
  },
  {
    id: '0040',
    college_id: '0',
    name_short: null,
    name_full: '外語教學暨資源中心',
    name_alt: null
  },
  {
    id: '0050',
    college_id: '0',
    name_short: '課活組',
    name_full: '學務處課外活動組',
    name_alt: '課外活動組'
  },
  {
    id: '1000',
    college_id: '1',
    name_short: null,
    name_full: '文學院',
    name_alt: null
  },
  {
    id: '1010',
    college_id: '1',
    name_short: '中文系',
    name_full: '中國文學系',
    name_alt: null
  },
  {
    id: '1011',
    college_id: '1',
    name_short: '中文系國際生',
    name_full: '中國文學系國際學生學士班',
    name_alt: null
  },
  {
    id: '1020',
    college_id: '1',
    name_short: '外文系',
    name_full: '外國語文學系',
    name_alt: null
  },
  {
    id: '1030',
    college_id: '1',
    name_short: '歷史系',
    name_full: '歷史學系',
    name_alt: null
  },
  {
    id: '1040',
    college_id: '1',
    name_short: '哲學系',
    name_full: '哲學系',
    name_alt: null
  },
  {
    id: '1050',
    college_id: '1',
    name_short: '人類系',
    name_full: '人類學系',
    name_alt: null
  },
  {
    id: '1060',
    college_id: '1',
    name_short: '圖資系',
    name_full: '圖書資訊學系',
    name_alt: null
  },
  {
    id: '1070',
    college_id: '1',
    name_short: '日文系',
    name_full: '日本語文學系',
    name_alt: null
  },
  {
    id: '1080',
    college_id: '1',
    name_short: null,
    name_full: '應用英語學系',
    name_alt: null
  },
  {
    id: '1090',
    college_id: '1',
    name_short: '戲劇系',
    name_full: '戲劇學系',
    name_alt: null
  },
  {
    id: '1210',
    college_id: '1',
    name_short: '中文所',
    name_full: '中國文學研究所',
    name_alt: null
  },
  {
    id: '1220',
    college_id: '1',
    name_short: '外文所',
    name_full: '外國語文學研究所',
    name_alt: null
  },
  {
    id: '1230',
    college_id: '1',
    name_short: '歷史所',
    name_full: '歷史學研究所',
    name_alt: null
  },
  {
    id: '1240',
    college_id: '1',
    name_short: '哲學所',
    name_full: '哲學研究所',
    name_alt: null
  },
  {
    id: '1250',
    college_id: '1',
    name_short: '人類所',
    name_full: '人類學研究所',
    name_alt: null
  },
  {
    id: '1260',
    college_id: '1',
    name_short: '圖資所',
    name_full: '圖書資訊學研究所',
    name_alt: null
  },
  {
    id: '1270',
    college_id: '1',
    name_short: '日文所',
    name_full: '日本語文學研究所',
    name_alt: null
  },
  {
    id: '1290',
    college_id: '1',
    name_short: '戲劇所',
    name_full: '戲劇學研究所',
    name_alt: null
  },
  {
    id: '1410',
    college_id: '1',
    name_short: '藝史所',
    name_full: '藝術史研究所',
    name_alt: null
  },
  {
    id: '1420',
    college_id: '1',
    name_short: '語言所',
    name_full: '語言學研究所',
    name_alt: null
  },
  {
    id: '1440',
    college_id: '1',
    name_short: '音樂學所',
    name_full: '音樂學研究所',
    name_alt: null
  },
  {
    id: '1450',
    college_id: '1',
    name_short: '臺文所',
    name_full: '臺灣文學研究所',
    name_alt: null
  },
  {
    id: '1460',
    college_id: '1',
    name_short: '華教碩士學程',
    name_full: '華語教學碩士學位學程',
    name_alt: null
  },
  {
    id: '1470',
    college_id: '1',
    name_short: '翻譯碩士學程',
    name_full: '翻譯碩士學位學程',
    name_alt: null
  },
  {
    id: '2000',
    college_id: '2',
    name_short: null,
    name_full: '理學院',
    name_alt: null
  },
  {
    id: '2010',
    college_id: '2',
    name_short: '數學系',
    name_full: '數學系',
    name_alt: null
  },
  {
    id: '2020',
    college_id: '2',
    name_short: '物理系',
    name_full: '物理學系',
    name_alt: null
  },
  {
    id: '2030',
    college_id: '2',
    name_short: '化學系',
    name_full: '化學系',
    name_alt: null
  },
  {
    id: '2040',
    college_id: '2',
    name_short: '地質系',
    name_full: '地質科學系',
    name_alt: null
  },
  {
    id: '2051',
    college_id: '2',
    name_short: null,
    name_full: '動物生物組',
    name_alt: null
  },
  {
    id: '2052',
    college_id: '2',
    name_short: null,
    name_full: '漁業生物組',
    name_alt: null
  },
  {
    id: '2060',
    college_id: '2',
    name_short: null,
    name_full: '植物學系',
    name_alt: null
  },
  {
    id: '2070',
    college_id: '2',
    name_short: '心理系',
    name_full: '心理學系',
    name_alt: null
  },
  {
    id: '2080',
    college_id: '2',
    name_short: '地理系',
    name_full: '地理環境資源學系',
    name_alt: null
  },
  {
    id: '2090',
    college_id: '2',
    name_short: '大氣系',
    name_full: '大氣科學系',
    name_alt: null
  },
  {
    id: '2210',
    college_id: '2',
    name_short: '數學所',
    name_full: '數學研究所',
    name_alt: null
  },
  {
    id: '2220',
    college_id: '2',
    name_short: '物理所',
    name_full: '物理學研究所',
    name_alt: null
  },
  {
    id: '2230',
    college_id: '2',
    name_short: '化學所',
    name_full: '化學研究所',
    name_alt: null
  },
  {
    id: '2231',
    college_id: '2',
    name_short: null,
    name_full: '化學所化學組',
    name_alt: null
  },
  {
    id: '2232',
    college_id: '2',
    name_short: '化學所化生組',
    name_full: '化學所化學生物學組',
    name_alt: null
  },
  {
    id: '2240',
    college_id: '2',
    name_short: '地質所',
    name_full: '地質科學研究所',
    name_alt: null
  },
  {
    id: '2241',
    college_id: '2',
    name_short: null,
    name_full: '地質組',
    name_alt: null
  },
  {
    id: '2242',
    college_id: '2',
    name_short: null,
    name_full: '應用地質組',
    name_alt: null
  },
  {
    id: '2250',
    college_id: '2',
    name_short: null,
    name_full: '動物學研究所',
    name_alt: null
  },
  {
    id: '2260',
    college_id: '2',
    name_short: null,
    name_full: '植物學研究所',
    name_alt: null
  },
  {
    id: '2270',
    college_id: '2',
    name_short: '心理所',
    name_full: '心理學研究所',
    name_alt: null
  },
  {
    id: '2271',
    college_id: '2',
    name_short: null,
    name_full: '一般心理學組',
    name_alt: null
  },
  {
    id: '2272',
    college_id: '2',
    name_short: null,
    name_full: '臨床心理學組',
    name_alt: null
  },
  {
    id: '2280',
    college_id: '2',
    name_short: '地理所',
    name_full: '地理環境資源學研究所',
    name_alt: null
  },
  {
    id: '2290',
    college_id: '2',
    name_short: '大氣所',
    name_full: '大氣科學研究所',
    name_alt: null
  },
  {
    id: '2410',
    college_id: '2',
    name_short: '海洋所',
    name_full: '海洋研究所',
    name_alt: null
  },
  {
    id: '2411',
    college_id: '2',
    name_short: '海洋所物理組',
    name_full: '海洋物理組',
    name_alt: null
  },
  {
    id: '2412',
    college_id: '2',
    name_short: '海洋所漁業組',
    name_full: '海洋生物及漁業組',
    name_alt: null
  },
  {
    id: '2413',
    college_id: '2',
    name_short: '海洋所地物理',
    name_full: '海洋地質及地球物理',
    name_alt: null
  },
  {
    id: '2414',
    college_id: '2',
    name_short: '海洋所化學組',
    name_full: '海洋化學組',
    name_alt: null
  },
  {
    id: '2440',
    college_id: '2',
    name_short: '天文物理所',
    name_full: '天文物理研究所',
    name_alt: null
  },
  {
    id: '2450',
    college_id: '2',
    name_short: '應用物理所',
    name_full: '應用物理學研究所',
    name_alt: null
  },
  {
    id: '2460',
    college_id: '2',
    name_short: '應數所',
    name_full: '應用數學科學研究所',
    name_alt: null
  },
  {
    id: '2470',
    college_id: '2',
    name_short: '氣候永續學位',
    name_full: '氣候變遷與永續發展國際學位學程',
    name_alt: null
  },
  {
    id: '2490',
    college_id: '2',
    name_short: '地科國際學程',
    name_full: '地球系統科學國際研究生博士學位學程',
    name_alt: null
  },
  {
    id: '2500',
    college_id: '2',
    name_short: null,
    name_full: '統計與數據科學研究所',
    name_alt: null
  },
  {
    id: '3000',
    college_id: '3',
    name_short: '社科院',
    name_full: '社會科學院',
    name_alt: null
  },
  {
    id: '3020',
    college_id: '3',
    name_short: '政治系',
    name_full: '政治學系',
    name_alt: null
  },
  {
    id: '3021',
    college_id: '3',
    name_short: '政治系政論組',
    name_full: '政治理論組',
    name_alt: null
  },
  {
    id: '3022',
    college_id: '3',
    name_short: '政治系國關組',
    name_full: '國際關係組',
    name_alt: null
  },
  {
    id: '3023',
    college_id: '3',
    name_short: '政治系公行組',
    name_full: '公共行政組',
    name_alt: null
  },
  {
    id: '3030',
    college_id: '3',
    name_short: '經濟系',
    name_full: '經濟學系',
    name_alt: null
  },
  {
    id: '3050',
    college_id: '3',
    name_short: '社會系',
    name_full: '社會學系',
    name_alt: null
  },
  {
    id: '3051',
    college_id: '3',
    name_short: null,
    name_full: '社會學組',
    name_alt: null
  },
  {
    id: '3052',
    college_id: '3',
    name_short: null,
    name_full: '社會工作組',
    name_alt: null
  },
  {
    id: '3100',
    college_id: '3',
    name_short: '社工系',
    name_full: '社會工作學系',
    name_alt: null
  },
  {
    id: '3220',
    college_id: '3',
    name_short: '政治所',
    name_full: '政治學研究所',
    name_alt: null
  },
  {
    id: '3230',
    college_id: '3',
    name_short: '經濟所',
    name_full: '經濟學研究所',
    name_alt: null
  },
  {
    id: '3250',
    college_id: '3',
    name_short: '社會所',
    name_full: '社會學研究所',
    name_alt: null
  },
  {
    id: '3300',
    college_id: '3',
    name_short: '社工所',
    name_full: '社會工作學研究所',
    name_alt: null
  },
  {
    id: '3410',
    college_id: '3',
    name_short: '國發所',
    name_full: '國家發展研究所',
    name_alt: null
  },
  {
    id: '3420',
    college_id: '3',
    name_short: '新聞所',
    name_full: '新聞研究所',
    name_alt: null
  },
  {
    id: '3430',
    college_id: '3',
    name_short: '公事所',
    name_full: '公共事務研究所',
    name_alt: null
  },
  {
    id: '4000',
    college_id: '4',
    name_short: null,
    name_full: '醫學院',
    name_alt: null
  },
  {
    id: '4010',
    college_id: '4',
    name_short: '醫學系',
    name_full: '醫學系',
    name_alt: null
  },
  {
    id: '4020',
    college_id: '4',
    name_short: '牙醫系',
    name_full: '牙醫學系',
    name_alt: null
  },
  {
    id: '4030',
    college_id: '4',
    name_short: '藥學系',
    name_full: '藥學系',
    name_alt: null
  },
  {
    id: '4031',
    college_id: '4',
    name_short: null,
    name_full: '藥學系六年制',
    name_alt: null
  },
  {
    id: '4040',
    college_id: '4',
    name_short: '醫技系',
    name_full: '醫學檢驗暨生物技術學系',
    name_alt: null
  },
  {
    id: '4060',
    college_id: '4',
    name_short: '護理系',
    name_full: '護理學系',
    name_alt: null
  },
  {
    id: '4080',
    college_id: '4',
    name_short: '物治系',
    name_full: '物理治療學系(四年制)',
    name_alt: null
  },
  {
    id: '4081',
    college_id: '4',
    name_short: null,
    name_full: '物治系六年制',
    name_alt: null
  },
  {
    id: '4090',
    college_id: '4',
    name_short: '職治系',
    name_full: '職能治療學系',
    name_alt: null
  },
  {
    id: '4120',
    college_id: '4',
    name_short: '學士後護',
    name_full: '學士後護理學系',
    name_alt: null
  },
  {
    id: '4200',
    college_id: '4',
    name_short: '醫衛共同課程',
    name_full: '醫學院暨公共衛生學院共同課程',
    name_alt: null
  },
  {
    id: '4210',
    college_id: '4',
    name_short: '臨醫所',
    name_full: '臨床醫學研究所',
    name_alt: null
  },
  {
    id: '4213',
    college_id: '4',
    name_short: '臨醫所醫研組',
    name_full: '臨床醫學研究所臨床醫學研究組',
    name_alt: null
  },
  {
    id: '4214',
    college_id: '4',
    name_short: '臨醫所試驗組',
    name_full: '臨床醫學研究所臨床試驗組',
    name_alt: null
  },
  {
    id: '4220',
    college_id: '4',
    name_short: '牙醫所',
    name_full: '臨床牙醫學研究所',
    name_alt: null
  },
  {
    id: '4230',
    college_id: '4',
    name_short: '藥學所',
    name_full: '藥學研究所',
    name_alt: null
  },
  {
    id: '4231',
    college_id: '4',
    name_short: '藥物科技組',
    name_full: '藥學系博士班藥物科技組',
    name_alt: null
  },
  {
    id: '4232',
    college_id: '4',
    name_short: '分子醫藥組',
    name_full: '藥學系博士班分子醫藥組',
    name_alt: null
  },
  {
    id: '4240',
    college_id: '4',
    name_short: '醫技所',
    name_full: '醫學檢驗暨生物技術學研究所',
    name_alt: null
  },
  {
    id: '4260',
    college_id: '4',
    name_short: '護理所',
    name_full: '護理學研究所',
    name_alt: null
  },
  {
    id: '4280',
    college_id: '4',
    name_short: '物治所',
    name_full: '物理治療學研究所',
    name_alt: null
  },
  {
    id: '4290',
    college_id: '4',
    name_short: '職治所',
    name_full: '職能治療學研究所',
    name_alt: null
  },
  {
    id: '4410',
    college_id: '4',
    name_short: '生理所',
    name_full: '生理學研究所',
    name_alt: null
  },
  {
    id: '4420',
    college_id: '4',
    name_short: '生化分生所',
    name_full: '生物化學暨分子生物學研究所',
    name_alt: null
  },
  {
    id: '4430',
    college_id: '4',
    name_short: '藥理所',
    name_full: '藥理學研究所',
    name_alt: null
  },
  {
    id: '4440',
    college_id: '4',
    name_short: '病理所',
    name_full: '病理學研究所',
    name_alt: null
  },
  {
    id: '4450',
    college_id: '4',
    name_short: '微生所',
    name_full: '微生物學研究所',
    name_alt: null
  },
  {
    id: '4451',
    college_id: '4',
    name_short: '微生所微免組',
    name_full: '微生物及免疫學組',
    name_alt: null
  },
  {
    id: '4452',
    college_id: '4',
    name_short: null,
    name_full: '寄生蟲組',
    name_alt: null
  },
  {
    id: '4453',
    college_id: '4',
    name_short: '微生所熱醫組',
    name_full: '微生物學研究所熱帶醫學暨寄生蟲學組',
    name_alt: null
  },
  {
    id: '4460',
    college_id: '4',
    name_short: '解剖所',
    name_full: '解剖學暨細胞生物學研究所',
    name_alt: null
  },
  {
    id: '4470',
    college_id: '4',
    name_short: '毒理所',
    name_full: '毒理學研究所',
    name_alt: null
  },
  {
    id: '4480',
    college_id: '4',
    name_short: '分子醫學所',
    name_full: '分子醫學研究所',
    name_alt: null
  },
  {
    id: '4490',
    college_id: '4',
    name_short: '免疫所',
    name_full: '免疫學研究所',
    name_alt: null
  },
  {
    id: '4500',
    college_id: '4',
    name_short: '口腔生物所',
    name_full: '口腔生物科學研究所',
    name_alt: null
  },
  {
    id: '4510',
    college_id: '4',
    name_short: '臨床藥學所',
    name_full: '臨床藥學研究所',
    name_alt: null
  },
  {
    id: '4520',
    college_id: '4',
    name_short: '法醫所',
    name_full: '法醫學研究所',
    name_alt: null
  },
  {
    id: '4530',
    college_id: '4',
    name_short: '腫瘤醫學所',
    name_full: '腫瘤醫學研究所',
    name_alt: null
  },
  {
    id: '4540',
    college_id: '4',
    name_short: '腦與心智所',
    name_full: '腦與心智科學研究所',
    name_alt: null
  },
  {
    id: '4550',
    college_id: '4',
    name_short: '基蛋所',
    name_full: '基因體暨蛋白體醫學研究所',
    name_alt: null
  },
  {
    id: '4560',
    college_id: '4',
    name_short: '轉譯博士學程',
    name_full: '轉譯醫學博士學位學程',
    name_alt: null
  },
  {
    id: '4570',
    college_id: '4',
    name_short: '醫教生倫所',
    name_full: '醫學教育暨生醫倫理研究所',
    name_alt: null
  },
  {
    id: '4580',
    college_id: '4',
    name_short: '醫材影像所',
    name_full: '醫療器材與醫學影像研究所',
    name_alt: null
  },
  {
    id: '4590',
    college_id: '4',
    name_short: '國際學程',
    name_full: '國際三校農業生技與健康醫療碩士學位學程',
    name_alt: null
  },
  {
    id: '5000',
    college_id: '5',
    name_short: null,
    name_full: '工學院',
    name_alt: null
  },
  {
    id: '5010',
    college_id: '5',
    name_short: '土木系',
    name_full: '土木工程學系',
    name_alt: null
  },
  {
    id: '5020',
    college_id: '5',
    name_short: '機械系',
    name_full: '機械工程學系',
    name_alt: null
  },
  {
    id: '5040',
    college_id: '5',
    name_short: '化工系',
    name_full: '化學工程學系',
    name_alt: null
  },
  {
    id: '5050',
    college_id: '5',
    name_short: '工科海洋系',
    name_full: '工程科學及海洋工程學系',
    name_alt: null
  },
  {
    id: '5070',
    college_id: '5',
    name_short: '材料系',
    name_full: '材料科學與工程學系',
    name_alt: null
  },
  {
    id: '5080',
    college_id: '5',
    name_short: '醫工系',
    name_full: '醫學工程學系',
    name_alt: null
  },
  {
    id: '5210',
    college_id: '5',
    name_short: '土木所',
    name_full: '土木工程學研究所',
    name_alt: null
  },
  {
    id: '5211',
    college_id: '5',
    name_short: '土木所大地組',
    name_full: '大地工程組',
    name_alt: null
  },
  {
    id: '5212',
    college_id: '5',
    name_short: '土木所結構組',
    name_full: '結構工程組',
    name_alt: null
  },
  {
    id: '5213',
    college_id: '5',
    name_short: '土木所水利組',
    name_full: '水利工程組',
    name_alt: null
  },
  {
    id: '5215',
    college_id: '5',
    name_short: '土木所交通組',
    name_full: '交通工程組',
    name_alt: null
  },
  {
    id: '5216',
    college_id: '5',
    name_short: '土木所CAE組',
    name_full: '電腦輔助工程組',
    name_alt: null
  },
  {
    id: '5217',
    college_id: '5',
    name_short: '土木所營管組',
    name_full: '營建工程與管理組',
    name_alt: null
  },
  {
    id: '5218',
    college_id: '5',
    name_short: '土木所測量組',
    name_full: '測量及空間資訊組',
    name_alt: null
  },
  {
    id: '5220',
    college_id: '5',
    name_short: '機械所',
    name_full: '機械工程學研究所',
    name_alt: null
  },
  {
    id: '5221',
    college_id: '5',
    name_short: null,
    name_full: '流體力學組',
    name_alt: null
  },
  {
    id: '5223',
    college_id: '5',
    name_short: null,
    name_full: '熱學組',
    name_alt: null
  },
  {
    id: '5224',
    college_id: '5',
    name_short: null,
    name_full: '航空工程組',
    name_alt: null
  },
  {
    id: '5225',
    college_id: '5',
    name_short: null,
    name_full: '固體力學組',
    name_alt: null
  },
  {
    id: '5226',
    college_id: '5',
    name_short: null,
    name_full: '設計組',
    name_alt: null
  },
  {
    id: '5227',
    college_id: '5',
    name_short: null,
    name_full: '製造組',
    name_alt: null
  },
  {
    id: '5228',
    college_id: '5',
    name_short: null,
    name_full: '系統控制組',
    name_alt: null
  },
  {
    id: '5240',
    college_id: '5',
    name_short: '化工所',
    name_full: '化學工程學研究所',
    name_alt: null
  },
  {
    id: '5250',
    college_id: '5',
    name_short: '工科海洋所',
    name_full: '工程科學及海洋工程學研究所',
    name_alt: null
  },
  {
    id: '5270',
    college_id: '5',
    name_short: '材料所',
    name_full: '材料科學與工程學研究所',
    name_alt: null
  },
  {
    id: '527A',
    college_id: '5',
    name_short: null,
    name_full: '材料科學與工程學研究所國際應用材料工程碩',
    name_alt: null
  },
  {
    id: '5280',
    college_id: '5',
    name_short: '醫工所',
    name_full: '醫學工程學研究所',
    name_alt: null
  },
  {
    id: '5410',
    college_id: '5',
    name_short: '環工所',
    name_full: '環境工程學研究所',
    name_alt: null
  },
  {
    id: '5430',
    college_id: '5',
    name_short: '應力所',
    name_full: '應用力學研究所',
    name_alt: null
  },
  {
    id: '5440',
    college_id: '5',
    name_short: '建城所',
    name_full: '建築與城鄉研究所',
    name_alt: null
  },
  {
    id: '5460',
    college_id: '5',
    name_short: '工業工程所',
    name_full: '工業工程學研究所',
    name_alt: null
  },
  {
    id: '5480',
    college_id: '5',
    name_short: null,
    name_full: '醫學工程學研究所_舊',
    name_alt: null
  },
  {
    id: '5490',
    college_id: '5',
    name_short: '高分子所',
    name_full: '高分子科學與工程學研究所',
    name_alt: null
  },
  {
    id: '5500',
    college_id: '5',
    name_short: '綠色精密學程',
    name_full: '綠色永續材料與精密元件博士學位學程',
    name_alt: null
  },
  {
    id: '5510',
    college_id: '5',
    name_short: '分子科技學程',
    name_full: '分子科學與技術國際研究生博士學位學程',
    name_alt: null
  },
  {
    id: '5520',
    college_id: '5',
    name_short: '永續化學科技',
    name_full: '永續化學科技國際研究生博士學位學程',
    name_alt: null
  },
  {
    id: '6000',
    college_id: '6',
    name_short: '生農院',
    name_full: '生物資源暨農學院',
    name_alt: null
  },
  {
    id: '6010',
    college_id: '6',
    name_short: '農藝系',
    name_full: '農藝學系',
    name_alt: null
  },
  {
    id: '6020',
    college_id: '6',
    name_short: '生工系',
    name_full: '生物環境系統工程學系',
    name_alt: null
  },
  {
    id: '6030',
    college_id: '6',
    name_short: '農化系',
    name_full: '農業化學系',
    name_alt: null
  },
  {
    id: '6031',
    college_id: '6',
    name_short: null,
    name_full: '土壤肥料組',
    name_alt: null
  },
  {
    id: '6032',
    college_id: '6',
    name_short: null,
    name_full: '農產製造組',
    name_alt: null
  },
  {
    id: '6040',
    college_id: '6',
    name_short: null,
    name_full: '植物病蟲害學系',
    name_alt: null
  },
  {
    id: '6050',
    college_id: '6',
    name_short: '森林環資系',
    name_full: '森林環境暨資源學系',
    name_alt: null
  },
  {
    id: '6051',
    college_id: '6',
    name_short: null,
    name_full: '育林組',
    name_alt: null
  },
  {
    id: '6052',
    college_id: '6',
    name_short: null,
    name_full: '資源管理組',
    name_alt: null
  },
  {
    id: '6053',
    college_id: '6',
    name_short: null,
    name_full: '森林工業組',
    name_alt: null
  },
  {
    id: '6054',
    college_id: '6',
    name_short: null,
    name_full: '森林資源保育組',
    name_alt: null
  },
  {
    id: '6060',
    college_id: '6',
    name_short: '動科系',
    name_full: '動物科學技術學系',
    name_alt: '動物科技系'
  },
  {
    id: '6070',
    college_id: '6',
    name_short: '農經系',
    name_full: '農業經濟學系',
    name_alt: null
  },
  {
    id: '6080',
    college_id: '6',
    name_short: '園藝系',
    name_full: '園藝暨景觀學系',
    name_alt: null
  },
  {
    id: '6090',
    college_id: '6',
    name_short: '獸醫系',
    name_full: '獸醫學系',
    name_alt: null
  },
  {
    id: '6100',
    college_id: '6',
    name_short: '生傳系',
    name_full: '生物產業傳播暨發展學系',
    name_alt: '生傳發展系'
  },
  {
    id: '6101',
    college_id: '6',
    name_short: null,
    name_full: '推廣教育組',
    name_alt: null
  },
  {
    id: '6102',
    college_id: '6',
    name_short: null,
    name_full: '鄉村社會組',
    name_alt: null
  },
  {
    id: '6110',
    college_id: '6',
    name_short: '生物機電系',
    name_full: '生物機電工程學系',
    name_alt: null
  },
  {
    id: '6120',
    college_id: '6',
    name_short: '昆蟲系',
    name_full: '昆蟲學系',
    name_alt: null
  },
  {
    id: '6130',
    college_id: '6',
    name_short: '植微系',
    name_full: '植物病理與微生物學系',
    name_alt: null
  },
  {
    id: '6210',
    college_id: '6',
    name_short: '農藝所',
    name_full: '農藝學研究所',
    name_alt: null
  },
  {
    id: '6211',
    college_id: '6',
    name_short: '農藝所作物組',
    name_full: '作物科學組',
    name_alt: null
  },
  {
    id: '6212',
    college_id: '6',
    name_short: '農藝所生統組',
    name_full: '生物統計學組',
    name_alt: null
  },
  {
    id: '6220',
    college_id: '6',
    name_short: '生工所',
    name_full: '生物環境系統工程學研究所',
    name_alt: null
  },
  {
    id: '6230',
    college_id: '6',
    name_short: '農化所',
    name_full: '農業化學研究所',
    name_alt: null
  },
  {
    id: '6234',
    college_id: '6',
    name_short: null,
    name_full: '土壤環境與植物營養組',
    name_alt: null
  },
  {
    id: '6235',
    college_id: '6',
    name_short: null,
    name_full: '生物工業化學組',
    name_alt: null
  },
  {
    id: '6236',
    college_id: '6',
    name_short: null,
    name_full: '生物化學組',
    name_alt: null
  },
  {
    id: '6237',
    college_id: '6',
    name_short: null,
    name_full: '營養科學組',
    name_alt: null
  },
  {
    id: '6238',
    college_id: '6',
    name_short: null,
    name_full: '微生物學組',
    name_alt: null
  },
  {
    id: '6250',
    college_id: '6',
    name_short: '森林環資所',
    name_full: '森林環境暨資源學研究所',
    name_alt: null
  },
  {
    id: '6260',
    college_id: '6',
    name_short: '動科所',
    name_full: '動物科學技術學研究所',
    name_alt: null
  },
  {
    id: '6270',
    college_id: '6',
    name_short: '農經所',
    name_full: '農業經濟學研究所',
    name_alt: null
  },
  {
    id: '6280',
    college_id: '6',
    name_short: '園藝所',
    name_full: '園藝暨景觀學研究所',
    name_alt: null
  },
  {
    id: '6281',
    college_id: '6',
    name_short: '園藝所作物組',
    name_full: '園藝作物組',
    name_alt: null
  },
  {
    id: '6282',
    college_id: '6',
    name_short: '園藝所產品組',
    name_full: '園產品處理及利用組',
    name_alt: null
  },
  {
    id: '6283',
    college_id: '6',
    name_short: '園藝所景觀組',
    name_full: '景觀暨休憩組',
    name_alt: null
  },
  {
    id: '6290',
    college_id: '6',
    name_short: '獸醫所',
    name_full: '獸醫學研究所',
    name_alt: null
  },
  {
    id: '6300',
    college_id: '6',
    name_short: '生傳發展所',
    name_full: '生物產業傳播暨發展學研究所',
    name_alt: null
  },
  {
    id: '6310',
    college_id: '6',
    name_short: '生物機電所',
    name_full: '生物產業機電工程學研究所',
    name_alt: null
  },
  {
    id: '6320',
    college_id: '6',
    name_short: '昆蟲所',
    name_full: '昆蟲學研究所',
    name_alt: null
  },
  {
    id: '6330',
    college_id: '6',
    name_short: '植微所',
    name_full: '植物病理與微生物學研究所',
    name_alt: null
  },
  {
    id: '6410',
    college_id: '6',
    name_short: '食科所',
    name_full: '食品科技研究所',
    name_alt: null
  },
  {
    id: '6420',
    college_id: '6',
    name_short: '生物科技所',
    name_full: '生物科技研究所',
    name_alt: null
  },
  {
    id: '6430',
    college_id: '6',
    name_short: '臨床動醫所',
    name_full: '臨床動物醫學研究所',
    name_alt: null
  },
  {
    id: '6440',
    college_id: '6',
    name_short: '分子比病所',
    name_full: '分子暨比較病理生物學研究所',
    name_alt: null
  },
  {
    id: '6450',
    college_id: '6',
    name_short: '植醫碩士學程',
    name_full: '植物醫學碩士學位學程',
    name_alt: null
  },
  {
    id: '7000',
    college_id: '7',
    name_short: '管理院',
    name_full: '管理學院',
    name_alt: null
  },
  {
    id: '7010',
    college_id: '7',
    name_short: '工管系',
    name_full: '工商管理學系',
    name_alt: null
  },
  {
    id: '7011',
    college_id: '7',
    name_short: '工管系企管組',
    name_full: '企業管理組',
    name_alt: null
  },
  {
    id: '7012',
    college_id: '7',
    name_short: '工管系科管組',
    name_full: '科技管理組',
    name_alt: null
  },
  {
    id: '7013',
    college_id: '7',
    name_short: null,
    name_full: '工商管理系企業管理組英文專班',
    name_alt: null
  },
  {
    id: '7020',
    college_id: '7',
    name_short: '會計系',
    name_full: '會計學系',
    name_alt: null
  },
  {
    id: '7030',
    college_id: '7',
    name_short: '財金系',
    name_full: '財務金融學系',
    name_alt: null
  },
  {
    id: '7040',
    college_id: '7',
    name_short: '國企系',
    name_full: '國際企業學系',
    name_alt: null
  },
  {
    id: '7050',
    college_id: '7',
    name_short: '資管系',
    name_full: '資訊管理學系',
    name_alt: null
  },
  {
    id: '7060',
    college_id: '7',
    name_short: null,
    name_full: '企業管理學系',
    name_alt: null
  },
  {
    id: '7220',
    college_id: '7',
    name_short: '會計所',
    name_full: '會計學研究所',
    name_alt: null
  },
  {
    id: '7230',
    college_id: '7',
    name_short: '財金所',
    name_full: '財務金融學研究所',
    name_alt: null
  },
  {
    id: '7240',
    college_id: '7',
    name_short: '國際企業所',
    name_full: '國際企業學研究所',
    name_alt: null
  },
  {
    id: '7250',
    college_id: '7',
    name_short: '資訊管理所',
    name_full: '資訊管理學研究所',
    name_alt: null
  },
  {
    id: '7400',
    college_id: '7',
    name_short: null,
    name_full: '高階管理碩士專班(EMBA)',
    name_alt: null
  },
  {
    id: '7410',
    college_id: '7',
    name_short: '商研所',
    name_full: '商學研究所',
    name_alt: null
  },
  {
    id: '7420',
    college_id: '7',
    name_short: null,
    name_full: '管院知識管理組',
    name_alt: null
  },
  {
    id: '7430',
    college_id: '7',
    name_short: null,
    name_full: '管理學院高階公共管理組',
    name_alt: null
  },
  {
    id: '7440',
    college_id: '7',
    name_short: null,
    name_full: '管理學院會計與管理決策組',
    name_alt: null
  },
  {
    id: '7450',
    college_id: '7',
    name_short: null,
    name_full: '管理學院財務金融組',
    name_alt: null
  },
  {
    id: '7460',
    college_id: '7',
    name_short: null,
    name_full: '管理學院國際企業管理組',
    name_alt: null
  },
  {
    id: '7470',
    college_id: '7',
    name_short: null,
    name_full: '管理學院資訊管理組',
    name_alt: null
  },
  {
    id: '7480',
    college_id: '7',
    name_short: null,
    name_full: '管理學院商學組',
    name_alt: null
  },
  {
    id: '7490',
    college_id: '7',
    name_short: '企管碩士專班',
    name_full: '管理學院企業管理碩士專班(GMBA)',
    name_alt: null
  },
  {
    id: '7500',
    college_id: '7',
    name_short: null,
    name_full: '臺大復旦EMBA',
    name_alt: null
  },
  {
    id: '7510',
    college_id: '7',
    name_short: '創業創新MB',
    name_full: '創業創新管理碩士在職專班',
    name_alt: null
  },
  {
    id: '8000',
    college_id: '8',
    name_short: '公衛院',
    name_full: '公共衛生學院',
    name_alt: null
  },
  {
    id: '8010',
    college_id: '8',
    name_short: '公衛系',
    name_full: '公共衛生學系',
    name_alt: null
  },
  {
    id: '8410',
    college_id: '8',
    name_short: null,
    name_full: '職業醫學與工業衛生研究所',
    name_alt: null
  },
  {
    id: '8420',
    college_id: '8',
    name_short: null,
    name_full: '流行病學研究所',
    name_alt: null
  },
  {
    id: '8430',
    college_id: '8',
    name_short: null,
    name_full: '醫療機構管理研究所',
    name_alt: null
  },
  {
    id: '8440',
    college_id: '8',
    name_short: null,
    name_full: '環境衛生研究所',
    name_alt: null
  },
  {
    id: '8450',
    college_id: '8',
    name_short: null,
    name_full: '衛生政策與管理研究所',
    name_alt: null
  },
  {
    id: '8470',
    college_id: '8',
    name_short: '公衛碩士學程',
    name_full: '公共衛生碩士學位學程',
    name_alt: null
  },
  {
    id: '8480',
    college_id: '8',
    name_short: '健管所',
    name_full: '健康政策與管理研究所',
    name_alt: null
  },
  {
    id: '8481',
    college_id: '8',
    name_short: null,
    name_full: '健康促進組',
    name_alt: null
  },
  {
    id: '8482',
    college_id: '8',
    name_short: null,
    name_full: '健康服務與產業組',
    name_alt: null
  },
  {
    id: '8490',
    college_id: '8',
    name_short: '流預所',
    name_full: '流行病學與預防醫學研究所',
    name_alt: null
  },
  {
    id: '8491',
    college_id: '8',
    name_short: '流預所流病組',
    name_full: '流預所流行病學組',
    name_alt: null
  },
  {
    id: '8492',
    college_id: '8',
    name_short: '流預所生統組',
    name_full: '流預所生物醫學統計組',
    name_alt: null
  },
  {
    id: '8493',
    college_id: '8',
    name_short: '流預所預醫組',
    name_full: '流預所預防醫學組',
    name_alt: null
  },
  {
    id: '8500',
    college_id: '8',
    name_short: '行社所',
    name_full: '健康行為與社區科學研究所',
    name_alt: null
  },
  {
    id: '8510',
    college_id: '8',
    name_short: '食安所',
    name_full: '食品安全與健康研究所',
    name_alt: null
  },
  {
    id: '8520',
    college_id: '8',
    name_short: '環職所',
    name_full: '環境與職業健康科學研究所',
    name_alt: null
  },
  {
    id: '8530',
    college_id: '8',
    name_short: '全衛碩士學程',
    name_full: '全球衛生碩士學位學程',
    name_alt: null
  },
  {
    id: '8540',
    college_id: '8',
    name_short: '全衛博士學程',
    name_full: '全球衛生博士學位學程',
    name_alt: null
  },
  {
    id: '9000',
    college_id: '9',
    name_short: '電資院',
    name_full: '電機資訊學院',
    name_alt: null
  },
  {
    id: '9010',
    college_id: '9',
    name_short: '電機系',
    name_full: '電機工程學系',
    name_alt: null
  },
  {
    id: '9020',
    college_id: '9',
    name_short: '資工系',
    name_full: '資訊工程學系',
    name_alt: null
  },
  {
    id: '9210',
    college_id: '9',
    name_short: '電機所',
    name_full: '電機工程學研究所',
    name_alt: null
  },
  {
    id: '9220',
    college_id: '9',
    name_short: '資工所',
    name_full: '資訊工程學研究所',
    name_alt: null
  },
  {
    id: '9410',
    college_id: '9',
    name_short: '光電所',
    name_full: '光電工程學研究所',
    name_alt: null
  },
  {
    id: '9420',
    college_id: '9',
    name_short: '電信所',
    name_full: '電信工程學研究所',
    name_alt: null
  },
  {
    id: '9430',
    college_id: '9',
    name_short: '電子所',
    name_full: '電子工程學研究所',
    name_alt: null
  },
  {
    id: '9440',
    college_id: '9',
    name_short: '網媒所',
    name_full: '資訊網路與多媒體研究所',
    name_alt: null
  },
  {
    id: '9450',
    college_id: '9',
    name_short: '生醫電資所',
    name_full: '生醫電子與資訊學研究所',
    name_alt: null
  },
  {
    id: '9460',
    college_id: '9',
    name_short: '資料科學學程',
    name_full: '資料科學學位學程',
    name_alt: null
  },
  {
    id: '9470',
    college_id: '9',
    name_short: '生資國際學程',
    name_full: '生物資訊學國際研究生學位學程',
    name_alt: null
  },
  {
    id: '9480',
    college_id: '9',
    name_short: null,
    name_full: '資料科學博士學位學程',
    name_alt: null
  },
  {
    id: 'A000',
    college_id: 'A',
    name_short: '法律院',
    name_full: '法律學院',
    name_alt: null
  },
  {
    id: 'A010',
    college_id: 'A',
    name_short: '法律系',
    name_full: '法律學系',
    name_alt: null
  },
  {
    id: 'A011',
    college_id: 'A',
    name_short: '法律系法學組',
    name_full: '法學組',
    name_alt: null
  },
  {
    id: 'A012',
    college_id: 'A',
    name_short: '法律系司法組',
    name_full: '司法組',
    name_alt: null
  },
  {
    id: 'A013',
    college_id: 'A',
    name_short: '法律系財法組',
    name_full: '財法組',
    name_alt: null
  },
  {
    id: 'A210',
    college_id: 'A',
    name_short: '法律所',
    name_full: '法律研究所',
    name_alt: null
  },
  {
    id: 'A408',
    college_id: 'A',
    name_short: null,
    name_full: '教學發展中心',
    name_alt: null
  },
  {
    id: 'A410',
    college_id: 'A',
    name_short: '科法所',
    name_full: '科際整合法律學研究所',
    name_alt: null
  },
  {
    id: 'B000',
    college_id: 'B',
    name_short: '生科院',
    name_full: '生命科學院',
    name_alt: null
  },
  {
    id: 'B010',
    college_id: 'B',
    name_short: '生科系',
    name_full: '生命科學系',
    name_alt: null
  },
  {
    id: 'B020',
    college_id: 'B',
    name_short: '生技系',
    name_full: '生化科技學系',
    name_alt: null
  },
  {
    id: 'B210',
    college_id: 'B',
    name_short: '生科所',
    name_full: '生命科學所',
    name_alt: null
  },
  {
    id: 'B220',
    college_id: 'B',
    name_short: '生技所',
    name_full: '生化科技研究所',
    name_alt: null
  },
  {
    id: 'B420',
    college_id: 'B',
    name_short: '植物科學所',
    name_full: '植物科學研究所',
    name_alt: null
  },
  {
    id: 'B430',
    college_id: 'B',
    name_short: '分子細生所',
    name_full: '分子與細胞生物學研究所',
    name_alt: null
  },
  {
    id: 'B440',
    college_id: 'B',
    name_short: '生態演化所',
    name_full: '生態學與演化生物學研究所',
    name_alt: null
  },
  {
    id: 'B450',
    college_id: 'B',
    name_short: '漁業科學所',
    name_full: '漁業科學研究所',
    name_alt: null
  },
  {
    id: 'B460',
    college_id: 'B',
    name_short: '生化科學所',
    name_full: '生化科學研究所',
    name_alt: null
  },
  {
    id: 'B470',
    college_id: 'B',
    name_short: null,
    name_full: '微生物與生化學研究所',
    name_alt: null
  },
  {
    id: 'B471',
    college_id: 'B',
    name_short: null,
    name_full: '生物工業組',
    name_alt: null
  },
  {
    id: 'B472',
    college_id: 'B',
    name_short: null,
    name_full: '生物化學組',
    name_alt: null
  },
  {
    id: 'B473',
    college_id: 'B',
    name_short: null,
    name_full: '營養科學組',
    name_alt: null
  },
  {
    id: 'B474',
    college_id: 'B',
    name_short: null,
    name_full: '微生物學組',
    name_alt: null
  },
  {
    id: 'B480',
    college_id: 'B',
    name_short: '基因學位學程',
    name_full: '基因體與系統生物學學位學程',
    name_alt: null
  },
  {
    id: 'B490',
    college_id: 'B',
    name_short: '國際神經學程',
    name_full: '跨領域神經科學國際研究生博士學位學程',
    name_alt: null
  },
  {
    id: 'E000',
    college_id: 'E',
    name_short: null,
    name_full: '進修推廣學院',
    name_alt: null
  },
  {
    id: 'E410',
    college_id: 'E',
    name_short: '事業經營碩士',
    name_full: '事業經營碩士在職學位學程',
    name_alt: null
  },
  {
    id: 'E420',
    college_id: 'E',
    name_short: '事業法務碩士',
    name_full: '事業經營法務碩士在職學位學程',
    name_alt: null
  },
  {
    id: 'E430',
    college_id: 'E',
    name_short: '生物科技管理',
    name_full: '生物科技管理碩士在職學位學程',
    name_alt: null
  },
  {
    id: 'G010',
    college_id: 'G',
    name_short: null,
    name_full: '台北教育大學',
    name_alt: null
  },
  {
    id: 'H000',
    college_id: 'H',
    name_short: null,
    name_full: '共同教育中心',
    name_alt: null
  },
  {
    id: 'H010',
    college_id: 'H',
    name_short: null,
    name_full: '通識教育組',
    name_alt: null
  },
  {
    id: 'H020',
    college_id: 'H',
    name_short: '共教組',
    name_full: '共同教育組',
    name_alt: null
  },
  {
    id: 'H410',
    college_id: 'H',
    name_short: '統計碩士學位',
    name_full: '統計碩士學位學程',
    name_alt: null
  },
  {
    id: 'H420',
    college_id: 'H',
    name_short: '運動健康管理',
    name_full: '運動設施與健康管理碩士學位學程',
    name_alt: null
  },
  {
    id: 'H430',
    college_id: 'H',
    name_short: '農科基因體',
    name_full: '全球農業科技與基因體科學碩士學位學程',
    name_alt: null
  },
  {
    id: 'H440',
    college_id: 'H',
    name_short: '生物多樣性',
    name_full: '生物多樣性國際碩士學位學程',
    name_alt: null
  },
  {
    id: 'J000',
    college_id: 'J',
    name_short: null,
    name_full: '產業研發碩士專班',
    name_alt: null
  },
  {
    id: 'J100',
    college_id: 'J',
    name_short: null,
    name_full: '電機電信電子產業研發碩士專班',
    name_alt: null
  },
  {
    id: 'J110',
    college_id: 'J',
    name_short: null,
    name_full: '資訊產業研發碩士專班',
    name_alt: null
  },
  {
    id: 'K000',
    college_id: 'K',
    name_short: null,
    name_full: '重點科技研究學院與三校聯盟',
    name_alt: null
  },
  {
    id: 'K010',
    college_id: 'K',
    name_short: '臺師大',
    name_full: '國立臺灣師範大學',
    name_alt: null
  },
  {
    id: 'K020',
    college_id: 'K',
    name_short: '臺科大',
    name_full: '國立臺灣科技大學',
    name_alt: null
  },
  {
    id: 'K030',
    college_id: 'K',
    name_short: '國北教大',
    name_full: '國立臺北教育大學',
    name_alt: null
  },
  {
    id: 'K410',
    college_id: 'K',
    name_short: '積體電路碩士',
    name_full: '積體電路設計與自動化碩士學位學程',
    name_alt: null
  },
  {
    id: 'K430',
    college_id: 'K',
    name_short: '元件材料碩士',
    name_full: '元件材料與異質整合碩士學位學程',
    name_alt: null
  },
  {
    id: 'K450',
    college_id: 'K',
    name_short: '奈米工科碩士',
    name_full: '奈米工程與科學碩士學位學程',
    name_alt: null
  },
  {
    id: 'Q010',
    college_id: 'Q',
    name_short: null,
    name_full: '寫作教學中心',
    name_alt: null
  },
  {
    id: 'Q020',
    college_id: 'Q',
    name_short: null,
    name_full: '生命教育研發育成中心',
    name_alt: null
  },
  {
    id: 'V410',
    college_id: 'V',
    name_short: '國家理論中心',
    name_full: '國家理論科學研究中心',
    name_alt: null
  },
  {
    id: 'Z000',
    college_id: 'Z',
    name_short: null,
    name_full: '創新設計學院',
    name_alt: null
  },
  {
    id: 'Z010',
    college_id: 'Z',
    name_short: '創新學位學程',
    name_full: '創新領域學士學位學程',
    name_alt: null
  }
]

export const colleges: {
  [key: string]: College
} = {
  0: { name: '未知學院' },
  1: { name: '文學院' },
  2: { name: '理學院' },
  3: { name: '社會科學院' },
  4: { name: '醫學院' },
  5: { name: '工學院' },
  6: { name: '生物資源暨農學院' },
  7: { name: '管理學院' },
  8: { name: '公共衛生學院' },
  9: { name: '電機資訊學院' },
  A: { name: '法律學院' },
  B: { name: '生命科學院' },
  E: { name: '進修推廣學院' },
  H: { name: '學位學程' },
  J: { name: '產業研發碩士專班' },
  K: { name: '重點科技研究學院與三校聯盟' },
  Q: { name: '寫作教學中心' },
  V: { name: '國家理論科學研究中心' },
  Z: { name: '創新設計學院' }
}

export const categories: {
  [key: string]: Category
} = {
  chinese: {
    code: '共',
    full_name: '國文領域'
  },
  english: {
    code: '共',
    full_name: '英文領域'
  },
  english_adv: {
    code: '共',
    full_name: '進階英文'
  },
  foreign: {
    code: '共',
    full_name: '外文領域'
  },
  foreign_like: {
    code: '共',
    full_name: '可充當外文領域'
  },
  shared_selective: {
    code: '共',
    full_name: '共同選修課程'
  },
  g_ax: {
    code: 'AX',
    full_name: '不分領域通識課程'
  },
  g_a1: {
    code: 'A1',
    full_name: 'A1 文學與藝術領域'
  },
  g_a2: {
    code: 'A2',
    full_name: 'A2 歷史思維領域'
  },
  g_a3: {
    code: 'A3',
    full_name: 'A3 世界文明領域'
  },
  g_a4: {
    code: 'A4',
    full_name: 'A4 哲學與道德思考領域'
  },
  g_a5: {
    code: 'A5',
    full_name: 'A5 公民意識與社會分析領域'
  },
  g_a6: {
    code: 'A6',
    full_name: 'A6 量化分析與數學素養領域'
  },
  g_a7: {
    code: 'A7',
    full_name: 'A7 物質科學領域'
  },
  g_a8: {
    code: 'A8',
    full_name: 'A8 生命科學領域'
  },
  freshman: {
    code: '新',
    full_name: '新生專題/新生講座課程'
  },
  basic: {
    code: '基',
    full_name: '基本能力課程'
  },
  military: {
    code: '軍',
    full_name: '軍訓課程'
  },
  pe_1: {
    code: '體',
    full_name: '健康體適能'
  },
  pe_2: {
    code: '體',
    full_name: '專項運動學群'
  },
  pe_3: {
    code: '體',
    full_name: '選修體育'
  },
  pe_4: {
    code: '體',
    full_name: '校隊班'
  },
  pe_5: {
    code: '體',
    full_name: '進修學士班'
  },
  frequent: {
    code: '密',
    full_name: '密集課程'
  }
}
