import React, { useRef } from 'react'
import IsVisible from 'react-is-visible'
import { Fade } from 'react-reveal'
import { skills } from '../../data/skills.json'
import { useContainerDimensions } from '../../hooks'
import Section from '../section/Section'
import './skills.css'

const Skills = () => {
	const skillsWrapper = useRef()
	const { width } = useContainerDimensions(skillsWrapper)

	return (
		<Section title="Skills">
			<div className="skills-content">
				<Fade duration={1000}>
					<div style={{ position: 'relative', width: '100%', maxWidth: '90%' }}>
						<IsVisible once>
							{(isVisibleSkillsWrapper) => (
								<div
									className="skills-wrapper"
									style={
										isVisibleSkillsWrapper
											? {
												transition: '1s opacity ease-in-out',
												transform: `translateX(0)`,
												opacity: 1,
											}
											: {}
									}
								>
									{/* <h2>Skills</h2> */}
									<ul className="skills" ref={skillsWrapper} sty>
										{skills.map((skills) => {
											return (
												<li className="skill-bar-wrapper" key={skills.skillName}>
													<div className="skill-name">{skills.skillName}</div>
												</li>
											)
										})}
									</ul>
								</div>
							)}
						</IsVisible>
					</div>
				</Fade>
			</div>
		</Section>

	)
}

export default Skills
