import '../../components/Button/index.css'

export default {
  title: 'Base Components/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secundary', 'tertiary', 'danger', 'disable'],
      control: { type: 'radio' },
			defaultValue: 'primary',
    },
    icon: {
      control: { type: 'boolean' },
			defaultValue: 'true',
    },
		content: {
			control: { type: 'text' },
			defaultValue: 'Button'
		},
  },
  decorators: [(story) => `
    <div style="
      display: flex;
      flex-direction: column;
    
      align-items: flex-start;
      
      gap: 15px;
    ">
      ${story()}
    </div>
  `]
}

export const Sizes = ({ variant, icon, content }) => {
	if (icon) {
		return `
			<button class="
				button
				variant--${variant ?? 'primary'}
				size--large
			">
				${content}
				<span class="material-icons-outlined md-18">
          file_download
          <style>
            .material-icons-outlined.md-18 {
              font-size: 18px;
            }
          </style>
        </span>
			</button>
		
			<button class="
				button
				variant--${variant ?? 'primary'}
				size--medium
			">
				${content}
				<span class="material-icons-outlined md-18">
          file_download
          <style>
            .material-icons-outlined.md-18 {
              font-size: 18px;
            }
          </style>
        </span>
			</button>
		
			<button class="
				button
				variant--${variant ?? 'primary'}
				size--small
			">
				${content}
				<span class="material-icons-outlined md-18">
          file_download
          <style>
            .material-icons-outlined.md-18 {
              font-size: 18px;
            }
          </style>
        </span>
			</button>
		`
	}

	return `
		<button class="
			button
			variant--${variant ?? 'primary'}
			size--large
		">${content}</button>

		<button class="
			button
			variant--${variant ?? 'primary'}
			size--medium
		">${content}</button>

		<button class="
			button
			variant--${variant ?? 'primary'}
			size--small
		">${content}</button>
	`
}
