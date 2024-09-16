import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from '@mui/material/Button';
import './accordion.scss';

type DetailAccordion = {
    title: string;
    major: string;
    field: string;
    topic: string;
}

export default function AccordionUsage({
    title,
    details
}: {
    title: string;
    details: DetailAccordion
}) {
  return (
    <div className="accordionRoot">
      <Accordion>
        <AccordionSummary
          expandIcon={<MdKeyboardArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>

        <AccordionDetails>
            标题: {details.title}
        </AccordionDetails>
        <AccordionDetails>
            研究领域: {details.field}
        </AccordionDetails>
        <AccordionDetails>
            专业: {details.major}
        </AccordionDetails>
        <AccordionDetails>
            话题: {details.topic}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
