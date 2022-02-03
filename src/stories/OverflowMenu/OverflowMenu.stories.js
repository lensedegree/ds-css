import '../../components/OverflowMenu/index.css'

export default {
	title: 'Base components/Menu',
	argTypes: {
		active: {
			options: ['deactive', 'active'],
			control: { type: 'radio' },
			defaultValue: 'active',
		}
	}
}

export const Overflow = ({ active }) => `
	<div class="
		overflow
		menu
	">
		<div></div>
	</div>
	<div class="
		overflow
		options
		${active}
	">
		<option>Option 1</option>
		<option>Option 2</option>
		<option>Option 3</option>
	</div>
`