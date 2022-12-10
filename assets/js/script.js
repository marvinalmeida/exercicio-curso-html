

const accordionList = document.querySelectorAll('.js-acordion h2')

accordionList[0].classList.add('ativo')
accordionList[0].nextElementSibling.classList.add('ativo')

function activeAccordion () {
    this.classList.toggle('ativo')
    this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item)=>{
    item.addEventListener('click', activeAccordion);
})