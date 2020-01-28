import React from 'react';
import ListKamar from '../ListData/ListKamar';

function MenuKamar() {
    const kamar = [
        {
            nama: "Beautiful Room",
            thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5J6moF4zJncvfZtJ1ZyfWIRL7ftAsPMrWlwQhcJQ6aGgrB8I&s"
        },
        {
            nama: "Clean Room",
            thumbnail: "http://4.bp.blogspot.com/-OVR3uW2qtv8/VQG9qgSoccI/AAAAAAAAA54/Pheo8Q8KO2o/s1600/Interior%2BDesign%2BIdeas%2BModern%2BMinimalist%2BHotel%2BRoom.jpg"
        },
        {
            nama: "Snappy Room",
            thumbnail: "https://www.silverkris.com/wp-content/uploads/2019/03/019-DS-Nobu.jpg"
        },
        {
            nama: "Big Room",
            thumbnail: "https://www.italianbark.com/wp-content/uploads/2018/01/Muji-Hotel-Shenzhen-02-hotel-room-design-trends-italianbark-.jpg"
        },
        {
            nama: "Minimalist Room",
            thumbnail: "https://newsfindhotel.b-cdn.net/wp-content/uploads/2019/09/the-easy-way-to-bag-a-hotel-room-upgrade-for-no-extra-cost-according-to-a-travel-expert-780x405.jpg"
        },
        {
            nama: "Huge Room",
            thumbnail: "https://7desainminimalis.com/wp-content/uploads/2014/07/Beautiful-Hotel-Bedroom-For-Minimalist-Home.jpg"
        }
    ]
    return (
        <div>
            <ListKamar items={kamar} />
        </div>
    );
}

export default MenuKamar;