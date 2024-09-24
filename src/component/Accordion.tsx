import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import config from '../config';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from 'axios';
import { MdDelete } from "react-icons/md"; // Using MdDelete as the delete icon
import Modal from 'react-modal';
import './accordion.scss';
import Xbutton from "../component/Xbutton"

type DetailAccordion = {
    title: string;
    major: string;
    field: string;
    topic: string;
}


export default function AccordionUsage({
    id,
    title,
    details
}: {
    id: string;
    title: string;
    details: DetailAccordion
}) {
    const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);

    const handleDelete = async() => {
        await axios
            .get(`${config.apiUrl}/article/delete-article/${id}`, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then((response) => {
                console.log(response)
            })
            .catch((e: any) => {
                console.log(e)
            });
    };

    const toggleResetModal = () => {
        setIsResetModalOpen(!isResetModalOpen);
    };

    return (
        <div className="accordionRoot">
        <Accordion>
            <AccordionSummary
            expandIcon={<MdKeyboardArrowDown />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
            {/* {title} */}
            <div className="accordionHeader">
                <span>{title}</span>
                <MdDelete className="deleteIcon" onClick={toggleResetModal} />
            </div>
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

        <Modal
            isOpen={isResetModalOpen}
            onRequestClose={toggleResetModal}
            contentLabel="忘记密码"
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    zIndex: 1000,
                },
                content: {
                    width: '30em',
                    height: '20em',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '1rem'
                },
            }}
        >
            <h2>您确定要删除文章吗？</h2>
            <Xbutton text="确认删除" outlined={false} width="25rem" onClick={handleDelete} startIcon={<></>} />
        </Modal>
        </div>
    );
}
