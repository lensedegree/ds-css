import '../../components/Avatar/index.css'
import imageFile from '../../../.storybook/assets/Ilhama-bgyellow.png';

export default {
	title: 'Base Components/Avatar',
	argTypes: {
		size: {
			options: ['large', 'medium', 'small'],
			control: { type: 'radio' },
			defaultValue: 'medium'
		},
	},
}

export const Basic = ({ size }) => `
	<div class="
		avatar-container
		size--${size}
	">
		<div class="
			avatar
		">
			<img src="${imageFile}" />
		</div>
		<div class="
			state--notify
		">2</div>
		<div class="
			state--hidden
		"></div>
		<div class="
			action--edit
		">
			<span></span>
		</div>
	</div>
`