import '../../components/Tabs/index.css'

export default {
	title: 'Base Components/Tabs',
	argTypes: {
		variant: {
			options: ['default', 'container'],
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
	}
}

export const Tabs = ({ variant, theme }) => `
	<div class="
		tabs
		variant--${variant || 'default'}
		theme--${theme}
	">
		<div class="
			tabs-header
		">
			<div class="active">Tab label 01</div>
			<div class="deactive">Tab label 02</div>
			<div class="deactive">Tab label 03</div>
		</div>

		<div class="
			tabs-content
		">
			Conteúdo da primeira tab aqui
		</div>
	</div>
`