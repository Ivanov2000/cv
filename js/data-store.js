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
      {material: "Наружная",  type:1},
      {material: "Внутренняя",type:2}
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
      {material: "Автомат", type:1},
      {material: "УЗО",     type:2}
    ],
    parameters:[
      {parameter: "типы"},
      {parameter: "Однополюсной",   type:1, price:210, measure:'шт.'},
      {parameter: "Двухполюсный",   type:1, price:270, measure:'шт.'},
      {parameter: "Трёхполюсный",   type:1, price:390, measure:'шт.'},
      {parameter: "Двухполюсное",   type:2, price:450, measure:'шт.'},
      {parameter: "Четырёхполюсное",type:2, price:680, measure:'шт.'}
    ]
  },
  { // 11 ===================================================================== 11
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 12 ===================================================================== 12
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 13 ===================================================================== 13
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 14 ===================================================================== 14
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 15 ===================================================================== 15
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 16 ===================================================================== 16
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 17 ===================================================================== 17
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  },
  { // 18 ===================================================================== 18
    materials:[
      {material: ""},
      {material: "", type:1}

    ],
    parameters:[
      {parameter: ""},
      {parameter: "", type:1, price:5, measure:'м. '},

    ]
  }
]
