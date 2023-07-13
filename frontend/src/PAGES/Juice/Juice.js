import React from 'react';
import './Juice.css';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import mango from '../../ASSETS/mango.jpeg'
import apple from '../../ASSETS/apple.png'
import orange from '../../ASSETS/orange.jpeg'
import coke from '../../ASSETS/coke.png'
import maaza from '../../ASSETS/maaza.jpeg'
import sprite from '../../ASSETS/sprite.png'
const Juice = () => {
  const juices = [
    {
      name: 'Orange Juice',
      image: orange,
      description: 'Freshly squeezed orange juice.',
    },
    {
      name: 'Apple Juice',
      image: apple,
      description: 'Crisp and refreshing apple juice.',
    },
    {
      name: 'Mango Juice',
      image: mango,
      description: 'Delicious and tropical mango juice.',
    },
    {
      name: 'Coke',
      image: coke,
      description: 'Delicious and Refreshing',
    },
    {
      name: 'Maaza',
      image: maaza,
      description: 'Delicious and Refreshing',
    },
    {
      name: 'Coke',
      image: coke,
      description: 'Delicious and Refreshing',
    },
    {
      name: 'Sprite',
      image: sprite,
      description: 'Delicious and Refreshing',
    },
    {
      name: 'Sprite',
      image: sprite,
      description: 'Delicious and Refreshing',
    }
  ];

  return (
    <div className="juice-page">
    <Navbar/>
    <div className="juice-page-container">
      <h1>Juice Menu</h1>
      <br/>
      <div className="juice-container">
        {juices.map((juice, index) => (
          <div className="juice-card" key={index}>
            <img src={juice.image} alt={juice.name} className="juice-image" />
            <div className="juice-info">
              <h3>{juice.name}</h3>
              <p>{juice.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Juice;
