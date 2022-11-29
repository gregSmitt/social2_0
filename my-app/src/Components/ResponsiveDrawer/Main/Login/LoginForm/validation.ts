const REQUIRED = 'Обязательно для заполнения';

export const loginValidation = {
	required: REQUIRED,
	validate: (value: string) => {
		if (value.match(/[а-яА-Я]/)) {
			return 'Email не может содержать русские буквы'
		}

		return true
	}
}

export const passwordValidation = {
	required: REQUIRED
}