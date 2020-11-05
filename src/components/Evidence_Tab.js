import React from 'react';
import EvidenceButton from "./Evidence_Button.js"

function EvidenceTab(props) {
    const { ghostData, evidence, evidenceData, setEvidence } = props

    const isMaxed = evidence.length >= 3

    const selected = evidenceData.filter(e => evidence.some(i => e.evidence_id === i))
    const notSelected = evidenceData.filter(e => !evidence.some(i => e.evidence_id === i))

    const selectedButtons = selected.map(e => {
        const id = e.evidence_id
        const newEvidence = evidence.filter(e => e !== id)

        return (
            <EvidenceButton
                key={id}
                isSelected={true}
                evidence={e}
                setEvidence={() => setEvidence(newEvidence)}
            />
        )
    })

    const notSelectedButtons = notSelected.map((e, i) => {
        const id = e.evidence_id
        const newEvidence = evidence.concat(id)

        const evidenceCount = evidence.length

        const possibleGhosts = evidenceCount ?
            ghostData.filter(g => {
                return evidence.reduce((acc, cur) => {
                    return g.evidences.some(e => cur === e) ? acc : false
                }, true)
            }) :
            ghostData

        const isInPossible = possibleGhosts.some(pg => {
            return pg.evidences.some(e => {
                return e === id
            })
        })

        const isDisabled = isMaxed || !isInPossible

        return (
            <EvidenceButton
                key={id}
                isDisabled={isDisabled}
                isSelected={false}
                isRight={i >= notSelected.length/2}
                evidence={e}
                setEvidence={() => setEvidence(newEvidence)}
            />
        )
    })

    const hasFoundEvidence = evidence.length

    const evidenceTabClass = "evidence-tab"
    const selectedEvidenceClass = "evidence-tab-selected" 
    const notSelectedEvidenceClass = "evidence-tab-not-selected"

    return (
        <div className={evidenceTabClass}>
            <div className={"evidence-tab-row" + (!hasFoundEvidence ? " is-hide" : "")}>
                <div className={"evidence-tab-row-header"}>Found Evidence</div>
                <div className={selectedEvidenceClass}>
                    {selectedButtons}
                </div>
            </div>
            <div className={"evidence-tab-row"}>
                <div className={"evidence-tab-row-header"}>Possible Evidence</div>
                <div className={notSelectedEvidenceClass}>
                    {notSelectedButtons}
                </div>
            </div>

        </div>
    )
}

export default EvidenceTab