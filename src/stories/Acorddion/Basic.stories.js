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
			width: 720px;
    ">
      ${story()}
    </div>
  `]
}

export const Basic = ({ active }) => `
	<div class="acorddion">
		<div class="
			acorddion-title
			variant--basic
			size--normal
			${active ? 'active' : ''}
		">
			<p>
				Qual a diferença entre o grid e a Maratona Guidelines
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
			size--normal
			${active ? 'enabled': 'disabled'}
		">
			<p>
				O acordeão oferece grandes quantidades de conteúdo em um pequeno
				espaço por meio de divulgação progressiva. O usuário obtém detalhes 
				importantes sobre o conteúdo subjacente e pode optar por expandir esse 
				conteúdo dentro das restrições do acordeão. Os acordeões funcionam 
				especialmente bem em interfaces móveis ou sempre que o espaço vertical é 
				necessário.
			</p>
		 </div>
	</div>
`