 const DATA_STORE = [
  { // ===================================================================== 1
    materials:[
      {material: "Cиловой кабель"},
      {material: "3-х жильный",  type: 1},
      {material: "5-х жильный",  type: 2}
    ],
    parameters:[
      {parameter: "укажите парамы"},
      {parameter: "сечение 2,5мм²",type:1 ,price:50,  measure:'м.'},
      {parameter: "сечение 6мм²",  type:1 ,price:57,  measure:'м.'},
      {parameter: "сечение 10мм²", type:1 ,price:65,  measure:'м.'},
      {parameter: "сечение 4мм²",  type:2 ,price:75,  measure:'м.'},
      {parameter: "сечение 10мм²", type:2 ,price:85,  measure:'м.'},
      {parameter: "сечение 16мм²", type:2 ,price:105, measure:'м.'},
      {parameter: "сечение 35мм²", type:2 ,price:145, measure:'м.'}
    ]
  },
  { // 2 ===================================================================== 2
    materials:[
      {material: "Слаботочный кабель"},
      {material: "UTP, TB, Телефон",  type:1}
    ],
    parameters:[
      {parameter: "укажите параметры",type:1 ,price:'35', measure:'м.'},
      {parameter: "UTP (интернет)",   type:1 ,price:'35', measure:'м.'},
      {parameter: "TB (антена)",      type:1 ,price:'35', measure:'м.'},
      {parameter: "Телефонный",       type:1 ,price:'35', measure:'м.'}
    ]
  },
  { // 3 ===================================================================== 3
    materials:[
      {material: "Труба, кабель-канал"},
      {material: "Труба гофрированная", type:1},
      {material: "Труба ПВХ, ПНД",      type:2},
      {material: "Металлорукав",        type:3},
      {material: "Кабель канал",        type:4},
      {material: "Труба металлическая", type:5}
    ],
    parameters:[
      {parameter: "диаметр"},
      {parameter: "до Ø20 мм", type:1, price:30, measure:'м.' },
      {parameter: "до Ø32 мм", type:1, price:40, measure:'м.' },
      {parameter: "до Ø50 мм", type:1, price:50, measure:'м.' },
      {parameter: "до Ø20 мм", type:2, price:35, measure:'м.' },
      {parameter: "до Ø32 мм", type:2, price:45, measure:'м.' },
      {parameter: "до Ø50 мм", type:2, price:60, measure:'м.' },
      {parameter: "до Ø32 мм", type:3, price:45, measure:'м.' },
      {parameter: "до 25Х16" , type:4, price:90, measure:'м.' },
      {parameter: "до 60Х40" , type:4, price:160, measure:'м.'},
      {parameter: "до 110Х60", type:5, price:200, measure:'м.'},
      {parameter: "до Ø32 мм", type:5, price:250, measure:'м.'}


    ]
  },
  { // 4 ===================================================================== 4
    materials:[
      {title_material: "Монтаж лотка"},
      {material: "Лоток металлический", type:1},
      {material: "Кронштейн",           type:2},
      {material: "Подвес",              type:3},
      {material: "Крышка",              type:4},
      {material: "Перегородка",         type:5},
      {material: "Угол/тройник",        type:6},
      {material: "Подъем/опуск",        type:7}
    ],
    parameters:[
      {parameter: "размеры и типы"},
      {parameter: "ширина до 200мм", type:1, price:350, measure:'м.' },
      {parameter: "ширина до 400мм", type:1, price:450, measure:'м.' },
      {parameter: "ширина до 600мм", type:1, price:550, measure:'м.' },
      {parameter: "металлический",   type:2, price:150, measure:'шт.'},
      {parameter: "металлический",   type:3, price:150, measure:'шт.'},
      {parameter: "металлическая",   type:4, price:150, measure:'шт.'},
      {parameter: "металлическая",   type:5, price:150, measure:'шт.'},
      {parameter: "металлический",   type:6, price:350, measure:'шт.'},
      {parameter: "металлическая",   type:7, price:150, measure:'шт.'}
    ]
  },
  { // 5 ===================================================================== 5
    materials:[
      {material: "Штробление"},
      {material: "в бетоне",        type:1},
      {material: "в пеноблоке",     type:2},
      {material: "в кирпиче",       type:3},
      {material: "штукатурка штроб",type:4}
    ],
    parameters:[
      {parameter: "Ширина Х Глубина"},
      {parameter: "20Х40", type:1, price:390,  measure:'м.'},
      {parameter: "40Х40", type:1, price:480,  measure:'м.'},
      {parameter: "60Х40", type:1, price:690,  measure:'м.'},
      {parameter: "100Х40",type:1, price:1200, measure:'м.'},
      {parameter: "20Х40", type:2, price:120,  measure:'м.'},
      {parameter: "40Х40", type:2, price:190,  measure:'м.'},
      {parameter: "60Х40", type:2, price:290,  measure:'м.'},
      {parameter: "100Х40",type:2, price:490,  measure:'м.'},
      {parameter: "20Х40", type:3, price:180,  measure:'м.'},
      {parameter: "40Х40", type:3, price:240,  measure:'м.'},
      {parameter: "60Х40", type:3, price:390,  measure:'м.'},
      {parameter: "100Х40",type:3, price:690,  measure:'м.'},
      {parameter: "до 100Х40",type:4, price:80, measure:'м.'}
    ]
  },
  { // 6 ===================================================================== 6
    materials:[
      {material: "Сквозное сверление"},
      {material: "в металле",  type:1},
      {material: "в пеноблоке",type:2},
      {material: "в кирпиче",  type:3},
      {material: "в бетоне",   type:4}
    ],
    parameters:[
      {parameter: "диаметр мм."},
      {parameter: "до Ø32 мм", type:1, price:150, measure:'см.'},
      {parameter: "до Ø32 мм", type:2, price:4,   measure:'см.'},
      {parameter: "до Ø75 мм", type:2, price:10,  measure:'см.'},
      {parameter: "до Ø32 мм", type:3, price:6,   measure:'см.'},
      {parameter: "до Ø75 мм", type:3, price:20,  measure:'см.'},
      {parameter: "до Ø32 мм", type:4, price:11,  measure:'см.'},
      {parameter: "до Ø75 мм", type:4, price:30,  measure:'см.'}
    ]
  },
  { // 7 ===================================================================== 7
    materials:[
      {material: "Высверливание лунок"},
      {material: "в гипсокартоне",type:1},
      {material: "в кирпиче",     type:2},
      {material: "в бетоне",      type:3}
    ],
    parameters:[
      {parameter: "диаметр"},
      {parameter: "до Ø75X50 мм", type:1, price:100, measure:'шт.'},
      {parameter: "до Ø75X80 мм", type:1, price:120, measure:'шт.'},
      {parameter: "до Ø75X50 мм", type:2, price:150, measure:'шт.'},
      {parameter: "до Ø75X80 мм", type:2, price:180, measure:'шт.'},
      {parameter: "до Ø75X50 мм", type:3, price:350, measure:'шт.'},
      {parameter: "до Ø75X80 мм", type:3, price:400, measure:'шт.'}
    ]
  },
  { // 8 ===================================================================== 8
    materials:[
      {material: "Установка подрозетников"},
      {material: "в гипсокартоне",type:1},
      {material: "в бетоне",      type:2},
      {material: "в кирпиче",     type:3},
      {material: "в гипсолите",   type:4},
      {material: "в пеноблоке",   type:5}
    ],
    parameters:[
      {parameter: "тип подразетника"},
      {parameter: "пластиковый", type:1, price:70,  measure:'шт.'},
      {parameter: "пластиковый", type:2, price:100, measure:'шт.'},
      {parameter: "пластиковый", type:3, price:100, measure:'шт.'},
      {parameter: "пластиковый", type:4, price:100, measure:'шт.'},
      {parameter: "пластиковый", type:5, price:100, measure:'шт.'},
    ]
  },
  { // 9 ===================================================================== 9
    materials:[
      {material: "Распаечная коробока"},
      {material: "наружная",  type:1},
      {material: "внутренняя",type:2}
    ],
    parameters:[
      {parameter: "размеры"},
      {parameter: "80 Х80 Х60 мм",  type:1, price:250, measure:'шт.'},
      {parameter: "100 Х100 Х60 мм",type:1, price:250, measure:'шт.'},
      {parameter: "Ø80 мм",         type:2, price:250, measure:'шт.'}
    ]
  },
  { // 10 ===================================================================== 10
    materials:[
      {material: "Установка автоматов"},
      {material: "автомат", type:1},
      {material: "УЗО",     type:2}
    ],
    parameters:[
      {parameter: "типы"},
      {parameter: "однополюсной",   type:1, price:210, measure:'шт.'},
      {parameter: "двухполюсный",   type:1, price:270, measure:'шт.'},
      {parameter: "трёхполюсный",   type:1, price:390, measure:'шт.'},
      {parameter: "двухполюсное",   type:2, price:450, measure:'шт.'},
      {parameter: "четырёхполюсное",type:2, price:680, measure:'шт.'}
    ]
  },
  { // 11 ===================================================================== 11
    materials:[
      {material: "Установка бокса (щитка)"},
      {material: "накладной",              type:1},
      {material: "внутренний гипсокартон", type:2},
      {material: "внутренний кирпич",      type:3},
      {material: "внутренний бетон",       type:4}
    ],
    parameters:[
      {parameter: "размер шкафа"},
      {parameter: "до 24 модулей", type:1, price:900,  measure:'шт.'},
      {parameter: "до 36 модулей", type:1, price:1500, measure:'шт.'},
      {parameter: "до 54 модулей", type:1, price:2500, measure:'шт.'},
      {parameter: "до 6  модулей", type:2, price:1400, measure:'шт.'},
      {parameter: "до 12 модулей", type:2, price:1800, measure:'шт.'},
      {parameter: "до 24 модулей", type:2, price:2500, measure:'шт.'},
      {parameter: "до 36 модулей", type:2, price:2900, measure:'шт.'},
      {parameter: "до 54 модулей", type:2, price:3500, measure:'шт.'},
      {parameter: "до 96 модулей", type:2, price:5900, measure:'шт.'},
      {parameter: "до 6 модулей",  type:3, price:1900, measure:'шт.'},
      {parameter: "до 12 модулей", type:3, price:2500, measure:'шт.'},
      {parameter: "до 24 модулей", type:3, price:3500, measure:'шт.'},
      {parameter: "до 36 модулей", type:3, price:3900, measure:'шт.'},
      {parameter: "до 54 модулей", type:3, price:4500, measure:'шт.'},
      {parameter: "до 96 модулей", type:3, price:7500, measure:'шт.'},
      {parameter: "до 6 модулей",  type:4, price:2900, measure:'шт.'},
      {parameter: "до 12 модулей", type:4, price:3600, measure:'шт.'},
      {parameter: "до 24 модулей", type:4, price:4800, measure:'шт.'},
      {parameter: "до 36 модулей", type:4, price:5200, measure:'шт.'},
      {parameter: "до 54 модулей", type:4, price:5800, measure:'шт.'},
      {parameter: "до 96 модулей", type:4, price:9500, measure:'шт.'},
    ]
  },
  { // 12 ===================================================================== 12
    materials:[
      {material: "Электросчетчик"},
      {material: "установка счётчика", type:1}
    ],
    parameters:[
      {parameter: "тип"},
      {parameter: "однофазный", type:1, price:950,  measure:'шт.'},
      {parameter: "трёхфазный", type:1, price:1400, measure:'шт.'},
    ]
  },
  { // 13 ===================================================================== 13
    materials:[
      {material: "Установка розеток"},
      {material: "внутренняя", type:1},
      {material: "наружная",   type:2}
    ],
    parameters:[
      {parameter: "тип розетки"},
      {parameter: "бытовая розетка",         type:1, price:200, measure:'шт.'},
      {parameter: "компьютерная (интернет)", type:1, price:200, measure:'шт.'},
      {parameter: "ТВ розетка",              type:1, price:200, measure:'шт.'},
      {parameter: "телефонная",              type:1, price:200, measure:'шт.'},
      {parameter: "для электроплиты",        type:1, price:500, measure:'шт.'},
      {parameter: "бытовая розетка",         type:2, price:250, measure:'шт.'},
      {parameter: "компьютерная (интернет)", type:2, price:250, measure:'шт.'},
      {parameter: "ТВ розетка",              type:2, price:250, measure:'шт.'},
      {parameter: "телефонная",              type:2, price:250, measure:'шт.'},
      {parameter: "для электроплиты",        type:2, price:500, measure:'шт.'}
    ]
  },
  { // 14 ===================================================================== 14
    materials:[
      {material: "Установка выключателей"},
      {material: "Внутренний",             type:1},
      {material: "Наружный",               type:2},
      {material: "Диммер",                 type:3},
      {material: "Реостат(терморегулятор)",type:4}
    ],
    parameters:[
      {parameter: "тип"},
      {parameter: "1 клавишный",            type:1, price:180, measure:'шт.'},
      {parameter: "1 клавишный  проходной", type:1, price:250, measure:'шт.'},
      {parameter: "2 клавишный",            type:1, price:200, measure:'шт.'},
      {parameter: "2 клавишный проходной",  type:1, price:300, measure:'шт.'},
      {parameter: "1 клавишный",            type:2, price:220, measure:'шт.'},
      {parameter: "1 клавишный  проходной", type:2, price:250, measure:'шт.'},
      {parameter: "2 клавишный",            type:1, price:250, measure:'шт.'},
      {parameter: "2 клавишный проходной",  type:1, price:340, measure:'шт.'},
      {parameter: "обычный",                type:3, price:250, measure:'шт.'},
      {parameter: "обычный",                type:4, price:500, measure:'шт.'}
    ]
  },
  { // 15 ===================================================================== 15
    materials:[
      {material: "Установка светильников"},
      {material: "Светодиодная лента", type:1},
      {material: "Светильник",         type:2},
      {material: "Люстра",             type:3}
    ],
    parameters:[
      {parameter: "тип"},
      {parameter: "лента светодиодная",  type:1, price:300, measure:'м.' },
      {parameter: "настенный Бра",       type:2, price:300, measure:'шт.'},
      {parameter: "армстронг",           type:2, price:350, measure:'шт.'},
      {parameter: "потолочный накладной",type:2, price:450, measure:'шт.'},
      {parameter: "точечный",            type:2, price:300, measure:'шт.'},
      {parameter: "креплением,сложная",  type:2, price:1500,measure:'шт.'},
      {parameter: "креплением на крюк",  type:2, price:800, measure:'шт.'}
    ]
  },
  { // 16 ===================================================================== 16
    materials:[
      {material: "Установка вытяжки"},
      {material: "Вентилятор", type:1}
    ],
    parameters:[
      {parameter: "тип вентилятора"},
      {parameter: "канальный накладной",     type:1, price:550, measure:'шт.'},
      {parameter: "накладной(ванная,кухня)", type:1, price:850, measure:'шт.'}
    ]
  },
  { // 17 ===================================================================== 17
    materials:[
      {material: "Монтаж теплого пола"},
      {material: "электрический", type:1}
    ],
    parameters:[
      {parameter: "тёплый пол"},
      {parameter: "площадь", type:1, price:700, measure:'м².'}
    ]
  },
  { // 18 ===================================================================== 18
    materials:[
      {material: "Демонтажные работы"},
      {material: "демонтаж электрики", type:1}
    ],
    parameters:[
      {parameter: "демонтаж"},
      {parameter: "вентилятора",        type:1, price:100, measure:'шт.'},
      {parameter: "светильника, бра",   type:1, price:100, measure:'шт.'},
      {parameter: "выключателя",        type:1, price:80,  measure:'шт.'},
      {parameter: "розетки накладной",  type:1, price:80,  measure:'шт.'},
      {parameter: "розетки встроенной", type:1, price:80,  measure:'шт.'},
      {parameter: "звонка",             type:1, price:80,  measure:'шт.'},
      {parameter: "Патрона (отдельно висящего)", type:1, price:50, measure:'шт.'},
      {parameter: "Электропроводки",       type:1, price:20, measure:'м.'},
      {parameter: "Кабель-канала (короба)",type:1, price:20, measure:'м.'}
    ]
  }
]