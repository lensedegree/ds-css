import '../../components/Link/index.css'

export default {
	title: 'Base Components/Link',
  argTypes: {
		variant: {
			options: ['basic', 'danger'],
			control: { type: 'radio' },
			defaultValue: 'basic'
		},
		size: {
			options: ['small', 'medium', 'large'],
			control: { type: 'radio' },
			defaultValue: 'medium'
		},
		content: {
			control: { type: 'text' },
			defaultValue: 'Link'
		},
  },
}

export const Link = ({ variant, size, content }) => `
	<div class="
		link
		variant--${variant}
		size--${size}
	">${content}</div>
`