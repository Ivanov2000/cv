window.onload = function(){
  let calculator = document.querySelector('#calculator');
  calculator.appendChild( createTableCalculator(DATA_PRICE) )
}

function createTableCalculator(data){
  let fragment = document.createDocumentFragment();
  data.forEach((item, index)=>(
    fragment.appendChild( tableLine(index, item))
  ))

  return fragment
}

function tableLine(indexLine, data){
  let fragment = document.createDocumentFragment()
  fragment.appendChild( materialBox(indexLine, data.materials) )
  fragment.appendChild( parameterBox(indexLine, data.parameters) )
  fragment.appendChild( measureBox(indexLine) )
  fragment.appendChild( priceBox(indexLine) )

  return fragment
}

function materialBox(indexLine, materials){
  let select = selectTag(`material-${indexLine}`, materials)
  select.setAttribute("id", indexLine)
  return divTag(select);
}

function parameterBox(indexLine, parameters){
  let select = selectTag(`parameter-${indexLine}`, parameters)
  select.setAttribute("id", indexLine)
  return divTag(select)
}

function measureBox(indexLine){
  let input = inputTag(`measure-${indexLine}`)
  input.setAttribute("id", indexLine)
  return divTag(input)
}

function priceBox(indexLine){
  let input = inputTag(`price-${indexLine}`)
  input.setAttribute('total','sum')
  input.setAttribute("id", indexLine)
  return divTag(input)
}
// create wrap DIV ==================================
function divTag(object){
  let div = document.createElement('div')
  div.classList.add('three', 'columns')
  div.appendChild(object)
  return div // <div class="three columns">...</div>
}
// create SELECT ==================================
function selectTag(indexLine, data){
  let select = document.createElement('select')
  select.setAttribute("name", indexLine)
  data.forEach(function(d){
    let key = Object.keys(d)[0]
    select.appendChild( optionTag(d[key], d.type, d.price, d.measure) )
    select.addEventListener('change', (event)=> eventSwitch(key, event) )
    styleSwitch(key, select)
  })
  return select // <select line="material-2" disabled style="background:#3d4145">...</select>
}
function styleSwitch(key, select){
  if(key == 'parameter'){
    select.style.backgroundColor = '#3d4145';
    select.disabled = true;
  }
  return select
}
// create OPTION ==================================
function optionTag(material, type='тип', price='стоимость', measure='количество'){
  let option = document.createElement('option');
  option.setAttribute("type", type);
  option.setAttribute("price", price);
  option.setAttribute("measure", measure);
  option.textContent = material;

  return option // <option type="2" price="125" measure="м.">труба металлическая</option>
}
//create INPUT ==================================
function inputTag(indexLine){
  let input = document.createElement('input')
  input.setAttribute("type", "text")
  input.setAttribute("name", indexLine)
  input.style.backgroundColor = '#3d4145';
  input.disabled = true;
  input.addEventListener('input', (event)=> eventInput(event) )

  return input // <input line="measure-3">
}
// event ==================================
function eventSwitch(key, e){
  if(key == 'material' ){return eventMaterialSelection(e)}
  if(key == 'parameter'){return eventParameterSelection(e)}
}
// event ==================================
function eventMaterialSelection(e){
  let type = e.target.options[e.target.selectedIndex].getAttribute('type')
  let id = e.target.getAttribute('id')

  let parameterSelect = document.querySelector(`select[name="parameter-${id}"]`)
  parameterSelect.removeAttribute('disabled')
  parameterSelect.style.background = '#D3D9D9';
  parameterSelect.selectedIndex = 0;
  let parameterOptions = parameterSelect.querySelectorAll('option');

  parameterOptions.forEach(function(option){
    if(type == option.getAttribute('type')){option.style.display = "block"}
    else{ option.style.display = "none" }
  })
}
// event ==================================
function eventParameterSelection(e){
  let id = e.target.getAttribute('id')
  let option = e.target.options[e.target.selectedIndex]
  let input = document.querySelector(`input[name="measure-${id}"]`)
  input.removeAttribute('disabled')
  input.style.background = '#D3D9D9'
  input.style.color = '#647373'
  input.value = ''
}
// event ==================================
function eventInput(e){
  let id = e.target.getAttribute('id')
  let inputPrice = document.querySelector(`input[name="price-${id}"]`)
  inputPrice.style.background = '#D3D9D9'
  inputPrice.style.color = '#647373'
  let parameterSelect = document.querySelector(`select[name="parameter-${id}"]`)
  let price = parameterSelect.options[parameterSelect.selectedIndex].getAttribute('price')
  let val = +e.target.value.replace(/[^0-9]/gim, '');
  inputPrice.value = amount(val, price)

  let totalId = document.querySelector('#total')
  totalId.innerHTML = `
    Полная стоимость работ, итого:
      <span style="color:#fff;">${total()}</span>
    руб.`;
}

function amount(measure=0, price=0){
  return `${measure * price} руб.`
}

function total(){
  let elem = document.querySelectorAll('input[total="sum"]')
  let amount=0
    elem.forEach(function(el,i){
      let a = Number.parseInt( el.value.replace(/[руб.]/g, "").trim() )
      if(!isNaN(a)){ amount += a}
    })
  return amount
}
