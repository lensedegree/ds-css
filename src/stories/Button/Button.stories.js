import '../../components/Button/index.css'

export default {
  title: 'Base Components/Button',
  argTypes: {
    variant: {
      options: ['basic', 'primary', 'secundary', 'tertiary', 'danger', 'disable'],
      control: { type: 'radio' },
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
    icon: {
      control: { type: 'boolean' },
    },
		content: {
			control: { type: 'text' },
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
  },
}

export const Button = ({ variant, size, icon, content, theme }) => {
  if (variant === 'basic') {
    return `
      <button class="
        button
        variant--basic
        theme--${theme}
      ">
        ${content || 'Button'}
        <span></span>
      </button>
    `
  }

  if (icon) {
    return `
      <button class="
        button
        variant--${variant ?? 'primary'}
        size--${size ?? 'large'}
        theme--${theme}
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
      size--${size ?? 'large'}
      theme--${theme}
    ">${content || 'Button'}</button>
  `
}
