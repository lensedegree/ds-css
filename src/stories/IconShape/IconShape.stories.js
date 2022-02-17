import '../../components/IconShape/index.css'

export default {
	title: 'Base Components/Icon',
	argTypes: {
		shape: {
			options: ['square', 'circle'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'medium'],
			control: { type: 'radio' },
		},
		variant: {
			options: ['outlined', 'filled'],
			control: { type: 'radio' },
		},
	},
}

export const IconShape = ({ shape, size, variant }) => `
	<div class="
		icon-shape
		shape--${shape || 'square'}
		size--${size || 'medium'}
		variant--${variant || 'filled'}
	">
		<span class="material-icons-outlined md-20">
			file_download
			<style>
				.material-icons-outlined.md-20 {
					font-size: 20px;
				}
			</style>
		</span>
	</div>
`