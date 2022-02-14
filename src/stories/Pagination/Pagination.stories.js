import '../../components/Pagination/index.css'
import '../../components/IconShape/index.css'

export default {
	title: 'Base Components/Pagination',
	argTypes: {
		variant: {
			options: ['default', 'basic', 'extended'],
			control: { type: 'radio' },
			defaultValue: 'default',
		},
		page: {
			control: { type: 'number' },
		},
		nPages: {
			control: { type: 'number' },
		},
	}
}

export const Pagination = ({ variant, page, nPages }) => {
	if(variant === 'default') {
		return `
			<div class="
				pagination
				variant--default
			">
				<div class="
					icon-shape
					shape--circle
					size--medium
					variant--outlined
				">
					<span class="material-icons-outlined md-24">
						arrow_back
						<style>
							.material-icons-outlined.md-24 {
								font-size: 24px;
							}
						</style>
					</span>
				</div>

				<div class="
					icon-shape
					shape--circle
					size--medium
					variant--outlined
				">
					<span class="material-icons-outlined md-24">
						arrow_forward
						<style>
							.material-icons-outlined.md-24 {
								font-size: 24px;
							}
						</style>
					</span>
				</div>
			</div>
		`
	} else if (variant === 'basic') {
		/* FIXME:
		 * Neste input o usuário não têm nenhum botão de "enviar"
		 * o número digitado no input
		 */
		return `
			<div class="
				pagination
				variant--basic
			">
				<div><span></span></div>
				<div><input value="${page}" /></div>
				<div><p>de ${nPages}</p></div>
				<div><span></span></div>
			</div>
		`
	}

	/* FIXME:
	 * O input está liberado para todos tipos, mas deve aceitar somente 
	 * números. Porém, quando setado type=number ele adiciona uma interface
	 * de números que não saiu com all: unset, além de permitir da mesma
	 * forma que seja adicionado letras.
	 */

	if(nPages < 7) {
		return `
			<div class="
				pagination
				variant--extended
			">
				<div>
					<span></span>
				</div>

				<div>
					<div class="
						${ page === 1 ? 'active' : 'deactive' }
					">1</div>
					<div class="
						${ page === 2 ? 'active' : 'deactive' }
					">2</div>
					${ 
						nPages >= 3 
						? `
							<div class="
								${ page === 3 ? 'active' : 'deactive' }
							">3</div>
						`
						: ''
					}
					${ 
						nPages >= 4 
						? `
							<div class="
								${ page === 4 ? 'active' : 'deactive' }
							">4</div>
						`
						: ''
					}
					${ 
						nPages >= 5 
						? `
							<div class="
								${ page === 5 ? 'active' : 'deactive' }
							">5</div>
						`
						: ''
					}
					${ 
						nPages === 6 
						? `
							<div class="
								${ page === 6 ? 'active' : 'deactive' }
							">6</div>
						`
						: ''
					}
				</div>

				<div>
					<span></span>
				</div>
			</div>
		`
	}

	if(page < 4) {
		return `
			<div class="
				pagination
				variant--extended
			">
				<div>
					<span></span>
				</div>

				<div>
					<div class="
						${page === 1 ? 'active' : 'deactive'}
					">1</div>
					<div class="
						${page === 2 ? 'active' : 'deactive'}
					">2</div>
					<div class="
						${page === 3 ? 'active' : 'deactive'}
					">3</div>
					<div class="deactive">4</div>
					<div class="deactive">5</div>

					<div class="horiz">
						<span></span>
					</div>

					<div class="deactive">${nPages}</div>
				</div>

				<div>
					<span></span>
				</div>

				<div>
					<input />
					<span></span>
				</div>
			</div>
		`
	} else if (page < nPages - 2) {
		return `
			<div class="
				pagination
				variant--extended
			">
				<div>
					<span></span>
				</div>

				<div>
					<div class="deactive">1</div>

					<div class="horiz">
						<span></span>
					</div>

					<div class="deactive">${page - 1}</div>
					<div class="active">${page}</div>
					<div class="deactive">${page + 1}</div>

					<div class="horiz">
						<span></span>
					</div>

					<div class="deactive">${nPages}</div>
				</div>

				<div>
					<span></span>
				</div>

				<div>
					<input />
					<span></span>
				</div>
			</div>
		`
	}

	return `
		<div class="
			pagination
			variant--extended
		">
			<div>
				<span></span>
			</div>

			<div>
				<div class="deactive">1</div>

				<div class="horiz">
					<span></span>
				</div>

				<div class="deactive">${nPages - 4}</div>
				<div class="deactive">${nPages - 3}</div>
				<div class="
					${page === nPages - 2 ? 'active': 'deactive'}
				">${nPages - 2}</div>
				<div class="
					${page === nPages - 1 ? 'active': 'deactive'}
				">${nPages - 1}</div>
				<div class="
					${page >= nPages ? 'active': 'deactive'}
				">${nPages}</div>
			</div>

			<div>
				<span></span>
			</div>

			<div>
				<input />
				<span></span>
			</div>
		</div>
	`
}
