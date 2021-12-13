import React, { useState } from 'react'
import { bookables } from "../../static.json";
const BookablesList = () => {
    const group = "Rooms";
    const bookablesGroup = bookables.filter(b => b.group === group);
    const [bookableIndex, setBookableIndex] = useState(1)
    return (
        <ul className="bookables">
            {bookablesGroup.map((b, i) => (
                <li key={b.title} className={i === bookableIndex ? "selected" : null}>
                    <button
                        className="btn" onClick={() => setBookableIndex(i)}
                    >
                        {b.title}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default BookablesList
