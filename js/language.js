(function () {
    'use strict';
    // All translated markup below is authored locally; no user input is rendered as HTML.
    var messages = {
  "text0": {
    "zh": "跳到正文",
    "en": "Skip to content"
  },
  "text1": {
    "zh": "申峻豪",
    "en": "Junhao Shen"
  },
  "text3": {
    "zh": "本科在读",
    "en": "Undergraduate Student"
  },
  "text4": {
    "zh": "数学与系统科学学院",
    "en": "College of Mathematics and System Science"
  },
  "text5": {
    "zh": "新疆大学",
    "en": "Xinjiang University"
  },
  "text6": {
    "zh": "山东淄博",
    "en": "Zibo, Shandong, China"
  },
  "text7": {
    "zh": "数据科学与大数据技术",
    "en": "Data Science and Big Data Technology"
  },
  "text8": {
    "zh": "个人简介",
    "en": "Biography"
  },
  "text9": {
    "zh": "研究兴趣",
    "en": "Research Interests"
  },
  "text10": {
    "zh": "教育背景",
    "en": "Education"
  },
  "text11": {
    "zh": "科研经历",
    "en": "Research Experience"
  },
  "text12": {
    "zh": "论文与预印本",
    "en": "Publications &amp; Preprints"
  },
  "text13": {
    "zh": "精选项目",
    "en": "Selected Projects"
  },
  "text14": {
    "zh": "荣誉与奖励",
    "en": "Honors and Awards"
  },
  "text15": {
    "zh": "我是<strong>申峻豪</strong>，来自山东淄博，现就读于<a href=\"https://www.xju.edu.cn/\" target=\"_blank\" rel=\"noopener noreferrer\">新疆大学</a>数学与系统科学学院，为数据科学与大数据技术专业大四学生。",
    "en": "I am <strong>Junhao Shen</strong>, a final-year undergraduate majoring in Data Science and Big Data Technology at the College of Mathematics and System Science, <a href=\"https://www.xju.edu.cn/\" target=\"_blank\" rel=\"noopener noreferrer\">Xinjiang University</a>. I am originally from Zibo, Shandong, China."
  },
  "text16": {
    "zh": "我将于 <strong>2027 年秋季</strong>进入<a href=\"https://www.xjtu.edu.cn/\" target=\"_blank\" rel=\"noopener noreferrer\">西安交通大学</a>数学与统计学院攻读应用统计学硕士学位，并在梅占东教授的指导下开展研究。",
    "en": "In <strong>fall 2027</strong>, I will join the School of Mathematics and Statistics at <a href=\"https://www.xjtu.edu.cn/\" target=\"_blank\" rel=\"noopener noreferrer\">Xi’an Jiaotong University</a> to pursue a master’s degree in Applied Statistics under the supervision of Prof. Zhandong Mei."
  },
  "text17": {
    "zh": "我的研究兴趣集中于<strong>计算机视觉与深度学习</strong>，尤其关注视频生成、世界模型与三维视觉。",
    "en": "My research interests center on <strong>computer vision and deep learning</strong>, particularly video generation, world models, and 3D vision."
  },
  "text18": {
    "zh": "欢迎与我交流研究想法，探讨合作机会。",
    "en": "I am always happy to exchange research ideas and explore opportunities to collaborate."
  },
  "text19": {
    "zh": "扩散模型 · 视频生成 · 世界模型",
    "en": "Diffusion Models · Video Generation · World Models"
  },
  "text20": {
    "zh": "三维场景重建 · 三维视觉 · 运动恢复结构 · 目标匹配",
    "en": "3D Scene Reconstruction · 3D Vision · Structure from Motion · Target Matching"
  },
  "text21": {
    "zh": "本科学习方向：因果推断、图网络、贝叶斯推断。",
    "en": "Undergraduate study interests: causal inference, graph networks, and Bayesian inference."
  },
  "text22": {
    "zh": "西安交通大学",
    "en": "Xi’an Jiaotong University"
  },
  "text23": {
    "zh": "2027 — 2030（计划）",
    "en": "2027 – 2030 (planned)"
  },
  "text24": {
    "zh": "硕士待入学 · 2027 年秋入学",
    "en": "Incoming Master’s Student · Fall 2027"
  },
  "text25": {
    "zh": "数学与统计学院 · 应用统计学",
    "en": "School of Mathematics and Statistics · Applied Statistics"
  },
  "text26": {
    "zh": "导师：梅占东教授<br>研究方向：视频生成、世界模型、三维视觉与三维重建。",
    "en": "Supervisor: Prof. Zhandong Mei<br>Research interests: video generation, world models, 3D vision, and 3D reconstruction."
  },
  "text27": {
    "zh": "新疆大学",
    "en": "Xinjiang University"
  },
  "text28": {
    "zh": "2023 — 2027（预计）",
    "en": "2023 – 2027 (expected)"
  },
  "text29": {
    "zh": "本科在读",
    "en": "Undergraduate Student"
  },
  "text30": {
    "zh": "数学与系统科学学院 · 数据科学与大数据技术",
    "en": "College of Mathematics and System Science · Data Science and Big Data Technology"
  },
  "text31": {
    "zh": "本科学习方向：因果推断、图网络、贝叶斯推断。",
    "en": "Undergraduate study interests: causal inference, graph networks, and Bayesian inference."
  },
  "text32": {
    "zh": "北京大学",
    "en": "Peking University · Nexus Lab"
  },
  "text33": {
    "zh": "2026 年 10 月 — 至今",
    "en": "Oct. 2026 – Present"
  },
  "text34": {
    "zh": "科研实习",
    "en": "Research Intern"
  },
  "text35": {
    "zh": "指导老师：崇滨 特聘副研究员",
    "en": "Supervisor: Bin Chong, Specially Appointed Associate Research Fellow"
  },
  "text36": {
    "zh": "西安交通大学 · 数学与统计学院",
    "en": "Xi’an Jiaotong University · School of Mathematics and Statistics"
  },
  "text37": {
    "zh": "2025 年 11 月 — 2026 年 9 月",
    "en": "Nov. 2025 – Sep. 2026"
  },
  "text38": {
    "zh": "科研实习",
    "en": "Research Intern"
  },
  "text39": {
    "zh": "指导老师：岳宗胜 教授",
    "en": "Supervisor: Prof. Zongsheng Yue"
  },
  "text40": {
    "zh": "论文与预印本信息待补充。",
    "en": "Publication and preprint details will be added here."
  },
  "text41": {
    "zh": "<strong>国家级二等奖</strong>，高教社杯全国大学生数学建模竞赛（本科组），2025<br><span class=\"award-detail\">新疆大学 · 指导教师：刘德民教授</span>",
    "en": "<strong>National Second Prize</strong>, China Undergraduate Mathematical Contest in Modeling (Higher Education Press Cup, Undergraduate Division), 2025<br><span class=\"award-detail\">Xinjiang University · Advisor: Prof. Demin Liu</span>"
  },
  "text42": {
    "zh": "<strong>国家级三等奖</strong>，正大杯全国大学生市场调查与分析大赛（本科组），2025<br><span class=\"award-detail\">新疆大学 · 指导教师：李智明教授</span>",
    "en": "<strong>National Third Prize</strong>, National College Student Market Survey and Analysis Competition (Zhengda Cup, Undergraduate Division), 2025<br><span class=\"award-detail\">Xinjiang University · Advisor: Prof. Zhiming Li</span>"
  },
  "text43": {
    "zh": "© 2026 申峻豪",
    "en": "© 2026 Junhao Shen"
  },
  "text44": {
    "zh": "最后更新：2026 年 11 月 8 日",
    "en": "Last updated: November 8, 2026"
  },
  "text45": {
    "zh": "个人简介",
    "en": "Biography"
  },
  "text46": {
    "zh": "研究兴趣",
    "en": "Research"
  },
  "text47": {
    "zh": "教育背景",
    "en": "Education"
  },
  "text48": {
    "zh": "科研经历",
    "en": "Experience"
  },
  "text49": {
    "zh": "论文",
    "en": "Publications"
  },
  "text50": {
    "zh": "项目",
    "en": "Projects"
  },
  "text51": {
    "zh": "荣誉",
    "en": "Awards"
  },
  "zhihu": {
    "zh": "知乎",
    "en": "Zhihu"
  },
  "github": {
    "zh": "代码主页",
    "en": "GitHub"
  }
};
    var attributes = [
  [
    ".profile-avatar img",
    "alt",
    "申峻豪的个人照片",
    "Portrait of Junhao Shen"
  ],
  [
    ".edu-card:nth-child(1) img",
    "alt",
    "西安交通大学校徽",
    "Xi’an Jiaotong University emblem"
  ],
  [
    ".edu-card:nth-child(2) img",
    "alt",
    "新疆大学校徽",
    "Xinjiang University emblem"
  ],
  [
    ".exp-card:nth-child(1) img",
    "alt",
    "北京大学校徽",
    "Peking University emblem"
  ],
  [
    ".exp-card:nth-child(2) img",
    "alt",
    "西安交通大学校徽",
    "Xi’an Jiaotong University emblem"
  ],
  [
    ".top-nav-links",
    "aria-label",
    "主页章节",
    "Homepage sections"
  ],
  [
    "meta[name=\"description\"]",
    "content",
    "申峻豪的学术主页：计算机视觉、视频生成、世界模型与三维重建。",
    "Academic homepage of Junhao Shen: computer vision, video generation, world models, and 3D reconstruction."
  ],
  [
    "meta[name=\"author\"]",
    "content",
    "申峻豪",
    "Junhao Shen"
  ]
];
    var storageKey = 'junhao-homepage-language';
    var language = 'zh';
    var button = document.getElementById('language-toggle');
    try {
        var saved = localStorage.getItem(storageKey);
        if (saved === 'en' || saved === 'zh') language = saved;
    } catch (_) { /* Switching still works when storage is unavailable. */ }
    function applyLanguage(next) {
        language = next;
        document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
        document.title = next === 'zh' ? '申峻豪 | 个人学术主页' : 'Junhao Shen | Academic Homepage';
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            element.innerHTML = messages[element.dataset.i18n][next];
        });
        attributes.forEach(function (entry) {
            document.querySelector(entry[0]).setAttribute(entry[1], entry[next === 'zh' ? 2 : 3]);
        });
        button.textContent = next === 'zh' ? '语言：中文' : 'Language: English';
        button.setAttribute('aria-label', next === 'zh' ? '当前为中文，点击切换至英文' : 'Current language: English. Switch to Chinese');
        button.title = next === 'zh' ? '切换至英文' : 'Switch to Chinese';
        button.hidden = false;
        try { localStorage.setItem(storageKey, next); } catch (_) {}
        window.dispatchEvent(new Event('scroll'));
    }
    button.addEventListener('click', function () { applyLanguage(language === 'zh' ? 'en' : 'zh'); });
    applyLanguage(language);
})();
