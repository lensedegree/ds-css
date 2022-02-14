import '../../components/Modal/index.css'
import '../../components/Button/index.css'

export default {
	title: 'Base Components/Notification',
  argTypes: {
		variant: {
			options: ['alert', 'confirmation'],
			control: { type: 'radio' },
			defaultValue: 'confirmation',
		},
		format: {
			options: ['mobile', 'desktop'],
			control: { type: 'radio' },
			defaultValue: 'desktop',
		},
  },
	// decorators: [(story) => `
  //   <div style="
	// 		width: 355px;
  //   ">
  //     ${story()}
  //   </div>
  // `],
	/* FIXME: Botões fluidos quebram o modal, quando esse é pequeno.
		 Nos testes: desktop < 400px e mobile < 355px
	*/
}

export const Modal = ({ variant, format }) => `
	<div class="
		modal
		variant--${variant}
		format--${format}
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
				size--${format === 'desktop' ? 'large' : 'medium'}
			">
				${variant === 'alert' ? 'Deletar' : 'Mesclar'}
			</button>

			<button class="
				button
				variant--tertiary
				size--${format === 'desktop' ? 'large' : 'medium'}
			">
				Cancelar
			</button>
		</span>
	</div>
`