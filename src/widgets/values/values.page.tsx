import Image from "next/image"
import React from "react"

import valuesImg from "@/shared/assets/img/about/values-img.png"
import services1Img from "@/shared/assets/img/services/1.png"
import services5Img from "@/shared/assets/img/services/5.png"

export const Values = () => {
	return (
		<div className="values">
			<div className="container">
				<h2 className="values__title" data-i18n="ourValues">
					Наши ценности
				</h2>
				<div className="values__block">
					<div className="values__block--item">
						<h3 data-i18n="cureHarmony">Гармония ухода и лечения</h3>
						<p data-i18n="helpRemoveMinuses">
							Помогаем устранить любые недостатки внешности и восстанавливаем
							внутренний баланс. Наша миссия — это единство красоты и здоровья,
							и ее с нами разделяют тысячи любимых клиентов.
						</p>
					</div>
					<div className="values__block--item">
						<Image
							className="border-radius-top-left"
							src={services1Img}
							alt="servicesImg"
						/>
					</div>
					<div className="values__block--item">
						<Image
							className="border-radius-bottom-right"
							src={valuesImg}
							alt="servicesImg"
						/>
					</div>
					<div className="values__block--item">
						<h3 data-i18n="proAndSkill">Профессионализм и талант</h3>
						<p data-i18n="collectComand">
							Мы собрали для вас уникальную команду из лучших врачей в своем
							профиле и гордимся каждым из них. Наши специалисты владеют лучшими
							доступными методиками — это лауреаты международных премий в
							области красоты и здоровья и постоянные участники конференций и
							симпозиумов.
						</p>
					</div>
					<div className="values__block--item">
						<h3 data-i18n="modernTech">Современные технологии</h3>
						<p data-i18n="workTech">
							Мы уделяем огромное внимание технике для работы. В распоряжении
							специалистов — новейшее оборудование и полный спектр аппаратов,
							которые позволяют нам предоставлять широчайший выбор услуг в
							области эстетической и антивозрастной медицины.
						</p>
					</div>
					<div className="values__block--item">
						<Image
							className="border-radius-top-right"
							src={services5Img}
							alt="servicesImg"
						/>
					</div>
				</div>
			</div>
			<div className="container-lg">
				<div className="values__love">
					<h3 className="values__love--title" data-i18n="loveYou">
						Case Nova любит вас
					</h3>
					<p className="values__love--text" data-i18n="inBigSpace">
						На огромной площади нашей клиники вы сможете получить полный спектр
						услуг: косметология, трихология, остеопатия, физиопроцедуры, SPA и
						даже гейзер и криосауна. От вас остается только расслабиться — мы
						сделаем все, чтобы вы чувствовали себя комфортно и преображались с
						каждой минутой, проведенной в Case Nova.
					</p>
				</div>
			</div>
		</div>
	)
}
