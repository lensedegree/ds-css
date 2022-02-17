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
		}
	}
}

export const Tag = ({ variant, content }) => `
	<div class="
		tag
		variant--${variant || 'selection'}
	">
		<p>${content || 'Overlens'}</p>
		<div>
			<span></span>
		</div>
	</div>
`