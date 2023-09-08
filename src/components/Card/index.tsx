import './card.css'

interface ICard {
    icon: React.ReactNode;
    title: string;
    color: string;
    backgroudColor: string;
}

function Card({ icon, title, color, backgroudColor }: ICard) {
    return (
        <div className="content-card" style={{ color: `${color}`, background: `${backgroudColor}` }}>
            <span>{icon}</span>
            <p>{title}</p>
        </div>
    );
};

export default Card;