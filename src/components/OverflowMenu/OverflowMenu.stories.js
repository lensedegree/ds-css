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
		${active || 'deactive'}
	">
		<div class="
			overflow-icon
		">
			<span></span>
		</div>
		<div class="
			overflow-options
		">
			<option>Option 1</option>
			<option><a href="#">Option 2</a></option>
			<option>Option 3</option>
		</div>
	</div>
`