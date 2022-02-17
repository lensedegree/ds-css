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
		}
	},
}

export const RadioButton = ({ alignment, size }) => `
	<div class="
		radio-button
		alignment--${alignment || 'horizontal'}
		size--${size || 'medium'}
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