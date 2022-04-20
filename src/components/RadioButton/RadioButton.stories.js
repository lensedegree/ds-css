import '../../components/RadioButton/index.css'

export default {
	title: 'Base Components/Input',
	argTypes: {
		alignment: {
			options: ['vertical', 'horizontal'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'medium'],
			control: { type: 'radio' },
		},
		theme: {
			options: [
				'default',
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

export const RadioButton = ({ alignment, size, theme }) => `
	<div class="
		radio-button
		alignment--${alignment || 'vertical'}
		size--${size || 'medium'}
		theme--${theme}
	">
		<span>
			<input type="radio" name="radio_test" value="css">
			<label for="css">CSS</label>
		</span>

		<span>
			<input type="radio" name="radio_test" value="webcomponents" checked>
			<label for="webcomponents">Web Components</label>
		</span>

		<span>
			<input type="radio" name="radio_test" value="react">
			<label for="react">React</label> 
		</span>
	</div>
`