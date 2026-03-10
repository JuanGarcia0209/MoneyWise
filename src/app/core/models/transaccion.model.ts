export interface Transaccion {
  id?: string;
  tipo: 'ingreso' | 'gasto';
  categoria: string;
  fecha: string;
  monto: number;
  descripcion?: string;
  comprobante?: string; // base64 o url
}
