const firstName = document.querySelector('.first')
const lastName = document.querySelector('.second')
const email = document.querySelector('.third')
const password = document.querySelector('.fourth')
const btn = document.querySelector('.main__forms-form-btn')

const showErr = input => {
    const formBox = input.parentElement
    const errMsg = formBox.querySelector('.main__forms-form-error')
	input.style.border = '2px solid hsl(0, 100%, 74%)'
    errMsg.classList.add('active')
    errMsg.classList.remove('hide')
}

const checkValues = input => {
    input.forEach(el => {
        if(el.value === '') {
            showErr(el)
        } else {
            clearErr(el)
        }
    })
}

const clearErr = input => {
	const formBox = input.parentElement
    const errMsg = formBox.querySelector('.main__forms-form-error')
    errMsg.classList.add('hide')
    errMsg.classList.remove('active')
}

const checkEmail = email => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (re.test(email.value)) {
        clearErr(email)
    } else {
        showErr(email, email.placeholder = 'email@example/com')
    }
}


btn.addEventListener('click', e => {
	e.preventDefault()
    checkValues([firstName, lastName, email, password])
	checkEmail(email)
})

