import '../../components/Input/index.css'

export default {
	title: 'Base Components/Input',
  argTypes: {
		variant: {
			options: ['email', 'name', 'password', 'phone', 'search', 'text'],
			control: { type: 'select' },
			defaultValue: 'text'
		},
		disable: {
			control: { type: 'boolean' },
			defaultValue: 'false'
		},
		visibility: {
			control: { type: 'boolean' },
			defaultValue: 'false'
		},
		content: {
			control: { type: 'text' },
			defaultValue: ''
		},
		placeholder: {
			control: { type: 'text' },
			defaultValue: 'Digite o texto aqui'
		},
		message: {
			control: { type: 'boolean' },
			defaultValue: 'false'
		},
		error: {
			control: { type: 'boolean' },
			defaultValue: 'false'
		},
		messageText: {
			control: { type: 'text' },
			defaultValue: 'Mensagem'
		},
  },
}

export const BasicInput = ({ 
	variant,
	disable,
	visibility, 
	content, 
	placeholder, 
	message, 
	error, 
	messageText
}) => `
	<div class="
		input
		variant--${variant}
		${disable ? 'disable' : ''}
	">
		<span></span>
		<input 
			type="${variant === 'password' && !!!visibility ? 'password' : 'text'}" 
			placeholder="${placeholder}" 
			value="${content}"
			${disable ? 'readonly' : ''}
		/>
		<span class="
			${content ? 'active' : 'deactive'}
			${visibility ? 'hide' : 'show'}
		"></span>
	</div>
	<p class="
		message
		${error || message ? 'active' : 'deactive'}
		${error ? 'error' : (message ? 'notify' : '')}
	">
		${messageText}
	</p>
`