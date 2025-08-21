import { IsUUID } from 'class-validator';

export class OffboardUserDto {
  @IsUUID()
  id: string;
}
