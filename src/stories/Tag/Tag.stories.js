import '../../components/Tag/index.css'

export default {
	title: 'Base Components/Tag',
	argTypes: {
		variant: {
			options: ['selection', 'filter'],
			control: { type: 'radio' },
		},
		content: {
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
	}
}

export const Tag = ({ variant, content, theme }) => `
	<div class="
		tag
		variant--${variant || 'selection'}
		theme--${theme}
	">
		<p>${content || 'Overlens'}</p>
		<div>
			<span></span>
		</div>
	</div>
`