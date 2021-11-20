
import React, { useState } from 'react'

export default function Users() {
    // const user = [  {1},{2},{3}  ];
    const [user, setUser] = useState([
        {
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "id": 3,
            "title": "est deserunt velit ipsam",
            "thumbnailUrl": "https://via.placeholder.com/150/771732"
        }
    ]);
    return (
        <div>
            <h3>Users component</h3>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">title</th>
                        <th scope="col">thumbnailUrl</th>
                    </tr>
                </thead>
                <tbody>
                {
                        user.map((item, i) =>
                             <tr>
                             <td key={i}>{item.id}</td>
                             <td key={i}>{item.title}</td>
                             <td key={i}><img src={item.thumbnailUrl} width="80"/></td>
                         </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
