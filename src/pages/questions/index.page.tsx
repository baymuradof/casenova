import React from "react"

const QuestionsPage = () => {
	return (
		<div className="questions">
			<div className="container">
				<div className="questions__block">
					<h2 data-i18n="ifQuestionsArise"></h2>
					<p data-i18n="interestIsNormal"></p>
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
							<label className="form__input-label" data-i18n="yourName"></label>
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
							<label
								className="form__input-label"
								data-i18n="yourPhone"
							></label>
						</div>
						<button type="submit" data-i18n="orderBackCall"></button>
					</form>
				</div>

				{/* <!-- msg when form is submitted --> */}
				{/* @include('contacts_form_done.html') */}
			</div>
		</div>
	)
}
export default QuestionsPage
