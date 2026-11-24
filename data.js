/* 真实课表数据：2026-2027 学年第一学期（长安大学 eams 截图解析）
   修改后重新打包：node tools/build.mjs
   周次格式：3-16、3-7,9-11、1-16单 / 1-16双 */
window.SEED_DATA = {
  version: 2,
  profile: {
    name: "同学",
    school: "长安大学",
    semesterStart: "2026-09-07"   // 第 1 周的周一
  },
  settings: {
    leadMinutes: 15,
    days: 6,              // 你的课表排到星期六，默认显示 6 天
    sound: true,
    notify: true,
    // 作息：由这 5 个参数推出 11 节课的时间（上午 1-4、下午 5-8、晚上 9-11）
    time: { amStart: "08:00", pmStart: "14:00", evStart: "19:00", periodMin: 45, breakMin: 10 }
  },
  periods: [
    { n: 1,  start: "08:00", end: "08:45" },
    { n: 2,  start: "08:55", end: "09:40" },
    { n: 3,  start: "10:00", end: "10:45" },
    { n: 4,  start: "10:55", end: "11:40" },
    { n: 5,  start: "14:00", end: "14:45" },
    { n: 6,  start: "14:55", end: "15:40" },
    { n: 7,  start: "16:00", end: "16:45" },
    { n: 8,  start: "16:55", end: "17:40" },
    { n: 9,  start: "19:00", end: "19:45" },
    { n: 10, start: "19:55", end: "20:40" },
    { n: 11, start: "20:50", end: "21:35" }
  ],
  courses: [
    {
      id: "c-gaoshu",
      name: "高等数学（一）",
      teacher: "张丽 / 陈亚云",
      room: "WM3209",
      sessions: [
        { day: 1, start: 1, end: 2, weeks: "3-15" },
        { day: 3, start: 1, end: 2, weeks: "3-16" },
        { day: 4, start: 1, end: 2, weeks: "16" },
        { day: 5, start: 1, end: 2, weeks: "3-16" }
      ]
    },
    {
      id: "c-wushu",
      name: "武术选项（体育一）",
      teacher: "毛红妮",
      room: "体育馆三楼空地",
      sessions: [{ day: 1, start: 3, end: 4, weeks: "3-16" }]
    },
    {
      id: "c-algo",
      name: "算法与数据结构（英）",
      teacher: "任卫军",
      room: "计实验室105",
      sessions: [
        { day: 1, start: 7, end: 8, weeks: "9-16" },
        { day: 3, start: 7, end: 8, weeks: "9-16" },
        { day: 4, start: 5, end: 6, weeks: "9-16" }
      ]
    },
    {
      id: "c-ai",
      name: "人工智能导论",
      teacher: "王伟 / 宋焕生 / 李颖",
      room: "WH2401(中法)",
      sessions: [{ day: 1, start: 9, end: 10, weeks: "3-7,9-11" }]
    },
    {
      id: "c-oral",
      name: "英语口语（英）",
      teacher: "CHAPMAN Justin / 李颖",
      room: "WH2408(中法)",
      sessions: [
        { day: 2, start: 1, end: 2, weeks: "3-19" },
        { day: 4, start: 7, end: 8, weeks: "3-19" }
      ]
    },
    {
      id: "c-python",
      name: "Python程序设计（英）",
      teacher: "Adnan BOUDJELAL / 贺之莉",
      room: "计实验室105",
      sessions: [
        { day: 2, start: 5, end: 6, weeks: "3-10" },
        { day: 4, start: 1, end: 4, weeks: "3-10" },
        { day: 5, start: 3, end: 4, weeks: "3-10" }
      ]
    },
    {
      id: "c-career",
      name: "生涯认知与自我探索",
      teacher: "周平",
      room: "WX4101",
      sessions: [{ day: 2, start: 5, end: 6, weeks: "12-16" }]
    },
    {
      id: "c-sizheng",
      name: "思想道德与法治",
      teacher: "陈谊",
      room: "WH2107",
      sessions: [{ day: 2, start: 7, end: 8, weeks: "3-18" }]
    },
    {
      id: "c-research",
      name: "科学研究方法",
      teacher: "张贝",
      room: "WH1103",
      sessions: [{ day: 2, start: 9, end: 10, weeks: "3-9,11-14" }]
    },
    {
      id: "c-discrete",
      name: "离散数学（双语）",
      teacher: "丁爱玲",
      room: "WH2401/2402",
      sessions: [
        { day: 3, start: 3, end: 4, weeks: "6-15" },
        { day: 5, start: 7, end: 8, weeks: "6-15" }
      ]
    },
    {
      id: "c-psy",
      name: "大学生心理健康教育",
      teacher: "杨倩 / 程铃琳",
      room: "虚拟教室/WX4203",
      sessions: [{ day: 3, start: 5, end: 6, weeks: "3-18" }]
    },
    {
      id: "c-garden",
      name: "中国古典园林漫步",
      teacher: "刘丹 / 吴焱",
      room: "WX3102/SY2204",
      sessions: [{ day: 3, start: 9, end: 11, weeks: "3-7" }]
    },
    {
      id: "c-music",
      name: "音乐艺术审美与实践",
      teacher: "丁静",
      room: "WX4104",
      sessions: [{ day: 4, start: 9, end: 10, weeks: "3-9,11-14" }]
    },
    {
      id: "c-military",
      name: "军事理论",
      teacher: "韩芳",
      room: "WT1202",
      sessions: [
        { day: 5, start: 5, end: 6, weeks: "3-18" },
        { day: 6, start: 9, end: 10, weeks: "16-17" }
      ]
    },
    {
      id: "c-movie",
      name: "认识电影",
      teacher: "武小菲",
      room: "WH1301",
      sessions: [{ day: 6, start: 1, end: 4, weeks: "3-9,11-14" }]
    },
    {
      id: "c-history",
      name: "社会主义发展史",
      teacher: "蔡秋雨",
      room: "WH1204",
      sessions: [
        { day: 6, start: 5, end: 6, weeks: "3-7" },
        { day: 6, start: 7, end: 8, weeks: "7" }
      ]
    }
  ],
  tasks: []
};
