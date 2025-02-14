import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { Configuration } from './configuration/configuration';
import { InvoicesModule } from './invoices/invoices.module';
import { DispatchGuideModule } from './dispatch-guides/dispatch-guides.module';
import { TaxDocumentsModule } from './tax-documents/tax-documents.module';
import { BanksModule } from './banks/banks.module';
import { PaymentMethodsModule } from './payment-methods/payment-methods.module';
import { PartialCreditNotesModule } from './partial-credit-notes/partial-credit-notes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
    }),
    Configuration,
    AuthModule,
    TaxDocumentsModule,
    BanksModule,
    PaymentMethodsModule,
    InvoicesModule,
    DispatchGuideModule,
    PartialCreditNotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
