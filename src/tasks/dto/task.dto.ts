import { TaskStatus } from '../task.entity';
import {
    IsIn,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';
export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    title: string;

    @IsString()
    description: string;
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    @IsIn(Object.values(TaskStatus))
    status?: TaskStatus;
}
