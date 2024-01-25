import Image from "next/image"
import React from "react"

import closeImg from "@/shared/assets/img/close.png"

export const ModalComponent = () => {
	return (
		<div id="mainModal2" className="modal_bg equipment2">
			<button id="closeModal" className="modal_btn">
				<Image src={closeImg} alt="close" />
			</button>
			<div className="modal_main">
				<div className="modal_body">
					<div className="machinery__body">
						<h3 className="machinery__body--title"> </h3>
					</div>
					<div className="subservices"></div>
				</div>
				<div className="modal_middle_body" id="2">
					{/* @include('alma_eqp.html') */}
				</div>
				<div className="modal_middle_body" id="6">
					{/* @include('healite_2.html') */}
				</div>
				<div className="modal_middle_body" id="3">
					{/* @include('lutronic_genius.html') */}
				</div>
				<div className="modal_footer">
					{/* @include('questions.html') */}
					{/* <!-- msg when form is submitted --> */}
					{/* @include('contacts_form_done.html') */}
				</div>
			</div>
		</div>
	)
}
