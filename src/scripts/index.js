import list from './modules/list'

// console.log(`Hello ${list[0]}`)


var prevScrollpos = window.pageYOffset


window.addEventListener('load', (event) => {
    setTimeout(function() {
        window.addEventListener('scroll', function() {

            var currentScrollPos = window.pageYOffset;
        
            if (currentScrollPos > 10) {
                document.body.classList.add('header--has-border')
        
                if (prevScrollpos > currentScrollPos) {
                    document.body.classList.remove('header--hidden')
                } else {
                    document.body.classList.add('header--hidden')
                }
        
            } else {
                document.body.classList.remove('header--has-border')
                document.body.classList.remove('header--hidden')
            }
        
            prevScrollpos = currentScrollPos;
        
        })
    }, 1000)
});


