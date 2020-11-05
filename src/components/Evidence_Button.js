import { useState } from 'react';

function EvidenceButton(props) {
    const [isHover, setIsHover] = useState(false)
    const isSelected = props.isSelected
    const isRight = props.isRight

    const evidence = props.evidence
    const isDisabled = props.isDisabled

    const name = evidence.evidence_name
    const description = evidence.description

    const setEvidence = props.setEvidence

    const evidenceButtonWrapper = "evidence-button-wrapper"
    const evidenceButtonClass = "evidence-button" + (isHover ? " is-hover" : "") + (isSelected ? " is-found" : "")
    const evidenceHelperClass = "evidence-helper" + (isHover ? " is-hover" : "")

    return (
        <div className={evidenceButtonWrapper}>
            <button
                className={evidenceButtonClass}
                onClick={() => setEvidence()}
                disabled={isDisabled}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {isSelected ? "-" : "+"} {name}
            </button>
            {
                !isSelected ? (
                    <div className={evidenceHelperClass + (isRight ? " is-right" : "")}>
                        {
                            !isDisabled ? 
                            description :
                            "Based on your evidence, there are no possible ghosts that use this evidence."
                        }
                    </div>
                ) : ""
            }

        </div>
    )
}

EvidenceButton.defaultProps = ({
    isDisabled: false
})

export default EvidenceButton