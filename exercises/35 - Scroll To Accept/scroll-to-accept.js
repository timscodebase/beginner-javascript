const terms = document.querySelector('.terms-and-conditions')
const watch = document.querySelector('.watch')
const accept = document.querySelector('.accept')

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    accept.disabled = false
    ob.unobserve(terms.lastElementChild)
  }
}

const ob = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1,
})

ob.observe(terms.lastElementChild)
