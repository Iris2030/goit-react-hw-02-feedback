import React from "react";
import s from './FeedbackOptions.module.css'
import PropTypes from "prop-types";
 

export default function FeedbackOptions ({goodRender, neutralRender,badRender}) {
   return <div> <button style={{backgroundColor : 'rgb(159, 240, 143)'}} className={s.button} onClick={goodRender}>Good</button>
    <button style={{backgroundColor : 'rgb(240, 238, 143)'}} className={s.button} onClick={neutralRender}>Neutral</button>
    <button style={{backgroundColor : 'rgb(241, 143, 125)'}} className={s.button} onClick={badRender}>Bad</button>
    </div>
}

FeedbackOptions.propTypes={
    goodRender: PropTypes.func.isRequired,
    neutralRender: PropTypes.func.isRequired,
    badRender: PropTypes.func.isRequired,
}