import React from "react";
import "./Chat.scss"
import Avatar from '@mui/material/Avatar';
import logo from '../../assets/logo.svg';

export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";

  return (
    <>
      <div className="messageRow">
        <Avatar
          alt="Xsource ai"
          className="avatar"
          src={logo}
        ></Avatar>
        <div>
          <div className="messageBlue">
            <div>
              <p className="messageContent">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export const MessageRight = (props) => {
  const message = props.message ? props.message : "no message";

  return (
    <div className="messageRowRight">
      <div className="messageDeepBlue">
        <p className="messageContent" style={{color: 'white'}}>{message}</p>
      </div>
    </div>
  );
};
