import '../../components/TextareaInput/index.css'

export default {
	title: 'Base Components/Input',
  argTypes: {
		helpText: {
			control: { type: 'text' },
		},
  },
}

export const Textarea = ({ helpText }) => `
	<div class="
		textarea-input
	">
		<textarea
			placeholder="Escreva aqui..."
		></textarea>
	</div>
	<p class="
		textarea-message
		${helpText && helpText !== '' ? 'active': 'deactive'}
	">
		${helpText}
	</p>
`
