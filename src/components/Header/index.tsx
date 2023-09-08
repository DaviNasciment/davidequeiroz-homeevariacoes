import { ArrowLeftIcon } from '../../assets/icons/ArrowLeftIcon';
import { CCGLogoIcon } from '../../assets/icons/CCGLogoIcon';
import { GearIcon } from '../../assets/icons/GearIcon';
import './header.css';

function Header() {

    return (
        <div>
            <div>
                <ArrowLeftIcon />
            </div>
            <div className="logo-and-settings">
                <CCGLogoIcon />
                <GearIcon />
            </div>
        </div>
    );
}

export default Header