import './App.css'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'

function App() {

  const cards = [
    {
      image: "/images/item1.jpg",
      label: "KFC - King Bucket"
    },
    {
      image: "/images/item2.jpg",
      label: "Refuel Max"
    },
    {
      image: "/images/item3.jpg",
      label: "Express meal"
    },
  ]

  return (
    <>
      <div className='w-[95%] md:w-[90%] lg:w-[80%] mx-auto'>
        <Header
          fTitle={"Food"}
          lTitle={"Bag"}
          homeLabel={"Home"}
          cartLabel={"Cart"}
        />
        {cards.map(card => {
          return (
            <Cart
              image={card.image}
              label={card.label}
            />
          )
        })}
      </div>
    </>
  )
}

export default App