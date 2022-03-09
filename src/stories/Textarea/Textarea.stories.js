import '../../components/Textarea/index.css'

export default {
	title: 'Base Components/Input',
  argTypes: {
		helpText: {
			control: { type: 'text' },
		},
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
		}
  },
}

export const Textarea = ({ helpText, theme }) => `
	<div class="
		textarea-input
		theme--${theme}
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
