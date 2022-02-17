import '../../components/Button/index.css'

export default {
  title: 'Base Components/Button',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
    icon: {
			options: ['false', 'true'],
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

export const Variants = ({ size, icon, content }) => {
	if (icon) {
		return `
			<button class="
				button 
				variant--basic
			">
				${content || 'Button'}
				<span></span>
			</button>
		
			<button class="
				button
				variant--primary
				size--${size ?? 'large'}
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
				variant--secundary
				size--${size ?? 'large'}
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
				variant--tertiary
				size--${size ?? 'large'}
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
				variant--danger
				size--${size ?? 'large'}
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
				variant--disable
				size--${size ?? 'large'}
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
			variant--basic
		">
			${content || 'Button'}
			<span class="material-icons md-16">
				arrow_forward
				<style>
					.material-icons.md-16 {
						font-size: 16px;
					}
				</style>
			</span>
		</button>

		<button class="
			button
			variant--primary
			size--${size ?? 'large'}
		">${content || 'Button'}</button>

		<button class="
			button
			variant--secundary
			size--${size ?? 'large'}
		">${content || 'Button'}</button>

		<button class="
			button
			variant--tertiary
			size--${size ?? 'large'}
		">${content || 'Button'}</button>

		<button class="
			button
			variant--danger
			size--${size ?? 'large'}
		">${content || 'Button'}</button>

		<button class="
			button
			variant--disable
			size--${size ?? 'large'}
		">${content || 'Button'}</button>
	`
}