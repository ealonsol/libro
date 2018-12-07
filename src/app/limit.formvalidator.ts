import { FormControl } from '@angular/forms';
export class LimitValidator {
    static Limit(limit: Number) {
        return (control: FormControl): {[key: string]: any} => {
            const val = Number(control.value);
            if (val !== NaN && val > limit) {
//                console.log('limit', {'limit': limit, 'actualValue': val});
                return {'limit': {'limit': limit, 'actualValue': val}};
            } else {
                return null;
            }
        // tslint:disable-next-line:semicolon
        }
    }
}
