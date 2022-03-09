import '../../components/Breadcrumbs/index.css'

export default {
	title: 'Base components/Breadcrumbs',
	argTypes: {
		variant: {
			options: ['primary', 'secundary'],
			control: { type: 'radio' },
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

export const Breadcrumbs = ({ variant, theme }) => `
	<div class="
		breadcrumbs
		variant--${variant || 'primary'}
		theme--${theme}
	">
		<a>Breadcrumb 1</a>
		
		<span></span>
		
		<a>Breadcrumb 2</a>
		
		<span></span>
		
		<a>Breadcrumb 3</a>
	</div>
`