import '../../components/ToggleButton/index.css'

export default {
	title: 'Base Components/Button',
	argTypes: {
		active: {
			options: ['deactive', 'active'],
			control: { type: 'radio' },
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

export const ToggleButton = ({ active, theme }) => `
	<div class="
		toggle-button
		${active || 'deactive'}
		theme--${theme}
	">
		<div class="toggle"></div>
	</div>
`