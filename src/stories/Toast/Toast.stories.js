import '../../components/Toast/index.css'

export default {
	title: 'Base Components/Notification',
  argTypes: {
		variant: {
			options: ['alert', 'confirmation', 'information', 'reward'],
			control: { type: 'radio' },
			defaultValue: 'alert',
		},
		format: {
			options: ['mobile', 'desktop'],
			control: { type: 'radio' },
			defaultValue: 'mobile',
		},
  },
}

export const Toast = ({ variant, format }) => `
	<div class="
		toast
		variant--${variant}
		format--${format}
	">
		<span>

			<span></span>

			${variant === 'reward' 
				? 'Concluiu o exercício' 
				: 'A foto não foi enviada. Tente novamente em 5 segundos.'}

			<span>
				<span data-value="10">${variant === 'reward' ? '+200' : 'REENVIAR'}</span>
				<span>FECHAR</span>
			</span>

		</span>

		<span><hr /></span>
	</div>
`