import React from "react";
import { View, Text, Button } from "react-native";
import { Consulta } from "../interfaces/consulta";
import { StatusConsulta } from "../types/statusConsultas";
import { styles } from "../styles/consultaCard.styles";

type ConsultaCardProps = {
  consulta: Consulta;
  onConfirmar?: () => void;
  onCancelar?: () => void;
};

function formatarValor(valor: number): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function formatarData(dataHora: string): string {
  const data = new Date(dataHora);
  const dia = data.toLocaleDateString("pt-BR");
  const hora = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${dia} às ${hora}`;
}

export default function ConsultaCard({
  consulta,
  onConfirmar,
  onCancelar,
}: ConsultaCardProps) {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.statusBadge,
          consulta.status === StatusConsulta.AGENDADA && styles.statusConfirmada,
          consulta.status === StatusConsulta.CANCELADA && styles.statusCancelada,
        ]}
      >
        <Text style={styles.statusTexto}>{consulta.status.toUpperCase()}</Text>
      </View>
      <View style={styles.secao}>
        <Text style={styles.label}>👨‍⚕️ Médico</Text>
        <Text style={styles.valor}>{consulta.medico.nome}</Text>
        <Text style={styles.info}>CRM: {consulta.medico.crm}</Text>
        <Text style={styles.info}>{consulta.medico.especialidade.nome}</Text>
      </View>
      <View style={styles.secao}>
        <Text style={styles.label}>👤 Paciente</Text>
        <Text style={styles.valor}>{consulta.paciente.nome}</Text>
        <Text style={styles.info}>CPF: {consulta.paciente.cpf}</Text>
        <Text style={styles.info}>Email: {consulta.paciente.email}</Text>
        {consulta.paciente.telefone && (
          <Text style={styles.info}>Tel: {consulta.paciente.telefone}</Text>
        )}
      </View>
      <View style={styles.secao}>
        <Text style={styles.label}>📅 Dados da Consulta</Text>
        <Text style={styles.valor}>Data: {formatarData(consulta.dataHora)}</Text>
        <Text style={styles.valor}>Valor: {formatarValor(consulta.valor)}</Text>
        {consulta.observacoes && (
          <Text style={styles.observacoes}>{consulta.observacoes}</Text>
        )}
      </View>
      <View style={styles.acoes}>
        {consulta.status === StatusConsulta.AGENDADA && (
          <>
            {onConfirmar && (
              <View style={styles.botaoContainer}>
                <Button
                  title="Confirmar Consulta"
                  onPress={onConfirmar}
                  color="#4CAF50"
                />
              </View>
            )}
            {onCancelar && (
              <View style={styles.botaoContainer}>
                <Button
                  title="Cancelar Consulta"
                  onPress={onCancelar}
                  color="#F44336"
                />
              </View>
            )}
          </>
        )}

        {consulta.status === StatusConsulta.CONFIRMADA && (
          <View style={styles.mensagem}>
            <Text style={styles.mensagemTexto}>
              ✓ Consulta confirmada com sucesso!
            </Text>
          </View>
        )}

        {consulta.status === StatusConsulta.CANCELADA && (
          <View style={styles.mensagemCancelada}>
            <Text style={styles.mensagemTexto}>✗ Consulta cancelada</Text>
          </View>
        )}
      </View>
    </View>
  );
}
