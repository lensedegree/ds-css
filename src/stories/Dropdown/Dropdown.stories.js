import '../../components/Dropdown/index.css'

export default {
	title: 'Base Components/Input',
	argTypes: {
		active: {
			options: ['deactive', 'active'],
			control: { type: 'radio' },
			defaultValue: 'active'
		},
		selected: {
			options: ['unselected', 'selected'],
			control: { type: 'radio' },
			defaultValue: 'selected'
		}
	}
}

export const Dropdown = ({ active, selected }) => `
	<div class="
		dropdown
		${active}
	">
		<input
			type="text"
			readonly
			value="${selected === 'selected' ? 'Option 2' : 'Select one option'}" 
		/>
		<span class="${selected}"></span>
		<span></span>
	</div>
	<div class="
		dropdown-options
		${active}
	">
		<option class="unselected">
			Option 1 
			<span></span>
		</option>

		<option class="${selected}">
			Option 2 
			<span></span>
		</option>

		<option class="unselected">
			Option 3 
			<span></span>
		</option>

		<option class="unselected">
			Option 4 
			<span></span>
		</option>
	</div>
`