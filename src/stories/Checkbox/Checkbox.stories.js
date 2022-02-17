import '../../components/Checkbox/index.css'

export default {
	title: 'Base components/Input',
	argTypes: {
		variant: {
			options: ['basic', 'rounded'],
			control: { type: 'radio' },
		},
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

export const Checkbox = ({ variant, alignment, size }) => `
	<div class="
		checkbox
		variant--${variant || 'basic'}
		alignment--${alignment || 'vertical'}
		size--${size || 'medium'}
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