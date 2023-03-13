import { emailReg, passwordReg } from "./regex"

export const required = 'This field cannot be empty!'

export const email = {
    required,
    pattern: {
        value: emailReg,
        message: 'Email not valid!'
    }
}

export const password = {
    required,
    pattern: {
        value: passwordReg,
        message: 'Only Latin letters and numbers!'
    },
    minLength: {
        value: 4,
        message: 'Password must be more than 4 digits!'
    }
}

export const settings = {
    required
}