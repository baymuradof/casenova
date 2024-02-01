import Image from "next/image"
import React from "react"
import { useTranslation } from "react-i18next"

import deleteIconImg from "@/shared/assets/img/delete icon resume.svg"

export const RegistrationForm = () => {
	const { t } = useTranslation()
	return (
		<div className="question">
			<div className="container">
				<div className="question__blocks">
					<h2 className="title">{t("workWithUs")}</h2>
					<p>{t("leaveUrResume")}</p>
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
							<label className="form__input-label">{t("yourName")}</label>
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
							<label className="form__input-label">{t("yourPhone")}</label>
						</div>
						<div className="form__input-group dnone">
							<div className="form_resume">
								<input
									className="input"
									type="file"
									id="uploadBtn"
									name="resume"
								/>
								<label className="label" htmlFor="uploadBtn">
									{t("attachFile")}
								</label>
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
						<button type="submit">{t("sendResume")}</button>
					</form>
				</div>
			</div>
		</div>
	)
}
