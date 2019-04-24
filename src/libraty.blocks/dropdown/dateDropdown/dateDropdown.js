// $('.datepicker-here').datepicker({
//     minDate: new Date(),
//     range: true,
//     clearButton: true,
//     closeButton: true, 
//     inline:false,
//     Buttons: {
//         button: '<h3>Выберете дату заезда</h3>'
//     }
// })
// $('.datepicker-here').on('click',function(){
//    $('.datepicker-here')
// });
  var datepicker = $('.datepicker-here').datepicker({
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
            $('.arrive').val(arriveDate.substring(0,10));
            $('.leave').val(arriveDate.substring(11,arriveDate.length));
        }
        }).data('datepicker');

$('.datepicker--buttons').append('<span class="datepicker--button accept"> Применить </span>');
$('.accept').on('click',function(){
   
    // $('.arrive').text(arriveDate.substring(1, arriveDate.length));
    datepicker.hide();
})
$('.dateDropdown').on('click',function(){
    datepicker.show();
})
$('.leave .datepicker-here').on('focus click',function(event){
    $(this).off();    
})
