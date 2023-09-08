import { BarcodeIcon } from "../../assets/icons/BarcodeIcon";
import { CalendarIcon } from "../../assets/icons/CalendarIcon";
import { DigitalCardIcon } from "../../assets/icons/DigitalCardIcon";
import Card from "../Card";
import './options.css'

function Options() {
    return (
        <div className="container-options">
            <Card icon={<CalendarIcon className="icon-options" />} title={"Agendar Consulta"} color={"#06436B"} backgroudColor={"#CCDCEA"} />
            <Card icon={<BarcodeIcon className="icon-options" />} title={"Minhas Faturas"} color={"#06436B"} backgroudColor={"#CCDCEA"} />
            <Card icon={<DigitalCardIcon className="icon-options" />} title={"Carteirinha Digital"} color={"#06436B"} backgroudColor={"#CCDCEA"} />
        </div>
    );
};

export default Options;