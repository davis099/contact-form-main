const form = document.querySelector('form');
// const firstName = document.getElementById('fname');
const successM = document.querySelector('.success-message');

function validateField(field) {
    const errorM = field.type === 'radio' ?
    field.closest('fieldset').querySelector('.error-message') :
    
    field.parentElement.querySelector('.error-message');

    if(!field.validity.valid){

        errorM.textContent = field.dataset.error || 'This field is required';
        return false;
    }
        
        errorM.textContent = '';
        return true;
}

form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', e => {
        validateField(input);
    })
})

form.addEventListener('submit', event =>{
     event.preventDefault();

      let isvalid = true;

      const fields = form.querySelectorAll('input, textarea');

      fields.forEach((field) => {
         const fieldValid = validateField(field);

         if(!fieldValid){
            isvalid = false;
         }
      });

     

    

    if(isvalid){
        form.reset();
        successM.style.opacity = 1;

        setTimeout(() => {
            successM.classList.add('show');
        }, 10);
        
        // console.log("Submitting");
    }

    else {
        // console.log('error');
        form.querySelector(':invalid').focus();
    }
})