 const DATA = [
  { //1
    titleOne:  "Силовой кабель",
    titleTwo:  "Размер",
    titleThree:"Метры",
    titleFour: "Стоимость",
    materials: [
      {material: "3-х жильный", type: 1},
      {material: "5-х жильный", type: 2}
    ],
    parameters: [
      {parameter: "сечение 2,5мм²",type:1 ,price:50 },
      {parameter: "сечение 4мм²",  type:2 ,price:50 },
      {parameter: "сечение 6мм²",  type:1 ,price:50 },
      {parameter: "сечение 10мм²", type:12,price:50 },
      {parameter: "сечение 16мм²", type:2 ,price:50 },
      {parameter: "сечение 35мм²", type:2 ,price:50 },
      {parameter: "сечение 50мм²", type:2 ,price:50 },
      {parameter: "сечение 95мм²", type:2 ,price:50 }
    ]
  },
  { //2
    titleOne:  "Слаботочный кабель",
    titleTwo:  "Стандартный",
    titleThree:"Метры",
    titleFour: "Стоимость",
    materials: [
      {material: "UTP (интернет)",type:1},
      {material: "ТВ (Антенна)",  type:1},
      {material: "Телефонный",    type:1}
    ],
    parameters: [
      {parameter: "нет данных" ,type:1, price:50}
    ]
  },
  { //3
    titleOne:  "Монтаж трубы, кабель-канала",
    titleTwo:  "Размер",
    titleThree:"Метры",
    titleFour: "Стоимость",
    materials: [
      {material: "Труба гофрированая", type:1},
      {material: "Труба ПВХ, ПНД",     type:2},
      {material: "Металлорукав",       type:3},
      {material: "Кабель канал",       type:4},
      {material: "Труба металлическая",type:5}
    ],
    parameters: [
      {parameter: "до Ø20 мм", type:1, price:50},
      {parameter: "до Ø20 мм", type:2, price:50},
      {parameter: "до Ø32 мм", type:1, price:50},
      {parameter: "до Ø32 мм", type:2, price:50},
      {parameter: "до Ø32 мм", type:3, price:50},
      {parameter: "до Ø32 мм", type:5, price:50},
      {parameter: "до Ø50 мм", type:1, price:50},
      {parameter: "до Ø50 мм", type:2, price:50},
      {parameter: "до Ø50 мм", type:1, price:50},
      {parameter: "до 25Х16" , type:4, price:50},
      {parameter: "до 60Х40" , type:4, price:50},
      {parameter: "до 110Х60", type:5, price:50}
    ]
  },
  { //4
    titleOne:  "Монтаж лотка",
    titleTwo:  "Размер",
    titleThree:"Метры",
    titleFour: "Стоимость",
    materials: [
      {material: "Лоток металлический", type:1},
      {material: "Кронштейн",           type:0},
      {material: "Подвес",              type:0},
      {material: "Крышка",              type:0},
      {material: "Перегородка",         type:0},
      {material: "Угол/тройник",        type:0},
      {material: "Подъем/опуск",        type:0}
    ],
    parameters: [
      {parameter: "ширина до 200мм", type:1, price:50},
      {parameter: "ширина до 400мм", type:1, price:50},
      {parameter: "ширина до 600мм", type:1, price:50}
    ]
  },
  { //5
    titleOne:  "Штробление",
    titleTwo:  "Размер",
    titleThree:"Метры",
    titleFour: "Стоимость",
    materials: [
      {material: "Штробление в бетоне",   type:1},
      {material: "Штробление в пеноблоке",type:2},
      {material: "Штробление в кирпиче",  type:3},
      {material: "Штукатурка штроб",      type:4}
    ],
    parameters: [
      {parameter: "20Х20", type:1, price:50},
      {parameter: "40Х40", type:1, price:50},
      {parameter: "60Х40", type:1, price:50},
      {parameter: "100Х40",type:1, price:50},
      {parameter: "20Х40", type:2, price:50},
      {parameter: "40Х40", type:2, price:50},
      {parameter: "60Х40", type:2, price:50},
      {parameter: "100Х40",type:2, price:50},
      {parameter: "20Х40", type:3, price:50},
      {parameter: "40Х40", type:3, price:50},
      {parameter: "60Х40", type:3, price:50},
      {parameter: "100Х40",type:3, price:50},
      {parameter: "до 100Х40",type:4,price:50}
    ]
  },
  { //6
    titleOne:  "Сквозное сверление",
    titleTwo:  "Размер",
    titleThree:"Сантиметры",
    titleFour: "Стоимость",
    materials: [
      {material: "Сверление в металле",  type:1},
      {material: "Сверление в пеноблоке",type:2},
      {material: "Сверление в кирпиче",  type:3},
      {material: "Сверление в бетоне",   type:4}
    ],
    parameters: [
      {parameter: "до Ø32 мм с вальцовской",         type:1, price:50},
      {parameter: "Вырезание отверстий угл.шлиф м.", type:1, price:50},
      {parameter: "до Ø32 мм", type:2, price:50},
      {parameter: "до Ø75 мм", type:2, price:50},
      {parameter: "до Ø32 мм", type:3, price:50},
      {parameter: "до Ø75 мм", type:3, price:50},
      {parameter: "до Ø32 мм", type:4, price:50},
      {parameter: "до Ø75 мм", type:1, price:50}
    ]
  },
  { //7
    titleOne:  "Высверливание лунок",
    titleTwo:  "Размер",
    titleThree:"штуки",
    titleFour: "Стоимость",
    materials: [
      {material: "В гипсокартоне",type:1},
      {material: "В кирпиче",     type:2},
      {material: "В бетоне",      type:3},
    ],
    parameters: [
      {parameter: "до Ø75X50 мм", type:1, price:50},
      {parameter: "до Ø75X80 мм", type:1, price:50},
      {parameter: "до Ø75X50 мм", type:2, price:50},
      {parameter: "до Ø75X80 мм", type:2, price:50},
      {parameter: "до Ø75X50 мм", type:3, price:50},
      {parameter: "до Ø75X80 мм", type:3, price:50}
    ]
  },
  { //8
    titleOne:  "Установка подрозетников",
    titleTwo:  "Количество",
    titleThree:"Штуки",
    titleFour: "Стоимость",
    materials: [
      {material: "В гипсокартоне",type:1},
      {material: "В бетоне",      type:1},
      {material: "В кирпиче",     type:1},
      {material: "В гипсолите",   type:1},
      {material: "В пеноблоке",   type:1}
    ],
    parameters: [
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50}
    ]
  },
  { //9
    titleOne:  "Установка распаечных коробок",
    titleTwo:  "Размер",
    titleThree:"Штуки",
    titleFour: "Стоимость",
    materials: [
      {material: "80 Х80 Х60 мм",  type:1},
      {material: "100 Х100 Х60 мм",type:1},
      {material: "Ø80 мм",         type:2}
    ],
    parameters: [
      {parameter: "нет данных", type:1, price:50}
    ]
  },
  { //10
    titleOne:  "Установка автоматов",
    titleTwo:  "",
    titleThree:"",
    titleFour: "Стоимость",
    materials: [
      {material: "Автомат", type:1},
      {material: "УЗО",     type:2}
    ],
    parameters: [
      {parameter: "Однополюсной", type:1,   price:50},
      {parameter: "Двухполюсной", type:1,   price:50},
      {parameter: "Трехполюсной", type:1,   price:50},
      {parameter: "Двухполюсное", type:1,   price:50},
      {parameter: "Четырехполюсное", type:1,price:50}
    ]
  },
  { //11
    titleOne:  "Установка бокса (щитка)",
    titleTwo:  "Размер",
    titleThree:"Штуки",
    titleFour: "Стоимость",
    materials: [
      {material: "Накладной",             type:1},
      {material: "Внутренний гипсокартон",type:2},
      {material: "Внутренний кирпич",     type:3},
      {material: "Внутренний бетон",      type:4}
    ],
    parameters: [
      {parameter: "до 24 модулей", type:1, price:50},
      {parameter: "до 36 модулей", type:1, price:50},
      {parameter: "до 54 модулей", type:1, price:50},
      {parameter: "до 6 модулей",  type:2, price:50},
      {parameter: "до 12 модулей", type:2, price:50},
      {parameter: "до 24 модулей", type:2, price:50},
      {parameter: "до 36 модулей", type:2, price:50},
      {parameter: "до 54 модулей", type:2, price:50},
      {parameter: "до 96 модулей", type:2, price:50},
      {parameter: "до 6 модулей",  type:3, price:50},
      {parameter: "до 12 модулей", type:3, price:50},
      {parameter: "до 24 модулей", type:3, price:50},
      {parameter: "до 36 модулей", type:3, price:50},
      {parameter: "до 54 модулей", type:3, price:50},
      {parameter: "до 96модулей",  type:3, price:50},
      {parameter: "до 6 модулей",  type:4, price:50},
      {parameter: "до 12 модулей", type:4, price:50},
      {parameter: "до 24 модулей", type:4, price:50},
      {parameter: "до 36 модулей", type:4, price:50},
      {parameter: "до 54 модулей", type:4, price:50},
      {parameter: "до 96 модулей", type:4, price:50}
    ]
  },
  { //12
    titleOne:  "Установка электросчетчика",
    titleTwo:  "",
    titleThree:"шт.",
    titleFour: "Стоимость",
    materials: [
      {material: "Установка счетчика", type:1}
    ],
    parameters: [
      {parameter: "Однофазного", type:1, price:50},
      {parameter: "Трехфазного", type:1, price:50}
    ]
  },
  { //13
    titleOne:  "Установка розеток",
    titleTwo:  "",
    titleThree:"",
    titleFour: "Стоимость",
    materials: [
      {material: "Внутренняя",type:1},
      {material: "Наружная",  type:2}
    ],
    parameters: [
      {parameter: "Бытовая розетка",        type:1, price:50},
      {parameter: "Компьютерная (интернет)",type:1, price:50},
      {parameter: "ТВ",                     type:1, price:50},
      {parameter: "Телефонная",             type:1, price:50},
      {parameter: "Для электроплиты",       type:1, price:50},
      {parameter: "Бытовая розетка",        type:2, price:50},
      {parameter: "Компьютерная (интернет)",type:2, price:50},
      {parameter: "ТВ",                     type:2, price:50},
      {parameter: "Телефонная",             type:2, price:50},
      {parameter: "Для электроплиты",       type:2, price:50}
    ]
  },
  { //14
    titleOne:  "Установка выключателей",
    titleTwo:  "",
    titleThree:"",
    titleFour: "",
    materials: [
      {material: "Внутренний",type:1},
      {material: "Наружный",  type:2},
      {material: "Диммер",    type:0},
      {material: "Реостат для тёплого пола (терморегулятор)", type:0}
    ],
    parameters: [
      {parameter: "1 клавишный",          type:1, price:50},
      {parameter: "1 клавишный проходной",type:1, price:50},
      {parameter: "2 клавишный",          type:1, price:50},
      {parameter: "2 клавишный проходной",type:1, price:50},
      {parameter: "1 клавишный",          type:2, price:50},
      {parameter: "1 клавишный проходной",type:2, price:50},
      {parameter: "2 клавишный",          type:2, price:50},
      {parameter: "2 клавишный проходной",type:2, price:50}
    ]
  },
  { //15
    titleOne:  "Установка светильников",
    titleTwo:  "",
    titleThree:"",
    titleFour: "Стоимость",
    materials: [
      {material: "Светодиодная лента", type:1},
      {material: "Светильник", type:2},
      {material: "Люстра",     type:3}
    ],
    parameters: [
      {parameter: "Настенный Бра",       type:2, price:50},
      {parameter: "Армстронг",           type:2, price:50},
      {parameter: "Потолочный накладной",type:2, price:50},
      {parameter: "Точечный",            type:2, price:50},
      {parameter: "С креплением к потолку (сложная, с пультом ДУ)",type:3, price:50},
      {parameter: "С креплением на крюк",type:3, price:50}
    ]
  },
  { //16
    titleOne:  "Установка вытяжки, вентилятора",
    titleTwo:  "",
    titleThree:"",
    titleFour: "Стоимость",
    materials: [
      {material: "Вентилятор", type:1}
    ],
    parameters: [
      {parameter: "Канальный накладной", type:1, price:50},
      {parameter: "Накладной(Вытяжка в ванной, кухне)", type:1, price:50}
    ]
  },
  { //17
    titleOne:  "Монтаж теплого пола",
    titleTwo:  "",
    titleThree:"",
    titleFour: "Стоимость",
    materials: [
      {material: "Монтаж теплого пола", type:1}
    ],
    parameters: [
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50},
      {parameter: "", type:1, price:50}
    ]
  },
  { //18
    titleOne:  "Демонтажные работы",
    titleTwo:  "",
    titleThree:"",
    titleFour: "",
    materials: [
      {material: "Вентилятора",       type:1},
      {material: "Светильников, бра", type:1},
      {material: "Выключателя",       type:1},
      {material: "Розетки накладной", type:1},
      {material: "Розетки встроенной",type:1},
      {material: "Звонка",            type:1},
      {material: "Патрона (отдельно висящего)",type:1},
      {material: "Электропроводки",       type:1},
      {material: "Кабель-канала (короба)",type:1}
    ],
    parameters: [
      {parameter: "", type:1, price:50}
    ]
  }
]
