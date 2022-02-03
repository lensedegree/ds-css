import '../../components/ToggleButton/index.css'

export default {
	title: 'Base Components/Toggle Button',
	argTypes: {
		active: {
			options: ['deactive', 'active'],
			control: { type: 'radio' },
			defaultValue: 'deactive'
		}
	},
}

export const ToggleButton = ({ active }) => `
	<div class="
		toggle-button
		${active}
	">
		<div class="toggle"></div>
	</div>
`