import Image from 'next/image';
import React, { useState } from 'react';

type PortfolioItem = {
  id: number;
  category: string[];
  imageUrl: string;
  title: string;
  description: string;
};

type Props = {
  showHeading?: boolean;
};

// Sample portfolio data
// const portfolioItems: PortfolioItem[] = [


//   {
//     id: 1,
//     category: ['all', 'Pre Engnering Building'],
//     imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-29-at-6.00.43-PM.jpeg',
//     title: 'Building Work, place',
//     description: 'construction',
//   },

//   {
//     id: 2,
//     category: ['all', 'Pre Engnering Building'],
//     imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/DSC04432.webp',
//     title: 'Agricultural Shed, place',
//     description: 'construction',
//   },
//   {
//     id: 3,
//     category: ['all', 'Pre Engnering Building'],
//     imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/Asia-Paints-3-scaled.jpg',
//     title: 'Warehouse Work, place',
//     description: 'construction',
//   },
//   {
//     id: 4,
//     category: ['all', 'Pre Engnering Building'],
//     imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/walk-in-cold-storage-room-freezer-500x500-1.webp',
//     title: 'Cold storage Work, place',
//     description: 'construction',
//   },

//   // {
//   //   id: 1,
//   //   category: ['all', 'following'],
//   //   imageUrl: '/images/1.jpg.webp',
//   //   title: 'Desert Work, Dubai',
//   //   description: 'construction',
//   // },
//   // {
//   //   id: 2,
//   //   category: ['all', 'latest', 'popular', 'upcoming'],
//   //   imageUrl: '/images/2.jpg.webp',
//   //   title: 'Office Space, London',
//   //   description: 'construction',
//   // },
//   // {
//   //   id: 3,
//   //   category: ['all', 'latest', 'following'],
//   //   imageUrl: '/images/3.jpg.webp',
//   //   title: 'Building Project, Tokyo',
//   //   description: 'construction',
//   // },
//   // {
//   //   id: 4,
//   //   category: ['all', 'latest', 'upcoming'],
//   //   imageUrl: '/images/4.jpg.webp',
//   //   title: 'Modern Architecture, NYC',
//   //   description: 'construction',
//   // },
// ];


const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: ['all', 'Pre Engnering Building'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-29-at-6.00.43-PM.jpeg',
    title: 'Pre Engnering Building',
    description: 'construction',
  },
  {
    id: 2,
    category: ['all', 'Pre Engnering Building'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/DSC04432.webp',
    title: 'Agricultural Shed',
    description: 'construction',
  },
  {
    id: 3,
    category: ['all', 'Pre Engnering Building'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/Asia-Paints-3-scaled.jpg',
    title: 'Warehouse',
    description: 'construction',
  },
  {
    id: 4,
    category: ['all', 'Pre Engnering Building'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/walk-in-cold-storage-room-freezer-500x500-1.webp',
    title: 'Cold storage',
    description: 'construction',
  },
  {
    id: 5,
    category: ['all', 'Pre Engnering Building'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/vivan-group-warehousing-services1.jpg',
    title: 'Industrial Shed',
    description: 'construction',
  },
  {
    id: 6,
    category: ['all', 'Turnkey Projects'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/Bridge-5-1.jpg',
    title: 'Sugar Mill',
    description: 'turnkey projects',
  },
  {
    id: 7,
    category: ['all', 'Turnkey Projects'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/ADM-Joinflex-Chakan-1-768x346.jpg',
    title: 'Car Parking',
    description: 'turnkey projects',
  },
  {
    id: 8,
    category: ['all', 'Turnkey Projects'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/Metro-Station-Pune-1-768x346.jpg',
    title: 'Railway Station',
    description: 'turnkey projects',
  },
  {
    id: 9,
    category: ['all', 'Solar Panel Mounting Structures'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/10/41kOrH5QNLL._AC_UF10001000_QL80_-768x666.jpg',
    title: 'solar 1',
    description: 'solar panel mounting structures',
  },
  {
    id: 10,
    category: ['all', 'Solar Panel Mounting Structures'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/10/solar-panel-mounting-structure.jpg',
    title: 'solar 2',
    description: 'solar panel mounting structures',
  },
  {
    id: 11,
    category: ['all', 'Farmhouse Structures'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/Sukhi-FarmHouse-Vadgoan-Maval-2.jpg',
    title: 'Farmhouse Structures 1',
    description: 'farmhouse structures',
  },
  {
    id: 12,
    category: ['all', 'Farmhouse Structures'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/Sukhi-FarmHouse-Vadgoan-Maval.jpg',
    title: 'Farmhouse Structures 2',
    description: 'farmhouse structures',
  },
  {
    id: 13,
    category: ['all', 'Resort Structures'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/Resort-Work-Vellha.jpg',
    title: 'Resort Structures 1',
    description: 'resort structures',
  },
  {
    id: 14,
    category: ['all', 'Resort Structures'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/Resort-Work-Vellha.jpg',
    title: 'Resort Structures 2',
    description: 'resort structures',
  },
  {
    id: 15,
    category: ['all', 'Light Structural Buildings'],
    imageUrl: 'https://dmansteelfab.in/wp-content/uploads/2023/12/light-steel-structure-workshop.jpg',
    title: 'Light Structural Buildings 1',
    description: 'light structural buildings',
  }
];




const Portfolio = ({ showHeading = true }: Props) => {
  const filterList = ['Pre Engnering Building', 'Turnkey Projects', 'Solar Panel Mounting Structures', 'Farmhouse Structures', 'Resort Structures'];

  // Set the initial filter to the first item of the filter list
  const [activeFilter, setActiveFilter] = useState<string>(filterList[0]);

  // Get filtered portfolio items based on activeFilter
  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category.includes(activeFilter));

  return (
    <section className="portfolio_area area-padding" id="portfolio">
      <div className="container">
        {showHeading && (
          <div className="area-heading">
            <h3 className="line">Our Recent Projects</h3>
            <p>Together female let signs for fish fowl may first.</p>
          </div>
        )}

        {/* Portfolio Filter Tabs */}
        <div className="filters portfolio-filter">
          <ul>
            {filterList.map(filter => (
              <li
                key={filter}
                className={activeFilter === filter ? 'active' : ''}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </li>
            ))}
          </ul>
        </div>

        {/* Portfolio Items */}
        <div className="filters-content">
          <div className="row portfolio-grid">
            {filteredItems.map(item => (
              <div key={item.id} className={`col-lg-6 col-md-6 all ${item.category.join(' ')}`}>
                <div className="single_portfolio">
                  <Image
                    width={555}
                    height={419}
                    className="img-fluid w-100"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <div className="short_info">
                    <p>{item.description}</p>
                    <h4>
                      <a href="portfolio-details.html">{item.title}</a>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Portfolio;