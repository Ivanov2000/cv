 const DATA_STORE = [
  { // ===================================================================== 1
    materials:[
      {material: "Cиловой кабель"},
      {material: "3-х жильный",  type: 1},
      {material: "5-х жильный",  type: 2}
    ],
    parameters:[
      {parameter: "укажите парамы"},
      {parameter: "сечение 2,5мм²",type:1 ,price:50, measure:'м.'},
      {parameter: "сечение 4мм²",  type:2 ,price:50, measure:'м.'},
      {parameter: "сечение 6мм²",  type:1 ,price:50, measure:'м.'},
      {parameter: "сечение 10мм²", type:1 ,price:50, measure:'м.'},
      {parameter: "сечение 10мм²", type:2 ,price:50, measure:'м.'},
      {parameter: "сечение 16мм²", type:2 ,price:50, measure:'м.'},
      {parameter: "сечение 35мм²", type:2 ,price:50, measure:'м.'},
      {parameter: "сечение 50мм²", type:2 ,price:50, measure:'м.'},
      {parameter: "сечение 95мм²", type:2 ,price:50, measure:'м.'}
    ]
  },
  { //2 ===================================================================== 2
    materials:[
      {material: "Слаботочный кабель"},
      {material: "UTP, TB, Телефон",  type:1}
    ],
    parameters:[
      {parameter: "укажите параметры",type:1 ,price:'20', measure:'м.'},
      {parameter: "UTP (интернет)",   type:1 ,price:'20', measure:'м.'},
      {parameter: "TB (антена)",      type:1 ,price:'20', measure:'м.'},
      {parameter: "Телефонный",       type:1 ,price:'20', measure:'м.'}
    ]
  },
  { //3 ===================================================================== 3
    materials:[
      {material: "Труба, кабель-канал"},
      {material: "Труба гофрированная", type:1},
      {material: "Труба ПВХ, ПНД",      type:2},
      {material: "Металлорукав",        type:3},
      {material: "Кабель канал",        type:4},
      {material: "Труба металлическая", type:5}
    ],
    parameters:[
      {parameter: "укажите парамы"},
      {parameter: "до Ø20 мм", type:1, price:50, measure:'м.'},
      {parameter: "до Ø20 мм", type:2, price:50, measure:'м.'},
      {parameter: "до Ø32 мм", type:1, price:50, measure:'м.'},
      {parameter: "до Ø32 мм", type:2, price:50, measure:'м.'},
      {parameter: "до Ø32 мм", type:3, price:50, measure:'м.'},
      {parameter: "до Ø32 мм", type:5, price:50, measure:'м.'},
      {parameter: "до Ø50 мм", type:1, price:50, measure:'м.'},
      {parameter: "до Ø50 мм", type:2, price:50, measure:'м.'},
      {parameter: "до Ø50 мм", type:1, price:50, measure:'м.'},
      {parameter: "до 25Х16" , type:4, price:50, measure:'м.'},
      {parameter: "до 60Х40" , type:4, price:50, measure:'м.'},
      {parameter: "до 110Х60", type:5, price:50, measure:'м.'}
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
      {title_parameter: "Размеры"},
      {parameter: "ширина до 200мм", type:1, price:5, measure:'м. '},
      {parameter: "ширина до 400мм", type:1, price:5, measure:'м. '},
      {parameter: "ширина до 600мм", type:1, price:5, measure:'м. '},
      {parameter: "металлический",   type:2, price:5, measure:'шт.'},
      {parameter: "металлический",   type:3, price:5, measure:'шт.'},
      {parameter: "металлическая",   type:4, price:5, measure:'шт.'},
      {parameter: "металлическая",   type:5, price:5, measure:'шт.'},
      {parameter: "металлический",   type:6, price:5, measure:'шт.'},
      {parameter: "металлическая",   type:7, price:5, measure:'шт.'}
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
      {parameter: "20Х40", type:1, price:58, measure:'м.'},
      {parameter: "40Х40", type:1, price:58, measure:'м.'},
      {parameter: "60Х40", type:1, price:58, measure:'м.'},
      {parameter: "100Х40",type:1, price:58, measure:'м.'},
      {parameter: "20Х40", type:2, price:58, measure:'м.'},
      {parameter: "40Х40", type:2, price:58, measure:'м.'},
      {parameter: "60Х40", type:2, price:58, measure:'м.'},
      {parameter: "100Х40",type:2, price:58, measure:'м.'},
      {parameter: "20Х40", type:3, price:58, measure:'м.'},
      {parameter: "40Х40", type:3, price:58, measure:'м.'},
      {parameter: "60Х40", type:3, price:58, measure:'м.'},
      {parameter: "100Х40",type:3, price:58, measure:'м.'},
      {parameter: "до 100Х40",type:4, price:58, measure:'м.'}
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
      {parameter: "до Ø32 мм", type:1, price:59, measure:'см.'},
      {parameter: "до Ø32 мм", type:2, price:59, measure:'см.'},
      {parameter: "до Ø75 мм", type:2, price:50, measure:'см.'},
      {parameter: "до Ø32 мм", type:3, price:51, measure:'см.'},
      {parameter: "до Ø75 мм", type:3, price:52, measure:'см.'},
      {parameter: "до Ø32 мм", type:4, price:53, measure:'см.'},
      {parameter: "до Ø75 мм", type:4, price:54, measure:'см.'}
    ]
  },
  { // 7 ===================================================================== 7
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 8 ===================================================================== 8
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 9 ===================================================================== 9
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 10 ===================================================================== 10
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 11 ===================================================================== 11
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 12 ===================================================================== 12
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 13 ===================================================================== 13
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 14 ===================================================================== 14
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 15 ===================================================================== 15
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 16 ===================================================================== 16
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 17 ===================================================================== 17
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 18 ===================================================================== 18
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {title_parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  }
]


  // [
  //   {title_parameter: "Размер"},
  //   {parameter: "до Ø32 мм", type:2, price:50},
  //   {parameter: "до Ø75 мм", type:2, price:50},
  //   {parameter: "до Ø32 мм", type:3, price:50},
  //   {parameter: "до Ø75 мм", type:3, price:50},
  //   {parameter: "до Ø32 мм", type:4, price:50},
  //   {parameter: "до Ø75 мм", type:1, price:50}
  // ], //6
  // [
  //   {title_parameter: "Размер"},
  //   {parameter: "до Ø75X50 мм", type:1, price:50},
  //   {parameter: "до Ø75X80 мм", type:1, price:50},
  //   {parameter: "до Ø75X50 мм", type:2, price:50},
  //   {parameter: "до Ø75X80 мм", type:2, price:50},
  //   {parameter: "до Ø75X50 мм", type:3, price:50},
  //   {parameter: "до Ø75X80 мм", type:3, price:50}
  // ], //7
  // [
  //   {title_parameter: "не задано", type:1, price:50}
  // ], //8
  // [
  //   {title_parameter: "нет данных", type:1, price:50}
  // ], //9
  // [
  //   {title_parameter: "Тип автомата"},
  //   {parameter: "Однополюсной", type:1,   price:50},
  //   {parameter: "Двухполюсной", type:1,   price:50},
  //   {parameter: "Трехполюсной", type:1,   price:50},
  //   {parameter: "Двухполюсное", type:1,   price:50},
  //   {parameter: "Четырехполюсное", type:1,price:50}
  // ], //10
  // [
  //   {title_parameter: "Размер"},
  //   {parameter: "до 24 модулей", type:1, price:50},
  //   {parameter: "до 36 модулей", type:1, price:50},
  //   {parameter: "до 54 модулей", type:1, price:50},
  //   {parameter: "до 6 модулей",  type:2, price:50},
  //   {parameter: "до 12 модулей", type:2, price:50},
  //   {parameter: "до 24 модулей", type:2, price:50},
  //   {parameter: "до 36 модулей", type:2, price:50},
  //   {parameter: "до 54 модулей", type:2, price:50},
  //   {parameter: "до 96 модулей", type:2, price:50},
  //   {parameter: "до 6 модулей",  type:3, price:50},
  //   {parameter: "до 12 модулей", type:3, price:50},
  //   {parameter: "до 24 модулей", type:3, price:50},
  //   {parameter: "до 36 модулей", type:3, price:50},
  //   {parameter: "до 54 модулей", type:3, price:50},
  //   {parameter: "до 96модулей",  type:3, price:50},
  //   {parameter: "до 6 модулей",  type:4, price:50},
  //   {parameter: "до 12 модулей", type:4, price:50},
  //   {parameter: "до 24 модулей", type:4, price:50},
  //   {parameter: "до 36 модулей", type:4, price:50},
  //   {parameter: "до 54 модулей", type:4, price:50},
  //   {parameter: "до 96 модулей", type:4, price:50}
  // ], //11
  // [
  //   {title_parameter: "Тип прибора"},
  //   {parameter: "Однофазного", type:1, price:50},
  //   {parameter: "Трехфазного", type:1, price:50}
  // ], //12
  // [
  //   {title_parameter: "Тип розетки"},
  //   {parameter: "Бытовая розетка",        type:1, price:50},
  //   {parameter: "Компьютерная (интернет)",type:1, price:50},
  //   {parameter: "ТВ",                     type:1, price:50},
  //   {parameter: "Телефонная",             type:1, price:50},
  //   {parameter: "Для электроплиты",       type:1, price:50},
  //   {parameter: "Бытовая розетка",        type:2, price:50},
  //   {parameter: "Компьютерная (интернет)",type:2, price:50},
  //   {parameter: "ТВ",                     type:2, price:50},
  //   {parameter: "Телефонная",             type:2, price:50},
  //   {parameter: "Для электроплиты",       type:2, price:50}
  // ], //13
  // [
  //   {title_parameter: "Тип выключателя"},
  //   {parameter: "1 клавишный",          type:1, price:50},
  //   {parameter: "1 клавишный проходной",type:1, price:50},
  //   {parameter: "2 клавишный",          type:1, price:50},
  //   {parameter: "2 клавишный проходной",type:1, price:50},
  //   {parameter: "1 клавишный",          type:2, price:50},
  //   {parameter: "1 клавишный проходной",type:2, price:50},
  //   {parameter: "2 клавишный",          type:2, price:50},
  //   {parameter: "2 клавишный проходной",type:2, price:50}
  // ], //14
  // [
  //   {title_parameter: "Тип светильника"},
  //   {parameter: "Настенный Бра",       type:2, price:50},
  //   {parameter: "Армстронг",           type:2, price:50},
  //   {parameter: "Потолочный накладной",type:2, price:50},
  //   {parameter: "Точечный",            type:2, price:50},
  //   {parameter: "С креплением к потолку (сложная, с пультом ДУ)",type:3, price:50},
  //   {parameter: "С креплением на крюк",type:3, price:50}
  // ], //15
  // [
  //   {title_parameter: "Тип вентилятора"},
  //   {parameter: "Канальный накладной",               type:1, price:50},
  //   {parameter: "Накладной(Вытяжка в ванной, кухне)",type:1, price:50}
  // ], //16
  // [
  //   {title_parameter: "нет данных", type:1, price:50}
  // ], //17
  // [
  //   {title_parameter: "нет данных", type:1, price:50}
  // ] //18
