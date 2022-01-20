import '../../components/Acorddion/index.css'

export default {
	title: 'Base Components/Acorddion',
	argTypes: {
		// variant: {
		// 	options: ['basic'],
		// 	control: { type: 'radio' },
		// 	defaultValue: 'basic'
		// },
		// size: {
		// 	options: ['tiny'],
		// 	control: { type: 'radio' },
		// 	defaultValue: 'tiny'
		// },
		active: {
			options: ['false', 'true'],
			control: { type: 'boolean' },
			defaultValue: 'true'
		},
	},
  decorators: [(story) => `
    <div style="
			width: 288px;
    ">
      ${story()}
    </div>
  `]
}

export const BasicTiny = ({ active }) => `
	<div class="acorddion">
		<div class="
			acorddion-title
			variant--basic
			size--tiny
			${active ? 'active' : ''}
		">
			<p>
				Qual é a diferença entre a Maratona Guidelines e o Grid
			</p>
			<span class="material-icons md-20">
				${active ? 'keyboard_arrow_down' : 'expand_less'}
				<style>
					.material-icons.md-20 {
						font-size: var(--font-size-tiny);
						margin-left: var(--spacing-sm);
					}
				</style>
			</span>
		</div>

		<div class="
			acorddion-body
			size--tiny
			${active ? 'enabled': 'disabled'}
		">
			<p>
				O acordeão oferece grandes quantidades de conteúdo em um pequeno espaço 
				por meio de divulgação progressiva.
			</p>
		</div>
	</div>
`