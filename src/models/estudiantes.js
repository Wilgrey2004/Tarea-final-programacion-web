const mongoose = require("mongoose");

const estudianteSchema = new mongoose.Schema({
  nombre: {
    type: string,
    required: true,
    trim: true,
  },
  apellido: {
    type: string,
    required: true,
    trim: true,
  },
});

const estudiante = mongoose.model("Estudiante", estudianteSchema);
