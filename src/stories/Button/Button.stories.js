import '../../components/Button/index.css'

export default {
  title: 'Base Components/Button',
  argTypes: {
    variant: {
      options: ['basic', 'primary', 'secundary', 'tertiary', 'danger', 'disable'],
      control: { type: 'radio' },
			defaultValue: 'primary',
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
			defaultValue: 'large',
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
}

export const Button = ({ variant, size, icon, content }) => {
  if (variant === 'basic') {
    return `
      <button class="
        button
        variant--basic
      ">
        ${content}
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
      size--${size ?? 'large'}
    ">${content}</button>
  `
}
