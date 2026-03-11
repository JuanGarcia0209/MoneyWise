import { Injectable } from '@angular/core';
import { Transaccion } from '../models/transaccion.model';
import { CATEGORIAS } from '../constants/categorias.constant';
import { ResumenFinanciero } from '../models/resumen-financiero.model';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  calcularResumen(transacciones: Transaccion[]): ResumenFinanciero {

    const totalIngresos = transacciones
      .filter(t => t.tipo === 'ingreso')
      .reduce((sum, t) => sum + t.monto, 0);

    const totalGastos = transacciones
      .filter(t => t.tipo === 'gasto')
      .reduce((sum, t) => sum + t.monto, 0);

    const saldoActual = totalIngresos - totalGastos;

    const gastosPorCategoria = CATEGORIAS.map(cat => {

      const monto = transacciones
        .filter(t => t.tipo === 'gasto' && t.categoria === cat.key)
        .reduce((sum, t) => sum + t.monto, 0);

      const porcentaje = totalGastos ? (monto / totalGastos) * 100 : 0;

      return {
        categoria: cat.key,
        monto,
        porcentaje,
        color: cat.color
      };

    });

    return {
      saldoActual,
      totalIngresos,
      totalGastos,
      gastosPorCategoria
    };

  }


  calcularBalanceMes(transacciones: Transaccion[]): number {

    const now = new Date();
    const mes = now.getMonth();
    const anio = now.getFullYear();

    const delMes = transacciones.filter(t => {

      const fecha = new Date(t.fecha);

      return fecha.getMonth() === mes && fecha.getFullYear() === anio;

    });

    const ingresos = delMes
      .filter(t => t.tipo === 'ingreso')
      .reduce((sum, t) => sum + t.monto, 0);

    const gastos = delMes
      .filter(t => t.tipo === 'gasto')
      .reduce((sum, t) => sum + t.monto, 0);

    return ingresos - gastos;

  }


  calcularPromedioGastoDiario(transacciones: Transaccion[]): number {

    const gastos = transacciones.filter(t => t.tipo === 'gasto');

    if (!gastos.length) return 0;

    const total = gastos.reduce((sum, t) => sum + t.monto, 0);

    const fechas = gastos.map(t => new Date(t.fecha).toDateString());

    const diasUnicos = new Set(fechas).size;

    return diasUnicos ? total / diasUnicos : 0;

  }


  obtenerMayorCategoria(transacciones: Transaccion[]): { categoria: string, monto: number } {

    const mapa: { [key: string]: number } = {};

    transacciones
      .filter(t => t.tipo === 'gasto')
      .forEach(t => {

        if (!mapa[t.categoria]) {
          mapa[t.categoria] = 0;
        }

        mapa[t.categoria] += t.monto;

      });

    let mayorCategoria = '';
    let mayorMonto = 0;

    Object.entries(mapa).forEach(([categoria, monto]) => {

      if (monto > mayorMonto) {
        mayorMonto = monto;
        mayorCategoria = categoria;
      }

    });

    return {
      categoria: mayorCategoria,
      monto: mayorMonto
    };

  }

  getGastosUltimos6Meses(transacciones: Transaccion[]) {

    const hoy = new Date();

    const meses = [];

    for (let i = 5; i >= 0; i--) {

      const fecha = new Date(hoy.getFullYear(), hoy.getMonth() - i, 1);

      const mes = fecha.toLocaleString('default', { month: 'short' });

      const monto = transacciones
        .filter(t => {

          const f = new Date(t.fecha);

          return (
            t.tipo === 'gasto' &&
            f.getMonth() === fecha.getMonth() &&
            f.getFullYear() === fecha.getFullYear()
          );

        })
        .reduce((sum, t) => sum + t.monto, 0);

      meses.push({ mes, monto });

    }

    return meses;

  }

}

// import { Injectable } from '@angular/core';
// import { Transaccion } from '../models/transaccion.model';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AnalyticsService {
//   constructor() {}

//   calcularSaldo(transacciones: Transaccion[]): number {
//     return transacciones.reduce((acc, t) => acc + (t.tipo === 'ingreso' ? t.monto : -t.monto), 0);
//   }

//   totalPorTipoMes(transacciones: Transaccion[], year: number, month: number, tipo?: 'gasto' | 'ingreso'): number {
//     return transacciones
//       .filter(t => {
//         const d = new Date(t.fecha);
//         return d.getFullYear() === year && d.getMonth() === month && (!tipo || t.tipo === tipo);
//       })
//       .reduce((acc, t) => acc + t.monto, 0);
//   }

//   gastosPorCategoria(transacciones: Transaccion[], year?: number, month?: number) {
//     const result: { [categoria: string]: number } = {};
//     const list = transacciones.filter(t => t.tipo === 'gasto' && (year === undefined || (new Date(t.fecha).getFullYear() === year && new Date(t.fecha).getMonth() === month)));
//     for (const t of list) {
//       result[t.categoria] = (result[t.categoria] || 0) + t.monto;
//     }
//     return result;
//   }
// }
