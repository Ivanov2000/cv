window.onload = function(){

  let calculator = document.querySelector('#calculator')
  const data = DATA; //loading object from data.js
  calculator.appendChild(addContainers(data));

  function addContainers(data = []){
    let fragment = document.createDocumentFragment();

    data.forEach(function(item){
      fragment.appendChild(insertMaterialsToOption(item.materials));
      fragment.appendChild(insertParametersToOption(item.parameters));
      fragment.appendChild(insertInput());
      fragment.appendChild(insertInput());
    });
    return fragment;
  }

  function insertMaterialsToOption(materials){
    let component = document.createElement('div');
    component.classList.add('three','columns');

    let select = document.createElement('select');
    materials.forEach(function(item){
      let option = document.createElement('option');
      option.setAttribute("type", `${item.type}`);
      option.setAttribute("value",`${item.material}`);
      option.textContent = `${item.material}`;
      select.appendChild(option);
    })
    component.appendChild(select)
    return component
  }

  function insertParametersToOption(parameters){
    let component = document.createElement('div');
    component.classList.add('three','columns');

    let select = document.createElement('select');
    parameters.forEach(function(item){
      let option = document.createElement('option');
      option.setAttribute("type", `${item.type}`);
      option.setAttribute("price",`${item.price}`);
      option.setAttribute("value",`${item.parameter}`);
      option.textContent = `${item.parameter}`;
      select.appendChild(option);
    });
    component.appendChild(select);

    return component
  }

  function insertInput(value = '--'){
    let component = document.createElement('div');
    component.classList.add('three','columns');

    let input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", value);
    input.setAttribute("value", value);
    component.appendChild(input);

    return component
  }

}
