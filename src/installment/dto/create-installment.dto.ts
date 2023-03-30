export class CreateInstallmentDto {
    installment_number: number
    otal_in_cents: number
    due_date: Date
    date_pay: Date
    InstallmentStatus: string
    voucher_of_payment: number
    
}
