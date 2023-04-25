import { useState } from "react"
import arrow from "../src/img/arrow.png"


function Message(){

    const [message, setMessage] = useState([
        {
            id: 1,
            text: 'Привет',
            author: 'Admin',
            side: 'left'
        },
        {
            id: 2,
            text: 'Привет',
            author: 'user',
            side: 'right'
        },
        {
            id: 3,
            text: 'Как дела?',
            author: 'Admin',
            side: 'left'
        },
        {
            id: 4,
            text: 'Хорошо, а у тебя?',
            author: 'user',
            side: 'right'
        },
        {
            id: 5,
            text: 'Отлично',
            author: 'Admin',
            side: 'left'
        }
        
    ])

    const handlerRomeve = (id) =>{
        setMessage(message.filter(item => {
            if(item.id === id){
                return false
            }
            return true
        }))
    }

    const hendlerLeftSide = (id) => {
    setMessage((prevMesseg) => {
      return prevMesseg.map((msg) => {
        if (msg.id === id) {
          return {
            ...msg,
            side: msg.side === "left" ? "right" : "left",
          };
        }
        return msg;
      });
    });
  };

  const hendlerRightSide = (id) => {
    setMessage((prevMessege) => {
      return prevMessege.map((msge) => {
        if (msge.id === id) {
          return {
            ...msge,
            side: msge.side === "right" ? "left" : "right",
          };
        }
        return msge;
      });
    });
  };



    return (
       <div>
        {
            message.map(item => {
                return (
                    <div className={`row ${item.side === 'right' ? 'justify-content-end' : ''} `}>
                    <div className="col-5 mb-3">
                            <div className={`inbox p-2 rounded-3 text-white ${item.side === 'right' ? 'bg-success' : 'bg-primary'}`}>
                                {item.text}
                                <div>
                                {item.author}
                                </div>
                                <button className="btn btn-danger" onClick={() => handlerRomeve(item.id)}>
                                    X
                                </button>
                                <img src={arrow} className="left" onClick={() => hendlerLeftSide(item.id)}></img>
                                <img src={arrow} className="right" onClick={() => hendlerRightSide (item.id)} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })
        }
       </div>
    )
}

export default Message
