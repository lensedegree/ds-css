import '../../components/Link/index.css'

export default {
	title: 'Base Components/Link',
  argTypes: {
		variant: {
			options: ['basic', 'danger'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'medium', 'large'],
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
  },
}

export const Link = ({ variant, size, content, theme }) => `
	<div class="
		link
		variant--${variant || 'basic'}
		size--${size || 'medium'}
		theme--${theme}
	">
		${content || 'Link'}
	</div>
`