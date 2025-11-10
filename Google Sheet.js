const scriptURL ='https://script.google.com/macros/s/AKfycbz37cMf_UmEnD-Yy60xeW6hFalMlK1yFJFejxYuXpo4H8CublBqesan6wHkl4ddi0BcEA/exec'
const form=document.forms['contact-form']
form.addEventListener('submit',e =>{
e.preventDefault()
fetch(scriptURL, { method: 'POST', body:new FormData(form)})
.then(response => alert("Thank you! Your form is Submitted Successfully."))
.then(() => { window.location.reload();})
    .catch(error => console.error('Error!',error.message))
}

)