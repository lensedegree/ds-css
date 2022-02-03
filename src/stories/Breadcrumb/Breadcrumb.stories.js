import '../../components/Breadcrumb/index.css'

export default {
	title: 'Base components/Breadcrumbs',
	argTypes: {
		variant: {
			options: ['primary', 'secundary'],
			control: { type: 'radio' },
			defaultValue: 'primary'
		},
		firstBread: {
			control: { type: 'text' },
			defaultValue: 'Breadcrumb 1'
		},
		secondBread: {
			control: { type: 'text' },
			defaultValue: 'Breadcrumb 2'
		},
		thirdBread: {
			control: { type: 'text' },
			defaultValue: 'Página atual'
		}
	},
}

export const Breadcrumbs = ({ 
	variant, 
	firstBread,
	secondBread,
	thirdBread
}) => `
	<div class="
		breadcrumb
		variant--${variant}
	">
		<a>${firstBread}</a>
		
		${variant === 'primary' ? '/' : '<span></span>'}
		
		<a>${secondBread}</a>
		
		<span></span>
		
		<div>${thirdBread}</div>
	</div>
`