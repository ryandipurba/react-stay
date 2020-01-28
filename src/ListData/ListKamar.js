import React from 'react';

function ListKamar(props) {
    return (
        <div >
            <ul>
                {
                    props.items.map((item, index) =>
                        <li key={index} style={{ padding: 10 }}>
                            <img src={item.thumbnail} alt="kamar-hotel" width="300" height="150" /><br /> {item.nama}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default ListKamar;