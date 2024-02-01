import React from "react"
import { useTranslation } from "react-i18next"

export const Questions = () => {
	const { t } = useTranslation()

	return (
		<div className="questions">
			<div className="container">
				<div className="questions__block">
					<h2>{t("ifQuestionsArise")}</h2>
					<p>{t("interestIsNormal")}</p>
					<form>
						<div className="form__input-group">
							{/* TODO: fix onKeyup */}
							<input
								required
								className="form__input"
								type="text"
								name="name"
								value=""
								/* onkeyup="this.setAttribute('value', this.value);"*/ autoComplete="off"
							/>
							<label className="form__input-label">{t("yourName")}</label>
						</div>

						<div className="form__input-group">
							<input
								required
								className="form__input"
								type="tel"
								minLength={9}
								maxLength={13}
								name="phone"
								value=""
								/* onkeyup="this.setAttribute('value', this.value);"*/ autoComplete="off"
							/>
							<label className="form__input-label">{t("yourPhone")}</label>
						</div>
						<button type="submit">{t("orderBackCall")}</button>
					</form>
				</div>

				{/* <!-- msg when form is submitted --> */}
				{/* @include('contacts_form_done.html') */}
			</div>
		</div>
	)
}
