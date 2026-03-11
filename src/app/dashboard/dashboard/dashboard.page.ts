import { Component, OnInit } from '@angular/core';
import { TransaccionService } from '../../core/services/transaccion.service';
import { AnalyticsService } from '../../core/services/analitics.service';
import { ResumenFinanciero } from '../../core/models/resumen-financiero.model';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Transaccion } from '../../core/models/transaccion.model';

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

  balanceMes = 0;
  promedioGastoDiario = 0;

  mayorCategoria = '';
  mayorCategoriaMonto = 0;

  ultimasTransacciones: Transaccion[] = [];
  gastosUltimosMeses: any[] = [];

  constructor(
    private transaccionService: TransaccionService,
    private analyticsService: AnalyticsService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

    this.transaccionService.transacciones$.subscribe(transacciones => {

      this.resumen = this.analyticsService.calcularResumen(transacciones);

      this.balanceMes = this.analyticsService.calcularBalanceMes(transacciones);

      this.promedioGastoDiario = this.analyticsService.calcularPromedioGastoDiario(transacciones);

      const mayor = this.analyticsService.obtenerMayorCategoria(transacciones);

      this.mayorCategoria = mayor.categoria;
      this.mayorCategoriaMonto = mayor.monto;

      this.ultimasTransacciones = [...transacciones]
        .sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
        .slice(0, 5);

        this.gastosUltimosMeses =
        this.analyticsService.getGastosUltimos6Meses(transacciones);
    });

  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

}
