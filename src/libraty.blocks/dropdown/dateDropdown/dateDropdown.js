
//    $('.leave .datepicker-here').on('focus click',function(event){
//     $(this).off();    
// })
  var datepicker = $('.leave input').datepicker({
        minDate: new Date(),
        // offset:0,
        range: true,
        clearButton: true,
        closeButton: true,
        inline:false,
        altField:'.leave',
        altFieldDateFormat:'dd.mm.yyyy',
        onSelect:function(date){
            let arriveDate = date;
            $('[name=arrive]').val(arriveDate.substring(0,10));
            $('[name=leave]').val(arriveDate.substring(11,arriveDate.length));            
        }   
        }).data('datepicker');
       
$('.dateDropdown input').on('keypress',function(event){
    event.preventDefault();
});
$('.datepicker--buttons').append('<span class="datepicker--button accept"> Применить </span>');
$('.accept').on('click',function(){
  
    datepicker.hide();
})
$('.leave, .arrive').on('click',function(){
    datepicker.show();
})
$('.dateDropdown:has(#birthiday)').on('click',function(){
    $('#birthiday').focus();
})



