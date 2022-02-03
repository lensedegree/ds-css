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
			defaultValue: 'Qual é a diferença entre a Maratona Guidelines e o Grid '
		},
		body: {
			control: { type: 'text' },
			defaultValue: 'O acordeão oferece grandes quantidades de conteúdo em um pequeno espaço por meio de divulgação progressiva.'
		},
	},
  decorators: [(story) => `
    <div style="
			width: 250px;
    ">
      ${story()}
    </div>
  `],
}

export const BasicTiny = ({ active, title, body }) => `
	<div class="acorddion">
		<div class="
			acorddion-title
			variant--basic
			size--tiny
			${active ? 'active' : 'deactive'}
		">
			<p>${title}</p>
			<span></span>
		</div>

		<div class="
			acorddion-body
			size--tiny
			${active ? 'active': 'deactive'}
		">
			<p>${body}</p>
		</div>
	</div>
`