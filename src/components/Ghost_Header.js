import React from 'react';

function GhostHeader(props) {
    const {evidenceData, foundEvidence} = props
    const ghostHeaderClass = "ghost-header"
    const ghostTypeClass = "ghost-header-type"

    const evidenceRender = evidenceData.map(e => {
        const isFoundEvidence = foundEvidence.some(fe => fe === e.evidence_id)
        const ghostEvidenceClass = "ghost-header-evidence" + (isFoundEvidence ? " is-found" : "")

        const evidenceName = e.evidence_name === "Freezing Temperatures" ? "Freezing" : e.evidence_name

        return (
            <div
                key={e.evidence_id}
                className={ghostEvidenceClass}
            >
                {evidenceName}
            </div>
        )
    })

    return (
        <div className={ghostHeaderClass}>
            <div className={ghostTypeClass}>Ghosts</div>
            {evidenceRender}
        </div>
    )
}

export default GhostHeader