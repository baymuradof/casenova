import Image from "next/image"
import React from "react"

import deleteIconImg from "@/shared/assets/img/delete icon resume.svg"

const RegistrationFormPage = () => {
	return (
		<div className="question">
			<div className="container">
				<div className="question__blocks">
					<h2 className="title" data-i18n="workWithUs"></h2>
					<p data-i18n="leaveUrResume"></p>
					<form className="form">
						<div className="form__input-group">
							<input
								required
								className="form__input"
								type="text"
								name="name"
								value=""
								/* onkeyup="this.setAttribute('value', this.value);" */ autoComplete="off"
							/>
							<label className="form__input-label" data-i18n="yourName"></label>
						</div>

						<div className="form__input-group">
							<input
								minLength={9}
								maxLength={13}
								required
								className="form__input"
								type="tel"
								name="number"
								value=""
								/* onkeyup="this.setAttribute('value', this.value);" */ autoComplete="off"
							/>
							<label
								className="form__input-label"
								data-i18n="yourPhone"
							></label>
						</div>
						<div className="form__input-group dnone">
							<div className="form_resume">
								<input
									className="input"
									type="file"
									id="uploadBtn"
									name="resume"
								/>
								<label
									className="label"
									htmlFor="uploadBtn"
									data-i18n="attachFile"
								></label>
							</div>
							<div className="required"></div>
						</div>
						<div className="form__input-group dvisible" id="none">
							<div className="form_resume deleted_input">
								<span className="img_text">.</span>
								<Image className="delete_btn" src={deleteIconImg} alt="" />
							</div>
							<div className="required"></div>
						</div>
						<button type="submit" data-i18n="sendResume"></button>
					</form>
				</div>
			</div>
		</div>
	)
}
export default RegistrationFormPage
