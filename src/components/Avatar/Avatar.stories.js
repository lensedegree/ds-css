import '../../components/Avatar/index.css'
import imageFile from '../../../.storybook/assets/Ilhama-bgyellow.png';

export default {
	title: 'Base Components/Avatar',
	argTypes: {
		size: {
			options: ['large', 'medium', 'small'],
			control: { type: 'radio' },
		},
		notifications: {
			control: { type: 'number' },
		},
		state: {
			options: ['offline', 'online', 'hidden'],
			control: { type: 'radio' },
		},
		action: {
			options: ['edit', 'add', 'delete', 'hidden'],
			control: { type: 'radio' },
		},
	},
}

export const Basic = ({ size, notifications, state, action }) => `
	<div class="
		avatar-container
		size--${size || 'medium'}
	">
		<div class="
			avatar
		">
			<img src="${imageFile}" />
		</div>
		<div class="
			state--${!!!notifications || notifications < 1 ? 'hidden' : 'notify'}
		">${notifications}</div>
		<div class="
			state--${state || 'hidden'}
		"></div>
		<div class="
			action--${action || 'hidden'}
		">
			<span></span>
		</div>
	</div>
`