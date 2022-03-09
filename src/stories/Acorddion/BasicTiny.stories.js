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
  decorators: [(story) => `
    <div style="
			width: 250px;
    ">
      ${story()}
    </div>
  `],
}

const defaultTitle = 'Qual é a diferença entre a Maratona Guidelines e o Grid'
const defaultBody = 'O acordeão oferece grandes quantidades de conteúdo em um pequeno espaço por meio de divulgação progressiva.'

export const BasicTiny = ({ active, title, body, theme }) => `
	<div class="
		acorddion
		theme--${theme}
	">
		<div class="
			acorddion-title
			variant--basic
			size--tiny
			${active ? 'active' : 'deactive'}
		">
			<p>${title || defaultTitle}</p>
			<span></span>
		</div>

		<div class="
			acorddion-body
			size--tiny
			${active ? 'active': 'deactive'}
		">
			<p>${body || defaultBody}</p>
		</div>
	</div>
`