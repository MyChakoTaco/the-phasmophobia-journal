import React from 'react';

function GhostRow(props) {
    const {setGhost, isSelected, evidenceLength, type, ghostEvidence, foundEvidence} = props

    const ghostRowClass = "ghost-row" + (isSelected ? " is-selected" : "")
    const ghostRowTypeClass = "ghost-row-type"

    const evidenceList = []

    for (let i = 1; i <= evidenceLength; i++) {
        evidenceList.push(ghostEvidence.some(e => e === i))
    }

    const evidenceRender = evidenceList.map((e, i) => {
        const isFoundEvidence = foundEvidence.some(fe => fe === i+1)
        const ghostEvidenceClass = "ghost-row-evidence" + (isFoundEvidence ? " is-found" : "")

        return (
            <div
                key={i+1}
                className={ghostEvidenceClass}
            >
                {e ? "👻" : ""}
            </div>
        )
    })

    return (
        <div
            onClick={setGhost}
            className={ghostRowClass}
        >
            <div className={ghostRowTypeClass}>{type}</div>
            {evidenceRender}
        </div>
    )
}

export default GhostRow