import '../../components/Input/index.css'

export default {
	title: 'Base Components/Input',
  argTypes: {
		variant: {
			options: ['email', 'name', 'password', 'phone', 'search', 'text'],
			control: { type: 'select' },
		},
		disable: {
			control: { type: 'boolean' },
		},
		visibility: {
			control: { type: 'boolean' },
		},
		content: {
			control: { type: 'text' },
			defaultValue: ''
		},
		placeholder: {
			control: { type: 'text' },
		},
		error: {
			control: { type: 'boolean' },
		},
		messageText: {
			control: { type: 'text' },
		},
  },
}

export const BasicInput = ({ 
	variant,
	disable,
	visibility, 
	content, 
	placeholder,
	error, 
	messageText
}) => `
	<div class="
		input
		variant--${variant || 'text'}
		${disable ? 'disable' : ''}
		${error ? 'error' : ''}
	">
		<span></span>
		<input 
			type="${variant === 'password' && !!!visibility ? 'password' : 'text'}" 
			placeholder="${placeholder || 'Digite o texto aqui'}" 
			value="${content}"
			${disable ? 'readonly' : ''}
		/>
		<span class="
			${content ? 'active' : 'deactive'}
			${visibility ? 'hide' : 'show'}
		"></span>
	</div>
	<p class="
		input-message
		${messageText && messageText !== '' ? 'active' : 'deactive'}
		${error ? 'error' : 'notify'}
	">
		${messageText}
	</p>
`