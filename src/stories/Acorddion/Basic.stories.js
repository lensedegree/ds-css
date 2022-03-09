import '../../components/Acorddion/index.css'

export default {
	title: 'Base Components/Acorddion',
	argTypes: {
		active: {
			options: ['false', 'true'],
			control: { type: 'boolean' },
		},
		title: {
			control: { type: 'text' },
		},
		body: {
			control: { type: 'text' },
		},
		theme: {
			options: [
				'morpho-blue', 
				'yellow-lens', 
				'green-lens', 
				'red-lens', 
				'purple-lens',
				'orange-lens',
				'lime-lens'
			],
			control: { type: 'select' }
		}
	},
}

const defaultTitle = 'Qual a diferença entre o grid e a Maratona Guidelines'
const defaultBody = 'O acordeão oferece grandes quantidades de conteúdo em um pequeno espaço por meio de divulgação progressiva. O usuário obtém detalhes importantes sobre o conteúdo subjacente e pode optar por expandir esse conteúdo dentro das restrições do acordeão. Os acordeões funcionam especialmente bem em interfaces móveis ou sempre que o espaço vertical é necessário.'

export const Basic = ({ active, title, body, theme }) => `
	<div class="
		acorddion 
		theme--${theme}
	">
		<div class="
			acorddion-title
			variant--basic
			size--normal
			${active ? 'active' : 'deactive'}
		">
			<p>${title || defaultTitle}</p>
			<span></span>
		</div>

		<div class="
			acorddion-body
			size--normal
			${active ? 'active': 'deactive'}
		">
			<p>${body || defaultBody}</p>
		 </div>
	</div>
`