import BottomModal from "../BottomModal";

import { useState } from "react";

import { formatDate } from "../../utils/formatDateISO";
import { formatMoney } from "../../utils/formatMoney";

import './invoice.css';

interface IInvoice {
    id: string;
    name: string;
    invoice_due_date: string;
    late_payment: boolean;
    late_months: number;
    invoice_price: number[]
}

function Invoice({ obj }: { obj: IInvoice }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBarcode, setIsBarcode] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleBarcode = () => {
        closeModal()
        setIsBarcode(true)

        obj.late_payment = false
        obj.invoice_price = []
        obj.late_months = 0
    }

    const invoice_price_sum = obj.invoice_price.reduce(function (acumulador, valorAtual) {
        return acumulador + valorAtual;
    }, 0);

    const date = formatDate(obj.invoice_due_date)

    return (
        <div className="invoice-container">
            <BottomModal isOpen={isModalOpen} onClose={closeModal}>
                {
                    obj.late_payment ?
                        (
                            <div className="invoice-modal-content">
                                <p className="confirm-modal-text">Pagar todas as faturas em aberto?</p>
                                <p className="value-modal-text">Valor total:</p>
                                <h3 className="invoice-price">
                                    {formatMoney(invoice_price_sum)}
                                </h3>
                                <button onClick={handleBarcode} className="invoice-modal-button">Copiar código de barras</button>
                            </div>
                        )
                        :
                        (
                            <div className="invoice-modal-content">
                                <p className="confirm-modal-text">Pagar a fatura de {date.day} de {date.month}?</p>
                                <p className="value-modal-text">Valor:</p>
                                <h3 className="invoice-price">
                                    {formatMoney(invoice_price_sum)}
                                </h3>
                                <button onClick={handleBarcode} className="invoice-modal-button">Copiar código de barras</button>
                            </div>
                        )
                }
            </BottomModal>

            <p className="greeting-text">Olá, {obj.name}!</p>
            {obj.late_payment ?
                <>
                    <div className="invoice-notice"><span>Você possui {obj.late_months} faturas em aberto</span> <br /> Clique em <span>Pagar Faturas</span> regularizar sua situação...</div>
                    <button onClick={openModal} className="invoice-button">Pagar Faturas</button>
                </>
                : !isBarcode ?
                    <>
                        <p className="invoice-date-text">Fatura {date.day} de {date.month}</p>
                        <h3 className="invoice-price">
                            {formatMoney(invoice_price_sum)}
                        </h3>
                        <button onClick={openModal} className="invoice-button">Pagar Fatura</button>
                    </>
                    : obj.late_months === 0 && (
                        <div className="invoice-notice">Você não possui nenhuma fatura em aberto. <br /> <span>Suas contas estão todas em dia, parabéns!</span></div>
                    )
            }
        </div>
    );
}

export default Invoice