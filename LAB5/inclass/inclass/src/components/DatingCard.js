import React, {useState, useEffect} from 'react'
// import Dating from 'react-tinder-card'
// import './DatingCards.css'
import axios from './axios'
// import axiosClient from '../api/axiosClient'
import axiosClient from '../api/productApi'

const DatingCards = () => {
    const [people, setPeople] = useState([])
    useEffect(() => {
        async function fetchData() {
            const reg = await axios.get("/dating/cards")
            setPeople(reg.data)
        }
        fetchData()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("receiving" + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen!!")
    }

    return (
        <div className="datingCards">
            <div className="datingCards_container">
                {people.map((person) => (
                    <DatingCards
                        className="swipe"
                        key={person.name}
                        prevenSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCards
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})`}} classname="datingCards">
                            <h3>{person.name}</h3>
                        </div>
                        </DatingCards>

                ))}
            </div>
        </div>
    )
}

export default DatingCards