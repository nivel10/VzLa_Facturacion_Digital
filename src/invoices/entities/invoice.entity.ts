export class Invoice {
    success: boolean;
    message: string;
    invoice_errors: [];
    invoice_list_success: InvoiceListSuccess[];
}

class InvoiceListSuccess {
    invoice_number: string;
    control_number: string;
    invoice_pdf: string;
}