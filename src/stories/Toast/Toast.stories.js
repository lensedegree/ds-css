import '../../components/Toast/index.css'

export default {
	title: 'Base Components/Notification',
  argTypes: {
		variant: {
			options: ['alert', 'confirmation', 'information', 'reward'],
			control: { type: 'radio' },
		},
		format: {
			options: ['mobile', 'desktop'],
			control: { type: 'radio' },
		},
  },
}

export const Toast = ({ variant, format }) => `
	<div class="
		toast
		variant--${variant || 'confirmation'}
		format--${format || 'desktop'}
	">
		<span>

			<span></span>

			${
				variant === 'alert'
					? 'A foto não foi enviada. Tente novamente em 5 segundos.'
					: variant === 'information'
						? 'Agora você pode acessar todos exercícios em um só lugar!'
						: variant === 'reward'
							? 'Concluiu o exercício'
							: 'Suas informações foram atualizadas com sucesso!'
			}

			<span>
				<span>
					${
						variant === 'alert'
							? 'REENVIAR'
							: variant === 'information'
								? 'CONFERIR'
								: variant === 'reward'
									? '+200'
									: 'OK, OBRIGADO'
					}
				</span>
				<span>FECHAR</span>
			</span>

		</span>

		<span><hr /></span>
		<span class=" 
      timeline-animated
    "><hr /></span>
	</div>
`