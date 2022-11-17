import React from 'react';

function ButtonLink(props) {
    //props => {classname: "O que alguém passar", href:"/"}
    console.log(props);
    return (
            <a href="varia" className={props.className}>
                Novo Vídeo
            </a>

    );
}

export default ButtonLink;