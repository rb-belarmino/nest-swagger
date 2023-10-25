import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    description: 'Nome do Colaborador',
  })
  name: string;

  @ApiProperty({
    description: 'Email corporativo do Colaborador',
  })
  email: string;

  @ApiProperty({
    description: 'Data de Nascimento',
  })
  datebirth: string;
}
