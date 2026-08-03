export enum StatusConsulta {
  AGENDADA = "AGENDADA",
  CONFIRMADA = "CONFIRMADA",
  CANCELADA = "CANCELADA",
  REALIZADA = "REALIZADA",
}

export const StatusConsultaDescricao: Record<StatusConsulta, string> = {
  [StatusConsulta.AGENDADA]: "Agendada",
  [StatusConsulta.CONFIRMADA]: "Confirmada",
  [StatusConsulta.CANCELADA]: "Cancelada",
  [StatusConsulta.REALIZADA]: "Realizada",
};

export function getStatusConsultaDescricao(status: StatusConsulta): string {
  return StatusConsultaDescricao[status];
}