import '../../components/Checkbox/index.css'

export default {
	title: 'Base components/Input',
	argTypes: {
		variant: {
			options: ['basic', 'rounded'],
			control: { type: 'radio' },
			defaultValue: 'basic'
		},
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

export const Checkbox = ({ variant, alignment, size }) => `
	<div class="
		checkbox
		alignment--${alignment}
		size--${size}
		variant--${variant}
	">
		<span>
			<input type="checkbox" name="scales" />
			<label for="scales">Scales</label>
		</span>

		<span>
			<input type="checkbox" name="teste" checked />
			<label for="teste">Teste</label>
		</span>

		<span>
			<input type="checkbox" name="taaa" />
			<label for="taaa">Taaa</label>
		</span>
	</div>
`