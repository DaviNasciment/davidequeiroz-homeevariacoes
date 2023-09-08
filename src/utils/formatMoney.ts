export function formatMoney(num: number) {
    const format = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num)

    return format;
}