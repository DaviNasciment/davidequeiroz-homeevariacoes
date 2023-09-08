import { CallIcon } from "../../assets/icons/CallIcon";
import { NewspaperIcon } from "../../assets/icons/NewspaperIcon";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import Card from "../Card";

import './moreOptions.css'

function MoreOptions() {

    return (
        <div className="container-more-options">
            <div className="container">
                <h2>Mais Opções</h2>

                <div className="content-more-options">
                    <Card icon={<NewspaperIcon className="icon-more-options" />} title={"Notícias do CCG"} color={"#fff"} backgroudColor={"#06436B"} />
                    <Card icon={<CallIcon className="icon-more-options" />} title={"Contatos Importantes"} color={"#fff"} backgroudColor={"#06436B"} />
                    <Card icon={<PlusIcon className="icon-more-options" />} title={"Plano Odontológico"} color={"#fff"} backgroudColor={"#06436B"} />
                </div>
            </div>
        </div>
    )
}

export default MoreOptions;