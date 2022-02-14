import '../../components/Breadcrumbs/index.css'

export default {
	title: 'Base components/Breadcrumbs',
	argTypes: {
		variant: {
			options: ['primary', 'secundary'],
			control: { type: 'radio' },
			defaultValue: 'primary'
		},
	},
}

export const Breadcrumbs = ({ variant }) => `
	<div class="
		breadcrumbs
		variant--${variant}
	">
		<a>Breadcrumb 1</a>
		
		<span></span>
		
		<a>Breadcrumb 2</a>
		
		<span></span>
		
		<a>Breadcrumb 3</a>
	</div>
`