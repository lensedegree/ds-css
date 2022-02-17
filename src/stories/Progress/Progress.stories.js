import '../../components/Progress/index.css'

export default {
	title: 'Base Components/Progress',
	argTypes: {
		variant: {
			options: ['mobile', 'desktop'],
			control: { type: 'radio' },
		},
		state: {
			options: ['current', 'error'],
			control: { type: 'radio' },
		}
	}
}

export const ProgressIndicator = ({ variant, state }) => `
	<div class="
		progress
		variant--${variant || 'desktop'}
	">
		<div class="
			step
			variant--success
		">
			<div>
				<hr />
				<span></span>
			</div>
			<p>Primeiro passo</p>
		</div>

		<div class="
			step
			variant--success
		">
			<div>
				<hr />
				<span></span>
			</div>
			<p>Segundo passo</p>
		</div>

		<div class="
			step
			variant--${state === 'error' ? 'error' : 'current'}
		">
			<div>
				<hr />
				<span></span>
			</div>
			<p>Terceiro passo</p>
		</div>

		<div class="
			step
			variant--optional
		">
			<div>
				<hr />
				<span></span>
			</div>
			<p>Quarto passo</p>
		</div>

		<div class="
			step
			variant--next
		">
			<div>
				<hr />
				<span></span>
			</div>
			<p>Quinto passo</p>
		</div>
	</div>
`