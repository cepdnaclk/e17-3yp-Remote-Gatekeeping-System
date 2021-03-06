import React, {useState , useContext} from "react"
import { db } from "../../config/fbConfig"
import { DataContext } from '../../contexts/DataContext'

const Insert = () => {

    const [msg, setMsg] = useState({
        'event' : '0',
        'from' : 'Gate' ,
        'to' : 'Achintha',
        'msgUrl' : 'testUrl',
        'msgType' : 'Image',
        'time': (new Date())
    })
    const {getMessages,getUserInfo } = useContext(DataContext)

    const handleChange =  (e) =>{

        const  { id , value} = e.target
        //console.log(e.target.value)
        setMsg({
            ...msg,
            [id] : value
        })
        
    }

    const  handleSubmit = async (e) => {
        e.preventDefault();
        setMsg({
            ...msg,
            'event' : Math.floor(Math.random() * 10),
            'time': (new Date()).toJSON()
        })
        try {
            const newMsgId = db.ref().child('messages/-MlnzDJ-CHZZmT3250tN').push().key
            const update = {}
            update['/messages/-MlnzDJ-CHZZmT3250tN/'+newMsgId] = msg 
            await db.ref().update(update)
            //console.log('Success')
            alert("Success")
 
        }catch(err){
            console.log(err.message)
        }
    }

    const click =  async (e)=>{
        e.preventDefault();
        // storage.ref().child('/users/HmFPfyd0uxU6JzsoKEAWQfL58TQ2/Screenshot (362).png').getDownloadURL()
        // .then((url)=> {
        //     console.log('url',url);
        // })
        const info =  await getUserInfo('something')
        console.log('ii :' , info)
        const messages = await getMessages(info.nodeId)
        console.log(messages)
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                {/*Title SignedUp*/}
                <div className="row">
                    <h5 className="col s12 m6 grey-text text-darken-3">Insert Message</h5>
                </div>
                
                {/* input fileds  */}
                <div className="row">
                    {/* first name */}
                    <div className="input-field col s12 m6">
                        <label htmlFor="from">from</label>
                        <input type="text" id="from" onChange={handleChange}/>
                    </div>

                    {/* last name */}
                    <div className="input-field col s12 m6">
                        <label htmlFor="to">to</label>
                        <input type="text" id="to" onChange={handleChange}/>
                    </div>

                    <div className="input-field col s12 m10">
                        <button className="btn grey darken-2 z-depth-0" id="signup-btn">Insert</button>
                    </div>
                </div>

                 
            </form>
            <div onClick = {click}>
                        <button className="btn grey darken-2 z-depth-0" id="clieckBtn">Messages</button>
            </div>
        </div>
    )
}

export default Insert
