import '../../components/Tags/index.css'

export default {
	title: 'Base Components/Tags',
	argTypes: {
		variant: {
			options: ['selection', 'filter'],
			control: { type: 'radio' },
			defaultValue: 'selection',
		},
		content: {
			control: { type: 'text' },
			defaultValue: 'Tag'
		}
	}
}

export const Tags = ({ variant, content }) => `
	<div class="
		tags
		variant--${variant}
	">
		<p>${content}</p>
		<div>
			<span></span>
		</div>
	</div>
`