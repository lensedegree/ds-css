import '../../components/Acorddion/index.css'

export default {
	title: 'Base Components/Acorddion',
	argTypes: {
		active: {
			options: ['false', 'true'],
			control: { type: 'boolean' },
			defaultValue: 'true'
		},
		title: {
			control: { type: 'text' },
			defaultValue: 'Qual a diferença entre o grid e a Maratona Guidelines'
		},
		body: {
			control: { type: 'text' },
			defaultValue: 'O acordeão oferece grandes quantidades de conteúdo em um pequeno espaço por meio de divulgação progressiva. O usuário obtém detalhes importantes sobre o conteúdo subjacente e pode optar por expandir esse conteúdo dentro das restrições do acordeão. Os acordeões funcionam especialmente bem em interfaces móveis ou sempre que o espaço vertical é necessário.'
		},
	},
}

export const Basic = ({ active, title, body }) => `
	<div class="acorddion">
		<div class="
			acorddion-title
			variant--basic
			size--normal
			${active ? 'active' : 'deactive'}
		">
			<p>${title}</p>
			<span></span>
		</div>

		<div class="
			acorddion-body
			size--normal
			${active ? 'active': 'deactive'}
		">
			<p>${body}</p>
		 </div>
	</div>
`