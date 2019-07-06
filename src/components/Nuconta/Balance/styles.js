import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  padding: 0 25px;
`;

export const BankBalance = styled.View`
  flex: 5;
  margin-top: 25px;
  padding: 80px 0;
`;

export const Title = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const BankReservation = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 80px 0;
`;

export const ReservationContent = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Reservation = styled.View`
  padding-left: 20px;
`;
