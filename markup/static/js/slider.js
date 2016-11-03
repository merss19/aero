

export const slider = {

    init: function() {



        let slider =$(".slider-index__list")

        if(slider){
            slider.lightSlider({
                item: 1,
                controls: false,
                slideMove: 1,
                loop:true,
                autoWidth: false
            })

            $('.slider-index__nav_type_prev').click(function(){
                slider.goToPrevSlide()
            })
            $('.slider-index__nav_type_next').click(function(){
                slider.goToNextSlide()
            })
        }


    }

}

