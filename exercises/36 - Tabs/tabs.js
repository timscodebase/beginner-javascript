const tabs = document.querySelector('.tabs')
const tabButtons = document.querySelectorAll('[role="tab"]')
const tabpanels = Array.from(document.querySelectorAll('[role="tabpanel"]'))

function handleTabClick(e) {
  tabpanels.forEach(panel => {
    panel.hidden = true
  })
  tabButtons.forEach(tab => {
    tab.setAttribute('aria-selected', false)
  })

  this.setAttribute('aria-selected', true)

  const { id } = e.currentTarget

  // Method # 1
  // const tabPanel = document.querySelector(`[aria-labelledby="${id}"]`)
  // tabPanel.hidden = false

  // Method # 2
  const tabPanel = tabpanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  )

  tabPanel.hidden = false
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick))
