export const calc = () => {
  const calcOut = document.querySelector('.calc__out');
  const checkboxes = [...document.querySelectorAll('.calc__checkbox')];
  if(!calcOut || !checkboxes) return null
    const getPrice = () => parseInt(calcOut.textContent.trim())
    checkboxes.forEach(checkbox => {
      checkbox.onchange = function(e){
        let target = e.target;
        if(target.checked) calcOut.textContent = getPrice() + +target.dataset.price
        else calcOut.textContent = getPrice() - +target.dataset.price
      }
    })
}
