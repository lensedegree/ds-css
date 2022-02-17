import '../../components/Button/index.css'

export default {
  title: 'Base Components/Button',
  argTypes: {
    variant: {
      options: ['primary', 'secundary', 'tertiary', 'danger', 'disable'],
      control: { type: 'radio' },
    },
    icon: {
      control: { type: 'boolean' },
    },
		content: {
			control: { type: 'text' },
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
				${content || 'Button'}
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
				${content || 'Button'}
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
				${content || 'Button'}
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
		">${content || 'Button'}</button>

		<button class="
			button
			variant--${variant ?? 'primary'}
			size--medium
		">${content || 'Button'}</button>

		<button class="
			button
			variant--${variant ?? 'primary'}
			size--small
		">${content || 'Button'}</button>
	`
}
