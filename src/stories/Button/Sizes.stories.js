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
    }
  },
  decorators: [(story) => `
    <div style="
      display: flex;
      flex-direction: column;
    
      align-items: flex-start;
    
      padding: 30px;
      
      gap: 30px;
    ">
      ${story()}
    </div>
  `]
}

export const Sizes = ({ variant, icon }) => {
	if (icon) {
		return `
			<button class="
				button
				variant--${variant ?? 'primary'}
				size--large
			">
				Download
				<span class="material-icons-outlined md-18">
          file_download
          <style>
            .material-icons.md-18 {
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
				Download
				<span class="material-icons-outlined md-18">
          file_download
          <style>
            .material-icons.md-18 {
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
				Download
				<span class="material-icons-outlined md-18">
          file_download
          <style>
            .material-icons.md-18 {
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
		">Button</button>

		<button class="
			button
			variant--${variant ?? 'primary'}
			size--medium
		">Button</button>

		<button class="
			button
			variant--${variant ?? 'primary'}
			size--small
		">Button</button>
	`
}
