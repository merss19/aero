

export const tabs = {

    init: function() {

        let
            tabs = document.querySelector('.js-tabs'),
            nav = tabs.querySelector('.js-tabs-nav')

        if(nav){
            nav.addEventListener('click', this.tabsHandler)
        }



    },

    tabsHandler: function(e) {


        let target = e.target
        if(target.classList.contains('js-tabs-nav')) return

        let actives = document.querySelectorAll('.active-tabs')
        target.className += ' active-tabs'

        for (var i=0; i < actives.length; i++){
            actives[i].className = actives[i].className.replace('active-tabs', '')
        }

        document.getElementById(target.href.split('#')[1]).className += ' active-tabs'
    }

}

