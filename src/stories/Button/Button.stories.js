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
  },
}

export const Button = ({ variant, size, icon, content }) => {
  if (variant === 'basic') {
    return `
      <button class="
        button
        variant--basic
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
    ">${content || 'Button'}</button>
  `
}
