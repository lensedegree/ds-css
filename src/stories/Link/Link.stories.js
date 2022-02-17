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
  },
}

export const Link = ({ variant, size, content }) => `
	<div class="
		link
		variant--${variant || 'basic'}
		size--${size || 'medium'}
	">
		${content || 'Link'}
	</div>
`