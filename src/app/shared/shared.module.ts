import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

// Pipes
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

// Componentes
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { DashboardCardComponent } from './components/dashboard/dashboard-card/dashboard-card.component';
import { ProgressBarCategoryComponent } from './components/dashboard/progress-bar-category/progress-bar-category.component';
import { TransactionItemComponent } from './components/transactions/transaction-item/transaction-item.component';
import { TransactionDetailComponent } from './components/transactions/transaction-detail/transaction-detail.component';
import { TransactionFormComponent } from './components/transactions/transaction-form/transaction-form.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { PhotoSelectorComponent } from './components/photo-selector/photo-selector.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { CategoryBadgeComponent } from './components/categories-monto/category-badge/category-badge.component';
import { CategoryIconComponent } from './components/categories-monto/category-icon/category-icon.component';
import { AmountDisplayComponent } from './components/categories-monto/amount-display/amount-display.component';
import { InputFieldComponent } from './components/form-fields/input-field/input-field.component';
import { SelectFieldComponent } from './components/form-fields/select-field/select-field.component';
import { DateFieldComponent } from './components/form-fields/date-field/date-field.component';
import { FilterByTypePipe } from './pipes/filter-type.pipe';
import { FilterByCategoryPipe } from './pipes/filter-category.pipe';
import { SearchByTextPipe } from './pipes/search-text.pipe';
import { BarChartComponent } from './components/dashboard/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/dashboard/pie-chart/pie-chart.component';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [
    //pipes
    CurrencyFormatPipe,
    DateFormatPipe,
    FilterByTypePipe,
    FilterByCategoryPipe,
    SearchByTextPipe,
    //components
    EmptyStateComponent,
    DashboardCardComponent,
    ProgressBarCategoryComponent,
    TransactionItemComponent,
    TransactionDetailComponent,
    TransactionFormComponent,
    FilterBarComponent,
    PhotoSelectorComponent,
    PhotoPreviewComponent,
    CategoryBadgeComponent,
    CategoryIconComponent,
    AmountDisplayComponent,
    InputFieldComponent,
    SelectFieldComponent,
    DateFieldComponent,
    BarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BaseChartDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    // Pipes
    CurrencyFormatPipe,
    DateFormatPipe,
    FilterByTypePipe,
    FilterByCategoryPipe,
    SearchByTextPipe,
    // Componentes
    EmptyStateComponent,
    DashboardCardComponent,
    ProgressBarCategoryComponent,
    TransactionItemComponent,
    TransactionDetailComponent,
    TransactionFormComponent,
    FilterBarComponent,
    PhotoSelectorComponent,
    PhotoPreviewComponent,
    CategoryBadgeComponent,
    CategoryIconComponent,
    AmountDisplayComponent,
    InputFieldComponent,
    SelectFieldComponent,
    DateFieldComponent,
    BarChartComponent,
    PieChartComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
