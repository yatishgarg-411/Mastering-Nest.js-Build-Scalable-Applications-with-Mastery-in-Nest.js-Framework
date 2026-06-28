import { Injectable, PipeTransform, BadRequestException, ArgumentMetadata } from "@nestjs/common";

@Injectable()
export class PhoneAuthPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (metadata.type === 'body') {
            const phone = String(value?.phone ?? '').trim();
            const regex = /^\d{10}$/;
            if (!regex.test(phone)) {
                throw new BadRequestException('Invalid phone number');
            }
            return value;
        }

        if (metadata.type === 'param') {
            const id = String(value ?? '').trim();
            if (!/^\d+$/.test(id)) {
                throw new BadRequestException('Invalid id. Only digits are allowed');
            }
            return id;
        }

        return value;
    }
}