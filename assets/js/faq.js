function toQuestion() {
    var select = document.getElementById('faq-select')
    var value = select.value
    if (value) {
        var element = document.getElementById(value)
        var navbarHeight = document.querySelector('.navbar').offsetHeight
        var stickyTopHeight = document.querySelector('.sticky-top').offsetHeight
        var offset = element.getBoundingClientRect().top + window.scrollY - navbarHeight - stickyTopHeight
        window.scrollTo({ top: offset, behavior: 'smooth' })
    }
}