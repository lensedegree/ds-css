import '../../components/Tooltip/index.css'

export default {
	title: 'Base Components/Tooltip',
	argTypes: {
		variant: {
			options: ['definition', 'click'],
			control: { type: 'radio' },
		},
		link: {
			control: { type: 'text' },
		}
	},
  decorators: [(story) => `
    <div style="
      display: flex;
      flex-direction: column;
			align-items: center;
    ">
			<span class="material-icons md-20">
				info
				<style>
					.material-icons.md-20 {
						font-size: 20px;
						color: #959595;
					}
				</style>
			</span>
      ${story()}
    </div>
  `]
}

/* TODO: Testar melhor, com outros botões */

export const Tooltip = ({ variant, link }) => `
	<div class="
		tooltip-container
		variant--${variant || 'definition'}
	">
		<span></span>
		<div class="
			tooltip
		">
			Esse é um tooltip de definição, é o mais comum dentre eles.
			${
				link && link !== ''
				? `
					<span>
						<a>${link}</a>
					</span>
				`
				: ''
			}
		</div>
	</div>
`