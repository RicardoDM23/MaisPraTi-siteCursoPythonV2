document.addEventListener('DOMContentLoaded', (event) => {
  const toggleState = localStorage.getItem('toggleState') === 'true'
  document.getElementById('darkModeToggle').checked = toggleState
  if (toggleState) {
    applyDarkMode()
  }
});

function requestPage(url) {
  document.getElementById('content').innerHTML = ''
  let ajax = new XMLHttpRequest()
  ajax.open('GET', url)
  ajax.onreadystatechange = () => {
    if (ajax.readyState == 4 && ajax.status == 200) {
      document.getElementById('content').innerHTML = ajax.responseText
      const toggleState = localStorage.getItem('toggleState') === 'true'
      if (toggleState) {
        applyDarkModeToContent()
      }
    }
    if (ajax.readyState == 4 && ajax.status == 404) {
      document.getElementById('content').innerHTML = 'Requisição finalizada, porém o recurso não foi encontrado. Erro 404.'
    }
  }
  ajax.send()
}

function toggleDarkMode() {
  const toggle = document.getElementById('darkModeToggle').checked
  localStorage.setItem('toggleState', toggle)
  if (toggle) {
    applyDarkMode()
  } else {
    removeDarkMode()
  }
}

function applyDarkMode() {
  document.querySelectorAll('.bg-white, .bg-light, .text-black, .bg-secondary, .bg-dark, .text-white').forEach(element => {
    if (element.id !== 'header' && element.id !== 'footer') {
      if (element.classList.contains('bg-white')) {
        element.classList.replace('bg-white', 'bg-secondary')
      } else if (element.classList.contains('bg-light')) {
        element.classList.replace('bg-light', 'bg-dark')
      } else if (element.classList.contains('text-black')) {
        element.classList.replace('text-black', 'text-white')
      } else if (element.classList.contains('bg-secondary')) {
        element.classList.replace('bg-secondary', 'bg-white')
      } else if (element.classList.contains('bg-dark')) {
        element.classList.replace('bg-dark', 'bg-light')
      } else if (element.classList.contains('text-white')) {
        element.classList.replace('text-white', 'text-black')
      }
    }
  })
}

function applyDarkModeToContent() {
  // document.querySelectorAll('#content .bg-white, #content .bg-light, #content .text-black, #content .bg-secondary, #content .bg-dark, #content .text-white').forEach(element => {
  document.querySelectorAll('.bg-white, .bg-light, .text-black, .bg-secondary, .bg-dark, .text-white').forEach(element => {
    if (element.classList.contains('bg-white')) {
      element.classList.replace('bg-white', 'bg-secondary')
    } else if (element.classList.contains('bg-light')) {
      element.classList.replace('bg-light', 'bg-dark')
    } else if (element.classList.contains('text-black')) {
      element.classList.replace('text-black', 'text-white')
    } else if (element.classList.contains('bg-secondary')) {
      element.classList.replace('bg-secondary', 'bg-white')
    } else if (element.classList.contains('bg-dark')) {
      element.classList.replace('bg-dark', 'bg-light')
    } else if (element.classList.contains('text-white')) {
      element.classList.replace('text-white', 'text-black')
    }
  })
}

function removeDarkMode() {
  document.querySelectorAll('.bg-secondary, .bg-dark, .text-white, .bg-white, .bg-light, .text-black').forEach(element => {
    if (element.classList.contains('bg-secondary')) {
      element.classList.replace('bg-secondary', 'bg-white')
    } else if (element.classList.contains('bg-dark')) {
      element.classList.replace('bg-dark', 'bg-light')
    } else if (element.classList.contains('text-white')) {
      element.classList.replace('text-white', 'text-black')
    } else if (element.classList.contains('bg-white')) {
      element.classList.replace('bg-white', 'bg-secondary')
    } else if (element.classList.contains('bg-light')) {
      element.classList.replace('bg-light', 'bg-dark')
    } else if (element.classList.contains('text-black')) {
      element.classList.replace('text-black', 'text-white')
    }
  })
}
