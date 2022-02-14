import '../../components/TextAreaInput/index.css'

export default {
	title: 'Base Components/Input',
  argTypes: {
		helpText: {
			control: { type: 'boolean' },
			defaultValue: 'true'
		},
  },
}

/* TODO:
 * METER O HOVER NO DIV AO INVES DO TEXTAREA
 */

export const TextAreaInput = ({ helpText }) => `
	<div class="
		textarea-input
	">
		<textarea
			placeholder="Escreva aqui..."
		></textarea>
	</div>
	<p class="
		textarea-message
		${helpText ? 'active': 'deactive'}
	">
		Texto de ajuda opcional
	</p>
`
