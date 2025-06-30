import React from 'react'
import IELTSFormat from './IELTSFormat';
import IeltsTable from './IeltsTable';
import SkillsTested from './SkillsTested';
import ScoreScale from './ScoreScale';

const START = () => {
  return (
    <>
      <IELTSFormat />
      <IeltsTable />
      <SkillsTested />
      <ScoreScale />
    </>
    )
  
}

export default START;