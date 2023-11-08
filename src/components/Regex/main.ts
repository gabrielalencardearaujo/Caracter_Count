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

  const mountResult = () => {
    const regexValue = inputRegex.value.split('/');
    const mountRegex = new RegExp(regexValue[1], regexValue[2]);

    // const replaceValues = textarea.value.replace(mountRegex, )
  }

  function spanRegex(children: string) {
    return `<span>${children}</span>`
  }

  btnResult.addEventListener('click', () => {
    const checkedInputs = handleClick();
    if(checkedInputs) mountResult();
  })
}