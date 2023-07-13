import React from 'react';
import './Snacks.css';
import Navbar from '../../COMPONENTS/Navbar/Navbar';
import chips from '../../ASSETS/chips.jpeg'
import cake from '../../ASSETS/cake.jpeg'
import popcorn from '../../ASSETS/popcorn.png'
import pretzels from '../../ASSETS/pretzels.jpeg'
import sweets from '../../ASSETS/sweets.png'
import buns from '../../ASSETS/buns.jpeg'
const Snacks = () => {
  const snacks = [
    {
      name: 'Chips',
      image: chips,
      description: 'Crispy and savory potato chips.',
    },
    {
      name: 'Popcorn',
      image: popcorn,
      description: 'Classic movie theater-style popcorn.',
    },
    {
      name: 'Sweets',
      image: sweets,
      description: 'Crunchy and salty pretzels.',
    },
    {
      name: 'bun',
      image: buns,
      description: 'Crispy and savory potato chips.',
    },
    {
      name: 'cake',
      image: cake,
      description: 'Classic movie theater-style popcorn.',
    },
    {
      name: 'Pretzels',
      image: pretzels,
      description: 'Crunchy and salty pretzels.',
    },
    {
      name: 'Popcorn',
      image: popcorn,
      description: 'Classic movie theater-style popcorn.',
    },
    {
      name: 'Pretzels',
      image: pretzels,
      description: 'Crunchy and salty pretzels.',
    }
    
  ];

  return (
    <div className="snacks-page">
    <Navbar/>
    <div className="snacks-page-container">
      <h1>Snacks Menu</h1>
      <br/>
      <div className="snacks-container">
        {snacks.map((snack, index) => (
          <div className="snack-card" key={index}>
            <img src={snack.image} alt={snack.name} className="snack-image" />
            <div className="snack-info">
              <h3>{snack.name}</h3>
              <p>{snack.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Snacks;
