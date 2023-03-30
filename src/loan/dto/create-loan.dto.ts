export class CreateLoanDto {
    number_of_installments: number
    total_in_cents: number
    LoanStatus: string
    due_day: number
    interest_rate: number
    installment_value_in_cents: number
    start_date: Date  
}
