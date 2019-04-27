$(document).ready(function() {
    let totalCount = $('input[name="guests"]');
    let text;
    let guestsCount = 0;
    function printCount(count){
        if(count == 0){
            text = 'Сколько гостей';
            totalCount.val(text);
        }else if (count == 1 || (count > 11 && count % 10==1)){
            text = ' гость';
            totalCount.val(count + text);

        }else if (count > 1 && count < 5){
            text = ' гостя';
            totalCount.val(count + text);

        }else if ((count > 4 ) && (count < 21)){
            text = ' гостей';
            totalCount.val(count + text);

        }else if(count > 21 && (count % 10 < 5 && count % 10 != 0)){
            text = ' гостя';
            totalCount.val(count + text);

        }else if(count > 24 && (count % 10 > 4 || count % 10 == 0)){
            text = ' гостей';
            totalCount.val(count + text);
        }
    }			
    
    $('.counter__dec').on('click',function decrement(){
        let count = $(this).parent().find('.counter__count');
        
        if(parseInt(count.text()) > 0){
            count.text( parseInt(count.text()) - 1);
            guestsCount -= 1;
            printCount(guestsCount);            
        }			
    });

    $('.counter__inc').on('click',function increment(){
        let count = $(this).parent().find('.counter__count');
            count.text( parseInt(count.text()) + 1);
            guestsCount += 1;
            printCount(guestsCount);
    });
    
    $('.inlineButtonClear').on('click',function(){
        $('.counter__count').text('0');
    })
    $('.guestsDropdown').on('click',function(){
        // $('.guestsDropdownContent').show("slide", { direction: "up" }, 1000);
        $('.guestsDropdownContent').fadeIn();
    });
    $('.inlineButtonAccept').on('click',function(){
        // $('.guestsDropdownContent').hide("slide", { direction: "up" }, 1000);
        $('.guestsDropdownContent').fadeOut();
    });
})