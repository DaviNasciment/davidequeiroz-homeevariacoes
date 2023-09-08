import Header from "./components/Header"
import Invoice from "./components/Invoice";
import MoreOptions from "./components/MoreOptions";
import Options from "./components/Options";
import Slider from "./components/Slider"

function App() {
  const images = [
    '/images/slider-img.jpg',
    '/images/slider-img2.jpg',
  ];

  // Altere os valores indicados no comentario para mostrar o Home II
  const objInvoice = {
    id: 'BxYCISa2yO3ASx',
    name: 'Davi',
    invoice_due_date: '2023-09-07T14:30:00Z',
    late_payment: false, // true
    late_months: 0, // 2
    invoice_price: [231.45] // [231.45, 423]
  }

  return (
    <>
      <section className="container">
        <Header />
        <Slider images={images} />
        <Invoice obj={objInvoice} />
        <Options />
      </section>
      <MoreOptions />
    </>
  )
}

export default App
