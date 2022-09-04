let password = document.querySelector("#password")

let generatePassword = document.querySelector("#generate-password")
generatePassword.addEventListener('click', generateNewPassword)

let copyPassword = document.querySelector("#copy-password")
copyPassword.addEventListener('click', copyGeneratedPassword)

let alertMessage = document.querySelector("#alert-message")

let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]"
let passwordLength = 16

function generateNewPassword() {
	let newPassword = ""

	for (let i=0; i<passwordLength; i++) {
		let randomNumber = Math.floor(Math.random() * chars.length)
		newPassword += chars.substring(randomNumber, randomNumber+1)
	}

	password.value = newPassword
}

function copyGeneratedPassword() {
	if(password.value) {
		password.select()
		document.execCommand("copy")

		alertMessage.innerHTML = "Senha copiada para a área de transferência!"
	} else {
		alertMessage.innerHTML = "Necessário gerar senha primeiro!"
	}
	
	alertMessage.classList.remove("hide")

	setTimeout(() => {
		alertMessage.classList.add("hide")
	}, 2000)
}
