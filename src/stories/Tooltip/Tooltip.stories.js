import '../../components/Tooltip/index.css'

export default {
	title: 'Base Components/Tooltip',
	argTypes: {
		variant: {
			options: ['definition', 'click'],
			control: { type: 'radio' },
			defaultValue: 'definition',
		},
		link: {
			control: { type: 'boolean' },
		}
	},
  decorators: [(story) => `
    <div style="
      display: flex;
      flex-direction: column;
			align-items: center;
    ">
      ${story()}
    </div>
  `]
}

/* TODO: Testar melhor, com outros botões */

export const Tooltip = ({ variant, link }) => `
	${
		variant === 'click'
		? `
		<span class="material-icons md-20">
			info
			<style>
				.material-icons.md-20 {
					font-size: 20px;
					color: #959595;
				}
			</style>
		</span>
		`
		: ''
	}
	<div class="
		tooltip-container
		variant--${variant}
	">
		<span></span>
		<div class="
			tooltip
		">
			Esse é um tooltip de definição, é o mais comum dentre eles.
			${
				link
				? `
					<span>
						<a>Link Tooltip</a>
					</span>
				`
				: ''
			}
		</div>
	</div>
`