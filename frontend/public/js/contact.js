const $ = document
const nameInput = $.querySelector('#name')
const emailInput = $.querySelector('#email')
const valueInput = $.querySelector('#value')
const formBtn = $.querySelector('.contact__form-button')

formBtn.addEventListener("click",  (event)=> {
    event.preventDefault()
    const message = {
        name: nameInput.value,
        email: emailInput.value,
        value: valueInput.value
    }
    console.log(JSON.stringify(message))
    fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers:    {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"        
        },
        body: JSON.stringify(message)
    }).then(res => console.log(res))
        .catch(err => console.log(err))
})