$(document).ready(function() {
const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");
    
nextBtn.addEventListener("click", ()=> {
        allInput.forEach(input => {
            if(input.value != ""){
                form.classList.add('secActive');
            }else{
                form.classList.remove('secActive');
            }
        })
    })
        
backBtn.addEventListener("click", () => form.classList.remove('secActive'));

    $('#ndob').nepaliDatePicker({
        npdLang: 'en',
        npdMonth: true,
        npdYear: true,
        dateFormat: "MM/DD/YYYY"
    });

    $('#same-as-permanent').on('change', function() {
        if ($(this).is(':checked')) {
            $('#contact-country').val($('#permanent-country').val());
            $('#contact-province').val($('#permanent-province').val());
            $('#contact-district').val($('#permanent-district').val());
            $('#contact-local-level').val($('#permanent-local-level').val());
            $('#contact-ward-number').val($('#permanent-ward-number').val());
            $('#contact-tole').val($('#permanent-tole').val());
    
            // Disable the input fields in the Contact Address section
            $('#contact-country, #contact-province, #contact-district, #contact-local-level, #contact-ward-number, #contact-tole').prop('disabled', true);
        } else {
            $('#contact-country').val('');
            $('#contact-province').val('');
            $('#contact-district').val('');
            $('#contact-local-level').val('');
            $('#contact-ward-number').val('');
            $('#contact-tole').val('');
    
            // Enable the input fields in the Contact Address section
            $('#contact-country, #contact-province, #contact-district, #contact-local-level, #contact-ward-number, #contact-tole').prop('disabled', false);
        }
    });



});