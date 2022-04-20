import '../../components/Input/index.css'

export default {
	title: 'Base Components/Input',
  argTypes: {
		theme: {
			options: [
				'morpho-blue', 
				'yellow-lens', 
				'green-lens', 
				'red-lens', 
				'purple-lens',
				'orange-lens',
				'lime-lens'
			],
			control: { type: 'select' }
		},
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
	theme,
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
		variant--${variant}
		${disable ? 'disable' : ''}
		${error ? 'error' : ''}
		theme--${theme}
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