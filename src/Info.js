import { useEffect, useState } from "react"

const Info = () => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    // 언마운트될 때 호출됨
    useEffect(() => {
     console.log('effect')   
     return () => {
         console.log('cleanup')   
     }
    },[])

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onChangeNickname = e => {
        setNickname(e.target.value)
    }

    return (
        <div>
        <div>
            <input value={name} onChange={onChangeName}/>
            <input value={nickname} onChange={onChangeNickname}/>
        </div>
        <div>
            <div>
                <b>이름: </b> {name}
            </div>
            <div>
                <b>닉네임: </b> {nickname}
            </div>
        </div>
        </div>
    )

}
export default Info;