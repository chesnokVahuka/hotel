
   $('.leave .datepicker-here').on('focus click',function(event){
    $(this).off();    
})
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
       
$('.dateDropdown input').on('keypress',function(event){
    event.preventDefault();
});
$('.datepicker--buttons').append('<span class="datepicker--button accept"> Применить </span>');
$('.accept').on('click',function(){
  
    datepicker.hide();
})
$('.dateDropdown').on('click',function(){
    datepicker.show();
})

