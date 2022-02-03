import '../../components/Pagination/index.css'
import '../../components/IconShape/index.css'

export default {
	title: 'Base Components/Pagination',
	argTypes: {
		variant: {
			options: ['default', 'basic', 'extended'],
			control: { type: 'radio' },
			defaultValue: 'default',
		},
		state: {
			options: ['initial', 'middle', 'final'],
			control: { type: 'radio' },
			defaultValue: 'default',
		},
	}
}

export const Pagination = ({ variant, state }) => {
	if(variant === 'default') {
		return `
			<div class="
				pagination
				variant--default
			">
				<div class="
					icon-shape
					shape--circle
					size--medium
					variant--outlined
				">
					<span class="material-icons-outlined md-24">
						arrow_back
						<style>
							.material-icons-outlined.md-24 {
								font-size: 24px;
							}
						</style>
					</span>
				</div>

				<div class="
					icon-shape
					shape--circle
					size--medium
					variant--outlined
				">
					<span class="material-icons-outlined md-24">
						arrow_forward
						<style>
							.material-icons-outlined.md-24 {
								font-size: 24px;
							}
						</style>
					</span>
				</div>
			</div>
		`
	} else if (variant === 'basic') {
		return `
			<div class="
				pagination
				variant--basic
			">
				<div><span></span></div>
				<div><input value="01" /></div>
				<div><p>de 258</p></div>
				<div><span></span></div>
			</div>
		`
	}

	/* FIXME:
	 * O input está liberado para todos tipos, mas deve aceitar somente 
	 * números. Porém, quando setado type=number ele adiciona uma interface
	 * de números que não saiu com all: unset, além de permitir da mesma
	 * forma que seja adicionado letras.
	 */
	return `
		<div class="
			pagination
			variant--extended
			state--${state}
		">
			<div>
				<span></span>
			</div>

			<div>
				<div class="
					${state === 'initial' ? 'active' : 'deactive'}
				">1</div>

				<div class="initial-horiz">
					<span></span>
				</div>

				<div>X</div>
				<div>X</div>

				<div class="
					${state === 'middle' ? 'active' : 'deactive'}
				">X</div>

				<div>X</div>

				<div class="final-horiz">
					<span></span>
				</div>

				<div class="
					${state === 'final' ? 'active' : 'deactive'}
				">258</div>
			</div>

			<div>
				<span></span>
			</div>

			<div>
				<input />
				<span></span>
			</div>

		</div>
	`
}
