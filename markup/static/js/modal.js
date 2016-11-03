

export const modal = {

    init: function() {

        let
            btn = document.querySelector('.js-modal-btn')
            if(btn){
                btn.addEventListener('click', this.modalHandler.bind(this))
            }

    },

    modalHandler: function(e) {
        e.preventDefault();

        let modal = document.querySelector('.modal'),
            overlay = document.querySelector('.overlay')

        $(overlay).fadeIn(400)
        $(modal).fadeIn(700)

        overlay.addEventListener('click', this.modalHide)


    },

    modalHide: function() {

        let modal = document.querySelector('.modal'),
            overlay = document.querySelector('.overlay')

        $(overlay).fadeOut(400)
        $(modal).fadeOut(700)
    }

}

