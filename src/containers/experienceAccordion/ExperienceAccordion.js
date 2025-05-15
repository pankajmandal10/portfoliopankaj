import React, { Component } from "react";
import "./ExperienceAccordion.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../contexts/StyleContext";

class ExperienceAccordion extends Component {
  // static contextType = StyleContext;

  render() {
    const { isDark } = this.context;
    const theme = this.props.theme;

    if (workExperiences.display) {
      return (
        <div id="experience">
          <Fade bottom duration={1000} distance="20px">
            <div className="experience-container" id="workExperience">
              <div>
                <div className="experience-cards-div">
                  {workExperiences.experience.map((card, i) => {
                    return (
                      <ExperienceCard
                        key={i}
                        isDark={theme}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </Fade>
        </div>
      );
    }
    return null;
  }
}

export default ExperienceAccordion;
