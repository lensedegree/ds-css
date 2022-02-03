import '../../components/RadioButton/index.css'

export default {
	title: 'Base Components/Input',
	argTypes: {
		alignment: {
			options: ['vertical', 'horizontal'],
			control: { type: 'radio' },
			defaultValue: 'horizontal'
		},
		size: {
			options: ['small', 'medium'],
			control: { type: 'radio' },
			defaultValue: 'medium'
		}
	},
}

export const RadioButton = ({ alignment, size }) => `
	<div class="
		radio-button
		alignment--${alignment}
		size--${size}
	">
		<span>
			<input type="radio" name="radio_test" value="css">
			<label for="css">CSS</label><br>
		</span>

		<span>
			<input type="radio" name="radio_test" value="webcomponents" checked>
			<label for="webcomponents">Web Components</label><br>
		</span>

		<span>
			<input type="radio" name="radio_test" value="react">
			<label for="react">React</label> 
		</span>
	</div>
`