import './App.css'
import PricingCard from './components/PricingCard/PricingCard'

function App() {

  const priceCards = [
    {
      id: 1,
      label: "Free Plan",
      num: "$0",
      date: "/month",
      status: "Avaliable Features",
      benefits: [
        "Access to selected free courses.",
        "Limited course materials and resources.",
        "Basic community support.",
        "No certification upon completion.",
        "Ad-supported platform.",
        "Access to exclusive Pro Plan community forums.",
        "Early access to new courses and updates.",
      ]
    },
    {
      id: 2,
      label: "Pro Plan",
      num: "$79",
      date: "/month",
      status: "Avaliable Features",
      benefits: [
        "Unlimited access to all courses.",
        "Unlimited course materials and resources.",
        "Priority support from instructors.",
        "Course completion certificates.",
        "Ad-free experience.",
        "Access to exclusive Pro Plan community forums.",
        "Early access to new courses and updates.",
      ]
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-[20px] md:p-[50px] rounded-[12px] my-[30px]">
        {priceCards.map((priceCard) => {
          return (
            <PricingCard
              key={priceCard.id}
              label={priceCard.label}
              num={priceCard.num}
              date={priceCard.date}
              status={priceCard.status}
              benefits={priceCard.benefits}
            />
          )
        })}
      </div>
    </>
  )
}

export default App