import { Medico } from "./medico";
import { Paciente } from "../types/paciente";
import { StatusConsulta } from "../types/statusConsultas";

export interface Consulta {
  id: number;
  medico: Medico;
  paciente: Paciente;
  dataHora: string;
  valor: number;
  status: StatusConsulta;
  observacoes?: string;
}