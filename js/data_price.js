 const DATA = [
  { //1
    materials:[
      {material: "Cиловой кабель"},
      {material: "3-х жильный",  type: 1, measure:'метр.01'},
      {material: "5-х жильный",  type: 2, measure:'метр.02'}
    ],
    parameters:[
      {parameter: "укажите параметры"},
      {parameter: "сечение 2,5мм²",type:1 ,price:50},
      {parameter: "сечение 4мм²",  type:2 ,price:50},
      {parameter: "сечение 6мм²",  type:1 ,price:50},
      {parameter: "сечение 10мм²", type:1 ,price:50},
      {parameter: "сечение 10мм²", type:2 ,price:50},
      {parameter: "сечение 16мм²", type:2 ,price:50},
      {parameter: "сечение 35мм²", type:2 ,price:50},
      {parameter: "сечение 50мм²", type:2 ,price:50},
      {parameter: "сечение 95мм²", type:2 ,price:50}
    ]
  },
  { //2
    materials:[
      {material: "Слаботочный кабель"},
      {material: "UTP, TB, Телефон",     type:1, measure:'метр.'}
    ],
    parameters:[
      {parameter: "укажите параметры",type:1 ,price:'20'},
      {parameter: "UTP (интернет)",   type:1 ,price:'20'},
      {parameter: "TB (антена)",      type:1 ,price:'20'},
      {parameter: "Телефонный",       type:1 ,price:'20'}
    ]
  },
  { //3
    materials:[
      {material: "Труба, кабель-канал"},
      {material: "Труба гофрированная", type:1, measure:'метр.'},
      {material: "Труба ПВХ, ПНД",      type:2, measure:'метр.'},
      {material: "Металлорукав",        type:3, measure:'метр.'},
      {material: "Кабель канал",        type:4, measure:'метр.'},
      {material: "Труба металлическая", type:5, measure:'метр.'}
    ],
    parameters:[
      {parameter: "укажите параметры"},
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
  }
]




  // ], //3
  // [
  //   {title_material: "Монтаж лотка"},
  //   {material: "Лоток металлический", type:1, measure:'метр.'},
  //   {material: "Кронштейн",           type:0, measure:'шт.'  },
  //   {material: "Подвес",              type:0, measure:'шт.'  },
  //   {material: "Крышка",              type:0, measure:'шт.'  },
  //   {material: "Перегородка",         type:0, measure:'шт.'  },
  //   {material: "Угол/тройник",        type:0, measure:'шт.'  },
  //   {material: "Подъем/опуск",        type:0, measure:'шт.'  },
  //   {title_parameter: "Размеры"},
  //   {parameter: "ширина до 200мм", type:1, price:50},
  //   {parameter: "ширина до 400мм", type:1, price:50},
  //   {parameter: "ширина до 600мм", type:1, price:50}
  // ], //4
  // [
  //   {title_parameter: "Размер"},
  //   {parameter: "20Х20", type:1, price:50},
  //   {parameter: "40Х40", type:1, price:50},
  //   {parameter: "60Х40", type:1, price:50},
  //   {parameter: "100Х40",type:1, price:50},
  //   {parameter: "20Х40", type:2, price:50},
  //   {parameter: "40Х40", type:2, price:50},
  //   {parameter: "60Х40", type:2, price:50},
  //   {parameter: "100Х40",type:2, price:50},
  //   {parameter: "20Х40", type:3, price:50},
  //   {parameter: "40Х40", type:3, price:50},
  //   {parameter: "60Х40", type:3, price:50},
  //   {parameter: "100Х40",type:3, price:50},
  //   {parameter: "до 100Х40",type:4,price:50}
  // ], //5
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
