export type ValidatorType = (value: string) => string | undefined

export const required: ValidatorType = value => value ? undefined : 'Field is required'

export const maxLength = (max: number): ValidatorType => (value) =>
  value && value.length > max ? `Max characters: ${max}` : undefined

export const minLength = (min: number): ValidatorType => (value) =>
  value && value.length < min ? `Min characters: ${min}` : undefined