export function formatCurrency( currency : number ) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(currency)
}

export const multiplication = (a: number, b: number) =>  a * b