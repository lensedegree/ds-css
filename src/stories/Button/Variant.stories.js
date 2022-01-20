import '../../components/Button/index.css'

export default {
  title: 'Base Components/Button',
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
			defaultValue: 'large',
    },
    icon: {
			options: ['false', 'true'],
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

export const Variants = ({ size, icon }) => {
	if (icon) {
		return `
			<button class="
				button 
				variant--basic
			">
				Descobrir mais
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
				variant--secundary
				size--${size ?? 'large'}
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
				variant--tertiary
				size--${size ?? 'large'}
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
				variant--danger
				size--${size ?? 'large'}
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
				variant--disable
				size--${size ?? 'large'}
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
			variant--basic
		">
			Descobrir mais
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
		">Button</button>

		<button class="
			button
			variant--secundary
			size--${size ?? 'large'}
		">Button</button>

		<button class="
			button
			variant--tertiary
			size--${size ?? 'large'}
		">Button</button>

		<button class="
			button
			variant--danger
			size--${size ?? 'large'}
		">Button</button>

		<button class="
			button
			variant--disable
			size--${size ?? 'large'}
		">Button</button>
	`
}