import '../../components/Modal/index.css'
import '../../components/Button/index.css'

export default {
	title: 'Base Components/Notification',
  argTypes: {
		variant: {
			options: ['alert', 'confirmation'],
			control: { type: 'radio' },
		},
		format: {
			options: ['mobile', 'desktop'],
			control: { type: 'radio' },
		},
		acceptText: {
			control: { type: 'text' },
		},
  },
	// decorators: [(story) => `
  //   <div style="
	// 		width: 355px;
  //   ">
  //     ${story()}
  //   </div>
  // `],
}

export const Modal = ({ variant, format, acceptText }) => `
	<div class="
		modal
		variant--${variant || 'confirmation'}
		format--${format || 'desktop'}
	">
		<span>
			<span>
				<p>Você têm certeza que quer deletar esse arquivo?</p>
				<p>Não será possível recuperar o arquivo depois que ele for deletado.</p>
			</span>

			<span></span>
		</span>
	
		<span>
			<button class="
				button
				variant--${variant === 'alert' ? 'danger' : 'primary'}
				size--medium
			">
				${acceptText || 'Mesclar'}
			</button>

			<button class="
				button
				variant--tertiary
				size--medium
			">
				Cancelar
			</button>
		</span>
	</div>
`