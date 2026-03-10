import { Component, OnInit } from '@angular/core';
import { TransaccionService } from '../../core/services/transaccion.service';
import { AnalyticsService } from '../../core/services/analitics.service';
import { ResumenFinanciero } from '../../core/models/resumen-financiero.model';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {
  resumen: ResumenFinanciero = {
    saldoActual: 0,
    totalIngresos: 0,
    totalGastos: 0,
    gastosPorCategoria: []
  };

  constructor(
    private transaccionService: TransaccionService,
    private analyticsService: AnalyticsService
    ,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.transaccionService.transacciones$.subscribe(transacciones => {
      this.resumen = this.analyticsService.calcularResumen(transacciones);
    });
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
