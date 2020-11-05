import React from 'react';
import GhostRow from './Ghost_Row.js'
import GhostRowHeader from './Ghost_Header.js'

function GhostGrid(props) {
    const { ghostData, evidenceData, evidence, ghost, setGhost } = props

    const evidenceCount = evidence.length
    const evidenceLength = evidenceData.length

    const possibleGhosts = evidenceCount ?
        ghostData.filter(g => {
            return evidence.reduce((acc, cur) => {
                return g.evidences.some(e => cur === e) ? acc : false
            }, true)
        }) :
        ghostData

    const possibleGhostsRender = possibleGhosts.map((g, i) => {
        const { ghost_id, ghost_type, evidences: ghost_evidence } = g

        const isSelected = ghost_id === ghost

        return (
            <GhostRow
                key={i}
                isSelected={isSelected}
                setGhost={() => setGhost(ghost_id)}
                type={ghost_type}
                ghostEvidence={ghost_evidence}
                foundEvidence={evidence}
                evidenceLength = {evidenceLength}
            />
        )
    })

    const hasPossibleGhosts = possibleGhosts.length

    const ghostGridClass = "ghost-grid"
    const emptyGridClass = "ghost-grid-empty"

    return (
        <div className={ghostGridClass}>
            {
                hasPossibleGhosts ? (
                    <>
                        <GhostRowHeader
                            evidenceData={evidenceData}
                            foundEvidence={evidence}
                        />
                        {possibleGhostsRender}
                    </>
                ) :
                (
                <div className={emptyGridClass}>
                    👀 Uh Oh! Looks like there's no ghosts here. 👀
                </div>
                )
            }
        </div>
    )
}

export default GhostGrid