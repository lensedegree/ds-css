import '../../components/OverflowMenu/index.css'

export default {
	title: 'Base components/Menu',
	argTypes: {
		active: {
			options: ['deactive', 'active'],
			control: { type: 'radio' },
		}
	}
}

export const Overflow = ({ active }) => `
	<div class="
		overflow
		menu
	">
		<span></span>
	</div>
	<div class="
		overflow
		options
		${active || 'deactive'}
	">
		<option>Option 1</option>
		<a href="#"><option>Option 2</option></a>
		<option>Option 3</option>
	</div>
`