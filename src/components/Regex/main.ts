export const start = () => {
  const textarea = document.querySelector('#texto') as HTMLTextAreaElement;
  const inputRegex = document.querySelector('#inputRegex') as HTMLInputElement;
  const counter = document.querySelector('.counter span') as HTMLSpanElement;
  const resultado = document.querySelector('.resultado') as HTMLDivElement;
  const btnResult = document.querySelector('.btn') as HTMLButtonElement;
  const alerta = document.querySelector('.alertas') as HTMLDivElement;
  
  const handleClick = () => {
    if(!textarea.value) {
      alerta.textContent = 'Digite algum texto';
      alerta.style.display = 'block'
      return false;
    } 

    alerta.style.display = 'none';
    return true;
  }

  const showOnDocument = (children: string) => {
    resultado.innerHTML = children
  };

  const spanRegex = (children: string) => {
    return `<span class="stringSelect">${children}</span>`
  }
  
  const mountResult = () => {
    const regexValue = inputRegex.value.split('/');
    const mountRegex = new RegExp(regexValue[1], regexValue[2]);
    const arrayMatchRegex = textarea.value.match(mountRegex)

    if(arrayMatchRegex && inputRegex.value) 
      counter.textContent = `${arrayMatchRegex.length}`;
    else 
      counter.textContent = `0`;

    counter.parentElement.style.display = 'block';

    const replaceValues = textarea.value.replace(mountRegex, spanRegex('$&'))
    
    showOnDocument(replaceValues)
  }

  btnResult.addEventListener('click', () => {
    const checkedInputs = handleClick();
    if(checkedInputs) mountResult();
  })
}