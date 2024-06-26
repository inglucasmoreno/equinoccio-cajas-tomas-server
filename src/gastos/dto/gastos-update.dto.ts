
export class GastosUpdateDTO {

  readonly numero: number;

  readonly fecha_gasto: string;

  readonly factura: string;

  readonly caja: string;

  readonly tipo_gasto: string;

  readonly observacion: string;
  
  readonly monto: number;

  readonly activo: boolean;

  readonly creatorUser: string;

  readonly updatorUser: string;

}