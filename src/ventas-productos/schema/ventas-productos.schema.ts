import { Schema } from 'mongoose';

export const ventasProductosSchema = new Schema({
  
  venta: {
    type: Schema.Types.ObjectId,
    ref: 'ventas',
    required: true,
  },

  producto: {
    type: Schema.Types.ObjectId,
    ref: 'productos',
    required: true,
  },

  descripcion: {
    type: String,
    required: true,
  },

  familia: {
    type: String,
    required: true,
  },

  unidad_medida: {
    type: String,
    required: true,
  },

  cantidad: {
    type: Number,
    required: true,
  },

  precio_unitario: {
    type: Number,
    required: true,
  },

  precio_total: {
    type: Number,
    required: true,
  },

  activo: {
    type: Boolean,
    default: true
  },

  creatorUser: {
    type: Schema.Types.ObjectId,
    ref: 'usuario',
    required: true,
  },

  updatorUser: {
    type: Schema.Types.ObjectId,
    ref: 'usuario',
    required: true,
  }

},{ timestamps: true, collection: 'ventas_productos' })