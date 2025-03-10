import React from 'react'

const Card = () => {
    const ebooks = [
        {
            name: "Rich Dad Poor Dad",
            image: "https://ia600601.us.archive.org/BookReader/BookReaderImages.php?zip=/19/items/RichDadPoorDadEBook_201803/Rich%20Dad%20Poor%20Dad%20eBook_jp2.zip&file=Rich%20Dad%20Poor%20Dad%20eBook_jp2/Rich%20Dad%20Poor%20Dad%20eBook_0000.jp2&id=RichDadPoorDadEBook_201803&scale=4&rotate=0",
            price: "₹300",
        },
        {
            name: "Can't Hurt Me",
            image: "https://m.media-amazon.com/images/I/81MtKRJ1HLL._UF1000,1000_QL80_.jpg",
            price: "₹450",
        },
        {
            name: "Atomic Habits",
            image: "https://m.media-amazon.com/images/I/81F90H7hnML.jpg",
            price: "₹200",
        },
        {
            name: "Deep Work",
            image: "https://m.media-amazon.com/images/I/61BSGNwIMuL._AC_UF1000,1000_QL80_.jpg",
            price: "₹250",
        },
        {
            name: "The 48 Laws of Power",
            image: "https://m.media-amazon.com/images/I/61F-bq53kOL.jpg",
            price: "₹350",
        },
        {
            name: "The Intelligent Investor",
            image: "https://m.media-amazon.com/images/I/71WWw6d85JL.jpg",
            price: "₹400",
        },
        {
            name: "The Psychology of money",
            image: "https://m.media-amazon.com/images/I/81Dky+tD+pL.jpg",
            price: "₹350",
        },
        {
            name: "Zero to One",
            image: "https://m.media-amazon.com/images/I/61PDzIhVLnL._AC_UF1000,1000_QL80_.jpg",
            price: "₹400",
        },
        {
            name: "Think and Grow Rich",
            image: "https://m.media-amazon.com/images/I/61IxJuRI39L.jpg",
            price: "₹450",
        },
        {
            name: "The Millionaire Fastline",
            image: "https://m.media-amazon.com/images/I/81IM+frfVSL._AC_UF1000,1000_QL80_.jpg",
            price: "₹350",
        },
    ]
    return (
        <div className='grid md:grid-cols-5 grid-cols-2 justify-items-center'>
            {ebooks.map((ebook) => (
                <div key={ebook.name}>
                    <img className='w-40 md:w-100 h-70 md:h-100 object-contain' src={ebook.image} alt={ebook.name} />
                    <div className="p-1">
                        <h2>{ebook.name}</h2>
                        <p>{ebook.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card
