export const searchedWord = (count: number) => {
  let quant = 'vez';

  if(count > 1) quant = 'vezes';

  return `
  <div>
    <span>Sua palavra ocorre <span class="numbers">${count}</span> ${quant} </span>
  </div>
  `
}