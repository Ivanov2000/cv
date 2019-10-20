window.onload = function(){
  let data = DATA;
  let calculator = document.querySelector('#calculator');
  let table = createTableCalculator(data)

  calculator.appendChild(table);
}

function createTableCalculator(data){
  let fragment = document.createDocumentFragment();
  data.forEach(function(item, index){
    let {materials, parameters} = item;
    fragment.appendChild( createComponentMaterial(materials,   'id-material', index) );
    fragment.appendChild( createComponentParameter(parameters, 'id-parameter',index) );
    fragment.appendChild( createComponentMeasure("Количество", 'id-measure',  index) );
    fragment.appendChild( createComponentPrice("0.00 руб.",    'id-price',    index) );
  })
  return fragment;
}
//event
function optionSelectionMatetial(e){
  let event = e.target;
  let id = event.getAttribute('id-material');
  let type = event.options[event.selectedIndex].getAttribute('type');
  let select = document.querySelector(`select[id-parameter="${id}"]`);
  select.selectedIndex = 0;
  let options = select.querySelectorAll('option');
  options.forEach(function(option){

    if(type === option.getAttribute('type')){
      option.style.display = "block";
      select.style.background = '#D3D9D9';
    }else{
      option.style.display = "none";
    }
  })
}
//event
function optionSelectionParameter(e){
  let event = e.target;
  let id = event.getAttribute('id-parameter');
  let option = event.options[e.target.selectedIndex];
  let input = document.querySelector(`input[id-measure="${id}"]`);
  input.style.background = '#D3D9D9';
  input.style.color = '#647373';
  input.value = '';
}
//event
function changeMeasure(e){
  let event = e.target;

  let id = event.getAttribute('id-measure');
  let input = document.querySelector(`input[id-price="${id}"]`);
  input.style.background = '#D3D9D9';
  input.style.color = '#647373';
  let idd = document.querySelector(`select[id-parameter="${id}"]`);
  let price = idd.options[idd.selectedIndex].getAttribute('price');

  input.value = `${calcAmount(event.value, price)} руб.`;
}

function calcAmount(measure=0, price=0){
  return measure * price;
}
//create
function createComponentMaterial(data, idMaterial, index){
  let select = tagSelect(false, '', idMaterial, index);
  data.forEach(function(item){
    let {material, type, measure, price} = item;
    select.appendChild( tagOption(material, type, measure, price) );
  })
  select.addEventListener('change', (e)=> optionSelectionMatetial(e) );
  return wrapDiv(select);
}
//create
function createComponentParameter(data, idParameter, index){
  let select = tagSelect(false, '#3d4145', idParameter, index);
  //create OPTION tags and add to SELECT
  data.forEach(function(item){
    let {parameter, type, measure, price} = item;
    select.appendChild( tagOption(parameter, type, measure, price, 'none') );
  })

  select.addEventListener('change', (e)=> optionSelectionParameter(e) );
  return wrapDiv(select);
}
//create
function createComponentMeasure(text, idMeasure, index){
  let input = tagInput(text, false, '#3d4145', idMeasure, index)
  input.addEventListener('input', (e)=> changeMeasure(e) );

  return wrapDiv(input);
}
//create
function createComponentPrice(text, idPrice ,index){

  return wrapDiv( tagInput(text, true, '#3d4145', idPrice, index) );
}
//create wrapper tag DIV ==============
function wrapDiv(node){
  let div = document.createElement('div');
  div.classList.add('three', 'columns');
  div.appendChild(node)
  return div;
}
//create tag SELECT ==============
function tagSelect(status=false, color='', id='', index=''){
  let select = document.createElement('select');
  select.setAttribute(id, index);
  select.style.backgroundColor = color;
  select.disabled = status;
  return select;
}
//create tag OPTION ==============
function tagOption(text='',type='none',measure='',price='',display='block'){
  let option = document.createElement('option');
  option.setAttribute("measure", measure);
  option.setAttribute("price", price);
  option.setAttribute("type", type);
  option.style.display = display;
  option.textContent = text;
  return option;
}
//create tag INPUT ==============
function tagInput(text='', status=false, color='', id='', index=''){
  let input = document.createElement('input');
  input.type = "text";
  input.disabled = status;
  input.setAttribute(id, index);
  input.setAttribute("value", text);
  input.style.backgroundColor = color;
  return input;
}
