/*-----------------------------------------------------------------------------------
/*
/* Electric Calculator JS
/*
-----------------------------------------------------------------------------------*/
window.onload = function(){

const price = [
  { // 1
    work: 'Силовой кабель',
    size: 'Размер',
    unit: 'Метры',
    money:'Стоимость',
    materials: ['3-х жильный','5-х жильный'],
    sizes: ['сечение 2,5мм²', 'сечение 4мм²', 'сечение 6мм²','сечение 10мм²', 'сечение 16мм²','сечение 35мм²', 'сечение 50мм²', 'сечение 95мм²'],
    number: '0'
  },
  { //2
    work: 'Слаботочный кабель',
    size: 'Стандартный',
    unit: 'Метры',
    money:'Стоимость',
    materials: ['UTP (интернет)', 'ТВ (Антенна)', 'Телефонный'],
    sizes: ['сечение 2,5мм²', 'сечение 4мм²', 'сечение 6мм²', 'сечение 10мм²', 'сечение 16мм²','сечение 35мм²', 'сечение 50мм²', 'сечение 95мм²'],
    number: '0'
  },
  { //3
    work: 'Труба гофрированная',
    size: 'Размер',
    unit: 'Метры',
    money:'Стоимость',
    materials: ['Труба ПВХ, ПНД', 'Металлорукав', 'Кабель канал', 'Труба металлическая'],
    sizes: ['до Ø20 мм', 'до Ø32 мм', 'до Ø50 мм', 'до Ø50 мм', 'до 25Х16', 'до 60Х40', 'до 110Х60'],
    number: '0'
  }
]

var calc = document.getElementById('calculator')

function view(price){
  let view = [];
  price.forEach(function(item){
    let div = document.createElement("div");
    div.classList.add('row');
    div.innerHTML += addSelectOption(item.work, item.materials);
    div.innerHTML += addSelectOption(item.size, item.sizes);
    div.innerHTML += addInput(item.unit);
    div.innerHTML += addInput(item.money);
    calc.appendChild(div)
  })
  return view;
}//view

function addSelectOption(title, values){
  let options = [];
  values.forEach(function(item){
    options.push(`<option value=${item}>${item}</option>`)
  });
  options.unshift(`<option>${title}</option>`)
  const option = options.join(' ');
  return `
    <div class="three columns">
      <select>${option}</select>
    </div>
  `
}//addSelectOption

function addInput(title){
  return`
    <div class="three columns">
      <input  placeholder=${title} type="text" value="">
    </div>
  `
}//addInput

  view(price)

}//window.onload
